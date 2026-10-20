import React, { useState, useMemo } from 'react';
import { 
  X, 
  User, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Clock,
  Download, 
  Check, 
  AlertCircle,
  Stethoscope,
  Building2,
  CalendarDays
} from 'lucide-react';
import html2canvas from 'html2canvas';
import confetti from 'canvas-confetti';
import { useApp } from '../../context/AppContext';
import { Appointment } from '../../types';

interface DaySlotInfo {
  date: string;
  dayName: string;
  dayNumber: number;
  month: string;
  formattedDate: string;
  status: 'available' | 'limited' | 'full';
  seatsLeft: number;
}

const TIME_SLOTS = [
  // Morning
  { slot: '10:00 AM – 10:30 AM', period: 'Morning', available: true },
  { slot: '10:30 AM – 11:00 AM', period: 'Morning', available: true },
  { slot: '11:00 AM – 11:30 AM', period: 'Morning', available: true },
  { slot: '11:30 AM – 12:00 PM', period: 'Morning', available: true },
  // Afternoon
  { slot: '12:30 PM – 01:00 PM', period: 'Afternoon', available: true },
  { slot: '02:00 PM – 02:30 PM', period: 'Afternoon', available: true },
  { slot: '03:00 PM – 03:30 PM', period: 'Afternoon', available: true },
  { slot: '04:00 PM – 04:30 PM', period: 'Afternoon', available: true },
  // Evening
  { slot: '05:00 PM – 05:30 PM', period: 'Evening', available: true },
  { slot: '06:00 PM – 06:30 PM', period: 'Evening', available: true },
  { slot: '07:00 PM – 07:30 PM', period: 'Evening', available: true },
  { slot: '07:30 PM – 08:00 PM', period: 'Evening', available: true },
];

