import React, { useState } from 'react';
import { 
  Building, 
  Layers, 
  Stethoscope, 
  Star, 
  BookOpen, 
  MapPin, 
  Calendar, 
  Phone, 
  Clock, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ChevronRight,
  MessageSquare,
  Home
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { HOSPITAL_INFO } from '../../data/mockData';
import { YoutubeIcon, FacebookIcon, GoogleIcon } from '../common/SocialIcons';
import { PageId } from '../../types';

export const Navbar: React.FC = () => {
  const { 
    language, 
    setLanguage, 
    darkMode, 
    toggleDarkMode, 
    currentPage, 
    navigateTo, 
    setIsBookingOpen 
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string; labelHi: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', labelHi: 'होम', icon: Home },
    { id: 'about', label: 'About Hospital', labelHi: 'अस्पताल परिचय', icon: Building },
    { id: 'services', label: 'Services & Treatments', labelHi: 'उपचार व सेवाएं', icon: Layers },
    { id: 'doctors', label: 'Doctor Specialists', labelHi: 'विशेषज्ञ डॉक्टर्स', icon: Stethoscope },
    { id: 'reviews', label: 'Patient Reviews (4.9★)', labelHi: 'मरीज समीक्षाएं (4.9★)', icon: Star },
    { id: 'blogs', label: 'Dental Blogs', labelHi: 'डेंटल ब्लॉग्स', icon: BookOpen },
    { id: 'contact', label: 'Location & Timings', labelHi: 'पता व संपर्क', icon: MapPin },
  ];

  const handleNavClick = (pageId: PageId) => {
    navigateTo(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* 1. TOP UTILITY BAR (Responsive Glass Design) */}
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

      {/* 2. MAIN STICKY NAVBAR */}
      <nav className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 py-2.5 sm:py-3 transition-all duration-300 shadow-sm shadow-slate-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-2 sm:gap-4">
          {/* Brand Logo & Clinic Identity */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center space-x-2.5 sm:space-x-3.5 group shrink-0 text-left"
          >
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
          </button>

          {/* Desktop Navigation Tabs (Multi-page Interactive Navigation) */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 text-[13px] font-semibold shrink-0">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-teal-50 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 font-bold ring-1 ring-teal-500/30'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-teal-600 dark:hover:text-teal-400'
                  }`}
                >
                  {language === 'hi' ? item.labelHi : item.label}
                </button>
              );
            })}
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

      {/* 3. MOBILE SLIDE-OVER NAVIGATION DRAWER */}
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
              <div className="flex flex-col space-y-1 text-sm font-semibold">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full px-3.5 py-3 rounded-2xl transition-colors flex items-center justify-between group text-left ${
                        isActive
                          ? 'bg-teal-50 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 font-bold ring-1 ring-teal-500/30'
                          : 'text-slate-700 dark:text-slate-200 hover:bg-teal-50/50 dark:hover:bg-slate-800/80'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-teal-600 dark:text-teal-400' : 'text-slate-400 group-hover:text-teal-600'}`} />
                        <span>{language === 'hi' ? item.labelHi : item.label}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
              <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                <a
                  href={`tel:${HOSPITAL_INFO.phone}`}
                  className="py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center space-x-1.5 active:scale-95 transition-transform"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-600" />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/919450000000?text=Hello%20Hope%20Dental%20Hospital%20Sadrauna,%20I%20would%20like%20to%20inquire%20about%20dental%20treatments."
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center space-x-1.5 active:scale-95 transition-transform"
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
                className="w-full py-3 bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500 text-white rounded-xl font-bold text-xs flex items-center justify-center shadow-lg shadow-teal-600/25 active:scale-95 transition-transform"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>{language === 'hi' ? 'अपॉइंटमेंट बुक करें (60s)' : 'Book Appointment (60s)'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
