import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ExternalLink,
  Navigation,
  Sparkles,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { HOSPITAL_INFO } from '../../data/mockData';

export const ContactAndLocationSection: React.FC = () => {
  const { language } = useApp();

  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formQuery, setFormQuery] = useState('');
  const [formType, setFormType] = useState('General Consultation');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setFormName('');
      setFormPhone('');
      setFormQuery('');
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-100/80 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>Visit Hospital in Sadrauna, Lucknow</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            {language === 'hi' 
              ? 'अस्पताल का पता एवं संपर्क सूत्र' 
              : 'Location, Timings & Quick Inquiry'
            }
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            {language === 'hi'
              ? 'सदरौना, मोहन रोड लखनऊ में स्थित। आसान पार्किंग, व्हीलचेयर सुलभ और आपातकालीन सेवा उपलब्ध।'
              : 'Easily accessible on Mohan Road, Sadrauna, Lucknow with dedicated parking and rapid transit access.'
            }
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Contact & Location Cards (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Address Card */}
            <div className="bg-slate-50 dark:bg-slate-800/80 p-6 rounded-3xl border border-slate-200/90 dark:border-slate-700/80 space-y-4 shadow-sm">
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    Hope Dental Hospital & Wellness Centre
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    {language === 'hi' ? HOSPITAL_INFO.addressHi : HOSPITAL_INFO.address}
                  </p>
                  <p className="text-xs text-teal-700 dark:text-teal-400 font-semibold mt-1">
                    Landmark: Near Sadrauna Main Market & Mohan Road Crossing
                  </p>
                </div>
              </div>

              {/* Action Buttons for Map & Route */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <a
                  href={HOSPITAL_INFO.socialLinks.google}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center space-x-1.5"
                >
                  <Navigation className="w-3.5 h-3.5 text-teal-400" />
                  <span>Get Driving Directions (Google Maps)</span>
                </a>

                <a
                  href={`https://wa.me/919450000000?text=Hello%20Hope%20Dental%20Hospital,%20I%20need%20assistance%20with%20clinic%20location.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center space-x-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Helpline & Timings Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
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
                <div className="text-[11px] text-rose-600 dark:text-rose-400 font-bold pt-1">
                  Emergency: {HOSPITAL_INFO.emergencyPhone}
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="flex items-center space-x-2 text-teal-700 dark:text-teal-400 font-bold text-xs uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>OPD Timings</span>
                </div>
                <div className="text-xs text-slate-800 dark:text-slate-200 space-y-0.5">
                  <p className="font-bold">Mon – Sat: 9:00 AM – 8:00 PM</p>
                  <p className="text-slate-600 dark:text-slate-400">Sunday: 10:00 AM – 2:00 PM</p>
                </div>
                <div className="text-[11px] text-teal-700 dark:text-teal-400 font-semibold pt-1">
                  24/7 Dental Trauma Active
                </div>
              </div>
            </div>

            {/* Visual Location Preview Card */}
            <div className="bg-slate-900 dark:bg-slate-950 text-white p-6 rounded-3xl relative overflow-hidden shadow-lg border border-slate-800">
              <div className="space-y-2 relative z-10">
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-teal-500/30 text-teal-300 px-2.5 py-0.5 rounded-full border border-teal-400/30">
                  Sadrauna, Mohan Road, Lucknow
                </span>
                <h4 className="font-display font-bold text-lg">
                  Free Patient Parking & Wheelchair Friendly
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Located right on the main commercial road in Sadrauna with hassle-free ground floor access for senior citizens and pediatric patients.
                </p>
              </div>
            </div>
          </div>

          {/* Right Fast Inquiry Form (6 Cols) */}
          <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-800/80 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl">
            <div className="space-y-1 mb-6">
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                Direct Dental Inquiry
              </span>
              <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                Ask a Question to Our Specialists
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Have a query about RCT cost, braces, or dental pain? Our team responds within 15 minutes during OPD hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-teal-100 dark:bg-teal-950/60 border border-teal-300 dark:border-teal-700 text-teal-900 dark:text-teal-200 p-6 rounded-2xl text-center space-y-2 animate-fadeIn">
                <CheckCircle2 className="w-10 h-10 text-teal-600 dark:text-teal-400 mx-auto" />
                <h4 className="font-bold text-base">Inquiry Submitted Successfully!</h4>
                <p className="text-xs text-teal-800 dark:text-teal-300">
                  Our front-desk reception at Sadrauna, Lucknow will contact you shortly at <strong>{formPhone}</strong>.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 text-xs font-bold text-teal-700 dark:text-teal-400 underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder="e.g. 98390XXXXX"
                      className="w-full text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formType}
                      onChange={(e) => setFormType(e.target.value)}
                      className="w-full text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
                    >
                      <option value="General Consultation">General Consultation</option>
                      <option value="Root Canal Treatment">Root Canal Treatment (RCT)</option>
                      <option value="Dental Implants">Dental Implants</option>
                      <option value="Invisible Aligners">Invisible Aligners / Braces</option>
                      <option value="Wisdom Tooth Pain">Wisdom Tooth Pain</option>
                      <option value="Kids Dentistry">Kids Dentistry</option>
                      <option value="Billing / Invoice Query">Billing / Invoice Query</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Describe your dental problem or question
                  </label>
                  <textarea
                    rows={3}
                    value={formQuery}
                    onChange={(e) => setFormQuery(e.target.value)}
                    placeholder="Tell us about the pain duration, sensitivity, or procedure you're looking for..."
                    className="w-full text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-teal-600/25 transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Fast Inquiry to Hospital Desk</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