export const BookingModal: React.FC = () => {
  const { 
    t,
    language,
    isBookingOpen, 
    setIsBookingOpen, 
    treatments, 
    doctors, 
    clinicBranches,
    selectedTreatmentIdForBooking,
    setSelectedTreatmentIdForBooking,
    selectedDoctorIdForBooking,
    setSelectedDoctorIdForBooking,
    hospitalStatus,
    addAppointment,
    currencySymbol,
    convertPrice
  } = useApp();

  // Wizard Step: 1 = Select Services, 2 = Details & Slots, 3 = Confirmation & Receipt
  const [step, setStep] = useState<number>(1);

  // Step 1: Services & Patient Type
  const [patientType, setPatientType] = useState<'new' | 'old'>('new');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(selectedTreatmentIdForBooking || '');
  const [selectedServicePrice, setSelectedServicePrice] = useState<number>(1000);
  const [selectedServiceName, setSelectedServiceName] = useState<string>('Standard Consultation');
  const [consultationType, setConsultationType] = useState<'in-person' | 'virtual'>('in-person');

  // Step 2: Patient Details & Slot Selection
  const [patientName, setPatientName] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [patientLocation, setPatientLocation] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<string>('11:00 AM – 11:30 AM');
  const [isExporting, setIsExporting] = useState<boolean>(false);

  // Generate 10-day rolling window
  const tenDays = useMemo<DaySlotInfo[]>(() => {
    const days: DaySlotInfo[] = [];
    const today = new Date();
    
    for (let i = 0; i < 10; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const dateStr = d.toISOString().split('T')[0];
      
      // Slot capacity logic
      let status: 'available' | 'limited' | 'full' = 'available';
      let seatsLeft = 14;

      if (i === 0) {
        status = 'limited';
        seatsLeft = 2;
      } else if (i === 4 || i === 8) {
        status = 'limited';
        seatsLeft = 3;
      } else if (i === 6) {
        // Marked fully booked or closed
        status = 'full';
        seatsLeft = 0;
      }

      days.push({
        date: dateStr,
        dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
        dayNumber: d.getDate(),
        month: d.toLocaleDateString('en-US', { month: 'short' }),
        formattedDate: d.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
        status,
        seatsLeft
      });
    }
    return days;
  }, []);

  const [selectedDate, setSelectedDate] = useState<string>(tenDays[0]?.date || '');

  // Confirmed appointment state
  const [confirmedAppointment, setConfirmedAppointment] = useState<Appointment | null>(null);

  if (!isBookingOpen) return null;

  const handleClose = () => {
    setIsBookingOpen(false);
    setStep(1);
    setConfirmedAppointment(null);
    setSelectedTreatmentIdForBooking(null);
    setSelectedDoctorIdForBooking(null);
  };

  const handleSelectService = (id: string, name: string, price: number) => {
    if (selectedServiceId === id) {
      // Toggle off -> standard consultation
      setSelectedServiceId('');
      setSelectedServiceName('Standard Consultation');
      setSelectedServicePrice(consultationType === 'virtual' ? 1500 : 1000);
    } else {
      setSelectedServiceId(id);
      setSelectedServiceName(name);
      setSelectedServicePrice(price);
    }
  };

  const handleStep1Next = () => {
    setStep(2);
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim()) {
      alert('Please enter patient full name.');
      return;
    }
    if (!patientPhone.trim() || patientPhone.trim().length < 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    const tokenNum = Math.floor(10 + Math.random() * 40);
    const estTime = `${selectedSlot.split('–')[0]?.trim() || '10:30 AM'} (Estimated Queue Window)`;

    const appt = addAppointment({
      patientName: patientName.trim(),
      patientPhone: patientPhone.trim(),
      patientEmail: '',
      patientAge: 30,
      gender: 'Male',
      clinicBranchId: clinicBranches[0]?.id || 'lucknow-flagship',
      doctorId: selectedDoctorIdForBooking || doctors[0]?.id || 'dr-himangi-dubey',
      treatmentId: selectedServiceId || 'consultation',
      consultationType,
      date: selectedDate,
      timeSlot: selectedSlot,
      country: 'India',
      isNewPatient: patientType === 'new',
      patientType,
      patientLocation: patientLocation.trim() || 'Sitapur / Lucknow',
      serviceName: selectedServiceName,
      servicePrice: selectedServicePrice,
      estimatedTokenTime: `Token #${tokenNum} · ${estTime}`
    });

    setConfirmedAppointment(appt);
    setStep(3);

    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 }
    });
  };

  const handleDownloadSlipJpg = async () => {
    const slipElement = document.getElementById('appointment-receipt-slip');
    if (!slipElement) return;

    try {
      setIsExporting(true);
      const canvas = await html2canvas(slipElement, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#0a1d30'
      });
      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      const link = document.createElement('a');
      link.href = imgData;
      link.download = `Appointment_Receipt_${confirmedAppointment?.id || 'slip'}.jpg`;
      link.click();
    } catch (err) {
      console.error('Failed to generate JPG slip:', err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#07192b] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-6">
        
        {/* ========================================================================= */}
        {/* HEADER: "Booking Specialist Appointment"                                 */}
        {/* ========================================================================= */}
        <div className="bg-gradient-to-r from-[#091e34] via-[#0c2b4c] to-[#07192b] text-white p-5 sm:p-6 border-b border-teal-900/50 relative">
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 text-[11px] font-black uppercase tracking-widest text-teal-400 mb-1">
            <span>{t('bookingModal.campusEyebrow')}</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white">
            {t('bookingModal.modalTitle')}
          </h2>
          <p className="text-xs text-slate-300 mt-0.5">
            {t('bookingModal.modalSubtitle')}
          </p>

          {/* 3-Step Wizard Indicator */}
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-700/60 max-w-md">
            {[
              { num: 1, label: t('bookingModal.step1') },
              { num: 2, label: t('bookingModal.step2') },
              { num: 3, label: t('bookingModal.step3') },
            ].map(s => {
              const isActive = step === s.num;
              const isDone = step > s.num;
              return (
                <div key={s.num} className="flex items-center space-x-2">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-900 shadow-md ring-2 ring-teal-400/30'
                      : isDone
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}>
                    {isDone ? <Check className="w-3.5 h-3.5" /> : s.num}
                  </div>
                  <span className={`text-xs font-semibold hidden sm:inline ${
                    isActive ? 'text-white' : isDone ? 'text-teal-300' : 'text-slate-400'
                  }`}>
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* STEP 1: SELECT SERVICES (PATIENT TYPE + OPTIONAL SERVICE LIST)            */}
        {/* ========================================================================= */}
        {step === 1 && (
          <div className="p-5 sm:p-7 space-y-6">
            
            {/* 1. Patient Type: Radio selection between Old Patient and New Patient */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center justify-between">
                <span>{t('bookingModal.patientTypeLabel')}</span>
                <span className="text-[10px] text-teal-600 dark:text-teal-400 font-semibold">{t('bookingModal.singleChoice')}</span>
              </label>

              <div className="grid grid-cols-2 gap-3">
                <label 
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center space-x-3 ${
                    patientType === 'new'
                      ? 'border-teal-600 bg-teal-50/60 dark:bg-teal-950/40 text-teal-900 dark:text-teal-200 shadow-sm'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <input 
                    type="radio" 
                    name="patientType" 
                    value="new" 
                    checked={patientType === 'new'}
                    onChange={() => setPatientType('new')}
                    className="text-teal-600 focus:ring-teal-500"
                  />
                  <div>
                    <div className="text-xs font-bold">{t('bookingModal.newPatient')}</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">{t('bookingModal.newPatientDesc')}</div>
                  </div>
                </label>

                <label 
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center space-x-3 ${
                    patientType === 'old'
                      ? 'border-teal-600 bg-teal-50/60 dark:bg-teal-950/40 text-teal-900 dark:text-teal-200 shadow-sm'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <input 
                    type="radio" 
                    name="patientType" 
                    value="old" 
                    checked={patientType === 'old'}
                    onChange={() => setPatientType('old')}
                    className="text-teal-600 focus:ring-teal-500"
                  />
                  <div>
                    <div className="text-xs font-bold">{t('bookingModal.oldPatient')}</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">{t('bookingModal.oldPatientDesc')}</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Consultation Mode Toggle */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
                {t('bookingModal.consultationMode')}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setConsultationType('in-person');
                    if (!selectedServiceId) setSelectedServicePrice(1000);
                  }}
                  className={`p-3 rounded-2xl border text-left text-xs font-bold transition-all ${
                    consultationType === 'in-person'
                      ? 'border-teal-600 bg-teal-50/50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300'
                      : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <div className="flex items-center space-x-1.5">
                    <Building2 className="w-4 h-4 text-teal-600" />
                    <span>{t('bookingModal.inClinic')}</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{t('bookingModal.inClinicDesc')}</div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setConsultationType('virtual');
                    if (!selectedServiceId) setSelectedServicePrice(1500);
                  }}
                  className={`p-3 rounded-2xl border text-left text-xs font-bold transition-all ${
                    consultationType === 'virtual'
                      ? 'border-teal-600 bg-teal-50/50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300'
                      : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <div className="flex items-center space-x-1.5">
                    <Stethoscope className="w-4 h-4 text-teal-600" />
                    <span>{t('bookingModal.virtual')}</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{t('bookingModal.virtualDesc')}</div>
                </button>
              </div>
            </div>

            {/* 2. Service Selection (Optional): Selectable list of dental/hospital services with clear prices */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  {t('bookingModal.treatmentLabel')}
                </label>
                <span className="text-[10px] text-slate-400">{t('bookingModal.treatmentSub')}</span>
              </div>

              <div className="max-h-56 overflow-y-auto space-y-2 pr-1 rounded-2xl border border-slate-200 dark:border-slate-800 p-2">
                {/* Standard general consultation option */}
                <div 
                  onClick={() => {
                    setSelectedServiceId('');
                    setSelectedServiceName('Standard Dental Consultation');
                    setSelectedServicePrice(consultationType === 'virtual' ? 1500 : 1000);
                  }}
                  className={`p-3 rounded-xl cursor-pointer border transition-all flex items-center justify-between ${
                    !selectedServiceId
                      ? 'bg-teal-50/70 dark:bg-teal-950/50 border-teal-500 text-teal-900 dark:text-teal-200 font-bold'
                      : 'bg-white dark:bg-slate-900/60 border-slate-100 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      {t('bookingModal.standardConsult')}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      {t('bookingModal.standardConsultDesc')}
                    </div>
                  </div>
                  <span className="text-xs font-bold text-teal-600 dark:text-teal-400">
                    {currencySymbol()}{convertPrice(consultationType === 'virtual' ? 1500 : 1000).toLocaleString()}
                  </span>
                </div>

                {/* Procedures from treatments */}
                {treatments.map(tItem => {
                  const isSelected = selectedServiceId === tItem.id;
                  return (
                    <div 
                      key={tItem.id}
                      onClick={() => handleSelectService(tItem.id, tItem.title, tItem.startingPriceInr)}
                      className={`p-3 rounded-xl cursor-pointer border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-teal-50/70 dark:bg-teal-950/50 border-teal-500 text-teal-900 dark:text-teal-200 font-bold'
                          : 'bg-white dark:bg-slate-900/60 border-slate-100 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="pr-3">
                        <div className="text-xs font-bold text-slate-900 dark:text-white">
                          {tItem.title}
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">
                          {tItem.shortDesc}
                        </div>
                      </div>
                      <span className="text-xs font-bold text-teal-600 dark:text-teal-400 whitespace-nowrap">
                        {language === 'hi' ? 'शुरुआती ' : 'From '}{currencySymbol()}{convertPrice(tItem.startingPriceInr).toLocaleString()}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 1 Actions: Skip or Next */}
            <div className="pt-2 flex items-center justify-between gap-3 border-t border-slate-200 dark:border-slate-800">
              <button
                type="button"
                onClick={handleStep1Next}
                className="text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white underline transition-colors"
              >
                {t('bookingModal.skipAndProceed')}
              </button>

              <button
                type="button"
                onClick={handleStep1Next}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-bold text-xs shadow-md shadow-teal-500/20 active:scale-95 transition-all flex items-center space-x-1.5"
              >
                <span>{t('bookingModal.nextBtn')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* STEP 2: PATIENT DETAILS & 10-DAY ROLLING SLOT SELECTION                   */}
        {/* ========================================================================= */}
        {step === 2 && (
          <form onSubmit={handleStep2Submit} className="p-5 sm:p-7 space-y-6">
            
            {/* Input Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center space-x-1">
                  <User className="w-3.5 h-3.5 text-teal-600" />
                  <span>{t('bookingModal.fullName')}</span>
                </label>
                <input 
                  type="text"
                  placeholder={t('bookingModal.fullNamePlaceholder')}
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-teal-500"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center space-x-1">
                  <Phone className="w-3.5 h-3.5 text-teal-600" />
                  <span>{t('bookingModal.phone')}</span>
                </label>
                <input 
                  type="tel"
                  placeholder={t('bookingModal.phonePlaceholder')}
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  required
                  maxLength={10}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-teal-500"
                />
              </div>

              {/* Location / City */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-teal-600" />
                  <span>{t('bookingModal.location')}</span>
                </label>
                <input 
                  type="text"
                  placeholder={t('bookingModal.locationPlaceholder')}
                  value={patientLocation}
                  onChange={(e) => setPatientLocation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-teal-500"
                />
              </div>
            </div>

            {/* Date Selection: 10-Day Rolling Window */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center space-x-1.5">
                  <CalendarDays className="w-4 h-4 text-teal-600" />
                  <span>{t('bookingModal.selectDate')}</span>
                </label>

                {/* Legend: Green, Red, Grey */}
                <div className="flex items-center space-x-3 text-[10px] text-slate-500">
                  <span className="flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>{t('bookingModal.legendAvailable')}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span>{t('bookingModal.legendLimited')}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-slate-400" />
                    <span>{t('bookingModal.legendFull')}</span>
                  </span>
                </div>
              </div>

              {/* Rolling 10 Days Grid */}
              <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5">
                {tenDays.map((d) => {
                  const isSelected = selectedDate === d.date;
                  const isFull = d.status === 'full';
                  const isLimited = d.status === 'limited';

                  return (
                    <button
                      key={d.date}
                      type="button"
                      disabled={isFull}
                      onClick={() => !isFull && setSelectedDate(d.date)}
                      title={isFull ? 'Full · No online slots remaining' : `${d.seatsLeft} seats remaining`}
                      className={`relative p-2 rounded-xl text-center border transition-all ${
                        isFull
                          ? 'bg-slate-100 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-400 cursor-not-allowed opacity-50'
                          : isSelected
                          ? 'bg-teal-600 border-teal-600 text-white shadow-md ring-2 ring-teal-400/30'
                          : isLimited
                          ? 'bg-rose-50/60 dark:bg-rose-950/20 border-rose-300 dark:border-rose-900/60 text-rose-900 dark:text-rose-200 hover:border-rose-500'
                          : 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-900/60 text-emerald-900 dark:text-emerald-200 hover:border-emerald-500'
                      }`}
                    >
                      <div className="text-[10px] uppercase font-bold">{d.dayName}</div>
                      <div className="text-sm font-black my-0.5">{d.dayNumber}</div>
                      <div className="text-[9px] font-medium opacity-80">{d.month}</div>

                      {/* Status indicator pip */}
                      <span className={`absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full ${
                        isFull 
                          ? 'bg-slate-400' 
                          : isLimited 
                          ? 'bg-rose-500 animate-pulse' 
                          : 'bg-emerald-500'
                      }`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slot Picker */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5 text-teal-600" />
                <span>{t('bookingModal.selectSlot')}</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {TIME_SLOTS.map((tSlot) => (
                  <button
                    key={tSlot.slot}
                    type="button"
                    onClick={() => setSelectedSlot(tSlot.slot)}
                    className={`py-2 px-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${
                      selectedSlot === tSlot.slot
                        ? 'bg-teal-600 text-white border-teal-600 shadow-sm'
                        : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-teal-500'
                    }`}
                  >
                    {tSlot.slot.split('–')[0]?.trim()}
                  </button>
                ))}
              </div>
            </div>

            {/* Summary Tag */}
            <div className="p-3 rounded-2xl bg-teal-50/60 dark:bg-teal-950/30 border border-teal-200/60 dark:border-teal-900/60 flex items-center justify-between text-xs">
              <div className="space-y-0.5">
                <span className="font-bold text-teal-900 dark:text-teal-200">
                  {patientType === 'new' ? t('bookingModal.newPatient') : t('bookingModal.oldPatient')} · {selectedServiceName}
                </span>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">
                  {language === 'hi' ? 'चुनी गई तारीख:' : 'Selected Date:'} {selectedDate} · {language === 'hi' ? 'स्लॉट:' : 'Slot:'} {selectedSlot}
                </div>
              </div>
              <span className="text-sm font-black text-teal-700 dark:text-teal-300">
                {currencySymbol()}{convertPrice(selectedServicePrice).toLocaleString()}
              </span>
            </div>

            {/* Step 2 Actions */}
            <div className="pt-2 flex items-center justify-between gap-3 border-t border-slate-200 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center space-x-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{t('bookingModal.backBtn')}</span>
              </button>

              <button
                type="submit"
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-teal-500/25 active:scale-95 transition-all flex items-center space-x-1.5"
              >
                <span>{t('bookingModal.confirmBtn')}</span>
                <Check className="w-4 h-4 ml-1" />
              </button>
            </div>

          </form>
        )}

        {/* ========================================================================= */}
        {/* STEP 3: CONFIRMATION & RECEIPT SLIP (EXPORTABLE AS JPG)                   */}
        {/* ========================================================================= */}
        {step === 3 && confirmedAppointment && (
          <div className="p-5 sm:p-7 space-y-6">
            
            {/* Top Success Banner */}
            <div className="text-center space-y-1">
              <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#091e34] dark:text-white">
                {t('bookingModal.confirmedHeadline')}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t('bookingModal.confirmedSubhead')}
              </p>
            </div>

            {/* Exportable Receipt Slip Element */}
            <div 
              id="appointment-receipt-slip"
              className="bg-[#091e34] text-white rounded-3xl p-6 sm:p-7 border border-teal-700/50 shadow-2xl space-y-5"
            >
              {/* Slip Header */}
              <div className="flex items-start justify-between border-b border-slate-700/80 pb-4">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-teal-400">
                    HOPE DENTAL HOSPITAL & WELLNESS CENTRE
                  </div>
                  <h4 className="text-lg font-black text-white mt-0.5">
                    {t('bookingModal.slipTitle')}
                  </h4>
                  <p className="text-[10px] text-slate-400">
                    Sadrauna Road, Para Rd, Lucknow – 226011
                  </p>
                </div>

                <div className="text-right">
                  <div className="text-xs font-mono font-bold text-teal-300">
                    {confirmedAppointment.id}
                  </div>
                  <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                    {t('bookingModal.statusConfirmed')}
                  </span>
                </div>
              </div>

              {/* Patient & Booking Details Grid */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">{t('bookingModal.patientNameLabel')}</span>
                  <div className="font-bold text-white text-sm">{confirmedAppointment.patientName}</div>
                  <div className="text-[11px] text-slate-300">
                    {confirmedAppointment.patientPhone} · {confirmedAppointment.patientLocation || 'Sitapur'}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">{t('bookingModal.patientTypeSummary')}</span>
                  <div className="font-bold text-white capitalize">
                    {confirmedAppointment.patientType === 'old' ? (language === 'hi' ? 'पुराने मरीज़ (फॉलो-अप)' : 'Old Patient (Follow-up)') : (language === 'hi' ? 'नए मरीज़' : 'New Patient')}
                  </div>
                  <div className="text-[11px] text-teal-300 capitalize">{confirmedAppointment.consultationType} Consultation</div>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">{t('bookingModal.dateSlotLabel')}</span>
                  <div className="font-bold text-white">{confirmedAppointment.date}</div>
                  <div className="text-[11px] text-teal-300">{confirmedAppointment.timeSlot}</div>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">{t('bookingModal.treatmentLabelSummary')}</span>
                  <div className="font-bold text-white">{confirmedAppointment.serviceName || (language === 'hi' ? 'मानक दंत परामर्श' : 'Standard Consultation')}</div>
                  <div className="text-[11px] text-emerald-400 font-bold">
                    {t('bookingModal.feeLabel')} ₹{confirmedAppointment.servicePrice || confirmedAppointment.amount || 1000}
                  </div>
                </div>
              </div>

              {/* Estimated Queue Token Time & Hospital Opening Hours */}
              <div className="pt-4 border-t border-slate-700/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-2xl bg-[#0c2742] border border-teal-900/60">
                  <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider block">
                    {t('bookingModal.estimatedQueue')}
                  </span>
                  <div className="text-xs font-bold text-white mt-0.5">
                    {confirmedAppointment.estimatedTokenTime || 'Token #14 · Est. 10:45 AM'}
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-[#0c2742] border border-teal-900/60">
                  <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider block">
                    {t('bookingModal.hospitalHours')}
                  </span>
                  <div className="text-xs font-bold text-white mt-0.5">
                    {hospitalStatus.operatingHours}
                  </div>
                </div>
              </div>

              {/* Arrival Advisory Notice */}
              <div className="p-3 rounded-2xl bg-amber-950/40 border border-amber-500/30 flex items-start space-x-2 text-xs text-amber-200">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed text-[11px]">
                  <strong>{t('bookingModal.patientAdvisoryTitle')}</strong> {t('bookingModal.patientAdvisoryText')}
                </p>
              </div>
            </div>

            {/* Slip Action Buttons: Download JPG slip or Close */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-200 dark:border-slate-800">
              <button
                type="button"
                onClick={handleDownloadSlipJpg}
                disabled={isExporting}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-extrabold text-xs shadow-md shadow-teal-500/20 active:scale-95 transition-all flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>{isExporting ? t('bookingModal.generatingJpg') : t('bookingModal.downloadJpg')}</span>
              </button>

              <button
                type="button"
                onClick={handleClose}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold text-xs transition-colors"
              >
                {t('bookingModal.doneBtn')}
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
