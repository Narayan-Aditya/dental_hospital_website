import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  MessageSquare, 
  Navigation, 
  CheckCircle2, 
  Calendar,
  ShieldCheck,
  Building
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HOSPITAL_INFO } from '../data/mockData';

export const ContactPage: React.FC = () => {
  const { language, setIsBookingOpen } = useApp();

  // Direct Inquiry Form State
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formQuery, setFormQuery] = useState('');
  const [formType, setFormType] = useState('General Consultation');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setFormName('');
      setFormPhone('');
      setFormQuery('');
    }, 2500);
  };

  return (
    <div className="space-y-16 sm:space-y-20 animate-fadeIn py-6 sm:py-10">
      {/* 1. CONTACT PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-slate-900 via-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-2xl space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-teal-400" />
            <span>Sadrauna, Mohan Road, Lucknow</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            {language === 'hi'
              ? 'अस्पताल का पता, समय एवं सीधा संपर्क'
              : 'Hospital Location, OPD Timings & Contact'
            }
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {language === 'hi'
              ? 'सदरौना मुख्य बाजार के निकट, मोहन रोड लखनऊ में स्थित। आसान पार्किंग, व्हीलचेयर एक्सेस, और त्वरित परामर्श सेवा उपलब्ध है।'
              : 'Conveniently accessible in Sadrauna, Lucknow with ample parking, wheelchair accessibility, and direct doctor consultations.'
            }
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & DIRECT INQUIRY FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Cards (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Address & Landmark */}
            <div className="bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-5 shadow-xs">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                    Hope Dental Hospital & Wellness Centre
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    {language === 'hi' ? HOSPITAL_INFO.addressHi : HOSPITAL_INFO.address}
                  </p>
                  <p className="text-xs text-teal-700 dark:text-teal-400 font-semibold mt-2">
                    Landmark: Near Sadrauna Main Market & Mohan Road Crossing, Lucknow
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={HOSPITAL_INFO.socialLinks.google}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center space-x-2"
                >
                  <Navigation className="w-4 h-4 text-teal-400" />
                  <span>Get Directions (Google Maps)</span>
                </a>

                <a
                  href={`https://wa.me/919450000000?text=Hello%20Hope%20Dental%20Hospital,%20I%20need%20assistance%20with%20clinic%20location.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Help</span>
                </a>
              </div>
            </div>

            {/* Helpline & Timings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2 shadow-xs">
                <div className="flex items-center space-x-2 text-teal-700 dark:text-teal-400 font-bold text-xs uppercase tracking-wider">
                  <Phone className="w-4 h-4" />
                  <span>Emergency Helpline</span>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  <a href={`tel:${HOSPITAL_INFO.phone}`} className="hover:text-teal-600 dark:hover:text-teal-400 block">
                    {HOSPITAL_INFO.phone}
                  </a>
                  <a href={`tel:${HOSPITAL_INFO.altPhone}`} className="hover:text-teal-600 dark:hover:text-teal-400 block text-xs text-slate-500 font-medium mt-0.5">
                    {HOSPITAL_INFO.altPhone}
                  </a>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2 shadow-xs">
                <div className="flex items-center space-x-2 text-teal-700 dark:text-teal-400 font-bold text-xs uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>OPD Consultation Hours</span>
                </div>
                <div className="text-xs text-slate-800 dark:text-slate-200 space-y-0.5">
                  <p className="font-bold">Mon – Sat: 9:00 AM – 8:00 PM</p>
                  <p className="text-slate-600 dark:text-slate-400">Sunday: 10:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Direct Inquiry Form (6 Cols) */}
          <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl">
            <div className="space-y-1 mb-6">
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
      </section>
    </div>
  );
};
