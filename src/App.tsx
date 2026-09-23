import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Concept3ProMax } from './components/concepts/Concept3ProMax';
import { BookingModal } from './components/modals/BookingModal';
import { MessageSquare, Calendar } from 'lucide-react';

const MainContent: React.FC = () => {
  const { setIsBookingOpen } = useApp();

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* UI UX Pro Max Dental Hospital Website */}
      <Concept3ProMax />

      {/* Shared Appointment Booking Modal */}
      <BookingModal />

      {/* Floating Quick Action Buttons */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end space-y-2.5">
        {/* WhatsApp Fast Connect */}
        <a
          href="https://wa.me/919450000000?text=Hello%20Hope%20Dental%20Hospital%20Sadrauna,%20I%20would%20like%20to%20inquire%20about%20dental%20treatments."
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
