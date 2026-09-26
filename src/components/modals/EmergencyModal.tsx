import React, { useState } from 'react';
import { X, PhoneCall, MapPin } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const EmergencyModal: React.FC = () => {
  const { isEmergencyOpen, setIsEmergencyOpen, emergencyGuides, hospitalInfo } = useApp();
  const [selectedGuideId, setSelectedGuideId] = useState<string>(emergencyGuides[0]?.id || 'knocked-out-tooth');

  if (!isEmergencyOpen) return null;

  const currentGuide = emergencyGuides.find(g => g.id === selectedGuideId) || emergencyGuides[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-red-200 dark:border-red-950/60 w-full max-w-xl overflow-hidden my-auto transition-all flex flex-col max-h-[92vh]">
        
        {/* Urgent Header */}
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 p-5 sm:p-6 text-white relative">
          <button
            onClick={() => setIsEmergencyOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-white text-red-700 shadow-sm mb-2">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping mr-1"></span>
            24/7 DENTAL EMERGENCY TRIAGE
          </div>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center space-x-2">
            <span>Dental Emergency Care & Helpline</span>
          </h2>
          <p className="text-xs text-rose-100 mt-1">
            Round-the-clock emergency dental surgeons on standby at Hope Dental Hospital, Sadrauna / Para Road, Lucknow.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1">
          {/* Quick SOS Call Banner */}
          <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-500/40 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-center sm:text-left">
              <span className="text-[11px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wider block">
                24/7 EMERGENCY HOSPITAL HELPLINE (LUCKNOW)
              </span>
              <span className="text-xl font-black text-slate-900 dark:text-white block mt-0.5">
                {hospitalInfo.emergencyPhone}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                Direct line to Emergency Trauma & OMFS Registrar
              </span>
            </div>

            <a
              href={`tel:${hospitalInfo.emergencyPhone.replace(/\s+/g, '')}`}
              className="px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm flex items-center space-x-2 shadow-lg shadow-red-600/30 transition-all shrink-0 animate-pulse"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Emergency Now</span>
            </a>
          </div>

          {/* Condition Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Select Your Emergency Condition
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {emergencyGuides.map(guide => (
                <button
                  key={guide.id}
                  type="button"
                  onClick={() => setSelectedGuideId(guide.id)}
                  className={`p-3 rounded-2xl border text-left text-xs font-bold transition-all ${
                    selectedGuideId === guide.id
                      ? 'border-red-600 bg-red-50/70 dark:bg-red-950/40 text-red-700 dark:text-red-300 ring-2 ring-red-500'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="line-clamp-2">{guide.title}</div>
                  <span className="text-[10px] text-slate-400 block mt-1 font-normal">
                    {guide.urgency}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* First Aid Steps Guide */}
          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-700">
              <span className="text-xs font-bold text-slate-900 dark:text-white">
                Immediate Action Steps for {currentGuide.title}:
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                {currentGuide.urgency}
              </span>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400">
              <strong>Symptom:</strong> {currentGuide.symptom}
            </p>

            <div className="space-y-2 pt-1">
              {currentGuide.quickSteps.map((step, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-xs">
                  <div className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hospital Address Info */}
          <div className="p-3.5 rounded-2xl bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 text-xs flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 dark:text-white block">
                Hope Dental Hospital & Wellness Centre (Sadrauna / Para Flagship)
              </span>
              <span className="text-slate-600 dark:text-slate-400 block mt-0.5">
                Sadrauna, Para Road, Hans Khera, Mohan Road, Lucknow, Uttar Pradesh – 226017. 24/7 acute trauma helpline with surgical operatory facilities.
              </span>
            </div>
          </div>

          <div className="pt-2 flex justify-between items-center">
            <span className="text-xs text-slate-400">
              Central Daytime Helpline: {hospitalInfo.phone}
            </span>
            <button
              type="button"
              onClick={() => setIsEmergencyOpen(false)}
              className="px-5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
