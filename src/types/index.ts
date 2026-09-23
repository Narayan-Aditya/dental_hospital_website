export type Language = 'en' | 'hi';

export type PageId = 'home' | 'about' | 'services' | 'doctors' | 'reviews' | 'blogs' | 'contact';

export interface Treatment {
  id: string;
  title: string;
  titleHi: string;
  category: 'general' | 'rct' | 'implants' | 'ortho' | 'cosmetic' | 'pediatric' | 'surgery' | 'wellness';
  icon: string;
  shortDesc: string;
  shortDescHi: string;
  fullDesc: string;
  duration: string;
  painLevel: 'Zero / Painless' | 'Mild' | 'Moderate' | 'Local Anesthesia';
  startingPrice: number;
  popular?: boolean;
  benefits: string[];
  procedureSteps: { step: number; title: string; desc: string }[];
  imageBefore?: string;
  imageAfter?: string;
  afterCareTips: string[];
}

export interface Doctor {
  id: string;
  name: string;
  nameHi: string;
  qualification: string;
  role: string;
  roleHi: string;
  experienceYears: number;
  rating: number;
  reviewCount: number;
  image: string;
  availability: string;
  bio: string;
  languages: string[];
  specialities: string[];
}

export interface Appointment {
  id: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  patientAge: number;
  gender: 'Male' | 'Female' | 'Other';
  doctorId: string;
  treatmentId: string;
  date: string;
  timeSlot: string;
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
  items: InvoiceItem[];
  subtotal: number;
  taxGst: number;
  discount: number;
  totalAmount: number;
  paymentMode: 'UPI / QR' | 'Credit/Debit Card' | 'Cash at Counter' | 'NetBanking';
  paymentStatus: 'Paid' | 'Pending' | 'Partial';
  paymentDate: string;
  qrCodeData?: string;
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

export interface Facility {
  id: string;
  title: string;
  titleHi: string;
  desc: string;
  icon: string;
  badge: string;
  image: string;
}

export interface Review {
  id: string;
  patientName: string;
  rating: number;
  text: string;
  date: string;
  verifiedSource: 'Google' | 'JustDial' | 'Facebook' | 'In-Clinic';
  treatmentReceived: string;
  patientCity: string;
  doctorConsulted?: string;
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
