import React, { useState } from 'react';
import { 
  Star, 
  Calendar 
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ReviewsPage: React.FC = () => {
  const { reviews, setIsBookingOpen } = useApp();
  const [filter, setFilter] = useState<'all' | 'Google' | 'Justdial' | 'Practo'>('all');

  const filtered = filter === 'all' ? reviews : reviews.filter(r => r.verifiedSource === filter);

  return (
    <div className="space-y-16 sm:space-y-20 animate-fadeIn py-6 sm:py-10">
      
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#06131f] via-[#081726] to-[#0b1f3a] text-white rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#f5900d]/20 text-[#f5900d] border border-[#f5900d]/40 text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-current text-[#f5900d]" />
              <span>OVER 300+ VERIFIED PATIENT REVIEWS · PERFECT 5.0★</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Real Patient Stories & Experiences
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Unedited reviews from patients treated at Hope Dental Hospital & Wellness Centre in Sadrauna, Lucknow—rated a perfect 5.0 ★ on Google (151+ reviews) and Justdial (148+ ratings) for advanced dental implants, laser periodontal therapies, and painless root canal treatments.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="px-6 py-3.5 bg-[#f5900d] hover:bg-[#e08208] text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-xl transition-all flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Your Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RATING SUMMARY STATS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
            <span className="text-3xl sm:text-4xl font-black text-amber-500 block">5.0 ★</span>
            <span className="text-xs font-bold text-slate-900 dark:text-white block mt-1">Google Reviews</span>
            <span className="text-[11px] text-slate-400 block mt-0.5">151+ Verified Reviews</span>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
            <span className="text-3xl sm:text-4xl font-black text-[#f5900d] block">5.0 ★</span>
            <span className="text-xs font-bold text-slate-900 dark:text-white block mt-1">Justdial Rating</span>
            <span className="text-[11px] text-slate-400 block mt-0.5">148+ Verified Ratings</span>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
            <span className="text-3xl sm:text-4xl font-black text-emerald-600 block">100%</span>
            <span className="text-xs font-bold text-slate-900 dark:text-white block mt-1">Recommendation Rate</span>
            <span className="text-[11px] text-slate-400 block mt-0.5">Genuine Patient Testimonials</span>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
            <span className="text-3xl sm:text-4xl font-black text-[#0b1f3a] dark:text-white block">Lucknow</span>
            <span className="text-xs font-bold text-slate-900 dark:text-white block mt-1">Single Flagship Campus</span>
            <span className="text-[11px] text-slate-400 block mt-0.5">Sadrauna, Para Rd (No Franchises)</span>
          </div>
        </div>
      </section>

      {/* 3. REVIEWS GRID WITH SOURCE FILTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center space-x-2 overflow-x-auto pb-2">
          {['all', 'Google', 'Justdial', 'Practo'].map(s => (
            <button
              key={s}
              onClick={() => setFilter(s as any)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
                filter === s
                  ? 'bg-[#f5900d] text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[#f5900d]'
              }`}
            >
              {s === 'all' ? 'All Verified Reviews' : s}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(r => (
            <div 
              key={r.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-0.5 text-amber-400">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {r.verifiedSource}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  "{r.text}"
                </p>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <div className="font-bold text-slate-900 dark:text-white">
                    {r.patientName}
                  </div>
                  <div className="text-[11px] text-[#f5900d] font-semibold">
                    {r.patientCity}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">
                    Treatment: {r.treatmentReceived}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
