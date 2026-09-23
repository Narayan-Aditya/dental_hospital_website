import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileBottomDock } from './components/layout/MobileBottomDock';
import { BookingModal } from './components/modals/BookingModal';
import { MessageSquare } from 'lucide-react';

// Separate Page Components
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { DoctorsPage } from './pages/DoctorsPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { BlogsPage } from './pages/BlogsPage';
import { ContactPage } from './pages/ContactPage';

const MainContent: React.FC = () => {
  const { language, currentPage } = useApp();

  const renderActivePage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'doctors':
        return <DoctorsPage />;
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
    <div className="min-h-screen flex flex-col relative bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-teal-600 selection:text-white transition-colors duration-200 pb-20 sm:pb-0">
      {/* 1. Global Navigation Header */}
      <Navbar />

      {/* 2. Active Page Content */}
      <main className="flex-1">
        {renderActivePage()}
      </main>

      {/* 3. Global Footer */}
      <Footer />

      {/* 4. Shared Appointment Booking Modal (Accessible from any page) */}
      <BookingModal />

      {/* 5. Desktop Floating WhatsApp Connect */}
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
