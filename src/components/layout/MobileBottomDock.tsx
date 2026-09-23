import React from 'react';
import { Home, Layers, Calendar, Stethoscope, Phone } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { HOSPITAL_INFO } from '../../data/mockData';
import { PageId } from '../../types';

export const MobileBottomDock: React.FC = () => {
  const { language, currentPage, navigateTo, setIsBookingOpen } = useApp();

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
            ? 'text-teal-600 dark:text-teal-400 font-bold'
            : 'text-slate-600 dark:text-slate-400 hover:text-teal-600'
        }`}
      >
        <Home className="w-4 h-4 mb-0.5" />
        <span>{language === 'hi' ? 'होम' : 'Home'}</span>
      </button>

      {/* Services Tab */}
      <button
        onClick={() => handleTabClick('services')}
        className={`flex flex-col items-center justify-center text-[10px] font-semibold py-1 px-2 rounded-xl transition-all active:scale-95 ${
          currentPage === 'services'
            ? 'text-teal-600 dark:text-teal-400 font-bold'
            : 'text-slate-600 dark:text-slate-400 hover:text-teal-600'
        }`}
      >
        <Layers className="w-4 h-4 mb-0.5" />
        <span>{language === 'hi' ? 'उपचार' : 'Services'}</span>
      </button>

      {/* Floating Highlighted Center Action: Book Slot */}
      <button
        onClick={() => setIsBookingOpen(true)}
        className="-mt-5 px-3.5 py-2.5 bg-gradient-to-tr from-teal-700 via-teal-600 to-emerald-500 text-white rounded-2xl font-bold text-[11px] shadow-lg shadow-teal-600/35 flex flex-col items-center justify-center active:scale-90 transition-transform ring-4 ring-white dark:ring-slate-950"
      >
        <Calendar className="w-4 h-4 mb-0.5" />
        <span>{language === 'hi' ? 'बुक स्लॉट' : 'Book'}</span>
      </button>

      {/* Doctors Tab */}
      <button
        onClick={() => handleTabClick('doctors')}
        className={`flex flex-col items-center justify-center text-[10px] font-semibold py-1 px-2 rounded-xl transition-all active:scale-95 ${
          currentPage === 'doctors'
            ? 'text-teal-600 dark:text-teal-400 font-bold'
            : 'text-slate-600 dark:text-slate-400 hover:text-teal-600'
        }`}
      >
        <Stethoscope className="w-4 h-4 mb-0.5" />
        <span>{language === 'hi' ? 'डॉक्टर्स' : 'Doctors'}</span>
      </button>

      {/* Direct Helpline Call */}
      <a
        href={`tel:${HOSPITAL_INFO.phone}`}
        className="flex flex-col items-center justify-center text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 text-[10px] font-semibold py-1 px-2 rounded-xl transition-colors active:scale-95"
      >
        <Phone className="w-4 h-4 mb-0.5 text-teal-600 dark:text-teal-400" />
        <span>{language === 'hi' ? 'कॉल' : 'Call'}</span>
      </a>
    </div>
  );
};
