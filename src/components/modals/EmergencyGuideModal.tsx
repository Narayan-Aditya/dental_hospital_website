import React, { useState } from 'react';
import { 
  X, 
  AlertCircle, 
  PhoneCall, 
  MessageSquare, 
  HeartPulse, 
  ShieldAlert, 
  CheckCircle2,
  Clock
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { EMERGENCY_GUIDES, HOSPITAL_INFO } from '../../data/mockData';

export const EmergencyGuideModal: React.FC = () => {
  const { isEmergencyModalOpen, setIsEmergencyModalOpen, language } = useApp();
  const [selectedGuide, setSelectedGuide] = useState(EMERGENCY_GUIDES[0]);

  if (!isEmergencyModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-rose-200 flex flex-col justify-between">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-rose-100 flex items-center justify-between bg-rose-50/80">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-600 text-white flex items-center justify-center shadow-md animate-pulse">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-rose-800 uppercase tracking-wider">
                Immediate Clinical Triage
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                24/7 Dental Emergency & First-Aid Guide
              </h3>
            </div>
          </div>
          <button
            onClick={() => setIsEmergencyModalOpen(false)}
            className="p-2 rounded-full hover:bg-white text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Guide Selector Tabs */}
        <div className="p-5 sm:p-6 space-y-4 flex-1">
          <div className="grid grid-cols-2 gap-2">
            {EMERGENCY_GUIDES.map((guide) => (
              <button
                key={guide.id}
                onClick={() => setSelectedGuide(guide)}
                className={`p-3 rounded-2xl border text-left text-xs font-bold transition-all ${
                  selectedGuide.id === guide.id
                    ? 'border-rose-600 bg-rose-50 text-rose-950 shadow-sm'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="line-clamp-1">{language === 'hi' ? guide.titleHi : guide.title}</div>
                <div className="text-[10px] text-rose-600 font-semibold mt-0.5">{guide.urgency}</div>
              </button>
            ))}
          </div>

          {/* Active Guide Card */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
            <div>
              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-rose-100 text-rose-700">
                Action Protocol
              </span>
              <h4 className="font-display font-bold text-lg text-slate-900 mt-1">
                {language === 'hi' ? selectedGuide.titleHi : selectedGuide.title}
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                <strong>Symptoms:</strong> {selectedGuide.symptom}
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Immediate Steps to Take Right Now:
              </h5>
              <div className="space-y-2">
                {selectedGuide.quickSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-800">
                    <span className="w-5 h-5 rounded-full bg-rose-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Emergency SOS Callout */}
          <div className="bg-gradient-to-r from-rose-900 to-slate-900 text-white p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="font-bold text-sm">Need immediate doctor attention?</div>
              <div className="text-xs text-rose-200">On-call dental trauma surgeon is active in Sadrauna, Lucknow.</div>
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <a
                href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center space-x-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call SOS ({HOSPITAL_INFO.emergencyPhone})</span>
              </a>

              <a
                href="https://wa.me/919450000000?text=I%20have%20an%20urgent%20dental%20emergency."
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-all flex items-center space-x-1"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            onClick={() => setIsEmergencyModalOpen(false)}
            className="px-5 py-2 bg-slate-800 text-white text-xs font-bold rounded-xl"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
