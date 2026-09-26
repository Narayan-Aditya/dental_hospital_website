import React from 'react';
import { 
  Globe, 
  Plane, 
  Hotel, 
  ShieldCheck, 
  DollarSign, 
  Video
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const TourismPage: React.FC = () => {
  const { costItems, convertPrice, currencySymbol, setIsBookingOpen, setIsCostCalculatorOpen } = useApp();

  return (
    <div className="space-y-16 sm:space-y-20 animate-fadeIn py-6 sm:py-10">
      
      {/* 1. HEADER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#06131f] via-[#081726] to-[#0b1f3a] text-white rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#f5900d]/20 text-[#f5900d] border border-[#f5900d]/40 text-xs font-bold uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5 text-[#f5900d]" />
              <span>DENTAL TOURISM INDIA · LUCKNOW</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              World-Class Dental Tourism with 60–80% Savings
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Experience gold-standard dental healthcare in the historic city of Lucknow. Authentic Nobel Biocare & Straumann implant systems placed by specialist MDS periodontists and implantologists with global warranties.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="px-6 py-3.5 bg-[#f5900d] hover:bg-[#e08208] text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-xl transition-all flex items-center space-x-2"
              >
                <Video className="w-4 h-4 text-white" />
                <span>Book Virtual Video Consultation</span>
              </button>

              <button
                onClick={() => setIsCostCalculatorOpen(true)}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm rounded-2xl border border-white/20 transition-all flex items-center space-x-2"
              >
                <DollarSign className="w-4 h-4 text-[#f5900d]" />
                <span>Calculate Your Savings</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 4 CONCIERGE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#f5900d]">
            INTERNATIONAL & OUTSTATION PATIENT CARE
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0b1f3a] dark:text-white">
            End-to-End Seamless Concierge Service
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            From the moment your plane touches down at Chaudhary Charan Singh International Airport (LKO, Lucknow), our dedicated patient care team takes care of every detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/30 text-[#f5900d] flex items-center justify-center">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              1. Digital Pre-Trip Plan
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Send your OPG X-ray or dental photos. Senior surgeons review your case and deliver an itemized quotation, procedure timeline, and video consult before you book travel.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/30 text-[#f5900d] flex items-center justify-center">
              <Plane className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              2. Airport & Station Transfers
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Complimentary private pickup directly from Chaudhary Charan Singh International Airport (LKO, Lucknow) or Charbagh Railway Station to your partner hotel or our hospital campus.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/30 text-[#f5900d] flex items-center justify-center">
              <Hotel className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              3. 4-Star & 5-Star Stays
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Discounted corporate rates at premium partner hotels (Taj Mahal Hotel Lucknow, Hyatt Regency, Radisson Lucknow) within convenient driving distance from our Sadrauna campus.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/30 text-[#f5900d] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              4. Global Warranty
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Receive authentic serial-numbered implant passports from Nobel Biocare and Straumann, guaranteeing lifetime support at certified dental centers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* 3. COST COMPARISON TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#f5900d]">
            PRICE TRANSPARENCY
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0b1f3a] dark:text-white">
            Cost Comparison: Hope Dental Hospital vs USA, UK & Australia
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Compare exact dental fees. The dental materials used (Nobel Biocare, Straumann, Ivoclar Vivadent) are 100% identical.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#081726] text-white">
                <tr>
                  <th className="py-4 px-6 font-bold">Treatment Procedure</th>
                  <th className="py-4 px-6 font-bold text-[#f5900d]">Hope Dental Hospital (India)</th>
                  <th className="py-4 px-6 font-bold text-slate-300">USA Average</th>
                  <th className="py-4 px-6 font-bold text-slate-300">UK Average</th>
                  <th className="py-4 px-6 font-bold text-emerald-400">Your Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {costItems.map(c => {
                  const savingsUsd = c.usAvgUsd - c.priceUsd;
                  const pct = Math.round((savingsUsd / c.usAvgUsd) * 100);
                  return (
                    <tr key={c.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="font-bold text-slate-900 dark:text-white">{c.treatmentName}</div>
                        <div className="text-xs text-slate-400">{c.brandOrMaterial}</div>
                      </td>
                      <td className="py-4 px-6 font-extrabold text-[#f5900d]">
                        {currencySymbol()}{convertPrice(c.priceInr).toLocaleString()} (${c.priceUsd})
                      </td>
                      <td className="py-4 px-6 text-slate-500 line-through">
                        ${c.usAvgUsd.toLocaleString()}
                      </td>
                      <td className="py-4 px-6 text-slate-500 line-through">
                        £{c.ukAvgGbp.toLocaleString()}
                      </td>
                      <td className="py-4 px-6 font-black text-emerald-600 dark:text-emerald-400">
                        Save ${savingsUsd.toLocaleString()} ({pct}%)
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
};
