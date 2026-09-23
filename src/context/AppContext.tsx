import React, { createContext, useContext, useState, useEffect } from 'react';
import { Appointment, Invoice, Language, Treatment, Doctor, BlogPost, Review } from '../types';
import { INITIAL_APPOINTMENTS, INITIAL_INVOICES, TREATMENTS_DATA, DOCTORS_DATA, BLOGS_DATA, REVIEWS_DATA } from '../data/mockData';

export type ConceptTheme = 'clinical' | 'luxury' | 'promax';

interface AppContextType {
  concept: ConceptTheme;
  setConcept: (c: ConceptTheme) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  fontSize: 'normal' | 'large' | 'xlarge';
  setFontSize: (size: 'normal' | 'large' | 'xlarge') => void;
  highContrast: boolean;
  setHighContrast: (val: boolean) => void;
  
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
  
  addInvoice: (inv: Omit<Invoice, 'id' | 'invoiceNumber'>) => Invoice;
  findInvoice: (query: string) => Invoice | undefined;
  
  // Active Modals & View States
  isBookingOpen: boolean;
  setIsBookingOpen: (open: boolean) => void;
  selectedTreatmentIdForBooking: string | null;
  setSelectedTreatmentIdForBooking: (id: string | null) => void;
  selectedDoctorIdForBooking: string | null;
  setSelectedDoctorIdForBooking: (id: string | null) => void;
  
  isInvoiceModalOpen: boolean;
  setIsInvoiceModalOpen: (open: boolean) => void;
  activeInvoice: Invoice | null;
  setActiveInvoice: (inv: Invoice | null) => void;
  
  isSymptomCheckerOpen: boolean;
  setIsSymptomCheckerOpen: (open: boolean) => void;
  
  isEmergencyModalOpen: boolean;
  setIsEmergencyModalOpen: (open: boolean) => void;
  
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;

  isCostEstimatorOpen: boolean;
  setIsCostEstimatorOpen: (open: boolean) => void;
}

