import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  Appointment,
  Invoice,
  Language,
  Currency,
  Treatment,
  Doctor,
  ClinicBranch,
  Vertical,
  AwardItem,
  SmileTransformation,
  TreatmentCostItem,
  BlogPost,
  Review,
  EmergencyGuide,
  PageId
} from '../types';
import {
  HOSPITAL_INFO,
  INITIAL_APPOINTMENTS,
  INITIAL_INVOICES,
  TREATMENTS_DATA,
  DOCTORS_DATA,
  CLINIC_BRANCHES_DATA,
  VERTICALS_DATA,
  AWARDS_DATA,
  SMILE_TRANSFORMATIONS_DATA,
  TREATMENT_COST_DATA,
  BLOGS_DATA,
  REVIEWS_DATA,
  EMERGENCY_GUIDES
} from '../data/mockData';

export type ConceptTheme = 'clinical' | 'promax';

interface AppContextType {
  concept: ConceptTheme;
  setConcept: (c: ConceptTheme) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  toggleDarkMode: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  convertPrice: (inrAmount: number, targetCurrency?: Currency) => number;
  currencySymbol: (targetCurrency?: Currency) => string;
  t: (key: string) => string;
  fontSize: 'normal' | 'large' | 'xlarge';
  setFontSize: (size: 'normal' | 'large' | 'xlarge') => void;
  
  // Data
  hospitalInfo: typeof HOSPITAL_INFO;
  treatments: Treatment[];
  doctors: Doctor[];
  clinicBranches: ClinicBranch[];
  verticals: Vertical[];
  awards: AwardItem[];
  transformations: SmileTransformation[];
  costItems: TreatmentCostItem[];
  blogs: BlogPost[];
  reviews: Review[];
  emergencyGuides: EmergencyGuide[];
  appointments: Appointment[];
  invoices: Invoice[];
  
  // Actions
  addAppointment: (appt: Omit<Appointment, 'id' | 'createdAt' | 'status' | 'paymentStatus'>) => Appointment;
  cancelAppointment: (id: string) => boolean;
  rescheduleAppointment: (id: string, newDate: string, newSlot: string) => boolean;
  findAppointment: (query: string) => Appointment | undefined;
  
  // Page Routing & Navigation
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  navigateTo: (page: PageId) => void;

  // Active Modals & View States
  isBookingOpen: boolean;
  setIsBookingOpen: (open: boolean) => void;
  selectedBranchForBooking: string | null;
  setSelectedBranchForBooking: (id: string | null) => void;
  selectedTreatmentIdForBooking: string | null;
  setSelectedTreatmentIdForBooking: (id: string | null) => void;
  selectedDoctorIdForBooking: string | null;
  setSelectedDoctorIdForBooking: (id: string | null) => void;
  isEmergencyOpen: boolean;
  setIsEmergencyOpen: (open: boolean) => void;
  isCostCalculatorOpen: boolean;
  setIsCostCalculatorOpen: (open: boolean) => void;
  activeBlogModal: BlogPost | null;
  setActiveBlogModal: (blog: BlogPost | null) => void;
}

