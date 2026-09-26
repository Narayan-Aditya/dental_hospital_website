import React, { useState } from 'react';
import { 
  Layers, 
  Check, 
  ArrowRight, 
  Calendar, 
  Sparkles, 
  Clock, 
  Search
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ServicesPage: React.FC = () => {
  const { 
    treatments, 
    convertPrice,
    currencySymbol,
    setIsBookingOpen, 
    setSelectedTreatmentIdForBooking,
    setIsCostCalculatorOpen
  } = useApp();

  const [selectedToothZone, setSelectedToothZone] = useState<'incisor' | 'canine' | 'premolar' | 'molar' | 'wisdom'>('molar');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toothAnatomyData = {
    incisor: {
      title: 'Central & Lateral Incisors (Front Teeth)',
      shortName: 'Incisors',
      functions: 'Aesthetic smile framing, shearing food, phonetic speech pronunciation.',
      conditions: 'Chipping, fluorosis staining, midline gaps (diastema), discoloration.',
      recommended: 'E.max Porcelain Veneers & Digital Smile Design',
      treatmentId: 'cosmetic-veneers',
      startingPriceInr: 12000,
    },
    canine: {
      title: 'Canines (Eye Teeth / Cuspids)',
      shortName: 'Canines',
      functions: 'Tearing food, canine-guided dynamic occlusion and corner mouth support.',
      conditions: 'Ectopic high eruption, crossbite, gum recession, tip wear.',
      recommended: 'Invisalign Diamond Clear Aligners & Orthodontics',
      treatmentId: 'orthodontics-invisalign',
      startingPriceInr: 65000,
    },
    premolar: {
      title: 'Bicuspids / Premolars (Mid-Arch)',
      shortName: 'Premolars',
      functions: 'Crushing food transition, vertical facial height support.',
      conditions: 'Interproximal cavities, fracture along old fillings, vertical root cracks.',
      recommended: 'Carl Zeiss Microscopic Root Canal & Monolithic Zirconia Crown',
      treatmentId: 'microscopic-rct',
      startingPriceInr: 4500,
    },
    molar: {
      title: 'First & Second Molars (Chewing Powerhouse)',
      shortName: 'Molars',
      functions: 'Primary chewing force (up to 200 lbs), digestive breakdown of food.',
      conditions: 'Deep occlusal decay, pulpitis, missing teeth, bone resorption.',
      recommended: 'Nobel Biocare / Straumann Dental Implants',
      treatmentId: 'dental-implants',
      startingPriceInr: 25000,
    },
    wisdom: {
      title: 'Third Molars (Wisdom Teeth)',
      shortName: 'Wisdom Teeth',
      functions: 'Vestigial third molars, often lacking arch space for full eruption.',
      conditions: 'Horizontal/angular impaction, pericoronitis, cysts, root crowding.',
      recommended: 'Painless Ultrasonic Piezosurgery Surgical Extraction',
      treatmentId: 'maxillofacial-surgery',
      startingPriceInr: 5000,
    },
  };

  const currentZone = toothAnatomyData[selectedToothZone];

  const filteredTreatments = treatments.filter(t => {
    const matchesCategory = selectedCategory === 'all' || t.category === selectedCategory;
    const matchesSearch = 
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleBook = (treatmentId: string) => {
    setSelectedTreatmentIdForBooking(treatmentId);
    setIsBookingOpen(true);
  };

  return (
    <div className="space-y-16 sm:space-y-20 animate-fadeIn py-6 sm:py-10">
      
      {/* 1. HEADER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#06131f] via-[#081726] to-[#0b1f3a] text-white rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#f5900d]/20 text-[#f5900d] border border-[#f5900d]/40 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-[#f5900d]" />
              <span>12 CLINICAL DIVISIONS · MDS SPECIALISTS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Advanced Popular Dental Procedures at Hope Dental Hospital
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Explore our multidisciplinary clinical procedures. From Nobel Biocare & Straumann implants to E.max veneers and Carl Zeiss microscopic endodontics, every treatment is delivered with strict international sterilization protocols.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="px-6 py-3.5 bg-[#f5900d] hover:bg-[#e08208] text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-xl transition-all flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Appointment Online</span>
              </button>

              <button
                onClick={() => setIsCostCalculatorOpen(true)}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm rounded-2xl border border-white/20 transition-all flex items-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-[#f5900d]" />
                <span>Treatment Cost Estimator</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE TOOTH ANATOMY INSPECTOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#f5900d]">
            DIAGNOSTIC EDUCATION TOOL
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0b1f3a] dark:text-white">
            Interactive Dental Arch Anatomy & Clinical Solutions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Click on any tooth zone below to see its function, common issues, and Hope Dental specialist treatment protocols.
          </p>
        </div>

        {/* Zone Selector Buttons */}
        <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-2">
          {(['incisor', 'canine', 'premolar', 'molar', 'wisdom'] as const).map(zone => (
            <button
              key={zone}
              onClick={() => setSelectedToothZone(zone)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                selectedToothZone === zone
                  ? 'bg-[#f5900d] text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[#f5900d]'
              }`}
            >
              {toothAnatomyData[zone].shortName}
            </button>
          ))}
        </div>

        {/* Selected Zone Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md max-w-4xl mx-auto space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#f5900d]">
                SELECTED ANATOMY
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                {currentZone.title}
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block">Starting From</span>
              <span className="text-lg font-black text-[#f5900d]">
                {currencySymbol()}{convertPrice(currentZone.startingPriceInr).toLocaleString()}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1">
              <span className="font-bold text-slate-900 dark:text-white block">Biological Function:</span>
              <p className="text-slate-600 dark:text-slate-400">{currentZone.functions}</p>
            </div>
            <div className="space-y-1">
              <span className="font-bold text-slate-900 dark:text-white block">Common Clinical Conditions:</span>
              <p className="text-slate-600 dark:text-slate-400">{currentZone.conditions}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-[#0b1f3a] dark:text-white block">
                Recommended Specialist Treatment:
              </span>
              <span className="text-slate-700 dark:text-slate-300">
                {currentZone.recommended}
              </span>
            </div>

            <button
              onClick={() => handleBook(currentZone.treatmentId)}
              className="px-5 py-2.5 rounded-xl bg-[#f5900d] hover:bg-[#e08208] text-white font-bold text-xs shadow-md transition-colors self-start sm:self-auto flex items-center space-x-1.5 shrink-0"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. TREATMENTS DIRECTORY WITH SEARCH & FILTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search implants, veneers, root canal, braces..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f5900d]"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto w-full sm:w-auto pb-1">
            {[
              { id: 'all', label: 'All' },
              { id: 'implants', label: 'Implants' },
              { id: 'cosmetic', label: 'Cosmetic' },
              { id: 'orthodontics', label: 'Invisalign' },
              { id: 'endodontics', label: 'RCT' },
              { id: 'periodontics', label: 'Laser Gum' },
              { id: 'surgery', label: 'Surgery' },
              { id: 'tmj', label: 'TMJ' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setSelectedCategory(f.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedCategory === f.id
                    ? 'bg-[#f5900d] text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-[#f5900d]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Procedures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTreatments.map(t => (
            <div 
              key={t.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/30 text-[#f5900d] border border-[#f5900d]/20">
                    {t.category}
                  </span>
                  <span className="text-xs font-bold text-[#f5900d]">
                    From {currencySymbol()}{convertPrice(t.startingPriceInr).toLocaleString()}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#f5900d] transition-colors">
                  {t.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {t.fullDesc}
                </p>

                {/* Benefits */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                  {t.benefits.slice(0, 3).map((b, i) => (
                    <div key={i} className="flex items-start space-x-1.5">
                      <Check className="w-3.5 h-3.5 text-[#f5900d] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{b}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="pt-1 flex flex-wrap gap-1">
                  {t.technologyUsed.slice(0, 2).map((tech, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-slate-100 dark:border-slate-800 mt-4 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-1" />
                  {t.duration.slice(0, 16)}...
                </span>

                <button
                  onClick={() => handleBook(t.id)}
                  className="px-4 py-2 rounded-xl bg-[#f5900d] hover:bg-[#e08208] text-white font-bold text-xs shadow-md transition-colors flex items-center space-x-1"
                >
                  <span>Book Treatment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
