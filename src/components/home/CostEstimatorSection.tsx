import React, { useState } from 'react';
import { 
  Calculator, 
  CheckCircle2, 
  CreditCard, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle,
  Percent
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const CostEstimatorSection: React.FC = () => {
  const { language, setIsBookingOpen, setSelectedTreatmentIdForBooking } = useApp();

  const [selectedProcedure, setSelectedProcedure] = useState<string>('implant');
  const [quantity, setQuantity] = useState<number>(1);
  const [materialTier, setMaterialTier] = useState<'standard' | 'premium' | 'luxury'>('premium');
  const [emiTenure, setEmiTenure] = useState<number>(6);

  // Pricing matrix
  const procedurePrices: Record<string, { name: string; base: number; treatmentId: string }> = {
    rct: { name: 'Rotary Single-Sitting RCT', base: 2499, treatmentId: 'rct-single-sitting' },
    crown: { name: 'CAD/CAM Zirconia Crown (15 Yr Warranty)', base: 3999, treatmentId: 'crowns-zirconia-bridges' },
    implant: { name: 'Fixed Dental Implant (Nobel/Straumann)', base: 18999, treatmentId: 'dental-implants' },
    aligners: { name: 'Invisible Clear Aligners (Full Arch)', base: 34999, treatmentId: 'clear-aligners-braces' },
    whitening: { name: 'Laser Teeth Whitening & Polishing', base: 2999, treatmentId: 'teeth-whitening-scaling' },
    scaling: { name: 'Ultrasonic Scaling & Tartar Removal', base: 1200, treatmentId: 'teeth-whitening-scaling' },
  };

  const tierMultiplier = {
    standard: 1.0,
    premium: 1.25,
    luxury: 1.55,
  };

  const currentProcedure = procedurePrices[selectedProcedure];
  const unitPrice = Math.round(currentProcedure.base * tierMultiplier[materialTier]);
  const estimatedTotal = unitPrice * quantity;
  const monthlyEmi = Math.round(estimatedTotal / emiTenure);

  const handleBookWithEstimation = () => {
    setSelectedTreatmentIdForBooking(currentProcedure.treatmentId);
    setIsBookingOpen(true);
  };

  return (
    <section id="estimator" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-100/80 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-teal-600" />
            <span>Transparent Pricing & No Hidden Charges</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            {language === 'hi' 
              ? 'दंत उपचार खर्च एवं ०% ईएमआई कैलकुलेटर' 
              : 'Treatment Cost Estimator & 0% EMI Calculator'
            }
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            {language === 'hi'
              ? 'बिना किसी संकोच के अपने उपचार का अनुमानित बजट जानें और आसान किस्तों पर भुगतान की सुविधा पाएं।'
              : 'Estimate your treatment cost with total transparency and plan your smile makeover with flexible 0% interest monthly installments.'
            }
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Controls (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
            {/* Step 1: Select Procedure */}
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                1. Select Dental Treatment
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {Object.entries(procedurePrices).map(([key, item]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedProcedure(key)}
                    className={`p-3 rounded-xl text-left border text-xs font-semibold transition-all ${
                      selectedProcedure === key
                        ? 'border-teal-600 bg-teal-50 text-teal-900 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50'
                    }`}
                  >
                    <div className="line-clamp-1">{item.name.split('(')[0]}</div>
                    <div className="text-[11px] text-teal-600 font-bold mt-1">
                      From ₹{item.base.toLocaleString('en-IN')}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Quantity */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  2. Number of Teeth / Sessions
                </label>
                <span className="text-sm font-extrabold text-teal-600 px-2 py-0.5 bg-teal-50 rounded-lg">
                  {quantity} {quantity === 1 ? 'Unit' : 'Units'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full accent-teal-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-semibold mt-1">
                <span>1 Unit</span>
                <span>2 Units</span>
                <span>4 Units</span>
                <span>6 Units</span>
                <span>8 Units (Full Arch)</span>
              </div>
            </div>

            {/* Step 3: Material Grade */}
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                3. Material & Technology Grade
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setMaterialTier('standard')}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    materialTier === 'standard'
                      ? 'border-teal-600 bg-teal-50 text-teal-900 font-bold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50 text-xs'
                  }`}
                >
                  <div className="text-xs font-bold">Standard</div>
                  <div className="text-[10px] text-slate-500">Certified Grade</div>
                </button>
                <button
                  onClick={() => setMaterialTier('premium')}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    materialTier === 'premium'
                      ? 'border-teal-600 bg-teal-50 text-teal-900 font-bold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50 text-xs'
                  }`}
                >
                  <div className="text-xs font-bold">German Premium</div>
                  <div className="text-[10px] text-teal-600 font-semibold">Recommended</div>
                </button>
                <button
                  onClick={() => setMaterialTier('luxury')}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    materialTier === 'luxury'
                      ? 'border-teal-600 bg-teal-50 text-teal-900 font-bold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50 text-xs'
                  }`}
                >
                  <div className="text-xs font-bold">Swiss Ultra VIP</div>
                  <div className="text-[10px] text-slate-500">Lifetime Warranty</div>
                </button>
              </div>
            </div>

            {/* Step 4: EMI Tenure */}
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>4. Choose 0% Interest EMI Tenure</span>
                <span className="text-[11px] text-emerald-700 bg-emerald-100 font-bold px-2 py-0.5 rounded-full flex items-center">
                  <Percent className="w-3 h-3 mr-0.5" /> 0% Processing Fee
                </span>
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[3, 6, 9, 12].map((tenure) => (
                  <button
                    key={tenure}
                    onClick={() => setEmiTenure(tenure)}
                    className={`py-2 rounded-xl text-center text-xs font-bold transition-all ${
                      emiTenure === tenure
                        ? 'bg-slate-900 text-white shadow'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {tenure} Months
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Summary & EMI Calculation Card (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                  Estimated Summary
                </span>
                <h3 className="font-display font-bold text-xl text-white mt-1">
                  {currentProcedure.name}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Includes digital X-ray diagnostics, sterilization, and 6-month free follow-ups.
                </p>
              </div>

              {/* Total Estimated Cost */}
              <div className="bg-white/10 rounded-2xl p-4 border border-white/10 space-y-2">
                <div className="flex justify-between text-xs text-teal-200">
                  <span>Unit Rate ({materialTier}):</span>
                  <span>₹{unitPrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-xs text-teal-200">
                  <span>Quantity:</span>
                  <span>{quantity}</span>
                </div>
                <div className="pt-2 border-t border-white/15 flex justify-between items-baseline">
                  <span className="text-xs font-bold text-white uppercase">Approx. Total:</span>
                  <span className="font-display font-extrabold text-2xl text-amber-300">
                    ₹{estimatedTotal.toLocaleString('en-IN')}*
                  </span>
                </div>
              </div>

              {/* EMI Highlight */}
              <div className="bg-teal-500/20 rounded-2xl p-4 border border-teal-400/30 text-center">
                <div className="text-xs text-teal-200 font-semibold">Easy Monthly Installment (0% Interest)</div>
                <div className="font-display font-black text-3xl text-white mt-1">
                  ₹{monthlyEmi.toLocaleString('en-IN')}
                  <span className="text-xs font-medium text-teal-200"> / month</span>
                </div>
                <p className="text-[11px] text-teal-300 mt-1">
                  Payable over {emiTenure} equal monthly installments with Bajaj Finserv / Credit Cards.
                </p>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-6">
              <button
                onClick={handleBookWithEstimation}
                className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>Book Free Consultation to Lock Offer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-center text-teal-200/80 mt-2">
                *Exact treatment plan confirmed after clinical examination by dental surgeon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