const DICTIONARY: Record<string, { en: string; te: string; hi: string }> = {
  // Nav
  'nav.home': { en: 'Home', te: 'హోమ్', hi: 'होम' },
  'nav.about': { en: 'About Us', te: 'మా గురించి', hi: 'हमारे बारे में' },
  'nav.specialties': { en: 'Specialties', te: 'చికిత్సలు', hi: 'विशेषज्ञताएं' },
  'nav.clinics': { en: 'Our Clinics', te: 'మా క్లినిక్‌లు', hi: 'हमारे केंद्र' },
  'nav.doctors': { en: 'Specialist Dentists', te: 'నిపుణులైన దంతవైద్యులు', hi: 'विशेषज्ञ डॉक्टर्स' },
  'nav.tourism': { en: 'Dental Tourism', te: 'డెంటల్ టూరిజం', hi: 'डेंटल टूरिज्म' },
  'nav.calculator': { en: 'Cost Estimator', te: 'ఖర్చు అంచనా', hi: 'इलाज खर्च कैलकुलेटर' },
  'nav.reviews': { en: 'Reviews & Stories', te: 'సమీక్షలు', hi: 'मरीज समीक्षाएं' },
  'nav.blogs': { en: 'Blog', te: 'బ్లాగ్', hi: 'स्वास्थ्य ब्लॉग' },
  'nav.contact': { en: 'Contact Us', te: 'సంప్రదించండి', hi: 'संपर्क करें' },
  'nav.bookBtn': { en: 'Book Appointment', te: 'అపాయింట్‌మెంట్ బుక్ చేయండి', hi: 'अपॉइंटमेंट बुक करें' },
  'nav.callUs': { en: 'Call Helpline', te: 'కాల్ చేయండి', hi: 'हेल्पलाइन कॉल करें' },
  
  // Hero
  'hero.badge': { 
    en: 'Top Rated Dental Hospital & Wellness Centre · Lucknow', 
    te: 'లక్నోలో అగ్రశ్రేణి మల్టీస్పెషాలిటీ డెంటల్ హాస్పిటల్', 
    hi: 'लखनऊ का शीर्ष रेटेड मल्टीस्पेशलिटी डेंटल हॉस्पिटल एवं वेलनेस सेंटर' 
  },
  'hero.title': { 
    en: 'Advanced Dental Implants, Laser Care & Oral Wellness', 
    te: 'అధునాతన డెంటల్ ఇంప్లాంట్స్, లేజర్ సంరక్షణ & ఓరల్ వెల్నెస్', 
    hi: 'आधुनिक डेंटल इम्प्लांट्स, लेज़र पायरिया इलाज एवं ओरल वेलनेस' 
  },
  'hero.subtitle': { 
    en: 'Multispecialty Dental Hospital with MDS Specialists, 5 Specialized Clinical Suites at Sadrauna Lucknow, and US-FDA Approved Laser & CBCT.', 
    te: 'ఎం.డి.ఎస్ నిపుణులతో లక్నోలోని అగ్రశ్రేణి డెంటల్ హాస్పిటల్.', 
    hi: 'एमडीएस विशेषज्ञ डॉक्टर्स, साद्रौना लखनऊ में 5 स्पेशलाइज्ड क्लिनिकल सुइट्स एवं 5.0★ रेटिंग।' 
  },
  'hero.ctaBook': { en: 'Book Appointment (60s)', te: 'అపాయింట్‌మెంట్ బుక్ చేయండి', hi: 'तुरंत अपॉइंटमेंट बुक करें (60 सेकंड)' },
  'hero.ctaFindClinic': { en: 'Find Nearest Clinic', te: 'సమీప క్లినిక్ కనుగొనండి', hi: 'पास का सेंटर खोजें' },
  'hero.ctaCalc': { en: 'Calculate Treatment Cost', te: 'ఖర్చు లెక్కించండి', hi: 'खर्च का अनुमान लगाएं' },
};

const VALID_PAGES: PageId[] = [
  'home',
  'about',
  'services',
  'doctors',
  'clinics',
  'tourism',
  'reviews',
  'blogs',
  'contact'
];

const getPageFromHash = (): PageId => {
  const hash = window.location.hash.replace('#', '').trim().toLowerCase();
  if (VALID_PAGES.includes(hash as PageId)) {
    return hash as PageId;
  }
  return 'home';
};

