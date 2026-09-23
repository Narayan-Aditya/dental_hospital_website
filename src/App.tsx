import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Concept3ProMax } from './components/concepts/Concept3ProMax';
import { BookingModal } from './components/modals/BookingModal';
import { MessageSquare, Calendar, Phone, Layers, Building } from 'lucide-react';
import { HOSPITAL_INFO } from './data/mockData';

const MainContent: React.FC = () => {
  const { language, setIsBookingOpen } = useApp();

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* UI UX Pro Max Dental Hospital Website */}
      <Concept3ProMax />

      {/* Shared Appointment Booking Modal */}
      <BookingModal />

      {/* Desktop Floating WhatsApp Connect (Visible on Tablets & Desktops) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end space-y-3">
        <a
          href="https://wa.me/919450000000?text=Hello%20Hope%20Dental%20Hospital%20Sadrauna,%20I%20would%20like%20to%20inquire%20about%20dental%20treatments."
          target="_blank"
          rel="noreferrer"
          className="p-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
          title="Chat with Reception on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 text-xs font-bold transition-all duration-300">
            {language === 'hi' ? 'व्हाट्सएप चैट' : 'Chat on WhatsApp'}
          </span>
        </a>
      </div>

      {/* Mobile Browser Native Bottom Navigation Dock (Fixed for Mobile Screens) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-t border-slate-200/90 dark:border-slate-800 py-1.5 px-3 flex justify-around items-center shadow-2xl">
        {/* About Hospital Link */}
        <a
          href="#about"
          className="flex flex-col items-center justify-center text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 text-[10px] font-semibold py-1 px-2 rounded-xl transition-colors active:scale-95"
        >
          <Building className="w-4 h-4 mb-0.5" />
          <span>{language === 'hi' ? 'अस्पताल' : 'About'}</span>
        </a>

        {/* Services Link */}
        <a
          href="#services"
          className="flex flex-col items-center justify-center text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 text-[10px] font-semibold py-1 px-2 rounded-xl transition-colors active:scale-95"
        >
          <Layers className="w-4 h-4 mb-0.5" />
          <span>{language === 'hi' ? 'उपचार' : 'Services'}</span>
        </a>

        {/* Floating Highlighted Center Action: Book Slot */}
        <button
          onClick={() => setIsBookingOpen(true)}
          className="-mt-5 px-3.5 py-2.5 bg-gradient-to-tr from-teal-700 via-teal-600 to-emerald-500 text-white rounded-2xl font-bold text-[11px] shadow-lg shadow-teal-600/35 flex flex-col items-center justify-center active:scale-90 transition-transform ring-4 ring-white dark:ring-slate-950"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span>{language === 'hi' ? 'बुक स्लॉट' : 'Book'}</span>
        </button>

        {/* WhatsApp Fast Chat */}
        <a
          href="https://wa.me/919450000000?text=Hello%20Hope%20Dental%20Hospital%20Sadrauna,%20I%20would%20like%20to%20inquire%20about%20dental%20treatments."
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center text-emerald-600 dark:text-emerald-400 text-[10px] font-semibold py-1 px-2 rounded-xl transition-colors active:scale-95"
        >
          <MessageSquare className="w-4 h-4 mb-0.5 fill-current" />
          <span>WhatsApp</span>
        </a>

        {/* Direct Helpline Call */}
        <a
          href={`tel:${HOSPITAL_INFO.phone}`}
          className="flex flex-col items-center justify-center text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 text-[10px] font-semibold py-1 px-2 rounded-xl transition-colors active:scale-95"
        >
          <Phone className="w-4 h-4 mb-0.5 text-teal-600 dark:text-teal-400" />
          <span>{language === 'hi' ? 'कॉल' : 'Call'}</span>
        </a>
      </div>
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}

export default App;
