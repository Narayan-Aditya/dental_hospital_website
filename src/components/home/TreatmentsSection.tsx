import React, { useState } from 'react';
import { 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  Info, 
  ChevronRight,
  Smile,
  Zap,
  Award,
  Heart,
  Activity,
  Sliders
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Treatment } from '../../types';

export const TreatmentsSection: React.FC = () => {
  const { 
    language, 
    treatments, 
    setIsBookingOpen, 
    setSelectedTreatmentIdForBooking 
  } = useApp();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const categories = [
    { id: 'all', label: 'All Treatments', labelHi: 'सभी उपचार' },
    { id: 'rct', label: 'Root Canal (RCT)', labelHi: 'रूट कैनाल' },
    { id: 'implants', label: 'Dental Implants', labelHi: 'डेंटल इम्प्लांट्स' },
    { id: 'ortho', label: 'Aligners & Braces', labelHi: 'एलाइनर्स व ब्रेसेस' },
    { id: 'cosmetic', label: 'Smile Makeover', labelHi: 'कॉस्मेटिक स्माइल' },
    { id: 'general', label: 'Teeth Whitening', labelHi: 'व्हाइटनिंग व सफाई' },
    { id: 'pediatric', label: 'Kids Dentistry', labelHi: 'बच्चों के दांत' },
    { id: 'surgery', label: 'Wisdom Tooth', labelHi: 'अक्ल दाढ़' },
  ];

  const filteredTreatments = activeCategory === 'all' 
    ? treatments 
    : treatments.filter(t => t.category === activeCategory);

  const handleBookTreatment = (treatmentId: string) => {
    setSelectedTreatmentIdForBooking(treatmentId);
    setIsBookingOpen(true);
    if (selectedTreatment) {
      setSelectedTreatment(null);
    }
  };

  return (
    <section id="treatments" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-100/80 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Comprehensive Dental Specialties</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            {language === 'hi' 
              ? 'विश्वस्तरीय एवं दर्द रहित दंत उपचार' 
              : 'Painless, Advanced Dental Treatments'
            }
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            {language === 'hi'
              ? 'सदरौना, लखनऊ में अनुभवी विशेषज्ञ डॉक्टरों एवं आधुनिक जर्मन व स्विस उपकरणों द्वारा संपूर्ण दंत चिकित्सा।'
              : 'Delivering precision diagnostics, zero-pain computerized techniques, and long-lasting smile restoration in Sadrauna, Lucknow.'
            }
          </p>
        </div>

        {/* Interactive Before & After Smile Transformation Slider */}
        <div className="mb-16 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl shadow-slate-900/5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:max-w-md space-y-4">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
                <Smile className="w-3.5 h-3.5 text-amber-600" />
                <span>Interactive Smile Transformation</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-900">
                Real Patient Smile Makeover Results
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Drag the slider handle to compare before vs after dental restoration at Hope Dental Hospital. From fluorosis discoloration and chipped teeth to a radiant, natural Hollywood smile.
              </p>
              <div className="flex items-center space-x-4 pt-2 text-xs font-semibold text-slate-700">
                <span className="flex items-center text-teal-700">
                  <CheckCircle2 className="w-4 h-4 mr-1 text-teal-600" />
                  E-Max Porcelain Veneers
                </span>
                <span className="flex items-center text-teal-700">
                  <CheckCircle2 className="w-4 h-4 mr-1 text-teal-600" />
                  Laser Bleaching
                </span>
              </div>
            </div>

            {/* Visual Comparison Widget */}
            <div className="relative w-full max-w-lg h-72 sm:h-80 rounded-2xl overflow-hidden select-none shadow-md border-2 border-teal-100">
              {/* After Image (Full background) */}
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
                alt="After Dental Smile Restoration"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-3 right-3 bg-teal-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                AFTER Treatment ✨
              </div>

              {/* Before Image (Clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"
                  alt="Before Dental Treatment"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  BEFORE Treatment
                </div>
              </div>

              {/* Slider Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-ew-resize flex items-center justify-center"
                style={{ left: `calc(${sliderPosition}% - 2px)` }}
              >
                <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center shadow-lg border-2 border-white text-[10px] font-bold">
                  ↔
                </div>
              </div>

              {/* Range Input Overlay for Dragging */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-20"
                aria-label="Before and after comparison slider"
              />
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 no-scrollbar mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {language === 'hi' ? cat.labelHi : cat.label}
            </button>
          ))}
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div className="p-5 sm:p-6 space-y-4">
                {/* Badges & Category */}
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                    treatment.painLevel === 'Zero / Painless'
                      ? 'bg-emerald-100 text-emerald-800'
                      : treatment.painLevel === 'Mild'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {treatment.painLevel}
                  </span>
                  {treatment.popular && (
                    <span className="text-[10px] font-extrabold uppercase tracking-wider bg-rose-100 text-rose-700 px-2 py-0.5 rounded-md">
                      Popular
                    </span>
                  )}
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-teal-600 transition-colors">
                    {language === 'hi' ? treatment.titleHi : treatment.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs text-slate-500 mt-1">
                    <Clock className="w-3.5 h-3.5 text-teal-600" />
                    <span>{treatment.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {language === 'hi' ? treatment.shortDescHi : treatment.shortDesc}
                </p>

                {/* Key Benefits snippet */}
                <div className="space-y-1.5 pt-1">
                  {treatment.benefits.slice(0, 2).map((b, idx) => (
                    <div key={idx} className="flex items-start text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0 mr-1.5 mt-0.5" />
                      <span className="line-clamp-1">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Price & Action */}
              <div className="p-5 sm:p-6 pt-0 mt-auto border-t border-slate-100 bg-slate-50/50">
                <div className="flex items-baseline justify-between py-3">
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium">Starting from</span>
                    <div className="font-display font-extrabold text-lg text-slate-900">
                      ₹{treatment.startingPrice.toLocaleString('en-IN')}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedTreatment(treatment)}
                    className="text-xs font-bold text-teal-600 hover:text-teal-800 flex items-center"
                  >
                    <span>View Steps</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </button>
                </div>

                <button
                  onClick={() => handleBookTreatment(treatment.id)}
                  className="w-full py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center space-x-1"
                >
                  <span>Book This Treatment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Treatment Step Modal */}
        {selectedTreatment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200">
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
                    Treatment Clinical Overview
                  </span>
                  <h3 className="font-display font-bold text-2xl text-slate-900 mt-0.5">
                    {language === 'hi' ? selectedTreatment.titleHi : selectedTreatment.title}
                  </h3>
                  <div className="flex items-center space-x-3 text-xs text-slate-500 mt-1">
                    <span>⏱ {selectedTreatment.duration}</span>
                    <span>•</span>
                    <span className="text-teal-700 font-semibold">Pain Index: {selectedTreatment.painLevel}</span>
                    <span>•</span>
                    <span className="font-bold text-slate-900">From ₹{selectedTreatment.startingPrice.toLocaleString('en-IN')}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedTreatment(null)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Full Description */}
              <div className="py-4 text-sm text-slate-700 leading-relaxed">
                {selectedTreatment.fullDesc}
              </div>

              {/* Step by Step Breakdown */}
              <div className="space-y-3 py-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Procedure Breakdown & Timeline
                </h4>
                <div className="space-y-3">
                  {selectedTreatment.procedureSteps.map((step) => (
                    <div key={step.step} className="flex items-start space-x-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <span className="w-6 h-6 rounded-full bg-teal-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {step.step}
                      </span>
                      <div>
                        <h5 className="text-xs font-bold text-slate-900">{step.title}</h5>
                        <p className="text-xs text-slate-600 mt-0.5">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Post Treatment Tips */}
              {selectedTreatment.afterCareTips && (
                <div className="mt-4 bg-teal-50/70 p-4 rounded-2xl border border-teal-100">
                  <h4 className="text-xs font-bold text-teal-900 uppercase tracking-wider mb-2">
                    Post-Treatment Care Guidelines
                  </h4>
                  <ul className="space-y-1.5 text-xs text-teal-800">
                    {selectedTreatment.afterCareTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mr-1.5 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Modal Actions */}
              <div className="flex items-center justify-end space-x-3 pt-6 border-t border-slate-100 mt-4">
                <button
                  onClick={() => setSelectedTreatment(null)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50"
                >
                  Close
                </button>
                <button
                  onClick={() => handleBookTreatment(selectedTreatment.id)}
                  className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl shadow flex items-center space-x-1.5"
                >
                  <span>Book Appointment for this Treatment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
