import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  Calendar, 
  Type,
  Sun,
  Moon
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { HOSPITAL_INFO } from '../../data/mockData';
import { YoutubeIcon, FacebookIcon, GoogleIcon } from '../common/SocialIcons';

export const Navbar: React.FC = () => {
  const { 
    language, 
    setLanguage, 
    fontSize, 
    setFontSize, 
    darkMode,
    toggleDarkMode,
    setIsBookingOpen
  } = useApp();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFontSize = () => {
    if (fontSize === 'normal') setFontSize('large');
    else if (fontSize === 'large') setFontSize('xlarge');
    else setFontSize('normal');
  };

  return (
    <>
      {/* Top Bar: Location & Social Links */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Left: Location & Timings */}
          <div className="flex items-center space-x-4 flex-wrap gap-y-1">
            <div className="flex items-center text-teal-400 font-medium">
              <MapPin className="w-3.5 h-3.5 mr-1" />
              <span>Sadrauna, Mohan Road, Lucknow</span>
            </div>
            <div className="hidden md:flex items-center text-slate-300">
              <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
              <span>{HOSPITAL_INFO.timings}</span>
            </div>
          </div>

          {/* Right: Social & Language & Dark Mode */}
          <div className="flex items-center space-x-3">
            {/* Social Icons */}
            <div className="flex items-center space-x-2 border-r border-slate-700 pr-3">
              <a 
                href={HOSPITAL_INFO.socialLinks.youtube} 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-red-500 transition-colors p-1"
                title="Hope Dental YouTube Channel"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
              <a 
                href={HOSPITAL_INFO.socialLinks.facebook} 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-blue-400 transition-colors p-1"
                title="Hope Dental Facebook Page"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a 
                href={HOSPITAL_INFO.socialLinks.justdial} 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-orange-400 transition-colors text-[10px] font-bold px-1 py-0.5 rounded bg-slate-800"
                title="JustDial Verified Clinic"
              >
                JD 4.8★
              </a>
              <a 
                href={HOSPITAL_INFO.socialLinks.google} 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-emerald-400 transition-colors text-[10px] font-bold px-1 py-0.5 rounded bg-slate-800 flex items-center space-x-1"
                title="Google Maps Profile & Reviews"
              >
                <GoogleIcon className="w-2.5 h-2.5" />
                <span>4.9★</span>
              </a>
            </div>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-amber-300 transition-colors"
              title="Toggle Dark / Light Mode"
            >
              {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-cyan-400" />}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center space-x-1 bg-slate-800 rounded-lg p-0.5">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
                  language === 'en' ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
                  language === 'hi' ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                हिन्दी
              </button>
            </div>

            {/* Text size adjuster */}
            <button 
              onClick={toggleFontSize}
              className="p-1 rounded bg-slate-800 text-slate-300 hover:text-white transition-colors"
              title="Change Text Size"
            >
              <Type className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md border-b border-slate-100 dark:border-slate-800 py-3' 
          : 'bg-white dark:bg-slate-900 py-4 border-b border-slate-100 dark:border-slate-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo & Hospital Name */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-teal-700 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 6 3 9l3 5 3-5c1.5-3 3-5.5 3-9 0-3.5-2.5-6-6-6z"/>
                <path d="M10 8c1-1 3-1 4 0"/>
                <circle cx="12" cy="7.5" r="0.5" fill="currentColor" />
              </svg>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-display font-extrabold text-xl text-slate-900 dark:text-white tracking-tight">
                  HOPE DENTAL
                </span>
                <span className="bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300 text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                  Lucknow
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-none">
                {language === 'hi' ? 'हॉस्पिटल एवं वेलनेस सेंटर' : 'Hospital & Wellness Centre'}
              </p>
            </div>
          </a>

          {/* Clean Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-slate-600 dark:text-slate-300">
            <a href="#about" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              {language === 'hi' ? 'अस्पताल के बारे में' : 'About Hospital'}
            </a>
            <a href="#treatments" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              {language === 'hi' ? 'उपचार व सेवाएं' : 'Services & Treatments'}
            </a>
            <a href="#doctors" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              {language === 'hi' ? 'हमारे डॉक्टर्स' : 'Doctors Details'}
            </a>
            <a href="#reviews" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              {language === 'hi' ? 'मरीज समीक्षाएं' : 'Patient Reviews'}
            </a>
            <a href="#blogs" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              {language === 'hi' ? 'डेंटल ब्लॉग्स' : 'Dental Blogs'}
            </a>
            <a href="#contact" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
              {language === 'hi' ? 'पता व संपर्क' : 'Contact & Location'}
            </a>
          </div>

          {/* Book CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="inline-flex items-center px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 rounded-xl shadow-lg shadow-teal-600/25 hover:shadow-teal-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span>{language === 'hi' ? 'अपॉइंटमेंट बुक करें' : 'Book Appointment'}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-teal-600 rounded-lg shadow"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 mt-2 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-3 font-semibold text-slate-700 dark:text-slate-200 text-base">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
                {language === 'hi' ? 'अस्पताल के बारे में' : 'About Hospital'}
              </a>
              <a href="#treatments" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
                {language === 'hi' ? 'उपचार व सेवाएं' : 'Services & Treatments'}
              </a>
              <a href="#doctors" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
                {language === 'hi' ? 'हमारे डॉक्टर्स' : 'Doctors Details'}
              </a>
              <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
                {language === 'hi' ? 'मरीज समीक्षाएं' : 'Patient Reviews'}
              </a>
              <a href="#blogs" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
                {language === 'hi' ? 'डेंटल ब्लॉग्स' : 'Dental Blogs'}
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
                {language === 'hi' ? 'पता व संपर्क' : 'Contact & Location'}
              </a>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsBookingOpen(true);
                  }}
                  className="w-full py-3 bg-teal-600 text-white rounded-xl font-bold flex items-center justify-center shadow-md"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{language === 'hi' ? 'अपॉइंटमेंट बुक करें' : 'Book Appointment'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
