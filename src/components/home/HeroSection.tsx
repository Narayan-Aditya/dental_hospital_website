import React, { useState } from 'react';
import { 
  Calendar, 
  ShieldCheck, 
  Star, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  PhoneCall, 
  Clock, 
  Search,
  Zap,
  Award,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { HOSPITAL_INFO } from '../../data/mockData';

export const HeroSection: React.FC = () => {
  const { 
    language, 
    t, 
    treatments, 
    doctors,
    setIsBookingOpen, 
    setSelectedTreatmentIdForBooking,
    setSelectedDoctorIdForBooking,
    setIsEmergencyModalOpen,
    setIsSymptomCheckerOpen,
    setIsInvoiceModalOpen
  } = useApp();

  const [quickTreatment, setQuickTreatment] = useState(treatments[0]?.id || '');
  const [quickDoctor, setQuickDoctor] = useState(doctors[0]?.id || '');

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    setSelectedTreatmentIdForBooking(quickTreatment);
    setSelectedDoctorIdForBooking(quickDoctor);
    setIsBookingOpen(true);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-teal-50/70 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Decorative Gradients & Grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-teal-200/30 via-cyan-100/20 to-emerald-200/30 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust Pill & Google Rating */}
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md border border-teal-200/80 px-3.5 py-1.5 rounded-full shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <div className="flex items-center text-amber-500 space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-800">4.9/5 Rating</span>
              <span className="text-slate-300">|</span>
              <span className="text-xs font-medium text-teal-700">Sadrauna, Mohan Road, Lucknow</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-[1.15]">
              {language === 'hi' ? (
                <>
                  उन्नत दर्द रहित दंत चिकित्सा एवं{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-800">
                    सौम्य देखभाल
                  </span>
                </>
              ) : (
                <>
                  Advanced Painless Dentistry with a{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-800">
                    Gentle Modern Touch
                  </span>
                </>
              )}
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {language === 'hi'
                ? 'होप डेंटल हॉस्पिटल में पाएं सिंगल-सिटिंग रोटरी आरसीटी, स्विस लाइफटाइम इम्प्लांट्स, और बिना तार वाले पारदर्शी क्लियर एलाइनर्स। हमारे विशेषज्ञ डॉक्टरों द्वारा १००% सुरक्षित व आधुनिक इलाज।'
                : 'Experience single-sitting root canals, lifetime warranty European implants, 3D invisible aligners, and fear-free pediatric dentistry in Lucknow with 100% sterile protocols.'}
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm font-semibold text-slate-700">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Painless Rotary RCT</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Swiss Dental Implants</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>3D Clear Aligners</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Class-B Sterilization</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>0% Interest EMI Plans</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Instant Digital Invoices</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="px-6 py-3.5 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-bold rounded-2xl shadow-lg shadow-teal-600/30 hover:shadow-teal-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center space-x-2 text-sm sm:text-base"
              >
                <Calendar className="w-5 h-5" />
                <span>{t('hero.ctaBook')}</span>
              </button>

              <button
                onClick={() => setIsSymptomCheckerOpen(true)}
                className="px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-2xl border border-slate-200 shadow-sm hover:shadow transition-all flex items-center space-x-2 text-sm sm:text-base"
              >
                <Sparkles className="w-5 h-5 text-teal-600" />
                <span>Symptom Checker</span>
              </button>

              <button
                onClick={() => setIsEmergencyModalOpen(true)}
                className="px-4 py-3.5 bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold rounded-2xl border border-rose-200 transition-all flex items-center space-x-1.5 text-xs sm:text-sm"
              >
                <PhoneCall className="w-4 h-4 text-rose-600" />
                <span>Emergency 24/7</span>
              </button>
            </div>

            {/* Fast-Track Slot Finder Box */}
            <div className="mt-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-teal-100 shadow-xl shadow-teal-900/5">
              <div className="flex items-center space-x-2 mb-3">
                <Zap className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Fast-Track 60s Booking Wizard
                </span>
              </div>
              <form onSubmit={handleQuickBook} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-500 mb-1">Select Treatment</label>
                  <select
                    value={quickTreatment}
                    onChange={(e) => setQuickTreatment(e.target.value)}
                    className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    {treatments.map((t) => (
                      <option key={t.id} value={t.id}>
                        {language === 'hi' ? t.titleHi : t.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-500 mb-1">Select Specialist</label>
                  <select
                    value={quickDoctor}
                    onChange={(e) => setQuickDoctor(e.target.value)}
                    className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    {doctors.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name} ({d.role.split('&')[0]})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center space-x-1.5"
                  >
                    <span>Check Available Slots</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Hero Visual (5 Cols) */}
          <div className="lg:col-span-5 relative">
            {/* Main Visual Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Doctor Consultation Mockup Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Dental Consultation"
                  className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-1 rounded-full bg-teal-500/90 backdrop-blur-sm text-[11px] font-bold">
                      Sadrauna Clinic
                    </span>
                    <span className="text-xs text-slate-300">ISO 9001 Certified</span>
                  </div>
                  <h3 className="font-display font-bold text-lg mt-1">
                    Hope Dental Hospital & Wellness Centre
                  </h3>
                  <p className="text-xs text-slate-300">
                    Equipped with 3D CBCT, Rotary RCT & Laser Surgery
                  </p>
                </div>
              </div>

              {/* Floating Stat Card 1: 16.5k+ Smiles */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center space-x-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-sm">{HOSPITAL_INFO.stats.patientsTreated}</div>
                  <div className="text-[11px] text-slate-500 font-medium">Happy Smiles Restored</div>
                </div>
              </div>

              {/* Floating Stat Card 2: 100% Painless Tech */}
              <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-sm">100% Painless</div>
                  <div className="text-[11px] text-slate-500 font-medium">Computerized Anesthesia</div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="absolute top-1/2 -right-3 sm:-right-4 bg-slate-900/90 backdrop-blur-md text-white px-3 py-1.5 rounded-xl shadow-lg border border-slate-700 text-xs font-bold flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>Sterile Class-B</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
