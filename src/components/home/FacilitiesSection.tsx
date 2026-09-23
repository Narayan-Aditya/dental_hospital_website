import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Camera, 
  Zap, 
  Heart, 
  Clock, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { FACILITIES_DATA } from '../../data/mockData';

export const FacilitiesSection: React.FC = () => {
  const { language } = useApp();

  return (
    <section id="facilities" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-500/30">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            <span>Hospital Infrastructure & Safety Standards</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            {language === 'hi' 
              ? 'अत्याधुनिक चिकित्सा तकनीक एवं १००% स्टरलाइजेशन' 
              : 'Advanced Clinical Infrastructure & 100% Sterilization'
            }
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            {language === 'hi'
              ? 'यूरोपीय क्लास-बी ऑटोक्लेव प्रोटोकॉल, ३डी डिजिटल इमेजिंग और कम्प्यूटरीकृत दर्द रहित तकनीकों के साथ सुरक्षित वातावरण।'
              : 'Adhering to strict European hospital hygiene standards to guarantee zero cross-contamination and maximum clinical precision.'
            }
          </p>
        </div>

        {/* 4-Tier Sterilization Guarantee Box */}
        <div className="mb-14 bg-gradient-to-r from-teal-950/80 via-slate-800/80 to-slate-900/80 rounded-3xl p-6 sm:p-8 border border-teal-500/30 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="space-y-1">
              <div className="text-teal-400 font-extrabold text-sm uppercase tracking-wider">Tier 1</div>
              <h4 className="font-bold text-white text-base">Ultrasonic Pre-Disinfection</h4>
              <p className="text-xs text-slate-400">Enzymatic bath to eliminate organic debris on microscopic levels.</p>
            </div>
            <div className="space-y-1">
              <div className="text-teal-400 font-extrabold text-sm uppercase tracking-wider">Tier 2</div>
              <h4 className="font-bold text-white text-base">Vacuum Sealed Pouching</h4>
              <p className="text-xs text-slate-400">Individual sterile pouches with color-changing chemical indicators.</p>
            </div>
            <div className="space-y-1">
              <div className="text-teal-400 font-extrabold text-sm uppercase tracking-wider">Tier 3</div>
              <h4 className="font-bold text-white text-base">Class-B 134°C Autoclave</h4>
              <p className="text-xs text-slate-400">High pressure fractional vacuum kills 100% viruses, bacteria & spores.</p>
            </div>
            <div className="space-y-1">
              <div className="text-teal-400 font-extrabold text-sm uppercase tracking-wider">Tier 4</div>
              <h4 className="font-bold text-white text-base">UV Chamber Storage</h4>
              <p className="text-xs text-slate-400">Stored in airtight ultraviolet chambers and opened only before patient.</p>
            </div>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACILITIES_DATA.map((facility) => (
            <div
              key={facility.id}
              className="bg-slate-800/60 rounded-3xl border border-slate-700/80 overflow-hidden hover:border-teal-400/80 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 bg-teal-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                  {facility.badge}
                </div>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="font-display font-bold text-lg text-white group-hover:text-teal-400 transition-colors">
                  {language === 'hi' ? facility.titleHi : facility.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {facility.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
