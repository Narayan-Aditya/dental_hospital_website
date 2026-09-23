import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ChevronRight,
  Calendar
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { HOSPITAL_INFO } from '../../data/mockData';
import { YoutubeIcon, FacebookIcon, GoogleIcon } from '../common/SocialIcons';

export const Footer: React.FC = () => {
  const { language, setIsBookingOpen } = useApp();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: About Hospital & Socials */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-teal-400 flex items-center justify-center text-white shadow-md">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 6 3 9l3 5 3-5c1.5-3 3-5.5 3-9 0-3.5-2.5-6-6-6z"/>
                  <path d="M10 8c1-1 3-1 4 0"/>
                </svg>
              </div>
              <div>
                <span className="font-display font-extrabold text-xl text-white tracking-tight">
                  HOPE DENTAL
                </span>
                <p className="text-xs text-teal-400 font-medium">Hospital & Wellness Centre</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {language === 'hi' 
                ? 'सदरौना, लखनऊ में आधुनिक तकनीक, जर्मन रोटरी आरसीटी, स्थायी डेंटल इम्प्लांट्स और पारदर्शी क्लियर एलाइनर्स के साथ दंत चिकित्सालय।'
                : 'Sadrauna, Lucknow’s premier center for painless root canals, European certified dental implants, cosmetic smile makeovers, and pediatric oral care.'
              }
            </p>

            {/* Social Media Connect Links */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                Official Social Profiles
              </p>
              <div className="flex items-center space-x-3">
                <a
                  href={HOSPITAL_INFO.socialLinks.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all shadow-sm"
                  title="Subscribe on YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href={HOSPITAL_INFO.socialLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-sm"
                  title="Follow on Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={HOSPITAL_INFO.socialLinks.justdial}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xs font-bold text-orange-400 hover:text-white hover:bg-orange-600 hover:border-orange-600 transition-all shadow-sm"
                  title="View on JustDial Lucknow"
                >
                  JustDial 4.8★
                </a>
                <a
                  href={HOSPITAL_INFO.socialLinks.google}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xs font-bold text-teal-400 hover:text-white hover:bg-teal-600 hover:border-teal-600 transition-all shadow-sm flex items-center space-x-1"
                  title="Google Maps Profile & 4.9★ Reviews"
                >
                  <GoogleIcon className="w-3 h-3" />
                  <span>4.9★</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Hospital Services & Treatments */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center">
              <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
              Services & Treatments
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#treatments" className="hover:text-teal-400 transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-slate-600" />
                  Single-Sitting Rotary RCT
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-teal-400 transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-slate-600" />
                  Permanent Dental Implants
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-teal-400 transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-slate-600" />
                  Invisible Clear Aligners & Braces
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-teal-400 transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-slate-600" />
                  CAD/CAM Zirconia Crowns (15 Yr Warranty)
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-teal-400 transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-slate-600" />
                  Laser Teeth Whitening & Cleaning
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-teal-400 transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-slate-600" />
                  Pediatric (Kids) Dentistry
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-teal-400 transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-slate-600" />
                  Wisdom Tooth Oral Surgery
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center">
              <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
              Quick Hospital Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-teal-400 transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-slate-600" />
                  About Hope Dental Hospital
                </a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-teal-400 transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-slate-600" />
                  Meet Our Specialist Doctors
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-teal-400 transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-slate-600" />
                  Customer Reviews & YouTube Stories
                </a>
              </li>
              <li>
                <a href="#blogs" className="hover:text-teal-400 transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-slate-600" />
                  Oral Health Educational Blogs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-400 transition-colors flex items-center">
                  <ChevronRight className="w-3 h-3 mr-1 text-slate-600" />
                  Location, Timings & Directions
                </a>
              </li>
              <li className="pt-2">
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow flex items-center space-x-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Online Appointment</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center">
              <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
              Hospital Contact
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Sadrauna, Near Main Market, Mohan Road, Lucknow, UP 226009</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${HOSPITAL_INFO.phone}`} className="hover:text-white transition-colors font-bold text-white">
                  {HOSPITAL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${HOSPITAL_INFO.email}`} className="hover:text-white transition-colors">
                  {HOSPITAL_INFO.email}
                </a>
              </div>
              <div className="flex items-start space-x-2.5 pt-1">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="text-slate-300 font-medium">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-slate-400">Sunday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Hope Dental Hospital & Wellness Centre, Sadrauna, Lucknow. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span>ISO 9001:2015 Certified Dental Facility</span>
            <span>•</span>
            <span className="flex items-center text-teal-500">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" />
              100% Sterile Protocol
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
