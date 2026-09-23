import React, { useState } from 'react';
import { 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  Cpu, 
  Calendar, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Clock, 
  MapPin, 
  Phone, 
  Award, 
  Scan, 
  HeartHandshake,
  Layers,
  ChevronRight,
  ExternalLink,
  Search,
  Check,
  Zap,
  Info
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { HOSPITAL_INFO } from '../../data/mockData';
import { YoutubeIcon, FacebookIcon, GoogleIcon } from '../common/SocialIcons';

export const Concept3ProMax: React.FC = () => {
  const { 
    language, 
    treatments, 
    doctors, 
    blogs,
    reviews,
    setIsBookingOpen, 
    setSelectedTreatmentIdForBooking,
    setSelectedDoctorIdForBooking,
    setIsInvoiceModalOpen,
    setIsEmergencyModalOpen,
    setIsSymptomCheckerOpen,
    setIsCostEstimatorOpen
  } = useApp();

  // 3D Dental Arch Anatomy State
  const [selectedToothZone, setSelectedToothZone] = useState<'incisor' | 'canine' | 'premolar' | 'molar' | 'wisdom'>('molar');
  
  // AI Scanner Simulator State
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanCompleted, setScanCompleted] = useState<boolean>(false);

  // Insurance Search State
  const [insuranceQuery, setInsuranceQuery] = useState<string>('');

  const toothAnatomyData = {
    incisor: {
      title: 'Central & Lateral Incisors (Front Teeth)',
      titleHi: 'सामने के दांत (इनसाइज़र)',
      functions: 'Aesthetic smile line, cutting food, speech pronunciation.',
      conditions: 'Chipping, fluorosis stains, gaps (diastema), minor crowding.',
      recommended: 'E-Max Ceramic Veneers / Invisible Clear Aligners',
      startingPrice: '₹6,999',
      treatmentId: 'cosmetic-veneers-smile-makeover',
      icon: 'Smile',
      layerDetails: 'Outer Enamel (0.5mm) over aesthetic translucent dentin.'
    },
    canine: {
      title: 'Canines (Eye Teeth / Cuspid)',
      titleHi: 'नुकीले दांत (कैनाइन)',
      functions: 'Tearing food, guiding jaw occlusion and lateral bite movements.',
      conditions: 'High canine eruption, sharp tip attrition, gum recession.',
      recommended: 'Orthodontic Arch Expansion & Invisible Aligners',
      startingPrice: '₹34,999',
      treatmentId: 'clear-aligners-braces',
      icon: 'Shield',
      layerDetails: 'Longest root in human dentition providing foundational arch support.'
    },
    premolar: {
      title: 'Bicuspids / Premolars',
      titleHi: 'दाढ़ से पहले के दांत (प्रीमोलर)',
      functions: 'Transition mastication, initial chewing breakdown.',
      conditions: 'Interdental hidden cavities, food lodgement, cracked cusp.',
      recommended: 'Single-Sitting Rotary RCT + CAD/CAM Zirconia Cap',
      startingPrice: '₹2,499',
      treatmentId: 'rct-single-sitting',
      icon: 'Zap',
      layerDetails: 'Dual-canal root anatomy treated under microscopic magnification.'
    },
    molar: {
      title: 'First & Second Molars (Chewing Powerhouse)',
      titleHi: 'मुख्य चबाने वाली दाढ़ें (मोलर)',
      functions: 'Heavy chewing pressure up to 70 kg/cm² force.',
      conditions: 'Deep root pulpitis, decay from sticky food, structural fractures.',
      recommended: 'Painless Rotary RCT / Swiss Dental Implants',
      startingPrice: '₹2,499',
      treatmentId: 'rct-single-sitting',
      icon: 'Award',
      layerDetails: 'Multi-rooted complex canals sealed with bio-ceramic hermetic filler.'
    },
    wisdom: {
      title: 'Third Molars (Wisdom Teeth)',
      titleHi: 'तीसरी दाढ़ (अक्ल दाढ़)',
      functions: 'Vestigial evolutionary tooth, often lacks space to emerge.',
      conditions: 'Horizontal impaction, severe nerve pressure, gum infection.',
      recommended: 'Minimally Invasive Oral Surgery & Keyhole Extraction',
      startingPrice: '₹2,999',
      treatmentId: 'wisdom-tooth-surgery',
      icon: 'Activity',
      layerDetails: 'Carefully evaluated with 3D CBCT imaging to protect adjacent nerves.'
    }
  };

  const handleSimulateScan = () => {
    setIsScanning(true);
    setScanCompleted(false);
    setTimeout(() => {
      setIsScanning(false);
      setScanCompleted(true);
    }, 2000);
  };

  const handleBookTooth = (treatmentId: string) => {
    setSelectedTreatmentIdForBooking(treatmentId);
    setIsBookingOpen(true);
  };

  const activeTooth = toothAnatomyData[selectedToothZone];

  return (
    <div className="bg-[#FFFFFF] text-[#111111] min-h-screen font-sans antialiased selection:bg-teal-600 selection:text-white">
      {/* UI UX Pro Max Tokenized Sticky Header */}
      <header className="sticky top-10 z-40 bg-white/90 backdrop-blur-xl border-b border-[#E5E5EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-teal-700 via-teal-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-teal-700/20">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 6 3 9l3 5 3-5c1.5-3 3-5.5 3-9 0-3.5-2.5-6-6-6z"/>
                <path d="M10 8c1-1 3-1 4 0"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-serif text-xl font-bold tracking-tight text-[#111111]">
                  HOPE DENTAL
                </span>
                <span className="bg-[#F9F9FB] text-teal-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#E5E5EA]">
                  Pro Max
                </span>
              </div>
              <p className="text-[11px] text-[#6E6E73] font-medium">
                Hospital & Wellness Centre • Sadrauna, Lucknow
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8 text-xs font-semibold text-[#6E6E73]">
            <a href="#pro-anatomy" className="hover:text-teal-700 transition-colors">3D Tooth Explorer</a>
            <a href="#pro-ai-scan" className="hover:text-teal-700 transition-colors">Smart AI Diagnostic</a>
            <a href="#pro-specialists" className="hover:text-teal-700 transition-colors">Surgeon Faculty</a>
            <a href="#pro-insurance" className="hover:text-teal-700 transition-colors">Cashless Coverage</a>
            <a href="#pro-invoices" className="hover:text-teal-700 transition-colors">GST Invoices</a>
          </nav>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsInvoiceModalOpen(true)}
              className="hidden sm:inline-flex items-center px-3.5 py-2 text-xs font-bold rounded-xl bg-[#F9F9FB] hover:bg-[#F2F2F7] text-[#111111] border border-[#E5E5EA] transition-all"
            >
              <FileText className="w-3.5 h-3.5 mr-1.5 text-teal-600" />
              <span>Tax Invoices</span>
            </button>

            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-xl shadow-lg shadow-teal-700/20 transition-all flex items-center space-x-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book in 60s</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero: Editorial Gallery Wall with Verified Credentials */}
      <section className="pt-12 pb-20 lg:pt-20 lg:pb-28 bg-[#FFFFFF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#F9F9FB] border border-[#E5E5EA] text-xs text-[#111111] font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Sadrauna, Mohan Road, Lucknow</span>
                <span className="text-[#8E8E93]">•</span>
                <span className="text-amber-600 font-bold">4.9★ Google & JustDial</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.12]">
                Next-Generation Dental Surgery &{' '}
                <span className="text-teal-700 italic">
                  Digital Oral Care.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed max-w-2xl">
                Experience hospital-grade painless dentistry with single-sitting rotary root canals, Swiss dental implants with lifetime warranties, and 3D computer guided clear aligners in Sadrauna, Lucknow.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-2 border-y border-[#E5E5EA] py-4">
                <div>
                  <div className="font-serif font-bold text-2xl text-[#111111]">{HOSPITAL_INFO.stats.patientsTreated}</div>
                  <div className="text-xs text-[#6E6E73]">Patients Treated</div>
                </div>
                <div>
                  <div className="font-serif font-bold text-2xl text-teal-700">100% Painless</div>
                  <div className="text-xs text-[#6E6E73]">Computerized Numbing</div>
                </div>
                <div>
                  <div className="font-serif font-bold text-2xl text-[#111111]">Class-B</div>
                  <div className="text-xs text-[#6E6E73]">4-Tier Sterilization</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="px-6 py-3.5 bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm rounded-2xl shadow-xl shadow-teal-700/20 transition-all flex items-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Appointment (60s)</span>
                </button>

                <button
                  onClick={() => setIsSymptomCheckerOpen(true)}
                  className="px-5 py-3.5 bg-[#F9F9FB] hover:bg-[#F2F2F7] text-[#111111] font-bold text-sm rounded-2xl border border-[#E5E5EA] transition-all flex items-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 text-teal-600" />
                  <span>Interactive Symptom Checker</span>
                </button>

                <button
                  onClick={() => setIsEmergencyModalOpen(true)}
                  className="px-4 py-3.5 bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs sm:text-sm rounded-2xl border border-rose-200 transition-all flex items-center space-x-1.5"
                >
                  <span>24/7 SOS: {HOSPITAL_INFO.emergencyPhone}</span>
                </button>
              </div>
            </div>

            {/* Right Column (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="bg-[#F9F9FB] p-6 rounded-3xl border border-[#E5E5EA] shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
                    Live Clinic Queue Status
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    OPD ACTIVE
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E5E5EA]">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center text-xs">
                        AV
                      </div>
                      <div>
                        <div className="font-bold text-[#111111]">Dr. Amit Verma (MDS Surgeon)</div>
                        <div className="text-[11px] text-[#6E6E73]">Available for Implants & Surgery</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700">Slot Available</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E5E5EA]">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-800 font-bold flex items-center justify-center text-xs">
                        NS
                      </div>
                      <div>
                        <div className="font-bold text-[#111111]">Dr. Neha Sharma (MDS RCT)</div>
                        <div className="text-[11px] text-[#6E6E73]">Single-Sitting Rotary Specialist</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700">Slot Available</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-xl shadow transition-all"
                  >
                    Quick Slot Lock →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 1: 3D Tooth Anatomy & Dental Arch Navigator */}
      <section id="pro-anatomy" className="py-20 bg-[#F9F9FB] border-y border-[#E5E5EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-teal-700" />
              <span>Interactive Clinical Anatomy</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
              Interactive 3D Tooth Anatomy Explorer
            </h2>
            <p className="text-[#6E6E73] text-sm">
              Click on different tooth zones across the human dental arch to understand layer pathology, pain symptoms, and hospital clinical treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Tooth Zone Selector (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#6E6E73] mb-2">
                Select Dental Arch Zone:
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
                        ? 'border-teal-600 bg-white shadow-md ring-2 ring-teal-600/10'
                        : 'border-[#E5E5EA] bg-[#FFFFFF] hover:bg-[#F2F2F7] text-[#111111]'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm text-[#111111]">{item.title}</div>
                      <div className="text-xs text-[#6E6E73] mt-0.5">{item.titleHi}</div>
                      <div className="text-xs font-bold text-teal-700 mt-1">Starting from {item.startingPrice}</div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-teal-600 bg-teal-600 text-white' : 'border-[#E5E5EA]'
                    }`}>
                      {isSelected ? <Check className="w-3.5 h-3.5" /> : null}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Dynamic Clinical Pathology Deep-Dive (7 cols) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E5EA] shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-[#E5E5EA] pb-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
                    Clinical Spec Sheet
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#111111] mt-1">
                    {activeTooth.title}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#6E6E73]">Procedure Fee</div>
                  <div className="font-mono font-bold text-xl text-teal-800">{activeTooth.startingPrice}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-[#F9F9FB] border border-[#E5E5EA] space-y-1">
                  <span className="font-bold text-[#111111] uppercase tracking-wider block text-[10px]">
                    Biological Function & Mastication
                  </span>
                  <p className="text-[#6E6E73]">{activeTooth.functions}</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F9F9FB] border border-[#E5E5EA] space-y-1">
                  <span className="font-bold text-[#111111] uppercase tracking-wider block text-[10px]">
                    Microscopic Anatomy & Enamel Layer
                  </span>
                  <p className="text-[#6E6E73]">{activeTooth.layerDetails}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-1 text-xs">
                <span className="font-bold text-teal-900 uppercase tracking-wider block text-[10px]">
                  Common Conditions & Decay Risks
                </span>
                <p className="text-teal-800 font-medium">{activeTooth.conditions}</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div>
                  <div className="text-xs text-[#6E6E73]">Recommended Treatment at Hope Dental:</div>
                  <div className="font-bold text-sm text-[#111111]">{activeTooth.recommended}</div>
                </div>

                <button
                  onClick={() => handleBookTooth(activeTooth.treatmentId)}
                  className="w-full sm:w-auto px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center space-x-1.5 shrink-0"
                >
                  <span>Book Consultation for this Tooth</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 2: Smart AI Oral Health Scanner Simulator */}
      <section id="pro-ai-scan" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
              <Scan className="w-3.5 h-3.5 text-sky-700" />
              <span>AI Computer Vision Triage</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
              Smart AI Oral Health Scanner
            </h2>
            <p className="text-[#6E6E73] text-sm">
              Simulate an AI-powered diagnostic scan of dental alignment, tartar index, and enamel mineralization in seconds.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#F9F9FB] rounded-3xl border border-[#E5E5EA] p-6 sm:p-10 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Scan Preview Canvas */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 h-72 flex items-center justify-center border-2 border-teal-500/40">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
                  alt="Oral Scan Target"
                  className="w-full h-full object-cover opacity-80"
                />

                {/* Scanning overlay bar animation */}
                {isScanning && (
                  <div className="absolute inset-0 bg-teal-500/20 backdrop-blur-[2px] flex flex-col items-center justify-center">
                    <div className="w-full h-1 bg-cyan-400 shadow-[0_0_15px_#22d3ee] animate-bounce" />
                    <div className="text-white text-xs font-mono font-bold mt-4 bg-slate-950/80 px-3 py-1 rounded-full">
                      ANALYZING MICRO-STRUCTURE...
                    </div>
                  </div>
                )}

                {/* AI Target Box indicators */}
                {!isScanning && (
                  <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
                    <div className="flex justify-between text-[10px] font-mono text-cyan-300 bg-slate-950/70 p-1.5 rounded">
                      <span>AI VISION 4.2</span>
                      <span>FPS: 60</span>
                    </div>
                    <div className="border border-dashed border-cyan-400/80 rounded-xl p-4 text-center">
                      <span className="text-[10px] font-mono font-bold text-white bg-teal-700/80 px-2 py-0.5 rounded">
                        Target: Upper & Lower Arch
                      </span>
                    </div>
                    <div className="text-[10px] font-mono text-cyan-300 text-center">
                      {scanCompleted ? 'ANALYSIS COMPLETE ✓' : 'READY TO SCAN'}
                    </div>
                  </div>
                )}
              </div>

              {/* Scan Results / Trigger */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-serif font-bold text-xl text-[#111111]">
                    AI Oral Metrics Dashboard
                  </h4>
                  <p className="text-xs text-[#6E6E73] mt-0.5">
                    Real-time clinical simulation powered by dental neural models.
                  </p>
                </div>

                {scanCompleted ? (
                  <div className="space-y-3 text-xs animate-fadeIn">
                    <div className="p-3 bg-white rounded-xl border border-[#E5E5EA] flex justify-between items-center">
                      <span className="font-bold text-[#111111]">Plaque & Tartar Calculus Index:</span>
                      <span className="font-bold text-emerald-600">8% (Optimal / Clean)</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[#E5E5EA] flex justify-between items-center">
                      <span className="font-bold text-[#111111]">Enamel Mineralization Score:</span>
                      <span className="font-bold text-teal-700">96 / 100 (Strong)</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[#E5E5EA] flex justify-between items-center">
                      <span className="font-bold text-[#111111]">Arch Alignment Index:</span>
                      <span className="font-bold text-sky-700">92% (Good Symmetry)</span>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => setIsBookingOpen(true)}
                        className="w-full py-3 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-xl shadow transition-all"
                      >
                        Book In-Clinic Verification Slot →
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-xs text-[#6E6E73] leading-relaxed">
                      Click the button below to initiate an AI scan simulator. It checks for early calculus, gum pocket health, and enamel translucency.
                    </p>
                    <button
                      onClick={handleSimulateScan}
                      disabled={isScanning}
                      className="w-full py-3.5 bg-gradient-to-r from-teal-700 to-cyan-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2"
                    >
                      <Scan className="w-4 h-4" />
                      <span>{isScanning ? 'Processing AI Neural Scan...' : 'Start AI Oral Scan Simulator'}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 3: Cashless Insurance & Hospital Coverage Lookup */}
      <section id="pro-insurance" className="py-20 bg-[#F9F9FB] border-t border-[#E5E5EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" />
              <span>Zero-Hassle Cashless Medical Claims</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
              Supported Insurance & 0% EMI Networks
            </h2>
            <p className="text-[#6E6E73] text-sm">
              We partner with India’s leading healthcare insurance TPAs, CGHS, and 0% interest EMI financing providers for smooth billing.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Star Health', badge: 'Cashless Active', type: 'Insurance' },
              { name: 'HDFC ERGO', badge: 'Fast Approval', type: 'Insurance' },
              { name: 'ICICI Lombard', badge: 'Instant TPA', type: 'Insurance' },
              { name: 'Bajaj Finserv', badge: '0% EMI 12 Mo', type: 'EMI Finance' },
              { name: 'Max Bupa (Niva)', badge: 'Direct Desk', type: 'Insurance' },
              { name: 'Care Health', badge: 'Hospital Panel', type: 'Insurance' }
            ].map((p, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-2xl border border-[#E5E5EA] text-center space-y-2 hover:shadow-md transition-all"
              >
                <div className="font-bold text-sm text-[#111111]">{p.name}</div>
                <div className="text-[10px] text-teal-800 font-bold bg-teal-50 px-2 py-0.5 rounded-full">
                  {p.badge}
                </div>
                <div className="text-[10px] text-[#8E8E93]">{p.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social & Contact Strip */}
      <footer id="pro-invoices" className="py-14 bg-white border-t border-[#E5E5EA] text-xs text-[#6E6E73]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="font-serif font-bold text-lg text-[#111111]">
              Hope Dental Hospital & Wellness Centre
            </div>
            <p>Sadrauna, Near Main Market, Mohan Road, Lucknow, UP 226009 • Helpline: {HOSPITAL_INFO.phone}</p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsInvoiceModalOpen(true)}
              className="px-4 py-2 bg-[#F9F9FB] hover:bg-[#F2F2F7] text-[#111111] font-bold rounded-xl border border-[#E5E5EA] flex items-center space-x-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-teal-600" />
              <span>Download Tax Invoice</span>
            </button>

            <a href={HOSPITAL_INFO.socialLinks.youtube} target="_blank" rel="noreferrer" className="p-2 bg-[#F9F9FB] rounded-xl text-red-600 hover:bg-[#F2F2F7]">
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <a href={HOSPITAL_INFO.socialLinks.facebook} target="_blank" rel="noreferrer" className="p-2 bg-[#F9F9FB] rounded-xl text-blue-600 hover:bg-[#F2F2F7]">
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a href={HOSPITAL_INFO.socialLinks.google} target="_blank" rel="noreferrer" className="px-2.5 py-2 bg-[#F9F9FB] rounded-xl text-teal-700 font-bold flex items-center space-x-1 border border-[#E5E5EA]">
              <GoogleIcon className="w-3 h-3" />
              <span>4.9★</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
