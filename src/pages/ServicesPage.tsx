import React, { useState } from 'react';
import { 
  Layers, 
  Check, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  Sparkles, 
  Clock, 
  ShieldCheck,
  Search
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ServicesPage: React.FC = () => {
  const { 
    language, 
    treatments, 
    setIsBookingOpen, 
    setSelectedTreatmentIdForBooking 
  } = useApp();

  const [selectedToothZone, setSelectedToothZone] = useState<'incisor' | 'canine' | 'premolar' | 'molar' | 'wisdom'>('molar');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toothAnatomyData = {
    incisor: {
      title: 'Central & Lateral Incisors (Front Teeth)',
      titleHi: 'सामने के दांत (इनसाइज़र)',
      shortName: 'Incisors',
      shortNameHi: 'सामने के दांत',
      functions: 'Aesthetic smile line, cutting food, speech pronunciation.',
      functionsHi: 'मुस्कान की सुंदरता, भोजन काटना, स्पष्ट उच्चारण।',
      conditions: 'Chipping, fluorosis stains, gaps (diastema), minor crowding.',
      conditionsHi: 'दांत टूटना, पीले दाग (फ्लोरोसिस), दांतों के बीच खाली जगह।',
      recommended: 'E-Max Ceramic Veneers & Cosmetic Smile Makeover',
      recommendedHi: 'ई-मैक्स सिरेमिक विनियर एवं कॉस्मेटिक स्माइल मेकओवर',
      startingPrice: '₹6,999',
      treatmentId: 'cosmetic-veneers-smile-makeover',
    },
    canine: {
      title: 'Canines (Eye Teeth / Cuspid)',
      titleHi: 'नुकीले दांत (कैनाइन)',
      shortName: 'Canines',
      shortNameHi: 'नुकीले दांत',
      functions: 'Tearing food, guiding jaw occlusion and lateral bite movements.',
      functionsHi: 'भोजन चीरना-फाड़ना, जबड़े का सही संरेखण।',
      conditions: 'High canine eruption, sharp tip attrition, gum recession.',
      conditionsHi: 'ऊंचा दांत निकलना, मसूड़ों का पीछे हटना, नोक घिसना।',
      recommended: 'Orthodontic Arch Alignment & Invisible Clear Aligners',
      recommendedHi: 'ऑर्थोडॉन्टिक अलाइनमेंट एवं इनविजिबल क्लियर अलाइनर्स',
      startingPrice: '₹34,999',
      treatmentId: 'clear-aligners-braces',
    },
    premolar: {
      title: 'Bicuspids / Premolars',
      titleHi: 'दाढ़ से पहले के दांत (प्रीमोलर)',
      shortName: 'Premolars',
      shortNameHi: 'प्रीमोलर दाढ़',
      functions: 'Transition mastication, initial chewing breakdown.',
      functionsHi: 'भोजन को चबाने की शुरुआती प्रक्रिया।',
      conditions: 'Interdental hidden cavities, food lodgement, cracked cusp.',
      conditionsHi: 'छिपे हुए कीड़े (कैविटी), खाना फंसना, दांत चटकना।',
      recommended: 'Single-Sitting Rotary RCT + CAD/CAM Zirconia Cap',
      recommendedHi: 'सिंगल-सिटिंग रोटरी आरसीटी + जिरकोनिया कैप',
      startingPrice: '₹2,499',
      treatmentId: 'rct-single-sitting',
    },
    molar: {
      title: 'First & Second Molars (Chewing Powerhouse)',
      titleHi: 'मुख्य चबाने वाली दाढ़ें (मोलर)',
      shortName: 'Molars',
      shortNameHi: 'मुख्य दाढ़ें',
      functions: 'Heavy chewing pressure up to 70 kg/cm² force.',
      functionsHi: '70 किग्रा/सेमी² तक के भारी चबाने का दबाव सहना।',
      conditions: 'Deep root pulpitis, decay from sticky food, structural fractures.',
      conditionsHi: 'गहरी जड़ों में दर्द, सड़न, गंभीर नस संक्रमण।',
      recommended: 'Painless Rotary RCT / Swiss Dental Implants',
      recommendedHi: 'दर्द रहित रोटरी आरसीटी / स्विस डेंटल इम्प्लांट्स',
      startingPrice: '₹2,499',
      treatmentId: 'rct-single-sitting',
    },
    wisdom: {
      title: 'Third Molars (Wisdom Teeth)',
      titleHi: 'तीसरी दाढ़ (अक्ल दाढ़)',
      shortName: 'Wisdom Teeth',
      shortNameHi: 'अक्ल दाढ़',
      functions: 'Vestigial evolutionary tooth, often lacks space to emerge.',
      functionsHi: 'अंतिम दाढ़, जिसे निकलने के लिए अक्सर जगह नहीं मिलती।',
      conditions: 'Horizontal impaction, severe nerve pressure, gum infection.',
      conditionsHi: 'जबड़े में तिरछी दाढ़, तेज जबड़ा दर्द, मसूड़े में सूजन।',
      recommended: 'Minimally Invasive Oral Surgery & Keyhole Extraction',
      recommendedHi: 'माइक्रो ओरल सर्जरी एवं सरल निष्कर्षण',
      startingPrice: '₹2,999',
      treatmentId: 'wisdom-tooth-surgery',
    }
  };

  const activeTooth = toothAnatomyData[selectedToothZone];

  const handleBookTooth = (treatmentId: string) => {
    setSelectedTreatmentIdForBooking(treatmentId);
    setIsBookingOpen(true);
  };

  const categories = [
    { id: 'all', label: 'All Treatments', labelHi: 'सभी उपचार' },
    { id: 'rct', label: 'Root Canal (RCT)', labelHi: 'रूट कैनाल' },
    { id: 'implants', label: 'Dental Implants', labelHi: 'इम्प्लांट्स' },
    { id: 'ortho', label: 'Aligners & Braces', labelHi: 'अलाइनर्स व तार' },
    { id: 'cosmetic', label: 'Cosmetic & Smile', labelHi: 'कॉस्मेटिक व स्माइल' },
    { id: 'surgery', label: 'Oral Surgery', labelHi: 'ओरल सर्जरी' },
    { id: 'pediatric', label: 'Kids Dentistry', labelHi: 'बच्चों के दांत' },
  ];

  const filteredTreatments = treatments.filter((t) => {
    const matchesCategory = selectedCategory === 'all' || t.category === selectedCategory;
    const matchesSearch = 
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.titleHi.includes(searchQuery) ||
      t.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 sm:space-y-20 animate-fadeIn py-6 sm:py-10">
      {/* 1. SERVICES PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-slate-900 via-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-2xl space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-teal-400" />
            <span>{language === 'hi' ? 'उपचार व सेवाएं' : 'Services & Dental Anatomy Navigator'}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            {language === 'hi'
              ? 'आधुनिक तकनीक से संपन्न सभी दंत चिकित्सा सेवाएं'
              : 'Complete Spectrum of Modern Clinical Dentistry'
            }
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {language === 'hi'
              ? 'सदरौना में डिजिटल 3D सीबीसीटी डायग्नोस्टिक्स, माइक्रोस्कोपिक एंडोडॉन्टिक्स, एवं दर्द-रहित सर्जरी के साथ संपूर्ण उपचार।'
              : 'Explore procedures categorized by tooth anatomy or browse the full catalog below. All procedures utilize pain-free Swiss dental protocols.'
            }
          </p>
        </div>
      </section>

      {/* 2. 3D DENTAL ARCH ANATOMY EXPLORER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-8 sm:mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-teal-800 dark:text-teal-400">
            Interactive Diagnosis
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            {language === 'hi' ? '3D दांत संरचना एवं उपचार नेविगेटर' : '3D Dental Arch Anatomy Navigator'}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
            {language === 'hi' 
              ? 'अपने प्रभावित दांत के प्रकार को चुनें और तुरंत क्लीनिकल कारण व उपचार जानें।'
              : 'Select any zone of your dental arch to understand biological functions, common symptoms, and recommended clinical solutions.'
            }
          </p>
        </div>

        {/* Mobile Horizontal Scrollable Pills */}
        <div className="flex sm:hidden overflow-x-auto gap-2 pb-3 mb-6 scrollbar-none snap-x">
          {(Object.keys(toothAnatomyData) as (keyof typeof toothAnatomyData)[]).map((zoneKey) => {
            const item = toothAnatomyData[zoneKey];
            const isSelected = selectedToothZone === zoneKey;

            return (
              <button
                key={zoneKey}
                onClick={() => setSelectedToothZone(zoneKey)}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs whitespace-nowrap snap-start border transition-all shrink-0 ${
                  isSelected
                    ? 'bg-teal-600 text-white border-teal-600 shadow-md'
                    : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800'
                }`}
              >
                <span>{language === 'hi' ? item.shortNameHi : item.shortName}</span>
                <span className="block text-[10px] font-normal opacity-90">{item.startingPrice}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Desktop Zone Selector (5 cols) */}
          <div className="hidden sm:block lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              {language === 'hi' ? 'दांत का प्रकार चुनें:' : 'Select Dental Arch Zone:'}
            </h4>

            {(Object.keys(toothAnatomyData) as (keyof typeof toothAnatomyData)[]).map((zoneKey) => {
              const item = toothAnatomyData[zoneKey];
              const isSelected = selectedToothZone === zoneKey;

              return (
                <button
                  key={zoneKey}
                  onClick={() => setSelectedToothZone(zoneKey)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'border-teal-600 bg-teal-50/70 dark:bg-teal-950/50 shadow-md ring-2 ring-teal-600/20'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-900 dark:text-white'
                  }`}
                >
                  <div>
                    <div className="font-bold text-sm text-slate-900 dark:text-white">
                      {language === 'hi' ? item.titleHi : item.title}
                    </div>
                    <div className="text-xs text-teal-700 dark:text-teal-400 font-semibold mt-1">
                      {language === 'hi' ? 'शुरुआती शुल्क' : 'Starting from'} {item.startingPrice}
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 ${
                    isSelected ? 'border-teal-600 bg-teal-600 text-white' : 'border-slate-300 dark:border-slate-700'
                  }`}>
                    {isSelected ? <Check className="w-3.5 h-3.5" /> : null}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Tooth Zone Details Card (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-900 p-5 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-5 sm:space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <span className="text-[9px] sm:text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                  Clinical Diagnosis
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  {language === 'hi' ? activeTooth.titleHi : activeTooth.title}
                </h3>
              </div>
              <div className="text-right">
                <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">{language === 'hi' ? 'शुरुआती फीस' : 'Starting Fee'}</div>
                <div className="font-mono font-bold text-lg sm:text-xl text-teal-800 dark:text-teal-400">{activeTooth.startingPrice}</div>
              </div>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="p-3.5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">
                  {language === 'hi' ? 'मुख्य कार्य (Biological Function):' : 'Biological Function:'}
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {language === 'hi' ? activeTooth.functionsHi : activeTooth.functions}
                </p>
              </div>

              <div className="p-3.5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">
                  {language === 'hi' ? 'सामान्य समस्याएं (Common Conditions):' : 'Common Conditions:'}
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {language === 'hi' ? activeTooth.conditionsHi : activeTooth.conditions}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-teal-50/80 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 text-xs">
              <span className="font-bold text-teal-900 dark:text-teal-200 block mb-1">
                {language === 'hi' ? 'सुझाया गया उपचार:' : 'Recommended Treatment:'}
              </span>
              <p className="text-teal-800 dark:text-teal-300 font-semibold">
                {language === 'hi' ? activeTooth.recommendedHi : activeTooth.recommended}
              </p>
            </div>

            <div className="pt-1">
              <button
                onClick={() => handleBookTooth(activeTooth.treatmentId)}
                className="w-full py-3.5 bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500 hover:from-teal-700 hover:to-emerald-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center space-x-1.5 active:scale-95"
              >
                <span>{language === 'hi' ? 'इस उपचार के लिए अपॉइंटमेंट लें' : 'Book Appointment for this Treatment'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FULL TREATMENTS CATALOG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'उपचार सूची एवं शुल्क' : 'Complete Dental Treatments & Fees'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {language === 'hi' ? 'पारदर्शी मूल्य और विशेषज्ञ क्लीनिकल प्रक्रियाएं' : 'Transparent hospital pricing with Swiss precision equipment'}
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'hi' ? 'उपचार खोजें (e.g. RCT, Implants)...' : 'Search treatments (e.g. RCT, Implants)...'}
              className="w-full pl-9 pr-4 py-2.5 text-base sm:text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-teal-500 outline-none shadow-xs"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {language === 'hi' ? cat.labelHi : cat.label}
            </button>
          ))}
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredTreatments.map((t) => (
            <div 
              key={t.id}
              className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between hover:shadow-xl hover:border-teal-500/40 transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-teal-100/80 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 border border-teal-200/50 dark:border-teal-800">
                    {t.category}
                  </span>
                  <span className="font-mono text-sm font-bold text-teal-700 dark:text-teal-400">
                    ₹{t.startingPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors">
                  {language === 'hi' ? t.titleHi : t.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {language === 'hi' ? t.shortDescHi : t.shortDesc}
                </p>

                <div className="pt-2 flex items-center space-x-3 text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
                    {t.duration}
                  </span>
                  <span>•</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-semibold">{t.painLevel}</span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[10px] text-slate-400">Sadrauna OPD</span>
                <button
                  onClick={() => handleBookTooth(t.id)}
                  className="px-4 py-2 bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center space-x-1 active:scale-95"
                >
                  <span>{language === 'hi' ? 'अपॉइंटमेंट लें' : 'Book Slot'}</span>
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
