import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle2, 
  Calendar, 
  Building2,
  Globe
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ContactPage: React.FC = () => {
  const { hospitalInfo, clinicBranches, setIsBookingOpen, setSelectedBranchForBooking } = useApp();

  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formBranch, setFormBranch] = useState(clinicBranches[0]?.id || 'lucknow-flagship');
  const [formQuery, setFormQuery] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setFormName('');
      setFormPhone('');
      setFormEmail('');
      setFormQuery('');
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <div className="space-y-16 sm:space-y-20 animate-fadeIn py-6 sm:py-10">
      
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#06131f] via-[#081726] to-[#0b1f3a] text-white rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#f5900d]/20 text-[#f5900d] border border-[#f5900d]/40 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#f5900d]" />
              <span>CENTRAL HELPLINE & HOSPITAL CAMPUS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Contact Hope Dental Hospital
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Reach our patient care coordination team, schedule priority OPD appointments, or access urgent dental care at our standalone hospital campus in Sadrauna, Lucknow (Uttar Pradesh).
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT CHANNELS CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/30 text-[#f5900d] flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Appointments & Inquiries
            </h3>
            <div className="text-sm font-bold text-[#f5900d]">
              <a href={`tel:${hospitalInfo.phone.replace(/\s+/g, '')}`} className="hover:underline">
                {hospitalInfo.phone}
              </a>
            </div>
            <p className="text-xs text-slate-500">
              Monday – Sunday: 10:00 AM – 8:00 PM<br />
              All 7 Days Open
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-red-200 dark:border-red-950/60 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-950 text-red-600 flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-1.5">
              <span>Urgent Dental Helpline</span>
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            </h3>
            <div className="text-sm font-bold text-red-600">
              <a href={`tel:${hospitalInfo.emergencyPhone.replace(/\s+/g, '')}`} className="hover:underline">
                {hospitalInfo.emergencyPhone}
              </a>
            </div>
            <p className="text-xs text-slate-500">
              Sadrauna Hospital Campus: Laser suites, implant surgery & acute dental pain relief.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/30 text-[#f5900d] flex items-center justify-center">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              International Patient Desk
            </h3>
            <div className="text-sm font-bold text-[#f5900d]">
              <a href={`tel:${hospitalInfo.internationalPhone.replace(/\s+/g, '')}`} className="hover:underline">
                {hospitalInfo.internationalPhone}
              </a>
            </div>
            <p className="text-xs text-slate-500">
              Email: {hospitalInfo.intlEmail}<br />
              Concierge, Visa support & Airport pickups
            </p>
          </div>

        </div>
      </section>

      {/* 3. INQUIRY FORM & FLAGSHIP VENUE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Form (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#f5900d]">
                GET IN TOUCH
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                Send a Message or Request Call-Back
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Our care coordinators respond within 30 minutes during OPD hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-2 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Message Dispatched Successfully!
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Thank you, {formName}. Our clinical desk will contact your WhatsApp/Phone shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f5900d]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 79052..."
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f5900d]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="patient@email.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f5900d]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Preferred Clinical Department / Wing
                    </label>
                    <select
                      value={formBranch}
                      onChange={(e) => setFormBranch(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f5900d]"
                    >
                      {clinicBranches.map(b => (
                        <option key={b.id} value={b.id}>{b.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Describe Your Concern / Treatment Needed
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Inquiring for full-arch dental implants or smile makeover..."
                    value={formQuery}
                    onChange={(e) => setFormQuery(e.target.value)}
                    className="w-full p-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f5900d]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-[#f5900d] hover:bg-[#e08208] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry to Care Team</span>
                </button>
              </form>
            )}
          </div>

          {/* Flagship Center Venue Info (5 cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#f5900d] block">
              STANDALONE HOSPITAL CAMPUS (LUCKNOW)
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Hope Dental Hospital & Wellness Centre
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              No. 1779 Near Bramha Dev Mandir, Sadrauna Road, Para Rd, Munnu Khera, Lucknow, Uttar Pradesh – 226011
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#f5900d]" />
                <span>Complimentary Patient Parking & Valet</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#f5900d]" />
                <span>Wheelchair & Stretcher Accessible Entrance</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#f5900d]" />
                <span>Centre for Implantology, Biolase Laser Suite & Digital OPG</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => {
                  setSelectedBranchForBooking('lucknow-flagship');
                  setIsBookingOpen(true);
                }}
                className="w-full py-3.5 rounded-2xl bg-[#f5900d] hover:bg-[#e08208] text-white font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment at Sadrauna Lucknow Campus</span>
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