const CURRENCY_RATES: Record<Currency, { rateFromInr: number; symbol: string }> = {
  INR: { rateFromInr: 1, symbol: '₹' },
  USD: { rateFromInr: 0.012, symbol: '$' },
  GBP: { rateFromInr: 0.0095, symbol: '£' },
  EUR: { rateFromInr: 0.011, symbol: '€' },
  AED: { rateFromInr: 0.044, symbol: 'AED ' }
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
  const [currency, setCurrency] = useState<Currency>('INR');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  
  // Page Routing
  const [currentPage, setCurrentPage] = useState<PageId>(() => getPageFromHash());

  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    const saved = localStorage.getItem('hdh_appointments');
    return saved ? JSON.parse(saved) : INITIAL_APPOINTMENTS;
  });

  const [invoices, setInvoices] = useState<Invoice[]>(() => {
    const saved = localStorage.getItem('hdh_invoices');
    return saved ? JSON.parse(saved) : INITIAL_INVOICES;
  });

  // Modal states
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedBranchForBooking, setSelectedBranchForBooking] = useState<string | null>(null);
  const [selectedTreatmentIdForBooking, setSelectedTreatmentIdForBooking] = useState<string | null>(null);
  const [selectedDoctorIdForBooking, setSelectedDoctorIdForBooking] = useState<string | null>(null);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState<boolean>(false);
  const [isCostCalculatorOpen, setIsCostCalculatorOpen] = useState<boolean>(false);
  const [activeBlogModal, setActiveBlogModal] = useState<BlogPost | null>(null);

  // Sync Dark Mode with DOM
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('hdh_dark_mode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Sync Concept Theme
  useEffect(() => {
    localStorage.setItem('hdh_concept_theme', concept);
  }, [concept]);

  // Sync Hash changes with state
  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = useCallback((page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const convertPrice = useCallback((inrAmount: number, targetCurrency?: Currency): number => {
    const curr = targetCurrency || currency;
    const rate = CURRENCY_RATES[curr]?.rateFromInr || 1;
    if (curr === 'INR') return inrAmount;
    return Math.round(inrAmount * rate);
  }, [currency]);

  const currencySymbol = useCallback((targetCurrency?: Currency): string => {
    const curr = targetCurrency || currency;
    return CURRENCY_RATES[curr]?.symbol || '₹';
  }, [currency]);

  // Multilingual dictionary lookup
  const t = useCallback((key: string): string => {
    const entry = DICTIONARY[key];
    if (!entry) return key;
    return entry[language] || entry.en || key;
  }, [language]);

  // Add Appointment Action
  const addAppointment = (apptData: Omit<Appointment, 'id' | 'createdAt' | 'status' | 'paymentStatus'>): Appointment => {
    const newId = `HDH-APT-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newAppointment: Appointment = {
      ...apptData,
      id: newId,
      status: 'Confirmed',
      createdAt: new Date().toISOString(),
      paymentStatus: 'Paid',
      amount: apptData.consultationType === 'virtual' ? 1500 : 1000,
    };

    const updated = [newAppointment, ...appointments];
    setAppointments(updated);
    localStorage.setItem('hdh_appointments', JSON.stringify(updated));

    // Also auto-generate tax invoice
    const branch = CLINIC_BRANCHES_DATA.find(b => b.id === apptData.clinicBranchId);
    const doctor = DOCTORS_DATA.find(d => d.id === apptData.doctorId);
    const treatment = TREATMENTS_DATA.find(t => t.id === apptData.treatmentId);

    const newInvoice: Invoice = {
      id: `INV-${newId}`,
      invoiceNumber: `HDH/2026/09/${Math.floor(1000 + Math.random() * 9000)}`,
      appointmentId: newId,
      patientName: apptData.patientName,
      patientPhone: apptData.patientPhone,
      patientAge: apptData.patientAge,
      patientGender: apptData.gender,
      patientAddress: `${apptData.country || 'India'}`,
      date: apptData.date,
      doctorName: doctor ? doctor.name : 'Senior Consultant Specialist',
      branchName: branch ? branch.name : HOSPITAL_INFO.name,
      items: [
        {
          id: `item-${Date.now()}`,
          description: `${treatment ? treatment.title : 'Comprehensive Dental Consultation'} (${apptData.consultationType === 'virtual' ? 'Virtual Video E-Consultation' : 'In-Clinic'})`,
          hsnSac: '999312',
          qty: 1,
          unitPrice: newAppointment.amount || 1000,
          total: newAppointment.amount || 1000,
        }
      ],
      subtotal: newAppointment.amount || 1000,
      taxGst: 0,
      discount: 0,
      totalAmount: newAppointment.amount || 1000,
      paymentMode: 'UPI / QR',
      paymentStatus: 'Paid',
      paymentDate: new Date().toISOString().split('T')[0],
      notes: `Appointment token confirmed for ${apptData.timeSlot} on ${apptData.date}. Please arrive 10 minutes prior.`
    };

    const updatedInvoices = [newInvoice, ...invoices];
    setInvoices(updatedInvoices);
    localStorage.setItem('hdh_invoices', JSON.stringify(updatedInvoices));

    return newAppointment;
  };

  const cancelAppointment = (id: string): boolean => {
    const updated = appointments.map(a => a.id === id ? { ...a, status: 'Cancelled' as const } : a);
    setAppointments(updated);
    localStorage.setItem('hdh_appointments', JSON.stringify(updated));
    return true;
  };

  const rescheduleAppointment = (id: string, newDate: string, newSlot: string): boolean => {
    const updated = appointments.map(a => 
      a.id === id ? { ...a, date: newDate, timeSlot: newSlot, status: 'Rescheduled' as const } : a
    );
    setAppointments(updated);
    localStorage.setItem('hdh_appointments', JSON.stringify(updated));
    return true;
  };

  const findAppointment = (query: string): Appointment | undefined => {
    const clean = query.trim().toLowerCase();
    return appointments.find(a => 
      a.id.toLowerCase() === clean || 
      a.patientPhone.includes(clean) || 
      a.patientName.toLowerCase().includes(clean)
    );
  };

  return (
    <AppContext.Provider
      value={{
        concept,
        setConcept,
        darkMode,
        setDarkMode,
        toggleDarkMode,
        language,
        setLanguage,
        currency,
        setCurrency,
        convertPrice,
        currencySymbol,
        t,
        fontSize,
        setFontSize,
        hospitalInfo: HOSPITAL_INFO,
        treatments: TREATMENTS_DATA,
        doctors: DOCTORS_DATA,
        clinicBranches: CLINIC_BRANCHES_DATA,
        verticals: VERTICALS_DATA,
        awards: AWARDS_DATA,
        transformations: SMILE_TRANSFORMATIONS_DATA,
        costItems: TREATMENT_COST_DATA,
        blogs: BLOGS_DATA,
        reviews: REVIEWS_DATA,
        emergencyGuides: EMERGENCY_GUIDES,
        appointments,
        invoices,
        addAppointment,
        cancelAppointment,
        rescheduleAppointment,
        findAppointment,
        currentPage,
        setCurrentPage,
        navigateTo,
        isBookingOpen,
        setIsBookingOpen,
        selectedBranchForBooking,
        setSelectedBranchForBooking,
        selectedTreatmentIdForBooking,
        setSelectedTreatmentIdForBooking,
        selectedDoctorIdForBooking,
        setSelectedDoctorIdForBooking,
        isEmergencyOpen,
        setIsEmergencyOpen,
        isCostCalculatorOpen,
        setIsCostCalculatorOpen,
        activeBlogModal,
        setActiveBlogModal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
