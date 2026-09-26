import React, { useState } from 'react';
import { 
  X, 
  User, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  MapPin,
  Building2,
  Video,
  Download,
  Share2,
  Upload,
  Globe,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useApp } from '../../context/AppContext';
import { Appointment } from '../../types';
import { generateAppointmentPDF } from '../../utils/pdfGenerator';

const TIME_SLOTS = [
  // Morning
  { slot: '09:30 AM – 10:00 AM', period: 'Morning', available: true },
  { slot: '10:00 AM – 10:30 AM', period: 'Morning', available: true },
  { slot: '10:30 AM – 11:00 AM', period: 'Morning', available: false },
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
  { slot: '07:00 PM – 07:30 PM', period: 'Evening', available: false },
  { slot: '08:00 PM – 08:30 PM', period: 'Evening', available: true },
];

export const BookingModal: React.FC = () => {
  const { 
    isBookingOpen, 
    setIsBookingOpen, 
    treatments, 
    doctors, 
    clinicBranches,
    selectedBranchForBooking,
    setSelectedBranchForBooking,
    selectedTreatmentIdForBooking,
    setSelectedTreatmentIdForBooking,
    selectedDoctorIdForBooking,
    setSelectedDoctorIdForBooking,
    addAppointment
  } = useApp();

  const [step, setStep] = useState<number>(1);
  const [selectedBranch, setSelectedBranch] = useState<string>(selectedBranchForBooking || clinicBranches[0]?.id || 'lucknow-flagship');
  const [selectedTreatment, setSelectedTreatment] = useState<string>(selectedTreatmentIdForBooking || treatments[0]?.id || 'dental-implants');
  const [selectedDoctor, setSelectedDoctor] = useState<string>(selectedDoctorIdForBooking || doctors[0]?.id || 'dr-himangi-dubey');
  const [consultationType, setConsultationType] = useState<'in-person' | 'virtual'>('in-person');
  
  // Date & Slot
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [selectedDate, setSelectedDate] = useState<string>(tomorrow.toISOString().split('T')[0]);
  const [selectedSlot, setSelectedSlot] = useState<string>('11:00 AM – 11:30 AM');

  // Patient Info
  const [patientName, setPatientName] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [patientEmail, setPatientEmail] = useState<string>('');
  const [patientAge, setPatientAge] = useState<number>(30);
  const [gender, setGender] = useState<'Male' | 'Female' | 'Other'>('Male');
  const [country, setCountry] = useState<string>('India');
  const [isNewPatient] = useState<boolean>(true);
  const [notes, setNotes] = useState<string>('');
  const [xRayAttached, setXRayAttached] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>('');
  const [confirmedAppointment, setConfirmedAppointment] = useState<Appointment | null>(null);

  const [prevBranch, setPrevBranch] = useState(selectedBranchForBooking);
  if (selectedBranchForBooking !== prevBranch) {
    setPrevBranch(selectedBranchForBooking);
    if (selectedBranchForBooking) setSelectedBranch(selectedBranchForBooking);
  }

  const [prevTreatment, setPrevTreatment] = useState(selectedTreatmentIdForBooking);
  if (selectedTreatmentIdForBooking !== prevTreatment) {
    setPrevTreatment(selectedTreatmentIdForBooking);
    if (selectedTreatmentIdForBooking) setSelectedTreatment(selectedTreatmentIdForBooking);
  }

  const [prevDoctor, setPrevDoctor] = useState(selectedDoctorIdForBooking);
  if (selectedDoctorIdForBooking !== prevDoctor) {
    setPrevDoctor(selectedDoctorIdForBooking);
    if (selectedDoctorIdForBooking) setSelectedDoctor(selectedDoctorIdForBooking);
  }

  if (!isBookingOpen) return null;

  const handleClose = () => {
    setIsBookingOpen(false);
    setStep(1);
    setConfirmedAppointment(null);
    setSelectedBranchForBooking(null);
    setSelectedTreatmentIdForBooking(null);
    setSelectedDoctorIdForBooking(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      setXRayAttached(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !patientPhone) {
      alert('Please fill in your name and phone number to proceed.');
      return;
    }

    const appt = addAppointment({
      patientName,
      patientPhone,
      patientEmail,
      patientAge,
      gender,
      clinicBranchId: selectedBranch,
      doctorId: selectedDoctor,
      treatmentId: selectedTreatment,
      consultationType,
      date: selectedDate,
      timeSlot: selectedSlot,
      country,
      isNewPatient,
      notes,
      xRayAttached,
    });

    setConfirmedAppointment(appt);
    setStep(4);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const currentBranchObj = clinicBranches.find(b => b.id === selectedBranch) || clinicBranches[0];
  const currentDoctorObj = doctors.find(d => d.id === selectedDoctor) || doctors[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-2xl overflow-hidden my-auto transition-all flex flex-col max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-[#0b1f3a] via-[#163864] to-[#0d9488] p-5 sm:p-6 text-white relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-3 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#c5a059] text-slate-950">
              HOSPITAL & WELLNESS CENTRE
            </span>
            <span className="text-xs text-amber-200">Standalone Campus · Sadrauna, Lucknow</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center">
            {confirmedAppointment ? 'Appointment Confirmed!' : 'Book Specialist Appointment'}
          </h2>
          <p className="text-sm text-slate-200 mt-1">
            {confirmedAppointment 
              ? 'Your consultation token has been generated. SMS & WhatsApp details dispatched.'
              : 'Direct reservation with top dental specialists. Zero waiting time.'}
          </p>

          {/* Stepper indicator */}
          {!confirmedAppointment && (
            <div className="flex items-center justify-between mt-5 pt-3 border-t border-white/10">
              {[
                { s: 1, label: 'Wing & Service' },
                { s: 2, label: 'Doctor & Date' },
                { s: 3, label: 'Patient Details' }
              ].map(item => (
                <div key={item.s} className="flex items-center space-x-2">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    step === item.s 
                      ? 'bg-[#f5900d] text-white shadow-md ring-2 ring-white/40' 
                      : step > item.s 
                        ? 'bg-[#f5900d] text-white' 
                        : 'bg-white/20 text-white/70'
                  }`}>
                    {step > item.s ? <Check className="w-4 h-4" /> : item.s}
                  </div>
                  <span className={`text-xs hidden sm:inline ${step === item.s ? 'font-bold text-white' : 'text-white/60'}`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {/* STEP 1: Branch & Service Selection */}
          {step === 1 && (
            <div className="space-y-6">
              {/* Consultation Type Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Choose Consultation Format
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setConsultationType('in-person')}
                    className={`p-3.5 rounded-2xl border text-left flex items-start space-x-3 transition-all ${
                      consultationType === 'in-person'
                        ? 'border-[#f5900d] bg-amber-50/60 dark:bg-amber-950/30 text-[#0b1f3a] dark:text-white ring-2 ring-[#f5900d]'
                        : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    <Building2 className="w-5 h-5 text-[#f5900d] mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-bold">In-Clinic Visit</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">At our Sadrauna, Lucknow hospital campus</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setConsultationType('virtual')}
                    className={`p-3.5 rounded-2xl border text-left flex items-start space-x-3 transition-all ${
                      consultationType === 'virtual'
                        ? 'border-[#f5900d] bg-amber-50/60 dark:bg-amber-950/30 text-[#0b1f3a] dark:text-white ring-2 ring-[#f5900d]'
                        : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    <Video className="w-5 h-5 text-[#f5900d] mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-bold">Virtual Video E-Consult</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">For overseas / outstation patients</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Branch Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Select Hospital Clinical Department / Wing (Sadrauna, Lucknow)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-48 overflow-y-auto pr-1">
                  {clinicBranches.map(b => (
                    <div
                      key={b.id}
                      onClick={() => setSelectedBranch(b.id)}
                      className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                        selectedBranch === b.id
                          ? 'border-[#f5900d] bg-amber-50/70 dark:bg-amber-950/30 ring-1 ring-[#f5900d]'
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                          {b.name}
                        </span>
                        {b.badge && (
                          <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#f5900d]/10 text-[#f5900d] border border-[#f5900d]/20">
                            {b.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center">
                        <MapPin className="w-3 h-3 mr-1 shrink-0 text-slate-400" />
                        <span className="line-clamp-1">{b.landmark}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Treatment Specialty */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Select Dental Specialty / Treatment
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
                  {treatments.map(t => (
                    <div
                      key={t.id}
                      onClick={() => setSelectedTreatment(t.id)}
                      className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                        selectedTreatment === t.id
                          ? 'border-[#f5900d] bg-amber-50/70 dark:bg-amber-950/30 ring-1 ring-[#f5900d]'
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                          {t.title}
                        </span>
                        {t.popular && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#f5900d]/10 text-[#f5900d] border border-[#f5900d]/20">
                            Popular
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                        {t.shortDesc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-2xl bg-[#f5900d] hover:bg-[#e08208] text-white font-bold text-sm flex items-center space-x-2 shadow-lg transition-all"
                >
                  <span>Select Doctor & Date</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Doctor & Date/Slot */}
          {step === 2 && (
            <div className="space-y-6">
              {/* Doctor Specialist */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Select Consultant Dentist
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-48 overflow-y-auto pr-1">
                  {doctors.map(d => (
                    <div
                      key={d.id}
                      onClick={() => setSelectedDoctor(d.id)}
                      className={`p-3 rounded-2xl border text-left cursor-pointer flex items-center space-x-3 transition-all ${
                        selectedDoctor === d.id
                          ? 'border-[#f5900d] bg-amber-50/70 dark:bg-amber-950/30 ring-1 ring-[#f5900d]'
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <img 
                        src={d.image} 
                        alt={d.name} 
                        className="w-11 h-11 rounded-full object-cover border-2 border-[#f5900d] shrink-0"
                        onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                      />
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                          {d.name}
                        </div>
                        <div className="text-[11px] text-[#f5900d] truncate">
                          {d.designation || d.role}
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">
                          {d.experienceYears}+ Yrs Exp · ★ {d.rating}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Date Picker */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Appointment Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={selectedDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f5900d]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Selected Branch & Status
                  </label>
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs">
                    <div className="font-bold text-slate-900 dark:text-white">{currentBranchObj.name}</div>
                    <div className="text-slate-500 dark:text-slate-400 mt-0.5">{currentBranchObj.timings}</div>
                    <div className="text-emerald-600 dark:text-emerald-400 font-bold mt-1">● Slots Open for Online Booking</div>
                  </div>
                </div>
              </div>

              {/* Time Slots Grid */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Select Preferred Time Slot ({selectedSlot})
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-40 overflow-y-auto pr-1">
                  {TIME_SLOTS.map((t, i) => (
                    <button
                      key={i}
                      type="button"
                      disabled={!t.available}
                      onClick={() => setSelectedSlot(t.slot)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold text-center border transition-all ${
                        !t.available
                          ? 'bg-slate-100 dark:bg-slate-800/40 text-slate-400 border-dashed border-slate-200 dark:border-slate-800 cursor-not-allowed line-through'
                          : selectedSlot === t.slot
                            ? 'bg-[#f5900d] text-white border-[#f5900d] shadow-md ring-1 ring-[#f5900d]'
                            : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 hover:border-[#f5900d] text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      {t.slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm flex items-center space-x-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-6 py-3 rounded-2xl bg-[#f5900d] hover:bg-[#e08208] text-white font-bold text-sm flex items-center space-x-2 shadow-lg transition-all"
                >
                  <span>Patient Info</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Patient Information & Upload */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Miller"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f5900d]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 7905287870 or +91..."
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f5900d]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="email"
                      placeholder="patient@email.com"
                      value={patientEmail}
                      onChange={(e) => setPatientEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f5900d]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    Age & Gender
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      min={3}
                      max={100}
                      value={patientAge}
                      onChange={(e) => setPatientAge(Number(e.target.value))}
                      className="w-16 px-2 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-center font-bold text-slate-900 dark:text-white focus:outline-none"
                    />
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value as any)}
                      className="flex-1 px-2 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    Country of Residence
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g. India, USA, UK, UAE"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f5900d]"
                    />
                  </div>
                </div>
              </div>

              {/* Upload OPG / X-Ray / Photos */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                  Attach OPG / X-Ray / Smile Photo (Optional for preliminary estimate)
                </label>
                <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-center hover:border-[#f5900d] cursor-pointer transition-colors relative">
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <Upload className="w-6 h-6 mx-auto text-[#f5900d] mb-1" />
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {fileName ? `Uploaded: ${fileName}` : 'Click or drag OPG panoramic scan / smile photo'}
                  </div>
                  <div className="text-[10px] text-slate-400">JPG, PNG, PDF up to 25MB (Encrypted medical storage)</div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                  Chief Complaint / Medical History / Questions
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Seeking quotation for full upper All-on-4 implants, diabetic, allergic to penicillin..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f5900d]"
                />
              </div>

              {/* Booking Summary Box */}
              <div className="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Venue Center:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{currentBranchObj.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Doctor Specialist:</span>
                  <span className="font-bold text-[#f5900d]">{currentDoctorObj.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Date & Slot:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{selectedDate} ({selectedSlot})</span>
                </div>
              </div>

              <div className="pt-2 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm flex items-center space-x-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  className="px-7 py-3 rounded-2xl bg-[#f5900d] hover:bg-[#e08208] text-white font-bold text-sm flex items-center space-x-2 shadow-xl transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Confirm Appointment</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Success & Printable Pass */}
          {step === 4 && confirmedAppointment && (
            <div className="text-center py-4 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  BOOKING CONFIRMED & SLOTTED
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-2">
                  Token: {confirmedAppointment.id}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
                  A confirmation SMS & WhatsApp message has been queued to <strong>+91 {confirmedAppointment.patientPhone}</strong>.
                </p>
              </div>

              {/* Pass Card preview */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-left text-xs space-y-2 max-w-lg mx-auto">
                <div className="flex justify-between items-center pb-2 border-b border-slate-200 dark:border-slate-700">
                  <div>
                    <div className="font-bold text-sm text-slate-900 dark:text-white">Hope Dental Hospital & Wellness Centre</div>
                    <div className="text-[10px] text-slate-500">Token ID: {confirmedAppointment.id}</div>
                  </div>
                  <div className="text-right">
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold text-[10px]">
                      {confirmedAppointment.consultationType === 'virtual' ? 'VIRTUAL E-CONSULT' : 'IN-CLINIC VISIT'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Patient</span>
                    <span className="font-bold text-slate-900 dark:text-white">{confirmedAppointment.patientName}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Specialist</span>
                    <span className="font-bold text-[#f5900d]">{currentDoctorObj.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Date & Time</span>
                    <span className="font-bold text-slate-900 dark:text-white">{confirmedAppointment.date} at {confirmedAppointment.timeSlot}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Venue Center</span>
                    <span className="font-bold text-slate-900 dark:text-white">{currentBranchObj.name}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => generateAppointmentPDF(confirmedAppointment)}
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#f5900d] hover:bg-[#e08208] text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-lg transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Appointment Pass (PDF)</span>
                </button>

                <a
                  href={`https://wa.me/917905287870?text=${encodeURIComponent(
                    `Hello Hope Dental Hospital, I have confirmed my appointment token ${confirmedAppointment.id} for ${confirmedAppointment.patientName} on ${confirmedAppointment.date} at ${currentBranchObj.name}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-lg transition-all"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Open WhatsApp Confirmation</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="text-xs text-slate-500 hover:text-slate-700 dark:text-slate-400 underline font-medium"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
