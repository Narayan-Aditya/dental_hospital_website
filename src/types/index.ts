export type Language = 'en' | 'te' | 'hi';

export type Currency = 'INR' | 'USD' | 'GBP' | 'EUR' | 'AED';

export type PageId = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'doctors' 
  | 'clinics' 
  | 'tourism' 
  | 'reviews' 
  | 'blogs' 
  | 'contact';

export interface Treatment {
  id: string;
  title: string;
  titleHi: string;
  titleTe?: string;
  category: 
    | 'implants' 
    | 'cosmetic' 
    | 'orthodontics' 
    | 'endodontics' 
    | 'periodontics' 
    | 'surgery' 
    | 'pediatric' 
    | 'prosthodontics' 
    | 'tmj' 
    | 'laser' 
    | 'radiology' 
    | 'sedation';
  icon: string;
  shortDesc: string;
  shortDescHi: string;
  fullDesc: string;
  duration: string;
  painLevel: 'Zero / Painless' | 'Mild' | 'Moderate' | 'Local Anesthesia' | 'General Anesthesia (Optional)';
  startingPriceInr: number;
  startingPriceUsd: number;
  popular?: boolean;
  technologyUsed: string[];
  benefits: string[];
  procedureSteps: { step: number; title: string; desc: string }[];
  afterCareTips: string[];
}

export interface Doctor {
  id: string;
  name: string;
  nameHi: string;
  qualification: string;
  designation: string;
  role: string;
  roleHi: string;
  experienceYears: number;
  rating: number;
  reviewCount: number;
  image: string;
  primaryBranch: string;
  department: string;
  bio: string;
  accolades: string[];
  languages: string[];
  specialities: string[];
}

export interface ClinicBranch {
  id: string;
  branchNumber: string;
  name: string;
  badge?: string;
  city: 'Lucknow';
  type: 'flagship' | 'international' | 'hospital' | 'multispecialty';
  address: string;
  landmark: string;
  phone: string;
  altPhone?: string;
  timings: string;
  sundayTimings?: string;
  establishedYear: number;
  specialties: string[];
  facilities: string[];
  doctorsCount: number;
  mapQuery: string;
  isNabhAccredited?: boolean;
  image?: string;
}

export interface Vertical {
  id: string;
  num: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  highlights: string[];
  image: string;
}

export interface TreatmentCostItem {
  id: string;
  treatmentName: string;
  category: 'implants' | 'cosmetic' | 'ortho' | 'endodontics' | 'fullmouth' | 'surgery';
  variant: string;
  brandOrMaterial: string;
  priceInr: number;
  priceUsd: number;
  priceGbp: number;
  priceEur: number;
  priceAed: number;
  usAvgUsd: number;
  ukAvgGbp: number;
  durationDays: number;
  visitsCount: number;
  warranty: string;
  description: string;
}

export interface AwardItem {
  id: string;
  title: string;
  year: string;
  organization: string;
  location: string;
  highlight: string;
  badgeColor?: string;
}

export interface SmileTransformation {
  id: string;
  title: string;
  category: string;
  patientAgeCity: string;
  procedure: string;
  duration: string;
  doctorName: string;
  beforeImage: string;
  afterImage: string;
  patientFeedback: string;
}

export interface Appointment {
  id: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  patientAge: number;
  gender: 'Male' | 'Female' | 'Other';
  clinicBranchId: string;
  doctorId: string;
  treatmentId: string;
  consultationType: 'in-person' | 'virtual';
  date: string;
  timeSlot: string;
  country: string;
  isNewPatient: boolean;
  notes?: string;
  xRayAttached?: boolean;
  status: 'Confirmed' | 'Pending' | 'Completed' | 'Rescheduled' | 'Cancelled';
  createdAt: string;
  paymentStatus: 'Paid' | 'Pending' | 'Partial';
  amount?: number;
}

export interface InvoiceItem {
  id: string;
  description: string;
  hsnSac: string;
  qty: number;
  unitPrice: number;
  total: number;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  appointmentId?: string;
  patientName: string;
  patientPhone: string;
  patientAge?: number;
  patientGender?: string;
  patientAddress: string;
  date: string;
  doctorName: string;
  branchName: string;
  items: InvoiceItem[];
  subtotal: number;
  taxGst: number;
  discount: number;
  totalAmount: number;
  paymentMode: 'UPI / QR' | 'Credit/Debit Card' | 'Cash at Counter' | 'NetBanking' | 'International Wire';
  paymentStatus: 'Paid' | 'Pending' | 'Partial';
  paymentDate: string;
  notes?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleHi: string;
  summary: string;
  summaryHi: string;
  content: string;
  category: string;
  readTime: string;
  authorDoctor: string;
  authorRole: string;
  date: string;
  tags: string[];
  imageUrl: string;
  views: number;
  likesCount: number;
}

export interface Review {
  id: string;
  patientName: string;
  rating: number;
  text: string;
  date: string;
  verifiedSource: 'Google' | 'GCR' | 'WhatClinic' | 'Practo' | 'JustDial' | 'Facebook' | 'In-Clinic' | string;
  treatmentReceived: string;
  patientCity: string;
  country?: string;
  doctorConsulted?: string;
  branch?: string;
}

export interface EmergencyGuide {
  id: string;
  title: string;
  titleHi: string;
  icon: string;
  symptom: string;
  quickSteps: string[];
  urgency: 'Immediate (within 1 hour)' | 'Urgent (same day)' | 'Prompt (within 24h)';
}
