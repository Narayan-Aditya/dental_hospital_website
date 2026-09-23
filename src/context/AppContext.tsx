import React, { createContext, useContext, useState, useEffect } from 'react';
import { Appointment, Invoice, Language, Treatment, Doctor, BlogPost, Review } from '../types';
import { INITIAL_APPOINTMENTS, INITIAL_INVOICES, TREATMENTS_DATA, DOCTORS_DATA, BLOGS_DATA, REVIEWS_DATA } from '../data/mockData';

export type ConceptTheme = 'clinical' | 'promax';

interface AppContextType {
  concept: ConceptTheme;
  setConcept: (c: ConceptTheme) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  toggleDarkMode: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  fontSize: 'normal' | 'large' | 'xlarge';
  setFontSize: (size: 'normal' | 'large' | 'xlarge') => void;
  
  // Data
  treatments: Treatment[];
  doctors: Doctor[];
  blogs: BlogPost[];
  reviews: Review[];
  appointments: Appointment[];
  invoices: Invoice[];
  
  // Actions
  addAppointment: (appt: Omit<Appointment, 'id' | 'createdAt' | 'status' | 'paymentStatus'>) => Appointment;
  cancelAppointment: (id: string) => boolean;
  rescheduleAppointment: (id: string, newDate: string, newSlot: string) => boolean;
  findAppointment: (query: string) => Appointment | undefined;
  
  // Active Modals & View States
  isBookingOpen: boolean;
  setIsBookingOpen: (open: boolean) => void;
  selectedTreatmentIdForBooking: string | null;
  setSelectedTreatmentIdForBooking: (id: string | null) => void;
  selectedDoctorIdForBooking: string | null;
  setSelectedDoctorIdForBooking: (id: string | null) => void;
}

const DICTIONARY: Record<string, { en: string; hi: string }> = {
  // Nav
  'nav.home': { en: 'Home', hi: 'होम' },
  'nav.about': { en: 'About Hospital', hi: 'अस्पताल के बारे में' },
  'nav.treatments': { en: 'Services & Treatments', hi: 'उपचार व सेवाएं' },
  'nav.doctors': { en: 'Doctors Details', hi: 'हमारे डॉक्टर्स' },
  'nav.reviews': { en: 'Customer Reviews', hi: 'मरीज समीक्षाएं' },
  'nav.blogs': { en: 'Dental Blogs', hi: 'स्वास्थ्य ब्लॉग' },
  'nav.contact': { en: 'Contact & Location', hi: 'संपर्क व पता' },
  'nav.bookBtn': { en: 'Book Appointment', hi: 'अपॉइंटमेंट बुक करें' },
  
  // Hero
  'hero.badge': { en: 'Top Rated Dental Hospital in Sadrauna, Lucknow', hi: 'सदरौना, लखनऊ का अग्रणी दंत चिकित्सालय' },
  'hero.ctaBook': { en: 'Book Fast Appointment (60s)', hi: 'तुरंत अपॉइंटमेंट बुक करें (६० से.)' },
  'hero.ctaServices': { en: 'Explore All Treatments', hi: 'सभी उपचार देखें' },
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [concept, setConcept] = useState<ConceptTheme>(() => {
    const saved = localStorage.getItem('hdh_concept_theme');
    return saved === 'promax' ? 'promax' : 'clinical';
  });

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('hdh_dark_mode');
    return saved ? JSON.parse(saved) : false;
  });

  const [language, setLanguage] = useState<Language>('en');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  
  const [treatments] = useState<Treatment[]>(TREATMENTS_DATA);
  const [doctors] = useState<Doctor[]>(DOCTORS_DATA);
  const [blogs] = useState<BlogPost[]>(BLOGS_DATA);
  const [reviews] = useState<Review[]>(REVIEWS_DATA);
  
  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    const saved = localStorage.getItem('hdh_appointments');
    return saved ? JSON.parse(saved) : INITIAL_APPOINTMENTS;
  });
  
  const [invoices, setInvoices] = useState<Invoice[]>(() => {
    const saved = localStorage.getItem('hdh_invoices');
    return saved ? JSON.parse(saved) : INITIAL_INVOICES;
  });

  // Modals
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTreatmentIdForBooking, setSelectedTreatmentIdForBooking] = useState<string | null>(null);
  const [selectedDoctorIdForBooking, setSelectedDoctorIdForBooking] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('hdh_concept_theme', concept);
  }, [concept]);

  useEffect(() => {
    localStorage.setItem('hdh_dark_mode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('hdh_appointments', JSON.stringify(appointments));
  }, [appointments]);

  useEffect(() => {
    localStorage.setItem('hdh_invoices', JSON.stringify(invoices));
  }, [invoices]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const t = (key: string): string => {
    if (DICTIONARY[key]) {
      return DICTIONARY[key][language] || DICTIONARY[key]['en'];
    }
    return key;
  };

  const addAppointment = (data: Omit<Appointment, 'id' | 'createdAt' | 'status' | 'paymentStatus'>): Appointment => {
    const newId = `HDH-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newAppt: Appointment = {
      ...data,
      id: newId,
      status: 'Confirmed',
      createdAt: new Date().toISOString(),
      paymentStatus: 'Pending',
    };
    
    setAppointments(prev => [newAppt, ...prev]);
    return newAppt;
  };

  const cancelAppointment = (id: string): boolean => {
    let found = false;
    setAppointments(prev => prev.map(a => {
      if (a.id.toLowerCase() === id.toLowerCase() || a.patientPhone === id) {
        found = true;
        return { ...a, status: 'Cancelled' as const };
      }
      return a;
    }));
    return found;
  };

  const rescheduleAppointment = (id: string, newDate: string, newSlot: string): boolean => {
    let found = false;
    setAppointments(prev => prev.map(a => {
      if (a.id.toLowerCase() === id.toLowerCase() || a.patientPhone === id) {
        found = true;
        return { ...a, date: newDate, timeSlot: newSlot, status: 'Rescheduled' as const };
      }
      return a;
    }));
    return found;
  };

  const findAppointment = (query: string): Appointment | undefined => {
    const q = query.trim().toLowerCase();
    return appointments.find(a => 
      a.id.toLowerCase() === q || 
      a.patientPhone.includes(q) || 
      a.patientName.toLowerCase().includes(q)
    );
  };

  return (
    <AppContext.Provider value={{
      concept,
      setConcept,
      darkMode,
      setDarkMode,
      toggleDarkMode,
      language,
      setLanguage,
      t,
      fontSize,
      setFontSize,
      treatments,
      doctors,
      blogs,
      reviews,
      appointments,
      invoices,
      addAppointment,
      cancelAppointment,
      rescheduleAppointment,
      findAppointment,
      isBookingOpen,
      setIsBookingOpen,
      selectedTreatmentIdForBooking,
      setSelectedTreatmentIdForBooking,
      selectedDoctorIdForBooking,
      setSelectedDoctorIdForBooking,
    }}>
      <div className={`${fontSize === 'large' ? 'text-lg' : fontSize === 'xlarge' ? 'text-xl' : 'text-base'}`}>
        {children}
      </div>
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
