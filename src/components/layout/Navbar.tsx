import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  Calendar, 
  FileText, 
  AlertCircle, 
  Type, 
  UserCheck
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { HOSPITAL_INFO } from '../../data/mockData';
import { YoutubeIcon, FacebookIcon, GoogleIcon } from '../common/SocialIcons';

export const Navbar: React.FC = () => {
  const { 
    language, 
    setLanguage, 
    t, 
    fontSize, 
    setFontSize, 
    highContrast, 
    setHighContrast,
    setIsBookingOpen, 
    setIsInvoiceModalOpen,
    setIsEmergencyModalOpen,
    setIsAdminOpen,
  } = useApp();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAccessibilityMenu, setShowAccessibilityMenu] = useState(false);

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
      {/* Top Notification & Hotline Bar */}
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
              <span>Mon-Sat: 9AM - 8PM | Sun: 10AM - 2PM</span>
            </div>
            <button 
              onClick={() => setIsEmergencyModalOpen(true)}
              className="flex items-center text-rose-400 hover:text-rose-300 font-semibold animate-pulse"
            >
              <AlertCircle className="w-3.5 h-3.5 mr-1" />
              <span>24/7 Dental Emergency SOS</span>
            </button>
          </div>

          {/* Right: Social, Language, Accessibility */}
          <div className="flex items-center space-x-3">
            {/* Social Icons */}
            <div className="hidden sm:flex items-center space-x-2 border-r border-slate-700 pr-3">
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
                JD
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

            {/* Accessibility button */}
            <div className="relative">
              <button 
                onClick={() => setShowAccessibilityMenu(!showAccessibilityMenu)}
                className="p-1 rounded bg-slate-800 text-slate-300 hover:text-white transition-colors"
                title="Accessibility & Text Size"
              >
                <Type className="w-3.5 h-3.5" />
              </button>

              {showAccessibilityMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-slate-800 rounded-xl shadow-xl border border-slate-200 p-2 z-50 text-xs">
                  <div className="font-semibold text-slate-700 px-2 py-1 border-b border-slate-100 mb-1">
                    Accessibility Options
                  </div>
                  <button
                    onClick={toggleFontSize}
                    className="w-full text-left px-2 py-1.5 hover:bg-slate-100 rounded flex justify-between items-center"
                  >
                    <span>Font Size:</span>
                    <span className="font-bold text-teal-600 uppercase">{fontSize}</span>
                  </button>
                  <button
                    onClick={() => setHighContrast(!highContrast)}
                    className="w-full text-left px-2 py-1.5 hover:bg-slate-100 rounded flex justify-between items-center"
                  >
                    <span>High Contrast:</span>
                    <span className="font-bold text-teal-600">{highContrast ? 'ON' : 'OFF'}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Admin Desk Link */}
            <button
              onClick={() => setIsAdminOpen(true)}
              className="text-slate-400 hover:text-teal-400 text-[11px] font-medium hidden lg:inline-flex items-center"
            >
              <UserCheck className="w-3 h-3 mr-1" />
              Reception Desk
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3' 
          : 'bg-white py-4 border-b border-slate-100'
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
                <span className="font-display font-extrabold text-xl text-slate-900 tracking-tight">
                  HOPE DENTAL
                </span>
                <span className="bg-teal-100 text-teal-800 text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                  Lucknow
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium leading-none">
                {language === 'hi' ? 'हॉस्पिटल एवं वेलनेस सेंटर' : 'Hospital & Wellness Centre'}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-6 text-sm font-semibold text-slate-600">
            <a href="#treatments" className="hover:text-teal-600 transition-colors">
              {t('nav.treatments')}
            </a>
            <a href="#doctors" className="hover:text-teal-600 transition-colors">
              {t('nav.doctors')}
            </a>
            <a href="#facilities" className="hover:text-teal-600 transition-colors">
              {t('nav.facilities')}
            </a>
            <a href="#estimator" className="hover:text-teal-600 transition-colors">
              {t('nav.pricing')}
            </a>
            <a href="#blogs" className="hover:text-teal-600 transition-colors">
              {t('nav.blogs')}
            </a>
            <a href="#reviews" className="hover:text-teal-600 transition-colors">
              {t('nav.reviews')}
            </a>
            <a href="#contact" className="hover:text-teal-600 transition-colors">
              {t('nav.contact')}
            </a>
          </div>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Download Invoice Button */}
            <button
              onClick={() => setIsInvoiceModalOpen(true)}
              className="inline-flex items-center px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all border border-slate-200"
            >
              <FileText className="w-3.5 h-3.5 mr-1.5 text-teal-600" />
              <span>{t('nav.invoices')}</span>
            </button>

            {/* Book Appointment CTA */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="inline-flex items-center px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 rounded-xl shadow-lg shadow-teal-600/25 hover:shadow-teal-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span>{t('nav.bookBtn')}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center space-x-2 xl:hidden">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-teal-600 rounded-lg shadow"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 mt-2 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-3 font-semibold text-slate-700 text-base">
              <a 
                href="#treatments" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-teal-600"
              >
                {t('nav.treatments')}
              </a>
              <a 
                href="#doctors" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-teal-600"
              >
                {t('nav.doctors')}
              </a>
              <a 
                href="#facilities" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-teal-600"
              >
                {t('nav.facilities')}
              </a>
              <a 
                href="#estimator" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-teal-600"
              >
                {t('nav.pricing')}
              </a>
              <a 
                href="#blogs" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-teal-600"
              >
                {t('nav.blogs')}
              </a>
              <a 
                href="#reviews" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-teal-600"
              >
                {t('nav.reviews')}
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-teal-600"
              >
                {t('nav.contact')}
              </a>

              <div className="pt-3 border-t border-slate-100 flex flex-col space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsBookingOpen(true);
                  }}
                  className="w-full py-3 bg-teal-600 text-white rounded-xl font-bold flex items-center justify-center shadow-md"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {t('nav.bookBtn')}
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsInvoiceModalOpen(true);
                  }}
                  className="w-full py-2.5 bg-slate-100 text-slate-800 rounded-xl font-semibold flex items-center justify-center border border-slate-200"
                >
                  <FileText className="w-4 h-4 mr-2 text-teal-600" />
                  {t('nav.invoices')}
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsEmergencyModalOpen(true);
                  }}
                  className="w-full py-2.5 bg-rose-50 text-rose-700 rounded-xl font-semibold flex items-center justify-center border border-rose-200"
                >
                  <AlertCircle className="w-4 h-4 mr-2 text-rose-600" />
                  Emergency SOS Guide
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsAdminOpen(true);
                  }}
                  className="w-full py-2 text-slate-500 text-xs font-semibold flex items-center justify-center"
                >
                  <UserCheck className="w-3.5 h-3.5 mr-1" />
                  Hospital Reception & Admin Desk
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
