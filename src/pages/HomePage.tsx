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
    t,
    language,
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

  const faqs = language === 'hi' ? [
    {
      q: "क्या होप डेंटल हॉस्पिटल की अन्य शाखाएं या फ्रेंचाइजी हैं?",
      a: "नहीं। होप डेंटल हॉस्पिटल एंड वेलनेस सेंटर साद्रौना, पारा रोड, मोहन रोड, लखनऊ (पिन 226011) में स्थित एक एकल, स्टैंडअलोन सुपर-स्पेशियलिटी अस्पताल परिसर है। हम किसी भी तीसरे पक्ष की फ्रेंचाइजी का संचालन नहीं करते, जिससे हर प्रक्रिया हमारे वरिष्ठ संकाय और संस्थापकों की प्रत्यक्ष निगरानी में संपन्न होती है।"
    },
    {
      q: "फुल-माउथ डेंटल इम्प्लांट्स (All-on-4) के लिए कितने दिन आवश्यक हैं?",
      a: "हमारे 3D सीबीसीटी गाइडेड सर्जिकल वर्कफ़्लो और उच्च-सटीक डिजिटल लैब की बदौलत, अधिकांश All-on-4 और All-on-6 प्रक्रियाओं में मात्र 3 से 5 दिनों के भीतर पक्के दांत लगा दिए जाते हैं। बाहरी राज्यों या विदेशी मरीज़ों के लिए 7 से 10 दिन का प्रवास अनुशंसित है।"
    },
    {
      q: "अमेरिका/यूके की तुलना में होप डेंटल में इम्प्लांट्स इतने किफायती क्यों हैं?",
      a: "हम अमेरिका और यूरोप के शीर्ष क्लिनिकों वाले समान प्रामाणिक, अंतरराष्ट्रीय वारंटी प्राप्त इम्प्लांट्स (नोबेल बायोकेयर स्वीडन, स्ट्रॉमन स्विट्जरलैंड, ऑस्टेम) का उपयोग करते हैं। लागत में भारी बचत भारत में कम अस्पताल परिचालन व्यय और अनुकूल मुद्रा विनिमय दर के कारण होती है — स्टरलाइज़ेशन या टाइटेनियम शुद्धता में कभी कोई समझौता नहीं किया जाता।"
    },
    {
      q: "होप डेंटल सामान्य डेंटल क्लिनिक से किस प्रकार भिन्न है?",
      a: "होप डेंटल हॉस्पिटल एक पूर्ण मान्यता प्राप्त संस्थान है जिसमें समर्पित सर्जिकल ऑपरेशन थिएटर, बायोलैज़ वॉटरलैज़ लेज़र यूनिट, इन-हाउस डिजिटल सीएडी/सीएएम लैब और 7-चरणीय क्लास-बी ऑटोक्लेव प्रणाली है। यहाँ कोई जनरल डेंटिस्ट जटिल सर्जरी नहीं करता — हर चेयर पर योग्य एमडीएस विशेषज्ञ बैठते हैं।"
    },
    {
      q: "बाहरी राज्यों और एनआरआई मरीज़ों के लिए क्या सुविधाएं हैं?",
      a: "हमारा पेशेंट कंसीयर्ज यात्रा से पहले आपके एक्स-रे या सीबीसीटी के आधार पर अग्रिम उपचार योजना, लखनऊ एयरपोर्ट पिकअप, स्थानीय प्रवास समन्वय और बहुभाषी सहायता प्रदान करता है।"
    }
  ] : [
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
            <span>{t('hero.badge')}</span>
            <span>—</span>
          </div>

          {/* Giant Centered Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.14] max-w-4xl mx-auto">
            {language === 'hi' ? 'लखनऊ का सर्वश्रेष्ठ डेंटल हॉस्पिटल — ' : 'Best Dental Clinic in Lucknow, India — '}
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-200 bg-clip-text text-transparent">HOPE DENTAL</span>
          </h1>

          {/* Subhead */}
          <p className="text-base sm:text-lg font-semibold text-slate-200 max-w-2xl mx-auto">
            {t('hero.headline')}
          </p>

          {/* Hospital Overview */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl mx-auto">
            {t('hero.subtext')}
          </p>

          {/* Centered Direct Booking Section */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="bg-[#0c2742]/95 border border-teal-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md space-y-5 text-center">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-teal-400 block">
                  {t('hero.prioritySlots')}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  {t('hero.bookingCardTitle')}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {t('hero.bookingCardSubtitle')}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-extrabold text-sm sm:text-base tracking-wide shadow-xl shadow-teal-500/25 active:scale-95 transition-all flex items-center justify-center space-x-2.5"
                >
                  <Calendar className="w-5 h-5" />
                  <span>{t('hero.bookNow60s')}</span>
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
                  <span>{t('hero.location')}</span>
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
              {hospitalStatus.isOpenToday ? t('statusBanner.openToday') : t('statusBanner.closedToday')}
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
                {t('statusBanner.upcomingHoliday', { date: hospitalStatus.holidays[0] })}
              </span>
            )}

            <button
              onClick={() => setIsBookingOpen(true)}
              className="text-[11px] font-bold text-teal-300 hover:text-white underline decoration-teal-400/50 hover:decoration-white transition-colors"
            >
              {t('statusBanner.slotsRemaining', { count: hospitalStatus.dailySlotCap })}
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
                <span>{t('landmark.eyebrow')}</span>
                <span>—</span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-[#091e34] dark:text-white tracking-tight leading-tight">
                    {t('landmark.heading')}
                  </h2>
                  <p className="text-sm sm:text-base font-bold text-teal-600 dark:text-teal-400 mt-1">
                    {t('landmark.subheading')}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t('landmark.desc')}
              </p>

              {/* Box 1: VISIT OUR HOSPITAL, Lucknow */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-full bg-[#091e34] text-teal-400 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-600 dark:text-teal-400 block">
                    {t('landmark.visitHospital')}
                  </span>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                    {t('landmark.address')}
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
                      {t('landmark.callUs')}
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
                      {t('landmark.openingHours')}
                    </span>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      {t('landmark.hoursValue')}
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
                  <span>{t('landmark.directionsBtn')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="px-6 py-3 rounded-xl bg-[#091e34] hover:bg-teal-700 text-white font-bold text-xs shadow-md active:scale-95 transition-all flex items-center space-x-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-teal-400" />
                  <span>{t('landmark.bookBtn')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

          {/* Bottom 4 Feature Pillars with vertical dividers */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-1">
              <h4 className="text-xs font-black text-[#091e34] dark:text-white uppercase tracking-wider">
                {t('landmark.globalStandards')}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t('landmark.globalStandardsDesc')}
              </p>
            </div>

            <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-slate-800 sm:pl-6 pt-4 sm:pt-0">
              <h4 className="text-xs font-black text-[#091e34] dark:text-white uppercase tracking-wider">
                {t('landmark.advancedTech')}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t('landmark.advancedTechDesc')}
              </p>
            </div>

            <div className="space-y-1 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 lg:pl-6 pt-4 lg:pt-0">
              <h4 className="text-xs font-black text-[#091e34] dark:text-white uppercase tracking-wider">
                {t('landmark.premiumExp')}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t('landmark.premiumExpDesc')}
              </p>
            </div>

            <div className="space-y-1 border-t sm:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 lg:pl-6 pt-4 lg:pt-0">
              <h4 className="text-xs font-black text-[#091e34] dark:text-white uppercase tracking-wider">
                {t('landmark.dentalTourism')}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t('landmark.dentalTourismDesc')}
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
                <span>{t('expertise.eyebrow')}</span>
                <span>—</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#091e34] dark:text-white tracking-tight leading-tight">
                {t('expertise.heading')} <span className="text-teal-600 dark:text-teal-400">{t('expertise.headingHighlight')}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t('expertise.desc')}
              </p>
            </div>

            {/* Circular badge on top right */}
            <div className="shrink-0 flex items-center justify-center">
              <div className="w-36 h-36 rounded-full border-2 border-dashed border-teal-500/50 flex flex-col items-center justify-center text-center p-3 bg-white dark:bg-slate-800 shadow-lg">
                <span className="text-3xl font-black text-[#091e34] dark:text-white">{t('expertise.yearsValue')}</span>
                <span className="text-[10px] font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-wider mt-0.5">
                  {t('expertise.yearsLabel')}
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
              {t('expertise.card1Title')}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
              {t('expertise.card1Desc')}
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
                  {t('expertise.card2Title')}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t('expertise.card2Desc')}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-baseline space-x-2">
                <span className="text-3xl font-black text-[#091e34] dark:text-white">12+</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{t('expertise.card2Badge')}</span>
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
                  {t('expertise.card3Title')}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t('expertise.card3Desc')}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex flex-wrap gap-1.5">
                {[
                  language === 'hi' ? 'इम्प्लांटोलॉजी' : 'Implantology',
                  language === 'hi' ? 'कॉस्मेटिक डेंटिस्ट्री' : 'Cosmetic Dentistry',
                  language === 'hi' ? 'लेज़र पेरिओडोंटिक्स' : 'Laser Periodontics',
                  language === 'hi' ? 'ऑर्थोडॉन्टिक्स' : 'Orthodontics',
                  language === 'hi' ? 'माइक्रोस्कोपिक RCT' : 'Microscopic RCT',
                  language === 'hi' ? 'मैक्सिलोफेशियल' : 'Maxillofacial',
                  language === 'hi' ? 'पीडोडॉन्टिक्स' : 'Pedodontics',
                  language === 'hi' ? 'टीएमजे थैरेपी' : 'TMJ Therapy'
                ].map((s, idx) => (
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
              {t('seniorDoctors.sectionTag')}
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              {t('seniorDoctors.heading')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t('seniorDoctors.desc')}
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
                    {t('seniorDoctors.founderRole')}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {t('seniorDoctors.founderEdu')}
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {t('seniorDoctors.founderBio')}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-4 flex items-center justify-between">
                <button
                  onClick={() => handleBookDoctor('dr-himangi-dubey')}
                  className="text-xs font-bold text-teal-400 hover:underline flex items-center space-x-1"
                >
                  <span>{t('seniorDoctors.leadershipBtn')}</span>
                  <span>↗</span>
                </button>
                <span className="text-[10px] text-slate-500">{t('seniorDoctors.exp15Years')}</span>
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
                    {t('seniorDoctors.advisorRole')}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {t('seniorDoctors.advisorEdu')}
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {t('seniorDoctors.advisorBio')}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-4 flex items-center justify-between">
                <button
                  onClick={() => handleBookDoctor('dr-m-s-bhoj')}
                  className="text-xs font-bold text-teal-400 hover:underline flex items-center space-x-1"
                >
                  <span>{t('seniorDoctors.leadershipBtn')}</span>
                  <span>↗</span>
                </button>
                <span className="text-[10px] text-slate-500">{t('seniorDoctors.masterSurgeon')}</span>
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
                    {t('seniorDoctors.omfsRole')}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {t('seniorDoctors.omfsEdu')}
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {t('seniorDoctors.omfsBio')}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-4 flex items-center justify-between">
                <button
                  onClick={() => handleBookDoctor('dr-saurabh-singh')}
                  className="text-xs font-bold text-teal-400 hover:underline flex items-center space-x-1"
                >
                  <span>{t('seniorDoctors.bookSurgeonBtn')}</span>
                  <span>↗</span>
                </button>
                <span className="text-[10px] text-slate-500">{t('seniorDoctors.mdsOmfs')}</span>
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
                {t('consultation.eyebrow')}
              </span>
              
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                {t('consultation.heading')} <span className="text-teal-300">{t('consultation.headingHighlight')}</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {t('consultation.desc')}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-[#0c2742]/80 p-4 rounded-2xl border border-teal-900/40">
                  <div className="text-2xl font-black text-amber-400">5.0 ★</div>
                  <div className="text-xs font-bold text-white mt-1">{t('consultation.ratingText')}</div>
                  <div className="text-[10px] text-slate-400">{t('consultation.ratingSub')}</div>
                </div>

                <div className="bg-[#0c2742]/80 p-4 rounded-2xl border border-teal-900/40">
                  <div className="text-2xl font-black text-white">5 Suites</div>
                  <div className="text-xs font-bold text-white mt-1">{t('consultation.suitesText')}</div>
                  <div className="text-[10px] text-slate-400">{t('consultation.suitesSub')}</div>
                </div>

                <div className="bg-[#0c2742]/80 p-4 rounded-2xl border border-teal-900/40 col-span-2 sm:col-span-1">
                  <div className="text-2xl font-black text-emerald-400">0</div>
                  <div className="text-xs font-bold text-white mt-1">{t('consultation.franchisesText')}</div>
                  <div className="text-[10px] text-slate-400">{t('consultation.franchisesSub')}</div>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Consultation Booking Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#0c2742] rounded-3xl p-6 sm:p-8 border border-teal-800/40 shadow-2xl space-y-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-400 block">
                    {t('consultation.cardEyebrow')}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                    {t('consultation.cardTitle')}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {t('consultation.cardSub')}
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                    <h4 className="text-sm font-bold text-white">{t('consultation.requestReceived')}</h4>
                    <p className="text-xs text-emerald-200">{t('consultation.openingConfirmation')}</p>
                  </div>
                ) : (
                  <form onSubmit={handleConsultationSubmit} className="space-y-3.5">
                    <div>
                      <input 
                        type="text" 
                        placeholder={t('consultation.namePlaceholder')} 
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#07192b] border border-teal-900/60 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-teal-500"
                      />
                    </div>

                    <div>
                      <input 
                        type="tel" 
                        placeholder={t('consultation.phonePlaceholder')} 
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#07192b] border border-teal-900/60 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-teal-500"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                        {t('consultation.suiteLabel')}
                      </label>
                      <select 
                        value={formClinic}
                        onChange={(e) => setFormClinic(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#07192b] border border-teal-900/60 text-white text-xs focus:outline-none focus:border-teal-500"
                      >
                        <option value="Sadrauna Hospital Campus">{language === 'hi' ? 'साद्रौना मुख्य हॉस्पिटल कैंपस' : 'Sadrauna Flagship Hospital Campus'}</option>
                        <option value="Implantology Suite">{language === 'hi' ? 'सेंटर फॉर एडवांस्ड इम्प्लांटोलॉजी' : 'Centre for Advanced Implantology'}</option>
                        <option value="Laser Suite">{language === 'hi' ? 'बायोलैज़ लेज़र एवं पेरिओडोंटिक्स सुइट' : 'Biolase Laser & Periodontics Suite'}</option>
                        <option value="Cosmetic Studio">{language === 'hi' ? 'एस्थेटिक व क्लियर एलाइनर स्टूडियो' : 'Aesthetic & Clear Aligner Studio'}</option>
                        <option value="Emergency Suite">{language === 'hi' ? '24/7 डेंटल इमरजेंसी व आरसीटी विंग' : '24/7 Dental Emergency & RCT Wing'}</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg active:scale-98 transition-all"
                    >
                      {t('consultation.submitBtn')}
                    </button>

                    <div className="pt-2 text-[10px] text-slate-400 text-center flex items-center justify-center space-x-1">
                      <span>✓ {t('consultation.confidentialNote')}</span>
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
              <span>{t('verticals.eyebrow')}</span>
              <span>—</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#091e34] dark:text-white">
              {t('verticals.heading')}
            </h2>
            <p className="text-sm font-bold text-teal-600 dark:text-teal-400">
              {t('verticals.tagline')}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('verticals.desc')}
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
                    <span>{t('verticals.exploreSuite')}</span>
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
                {t('specialties.eyebrow')}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#091e34] dark:text-white mt-1">
                {t('specialties.heading')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
                {t('specialties.desc')}
              </p>
            </div>

            <button
              onClick={() => navigateTo('services')}
              className="px-5 py-2.5 rounded-2xl bg-[#091e34] text-white hover:bg-teal-700 font-bold text-xs sm:text-sm self-start md:self-auto transition-all flex items-center space-x-1.5 shadow-sm"
            >
              <span>{t('specialties.viewAll')}</span>
              <ArrowRight className="w-4 h-4 text-teal-400" />
            </button>
          </div>

          {/* Specialties Category Filter */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            {[
              { id: 'all', label: t('specialties.tabAll') },
              { id: 'implants', label: t('specialties.tabImplants') },
              { id: 'cosmetic', label: t('specialties.tabCosmetic') },
              { id: 'orthodontics', label: t('specialties.tabOrtho') },
              { id: 'endodontics', label: t('specialties.tabEndo') },
              { id: 'surgery', label: t('specialties.tabSurgery') },
              { id: 'periodontics', label: t('specialties.tabPerio') }
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
            {filteredTreatments.slice(0, 6).map(tItem => (
              <div 
                key={tItem.id}
                className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-teal-500/40 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border border-teal-200/50 dark:border-teal-800/50">
                      {tItem.category}
                    </span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      {t('specialties.from')} {currencySymbol()}{convertPrice(tItem.startingPriceInr).toLocaleString()}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#091e34] dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {tItem.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {tItem.shortDesc}
                  </p>

                  <div className="pt-1 flex flex-wrap gap-1">
                    {tItem.technologyUsed.slice(0, 2).map((tech, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 dark:border-slate-700 mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1 text-teal-500" />
                    {tItem.duration.slice(0, 16)}
                  </span>

                  <button
                    onClick={() => handleBookTreatment(tItem.id)}
                    className="px-4 py-2 rounded-xl bg-[#091e34] hover:bg-teal-600 text-white font-bold text-xs shadow-md transition-colors flex items-center space-x-1"
                  >
                    <span>{t('specialties.bookSlot')}</span>
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
                {t('transformations.eyebrow')}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#091e34] dark:text-white mt-1">
                {t('transformations.heading')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
                {t('transformations.desc')}
              </p>
            </div>

            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-bold text-xs sm:text-sm shadow-md self-start sm:self-auto flex items-center space-x-1.5"
            >
              <span>{t('transformations.getAssessment')}</span>
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
              {t('awards.eyebrow')}
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              {t('awards.heading')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t('awards.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            
            <div className="bg-[#0c2742] rounded-3xl p-6 border border-teal-900/50 space-y-3 hover:border-teal-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-teal-500/15 text-teal-400 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">
                {t('awards.upDentalShow')}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t('awards.upDentalShowDesc')}
              </p>
            </div>

            <div className="bg-[#0c2742] rounded-3xl p-6 border border-teal-900/50 space-y-3 hover:border-teal-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-teal-500/15 text-teal-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">
                {t('awards.nabh')}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t('awards.nabhDesc')}
              </p>
            </div>

            <div className="bg-[#0c2742] rounded-3xl p-6 border border-teal-900/50 space-y-3 hover:border-teal-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-400/15 text-amber-400 flex items-center justify-center font-bold">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <h4 className="text-base font-bold text-white">
                {t('awards.googleRating')}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t('awards.googleRatingDesc')}
              </p>
            </div>

            <div className="bg-[#0c2742] rounded-3xl p-6 border border-teal-900/50 space-y-3 hover:border-teal-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/15 text-emerald-400 flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white">
                {t('awards.biolase')}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t('awards.biolaseDesc')}
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
                {t('reviews.eyebrow')}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#091e34] dark:text-white mt-1">
                {t('reviews.heading')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
                {t('reviews.desc')}
              </p>
            </div>

            <button
              onClick={() => navigateTo('reviews')}
              className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs transition-colors self-start sm:self-auto flex items-center space-x-1.5"
            >
              <span>{t('reviews.viewAll')}</span>
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
                      {r.verifiedSource} {t('reviews.verified')}
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
              {t('faqs.eyebrow')}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#091e34] dark:text-white">
              {t('faqs.heading')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {t('faqs.desc')}
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
                {t('preFooter.eyebrow')}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {t('preFooter.heading')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                {t('preFooter.desc')}
              </p>
            </div>

            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-xl shrink-0 active:scale-95 transition-all flex items-center space-x-2"
            >
              <span>{t('preFooter.bookConsultation')}</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
