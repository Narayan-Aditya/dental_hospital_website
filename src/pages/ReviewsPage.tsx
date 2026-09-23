import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle2, 
  Calendar, 
  ArrowRight, 
  ExternalLink,
  MessageSquare,
  Award
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HOSPITAL_INFO } from '../data/mockData';
import { GoogleIcon } from '../components/common/SocialIcons';

export const ReviewsPage: React.FC = () => {
  const { language, reviews, setIsBookingOpen } = useApp();
  const [filter, setFilter] = useState<'all' | 'Google' | 'JustDial'>('all');

  const filteredReviews = filter === 'all' 
    ? reviews 
    : reviews.filter(r => r.verifiedSource === filter);

  return (
    <div className="space-y-16 sm:space-y-20 animate-fadeIn py-6 sm:py-10">
      {/* 1. REVIEWS PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-slate-900 via-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-2xl space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
            <span>{language === 'hi' ? 'प्रमाणित मरीज समीक्षाएं' : 'Verified Patient Testimonials'}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            {language === 'hi'
              ? 'सदरौना एवं लखनऊ के मरीजों का अटूट विश्वास'
              : 'Real Smiles, Real Stories: 4.9★ Verified Reviews'
            }
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {language === 'hi'
              ? 'गूगल रिव्यूज एवं जस्टडायल पर 4.9★ प्रमाणित रेटिंग के साथ लखनऊ के 10,000+ से अधिक मरीजों ने दर्द-मुक्त दंत चिकित्सा का अनुभव किया है।'
              : 'Read authentic patient feedback across Google Reviews and JustDial from families who experienced painless, compassionate dental care at Sadrauna, Lucknow.'
            }
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={HOSPITAL_INFO.socialLinks.google}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-xs rounded-xl border border-slate-700 transition-all flex items-center space-x-2"
            >
              <GoogleIcon className="w-4 h-4" />
              <span>{language === 'hi' ? 'गूगल पर समीक्षा लिखें (4.9★)' : 'Review Us on Google (4.9★)'}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. RATING SUMMARY METRICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-2 shadow-xs">
            <div className="font-serif font-bold text-3xl sm:text-4xl text-amber-500">4.9 / 5.0</div>
            <div className="flex items-center justify-center space-x-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Google Verified Rating</div>
            <div className="text-[11px] text-slate-500">Based on 380+ Clinical Reviews</div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-2 shadow-xs">
            <div className="font-serif font-bold text-3xl sm:text-4xl text-orange-500">4.8 / 5.0</div>
            <div className="flex items-center justify-center space-x-1 text-orange-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <div className="text-xs font-bold text-slate-800 dark:text-slate-200">JustDial Verified Rating</div>
            <div className="text-[11px] text-slate-500">Based on 220+ Local Patient Votes</div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-2 shadow-xs">
            <div className="font-serif font-bold text-3xl sm:text-4xl text-teal-600 dark:text-teal-400">99.4%</div>
            <div className="flex items-center justify-center space-x-1 text-teal-600 dark:text-teal-400">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xs font-bold">Recommended</span>
            </div>
            <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Recommendation Rate</div>
            <div className="text-[11px] text-slate-500">Post-Procedure Patient Survey</div>
          </div>
        </div>
      </section>

      {/* 3. REVIEWS LISTING & FILTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
            {language === 'hi' ? 'समीक्षा स्रोत चुनें:' : 'Filter by Source:'}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                filter === 'all'
                  ? 'bg-teal-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              All ({reviews.length})
            </button>
            <button
              onClick={() => setFilter('Google')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                filter === 'Google'
                  ? 'bg-amber-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              Google 4.9★
            </button>
            <button
              onClick={() => setFilter('JustDial')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                filter === 'JustDial'
                  ? 'bg-orange-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              JustDial 4.8★
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((r) => (
            <div
              key={r.id}
              className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-amber-500">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                    {r.verifiedSource} Verified
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  "{r.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="font-serif font-bold text-slate-900 dark:text-white">{r.patientName}</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Treatment: <span className="text-teal-700 dark:text-teal-400 font-semibold">{r.treatmentReceived}</span> • {r.patientCity}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BOOKING BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-600 text-white rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif font-bold text-xl sm:text-3xl">
              {language === 'hi' ? 'आप भी पाएं दर्द-मुक्त मुस्कान' : 'Experience Pain-Free Dentistry Yourself'}
            </h3>
            <p className="text-xs sm:text-sm text-teal-100">
              {language === 'hi' ? 'सदरौना, मोहन रोड लखनऊ में आज ही अपॉइंटमेंट बुक करें।' : 'Reserve your 60-second priority slot at Hope Dental Hospital, Sadrauna.'}
            </p>
          </div>

          <button
            onClick={() => setIsBookingOpen(true)}
            className="px-6 py-3.5 bg-white text-teal-900 hover:bg-teal-50 font-bold text-xs sm:text-sm rounded-xl shadow-lg active:scale-95 transition-all whitespace-nowrap"
          >
            {language === 'hi' ? 'अपॉइंटमेंट बुक करें (60s)' : 'Book Appointment (60s)'}
          </button>
        </div>
      </section>
    </div>
  );
};
