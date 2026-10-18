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
  Clock,
  Zap,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
  Quote
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BeforeAfterSlider } from '../components/common/BeforeAfterSlider';

export const HomePage: React.FC = () => {
  const { 
    hospitalInfo,
    verticals,
    treatments, 
    transformations,
    reviews,
    hospitalStatus,
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
      {/* 1. SECTION 1: HERO SECTION WITH SOOTHING DENTAL OCEAN DEPTHS             */}
      {/* ========================================================================= */}
      {/* 1. SECTION 1: CENTERED HERO SECTION (DIRECT BOOKING FOCUS)               */}
      {/* ========================================================================= */}
      <section 
        className="relative overflow-hidden text-white pt-10 pb-16 sm:pb-24"
        style={{
          background: 'radial-gradient(circle at 50% 20%, rgba(13, 148, 136, 0.22) 0px, transparent 50%), radial-gradient(circle at 15% 85%, rgba(6, 182, 212, 0.15) 0px, transparent 40%), linear-gradient(135deg, #07192b 0%, #0a243e 50%, #0d3455 100%)'
        }}
      >
        {/* Subtle hospital facade banner at top */}
        <div className="absolute top-0 left-0 right-0 h-40 sm:h-56 opacity-10 overflow-hidden pointer-events-none">
          <img 
            src="./images/hope/real_clinic_7_.jpg" 
            alt="Hope Dental Hospital Lucknow" 
            className="w-full h-full object-cover filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#07192b]/80 to-[#07192b]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          {/* Eyebrow: — HOPE DENTAL HOSPITAL — */}
          <div className="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-teal-400 bg-teal-950/60 border border-teal-500/30 px-4 py-1.5 rounded-full shadow-sm">
            <span>—</span>
            <span>HOPE DENTAL HOSPITAL & WELLNESS CENTRE · LUCKNOW</span>
            <span>—</span>
          </div>

          {/* Giant Centered Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.14] max-w-4xl mx-auto">
            Best Dental Clinic in Lucknow, India - <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-200 bg-clip-text text-transparent">HOPE DENTAL</span>
          </h1>

          {/* Subhead */}
          <p className="text-base sm:text-lg font-semibold text-slate-200 max-w-2xl mx-auto">
            Advanced Dental Implants, Laser Dentistry & Cosmetic Smile Makeovers
          </p>

          {/* Hospital Overview */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl mx-auto">
            HOPE DENTAL is Lucknow's apex standalone dental hospital in Sadrauna, Para Road with 5 specialized clinical suites, digital intraoral imaging, 24-hour emergency dental care, and 7-step Class-B autoclave hospital sterilization. Led by <strong className="text-white">Dr. Himangi Dubey</strong> (BDS, MDS – KGMU Lucknow, ex-Senior Resident KGMU) and <strong className="text-white">Dr. M. S. Bhoj</strong> (Senior Consultant Oral & Maxillofacial Surgeon).
          </p>

          {/* Centered Direct Booking Section */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="bg-[#0c2742]/95 border border-teal-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md space-y-5 text-center">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-teal-400 block">
                  PRIORITY SLOTS AVAILABLE
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  Booking Specialist Appointment
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Book direct in-clinic consultation or online video appointment in 60 seconds.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-extrabold text-sm sm:text-base tracking-wide shadow-xl shadow-teal-500/25 active:scale-95 transition-all flex items-center justify-center space-x-2.5"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment Now (60s)</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>

              <div className="pt-3 border-t border-slate-700/60 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300">
                <a 
                  href={`tel:${hospitalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center hover:text-teal-300 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-teal-400" />
                  <span>{hospitalInfo.phone}</span>
                </a>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <div className="flex items-center text-slate-400">
                  <MapPin className="w-3.5 h-3.5 mr-1.5 text-teal-400" />
                  <span>Sadrauna, Para Rd, Lucknow</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION 2: LIVE HOSPITAL STATUS & OPERATIONAL UPDATE BANNER            */}
      {/* ========================================================================= */}
      <div className="bg-[#051525] text-white py-3.5 px-4 border-y border-[#0f2d4a] shadow-inner relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          
          {/* Status Indicator & Live Hours */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider ${
              hospitalStatus.isOpenToday 
                ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 shadow-sm shadow-emerald-500/20' 
                : 'bg-rose-950/80 text-rose-400 border border-rose-500/40 shadow-sm shadow-rose-500/20'
            }`}>
              <span className={`w-2 h-2 rounded-full mr-1.5 ${
                hospitalStatus.isOpenToday ? 'bg-emerald-400 animate-ping' : 'bg-rose-400'
              }`} />
              {hospitalStatus.isOpenToday ? 'Hospital Open Today' : 'Closed Today'}
            </span>

            <span className="text-slate-200 font-semibold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              <span>{hospitalStatus.operatingHours}</span>
            </span>

            {hospitalStatus.bannerNotice && (
              <span className="text-teal-300 font-medium hidden lg:inline border-l border-slate-700 pl-3">
                {hospitalStatus.bannerNotice}
              </span>
            )}
          </div>

          {/* Right: Slot Cap & Live CTA */}
          <div className="flex items-center gap-4">
            {hospitalStatus.holidays && hospitalStatus.holidays.length > 0 && (
              <span className="text-[11px] text-amber-300 font-medium hidden sm:inline">
                Upcoming Closure/Holiday: {hospitalStatus.holidays[0]}
              </span>
            )}

            <button
              onClick={() => setIsBookingOpen(true)}
              className="text-[11px] font-bold text-teal-300 hover:text-white underline decoration-teal-400/50 hover:decoration-white transition-colors"
            >
              Online Slots Open (~{hospitalStatus.dailySlotCap} Remaining) →
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. SECTION 3: HOPE DENTAL HOSPITAL LANDMARK SECTION                         */}
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
                  <span className="text-xs font-black text-[#091e34] dark:text-white uppercase tracking-tight block">
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
              
              <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-teal-600 dark:text-teal-400">
                <span>—</span>
                <span>HOPE DENTAL HOSPITAL</span>
                <span>—</span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-[#091e34] dark:text-white tracking-tight leading-tight">
                    HOPE DENTAL HOSPITAL - Advanced Dental Implant Clinic
                  </h2>
                  <p className="text-sm sm:text-base font-bold text-teal-600 dark:text-teal-400 mt-1">
                    Best Dental Implant Clinic in Lucknow, India
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Today, HOPE DENTAL operates an international-standard dental hospital that provides <strong>global-quality dental care for both Indian and international patients</strong>, using advanced technology, Class-B autoclave sterilization systems from some of the senior dental specialists in Lucknow, India.
              </p>

              {/* Box 1: VISIT OUR HOSPITAL, Lucknow */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-full bg-[#091e34] text-teal-400 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-600 dark:text-teal-400 block">
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
                  <div className="w-8 h-8 rounded-full bg-[#091e34] text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                      CALL US
                    </span>
                    <a href={`tel:${hospitalInfo.phone.replace(/\s+/g, '')}`} className="text-xs font-bold text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                      {hospitalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#091e34] text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
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

              {/* Single Clean CTA Pair */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://maps.google.com/?q=Hope+Dental+Hospital+Sadrauna+Lucknow"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-bold text-xs shadow-md shadow-teal-500/20 active:scale-95 transition-all flex items-center space-x-1.5"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="px-6 py-3 rounded-xl bg-[#091e34] hover:bg-teal-700 text-white font-bold text-xs shadow-md active:scale-95 transition-all flex items-center space-x-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-teal-400" />
                  <span>Book Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

          {/* Bottom 4 Feature Pillars with vertical dividers */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-1">
              <h4 className="text-xs font-black text-[#091e34] dark:text-white uppercase tracking-wider">
                GLOBAL STANDARDS
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                International-quality dental care with strict sterilization protocols.
              </p>
            </div>

            <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-slate-800 sm:pl-6 pt-4 sm:pt-0">
              <h4 className="text-xs font-black text-[#091e34] dark:text-white uppercase tracking-wider">
                ADVANCED TECHNOLOGY
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Biolase Waterlase laser, digital intraoral 3D scans & CBCT.
              </p>
            </div>

            <div className="space-y-1 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 lg:pl-6 pt-4 lg:pt-0">
              <h4 className="text-xs font-black text-[#091e34] dark:text-white uppercase tracking-wider">
                PREMIUM EXPERIENCE
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Personalized patient care and private clinical suites.
              </p>
            </div>

            <div className="space-y-1 border-t sm:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 lg:pl-6 pt-4 lg:pt-0">
              <h4 className="text-xs font-black text-[#091e34] dark:text-white uppercase tracking-wider">
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
      {/* 4. SECTION 4: CLINICAL EXPERTISE & SENIOR DENTISTS SEARCH                 */}
      {/* ========================================================================= */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-teal-600 dark:text-teal-400">
                <span>—</span>
                <span>HOPE DENTAL · EXPERTISE & EXPERIENCE</span>
                <span>—</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#091e34] dark:text-white tracking-tight leading-tight">
                Are you searching for the most experienced & best dentists in Lucknow, India? <span className="text-teal-600 dark:text-teal-400">Find them at HOPE DENTAL.</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Yes. One of the strongest pillars behind the reputation of <strong>HOPE DENTAL</strong> as one of the leading dental hospitals in Lucknow is the <strong>exceptional depth of experience within its team of specialists</strong>.
              </p>
            </div>

            {/* Circular badge on top right */}
            <div className="shrink-0 flex items-center justify-center">
              <div className="w-36 h-36 rounded-full border-2 border-dashed border-teal-500/50 flex flex-col items-center justify-center text-center p-3 bg-white dark:bg-slate-800 shadow-lg">
                <span className="text-3xl font-black text-[#091e34] dark:text-white">10+</span>
                <span className="text-[10px] font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider mt-0.5">
                  YEARS OF CLINICAL EXPERTISE
                </span>
              </div>
            </div>
          </div>

          {/* Card 01: Led by Senior Dentists with Decades of Experience */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-md space-y-4 relative">
            <span className="absolute top-6 right-6 text-xs font-mono text-slate-400">01</span>
            
            <div className="w-10 h-10 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center shadow-sm">
              <Star className="w-5 h-5 fill-current" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#091e34] dark:text-white">
              Led by Senior Dentists with Decades of Experience
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
              HOPE DENTAL is guided by renowned Top Dentists in Lucknow, <strong>Dr. Himangi Dubey</strong> (BDS, MDS – KGMU Lucknow, Periodontist & Implantologist) and <strong>Dr. M. S. Bhoj</strong> (Senior Consultant Oral & Maxillofacial Surgeon), each bringing extensive clinical expertise and leadership in advanced dentistry. Besides their expertise in their respective specialties, particularly <strong>cosmetic dentistry and dental implants</strong>, they lead a multidisciplinary team managing complex dental rehabilitations.
            </p>

            <div className="pt-3 flex flex-wrap gap-3">
              <button
                onClick={() => handleBookDoctor('dr-himangi-dubey')}
                className="px-5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-teal-500 text-xs font-bold text-slate-900 dark:text-white flex items-center space-x-2 transition-colors"
              >
                <span>Dr. Himangi Dubey</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              </button>

              <button
                onClick={() => handleBookDoctor('dr-ms-bhoj')}
                className="px-5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-teal-500 text-xs font-bold text-slate-900 dark:text-white flex items-center space-x-2 transition-colors"
              >
                <span>Dr. M. S. Bhoj</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              </button>
            </div>
          </div>

          {/* Cards 02 and 03: 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 02: A Team of Highly Experienced Specialists */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-md space-y-4 relative flex flex-col justify-between">
              <span className="absolute top-6 right-6 text-xs font-mono text-slate-400">02</span>
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center shadow-sm">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#091e34] dark:text-white">
                  A Team of Highly Experienced Specialists
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  The institution brings together <strong>12+ dental specialists</strong>, many with extensive postgraduate experience from King George's Medical University across all major branches of dentistry.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-baseline space-x-2">
                <span className="text-3xl font-black text-[#091e34] dark:text-white">12+</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">DENTAL SPECIALISTS</span>
              </div>
            </div>

            {/* Card 03: Decades of Expertise Across Every Dental Specialty */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-md space-y-4 relative flex flex-col justify-between">
              <span className="absolute top-6 right-6 text-xs font-mono text-slate-400">03</span>
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#091e34] dark:text-white">
                  Decades of Expertise Across Every Dental Specialty
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Comprehensive care is provided through specialists in <strong>implantology, cosmetic dentistry, orthodontics, endodontics, periodontics, prosthodontics, oral and maxillofacial surgery, pediatric dentistry, TMJ therapy, and laser dentistry</strong>.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex flex-wrap gap-1.5">
                {['Implantology', 'Cosmetic Dentistry', 'Laser Periodontics', 'Orthodontics', 'Microscopic RCT', 'Maxillofacial', 'Pedodontics', 'TMJ Therapy'].map((s, idx) => (
                  <span key={idx} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-teal-50 dark:bg-slate-700 text-teal-800 dark:text-teal-200">
                    {s}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SECTION 5: SENIOR DENTISTS SHOWCASE                                    */}
      {/* ========================================================================= */}
      <section className="bg-[#07192b] text-white py-16 sm:py-24 border-b border-[#0f2d4a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-400 block">
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
            <div className="bg-[#0c2742] rounded-3xl p-6 border border-teal-900/40 hover:border-teal-400/60 shadow-xl transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                {/* Teal horizontal accent bar on top */}
                <div className="w-12 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full" />

                <div className="relative overflow-hidden rounded-2xl aspect-square border border-teal-500/30 bg-slate-800">
                  <img 
                    src="./doctors/dr-himangi.jpg" 
                    alt="Dr. Himangi Dubey" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                    Dr. Himangi Dubey
                  </h3>
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-teal-400 mt-1">
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
                  className="text-xs font-bold text-teal-400 hover:underline flex items-center space-x-1"
                >
                  <span>CLINICAL LEADERSHIP</span>
                  <span>↗</span>
                </button>
                <span className="text-[10px] text-slate-500">15+ Yrs Exp</span>
              </div>
            </div>

            {/* Dr. M. S. Bhoj */}
            <div className="bg-[#0c2742] rounded-3xl p-6 border border-teal-900/40 hover:border-teal-400/60 shadow-xl transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                {/* Teal horizontal accent bar on top */}
                <div className="w-12 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full" />

                <div className="relative overflow-hidden rounded-2xl aspect-square border border-teal-500/30 bg-slate-800">
                  <img 
                    src="./doctors/dr-bhoj.jpg" 
                    alt="Dr. M. S. Bhoj" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                    Dr. M. S. Bhoj
                  </h3>
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-teal-400 mt-1">
                    SENIOR MEDICAL ADVISOR & PROSTHODONTIST
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    BDS, MDS · Prosthodontics & Oral Rehabilitation
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Decades of leadership in surgical maxillofacial corrections, complex bone grafting, sinus lifts, and full-mouth implant rehabilitations.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-4 flex items-center justify-between">
                <button
                  onClick={() => handleBookDoctor('dr-m-s-bhoj')}
                  className="text-xs font-bold text-teal-400 hover:underline flex items-center space-x-1"
                >
                  <span>CLINICAL LEADERSHIP</span>
                  <span>↗</span>
                </button>
                <span className="text-[10px] text-slate-500">Master Surgeon</span>
              </div>
            </div>

            {/* Dr. Saurabh Singh / Maxillofacial Surgery */}
            <div className="bg-[#0c2742] rounded-3xl p-6 border border-teal-900/40 hover:border-teal-400/60 shadow-xl transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                {/* Teal horizontal accent bar on top */}
                <div className="w-12 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full" />

                <div className="relative overflow-hidden rounded-2xl aspect-square border border-teal-500/30 bg-slate-800">
                  <img 
                    src="./doctors/dr-saurabh.jpg" 
                    alt="Dr. Saurabh Singh" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">
                    Dr. Saurabh Singh
                  </h3>
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-teal-400 mt-1">
                    CHIEF MAXILLOFACIAL SURGEON
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    BDS, MDS · Oral & Maxillofacial Surgery
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Spearheads surgical operatory protocols, complex impacted third molar extractions, TMJ neuromuscular rehabilitation, and emergency trauma.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-4 flex items-center justify-between">
                <button
                  onClick={() => handleBookDoctor('dr-saurabh-singh')}
                  className="text-xs font-bold text-teal-400 hover:underline flex items-center space-x-1"
                >
                  <span>BOOK SURGEON</span>
                  <span>↗</span>
                </button>
                <span className="text-[10px] text-slate-500">MDS OMFS</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SECTION 6: HOPE DENTAL HOSPITAL PREMIUM CONSULTATION SECTION             */}
      {/* ========================================================================= */}
      <section 
        className="py-16 sm:py-24 text-white relative overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 8% 15%, rgba(13, 148, 136, 0.18) 0%, transparent 35%), radial-gradient(circle at 92% 85%, rgba(6, 182, 212, 0.14) 0%, transparent 35%), #07192b'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 7 Columns: Entity Credential Headline */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-teal-400">
                LUCKNOW · SADRAUNA · PARA ROAD · EST. 2016
              </span>
              
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Lucknow's Highest Rated Standalone Dental Hospital. <span className="text-teal-300">5.0 ★ Rated. 5 Clinical Suites.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Different clinical suites, high-quality dental services — to serve patients with <strong className="text-white">different clinical needs and different expectations</strong>.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-[#0c2742]/80 p-4 rounded-2xl border border-teal-900/40">
                  <div className="text-2xl font-black text-amber-400">5.0 ★</div>
                  <div className="text-xs font-bold text-white mt-1">Google & Justdial</div>
                  <div className="text-[10px] text-slate-400">300+ Verified Patient Reviews</div>
                </div>

                <div className="bg-[#0c2742]/80 p-4 rounded-2xl border border-teal-900/40">
                  <div className="text-2xl font-black text-white">5 Suites</div>
                  <div className="text-xs font-bold text-white mt-1">Under One Roof</div>
                  <div className="text-[10px] text-slate-400">Sadrauna Hospital Campus</div>
                </div>

                <div className="bg-[#0c2742]/80 p-4 rounded-2xl border border-teal-900/40 col-span-2 sm:col-span-1">
                  <div className="text-2xl font-black text-emerald-400">0</div>
                  <div className="text-xs font-bold text-white mt-1">Franchises</div>
                  <div className="text-[10px] text-slate-400">100% Direct Medical Oversight</div>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Consultation Booking Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#0c2742] rounded-3xl p-6 sm:p-8 border border-teal-800/40 shadow-2xl space-y-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-400 block">
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
                        className="w-full px-4 py-3 rounded-xl bg-[#07192b] border border-teal-900/60 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-teal-500"
                      />
                    </div>

                    <div>
                      <input 
                        type="tel" 
                        placeholder="Mobile Number (+91)" 
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#07192b] border border-teal-900/60 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-teal-500"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                        PREFERRED CLINICAL SUITE
                      </label>
                      <select 
                        value={formClinic}
                        onChange={(e) => setFormClinic(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#07192b] border border-teal-900/60 text-white text-xs focus:outline-none focus:border-teal-500"
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
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg active:scale-98 transition-all"
                    >
                      BOOK YOUR CONSULTATION →
                    </button>

                    <div className="pt-2 text-[10px] text-slate-400 text-center flex items-center justify-center space-x-1">
                      <span>✓ Confidential clinical consultation</span>
                      <span>·</span>
                      <a href={`tel:${hospitalInfo.phone.replace(/\s+/g, '')}`} className="text-teal-400 hover:underline font-bold">
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
      {/* 7. SECTION 7: HOPE DENTAL FIVE VERTICALS                                    */}
      {/* ========================================================================= */}
      <section className="bg-white dark:bg-slate-950 py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center space-x-2 text-xs font-black uppercase tracking-widest text-teal-600 dark:text-teal-400">
              <span>—</span>
              <span>ABOUT HOPE DENTAL — ENTITY SUMMARY</span>
              <span>—</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#091e34] dark:text-white">
              THE FIVE HOPE DENTAL GROUPS OF VERTICALS
            </h2>
            <p className="text-sm font-bold text-teal-600 dark:text-teal-400">
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
                className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl hover:border-teal-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img 
                      src={v.image} 
                      alt={v.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#091e34]/90 text-teal-300 border border-teal-500/20 backdrop-blur-sm">
                      {v.num} · {v.badge}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-[#091e34] dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {v.name}
                    </h3>
                    <div className="text-xs font-semibold text-teal-600 dark:text-teal-400">
                      {v.tagline}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {v.description}
                    </p>

                    <div className="pt-2 space-y-1.5 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400">
                      {v.highlights.map((h, i) => (
                        <div key={i} className="flex items-center space-x-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                          <span className="line-clamp-1">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => navigateTo('clinics')}
                    className="w-full py-2.5 rounded-xl bg-teal-50 dark:bg-slate-800 hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-600 hover:text-white text-xs font-bold text-teal-800 dark:text-slate-200 transition-all flex items-center justify-center space-x-1.5"
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
      {/* 8. SECTION 8: 12 SPECIALTIES GRID                                           */}
      {/* ========================================================================= */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                TWELVE SPECIALTY DIVISIONS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#091e34] dark:text-white mt-1">
                Every Dental Specialty, Under One Roof, With a Specialist in Every Chair
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
                At HOPE DENTAL, a general dentist does not attempt complex surgical implants or root canals. Every division is headed by certified MDS specialists.
              </p>
            </div>

            <button
              onClick={() => navigateTo('services')}
              className="px-5 py-2.5 rounded-2xl bg-[#091e34] text-white hover:bg-teal-700 font-bold text-xs sm:text-sm self-start md:self-auto transition-all flex items-center space-x-1.5 shadow-sm"
            >
              <span>View All 12 Specialties</span>
              <ArrowRight className="w-4 h-4 text-teal-400" />
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
                    ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400'
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
                className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-teal-500/40 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border border-teal-200/50 dark:border-teal-800/50">
                      {t.category}
                    </span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      From {currencySymbol()}{convertPrice(t.startingPriceInr).toLocaleString()}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#091e34] dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
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
                    <Clock className="w-3.5 h-3.5 mr-1 text-teal-500" />
                    {t.duration.slice(0, 16)}
                  </span>

                  <button
                    onClick={() => handleBookTreatment(t.id)}
                    className="px-4 py-2 rounded-xl bg-[#091e34] hover:bg-teal-600 text-white font-bold text-xs shadow-md transition-colors flex items-center space-x-1"
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
              <span className="text-xs font-extrabold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                VERIFIED CLINICAL RESULTS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#091e34] dark:text-white mt-1">
                Real Patient Smile Transformations
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
                Drag the interactive slider below to see before and after cases handled by our senior cosmetic dentists and implant surgeons at Hope Dental.
              </p>
            </div>

            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-bold text-xs sm:text-sm shadow-md self-start sm:self-auto flex items-center space-x-1.5"
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
      {/* 10. SECTION 10: HOPE DENTAL AWARDS & CITATIONS SECTION                      */}
      {/* ========================================================================= */}
      <section className="bg-[#07192b] text-white py-16 sm:py-24 border-b border-teal-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-400 block">
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
            
            <div className="bg-[#0c2742] rounded-3xl p-6 border border-teal-900/50 space-y-3 hover:border-teal-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-teal-500/15 text-teal-400 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">
                8th UP Dental Show 2026
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Award of Appreciation conferred to Dr. Himangi Dubey for breakthrough contributions in laser periodontics.
              </p>
            </div>

            <div className="bg-[#0c2742] rounded-3xl p-6 border border-teal-900/50 space-y-3 hover:border-teal-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-teal-500/15 text-teal-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">
                NABH Protocol Adherence
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Audited against apex hospital quality benchmarks for infection control, documentation, and patient safety.
              </p>
            </div>

            <div className="bg-[#0c2742] rounded-3xl p-6 border border-teal-900/50 space-y-3 hover:border-teal-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-400/15 text-amber-400 flex items-center justify-center font-bold">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <h4 className="text-base font-bold text-white">
                5.0 ★ Google & Justdial
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                300+ combined genuine patient ratings praising painless procedures, transparent pricing, and gentle care.
              </p>
            </div>

            <div className="bg-[#0c2742] rounded-3xl p-6 border border-teal-900/50 space-y-3 hover:border-teal-500/40 transition-all">
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
      {/* 10B. VERIFIED PATIENT REVIEWS (GOOGLE & JUSTDIAL QUOTES)                  */}
      {/* ========================================================================= */}
      <section className="bg-white dark:bg-slate-950 py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                GENUINE PATIENT VOICES · 5.0 ★ RATED
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#091e34] dark:text-white mt-1">
                Verified Patient Reviews
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
                Unedited reviews and treatment feedback directly from patients verified on Google and Justdial.
              </p>
            </div>

            <button
              onClick={() => navigateTo('reviews')}
              className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs transition-colors self-start sm:self-auto flex items-center space-x-1.5"
            >
              <span>View All 300+ Reviews</span>
              <ArrowRight className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((r) => (
              <div 
                key={r.id}
                className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-amber-400">
                      {[...Array(r.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-teal-100/70 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-300/40">
                      {r.verifiedSource} Verified
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    "{r.text.replace(/^"|"$/g, '')}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">{r.patientName}</div>
                    <div className="text-[10px] text-slate-400">{r.patientCity}</div>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. SECTION 11: PATIENT REVIEWS & ACCORDION FAQS                          */}
      {/* ========================================================================= */}
      <section className="bg-slate-50 dark:bg-slate-900 py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-600 dark:text-teal-400">
              HOPE DENTAL HOSPITAL · ANSWERS TO COMMON QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#091e34] dark:text-white">
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
                  className="w-full px-6 py-4 text-left font-bold text-sm sm:text-base text-[#091e34] dark:text-white flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <span>{faq.q}</span>
                  {expandedFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0" />
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
      {/* 12. SECTION 12: HOPE DENTAL PRE-FOOTER CTA BANNER                           */}
      {/* ========================================================================= */}
      <section className="bg-white dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#091e34] via-[#0c2b4c] to-[#07192b] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-teal-800/40">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[10px] font-black uppercase tracking-widest text-teal-400 block">
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
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-xl shrink-0 active:scale-95 transition-all flex items-center space-x-2"
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
