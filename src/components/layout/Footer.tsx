import React from 'react';
import { 
  Building, 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  Calendar,
  ShieldCheck,
  Heart
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { HOSPITAL_INFO } from '../../data/mockData';
import { YoutubeIcon, FacebookIcon, GoogleIcon } from '../common/SocialIcons';
import { PageId } from '../../types';

export const Footer: React.FC = () => {
  const { language, navigateTo, setIsBookingOpen } = useApp();

  const pages: { id: PageId; label: string; labelHi: string }[] = [
    { id: 'home', label: 'Home Page', labelHi: 'होम पेज' },
    { id: 'about', label: 'About Hospital', labelHi: 'अस्पताल परिचय' },
    { id: 'services', label: 'Services & 3D Anatomy', labelHi: 'उपचार व सेवाएं' },
    { id: 'doctors', label: 'Specialist Doctors', labelHi: 'विशेषज्ञ डॉक्टर्स' },
    { id: 'reviews', label: 'Patient Reviews (4.9★)', labelHi: 'मरीज समीक्षाएं' },
    { id: 'blogs', label: 'Dental Health Blogs', labelHi: 'दंत स्वास्थ्य ब्लॉग' },
    { id: 'contact', label: 'Location & Direct Contact', labelHi: 'पता व संपर्क' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Address (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-700 via-teal-600 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-teal-600/25 shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 6 3 9l3 5 3-5c1.5-3 3-5.5 3-9 0-3.5-2.5-6-6-6z"/>
                </svg>
              </div>
              <div>
                <span className="font-display font-extrabold text-lg text-white tracking-tight">
                  HOPE DENTAL HOSPITAL
                </span>
                <p className="text-[11px] text-teal-400 font-semibold">
                  {language === 'hi' ? 'हॉस्पिटल एवं वेलनेस सेंटर • सदरौना, लखनऊ' : 'Hospital & Wellness Centre • Sadrauna, Lucknow'}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {language === 'hi'
                ? 'सदरौना, मोहन रोड लखनऊ में हॉस्पिटल-ग्रेड सिंगल-सिटिंग रूट कैनाल, स्विस डेंटल इम्प्लांट्स, एवं 3D इनविजिबल अलाइनर्स की आधुनिक सुविधा।'
                : 'Painless, hospital-grade clinical dentistry with rotary endodontics, Swiss implants, and 3D computer-guided orthodontics.'
              }
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Sadrauna, Near Main Market, Mohan Road, Lucknow, UP 226009</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Helpline: {HOSPITAL_INFO.phone} / {HOSPITAL_INFO.altPhone}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Mon – Sat: 9:00 AM – 8:00 PM | Sun: 10:00 AM – 2:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Page Links (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">
              {language === 'hi' ? 'वेबसाइट पृष्ठ (Pages)' : 'Hospital Website Pages'}
            </h4>
            <ul className="space-y-2 text-xs">
              {pages.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => navigateTo(p.id)}
                    className="hover:text-teal-400 transition-colors text-slate-300 flex items-center space-x-1.5 text-left"
                  >
                    <span className="text-teal-500">•</span>
                    <span>{language === 'hi' ? p.labelHi : p.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Proof & Quick CTA (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">
              {language === 'hi' ? 'प्रमाणित रेटिंग' : 'Verified Reviews'}
            </h4>

            <div className="space-y-2">
              <a
                href={HOSPITAL_INFO.socialLinks.google}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-between hover:bg-slate-850 transition-colors"
              >
                <div className="flex items-center space-x-2 text-amber-400 font-bold">
                  <GoogleIcon className="w-4 h-4" />
                  <span>4.9★ Google</span>
                </div>
                <span className="text-[10px] text-slate-400">380+ Reviews</span>
              </a>

              <a
                href={HOSPITAL_INFO.socialLinks.justdial}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-between hover:bg-slate-850 transition-colors"
              >
                <div className="flex items-center space-x-2 text-orange-400 font-bold">
                  <Star className="w-4 h-4 fill-current" />
                  <span>4.8★ JustDial</span>
                </div>
                <span className="text-[10px] text-slate-400">220+ Votes</span>
              </a>
            </div>

            <div className="flex items-center space-x-2 pt-1">
              <a
                href={HOSPITAL_INFO.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-slate-900 rounded-xl text-red-500 hover:bg-slate-800 border border-slate-800"
                title="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={HOSPITAL_INFO.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-slate-900 rounded-xl text-blue-400 hover:bg-slate-800 border border-slate-800"
                title="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={() => setIsBookingOpen(true)}
              className="w-full py-2.5 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-95"
            >
              {language === 'hi' ? 'ऑनलाइन अपॉइंटमेंट बुक करें' : 'Book Online Slot (60s)'}
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} Hope Dental Hospital & Wellness Centre, Sadrauna, Lucknow. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span>ISO 9001:2015 Certified</span>
            <span>•</span>
            <span>Class-B Sterilization</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
