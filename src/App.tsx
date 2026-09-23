import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { ThemeSwitcherBar } from './components/common/ThemeSwitcherBar';
import { Concept1Clinical } from './components/concepts/Concept1Clinical';
import { Concept2Luxury } from './components/concepts/Concept2Luxury';
import { Concept3ProMax } from './components/concepts/Concept3ProMax';

import { BookingModal } from './components/modals/BookingModal';
import { InvoiceModal } from './components/modals/InvoiceModal';
import { SymptomCheckerModal } from './components/modals/SymptomCheckerModal';
import { EmergencyGuideModal } from './components/modals/EmergencyGuideModal';
import { AdminPortalModal } from './components/modals/AdminPortalModal';
import { MessageSquare, Calendar, Sparkles } from 'lucide-react';

const MainContent: React.FC = () => {
  const { concept, setIsBookingOpen, setIsSymptomCheckerOpen } = useApp();

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* 3-in-1 Website Concept Theme Switcher */}
      <ThemeSwitcherBar />

      {/* Render Selected Website Concept */}
      {concept === 'clinical' && <Concept1Clinical />}
      {concept === 'luxury' && <Concept2Luxury />}
      {concept === 'promax' && <Concept3ProMax />}

      {/* Shared Modals Across All 3 Websites */}
      <BookingModal />
      <InvoiceModal />
      <SymptomCheckerModal />
      <EmergencyGuideModal />
      <AdminPortalModal />

      {/* Floating Action Buttons for Mobile / Quick Access */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end space-y-2.5">
        {/* Quick Symptom Quiz */}
        <button
          onClick={() => setIsSymptomCheckerOpen(true)}
          className="p-3 bg-white text-teal-700 hover:text-teal-800 rounded-full shadow-lg border border-teal-100 hover:scale-105 transition-transform flex items-center space-x-1.5 text-xs font-bold"
          title="Toothache & Symptom Checker"
        >
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span className="hidden sm:inline">Pain Checker</span>
        </button>

        {/* WhatsApp Fast Connect */}
        <a
          href={`https://wa.me/919450000000?text=Hello%20Hope%20Dental%20Hospital%20Sadrauna,%20I%20would%20like%20to%20inquire%20about%20dental%20treatments.`}
          target="_blank"
          rel="noreferrer"
          className="p-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
          title="Chat with Reception on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
        </a>

        {/* Floating Book Appointment button for Mobile */}
        <button
          onClick={() => setIsBookingOpen(true)}
          className="sm:hidden px-4 py-2.5 bg-teal-600 text-white rounded-full font-bold text-xs shadow-xl flex items-center space-x-1.5 animate-bounce"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Slot</span>
        </button>
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
