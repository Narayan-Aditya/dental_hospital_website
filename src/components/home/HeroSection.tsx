import React, { useState } from 'react';
import { 
  Calendar, 
  ShieldCheck, 
  Star, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Award,
  Zap
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
    setSelectedDoctorIdForBooking
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
    <div className="relative overflow-hidden bg-gradient-to-b from-teal-50/60 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-8 pb-16 lg:pt-14 lg:pb-24 transition-colors duration-300">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-teal-200/25 via-cyan-100/20 to-emerald-200/25 dark:from-teal-900/15 dark:via-cyan-900/10 dark:to-emerald-900/15 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust Pill & Google Rating */}
            <div className="inline-flex items-center space-x-2 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-teal-200/80 dark:border-teal-800/80 px-3.5 py-1.5 rounded-full shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <div className="flex items-center text-amber-500 space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-800 dark:text-white">4.9★ Google & JustDial</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="text-xs font-medium text-teal-700 dark:text-teal-300">Sadrauna, Lucknow</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white leading-[1.14]">
              {language === 'hi' ? (
                <>
                  उन्नत एवं दर्द रहित दंत चिकित्सा,{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-600 dark:from-teal-400 dark:via-teal-300 dark:to-cyan-300">
                    पूरी तरह सुरक्षित व आधुनिक
                  </span>
                </>
              ) : (
                <>
                  Advanced Painless Dentistry with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-600 dark:from-teal-400 dark:via-teal-300 dark:to-cyan-300">
                    Hospital-Grade Precision
                  </span>
                </>
              )}
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {language === 'hi'
                ? 'होप डेंटल हॉस्पिटल में पाएं सिंगल-सिटिंग रोटरी आरसीटी, स्विस लाइफटाइम इम्प्लांट्स, और बिना तार वाले पारदर्शी क्लियर एलाइनर्स। हमारे विशेषज्ञ एमडीएस डॉक्टरों द्वारा १००% सुरक्षित व आरामदायक इलाज।'
                : 'Experience single-sitting rotary root canals, lifetime warranty European implants, 3D invisible aligners, and fear-free pediatric dentistry in Sadrauna, Lucknow with 100% sterile protocols.'}
            </p>

            {/* Feature Value Grid (2x2) */}
            <div className="grid grid-cols-2 gap-3 pt-1 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>Painless Rotary RCT</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>Swiss Dental Implants</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>Class-B Sterilization</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>MDS Surgeon Faculty</span>
              </div>
            </div>

            {/* Fast-Track Slot Finder Box */}
            <div className="mt-6 bg-white dark:bg-slate-800/95 p-5 sm:p-6 rounded-3xl border border-teal-200/80 dark:border-slate-700 shadow-xl shadow-teal-900/5 text-left">
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center">
                    <Zap className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    Fast 60-Second Slot Booking
                  </span>
                </div>
                <span className="text-[11px] text-teal-600 dark:text-teal-400 font-semibold">
                  Instant Confirmation
                </span>
              </div>

              <form onSubmit={handleQuickBook} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">Select Procedure</label>
                  <select
                    value={quickTreatment}
                    onChange={(e) => setQuickTreatment(e.target.value)}
                    className="w-full text-xs font-medium bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
                  >
                    {treatments.map((t) => (
                      <option key={t.id} value={t.id}>
                        {language === 'hi' ? t.titleHi : t.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1">Select Specialist</label>
                  <select
                    value={quickDoctor}
                    onChange={(e) => setQuickDoctor(e.target.value)}
                    className="w-full text-xs font-medium bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
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
                    className="w-full py-2.5 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-bold text-xs rounded-xl shadow-lg shadow-teal-600/25 transition-all flex items-center justify-center space-x-1.5"
                  >
                    <span>Check Open Slots</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Hero Visual (5 Cols) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Dental Consultation"
                  className="w-full h-80 sm:h-[420px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-1 rounded-full bg-teal-500/90 backdrop-blur-sm text-[11px] font-bold text-white shadow">
                      Sadrauna Clinic
                    </span>
                    <span className="text-xs text-slate-300 font-medium">ISO 9001:2015</span>
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl mt-1 text-white">
                    Hope Dental Hospital & Wellness Centre
                  </h3>
                  <p className="text-xs text-slate-300">
                    Mohan Road, Sadrauna, Lucknow • Helpline: {HOSPITAL_INFO.phone}
                  </p>
                </div>
              </div>

              {/* Floating Stat Card 1: Patients Treated */}
              <div className="absolute -top-3.5 left-2 sm:-left-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-200/80 dark:border-slate-700 flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-900/50 text-teal-600 dark:text-teal-300 flex items-center justify-center font-bold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 dark:text-white text-sm">{HOSPITAL_INFO.stats.patientsTreated}</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Smiles Restored</div>
                </div>
              </div>

              {/* Floating Stat Card 2: 100% Painless Tech */}
              <div className="absolute -bottom-3.5 right-2 sm:-right-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-200/80 dark:border-slate-700 flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-900/50 text-amber-600 dark:text-amber-300 flex items-center justify-center font-bold">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 dark:text-white text-sm">100% Painless</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Rotary & Digital Tech</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
