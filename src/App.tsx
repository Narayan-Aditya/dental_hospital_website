import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileBottomDock } from './components/layout/MobileBottomDock';
import { BookingModal } from './components/modals/BookingModal';
import { CostCalculatorModal } from './components/modals/CostCalculatorModal';
import { EmergencyModal } from './components/modals/EmergencyModal';
import { BlogDetailModal } from './components/modals/BlogDetailModal';
import { MessageSquare, PhoneCall } from 'lucide-react';

// Separate Page Components
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { DoctorsPage } from './pages/DoctorsPage';
import { ClinicsPage } from './pages/ClinicsPage';
import { TourismPage } from './pages/TourismPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { BlogsPage } from './pages/BlogsPage';
import { ContactPage } from './pages/ContactPage';

const MainContent: React.FC = () => {
  const { currentPage, setIsEmergencyOpen } = useApp();

  const renderActivePage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'doctors':
        return <DoctorsPage />;
      case 'clinics':
        return <ClinicsPage />;
      case 'tourism':
        return <TourismPage />;
      case 'reviews':
        return <ReviewsPage />;
      case 'blogs':
        return <BlogsPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-[#f5900d] selection:text-white transition-colors duration-200 pb-16 sm:pb-0">
      {/* 1. Global Navigation Header */}
      <Navbar />

      {/* 2. Active Page Content */}
      <main className="flex-1">
        {renderActivePage()}
      </main>

      {/* 3. Global Footer */}
      <Footer />

      {/* 4. Global Modals & Micro-Processing Engines */}
      <BookingModal />
      <CostCalculatorModal />
      <EmergencyModal />
      <BlogDetailModal />

      {/* 5. Desktop Floating Action Quick Connects */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end space-y-3">
        {/* 24/7 Emergency Quick Pill */}
        <button
          onClick={() => setIsEmergencyOpen(true)}
          className="p-3.5 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
          title="24/7 Dental Emergency Triage"
        >
          <PhoneCall className="w-5 h-5" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 text-xs font-bold transition-all duration-300">
            24/7 Emergency
          </span>
        </button>

        {/* WhatsApp Specialist Connect */}
        <a
          href={`https://wa.me/917905287870?text=${encodeURIComponent(
            'Hello Hope Dental Hospital & Wellness Centre, I would like to inquire about dental treatments and appointments.'
          )}`}
          target="_blank"
          rel="noreferrer"
          className="p-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
          title="Chat with Hope Dental Reception on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 text-xs font-bold transition-all duration-300">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* 6. Mobile Browser Native Bottom Navigation Dock */}
      <MobileBottomDock />
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
