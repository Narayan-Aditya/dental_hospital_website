import React, { useState } from 'react';
import { 
  Star, 
  MapPin, 
  Phone, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ChevronDown, 
  ChevronRight,
  Calculator,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { PageId, Currency, Language } from '../../types';

export const Navbar: React.FC = () => {
  const { 
    language, 
    setLanguage, 
    currency, 
    setCurrency, 
    darkMode, 
    toggleDarkMode, 
    currentPage, 
    navigateTo, 
    setIsBookingOpen,
    setIsEmergencyOpen,
    setIsCostCalculatorOpen,
    setSelectedBranchForBooking,
    clinicBranches,
    treatments,
    hospitalInfo
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [specialtiesDropdownOpen, setSpecialtiesDropdownOpen] = useState(false);
  const [clinicsDropdownOpen, setClinicsDropdownOpen] = useState(false);
  const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);
  const [othersDropdownOpen, setOthersDropdownOpen] = useState(false);

  const handleNavClick = (pageId: PageId) => {
    navigateTo(pageId);
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setSpecialtiesDropdownOpen(false);
    setClinicsDropdownOpen(false);
    setTeamDropdownOpen(false);
    setOthersDropdownOpen(false);
  };

  const handleSelectBranch = (branchId: string) => {
    setSelectedBranchForBooking(branchId);
    setIsBookingOpen(true);
    setClinicsDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* 1. TOP UTILITY & HELPLINE BAR (SERENE DENTAL NAVY #091e34) */}
      <div className="bg-[#091e34] text-slate-300 text-xs py-2 px-3 sm:px-6 lg:px-8 border-b border-[#0f2d4a] transition-colors z-50 relative">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          
          {/* Left: Phone icon + Locations */}
          <div className="flex items-center space-x-4 text-[11px] sm:text-xs">
            <a 
              href={`tel:${hospitalInfo.phone.replace(/\s+/g, '')}`}
              className="flex items-center text-slate-200 hover:text-teal-400 font-bold transition-colors"
            >
              <span className="text-teal-400 mr-1.5 text-sm">📞</span>
              <span>{hospitalInfo.phone}</span>
            </a>
            
            <button 
              onClick={() => handleNavClick('clinics')}
              className="flex items-center text-slate-300 hover:text-white transition-colors group"
            >
              <span className="text-teal-400 mr-1 text-sm group-hover:scale-110 transition-transform">📍</span>
              <span className="font-medium">Locations</span>
              <span className="ml-1 text-[10px] text-slate-400 hidden md:inline">(Sadrauna, Lucknow)</span>
            </button>
          </div>

          {/* Right: Book Appointment Pill Button (Dental Teal Gradient) + Social Profiles + Controls */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Dental Teal/Cyan Pill Button */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white text-[11px] sm:text-xs font-bold px-4 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-md shadow-teal-500/25 active:scale-95 transition-all flex items-center space-x-1"
            >
              <span>Book Appointment</span>
            </button>

            {/* Social Media & Verified Profiles */}
            <div className="hidden lg:flex items-center space-x-2 border-l border-slate-800 pl-3">
              <a
                href={hospitalInfo.socialLinks?.facebook || 'https://www.facebook.com/p/Hope-Dental-Hospital-and-Wellness-Center-100083540701821/'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#1877F2] transition-colors p-1"
                title="Official Facebook Page"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href={hospitalInfo.socialLinks?.youtube || 'https://youtube.com/@drhimangidubey_hopedental?si=dICNBMYUw_9KpXfp'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#FF0000] transition-colors p-1"
                title="Official YouTube Channel (@drhimangidubey_hopedental)"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a
                href={hospitalInfo.socialLinks?.google || 'https://share.google/M13VNXGp52dAKKUWl'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#4285F4] transition-colors p-1"
                title="Google 5.0 Star Profile & Maps"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
              </a>
              <a
                href={hospitalInfo.socialLinks?.justdial || 'https://jsdl.in/DT-39XTVYSNSB8'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#ff6a00] transition-colors p-1"
                title="Justdial 5.0 Star Listing"
              >
                <span className="text-[10px] font-black px-1 rounded bg-[#ff6a00]/20 text-[#ff6a00]">JD</span>
              </a>
              <a
                href={hospitalInfo.socialLinks?.whatsapp || 'https://wa.me/917905287870'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#25D366] transition-colors p-1"
                title="Chat on WhatsApp (+91 79052 87870)"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </a>
            </div>

            {/* 24/7 Emergency Quick Pill */}
            <button
              onClick={() => setIsEmergencyOpen(true)}
              className="px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-rose-600 hover:bg-rose-700 text-white flex items-center space-x-1 shadow-sm transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              <span>24/7 Emergency</span>
            </button>

            {/* Currency Selector */}
            <div className="hidden sm:flex items-center bg-[#061423] rounded-lg p-0.5 border border-[#0f2d4a] text-[11px]">
              {(['INR', 'USD', 'GBP', 'EUR'] as Currency[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition-all ${
                    currency === c 
                      ? 'bg-teal-600 text-white' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Language Selector */}
            <div className="flex items-center bg-[#061423] rounded-lg p-0.5 border border-[#0f2d4a] text-[11px]">
              {(['en', 'hi'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase transition-all ${
                    language === lang 
                      ? 'bg-teal-700 text-white' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Toggle theme"
            >
              {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN STICKY HEADER */}
      <header className="sticky top-0 z-40 bg-white dark:bg-[#07192b] border-b border-slate-200/90 dark:border-slate-800 shadow-sm transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Brand Logo: Dental Crest + HOPE DENTAL */}
            <div 
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-3 cursor-pointer group shrink-0"
            >
              {/* Ornate Dental Crest Shield Emblem */}
              <div className="w-12 h-12 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
                  {/* Outer Laurel Wreath / Leaves in Warm Gold */}
                  <g fill="#996515" opacity="0.85">
                    <path d="M 22 28 C 16 35, 14 48, 18 60 C 22 72, 32 82, 45 88 C 43 85, 33 78, 28 68 C 24 58, 24 45, 27 34 Z" fill="url(#crestGold)" />
                    <path d="M 12 38 C 16 40, 20 44, 22 50 C 18 48, 14 44, 12 38 Z" fill="url(#crestGold)" />
                    <path d="M 10 50 C 14 52, 18 56, 19 62 C 15 60, 11 56, 10 50 Z" fill="url(#crestGold)" />
                    <path d="M 14 62 C 18 65, 21 70, 21 76 C 17 73, 14 68, 14 62 Z" fill="url(#crestGold)" />
                    
                    <path d="M 78 28 C 84 35, 86 48, 82 60 C 78 72, 68 82, 55 88 C 57 85, 67 78, 72 68 C 76 58, 76 45, 73 34 Z" fill="url(#crestGold)" />
                    <path d="M 88 38 C 84 40, 80 44, 78 50 C 82 48, 86 44, 88 38 Z" fill="url(#crestGold)" />
                    <path d="M 90 50 C 86 52, 82 56, 81 62 C 85 60, 89 56, 90 50 Z" fill="url(#crestGold)" />
                    <path d="M 86 62 C 82 65, 79 70, 79 76 C 83 73, 86 68, 86 62 Z" fill="url(#crestGold)" />
                  </g>

                  {/* Top Crown Emblem */}
                  <path d="M 36 22 L 42 27 L 50 18 L 58 27 L 64 22 L 62 30 L 38 30 Z" fill="url(#crestGold)" />
                  <circle cx="36" cy="20" r="2" fill="#d4af37" />
                  <circle cx="50" cy="16" r="2.5" fill="#0d9488" />
                  <circle cx="64" cy="20" r="2" fill="#d4af37" />

                  {/* Shield Frame */}
                  <path d="M 28 32 C 28 32, 50 30, 50 30 C 50 30, 72 32, 72 32 C 72 55, 64 74, 50 82 C 36 74, 28 55, 28 32 Z" 
                    fill="#081a2e" 
                    stroke="url(#crestGold)" 
                    strokeWidth="2.5" 
                  />
                  <path d="M 32 35 C 32 35, 50 33, 50 33 C 50 33, 68 35, 68 35 C 68 53, 61 69, 50 76 C 39 69, 32 53, 32 35 Z" 
                    fill="#0c2b4c" 
                    stroke="#d4a359" 
                    strokeWidth="1" 
                    opacity="0.8" 
                  />

                  {/* Central Tooth Silhouette in Clean White with Soft Aqua Highlight */}
                  <path d="M 42 42 C 42 38, 46 37, 50 37 C 54 37, 58 38, 58 42 C 58 46, 57 52, 57 58 C 57 65, 53 68, 52 70 C 51 68, 50 63, 50 58 C 50 63, 49 68, 48 70 C 47 68, 43 65, 43 58 C 43 52, 42 46, 42 42 Z" 
                    fill="#ffffff" 
                  />
                  {/* Tooth Shine */}
                  <path d="M 45 42 C 45 40, 48 39, 50 39 C 50 43, 49 48, 48 52 C 47 48, 46 45, 45 42 Z" fill="#e0f2fe" opacity="0.8" />
                  <circle cx="53" cy="43" r="1.5" fill="#0d9488" />

                  {/* Gradients */}
                  <defs>
                    <linearGradient id="crestGold" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fef08a" />
                      <stop offset="50%" stopColor="#eab308" />
                      <stop offset="100%" stopColor="#ca8a04" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center space-x-1.5">
                  <span className="font-black text-xl sm:text-2xl tracking-tight text-[#091e34] dark:text-white leading-none">
                    HOPE DENTAL
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase mt-1 leading-none">
                  Face Make Over & Smile Clinics
                </span>
                <span className="text-[9px] text-slate-400 font-semibold tracking-tight hidden sm:block mt-0.5">
                  Hospital & Wellness Centre · Sadrauna, Lucknow
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1 text-[13px] font-semibold text-slate-700 dark:text-slate-200">
              
              {/* 1. About Us Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
              >
                <button
                  onClick={() => handleNavClick('about')}
                  className={`px-3 py-2 rounded-lg transition-colors flex items-center space-x-1 hover:text-teal-600 dark:hover:text-teal-400 ${
                    currentPage === 'about' ? 'text-teal-600 dark:text-teal-400 font-bold' : ''
                  }`}
                >
                  <span>About Us</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {aboutDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white dark:bg-slate-900 shadow-xl rounded-xl border border-slate-200 dark:border-slate-800 p-2 z-50 animate-fadeIn">
                    <div 
                      onClick={() => handleNavClick('about')}
                      className="px-3 py-2 rounded-lg hover:bg-teal-50/60 dark:hover:bg-slate-800 cursor-pointer"
                    >
                      <div className="text-xs font-bold text-slate-900 dark:text-white hover:text-teal-600">About Hope Dental</div>
                      <div className="text-[10px] text-slate-500">History, Leadership & Accreditation</div>
                    </div>
                    <div 
                      onClick={() => handleNavClick('doctors')}
                      className="px-3 py-2 rounded-lg hover:bg-teal-50/60 dark:hover:bg-slate-800 cursor-pointer"
                    >
                      <div className="text-xs font-bold text-slate-900 dark:text-white hover:text-teal-600">Dr. Himangi Dubey</div>
                      <div className="text-[10px] text-slate-500">Founder & Chief Dental Surgeon</div>
                    </div>
                    <div 
                      onClick={() => handleNavClick('doctors')}
                      className="px-3 py-2 rounded-lg hover:bg-teal-50/60 dark:hover:bg-slate-800 cursor-pointer"
                    >
                      <div className="text-xs font-bold text-slate-900 dark:text-white hover:text-teal-600">Dr. M. S. Bhoj</div>
                      <div className="text-[10px] text-slate-500">Senior Consultant & Surgeon</div>
                    </div>
                    <div 
                      onClick={() => handleNavClick('about')}
                      className="px-3 py-2 rounded-lg hover:bg-teal-50/60 dark:hover:bg-slate-800 cursor-pointer"
                    >
                      <div className="text-xs font-bold text-slate-900 dark:text-white hover:text-teal-600">Technology at Hope</div>
                      <div className="text-[10px] text-slate-500">Biolase, CBCT & Sterilization</div>
                    </div>
                  </div>
                )}
              </div>

              {/* 2. Specialties Mega Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setSpecialtiesDropdownOpen(true)}
                onMouseLeave={() => setSpecialtiesDropdownOpen(false)}
              >
                <button
                  onClick={() => handleNavClick('services')}
                  className={`px-3 py-2 rounded-lg transition-colors flex items-center space-x-1 hover:text-teal-600 dark:hover:text-teal-400 ${
                    currentPage === 'services' ? 'text-teal-600 dark:text-teal-400 font-bold' : ''
                  }`}
                >
                  <span>Specialties</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {specialtiesDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 bg-white dark:bg-slate-900 shadow-2xl rounded-2xl border border-slate-200 dark:border-slate-800 p-3 z-50 animate-fadeIn">
                    <div className="text-[10px] uppercase font-bold text-slate-400 px-3 py-1.5 tracking-wider border-b border-slate-100 dark:border-slate-800 mb-1">
                      12 Dental Specialties
                    </div>
                    <div className="grid grid-cols-1 gap-1 max-h-96 overflow-y-auto">
                      {treatments.map(t => (
                        <div
                          key={t.id}
                          onClick={() => {
                            handleNavClick('services');
                            setSpecialtiesDropdownOpen(false);
                          }}
                          className="px-3 py-2 rounded-xl hover:bg-teal-50/60 dark:hover:bg-slate-800 cursor-pointer transition-colors group"
                        >
                          <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">
                            {t.title}
                          </div>
                          <div className="text-[10px] text-slate-500 truncate">
                            {t.shortDesc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 3. Our Hospital / Clinics Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setClinicsDropdownOpen(true)}
                onMouseLeave={() => setClinicsDropdownOpen(false)}
              >
                <button
                  onClick={() => handleNavClick('clinics')}
                  className={`px-3 py-2 rounded-lg transition-colors flex items-center space-x-1 hover:text-teal-600 dark:hover:text-teal-400 ${
                    currentPage === 'clinics' ? 'text-teal-600 dark:text-teal-400 font-bold' : ''
                  }`}
                >
                  <span>Our Hospital</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {clinicsDropdownOpen && (
                  <div className="absolute top-full -left-12 w-96 bg-white dark:bg-slate-900 shadow-2xl rounded-2xl border border-slate-200 dark:border-slate-800 p-3 z-50 animate-fadeIn">
                    <div className="text-[10px] uppercase font-bold text-slate-400 px-3 py-1.5 tracking-wider flex justify-between border-b border-slate-100 dark:border-slate-800 mb-1">
                      <span>Sadrauna, Lucknow Campus</span>
                      <span className="text-teal-600 font-bold">Standalone Hospital</span>
                    </div>
                    <div className="grid grid-cols-1 gap-1 max-h-96 overflow-y-auto">
                      {clinicBranches.map(b => (
                        <div
                          key={b.id}
                          onClick={() => handleSelectBranch(b.id)}
                          className="px-3 py-2 rounded-xl hover:bg-teal-50/60 dark:hover:bg-slate-800 cursor-pointer transition-colors flex items-center justify-between group"
                        >
                          <div>
                            <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-teal-600 flex items-center">
                              <span>{b.name}</span>
                              {b.badge && (
                                <span className="ml-1.5 text-[9px] uppercase px-1.5 py-0.2 rounded bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 font-bold border border-teal-200/60 dark:border-teal-800/60">
                                  {b.badge}
                                </span>
                              )}
                            </div>
                            <div className="text-[10px] text-slate-500">
                              {b.landmark} · {b.phone}
                            </div>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-600 group-hover:translate-x-0.5 transition-all" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 4. Team Hope Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setTeamDropdownOpen(true)}
                onMouseLeave={() => setTeamDropdownOpen(false)}
              >
                <button
                  onClick={() => handleNavClick('doctors')}
                  className={`px-3 py-2 rounded-lg transition-colors flex items-center space-x-1 hover:text-teal-600 dark:hover:text-teal-400 ${
                    currentPage === 'doctors' ? 'text-teal-600 dark:text-teal-400 font-bold' : ''
                  }`}
                >
                  <span>Team Hope</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {teamDropdownOpen && (
                  <div className="absolute top-full left-0 w-72 bg-white dark:bg-slate-900 shadow-xl rounded-xl border border-slate-200 dark:border-slate-800 p-2 z-50 animate-fadeIn">
                    <div 
                      onClick={() => handleNavClick('doctors')}
                      className="px-3 py-2 rounded-lg hover:bg-teal-50/60 dark:hover:bg-slate-800 cursor-pointer"
                    >
                      <div className="text-xs font-bold text-slate-900 dark:text-white hover:text-teal-600">Senior Most Dentists</div>
                      <div className="text-[10px] text-slate-500">Dr. Himangi Dubey & Senior Panel</div>
                    </div>
                    <div 
                      onClick={() => handleNavClick('doctors')}
                      className="px-3 py-2 rounded-lg hover:bg-teal-50/60 dark:hover:bg-slate-800 cursor-pointer"
                    >
                      <div className="text-xs font-bold text-slate-900 dark:text-white hover:text-teal-600">Implantology Specialists</div>
                      <div className="text-[10px] text-slate-500">Full-Arch All-on-4 & Basal Implants</div>
                    </div>
                    <div 
                      onClick={() => handleNavClick('doctors')}
                      className="px-3 py-2 rounded-lg hover:bg-teal-50/60 dark:hover:bg-slate-800 cursor-pointer"
                    >
                      <div className="text-xs font-bold text-slate-900 dark:text-white hover:text-teal-600">Cosmetic Dental Team</div>
                      <div className="text-[10px] text-slate-500">Smile Design, Veneers & Whitening</div>
                    </div>
                  </div>
                )}
              </div>

              {/* 5. Others Dropdown (Cost Estimator, Reviews, Emergency) */}
              <div 
                className="relative"
                onMouseEnter={() => setOthersDropdownOpen(true)}
                onMouseLeave={() => setOthersDropdownOpen(false)}
              >
                <button
                  className="px-3 py-2 rounded-lg transition-colors flex items-center space-x-1 hover:text-teal-600 dark:hover:text-teal-400"
                >
                  <span>Others</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {othersDropdownOpen && (
                  <div className="absolute top-full right-0 w-64 bg-white dark:bg-slate-900 shadow-xl rounded-xl border border-slate-200 dark:border-slate-800 p-2 z-50 animate-fadeIn">
                    <div 
                      onClick={() => { setIsCostCalculatorOpen(true); setOthersDropdownOpen(false); }}
                      className="px-3 py-2 rounded-lg hover:bg-teal-50/60 dark:hover:bg-slate-800 cursor-pointer flex items-center space-x-2"
                    >
                      <Calculator className="w-4 h-4 text-teal-600" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">Cost Estimator</div>
                        <div className="text-[10px] text-slate-500">Transparent dental fees & savings</div>
                      </div>
                    </div>
                    <div 
                      onClick={() => handleNavClick('reviews')}
                      className="px-3 py-2 rounded-lg hover:bg-teal-50/60 dark:hover:bg-slate-800 cursor-pointer flex items-center space-x-2"
                    >
                      <Star className="w-4 h-4 text-amber-500" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">Patient Reviews</div>
                        <div className="text-[10px] text-slate-500">5.0 ★ Google & Justdial rated</div>
                      </div>
                    </div>
                    <div 
                      onClick={() => handleNavClick('contact')}
                      className="px-3 py-2 rounded-lg hover:bg-teal-50/60 dark:hover:bg-slate-800 cursor-pointer flex items-center space-x-2"
                    >
                      <MapPin className="w-4 h-4 text-teal-600" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">Contact & Helplines</div>
                        <div className="text-[10px] text-slate-500">Hospital map, route & hours</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 6. Blog */}
              <button
                onClick={() => handleNavClick('blogs')}
                className={`px-3 py-2 rounded-lg transition-colors font-bold hover:text-teal-600 dark:hover:text-teal-400 ${
                  currentPage === 'blogs' ? 'text-teal-600 dark:text-teal-400' : 'text-slate-900 dark:text-white'
                }`}
              >
                Blog
              </button>
            </nav>

            {/* Header Right: Focused Direct Booking CTA & Admin Access */}
            <div className="hidden sm:flex items-center space-x-2.5">
              <button
                onClick={() => handleNavClick('admin')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  currentPage === 'admin'
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                title="Clinic Administrator Portal"
              >
                <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Admin</span>
              </button>

              <button
                onClick={() => setIsBookingOpen(true)}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-bold text-xs shadow-md shadow-teal-500/20 active:scale-95 transition-all flex items-center space-x-1.5"
              >
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex xl:hidden items-center space-x-2">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="px-3 py-1.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold shadow-sm"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* 3. MOBILE SLIDE-DOWN DRAWER */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 space-y-3 animate-fadeIn max-h-[85vh] overflow-y-auto">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => handleNavClick('home')}
                className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-left font-bold"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-left font-bold"
              >
                About Us
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-left font-bold"
              >
                Specialties
              </button>
              <button
                onClick={() => handleNavClick('clinics')}
                className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-left font-bold"
              >
                Our Hospital
              </button>
              <button
                onClick={() => handleNavClick('doctors')}
                className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-left font-bold"
              >
                Team Hope
              </button>
              <button
                onClick={() => handleNavClick('admin')}
                className="p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 text-left font-bold border border-teal-200/60 dark:border-teal-800/60"
              >
                Admin Portal
              </button>
              <button
                onClick={() => { setIsCostCalculatorOpen(true); setMobileMenuOpen(false); }}
                className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-left font-bold text-teal-600 dark:text-teal-400"
              >
                Cost Calculator
              </button>
              <button
                onClick={() => handleNavClick('blogs')}
                className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-left font-bold"
              >
                Blog
              </button>
            </div>

            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <a
                href={`tel:${hospitalInfo.phone.replace(/\s+/g, '')}`}
                className="text-xs font-bold text-teal-600 dark:text-teal-400 flex items-center space-x-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{hospitalInfo.phone}</span>
              </a>

              <button
                onClick={() => { setIsEmergencyOpen(true); setMobileMenuOpen(false); }}
                className="px-3 py-1 rounded-full bg-rose-600 text-white text-[11px] font-bold"
              >
                24/7 Emergency
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
