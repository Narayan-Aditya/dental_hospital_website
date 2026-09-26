import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Calendar, 
  Search,
  ExternalLink
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ClinicsPage: React.FC = () => {
  const { clinicBranches, setSelectedBranchForBooking, setIsBookingOpen } = useApp();
  const [search, setSearch] = useState<string>('');

  const filtered = clinicBranches.filter(b => {
    const matchesSearch = 
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.address.toLowerCase().includes(search.toLowerCase()) ||
      b.landmark.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;
  });

  const handleBook = (branchId: string) => {
    setSelectedBranchForBooking(branchId);
    setIsBookingOpen(true);
  };

  return (
    <div className="space-y-16 sm:space-y-20 animate-fadeIn py-6 sm:py-10">
      
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#06131f] via-[#081726] to-[#0b1f3a] text-white rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#f5900d]/20 text-[#f5900d] border border-[#f5900d]/40 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#f5900d]" />
              <span>HOPE DENTAL HOSPITAL CAMPUS · SADRAUNA, LUCKNOW</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Hospital Campus & Specialized Clinical Suites
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Hope Dental Hospital & Wellness Centre operates as an independent, state-of-the-art dental hospital in Sadrauna, Para Road, Lucknow with <strong>no external franchises</strong>. Every treatment is personally planned and executed by senior specialists using US-FDA approved Biolase lasers, 3D guided implant suites, and Carl Zeiss operating microscopes.
            </p>

            {/* Official Public Sites Quick Badges */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                href="https://share.google/M13VNXGp52dAKKUWl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white border border-white/20 transition-all"
              >
                <span>Google 5.0 ★ (151+ Reviews)</span>
                <ExternalLink className="w-3 h-3 text-[#4285F4]" />
              </a>
              <a
                href="https://jsdl.in/DT-39XTVYSNSB8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white border border-white/20 transition-all"
              >
                <span>Justdial 5.0 ★ (148+ Ratings)</span>
                <ExternalLink className="w-3 h-3 text-[#ff6a00]" />
              </a>
              <a
                href="https://youtube.com/@drhimangidubey_hopedental?si=dICNBMYUw_9KpXfp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white border border-white/20 transition-all"
              >
                <span>YouTube Channel</span>
                <ExternalLink className="w-3 h-3 text-[#FF0000]" />
              </a>
              <a
                href="https://www.facebook.com/p/Hope-Dental-Hospital-and-Wellness-Center-100083540701821/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white border border-white/20 transition-all"
              >
                <span>Facebook Page</span>
                <ExternalLink className="w-3 h-3 text-[#1877F2]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEARCH & FACILITY HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by facility / wing (e.g. Implant, Laser, TMJ, RCT)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f5900d]"
            />
          </div>

          <div className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Single Hospital Campus in Sadrauna, Lucknow · 6 Clinical Suites</span>
          </div>
        </div>

        {/* Clinics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(b => (
            <div 
              key={b.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#f5900d]">
                    SUITE {b.branchNumber}
                  </span>
                  {b.badge && (
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-[#f5900d]/10 text-[#f5900d] border border-[#f5900d]/20">
                      {b.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {b.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#f5900d] mt-0.5">
                    Est. {b.establishedYear} · {b.doctorsCount} MDS Specialists
                  </div>
                </div>

                <div className="text-xs text-slate-600 dark:text-slate-400 space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-[#f5900d] shrink-0 mt-0.5" />
                    <span>{b.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-500">
                    <Clock className="w-4 h-4 text-[#f5900d] shrink-0" />
                    <span>Mon - Sat: {b.timings}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 pl-6">
                    Sunday: {b.sundayTimings || '10:00 AM – 7:00 PM'}
                  </div>
                </div>

                {/* Specialties */}
                <div className="space-y-1 pt-1 text-xs text-slate-600 dark:text-slate-400">
                  <span className="font-bold text-[11px] text-slate-900 dark:text-white block">Key Specialties:</span>
                  <div className="flex flex-wrap gap-1">
                    {b.specialties.map((s, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Facilities */}
                <div className="space-y-1 text-xs text-slate-500">
                  <span className="font-bold text-[11px] text-slate-900 dark:text-white block">Equipped With:</span>
                  <div className="flex flex-wrap gap-1">
                    {b.facilities.map((f, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/30 text-[#f5900d] border border-[#f5900d]/20">
                        ✓ {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-slate-100 dark:border-slate-800 mt-4 flex items-center justify-between gap-2">
                <a
                  href={`tel:${b.phone.replace(/\s+/g, '')}`}
                  className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-[#0b1f3a] dark:text-white font-bold text-xs flex items-center space-x-1 hover:text-[#f5900d]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#f5900d]" />
                  <span>{b.phone}</span>
                </a>

                <button
                  onClick={() => handleBook(b.id)}
                  className="px-4 py-2 rounded-xl bg-[#f5900d] hover:bg-[#e08208] text-white font-bold text-xs transition-colors flex items-center space-x-1 shadow-md"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Visit</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
