import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  Menu, 
  X, 
  Layers, 
  Check, 
  Building, 
  ShieldCheck, 
  BookOpen, 
  Send, 
  MessageSquare, 
  Navigation, 
  Sun, 
  Moon, 
  ChevronRight, 
  Users, 
  Award,
  Stethoscope
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { HOSPITAL_INFO } from '../../data/mockData';
import { YoutubeIcon, FacebookIcon, GoogleIcon } from '../common/SocialIcons';

export const Concept3ProMax: React.FC = () => {
  const { 
    language, 
    setLanguage, 
    darkMode, 
    toggleDarkMode, 
    doctors, 
    blogs, 
    reviews, 
    treatments,
    setIsBookingOpen, 
    setSelectedTreatmentIdForBooking, 
    setSelectedDoctorIdForBooking 
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedToothZone, setSelectedToothZone] = useState<'incisor' | 'canine' | 'premolar' | 'molar' | 'wisdom'>('molar');
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

  // Direct Inquiry Form State
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formQuery, setFormQuery] = useState('');
  const [formType, setFormType] = useState('General Consultation');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toothAnatomyData = {
    incisor: {
      title: 'Central & Lateral Incisors (Front Teeth)',
      titleHi: 'सामने के दांत (इनसाइज़र)',
      shortName: 'Incisors',
      shortNameHi: 'सामने के दांत',
      functions: 'Aesthetic smile line, cutting food, speech pronunciation.',
      functionsHi: 'मुस्कान की सुंदरता, भोजन काटना, स्पष्ट उच्चारण।',
      conditions: 'Chipping, fluorosis stains, gaps (diastema), minor crowding.',
      conditionsHi: 'दांत टूटना, पीले दाग (फ्लोरोसिस), दांतों के बीच खाली जगह।',
      recommended: 'E-Max Ceramic Veneers & Cosmetic Smile Makeover',
      recommendedHi: 'ई-मैक्स सिरेमिक विनियर एवं कॉस्मेटिक स्माइल मेकओवर',
      startingPrice: '₹6,999',
      treatmentId: 'cosmetic-veneers-smile-makeover',
    },
    canine: {
      title: 'Canines (Eye Teeth / Cuspid)',
      titleHi: 'नुकीले दांत (कैनाइन)',
      shortName: 'Canines',
      shortNameHi: 'नुकीले दांत',
      functions: 'Tearing food, guiding jaw occlusion and lateral bite movements.',
      functionsHi: 'भोजन चीरना-फाड़ना, जबड़े का सही संरेखण।',
      conditions: 'High canine eruption, sharp tip attrition, gum recession.',
      conditionsHi: 'ऊंचा दांत निकलना, मसूड़ों का पीछे हटना, नोक घिसना।',
      recommended: 'Orthodontic Arch Alignment & Invisible Clear Aligners',
      recommendedHi: 'ऑर्थोडॉन्टिक अलाइनमेंट एवं इनविजिबल क्लियर अलाइनर्स',
      startingPrice: '₹34,999',
      treatmentId: 'clear-aligners-braces',
    },
    premolar: {
      title: 'Bicuspids / Premolars',
      titleHi: 'दाढ़ से पहले के दांत (प्रीमोलर)',
      shortName: 'Premolars',
      shortNameHi: 'प्रीमोलर दाढ़',
      functions: 'Transition mastication, initial chewing breakdown.',
      functionsHi: 'भोजन को चबाने की शुरुआती प्रक्रिया।',
      conditions: 'Interdental hidden cavities, food lodgement, cracked cusp.',
      conditionsHi: 'छिपे हुए कीड़े (कैविटी), खाना फंसना, दांत चटकना।',
      recommended: 'Single-Sitting Rotary RCT + CAD/CAM Zirconia Cap',
      recommendedHi: 'सिंगल-सिटिंग रोटरी आरसीटी + जिरकोनिया कैप',
      startingPrice: '₹2,499',
      treatmentId: 'rct-single-sitting',
    },
    molar: {
      title: 'First & Second Molars (Chewing Powerhouse)',
      titleHi: 'मुख्य चबाने वाली दाढ़ें (मोलर)',
      shortName: 'Molars',
      shortNameHi: 'मुख्य दाढ़ें',
      functions: 'Heavy chewing pressure up to 70 kg/cm² force.',
      functionsHi: '70 किग्रा/सेमी² तक के भारी चबाने का दबाव सहना।',
      conditions: 'Deep root pulpitis, decay from sticky food, structural fractures.',
      conditionsHi: 'गहरी जड़ों में दर्द, सड़न, गंभीर नस संक्रमण।',
      recommended: 'Painless Rotary RCT / Swiss Dental Implants',
      recommendedHi: 'दर्द रहित रोटरी आरसीटी / स्विस डेंटल इम्प्लांट्स',
      startingPrice: '₹2,499',
      treatmentId: 'rct-single-sitting',
    },
    wisdom: {
      title: 'Third Molars (Wisdom Teeth)',
      titleHi: 'तीसरी दाढ़ (अक्ल दाढ़)',
      shortName: 'Wisdom Teeth',
      shortNameHi: 'अक्ल दाढ़',
      functions: 'Vestigial evolutionary tooth, often lacks space to emerge.',
      functionsHi: 'अंतिम दाढ़, जिसे निकलने के लिए अक्सर जगह नहीं मिलती।',
      conditions: 'Horizontal impaction, severe nerve pressure, gum infection.',
      conditionsHi: 'जबड़े में तिरछी दाढ़, तेज जबड़ा दर्द, मसूड़े में सूजन।',
      recommended: 'Minimally Invasive Oral Surgery & Keyhole Extraction',
      recommendedHi: 'माइक्रो ओरल सर्जरी एवं सरल निष्कर्षण',
      startingPrice: '₹2,999',
      treatmentId: 'wisdom-tooth-surgery',
    }
  };

  const activeTooth = toothAnatomyData[selectedToothZone];

  const handleBookTooth = (treatmentId: string) => {
    setSelectedTreatmentIdForBooking(treatmentId);
    setIsBookingOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setFormName('');
      setFormPhone('');
      setFormQuery('');
    }, 2000);
  };

  const selectedBlog = blogs.find(b => b.id === selectedBlogId);

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen font-sans antialiased selection:bg-teal-600 selection:text-white transition-colors duration-200 pb-20 sm:pb-0">
      
      {/* 1. TOP UTILITY BAR (Luxury Dark Glass with Responsive Mobile View) */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-3 sm:px-6 lg:px-8 border-b border-slate-800/80 transition-colors">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          {/* Left: Location & Verified Rating / Helpline */}
          <div className="flex items-center space-x-2.5 sm:space-x-4 text-[11px] sm:text-xs">
            <div className="flex items-center text-teal-400 font-semibold tracking-tight">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-1.5 shrink-0 shadow-sm shadow-emerald-400/50" />
              <span className="hidden xs:inline">Sadrauna, Mohan Road, Lucknow</span>
              <span className="xs:hidden">Sadrauna, Lucknow</span>
            </div>
            
            <div className="hidden md:flex items-center text-slate-400 font-medium border-l border-slate-800 pl-3 sm:pl-4">
              <Clock className="w-3.5 h-3.5 mr-1.5 text-slate-500 shrink-0" />
              <span>{HOSPITAL_INFO.timings.split('|')[0]}</span>
            </div>

            <a 
              href={`tel:${HOSPITAL_INFO.phone}`} 
              className="hidden lg:flex items-center text-slate-300 hover:text-teal-400 transition-colors border-l border-slate-800 pl-4 font-semibold"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-teal-400 shrink-0" />
              <span>{HOSPITAL_INFO.phone}</span>
            </a>
          </div>

          {/* Right: Badges, Social Links, Theme & Language */}
          <div className="flex items-center space-x-2 sm:space-x-3 text-xs">
            {/* Google Rating Badge */}
            <a 
              href={HOSPITAL_INFO.socialLinks.google} 
              target="_blank" 
              rel="noreferrer" 
              className="text-amber-400 hover:text-amber-300 transition-all text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 flex items-center space-x-1 shadow-sm"
              title="Google Verified Reviews 4.9★"
            >
              <GoogleIcon className="w-3 h-3" />
              <span>4.9★</span>
            </a>

            {/* JustDial Badge (Hidden on very small mobile screens) */}
            <a 
              href={HOSPITAL_INFO.socialLinks.justdial} 
              target="_blank" 
              rel="noreferrer" 
              className="text-orange-400 hover:text-orange-300 transition-all text-[11px] font-bold px-2 py-0.5 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 hidden sm:flex items-center space-x-1 shadow-sm"
              title="JustDial Verified 4.8★"
            >
              <span>JD 4.8★</span>
            </a>

            {/* Social Icons (Hidden on small mobile) */}
            <div className="hidden md:flex items-center space-x-1 border-r border-slate-800 pr-2.5">
              <a 
                href={HOSPITAL_INFO.socialLinks.youtube} 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-red-500 transition-colors p-1.5 rounded-lg hover:bg-slate-900"
                title="YouTube Channel"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
              <a 
                href={HOSPITAL_INFO.socialLinks.facebook} 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-blue-400 transition-colors p-1.5 rounded-lg hover:bg-slate-900"
                title="Facebook Page"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-300 transition-all border border-slate-800 hover:scale-105 shadow-sm shrink-0"
              title="Toggle Dark / Light Theme"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-cyan-400" />}
            </button>

            {/* Bilingual Language Switcher (EN / हिन्दी) */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-0.5 shadow-sm shrink-0">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all ${
                  language === 'en' 
                    ? 'bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-2 py-0.5 rounded-lg text-[10px] sm:text-[11px] font-bold transition-all ${
                  language === 'hi' 
                    ? 'bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                हिन्दी
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN STICKY NAVBAR (UI UX Pro Max High-End Glass Design) */}
      <nav className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 py-2.5 sm:py-3 transition-all duration-300 shadow-sm shadow-slate-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-2 sm:gap-4">
          {/* Brand Logo & Clinic Identity */}
          <a href="#" className="flex items-center space-x-2.5 sm:space-x-3.5 group shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-teal-700 via-teal-600 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-teal-600/25 group-hover:scale-105 group-hover:shadow-teal-600/35 transition-all duration-200 ring-1 ring-white/20 shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 6 3 9l3 5 3-5c1.5-3 3-5.5 3-9 0-3.5-2.5-6-6-6z"/>
                <path d="M10 8c1-1 3-1 4 0"/>
                <circle cx="12" cy="7.5" r="0.5" fill="currentColor" />
              </svg>
            </div>
            <div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <span className="font-display font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white tracking-tight whitespace-nowrap group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  HOPE DENTAL
                </span>
                <span className="bg-teal-50 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800 text-[9px] sm:text-[10px] font-extrabold px-1.5 sm:px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                  Sadrauna
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-tight whitespace-nowrap">
                {language === 'hi' ? 'हॉस्पिटल एवं वेलनेस सेंटर • लखनऊ' : 'Hospital & Wellness Centre • Lucknow'}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links (Pill Style Interactive Navigation) */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-[13px] font-semibold text-slate-600 dark:text-slate-300 shrink-0">
            <a 
              href="#about" 
              className="px-3 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-teal-600 dark:hover:text-teal-400 transition-all whitespace-nowrap"
            >
              {language === 'hi' ? 'अस्पताल परिचय' : 'About Hospital'}
            </a>
            <a 
              href="#services" 
              className="px-3 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-teal-600 dark:hover:text-teal-400 transition-all whitespace-nowrap"
            >
              {language === 'hi' ? 'उपचार व सेवाएं' : 'Services & Treatments'}
            </a>
            <a 
              href="#doctors" 
              className="px-3 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-teal-600 dark:hover:text-teal-400 transition-all whitespace-nowrap"
            >
              {language === 'hi' ? 'विशेषज्ञ डॉक्टर्स' : 'Doctor Specialists'}
            </a>
            <a 
              href="#reviews" 
              className="px-3 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-teal-600 dark:hover:text-teal-400 transition-all whitespace-nowrap"
            >
              {language === 'hi' ? 'मरीज समीक्षाएं' : 'Patient Reviews'}
            </a>
            <a 
              href="#blogs" 
              className="px-3 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-teal-600 dark:hover:text-teal-400 transition-all whitespace-nowrap"
            >
              {language === 'hi' ? 'डेंटल ब्लॉग्स' : 'Dental Blogs'}
            </a>
            <a 
              href="#contact" 
              className="px-3 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-teal-600 dark:hover:text-teal-400 transition-all whitespace-nowrap"
            >
              {language === 'hi' ? 'पता व संपर्क' : 'Location & Timings'}
            </a>
          </div>

          {/* Book Appointment CTA (Desktop) */}
          <div className="hidden sm:flex items-center space-x-3 shrink-0">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="inline-flex items-center whitespace-nowrap shrink-0 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500 hover:from-teal-700 hover:to-emerald-600 rounded-xl shadow-lg shadow-teal-600/25 hover:shadow-teal-600/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200"
            >
              <Calendar className="w-4 h-4 mr-2 shrink-0" />
              <span className="whitespace-nowrap">{language === 'hi' ? 'अपॉइंटमेंट बुक करें' : 'Book Appointment'}</span>
            </button>
          </div>

          {/* Mobile Right Controls: Fast Call + Hamburger Toggle */}
          <div className="flex items-center space-x-1.5 lg:hidden">
            <a
              href={`tel:${HOSPITAL_INFO.phone}`}
              className="p-2 sm:px-3 sm:py-1.5 text-xs font-bold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/80 border border-teal-200/60 dark:border-teal-800 rounded-xl shadow-xs flex items-center space-x-1 active:scale-95 transition-transform"
              title="Call Hospital Helpline"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xs:inline">Call</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 transition-colors active:scale-95"
              aria-label="Open Navigation Drawer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* 3. MOBILE SLIDE-OVER NAVIGATION DRAWER (Native App Experience) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex animate-fadeIn">
          {/* Backdrop Blur Overlay */}
          <div 
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity" 
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-in Panel */}
          <div className="relative ml-auto w-full max-w-xs sm:max-w-sm h-full bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-10 animate-slideInRight">
            {/* Drawer Header */}
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-700 via-teal-600 to-emerald-500 flex items-center justify-center text-white shadow-md">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 6 3 9l3 5 3-5c1.5-3 3-5.5 3-9 0-3.5-2.5-6-6-6z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-base">HOPE DENTAL</div>
                    <div className="text-[10px] text-teal-600 dark:text-teal-400 font-semibold">Sadrauna, Mohan Road, Lucknow</div>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex flex-col space-y-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
                <a 
                  href="#about" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="px-3.5 py-3 rounded-2xl hover:bg-teal-50/70 dark:hover:bg-slate-800/80 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-3">
                    <Building className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    <span>{language === 'hi' ? 'अस्पताल परिचय' : 'About Hospital'}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href="#services" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="px-3.5 py-3 rounded-2xl hover:bg-teal-50/70 dark:hover:bg-slate-800/80 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-3">
                    <Layers className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    <span>{language === 'hi' ? 'उपचार व सेवाएं' : 'Services & Treatments'}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href="#doctors" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="px-3.5 py-3 rounded-2xl hover:bg-teal-50/70 dark:hover:bg-slate-800/80 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-3">
                    <Stethoscope className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    <span>{language === 'hi' ? 'विशेषज्ञ डॉक्टर्स' : 'Doctor Specialists'}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href="#reviews" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="px-3.5 py-3 rounded-2xl hover:bg-teal-50/70 dark:hover:bg-slate-800/80 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-3">
                    <Star className="w-4 h-4 text-amber-500" />
                    <span>{language === 'hi' ? 'मरीज समीक्षाएं (4.9★)' : 'Patient Reviews (4.9★)'}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href="#blogs" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="px-3.5 py-3 rounded-2xl hover:bg-teal-50/70 dark:hover:bg-slate-800/80 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    <span>{language === 'hi' ? 'डेंटल ब्लॉग्स' : 'Dental Blogs'}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="px-3.5 py-3 rounded-2xl hover:bg-teal-50/70 dark:hover:bg-slate-800/80 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    <span>{language === 'hi' ? 'पता व संपर्क' : 'Location & Timings'}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
              <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                <a
                  href={`tel:${HOSPITAL_INFO.phone}`}
                  className="py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center space-x-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-600" />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/919450000000"
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center space-x-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsBookingOpen(true);
                }}
                className="w-full py-3 bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500 text-white rounded-xl font-bold text-xs flex items-center justify-center shadow-lg shadow-teal-600/25"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>{language === 'hi' ? 'अपॉइंटमेंट बुक करें (60s)' : 'Book Appointment (60s)'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 1: HERO / LANDING */}
      <section className="pt-8 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] sm:text-xs text-slate-800 dark:text-slate-200 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Sadrauna, Lucknow</span>
                <span className="text-slate-400">•</span>
                <span className="text-amber-600 dark:text-amber-400 font-bold">4.9★ Google & JustDial</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.14]">
                {language === 'hi' ? (
                  <>
                    आधुनिक दर्द-रहित डेंटल उपचार एवं{' '}
                    <span className="text-teal-700 dark:text-teal-400 italic">
                      सटीक सर्जरी।
                    </span>
                  </>
                ) : (
                  <>
                    Next-Generation Dental Care &{' '}
                    <span className="text-teal-700 dark:text-teal-400 italic">
                      Gentle Surgery.
                    </span>
                  </>
                )}
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                {language === 'hi' 
                  ? 'सदरौना, लखनऊ में हॉस्पिटल-ग्रेड सिंगल-सिटिंग रूट कैनाल, लाइफटाइम वारंटी वाले स्विस डेंटल इम्प्लांट्स, एवं 3D कम्प्यूटर गाइडेड इनविजिबल अलाइनर्स की विश्वस्तरीय सुविधा।'
                  : 'Experience hospital-grade painless dentistry with single-sitting rotary root canals, Swiss dental implants with lifetime warranties, and 3D computer-guided clear aligners in Sadrauna, Lucknow.'
                }
              </p>

              {/* Stats Grid (Mobile Optimized) */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-center">
                <div>
                  <div className="font-serif font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">{HOSPITAL_INFO.stats.patientsTreated}</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">{language === 'hi' ? 'संतुष्ट मरीज' : 'Patients Treated'}</div>
                </div>
                <div>
                  <div className="font-serif font-bold text-xl sm:text-2xl text-teal-700 dark:text-teal-400">100% Painless</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">{language === 'hi' ? 'सुन्न तकनीक' : 'Numbing Tech'}</div>
                </div>
                <div>
                  <div className="font-serif font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">Class-B</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">{language === 'hi' ? 'स्टरलाइजेशन' : 'Sterilization'}</div>
                </div>
              </div>

              {/* Action Buttons (Stacked on Mobile, Horizontal on Desktop) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500 hover:from-teal-700 hover:to-emerald-600 text-white font-bold text-sm rounded-2xl shadow-xl shadow-teal-600/25 transition-all flex items-center justify-center space-x-2 active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'hi' ? 'अपॉइंटमेंट बुक करें (60s)' : 'Reserve Appointment (60s)'}</span>
                </button>
                <a
                  href="#services"
                  className="w-full sm:w-auto px-6 py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm rounded-2xl border border-slate-200 dark:border-slate-800 transition-all flex items-center justify-center space-x-2 text-center"
                >
                  <span>{language === 'hi' ? 'सभी उपचार देखें' : 'Explore Treatments'}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 dark:border-slate-800 bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Consultation Suite"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex flex-col justify-end p-5 sm:p-6 text-white">
                  <span className="text-xs font-bold text-teal-400">Sadrauna Clinic</span>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-white">Hope Dental Hospital & Wellness Centre</h3>
                  <p className="text-xs text-slate-300">Mohan Road, Lucknow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT HOSPITAL */}
      <section id="about" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
                <Building className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                <span>{language === 'hi' ? 'अस्पताल के बारे में' : 'About Hope Dental Hospital'}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                {language === 'hi'
                  ? 'सहानुभूतिपूर्ण देखभाल एवं यूरोपीय क्लीनिकल मानक'
                  : 'Empathetic Healthcare & European Clinical Standards'
                }
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                {language === 'hi'
                  ? 'होप डेंटल हॉस्पिटल एवं वेलनेस सेंटर सदरौना, लखनऊ में सुरक्षित, प्रमाण-आधारित और दर्द-मुक्त दांतों के इलाज के लिए समर्पित है। डिजिटल 3D सीबीसीटी स्कैन, रोटरी एंडोडॉन्टिक मोटर्स और क्लास-बी ऑटोक्लेव स्टरलाइजेशन के साथ पूर्ण स्वच्छता सुनिश्चित की जाती है।'
                  : 'Hope Dental Hospital & Wellness Centre in Sadrauna, Lucknow is committed to gentle, evidence-based dentistry. Equipped with digital 3D CBCT imaging, rotary endodontic motors, and 4-tier Class-B autoclave sterilization, we ensure zero infection and complete comfort.'
                }
              </p>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                <div className="flex items-center space-x-2 p-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 dark:text-teal-400 shrink-0" />
                  <span>14+ {language === 'hi' ? 'वर्ष अनुभव' : 'Yrs Exp'}</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 dark:text-teal-400 shrink-0" />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 dark:text-teal-400 shrink-0" />
                  <span>100% Sterile</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 dark:text-teal-400 shrink-0" />
                  <span>Kids Operatory</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white dark:bg-slate-800 p-5 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-lg space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-teal-800 dark:text-teal-300 uppercase">
                <span>Clinical Standards</span>
                <span>Sadrauna Branch</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                "{language === 'hi'
                  ? 'हमारा संकल्प सीधा है: विश्वस्तरीय दंत चिकित्सा जहां हर मरीज की समस्या को ध्यान से सुना जाए और अत्यंत कोमलता से इलाज किया जाए।'
                  : 'Our promise is simple: provide world-class dental care where every patient feels completely heard, respected, and treated with gentle precision.'
                }"
              </p>
              <div className="pt-3 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center text-xs">
                <span className="font-bold text-slate-900 dark:text-white">Dr. Amit Verma & Team</span>
                <span className="text-teal-700 dark:text-teal-400 font-semibold">Chief Dental Surgeons</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT SERVICES HOSPITAL PROVIDES (Touch-Friendly 3D Dental Arch Anatomy) */}
      <section id="services" className="py-16 sm:py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
              <span>{language === 'hi' ? 'उपचार व सेवाएं' : 'Services & 3D Anatomy Navigator'}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'अस्पताल में उपलब्ध मुख्य सेवाएं व उपचार' : 'Services & Treatments Provided'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              {language === 'hi' 
                ? 'अपने दांत की स्थिति के अनुसार नीचे दिए गए ज़ोन को चुनें और तुरंत विशेषज्ञ समाधान जानें।'
                : 'Explore hospital procedures categorized by dental arch anatomy. Click any zone to view clinical solutions and book directly.'
              }
            </p>
          </div>

          {/* Mobile Horizontal Scrollable Tooth Selector Tabs */}
          <div className="flex sm:hidden overflow-x-auto gap-2 pb-3 mb-6 scrollbar-none snap-x">
            {(Object.keys(toothAnatomyData) as (keyof typeof toothAnatomyData)[]).map((zoneKey) => {
              const item = toothAnatomyData[zoneKey];
              const isSelected = selectedToothZone === zoneKey;

              return (
                <button
                  key={zoneKey}
                  onClick={() => setSelectedToothZone(zoneKey)}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs whitespace-nowrap snap-start border transition-all shrink-0 ${
                    isSelected
                      ? 'bg-teal-600 text-white border-teal-600 shadow-md'
                      : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <span>{language === 'hi' ? item.shortNameHi : item.shortName}</span>
                  <span className="block text-[10px] font-normal opacity-90">{item.startingPrice}</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
            {/* Desktop Vertical Tooth Zone Selector (5 cols) */}
            <div className="hidden sm:block lg:col-span-5 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                {language === 'hi' ? 'दांत का प्रकार चुनें:' : 'Select Dental Arch Zone:'}
              </h4>

              {(Object.keys(toothAnatomyData) as (keyof typeof toothAnatomyData)[]).map((zoneKey) => {
                const item = toothAnatomyData[zoneKey];
                const isSelected = selectedToothZone === zoneKey;

                return (
                  <button
                    key={zoneKey}
                    onClick={() => setSelectedToothZone(zoneKey)}
                    className={`w-full p-4 rounded-2xl text-left border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-teal-600 bg-teal-50/70 dark:bg-teal-950/50 shadow-md ring-2 ring-teal-600/20'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-900 dark:text-white'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white">
                        {language === 'hi' ? item.titleHi : item.title}
                      </div>
                      <div className="text-xs text-teal-700 dark:text-teal-400 font-semibold mt-1">
                        {language === 'hi' ? 'शुरुआती शुल्क' : 'Starting from'} {item.startingPrice}
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-teal-600 bg-teal-600 text-white' : 'border-slate-300 dark:border-slate-700'
                    }`}>
                      {isSelected ? <Check className="w-3.5 h-3.5" /> : null}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Detailed Selected Service Card (7 cols) */}
            <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-900 p-5 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-5 sm:space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                <div>
                  <span className="text-[9px] sm:text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                    Clinical Treatment Overview
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                    {language === 'hi' ? activeTooth.titleHi : activeTooth.title}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">{language === 'hi' ? 'शुरुआती फीस' : 'Starting Fee'}</div>
                  <div className="font-mono font-bold text-lg sm:text-xl text-teal-800 dark:text-teal-400">{activeTooth.startingPrice}</div>
                </div>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="p-3.5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">
                    {language === 'hi' ? 'मुख्य कार्य (Biological Function):' : 'Biological Function:'}
                  </span>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {language === 'hi' ? activeTooth.functionsHi : activeTooth.functions}
                  </p>
                </div>

                <div className="p-3.5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">
                    {language === 'hi' ? 'सामान्य समस्याएं (Common Conditions):' : 'Common Conditions:'}
                  </span>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {language === 'hi' ? activeTooth.conditionsHi : activeTooth.conditions}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-teal-50/80 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 text-xs">
                <span className="font-bold text-teal-900 dark:text-teal-200 block mb-1">
                  {language === 'hi' ? 'सुझाया गया उपचार:' : 'Recommended Treatment:'}
                </span>
                <p className="text-teal-800 dark:text-teal-300 font-semibold">
                  {language === 'hi' ? activeTooth.recommendedHi : activeTooth.recommended}
                </p>
              </div>

              <div className="pt-1">
                <button
                  onClick={() => handleBookTooth(activeTooth.treatmentId)}
                  className="w-full py-3.5 bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500 hover:from-teal-700 hover:to-emerald-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center space-x-1.5 active:scale-95"
                >
                  <span>{language === 'hi' ? 'इस उपचार के लिए अपॉइंटमेंट लें' : 'Book Appointment for this Treatment'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Complete Treatments Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {treatments.slice(0, 6).map((t) => (
              <div 
                key={t.id}
                className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between hover:shadow-xl hover:border-teal-500/40 transition-all group"
              >
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-teal-100/80 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 border border-teal-200/50 dark:border-teal-800">
                      {t.category}
                    </span>
                    <span className="font-mono text-sm font-bold text-teal-700 dark:text-teal-400">
                      ₹{t.startingPrice.toLocaleString()}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">
                    {language === 'hi' ? t.titleHi : t.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {language === 'hi' ? t.shortDescHi : t.shortDesc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    {t.duration}
                  </span>
                  <button
                    onClick={() => handleBookTooth(t.id)}
                    className="px-3.5 py-1.5 bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center space-x-1 active:scale-95"
                  >
                    <span>{language === 'hi' ? 'बुक करें' : 'Book'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: DOCTORS DETAILS */}
      <section id="doctors" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-800 dark:text-teal-400">
              Surgeon Faculty
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'हमारे विशेषज्ञ डॉक्टर्स' : 'Meet Our Specialist Doctors'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              {language === 'hi' 
                ? 'एमडीएस डिग्री धारक एवं अनुभवी सर्जन, जो आधुनिक तकनीकों से आपका इलाज करते हैं।'
                : 'Highly trained MDS dental surgeons and specialists dedicated to gentle, pain-free dental care.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {doctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-900">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover object-top" />
                  <div className="absolute bottom-2.5 left-2.5 bg-teal-700 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {doc.experienceYears}+ Yrs Exp
                  </div>
                </div>

                <div className="p-4 sm:p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-base sm:text-lg text-slate-900 dark:text-white">{doc.name}</h4>
                    <p className="text-xs text-teal-700 dark:text-teal-400 font-semibold">{language === 'hi' ? doc.roleHi : doc.role}</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">{doc.qualification}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2">
                      {doc.bio}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedDoctorIdForBooking(doc.id);
                      setIsBookingOpen(true);
                    }}
                    className="w-full py-2.5 bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow transition-all mt-3 active:scale-95"
                  >
                    {language === 'hi' ? `डॉ. ${doc.name.split(' ')[1]} से अपॉइंटमेंट लें` : `Book with ${doc.name.split(' ')[1]}`}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CUSTOMER REVIEWS & SOCIAL PROOF */}
      <section id="reviews" className="py-16 sm:py-20 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-800 dark:text-teal-400">
              Verified Feedback
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'मरीजों की संतुष्टि एवं समीक्षाएं' : 'Customer Reviews & Experiences'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              {language === 'hi'
                ? 'सदरौना एवं लखनऊ के मरीजों द्वारा गूगल एवं जस्टडायल पर 4.9★ प्रमाणित रेटिंग।'
                : 'Real patient testimonials verified across Google Reviews and JustDial.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {reviews.map((r) => (
              <div key={r.id} className="bg-slate-50 dark:bg-slate-900 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center space-x-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic">
                  "{r.text}"
                </p>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex justify-between text-[11px]">
                  <span className="font-bold text-slate-900 dark:text-white">{r.patientName}</span>
                  <span className="text-teal-700 dark:text-teal-400 font-bold">{r.verifiedSource} Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: DENTAL BLOGS & PATIENT EDUCATION */}
      <section id="blogs" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-800 dark:text-teal-400">
              Patient Education
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'दंत स्वास्थ्य ब्लॉग्स एवं सुझाव' : 'Oral Health & Dental Blogs'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              {language === 'hi' 
                ? 'हमारे डॉक्टर्स द्वारा लिखे गए उपयोगी लेख जिससे आप दांतों को हमेशा स्वस्थ रख सकें।'
                : 'Doctor-curated dental guides, treatment explanations, and oral hygiene tips.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {blogs.slice(0, 3).map((b) => (
              <div 
                key={b.id} 
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 flex flex-col justify-between hover:shadow-lg transition-all cursor-pointer active:scale-98"
                onClick={() => setSelectedBlogId(b.id)}
              >
                <div className="h-44 sm:h-48 overflow-hidden">
                  <img src={b.imageUrl} alt={b.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 sm:p-5 space-y-2">
                  <div className="text-[10px] font-bold text-teal-700 dark:text-teal-400 uppercase">{b.category}</div>
                  <h4 className="font-serif font-bold text-base text-slate-900 dark:text-white line-clamp-2">
                    {language === 'hi' ? b.titleHi : b.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                    {language === 'hi' ? b.summaryHi : b.summary}
                  </p>
                </div>
                <div className="p-4 sm:p-5 pt-0 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
                  <span>{b.authorDoctor}</span>
                  <span className="text-teal-700 dark:text-teal-400 font-bold">{b.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: SADRAUNA LOCATION & QUICK CONTACT */}
      <section id="contact" className="py-16 sm:py-20 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
              <span>Sadrauna, Mohan Road, Lucknow</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'अस्पताल का पता एवं संपर्क' : 'Hospital Location & Direct Inquiry'}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              {language === 'hi'
                ? 'सदरौना, मोहन रोड लखनऊ में स्थित। आसान पार्किंग और त्वरित परामर्श उपलब्ध।'
                : 'Easily accessible on Mohan Road, Sadrauna, Lucknow with dedicated parking.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Contact & Location Cards (6 Cols) */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              {/* Address Card */}
              <div className="bg-slate-50 dark:bg-slate-900 p-5 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-teal-700 text-white flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                      Hope Dental Hospital & Wellness Centre
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      {language === 'hi' ? HOSPITAL_INFO.addressHi : HOSPITAL_INFO.address}
                    </p>
                    <p className="text-xs text-teal-700 dark:text-teal-400 font-semibold mt-1">
                      Landmark: Near Sadrauna Main Market & Mohan Road Crossing, Lucknow
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                  <a
                    href={HOSPITAL_INFO.socialLinks.google}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-4 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center space-x-1.5"
                  >
                    <Navigation className="w-3.5 h-3.5 text-teal-400" />
                    <span>Get Directions (Google Maps)</span>
                  </a>

                  <a
                    href={`https://wa.me/919450000000?text=Hello%20Hope%20Dental%20Hospital,%20I%20need%20assistance%20with%20clinic%20location.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center space-x-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* Helpline & Timings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-slate-50 dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center space-x-2 text-teal-700 dark:text-teal-400 font-bold text-xs uppercase tracking-wider">
                    <Phone className="w-4 h-4" />
                    <span>Phone Numbers</span>
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    <a href={`tel:${HOSPITAL_INFO.phone}`} className="hover:text-teal-600 dark:hover:text-teal-400 block">
                      {HOSPITAL_INFO.phone}
                    </a>
                    <a href={`tel:${HOSPITAL_INFO.altPhone}`} className="hover:text-teal-600 dark:hover:text-teal-400 block text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5">
                      {HOSPITAL_INFO.altPhone}
                    </a>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center space-x-2 text-teal-700 dark:text-teal-400 font-bold text-xs uppercase tracking-wider">
                    <Clock className="w-4 h-4" />
                    <span>OPD Timings</span>
                  </div>
                  <div className="text-xs text-slate-800 dark:text-slate-200 space-y-0.5">
                    <p className="font-bold">Mon – Sat: 9:00 AM – 8:00 PM</p>
                    <p className="text-slate-600 dark:text-slate-400">Sunday: 10:00 AM – 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Fast Inquiry Form (6 Cols) */}
            <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-900 p-5 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
              <div className="space-y-1 mb-5 sm:mb-6">
                <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                  Direct Dental Inquiry
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                  {language === 'hi' ? 'अस्पताल से प्रश्न पूछें' : 'Ask a Question to Our Specialists'}
                </h3>
              </div>

              {isSubmitted ? (
                <div className="bg-teal-100 dark:bg-teal-950/60 border border-teal-300 dark:border-teal-700 text-teal-900 dark:text-teal-200 p-6 rounded-2xl text-center space-y-2 animate-fadeIn">
                  <CheckCircle2 className="w-10 h-10 text-teal-600 dark:text-teal-400 mx-auto" />
                  <h4 className="font-bold text-base">{language === 'hi' ? 'पूछताछ सफलतापूर्वक दर्ज की गई!' : 'Inquiry Submitted Successfully!'}</h4>
                  <p className="text-xs text-teal-800 dark:text-teal-300">
                    {language === 'hi' 
                      ? 'हमारा स्टाफ जल्द ही आपसे संपर्क करेगा।' 
                      : `Our front desk at Sadrauna will contact you shortly at ${formPhone}.`
                    }
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      {language === 'hi' ? 'पूरा नाम *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full text-base sm:text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        {language === 'hi' ? 'फ़ोन नंबर *' : 'Phone / WhatsApp *'}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="e.g. 98390XXXXX"
                        className="w-full text-base sm:text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        {language === 'hi' ? 'उपचार श्रेणी' : 'Inquiry Category'}
                      </label>
                      <select
                        value={formType}
                        onChange={(e) => setFormType(e.target.value)}
                        className="w-full text-base sm:text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
                      >
                        <option value="General Consultation">General Consultation</option>
                        <option value="Root Canal Treatment">Root Canal Treatment (RCT)</option>
                        <option value="Dental Implants">Dental Implants</option>
                        <option value="Invisible Aligners">Invisible Aligners / Braces</option>
                        <option value="Wisdom Tooth Pain">Wisdom Tooth Pain</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      {language === 'hi' ? 'अपनी समस्या या प्रश्न लिखें' : 'Describe your dental question'}
                    </label>
                    <textarea
                      rows={3}
                      value={formQuery}
                      onChange={(e) => setFormQuery(e.target.value)}
                      placeholder="Tell us about the issue..."
                      className="w-full text-base sm:text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500 hover:from-teal-700 hover:to-emerald-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-teal-600/25 transition-all flex items-center justify-center space-x-2 active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>{language === 'hi' ? 'पूछताछ भेजें' : 'Send Inquiry to Hospital Desk'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 sm:py-14 bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="font-serif font-bold text-lg text-white">
              Hope Dental Hospital & Wellness Centre
            </div>
            <p>Sadrauna, Near Main Market, Mohan Road, Lucknow, UP 226009 • Helpline: {HOSPITAL_INFO.phone}</p>
          </div>

          <div className="flex items-center space-x-3">
            <a href={HOSPITAL_INFO.socialLinks.youtube} target="_blank" rel="noreferrer" className="p-2.5 bg-slate-900 rounded-xl text-red-500 hover:bg-slate-800 border border-slate-800">
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <a href={HOSPITAL_INFO.socialLinks.facebook} target="_blank" rel="noreferrer" className="p-2.5 bg-slate-900 rounded-xl text-blue-400 hover:bg-slate-800 border border-slate-800">
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a href={HOSPITAL_INFO.socialLinks.google} target="_blank" rel="noreferrer" className="px-3 py-2 bg-slate-900 rounded-xl text-amber-400 font-bold flex items-center space-x-1.5 border border-slate-800">
              <GoogleIcon className="w-3.5 h-3.5" />
              <span>4.9★ Google</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Blog Full Reading Modal (Mobile Optimized) */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[88vh] overflow-y-auto border border-slate-200 dark:border-slate-800 p-5 sm:p-8 space-y-4 shadow-2xl relative">
            <button
              onClick={() => setSelectedBlogId(null)}
              className="sticky top-0 float-right -mt-1 -mr-1 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white shadow-sm z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
              {selectedBlog.category}
            </span>

            <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
              {language === 'hi' ? selectedBlog.titleHi : selectedBlog.title}
            </h3>

            <div className="flex items-center space-x-3 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 pb-3 border-b border-slate-200 dark:border-slate-800">
              <span>{selectedBlog.authorDoctor}</span>
              <span>•</span>
              <span>{selectedBlog.date}</span>
              <span>•</span>
              <span>{selectedBlog.readTime}</span>
            </div>

            <img
              src={selectedBlog.imageUrl}
              alt={selectedBlog.title}
              className="w-full h-48 sm:h-56 object-cover rounded-2xl"
            />

            <div className="prose prose-sm dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
              <p>{selectedBlog.content}</p>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => {
                  setSelectedBlogId(null);
                  setIsBookingOpen(true);
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-teal-600 to-emerald-500 text-white font-bold text-xs rounded-xl shadow"
              >
                {language === 'hi' ? 'संबंधित डॉक्टर से परामर्श लें' : 'Consult Doctor for this Issue'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
