import React, { useState } from 'react';
import { 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Stethoscope, 
  Award,
  Globe,
  Clock,
  Zap,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  ArrowUpRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BeforeAfterSlider } from '../components/common/BeforeAfterSlider';

export const HomePage: React.FC = () => {
  const { 
    hospitalInfo,
    verticals,
    treatments, 
    transformations,
    convertPrice,
    currencySymbol,
    setIsBookingOpen, 
    setSelectedTreatmentIdForBooking,
    setSelectedDoctorIdForBooking,
    navigateTo 
  } = useApp();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Quick consultation form states in Section 6
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formClinic, setFormClinic] = useState('Sadrauna Hospital Campus');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredTreatments = treatments.filter(t => {
    if (activeCategory === 'all') return true;
    return t.category === activeCategory;
  });

  const handleBookTreatment = (treatmentId: string) => {
    setSelectedTreatmentIdForBooking(treatmentId);
    setIsBookingOpen(true);
  };

  const handleBookDoctor = (doctorId: string) => {
    setSelectedDoctorIdForBooking(doctorId);
    setIsBookingOpen(true);
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formPhone.trim()) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormName('');
      setFormPhone('');
      setIsBookingOpen(true);
    }, 1500);
  };

  const faqs = [
    {
      q: "Does Hope Dental Hospital have other branches or franchises?",
      a: "No. Hope Dental Hospital & Wellness Centre is strictly a single, standalone specialized hospital campus located in Sadrauna, Para Road, Mohan Road, Lucknow (Pin 226011). We do not operate external third-party franchises, ensuring every procedure is strictly supervised by our senior faculty and founders."
    },
    {
      q: "How many days are required for full-mouth dental implants (All-on-4)?",
      a: "With our 3D CBCT guided surgical workflow and high-precision digital dental laboratory, most All-on-4 and All-on-6 full arch procedures allow fixed provisional functional teeth to be fitted within 3 to 5 days. For outstation or overseas patients, a stay of 7 to 10 days is recommended for comprehensive post-op review."
    },
    {
      q: "Why are dental implants significantly more affordable at Hope Dental Hospital compared to the USA/UK?",
      a: "We utilize the exact same authentic, internationally warrantied implant systems (Nobel Biocare Sweden, Straumann Switzerland, Osstem) as premier clinics in Beverly Hills or London. The substantial savings stem from lower operational hospital overheads in India and favorable currency exchange rates—never by cutting corners on clinical sterile protocols or titanium purity."
    },
    {
      q: "What makes Hope Dental Hospital different from a typical dental clinic?",
      a: "Hope Dental Hospital is an accredited healthcare institution with dedicated surgical operatory suites, a Biolase Waterlase laser unit, an in-house digital CAD/CAM workflow, and strict 7-step Class-B autoclave sterilization. A general dentist never performs complex surgical implants or root canals here—every chair is manned by a qualified MDS specialist."
    },
    {
      q: "How does Hope Dental Hospital support outstation and NRI dental tourism patients?",
      a: "Our Patient Concierge provides advance digital treatment planning from your X-rays or CBCT before travel, complimentary Lucknow airport transfers, local luxury stay coordination, priority fast-track scheduling, and comprehensive multi-lingual assistance."
    }
  ];

  return (
    <div className="animate-fadeIn font-sans text-slate-800 dark:text-slate-100">
      
      {/* ========================================================================= */}
      {/* 1. SECTION 1: EXACT FMS HERO CURVED SECTION (fms-hero-curved)             */}
      {/* ========================================================================= */}
      <section 
        className="relative overflow-hidden text-white pt-8 pb-16 sm:pb-20"
        style={{
          background: 'radial-gradient(circle at 80% 15%, rgba(232, 185, 106, 0.12) 0px, transparent 35%), linear-gradient(135deg, rgb(6, 19, 31) 0%, rgb(8, 23, 38) 45%, rgb(13, 34, 52) 100%)'
        }}
      >
        {/* Subtle hospital facade banner at top matching FMS street banner */}
        <div className="absolute top-0 left-0 right-0 h-40 sm:h-52 opacity-15 overflow-hidden pointer-events-none">
          <img 
            src="./images/hope/real_clinic_7_.jpg" 
            alt="Hope Dental Hospital Lucknow" 
            className="w-full h-full object-cover filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#06131f]/80 to-[#06131f]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 7 Columns: Eyebrow, Giant Title, Paragraph & Verified Profiles */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Eyebrow matching FMS: — HOPE DENTAL HOSPITALS — */}
              <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-[#d4a359]">
                <span>—</span>
                <span>HOPE DENTAL HOSPITAL</span>
                <span>—</span>
              </div>

              {/* Giant Title matching FMS: Best Dental Clinic in Lucknow, India - HOPE DENTAL */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]">
                Best Dental Clinic in Lucknow, India - <span className="text-[#f5900d]">HOPE DENTAL</span>
              </h1>

              {/* Subhead matching FMS */}
              <p className="text-sm sm:text-base font-semibold text-slate-200">
                Where Top Dental Specialists for Dental Implants & Cosmetic Dentistry are available
              </p>

              {/* Description matching FMS structure with authentic Hope Dental Lucknow facts */}
              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2.5 max-w-2xl">
                <p>
                  HOPE DENTAL... the best dental clinic in Lucknow, established in Sadrauna and creating miles of smiles across Uttar Pradesh.
                </p>
                <p>
                  <strong className="text-white">HOPE DENTAL is rated 5.0 ★ on Google (151+ reviews) & Justdial (148+ ratings)</strong> and recognized as one of the top dental hospitals in Lucknow, with 5 specialized clinical suites, digital intraoral imaging, 24-hour emergency dental care, and a dedicated 7-step Class-B autoclave sterilization protocol. Led by <strong className="text-white">Dr. Himangi Dubey</strong> (BDS, MDS – KGMU Lucknow, ex-Senior Resident KGMU) and <strong className="text-white">Dr. M. S. Bhoj</strong> (Senior Consultant Oral & Maxillofacial Surgeon).
                </p>
                <p>
                  <strong className="text-white">Awarded Appreciation at the 8th UP Dental Show 2026</strong> and renowned for advanced Biolase laser treatments, cosmetic veneers, invisible aligners, and dental tourism packages for domestic & overseas patients.
                </p>
              </div>

              {/* 4 Authentic Public Verification Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <a 
                  href={hospitalInfo.socialLinks?.google || 'https://share.google/M13VNXGp52dAKKUWl'} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-[#0f2136]/80 hover:bg-[#142d4a] border border-slate-700/70 hover:border-[#f5900d] transition-all group"
                >
                  <div className="text-[#f5900d] font-black text-lg">5.0 ★</div>
                  <div className="text-white text-xs font-bold flex items-center space-x-1">
                    <span>Google Reviews</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#f5900d]" />
                  </div>
                  <div className="text-[10px] text-slate-400">151+ Verified</div>
                </a>

                <a 
                  href={hospitalInfo.socialLinks?.justdial || 'https://jsdl.in/DT-39XTVYSNSB8'} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-[#0f2136]/80 hover:bg-[#142d4a] border border-slate-700/70 hover:border-[#f5900d] transition-all group"
                >
                  <div className="text-[#ff6a00] font-black text-lg">5.0 ★</div>
                  <div className="text-white text-xs font-bold flex items-center space-x-1">
                    <span>Justdial Rating</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#ff6a00]" />
                  </div>
                  <div className="text-[10px] text-slate-400">148+ Ratings</div>
                </a>

                <a 
                  href={hospitalInfo.socialLinks?.youtube || 'https://youtube.com/@drhimangidubey_hopedental?si=dICNBMYUw_9KpXfp'} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-[#0f2136]/80 hover:bg-[#142d4a] border border-slate-700/70 hover:border-red-400 transition-all group"
                >
                  <div className="text-red-400 font-black text-lg">YouTube</div>
                  <div className="text-white text-xs font-bold flex items-center space-x-1">
                    <span>Dr. Himangi Dubey</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-red-400" />
                  </div>
                  <div className="text-[10px] text-slate-400">Official Channel</div>
                </a>

                <a 
                  href={hospitalInfo.socialLinks?.facebook || 'https://www.facebook.com/p/Hope-Dental-Hospital-and-Wellness-Center-100083540701821/'} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-2xl bg-[#0f2136]/80 hover:bg-[#142d4a] border border-slate-700/70 hover:border-blue-400 transition-all group"
                >
                  <div className="text-blue-400 font-black text-lg">Facebook</div>
                  <div className="text-white text-xs font-bold flex items-center space-x-1">
                    <span>Hope Wellness</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-400" />
                  </div>
                  <div className="text-[10px] text-slate-400">Official Page</div>
                </a>
              </div>

            </div>

            {/* Right 5 Columns: EXACT FMS 4 CURVED QUICK-ACTION CARDS (2x2 Grid) */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Card 1: FOR APPOINTMENTS */}
                <div 
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-[#0f2136]/90 hover:bg-[#132c49] border border-slate-700/70 hover:border-[#f5900d] p-6 rounded-3xl cursor-pointer transition-all shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#f5900d]/15 border border-[#f5900d]/30 text-[#f5900d] flex items-center justify-center mb-4">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#f5900d] block">
                      FOR APPOINTMENTS
                    </span>
                    <h3 className="text-base font-bold text-white mt-1 group-hover:text-[#f5900d] transition-colors">
                      Book Your Appointment
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      Call +91 79052 87870 or fill the 60-second online form.
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-700/60 flex items-center text-xs font-bold text-[#f5900d] group-hover:translate-x-1 transition-transform">
                    <span>KNOW MORE</span>
                    <span className="ml-1">→</span>
                  </div>
                </div>

                {/* Card 2: E-CONSULTATION */}
                <div 
                  onClick={() => navigateTo('contact')}
                  className="bg-[#0f2136]/90 hover:bg-[#132c49] border border-slate-700/70 hover:border-[#f5900d] p-6 rounded-3xl cursor-pointer transition-all shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#f5900d]/15 border border-[#f5900d]/30 text-[#f5900d] flex items-center justify-center mb-4">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#f5900d] block">
                      E-CONSULTATION
                    </span>
                    <h3 className="text-base font-bold text-white mt-1 group-hover:text-[#f5900d] transition-colors">
                      Talk to a Specialist
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      Consult with Dr. Himangi Dubey and senior implant faculty.
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-700/60 flex items-center text-xs font-bold text-[#f5900d] group-hover:translate-x-1 transition-transform">
                    <span>KNOW MORE</span>
                    <span className="ml-1">→</span>
                  </div>
                </div>

                {/* Card 3: FIND A DOCTOR */}
                <div 
                  onClick={() => navigateTo('doctors')}
                  className="bg-[#0f2136]/90 hover:bg-[#132c49] border border-slate-700/70 hover:border-[#f5900d] p-6 rounded-3xl cursor-pointer transition-all shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#f5900d]/15 border border-[#f5900d]/30 text-[#f5900d] flex items-center justify-center mb-4">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#f5900d] block">
                      FIND A DOCTOR
                    </span>
                    <h3 className="text-base font-bold text-white mt-1 group-hover:text-[#f5900d] transition-colors">
                      Find a Specialist
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      MDS Periodontists, Implantologists & Surgeons.
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-700/60 flex items-center text-xs font-bold text-[#f5900d] group-hover:translate-x-1 transition-transform">
                    <span>KNOW MORE</span>
                    <span className="ml-1">→</span>
                  </div>
                </div>

                {/* Card 4: VIRTUAL HELP DESK */}
                <div 
                  onClick={() => navigateTo('tourism')}
                  className="bg-[#0f2136]/90 hover:bg-[#132c49] border border-slate-700/70 hover:border-[#f5900d] p-6 rounded-3xl cursor-pointer transition-all shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#f5900d]/15 border border-[#f5900d]/30 text-[#f5900d] flex items-center justify-center mb-4">
                      <Globe className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#f5900d] block">
                      VIRTUAL HELP DESK
                    </span>
                    <h3 className="text-base font-bold text-white mt-1 group-hover:text-[#f5900d] transition-colors">
                      Dental Tourism
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      Concierge care for outstation, domestic & NRI patients.
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-700/60 flex items-center text-xs font-bold text-[#f5900d] group-hover:translate-x-1 transition-transform">
                    <span>KNOW MORE</span>
                    <span className="ml-1">→</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION 2: ACCREDITATION RIBBON STRIP (Dark Ribbon with Gold Sep.)     */}
      {/* ========================================================================= */}
      <div className="bg-[#081726] text-white py-3.5 px-4 overflow-x-auto border-y border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 text-[11px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap">
          <div className="flex items-center space-x-2 text-[#f5900d]">
            <Star className="w-4 h-4 fill-current" />
            <span>5.0 ★ GOOGLE & JUSTDIAL RATED</span>
          </div>
          <span className="text-[#f5900d]/60">✦</span>
          <div className="flex items-center space-x-2 text-slate-200">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>7-STEP CLASS B AUTOCLAVE STERILIZATION</span>
          </div>
          <span className="text-[#f5900d]/60">✦</span>
          <div className="flex items-center space-x-2 text-[#f5900d]">
            <Award className="w-4 h-4" />
            <span>8TH UP DENTAL SHOW 2026 AWARDEE</span>
          </div>
          <span className="text-[#f5900d]/60">✦</span>
          <div className="flex items-center space-x-2 text-slate-200">
            <span>NABH COMPLIANT HOSPITAL PROTOCOLS</span>
          </div>
          <span className="text-[#f5900d]/60">✦</span>
          <div className="flex items-center space-x-2 text-red-400">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>24/7 DENTAL EMERGENCY HELPLINE</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. SECTION 3: EXACT FMS INTERNATIONAL DENTAL CENTER LANDMARK SECTION       */}
      {/* ========================================================================= */}
      <section className="bg-white dark:bg-slate-950 py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 6 Columns: Architectural Hospital Photo with Floating Badge */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 relative group aspect-4/3 bg-slate-100 dark:bg-slate-900">
                <img 
                  src="./images/hope/real_clinic_7_.jpg" 
                  alt="Hope Dental Hospital Lucknow Campus" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = './verticals/vertical-flagship.webp';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating pill badge at bottom-left */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
                  <span className="text-xs font-black text-[#0b1f3a] dark:text-white uppercase tracking-tight block">
                    HOPE DENTAL HOSPITAL & WELLNESS CENTRE
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">
                    Standalone Hospital Campus · Sadrauna, Lucknow
                  </span>
                </div>
              </div>
            </div>

            {/* Right 6 Columns: Eyebrow, Title, Boxes & Buttons */}
            <div className="lg:col-span-6 space-y-5">
              
              <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-[#f5900d]">
                <span>—</span>
                <span>HOPE DENTAL HOSPITAL</span>
                <span>—</span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0b1f3a] dark:text-white tracking-tight leading-tight">
                    HOPE DENTAL HOSPITAL - Advanced Dental Implant Clinic
                  </h2>
                  <p className="text-sm sm:text-base font-bold text-[#f5900d] mt-1">
                    Best Dental Implant Clinic in Lucknow, India
                  </p>
                </div>

                <button
                  onClick={() => navigateTo('clinics')}
                  className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 hover:border-[#f5900d] text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-[#f5900d] shrink-0 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Today, HOPE DENTAL operates an international-standard dental hospital that provides <strong>global-quality dental care for both Indian and international patients</strong>, using advanced technology, Class-B autoclave sterilization systems from some of the senior dental specialists in Lucknow, India.
              </p>

              {/* Box 1: VISIT OUR HOSPITAL, Lucknow */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-full bg-[#0b1f3a] text-[#f5900d] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#f5900d] block">
                    VISIT OUR HOSPITAL, Lucknow
                  </span>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                    Door No. 1779 Near Bramha Dev Mandir, Sadrauna Road, Para Rd, Munnu Khera, Lucknow – 226011
                  </p>
                </div>
              </div>

              {/* Row of 2 boxes: CALL US & OPENING HOURS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#0b1f3a] text-[#f5900d] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                      CALL US
                    </span>
                    <a href={`tel:${hospitalInfo.phone.replace(/\s+/g, '')}`} className="text-xs font-bold text-slate-900 dark:text-white hover:text-[#f5900d] transition-colors">
                      {hospitalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#0b1f3a] text-[#f5900d] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                      OPENING HOURS
                    </span>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      Monday–Sunday: 10:00 AM–8:00 PM
                    </div>
                  </div>
                </div>
              </div>

              {/* Row of 3 buttons matching FMS */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <a
                  href="https://maps.google.com/?q=Hope+Dental+Hospital+Sadrauna+Lucknow"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#0b1f3a] hover:bg-[#163864] text-white font-bold text-xs shadow-md transition-all flex items-center space-x-1.5"
                >
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`tel:${hospitalInfo.phone.replace(/\s+/g, '')}`}
                  className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-[#f5900d] text-slate-800 dark:text-white font-bold text-xs shadow-sm transition-all flex items-center space-x-1.5"
                >
                  <span>Call</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-[#f5900d] text-slate-800 dark:text-white font-bold text-xs shadow-sm transition-all flex items-center space-x-1.5"
                >
                  <span>Book Appointment</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

          {/* Bottom 4 Feature Pillars with vertical dividers matching FMS */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-1">
              <h4 className="text-xs font-black text-[#0b1f3a] dark:text-white uppercase tracking-wider">
                GLOBAL STANDARDS
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                International-quality dental care with strict sterilization protocols.
              </p>
            </div>

            <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-slate-800 sm:pl-6 pt-4 sm:pt-0">
              <h4 className="text-xs font-black text-[#0b1f3a] dark:text-white uppercase tracking-wider">
                ADVANCED TECHNOLOGY
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Biolase Waterlase laser, digital intraoral 3D scans & CBCT.
              </p>
            </div>

            <div className="space-y-1 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 lg:pl-6 pt-4 lg:pt-0">
              <h4 className="text-xs font-black text-[#0b1f3a] dark:text-white uppercase tracking-wider">
                PREMIUM EXPERIENCE
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Personalized patient care and private clinical suites.
              </p>
            </div>

            <div className="space-y-1 border-t sm:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 lg:pl-6 pt-4 lg:pt-0">
              <h4 className="text-xs font-black text-[#0b1f3a] dark:text-white uppercase tracking-wider">
                DENTAL TOURISM
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Concierge dental care for domestic, outstation & international patients.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECTION 4: EXACT FMS EXPERTISE & SENIOR DENTISTS SEARCH SECTION        */}
      {/* ========================================================================= */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-[#f5900d]">
                <span>—</span>
                <span>HOPE DENTAL · EXPERTISE & EXPERIENCE</span>
                <span>—</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b1f3a] dark:text-white tracking-tight leading-tight">
                Are you searching for the most experienced & best dentists in Lucknow, India? <span className="text-[#f5900d]">Find them at HOPE DENTAL.</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Yes. One of the strongest pillars behind the reputation of <strong>HOPE DENTAL</strong> as one of the leading dental hospitals in Lucknow is the <strong>exceptional depth of experience within its team of specialists</strong>.
              </p>
            </div>

            {/* Circular badge on top right matching FMS */}
            <div className="shrink-0 flex items-center justify-center">
              <div className="w-36 h-36 rounded-full border-2 border-dashed border-[#f5900d]/40 flex flex-col items-center justify-center text-center p-3 bg-white dark:bg-slate-800 shadow-lg">
                <span className="text-3xl font-black text-[#0b1f3a] dark:text-white">10+</span>
                <span className="text-[10px] font-extrabold text-[#f5900d] uppercase tracking-wider mt-0.5">
                  YEARS OF CLINICAL EXPERTISE
                </span>
              </div>
            </div>
          </div>

          {/* Card 01: Led by Senior Dentists with Decades of Experience */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-md space-y-4 relative">
            <span className="absolute top-6 right-6 text-xs font-mono text-slate-400">01</span>
            
            <div className="w-10 h-10 rounded-full bg-[#0b1f3a] text-[#f5900d] flex items-center justify-center shadow-sm">
              <Star className="w-5 h-5 fill-current" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#0b1f3a] dark:text-white">
              Led by Senior Dentists with Decades of Experience
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
              HOPE DENTAL is guided by renowned Top Dentists in Lucknow, <strong>Dr. Himangi Dubey</strong> (BDS, MDS – KGMU Lucknow, Periodontist & Implantologist) and <strong>Dr. M. S. Bhoj</strong> (Senior Consultant Oral & Maxillofacial Surgeon), each bringing extensive clinical expertise and leadership in advanced dentistry. Besides their expertise in their respective specialties, particularly <strong>cosmetic dentistry and dental implants</strong>, they lead a multidisciplinary team managing complex dental rehabilitations.
            </p>

            <div className="pt-3 flex flex-wrap gap-3">
              <button
                onClick={() => handleBookDoctor('dr-himangi-dubey')}
                className="px-5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-[#f5900d] text-xs font-bold text-slate-900 dark:text-white flex items-center space-x-2 transition-colors"
              >
                <span>Dr. Himangi Dubey</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#f5900d]" />
              </button>

              <button
                onClick={() => handleBookDoctor('dr-ms-bhoj')}
                className="px-5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-[#f5900d] text-xs font-bold text-slate-900 dark:text-white flex items-center space-x-2 transition-colors"
              >
                <span>Dr. M. S. Bhoj</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#f5900d]" />
              </button>
            </div>
          </div>

          {/* Cards 02 and 03: 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 02: A Team of Highly Experienced Specialists */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-md space-y-4 relative flex flex-col justify-between">
              <span className="absolute top-6 right-6 text-xs font-mono text-slate-400">02</span>
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#0b1f3a] text-[#f5900d] flex items-center justify-center shadow-sm">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#0b1f3a] dark:text-white">
                  A Team of Highly Experienced Specialists
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  The institution brings together <strong>12+ dental specialists</strong>, many with extensive postgraduate experience from King George's Medical University across all major branches of dentistry.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-baseline space-x-2">
                <span className="text-3xl font-black text-[#0b1f3a] dark:text-white">12+</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">DENTAL SPECIALISTS</span>
              </div>
            </div>

            {/* Card 03: Decades of Expertise Across Every Dental Specialty */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-md space-y-4 relative flex flex-col justify-between">
              <span className="absolute top-6 right-6 text-xs font-mono text-slate-400">03</span>
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#0b1f3a] text-[#f5900d] flex items-center justify-center shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#0b1f3a] dark:text-white">
                  Decades of Expertise Across Every Dental Specialty
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Comprehensive care is provided through specialists in <strong>implantology, cosmetic dentistry, orthodontics, endodontics, periodontics, prosthodontics, oral and maxillofacial surgery, pediatric dentistry, TMJ therapy, and laser dentistry</strong>.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex flex-wrap gap-1.5">
                {['Implantology', 'Cosmetic Dentistry', 'Laser Periodontics', 'Orthodontics', 'Microscopic RCT', 'Maxillofacial', 'Pedodontics', 'TMJ Therapy'].map((s, idx) => (
                  <span key={idx} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                    {s}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SECTION 5: EXACT FMS SENIOR DENTISTS SHOWCASE (fms-senior-dentists)    */}
      {/* ========================================================================= */}
      <section className="bg-[#081726] text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#f5900d] block">
              DIRECTION · GOVERNANCE · COMPLEX CASE REVIEW
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Senior most Dentists at HOPE DENTAL
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              The senior clinicians at HOPE DENTAL review the hospital's most complex full-mouth and aesthetic cases personally. Every complex case is planned with academic precision and multidimensional surgical expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Dr. Himangi Dubey */}
            <div className="bg-[#0c1f33] rounded-3xl p-6 border border-slate-800 hover:border-[#f5900d]/60 shadow-xl transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                {/* Gold horizontal accent bar on top matching FMS */}
                <div className="w-12 h-1 bg-[#f5900d]" />

                <div className="relative overflow-hidden rounded-2xl aspect-square border border-[#c5a059]/40 bg-slate-800">
                  <img 
                    src="./doctors/dr-shailaja-reddy.webp" 
                    alt="Dr. Himangi Dubey" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#f5900d] transition-colors">
                    Dr. Himangi Dubey
                  </h3>
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#f5900d] mt-1">
                    FOUNDER & CHIEF DENTAL SURGEON
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    BDS, MDS (KGMU Lucknow) · Periodontics & Implantology
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Ex-Senior Resident at King George's Medical University, HOD Dentistry at Ajanta Hospital & IVF Centre, and Awardee of Appreciation at 8th UP Dental Show 2026.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-4 flex items-center justify-between">
                <button
                  onClick={() => handleBookDoctor('dr-himangi-dubey')}
                  className="text-xs font-bold text-[#f5900d] hover:underline flex items-center space-x-1"
                >
                  <span>CLINICAL LEADERSHIP</span>
                  <span>↗</span>
                </button>
                <span className="text-[10px] text-slate-500">10+ Yrs Exp</span>
              </div>
            </div>

            {/* Dr. M. S. Bhoj */}
            <div className="bg-[#0c1f33] rounded-3xl p-6 border border-slate-800 hover:border-[#f5900d]/60 shadow-xl transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                {/* Gold horizontal accent bar on top matching FMS */}
                <div className="w-12 h-1 bg-[#f5900d]" />

                <div className="relative overflow-hidden rounded-2xl aspect-square border border-[#c5a059]/40 bg-slate-800">
                  <img 
                    src="./doctors/dr-partha-reddy.jpg" 
                    alt="Dr. M. S. Bhoj" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#f5900d] transition-colors">
                    Dr. M. S. Bhoj
                  </h3>
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#f5900d] mt-1">
                    SENIOR CONSULTANT SURGEON
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    BDS, MDS · Oral & Maxillofacial Surgery
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Decades of leadership in surgical maxillofacial corrections, complex bone grafting, sinus lifts, and full-mouth implant rehabilitations.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-4 flex items-center justify-between">
                <button
                  onClick={() => handleBookDoctor('dr-ms-bhoj')}
                  className="text-xs font-bold text-[#f5900d] hover:underline flex items-center space-x-1"
                >
                  <span>CLINICAL LEADERSHIP</span>
                  <span>↗</span>
                </button>
                <span className="text-[10px] text-slate-500">Master Surgeon</span>
              </div>
            </div>

            {/* Dr. Paul D. / Senior Specialist Panel */}
            <div className="bg-[#0c1f33] rounded-3xl p-6 border border-slate-800 hover:border-[#f5900d]/60 shadow-xl transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                {/* Gold horizontal accent bar on top matching FMS */}
                <div className="w-12 h-1 bg-[#f5900d]" />

                <div className="relative overflow-hidden rounded-2xl aspect-square border border-[#c5a059]/40 bg-slate-800">
                  <img 
                    src="./doctors/dr-dushyanth-paul.jpg" 
                    alt="Senior Specialist Panel" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600';
                    }}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#f5900d] transition-colors">
                    Dr. D. Paul & Specialists
                  </h3>
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#f5900d] mt-1">
                    MAXILLOFACIAL & PROSTHODONTICS
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    MDS OMFS & Prosthodontic Rehabilitation
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Spearheads surgical operatory protocols, TMJ neuromuscular rehabilitation, and All-on-4 fixed prosthesis fabrication.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-4 flex items-center justify-between">
                <button
                  onClick={() => navigateTo('doctors')}
                  className="text-xs font-bold text-[#f5900d] hover:underline flex items-center space-x-1"
                >
                  <span>SPECIALIST PANEL</span>
                  <span>↗</span>
                </button>
                <span className="text-[10px] text-slate-500">MDS Faculty</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SECTION 6: EXACT FMS PREMIUM SECTION (fms-premium-section with Form)   */}
      {/* ========================================================================= */}
      <section 
        className="py-16 sm:py-24 text-white relative overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 8% 15%, rgba(232, 185, 106, 0.1) 0%, transparent 30%), radial-gradient(circle at 92% 85%, rgba(232, 185, 106, 0.08) 0%, transparent 30%), #06131f'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 7 Columns: Entity Credential Headline */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#f5900d]">
                LUCKNOW · SADRAUNA · PARA ROAD · EST. 2016
              </span>
              
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Lucknow's Highest Rated Standalone Dental Hospital. <span className="text-[#f5900d]">5.0 ★ Rated. 5 Clinical Suites.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Different clinical suites, high-quality dental services — to serve patients with <strong className="text-white">different clinical needs and different expectations</strong>.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-[#0b1f3a]/80 p-4 rounded-2xl border border-slate-800">
                  <div className="text-2xl font-black text-[#f5900d]">5.0 ★</div>
                  <div className="text-xs font-bold text-white mt-1">Google & Justdial</div>
                  <div className="text-[10px] text-slate-400">300+ Verified Patient Reviews</div>
                </div>

                <div className="bg-[#0b1f3a]/80 p-4 rounded-2xl border border-slate-800">
                  <div className="text-2xl font-black text-white">5 Suites</div>
                  <div className="text-xs font-bold text-white mt-1">Under One Roof</div>
                  <div className="text-[10px] text-slate-400">Sadrauna Hospital Campus</div>
                </div>

                <div className="bg-[#0b1f3a]/80 p-4 rounded-2xl border border-slate-800 col-span-2 sm:col-span-1">
                  <div className="text-2xl font-black text-emerald-400">0</div>
                  <div className="text-xs font-bold text-white mt-1">Franchises</div>
                  <div className="text-[10px] text-slate-400">100% Direct Medical Oversight</div>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Exact FMS Consultation Booking Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#0c1f33] rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl space-y-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#f5900d] block">
                    SAME-DAY SLOTS AVAILABLE AT SADRAUNA
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                    Book Your Consultation
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Speak with our dental care team and take the first step toward personalized treatment at HOPE DENTAL.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                    <h4 className="text-sm font-bold text-white">Request Received!</h4>
                    <p className="text-xs text-emerald-200">Opening full booking confirmation...</p>
                  </div>
                ) : (
                  <form onSubmit={handleConsultationSubmit} className="space-y-3.5">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#071322] border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#f5900d]"
                      />
                    </div>

                    <div>
                      <input 
                        type="tel" 
                        placeholder="Mobile Number (+91)" 
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#071322] border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#f5900d]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                        PREFERRED CLINICAL SUITE
                      </label>
                      <select 
                        value={formClinic}
                        onChange={(e) => setFormClinic(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#071322] border border-slate-700 text-white text-xs focus:outline-none focus:border-[#f5900d]"
                      >
                        <option value="Sadrauna Hospital Campus">Sadrauna Flagship Hospital Campus</option>
                        <option value="Implantology Suite">Centre for Advanced Implantology</option>
                        <option value="Laser Suite">Biolase Laser & Periodontics Suite</option>
                        <option value="Cosmetic Studio">Aesthetic & Clear Aligner Studio</option>
                        <option value="Emergency Suite">24/7 Dental Emergency & RCT Wing</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#f5900d] hover:bg-[#e07f00] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg active:scale-98 transition-all"
                    >
                      BOOK YOUR CONSULTATION →
                    </button>

                    <div className="pt-2 text-[10px] text-slate-400 text-center flex items-center justify-center space-x-1">
                      <span>✓ Confidential clinical consultation</span>
                      <span>·</span>
                      <a href={`tel:${hospitalInfo.phone.replace(/\s+/g, '')}`} className="text-[#f5900d] hover:underline font-bold">
                        Call {hospitalInfo.phone}
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SECTION 7: EXACT FMS FIVE VERTICALS (fms-five-verticals)               */}
      {/* ========================================================================= */}
      <section className="bg-white dark:bg-slate-950 py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center space-x-2 text-xs font-black uppercase tracking-widest text-[#f5900d]">
              <span>—</span>
              <span>ABOUT HOPE DENTAL — ENTITY SUMMARY</span>
              <span>—</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0b1f3a] dark:text-white">
              THE FIVE HOPE DENTAL GROUPS OF VERTICALS
            </h2>
            <p className="text-sm font-bold text-[#f5900d]">
              How One Dental Hospital Serves Every Segment of People — Without Diluting Specialty Practice
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Premium does not mean inaccessible. Hope Dental Hospital operates across five distinct clinical suites under one roof in Sadrauna, Lucknow, ensuring world-class hospital rigor for every clinical requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticals.map(v => (
              <div 
                key={v.id}
                className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img 
                      src={v.image} 
                      alt={v.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#0b1f3a]/90 text-[#f5900d]">
                      {v.num} · {v.badge}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-[#0b1f3a] dark:text-white group-hover:text-[#f5900d] transition-colors">
                      {v.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#f5900d]">
                      {v.tagline}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {v.description}
                    </p>

                    <div className="pt-2 space-y-1.5 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400">
                      {v.highlights.map((h, i) => (
                        <div key={i} className="flex items-center space-x-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f5900d]"></span>
                          <span className="line-clamp-1">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => navigateTo('clinics')}
                    className="w-full py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-[#f5900d] hover:text-white text-xs font-bold text-slate-700 dark:text-slate-300 transition-all flex items-center justify-center space-x-1.5"
                  >
                    <span>Explore Suite</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. SECTION 8: EXACT FMS 12 SPECIALTIES GRID (fms-specialties-section)     */}
      {/* ========================================================================= */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#f5900d]">
                TWELVE SPECIALTY DIVISIONS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0b1f3a] dark:text-white mt-1">
                Every Dental Specialty, Under One Roof, With a Specialist in Every Chair
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
                At HOPE DENTAL, a general dentist does not attempt complex surgical implants or root canals. Every division is headed by certified MDS specialists.
              </p>
            </div>

            <button
              onClick={() => navigateTo('services')}
              className="px-5 py-2.5 rounded-2xl bg-[#0b1f3a] text-white hover:bg-[#163864] font-bold text-xs sm:text-sm self-start md:self-auto transition-all flex items-center space-x-1.5 shadow-sm"
            >
              <span>View All 12 Specialties</span>
              <ArrowRight className="w-4 h-4 text-[#f5900d]" />
            </button>
          </div>

          {/* Specialties Category Filter */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            {[
              { id: 'all', label: 'All Specialties' },
              { id: 'implants', label: 'Dental Implants' },
              { id: 'cosmetic', label: 'Cosmetic Dentistry' },
              { id: 'orthodontics', label: 'Invisible Braces' },
              { id: 'endodontics', label: 'Root Canal' },
              { id: 'surgery', label: 'Maxillofacial Surgery' },
              { id: 'periodontics', label: 'Laser Gum Care' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === tab.id
                    ? 'bg-[#f5900d] text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[#f5900d]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 12 Specialties Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTreatments.slice(0, 6).map(t => (
              <div 
                key={t.id}
                className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#f5900d]/10 text-[#f5900d]">
                      {t.category}
                    </span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      From {currencySymbol()}{convertPrice(t.startingPriceInr).toLocaleString()}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0b1f3a] dark:text-white group-hover:text-[#f5900d] transition-colors">
                    {t.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {t.shortDesc}
                  </p>

                  <div className="pt-1 flex flex-wrap gap-1">
                    {t.technologyUsed.slice(0, 2).map((tech, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 dark:border-slate-700 mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1 text-[#f5900d]" />
                    {t.duration.slice(0, 16)}
                  </span>

                  <button
                    onClick={() => handleBookTreatment(t.id)}
                    className="px-4 py-2 rounded-xl bg-[#0b1f3a] hover:bg-[#f5900d] text-white font-bold text-xs shadow-md transition-colors flex items-center space-x-1"
                  >
                    <span>Book Slot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. SECTION 9: BEFORE & AFTER SMILE TRANSFORMATIONS (Draggable Slider)     */}
      {/* ========================================================================= */}
      <section className="bg-white dark:bg-slate-950 py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#f5900d]">
                VERIFIED CLINICAL RESULTS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0b1f3a] dark:text-white mt-1">
                Real Patient Smile Transformations
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
                Drag the interactive slider below to see before and after cases handled by our senior cosmetic dentists and implant surgeons at Hope Dental.
              </p>
            </div>

            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-5 py-2.5 rounded-2xl bg-[#f5900d] text-white font-bold text-xs sm:text-sm shadow-md self-start sm:self-auto flex items-center space-x-1.5"
            >
              <span>Get Smile Assessment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {transformations.slice(0, 2).map(trans => (
              <BeforeAfterSlider key={trans.id} transformation={trans} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. SECTION 10: EXACT FMS AWARDS SECTION (fms-awards-section) in #081726  */}
      {/* ========================================================================= */}
      <section className="bg-[#081726] text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#f5900d] block">
              AWARDS & ACCREDITATIONS OF HOPE DENTAL
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Citations & Recognition for Lucknow's Top Dental Hospital
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Awards are not why patients come to HOPE DENTAL. But when state healthcare forums, medical bodies and verified patient metrics consistently validate clinical outcomes, it proves an unwavering commitment to sterile protocols and surgical perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            
            <div className="bg-[#0c1f33] rounded-3xl p-6 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#f5900d]/15 text-[#f5900d] flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">
                8th UP Dental Show 2026
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Award of Appreciation conferred to Dr. Himangi Dubey for breakthrough contributions in laser periodontics.
              </p>
            </div>

            <div className="bg-[#0c1f33] rounded-3xl p-6 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#f5900d]/15 text-[#f5900d] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">
                NABH Protocol Adherence
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Audited against apex hospital quality benchmarks for infection control, documentation, and patient safety.
              </p>
            </div>

            <div className="bg-[#0c1f33] rounded-3xl p-6 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#f5900d]/15 text-[#f5900d] flex items-center justify-center font-bold">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <h4 className="text-base font-bold text-white">
                5.0 ★ Google & Justdial
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                300+ combined genuine patient ratings praising painless procedures, transparent pricing, and gentle care.
              </p>
            </div>

            <div className="bg-[#0c1f33] rounded-3xl p-6 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/15 text-emerald-400 flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">
                Biolase Laser Certified
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Advanced hydrokinetic Waterlase facility ensuring scalpel-free, suture-free gum surgeries.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. SECTION 11: PATIENT REVIEWS & ACCORDION FAQS                          */}
      {/* ========================================================================= */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#f5900d]">
              HOPE DENTAL HOSPITAL · ANSWERS TO COMMON QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0b1f3a] dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Clear answers regarding our single standalone campus, treatments, All-on-4 timelines, and appointment booking.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left font-bold text-sm sm:text-base text-[#0b1f3a] dark:text-white flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <span>{faq.q}</span>
                  {expandedFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#f5900d] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {expandedFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. SECTION 12: EXACT FMS PRE-FOOTER CTA BANNER                           */}
      {/* ========================================================================= */}
      <section className="bg-white dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0b1f3a] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#f5900d] block">
                STILL HAVE QUESTIONS?
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Talk to a Hope Dental Specialist
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Get a personalized consultation, treatment plan and transparent cost estimate based on your clinical requirements.
              </p>
            </div>

            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-8 py-4 rounded-xl bg-[#e8b96a] hover:bg-[#d4a359] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-xl shrink-0 active:scale-95 transition-all flex items-center space-x-2"
            >
              <span>Book Your Consultation</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
