import React from 'react';
import { AlertCircle, PhoneCall, MessageSquare, ArrowRight, ShieldAlert, HeartPulse } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { HOSPITAL_INFO } from '../../data/mockData';

export const EmergencySOSBanner: React.FC = () => {
  const { language, setIsEmergencyModalOpen, setIsBookingOpen } = useApp();

  return (
    <div className="bg-gradient-to-r from-rose-900 via-rose-800 to-slate-900 text-white py-4 px-4 sm:px-6 shadow-inner relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left SOS Label */}
        <div className="flex items-center space-x-3 text-center md:text-left">
          <div className="w-10 h-10 rounded-xl bg-rose-600/60 border border-rose-400 flex items-center justify-center shrink-0 animate-pulse">
            <HeartPulse className="w-6 h-6 text-rose-200" />
          </div>
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="bg-rose-500 text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
                24/7 Dental Emergency
              </span>
              <span className="text-xs text-rose-200 font-semibold">Sadrauna & Lucknow</span>
            </div>
            <p className="text-sm font-medium text-rose-100 mt-0.5">
              {language === 'hi'
                ? 'दांत में असहनीय दर्द, सूजन, टूटा दांत या चोट? तुरंत सहायता प्राप्त करें।'
                : 'Severe toothache, knocked-out tooth, or sudden facial swelling? Immediate on-call dentist available.'}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
          <a
            href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
            className="px-4 py-2 bg-white text-rose-900 hover:bg-rose-50 font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center space-x-1.5"
          >
            <PhoneCall className="w-4 h-4 text-rose-600" />
            <span>Call SOS: {HOSPITAL_INFO.emergencyPhone}</span>
          </a>

          <a
            href={`https://wa.me/919450000000?text=Hello%20Hope%20Dental%20Hospital,%20I%20have%20an%20urgent%20dental%20emergency.`}
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all flex items-center space-x-1.5"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Triage</span>
          </a>

          <button
            onClick={() => setIsEmergencyModalOpen(true)}
            className="px-3.5 py-2 bg-rose-950/80 hover:bg-rose-950 border border-rose-700/80 text-rose-200 text-xs sm:text-sm font-medium rounded-xl transition-all flex items-center space-x-1"
          >
            <span>First-Aid Steps</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
