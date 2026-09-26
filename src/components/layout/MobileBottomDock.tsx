import React from 'react';
import { Home, MapPin, Calendar, Calculator, Phone } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { PageId } from '../../types';

export const MobileBottomDock: React.FC = () => {
  const { currentPage, navigateTo, setIsBookingOpen, setIsCostCalculatorOpen, hospitalInfo } = useApp();

  const handleTabClick = (pageId: PageId) => {
    navigateTo(pageId);
  };

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-t border-slate-200/90 dark:border-slate-800 py-1.5 px-2 flex justify-around items-center shadow-2xl">
      {/* Home Tab */}
      <button
        onClick={() => handleTabClick('home')}
        className={`flex flex-col items-center justify-center text-[10px] font-semibold py-1 px-2 rounded-xl transition-all active:scale-95 ${
          currentPage === 'home'
            ? 'text-[#f5900d] font-bold'
            : 'text-slate-600 dark:text-slate-400 hover:text-[#f5900d]'
        }`}
      >
        <Home className="w-4 h-4 mb-0.5" />
        <span>Home</span>
      </button>

      {/* Hospital Tab */}
      <button
        onClick={() => handleTabClick('clinics')}
        className={`flex flex-col items-center justify-center text-[10px] font-semibold py-1 px-2 rounded-xl transition-all active:scale-95 ${
          currentPage === 'clinics'
            ? 'text-[#f5900d] font-bold'
            : 'text-slate-600 dark:text-slate-400 hover:text-[#f5900d]'
        }`}
      >
        <MapPin className="w-4 h-4 mb-0.5" />
        <span>Hospital</span>
      </button>

      {/* Floating Highlighted Center Action: Book Slot */}
      <button
        onClick={() => setIsBookingOpen(true)}
        className="-mt-5 px-4 py-2.5 bg-[#f5900d] hover:bg-[#e08208] text-white rounded-full font-bold text-[11px] shadow-lg shadow-[#f5900d]/40 flex flex-col items-center justify-center active:scale-90 transition-transform ring-4 ring-white dark:ring-slate-950"
      >
        <Calendar className="w-4 h-4 mb-0.5 text-white" />
        <span className="text-white">Book Slot</span>
      </button>

      {/* Cost Estimator */}
      <button
        onClick={() => setIsCostCalculatorOpen(true)}
        className="flex flex-col items-center justify-center text-[10px] font-semibold py-1 px-2 rounded-xl transition-all active:scale-95 text-slate-600 dark:text-slate-400 hover:text-[#f5900d]"
      >
        <Calculator className="w-4 h-4 mb-0.5" />
        <span>Estimator</span>
      </button>

      {/* Direct Call Tab */}
      <a
        href={`tel:${hospitalInfo.phone.replace(/\s+/g, '')}`}
        className="flex flex-col items-center justify-center text-[10px] font-semibold py-1 px-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-[#f5900d] active:scale-95"
      >
        <Phone className="w-4 h-4 mb-0.5" />
        <span>Call</span>
      </a>
    </div>
  );
};
