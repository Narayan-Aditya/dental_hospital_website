import React from 'react';
import { ShieldCheck, Award, Heart, Sparkles, CheckCircle2, Clock, Users, Building } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { HOSPITAL_INFO } from '../../data/mockData';

export const AboutSection: React.FC = () => {
  const { language, setIsBookingOpen } = useApp();

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hospital Imagery & Trust Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
                alt="Hope Dental Hospital Interior"
                className="w-full h-96 sm:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <div className="flex items-center space-x-2">
                  <span className="bg-teal-500 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    ISO 9001:2015 Certified
                  </span>
                  <span className="text-xs text-slate-300">Sadrauna, Lucknow</span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl mt-1 text-white">
                  Hope Dental Hospital & Wellness Centre
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Near Main Market, Mohan Road, Sadrauna, Lucknow
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-200 flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="font-extrabold text-slate-900 text-base">{HOSPITAL_INFO.stats.experienceYears} Years</div>
                <div className="text-xs text-slate-500 font-medium">Of Clinical Excellence</div>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
              <Building className="w-3.5 h-3.5 text-teal-600" />
              <span>About Our Dental Hospital</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              {language === 'hi' ? (
                <>
                  सदरौना, लखनऊ में आधुनिक, सुरक्षित एवं{' '}
                  <span className="text-teal-600">दर्द रहित दंत चिकित्सा</span>
                </>
              ) : (
                <>
                  Setting the Highest Benchmark in{' '}
                  <span className="text-teal-600">Gentle Dental Healthcare</span>
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {language === 'hi'
                ? 'होप डेंटल हॉस्पिटल एवं वेलनेस सेंटर सदरौना (मोहन रोड, लखनऊ) का एक प्रमुख दंत चिकित्सालय है। यहाँ वरिष्ठ एमडीएस दंत सर्जनों द्वारा जर्मन रोटरी आरसीटी, यूरोपीय डेंटल इम्प्लांट्स और पारदर्शी क्लियर एलाइनर्स का आधुनिक और सुरक्षित इलाज प्रदान किया जाता है।'
                : 'Hope Dental Hospital & Wellness Centre is a premier multi-specialty dental hospital located in Sadrauna, Lucknow. We combine empathetic patient care, advanced European Class-B 4-tier sterilization, digital 3D imaging, and computer-assisted painless technology.'}
            </p>

            {/* Core Values Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-800 font-semibold">
                  100% Painless Computer Numbing
                </div>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-800 font-semibold">
                  European Class-B Sterilization
                </div>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-800 font-semibold">
                  Full MDS Specialist Doctors Team
                </div>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-800 font-semibold">
                  Wheelchair Friendly & Ample Parking
                </div>
              </div>
            </div>

            {/* Bottom Hospital Action */}
            <div className="pt-4 flex items-center space-x-4">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-teal-600/20 transition-all"
              >
                Book Your Hospital Visit
              </button>
              <div className="text-xs text-slate-500">
                <span className="font-bold text-slate-900 block">{HOSPITAL_INFO.timings.split('|')[0]}</span>
                <span>Open for New & Recurring Patients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
