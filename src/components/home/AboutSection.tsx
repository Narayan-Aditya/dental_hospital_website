import React from 'react';
import { ShieldCheck, Award, CheckCircle2, Building } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { HOSPITAL_INFO } from '../../data/mockData';

export const AboutSection: React.FC = () => {
  const { language, setIsBookingOpen } = useApp();

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hospital Imagery & Stats Preview */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 dark:border-slate-800 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
                alt="Hope Dental Hospital Consultation & O.T."
                className="w-full h-96 sm:h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <div className="flex items-center space-x-2">
                  <span className="bg-teal-500 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow">
                    ISO 9001:2015 Certified
                  </span>
                  <span className="text-xs text-slate-300">Sadrauna, Lucknow</span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl mt-1.5 text-white">
                  Hope Dental Hospital & Wellness Centre
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Sadrauna, Near Main Market, Mohan Road, Lucknow, UP 226009
                </p>
              </div>
            </div>

            {/* Floating Experience Card */}
            <div className="absolute -bottom-4 right-4 sm:-right-4 bg-white dark:bg-slate-800 p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-700 flex items-center space-x-3">
              <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-teal-900/50 text-teal-600 dark:text-teal-300 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="font-extrabold text-slate-900 dark:text-white text-base">{HOSPITAL_INFO.stats.experienceYears}+ Years</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Clinical Excellence</div>
              </div>
            </div>
          </div>

          {/* Right Column: About Content & Credentials */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-100/80 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
              <Building className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>About Hope Dental Hospital</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight leading-tight">
              {language === 'hi' ? (
                <>
                  सदरौना, लखनऊ में आधुनिक एवं{' '}
                  <span className="text-teal-600 dark:text-teal-400">दर्द रहित दंत चिकित्सा</span>
                </>
              ) : (
                <>
                  Empathetic Healthcare &{' '}
                  <span className="text-teal-600 dark:text-teal-400">European Clinical Standards</span>
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'hi'
                ? 'होप डेंटल हॉस्पिटल एवं वेलनेस सेंटर सदरौना (मोहन रोड, लखनऊ) का एक प्रमुख दंत चिकित्सालय है। यहाँ वरिष्ठ एमडीएस दंत सर्जनों द्वारा जर्मन रोटरी आरसीटी, यूरोपीय डेंटल इम्प्लांट्स और पारदर्शी क्लियर एलाइनर्स का आधुनिक और सुरक्षित इलाज प्रदान किया जाता है।'
                : 'Hope Dental Hospital & Wellness Centre is Sadrauna’s trusted multi-specialty dental centre. Equipped with digital 3D CBCT imaging, rotary endodontic motors, and 4-tier Class-B autoclave sterilization, we ensure zero infection risk and complete patient comfort.'}
            </p>

            {/* Core Values Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center space-x-2.5 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-semibold">
                  100% Painless Computer Numbing
                </span>
              </div>
              <div className="flex items-center space-x-2.5 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-semibold">
                  European Class-B Sterilization
                </span>
              </div>
              <div className="flex items-center space-x-2.5 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-semibold">
                  Full MDS Specialist Team
                </span>
              </div>
              <div className="flex items-center space-x-2.5 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-semibold">
                  Wheelchair Friendly & Parking
                </span>
              </div>
            </div>

            {/* Bottom Hospital Action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-teal-600/25 transition-all"
              >
                Book Your Consultation
              </button>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <span className="font-bold text-slate-900 dark:text-white block">{HOSPITAL_INFO.timings.split('|')[0]}</span>
                <span>Sadrauna Main Market, Mohan Road, Lucknow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
