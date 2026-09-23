import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  FileText, 
  AlertCircle,
  FileSpreadsheet,
  Download,
  Share2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useApp } from '../../context/AppContext';
import { Appointment } from '../../types';
import { HOSPITAL_INFO } from '../../data/mockData';

export const BookingModal: React.FC = () => {
  const { 
    isBookingOpen, 
    setIsBookingOpen, 
    treatments, 
    doctors, 
    selectedTreatmentIdForBooking,
    setSelectedTreatmentIdForBooking,
    selectedDoctorIdForBooking,
    setSelectedDoctorIdForBooking,
    addAppointment,
    language
  } = useApp();

  const [step, setStep] = useState<number>(1);
  const [selectedTreatment, setSelectedTreatment] = useState<string>(selectedTreatmentIdForBooking || treatments[0]?.id || '');
  const [selectedDoctor, setSelectedDoctor] = useState<string>(selectedDoctorIdForBooking || doctors[0]?.id || '');
  const [consultationType, setConsultationType] = useState<'In-Clinic Consultation' | 'Second Opinion' | 'Emergency Dental Care'>('In-Clinic Consultation');
  
  // Date & Slot
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [selectedDate, setSelectedDate] = useState<string>(tomorrow.toISOString().split('T')[0]);
  const [selectedSlot, setSelectedSlot] = useState<string>('10:30 AM - 11:00 AM');

  // Patient Info
  const [patientName, setPatientName] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [patientEmail, setPatientEmail] = useState<string>('');
  const [patientAge, setPatientAge] = useState<number>(28);
  const [gender, setGender] = useState<'Male' | 'Female' | 'Other'>('Male');
  const [isNewPatient, setIsNewPatient] = useState<boolean>(true);
  const [notes, setNotes] = useState<string>('');
  const [xRayAttached, setXRayAttached] = useState<boolean>(false);
  const [confirmedAppointment, setConfirmedAppointment] = useState<Appointment | null>(null);

  useEffect(() => {
    if (selectedTreatmentIdForBooking) {
      setSelectedTreatment(selectedTreatmentIdForBooking);
    }
  }, [selectedTreatmentIdForBooking]);

  useEffect(() => {
    if (selectedDoctorIdForBooking) {
      setSelectedDoctor(selectedDoctorIdForBooking);
    }
  }, [selectedDoctorIdForBooking]);

  if (!isBookingOpen) return null;

  const timeSlots = [
    { time: '09:30 AM - 10:00 AM', period: 'Morning', available: true },
    { time: '10:30 AM - 11:00 AM', period: 'Morning', available: true },
    { time: '11:30 AM - 12:00 PM', period: 'Morning', available: true },
    { time: '12:30 PM - 01:00 PM', period: 'Morning', available: true },
    { time: '03:00 PM - 03:30 PM', period: 'Afternoon', available: true },
    { time: '04:00 PM - 04:30 PM', period: 'Afternoon', available: true },
    { time: '05:30 PM - 06:00 PM', period: 'Evening', available: true },
    { time: '06:30 PM - 07:00 PM', period: 'Evening', available: true },
    { time: '07:30 PM - 08:00 PM', period: 'Evening', available: true },
  ];

  const handleNext = () => {
    if (step === 1 && !selectedTreatment) return;
    if (step === 2 && !selectedDoctor) return;
    if (step === 3 && (!selectedDate || !selectedSlot)) return;
    if (step === 4) {
      if (!patientName || !patientPhone) return;
      // Finalize appointment creation
      const appt = addAppointment({
        patientName,
        patientPhone,
        patientEmail: patientEmail || 'patient@hopedental.com',
        patientAge: Number(patientAge),
        gender,
        doctorId: selectedDoctor,
        treatmentId: selectedTreatment,
        date: selectedDate,
        timeSlot: selectedSlot,
        isNewPatient,
        notes,
        xRayAttached,
      });

      setConfirmedAppointment(appt);
      setStep(5);

      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // graceful fallback
      }
      return;
    }
    setStep(prev => prev + 1);
  };

  const handleClose = () => {
    setIsBookingOpen(false);
    setStep(1);
    setConfirmedAppointment(null);
    setSelectedTreatmentIdForBooking(null);
    setSelectedDoctorIdForBooking(null);
  };

  const currentTreatmentObj = treatments.find(t => t.id === selectedTreatment);
  const currentDoctorObj = doctors.find(d => d.id === selectedDoctor);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col justify-between">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-[11px] font-bold text-teal-800 uppercase tracking-wider">
                Online Patient Appointment Portal
              </span>
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 mt-0.5">
              {step === 5 ? 'Booking Confirmed! 🎉' : 'Book Dental Appointment in 60s'}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Indicators */}
        {step < 5 && (
          <div className="px-6 pt-4 pb-2">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 mb-2">
              <span className={step >= 1 ? 'text-teal-700' : ''}>1. Treatment</span>
              <span className={step >= 2 ? 'text-teal-700' : ''}>2. Doctor</span>
              <span className={step >= 3 ? 'text-teal-700' : ''}>3. Date & Slot</span>
              <span className={step >= 4 ? 'text-teal-700' : ''}>4. Patient Details</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-teal-600 to-cyan-500 transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Body Content by Step */}
        <div className="p-5 sm:p-6 space-y-4 flex-1">
          {/* STEP 1: Treatment & Consultation Type */}
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Consultation Mode
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    'In-Clinic Consultation',
                    'Second Opinion',
                    'Emergency Dental Care'
                  ].map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setConsultationType(mode as any)}
                      className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                        consultationType === mode
                          ? 'border-teal-600 bg-teal-50 text-teal-900 shadow-sm'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Select Required Dental Treatment
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-64 overflow-y-auto pr-1">
                  {treatments.map((t) => (
                    <div
                      key={t.id}
                      onClick={() => setSelectedTreatment(t.id)}
                      className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-start justify-between ${
                        selectedTreatment === t.id
                          ? 'border-teal-600 bg-teal-50/80 ring-2 ring-teal-500/20 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="font-bold text-xs text-slate-900">{t.title}</div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">{t.shortDesc}</div>
                        <div className="text-[11px] font-extrabold text-teal-700">
                          Starting ₹{t.startingPrice.toLocaleString('en-IN')}
                        </div>
                      </div>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-1 ${
                        selectedTreatment === t.id ? 'border-teal-600 bg-teal-600 text-white' : 'border-slate-300'
                      }`}>
                        {selectedTreatment === t.id && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Doctor Selection */}
          {step === 2 && (
            <div className="space-y-4 animate-fadeIn">
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Choose Specialist Doctor
              </label>
              <div className="space-y-3">
                {doctors.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => setSelectedDoctor(doc.id)}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                      selectedDoctor === doc.id
                        ? 'border-teal-600 bg-teal-50/80 ring-2 ring-teal-500/20 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center space-x-3.5">
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="w-12 h-12 rounded-xl object-cover object-top border border-slate-200 shrink-0"
                      />
                      <div>
                        <div className="font-display font-bold text-sm text-slate-900">{doc.name}</div>
                        <div className="text-xs text-teal-700 font-medium">{doc.role}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{doc.availability}</div>
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                      selectedDoctor === doc.id ? 'border-teal-600 bg-teal-600 text-white' : 'border-slate-300'
                    }`}>
                      {selectedDoctor === doc.id && <CheckCircle2 className="w-4 h-4" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Date & Slot */}
          {step === 3 && (
            <div className="space-y-4 animate-fadeIn">
              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Select Preferred Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full text-xs sm:text-sm font-semibold bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Select Available Time Slot (Sadrauna OPD)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.time}
                      type="button"
                      onClick={() => setSelectedSlot(slot.time)}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        selectedSlot === slot.time
                          ? 'border-teal-600 bg-teal-600 text-white font-bold shadow'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-medium'
                      }`}
                    >
                      <div className="text-xs">{slot.time}</div>
                      <div className={`text-[10px] mt-0.5 ${selectedSlot === slot.time ? 'text-teal-100' : 'text-slate-400'}`}>
                        {slot.period}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Patient Info Form */}
          {step === 4 && (
            <div className="space-y-3.5 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Patient Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full text-xs sm:text-sm bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:ring-2 focus:ring-teal-500 outline-none shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    placeholder="e.g. 98390XXXXX"
                    className="w-full text-xs sm:text-sm bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:ring-2 focus:ring-teal-500 outline-none shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={patientAge}
                    onChange={(e) => setPatientAge(Number(e.target.value))}
                    className="w-full text-xs sm:text-sm bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:ring-2 focus:ring-teal-500 outline-none shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Gender
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value as any)}
                    className="w-full text-xs sm:text-sm bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:ring-2 focus:ring-teal-500 outline-none shadow-sm"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Patient Type
                  </label>
                  <select
                    value={isNewPatient ? 'new' : 'existing'}
                    onChange={(e) => setIsNewPatient(e.target.value === 'new')}
                    className="w-full text-xs sm:text-sm bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-slate-900 focus:ring-2 focus:ring-teal-500 outline-none shadow-sm"
                  >
                    <option value="new">New Patient</option>
                    <option value="existing">Existing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Dental Symptoms / Notes (Optional)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Sensitivity in lower molar, pain while eating sweets..."
                  className="w-full text-xs sm:text-sm bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:ring-2 focus:ring-teal-500 outline-none shadow-sm"
                />
              </div>

              {/* Upload X-Ray Toggle */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs">
                  <span className="font-bold text-slate-800">Attach Previous X-Ray / Report?</span>
                  <p className="text-[10px] text-slate-400">Helps doctors prepare before your arrival</p>
                </div>
                <button
                  type="button"
                  onClick={() => setXRayAttached(!xRayAttached)}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${
                    xRayAttached ? 'bg-teal-600 text-white' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {xRayAttached ? 'Attached ✓' : 'Upload File'}
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: CONFIRMATION & SLIP */}
          {step === 5 && confirmedAppointment && (
            <div className="space-y-4 animate-fadeIn text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="font-display font-extrabold text-2xl text-slate-900">
                  Appointment Successfully Confirmed!
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  We look forward to welcoming you at Hope Dental Hospital, Sadrauna, Lucknow.
                </p>
              </div>

              {/* Confirmation Slip Card */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-left space-y-3 shadow-inner">
                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <span className="text-xs text-slate-500 font-medium">Appointment Reference ID:</span>
                  <span className="font-mono font-extrabold text-sm text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                    {confirmedAppointment.id}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Patient Name:</span>
                    <span className="font-bold text-slate-800">{confirmedAppointment.patientName}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Phone Number:</span>
                    <span className="font-bold text-slate-800">{confirmedAppointment.patientPhone}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Treatment:</span>
                    <span className="font-bold text-teal-800">{currentTreatmentObj?.title}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Consulting Doctor:</span>
                    <span className="font-bold text-slate-800">{currentDoctorObj?.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Date & Time:</span>
                    <span className="font-bold text-slate-800">{confirmedAppointment.date} at {confirmedAppointment.timeSlot}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Clinic Location:</span>
                    <span className="font-bold text-slate-800">Sadrauna, Mohan Rd, Lucknow</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp & Slip simulation */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center space-x-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Print Booking Slip</span>
                </button>

                <a
                  href={`https://wa.me/91${confirmedAppointment.patientPhone}?text=Hello%20${confirmedAppointment.patientName},%20your%20appointment%20with%20${currentDoctorObj?.name}%20at%20Hope%20Dental%20Hospital%20is%20CONFIRMED%20for%20${confirmedAppointment.date}%20at%20${confirmedAppointment.timeSlot}.%20Ref:%20${confirmedAppointment.id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center space-x-1.5"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share on WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation Buttons */}
        <div className="p-5 sm:p-6 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
          {step > 1 && step < 5 ? (
            <button
              onClick={() => setStep(prev => prev - 1)}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-white flex items-center space-x-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < 5 ? (
            <button
              onClick={handleNext}
              disabled={step === 4 && (!patientName || !patientPhone)}
              className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow flex items-center space-x-1.5"
            >
              <span>{step === 4 ? 'Confirm Booking' : 'Continue'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={handleClose}
              className="w-full py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow"
            >
              Done & Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
