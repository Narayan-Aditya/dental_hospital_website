import React, { useState } from 'react';
import { X, Calculator, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Currency } from '../../types';

export const CostCalculatorModal: React.FC = () => {
  const { 
    isCostCalculatorOpen, 
    setIsCostCalculatorOpen, 
    costItems, 
    currency, 
    setCurrency, 
    convertPrice, 
    currencySymbol,
    setIsBookingOpen,
    setSelectedTreatmentIdForBooking
  } = useApp();

  const [selectedCostItemId, setSelectedCostItemId] = useState<string>(costItems[0]?.id || 'single-implant-nobel');
  const [quantity, setQuantity] = useState<number>(1);

  if (!isCostCalculatorOpen) return null;

  const currentItem = costItems.find(c => c.id === selectedCostItemId) || costItems[0];
  const unitPriceInr = currentItem.priceInr;
  const totalPriceInr = unitPriceInr * quantity;
  const priceInTargetCurr = convertPrice(totalPriceInr, currency);
  
  // US Comparison calculation in USD
  const usUnitUsd = currentItem.usAvgUsd;
  const totalUsUsd = usUnitUsd * quantity;
  const totalHdhUsd = currentItem.priceUsd * quantity;
  const savingsUsd = totalUsUsd - totalHdhUsd;
  const savingsPercent = Math.round((savingsUsd / totalUsUsd) * 100);

  const handleBookNow = () => {
    setIsCostCalculatorOpen(false);
    // map cost category to treatment id
    const mapCategoryToTreatment: Record<string, string> = {
      implants: 'dental-implants',
      fullmouth: 'dental-implants',
      cosmetic: 'cosmetic-veneers',
      ortho: 'orthodontics-invisalign',
      endodontics: 'microscopic-rct',
      surgery: 'maxillofacial-surgery'
    };
    setSelectedTreatmentIdForBooking(mapCategoryToTreatment[currentItem.category] || 'dental-implants');
    setIsBookingOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-2xl overflow-hidden my-auto transition-all flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0b1f3a] via-[#163864] to-[#0d9488] p-5 sm:p-6 text-white relative">
          <button
            onClick={() => setIsCostCalculatorOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#c5a059] mb-1">
            <Calculator className="w-4 h-4" />
            <span>Interactive Cost & Dental Tourism Estimator</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Transparent Treatment Pricing
          </h2>
          <p className="text-xs text-slate-200 mt-1">
            Compare international standard dental costs at Hope Dental Hospital vs USA, UK & Australia. Save 60% to 80%.
          </p>

          {/* Currency Switcher */}
          <div className="flex items-center space-x-2 mt-4 pt-3 border-t border-white/10">
            <span className="text-xs text-slate-300 font-medium">Select Currency:</span>
            {(['INR', 'USD', 'GBP', 'EUR', 'AED'] as Currency[]).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCurrency(c)}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  currency === c 
                    ? 'bg-[#c5a059] text-slate-950 shadow-md' 
                    : 'bg-white/15 text-white hover:bg-white/25'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {/* Procedure Picker */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Select Procedure & Brand Specification
            </label>
            <div className="grid grid-cols-1 gap-2">
              {costItems.map(item => (
                <div
                  key={item.id}
                  onClick={() => {
                    setSelectedCostItemId(item.id);
                    setQuantity(1);
                  }}
                  className={`p-3 rounded-2xl border text-left cursor-pointer transition-all flex items-center justify-between ${
                    selectedCostItemId === item.id
                      ? 'border-teal-600 bg-teal-50/70 dark:bg-teal-950/40 ring-2 ring-teal-600'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="min-w-0 pr-2">
                    <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                      {item.treatmentName}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                      {item.brandOrMaterial} · {item.variant}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xs sm:text-sm font-extrabold text-teal-700 dark:text-teal-300">
                      {currencySymbol()}{convertPrice(item.priceInr).toLocaleString()}
                    </div>
                    <div className="text-[10px] text-slate-400 line-through">
                      US ~${item.usAvgUsd.toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quantity / Teeth count (if applicable) */}
          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block">
                Number of Units / Teeth / Arches:
              </span>
              <span className="text-[11px] text-slate-500">
                Adjust quantity for multiple teeth or arches
              </span>
            </div>
            <div className="flex items-center space-x-2">
              {[1, 2, 4, 6, 8, 12].map(num => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setQuantity(num)}
                  className={`w-8 h-8 rounded-xl text-xs font-bold transition-all ${
                    quantity === num
                      ? 'bg-teal-600 text-white shadow-md'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-teal-500'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Calculation Summary Box */}
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-800 dark:to-teal-950/40 p-5 rounded-3xl border border-teal-200 dark:border-teal-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-teal-200/60 dark:border-teal-800/60">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 block">
                  HOPE DENTAL ESTIMATE ({quantity} {quantity > 1 ? 'Units' : 'Unit'})
                </span>
                <div className="text-3xl font-extrabold text-[#0b1f3a] dark:text-white mt-1">
                  {currencySymbol()}{priceInTargetCurr.toLocaleString()}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Includes preliminary specialist consultation & in-house lab design
                </div>
              </div>

              {/* International Savings Badge */}
              <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-emerald-300 dark:border-emerald-800 text-right shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block">
                  OVERSEAS SAVINGS
                </span>
                <div className="text-lg font-black text-emerald-600 dark:text-emerald-400">
                  Save ~${savingsUsd.toLocaleString()} ({savingsPercent}%)
                </div>
                <div className="text-[10px] text-slate-400">
                  vs US/UK Hospital average (${totalUsUsd.toLocaleString()})
                </div>
              </div>
            </div>

            {/* Treatment Highlights */}
            <div className="grid grid-cols-3 gap-2 pt-4 text-center">
              <div className="p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/60">
                <Clock className="w-4 h-4 mx-auto text-teal-600 mb-1" />
                <span className="text-[10px] text-slate-500 block">Duration</span>
                <span className="text-xs font-bold text-slate-900 dark:text-white">
                  {currentItem.durationDays} {currentItem.durationDays === 1 ? 'Day' : 'Days'}
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/60">
                <ShieldCheck className="w-4 h-4 mx-auto text-teal-600 mb-1" />
                <span className="text-[10px] text-slate-500 block">Warranty</span>
                <span className="text-xs font-bold text-slate-900 dark:text-white truncate block">
                  {currentItem.warranty.slice(0, 16)}...
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/60">
                <Award className="w-4 h-4 mx-auto text-teal-600 mb-1" />
                <span className="text-[10px] text-slate-500 block">Visits</span>
                <span className="text-xs font-bold text-slate-900 dark:text-white">
                  {currentItem.visitsCount} Sitting(s)
                </span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleBookNow}
              className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-xl shadow-teal-600/25 transition-all"
            >
              <span>Book Appointment for This Treatment</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setIsCostCalculatorOpen(false)}
              className="w-full sm:w-auto py-3.5 px-5 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