const DICTIONARY: Record<string, { en: string; hi: string }> = {
  // Nav
  'nav.home': { en: 'Home', hi: 'होम' },
  'nav.treatments': { en: 'Treatments', hi: 'उपचार व सेवाएं' },
  'nav.doctors': { en: 'Doctors', hi: 'डॉक्टर्स' },
  'nav.facilities': { en: 'Facilities', hi: 'सुविधाएं व तकनीक' },
  'nav.blogs': { en: 'Dental Blogs', hi: 'स्वास्थ्य ब्लॉग' },
  'nav.reviews': { en: 'Reviews', hi: 'मरीज समीक्षाएं' },
  'nav.pricing': { en: 'Cost Estimator', hi: 'खर्च कैलकुलेटर' },
  'nav.invoices': { en: 'Download Invoice', hi: 'बिल / इनवॉइस' },
  'nav.contact': { en: 'Contact & Location', hi: 'संपर्क व पता' },
  'nav.bookBtn': { en: 'Book Appointment', hi: 'अपॉइंटमेंट बुक करें' },
  'nav.emergencyBtn': { en: '24/7 Dental Emergency', hi: '२४/७ आपातकालीन सेवा' },
  
  // Hero
  'hero.badge': { en: 'Top Rated Dental Hospital in Sadrauna, Lucknow', hi: 'सदरौना, लखनऊ का अग्रणी दंत चिकित्सालय' },
  'hero.title1': { en: 'Crafting Confident Smiles with', hi: 'उन्नत तकनीक व सौम्य स्पर्श के साथ' },
  'hero.title2': { en: 'Gentle Care & Precision', hi: 'स्वस्थ और सुंदर मुस्कान' },
  'hero.sub': { en: 'Experience painless single-sitting root canals, lifetime warranty dental implants, and invisible aligners at Hope Dental Hospital & Wellness Centre.', hi: 'होप डेंटल हॉस्पिटल में पाएं दर्द रहित सिंगल-सिटिंग आरसीटी, स्थायी डेंटल इम्प्लांट्स और पारदर्शी क्लियर एलाइनर्स।' },
  'hero.ctaBook': { en: 'Book Fast Appointment (60s)', hi: 'तुरंत अपॉइंटमेंट बुक करें (६० से.)' },
  'hero.ctaServices': { en: 'Explore All Treatments', hi: 'सभी उपचार देखें' },
  'hero.ctaEmergency': { en: 'Instant Emergency Doctor Call', hi: 'आपातकालीन डॉक्टर को कॉल करें' },
  
  // Common
  'common.viewDetails': { en: 'View Details', hi: 'विस्तार से देखें' },
  'common.close': { en: 'Close', hi: 'बंद करें' },
  'common.submit': { en: 'Submit', hi: 'जमा करें' },
  'common.cancel': { en: 'Cancel', hi: 'रद्द करें' },
  'common.downloadPdf': { en: 'Download Official PDF', hi: 'आधिकारिक पीडीएफ डाउनलोड करें' },
  'common.print': { en: 'Print Bill', hi: 'प्रिंट करें' },
  'common.search': { en: 'Search', hi: 'खोजें' },
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [concept, setConcept] = useState<ConceptTheme>(() => {
    const saved = localStorage.getItem('hdh_concept_theme');
    return (saved as ConceptTheme) || 'clinical';
  });

  const [language, setLanguage] = useState<Language>('en');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [highContrast, setHighContrast] = useState<boolean>(false);
  
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
  
  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);
  const [activeInvoice, setActiveInvoice] = useState<Invoice | null>(null);
  
  const [isSymptomCheckerOpen, setIsSymptomCheckerOpen] = useState(false);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isCostEstimatorOpen, setIsCostEstimatorOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('hdh_concept_theme', concept);
  }, [concept]);

  useEffect(() => {
    localStorage.setItem('hdh_appointments', JSON.stringify(appointments));
  }, [appointments]);

  useEffect(() => {
    localStorage.setItem('hdh_invoices', JSON.stringify(invoices));
  }, [invoices]);

  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [highContrast]);

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

    const doctorObj = doctors.find(d => d.id === data.doctorId);
    const treatmentObj = treatments.find(t => t.id === data.treatmentId);
    
    const price = treatmentObj ? treatmentObj.startingPrice : 500;
    const invNum = `HDH-INV-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    
    const autoInvoice: Invoice = {
      id: `INV-${Date.now()}`,
      invoiceNumber: invNum,
      appointmentId: newId,
      patientName: data.patientName,
      patientPhone: data.patientPhone,
      patientAge: data.patientAge,
      patientGender: data.gender,
      patientAddress: 'Sadrauna, Lucknow, UP',
      date: data.date || new Date().toISOString().split('T')[0],
      doctorName: doctorObj ? doctorObj.name : 'Dr. Amit Verma (Consulting Surgeon)',
      items: [
        { id: '1', description: 'OPD Specialist Consultation & Oral Examination', hsnSac: '999312', qty: 1, unitPrice: 500, total: 500 },
        { id: '2', description: treatmentObj ? treatmentObj.title : 'Dental Procedure Treatment Fee', hsnSac: '999312', qty: 1, unitPrice: price, total: price }
      ],
      subtotal: 500 + price,
      taxGst: 0,
      discount: 200,
      totalAmount: 500 + price - 200,
      paymentMode: 'UPI / QR',
      paymentStatus: 'Pending',
      paymentDate: data.date || new Date().toISOString().split('T')[0],
      qrCodeData: `upi://pay?pa=hopedental@sbi&pn=HopeDentalHospital&am=${500 + price - 200}&tr=${invNum}`,
      notes: `Appointment Booking confirmation generated online. Reference: ${newId}`
    };

    setInvoices(prev => [autoInvoice, ...prev]);

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

  const addInvoice = (data: Omit<Invoice, 'id' | 'invoiceNumber'>): Invoice => {
    const invNum = `HDH-INV-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newInv: Invoice = {
      ...data,
      id: `INV-${Date.now()}`,
      invoiceNumber: invNum,
      qrCodeData: `upi://pay?pa=hopedental@sbi&pn=HopeDentalHospital&am=${data.totalAmount}&tr=${invNum}`,
    };
    setInvoices(prev => [newInv, ...prev]);
    return newInv;
  };

  const findInvoice = (query: string): Invoice | undefined => {
    const q = query.trim().toLowerCase();
    return invoices.find(inv => 
      inv.invoiceNumber.toLowerCase().includes(q) || 
      inv.patientPhone.includes(q) || 
      inv.patientName.toLowerCase().includes(q) ||
      (inv.appointmentId && inv.appointmentId.toLowerCase().includes(q))
    );
  };

  return (
    <AppContext.Provider value={{
      concept,
      setConcept,
      language,
      setLanguage,
      t,
      fontSize,
      setFontSize,
      highContrast,
      setHighContrast,
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
      addInvoice,
      findInvoice,
      isBookingOpen,
      setIsBookingOpen,
      selectedTreatmentIdForBooking,
      setSelectedTreatmentIdForBooking,
      selectedDoctorIdForBooking,
      setSelectedDoctorIdForBooking,
      isInvoiceModalOpen,
      setIsInvoiceModalOpen,
      activeInvoice,
      setActiveInvoice,
      isSymptomCheckerOpen,
      setIsSymptomCheckerOpen,
      isEmergencyModalOpen,
      setIsEmergencyModalOpen,
      isAdminOpen,
      setIsAdminOpen,
      isCostEstimatorOpen,
      setIsCostEstimatorOpen,
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
