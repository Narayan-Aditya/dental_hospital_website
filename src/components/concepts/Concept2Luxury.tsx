import React, { useState } from 'react';
import { 
  Crown, 
  Sparkles, 
  Star, 
  Calendar, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Phone, 
  MapPin, 
  Award, 
  FileText,
  Sliders,
  ChevronRight,
  Gem,
  HeartHandshake
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { HOSPITAL_INFO } from '../../data/mockData';
import { YoutubeIcon, FacebookIcon, GoogleIcon } from '../common/SocialIcons';

export const Concept2Luxury: React.FC = () => {
  const { 
    language, 
    treatments, 
    doctors, 
    setIsBookingOpen, 
    setSelectedTreatmentIdForBooking,
    setSelectedDoctorIdForBooking,
    setIsInvoiceModalOpen,
    setIsEmergencyModalOpen,
    setIsSymptomCheckerOpen
  } = useApp();

  const [selectedShade, setSelectedShade] = useState<'BL1' | 'BL2' | 'A1' | 'B1'>('BL1');
  const [sliderPos, setSliderPos] = useState(50);

  const shades = [
    { code: 'BL1', name: 'Hollywood Diamond Bleach', desc: 'Ultra bright red-carpet luminescence' },
    { code: 'BL2', name: 'Celebrity White', desc: 'Luminous pearlescent porcelain finish' },
    { code: 'A1', name: 'Natural Aesthetic Pearl', desc: 'Warm natural tooth harmony' },
    { code: 'B1', name: 'Soft Ivory Elegance', desc: 'Refined subtle translucent shine' },
  ];

  const luxuryTreatments = [
    {
      title: 'Handcrafted E-Max Porcelain Veneers',
      category: 'Cosmetic Smile Makeover',
      price: '₹7,999 / Tooth',
      desc: 'Micro-thin 0.3mm Swiss ceramic laminates sculpted to harmonize with your facial proportions and lip curvature.',
      warranty: '15 Years Replacement Warranty',
      id: 'cosmetic-veneers-smile-makeover'
    },
    {
      title: 'Diamond Full-Arch Titanium Implants',
      category: 'Restorative Implantology',
      price: '₹18,999 / Unit',
      desc: 'Permanent lifetime fixed teeth replacement powered by Straumann & Nobel Biocare 3D guided robotics.',
      warranty: 'Lifetime Global Guarantee',
      id: 'dental-implants'
    },
    {
      title: 'Invisible 3D Clear Aligners Studio',
      category: 'Orthodontic Alignment',
      price: '₹34,999 / Plan',
      desc: 'Wire-free crystal clear aesthetic aligners with virtual AI smile preview before starting treatment.',
      warranty: '3D Simulation Included',
      id: 'clear-aligners-braces'
    },
    {
      title: 'Painless Single-Sitting Rotary RCT',
      category: 'Micro-Endodontics',
      price: '₹2,499 / Tooth',
      desc: 'German computerized rotary treatment with computerized Wand numbing for complete tranquility.',
      warranty: 'Single 45-Min Visit',
      id: 'rct-single-sitting'
    }
  ];

  const handleBook = (treatmentId?: string, doctorId?: string) => {
    if (treatmentId) setSelectedTreatmentIdForBooking(treatmentId);
    if (doctorId) setSelectedDoctorIdForBooking(doctorId);
    setIsBookingOpen(true);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Luxury Brand Navigation */}
      <header className="border-b border-amber-500/20 bg-slate-950/90 backdrop-blur-md sticky top-10 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20">
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-amber-300">
                  HOPE DENTAL
                </span>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Luxe Lounge
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400">
                Sadrauna, Lucknow • VIP Aesthetic Center
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8 text-xs font-semibold uppercase tracking-widest text-slate-300">
            <a href="#luxe-services" className="hover:text-amber-400 transition-colors">Haute Procedures</a>
            <a href="#shade-studio" className="hover:text-amber-400 transition-colors">Shade Studio</a>
            <a href="#luxe-doctors" className="hover:text-amber-400 transition-colors">Master Surgeons</a>
            <a href="#luxe-vip" className="hover:text-amber-400 transition-colors">VIP Suites</a>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsInvoiceModalOpen(true)}
              className="hidden sm:inline-flex items-center px-3.5 py-2 text-xs font-bold rounded-xl bg-slate-900 border border-amber-500/30 text-amber-300 hover:bg-slate-800 transition-all"
            >
              <FileText className="w-3.5 h-3.5 mr-1.5" />
              <span>Bill / Invoices</span>
            </button>

            <button
              onClick={() => handleBook()}
              className="px-5 py-2.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 transition-all"
            >
              Reserve Private Suite
            </button>
          </div>
        </div>
      </header>

      {/* Hero: Luxury Haute Aesthetics */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                <Gem className="w-3.5 h-3.5 text-amber-400" />
                <span>Sadrauna, Lucknow’s Premier Cosmetic Dental Lounge</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                The Architecture of a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-500">
                  Flawless, Radiant Smile.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                Experience bespoke aesthetic dentistry tailored to your unique facial contours. Handcrafted Swiss E-Max porcelain veneers, pain-free single-sitting root canals, and titanium dental implants in an ultra-luxurious private suite.
              </p>

              {/* Verified Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-semibold text-slate-300">
                <span className="flex items-center text-amber-300">
                  <Star className="w-4 h-4 mr-1 text-amber-400 fill-current" />
                  4.9★ Google (480+ Reviews)
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center text-amber-300">
                  <Award className="w-4 h-4 mr-1 text-amber-400" />
                  15-Year Written Guarantee
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center text-amber-300">
                  <ShieldCheck className="w-4 h-4 mr-1 text-amber-400" />
                  100% Painless Computer Numbing
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4">
                <button
                  onClick={() => handleBook()}
                  className="px-7 py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm uppercase tracking-wider rounded-2xl shadow-xl shadow-amber-500/25 transition-all flex items-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book VIP Consultation (60s)</span>
                </button>

                <button
                  onClick={() => setIsSymptomCheckerOpen(true)}
                  className="px-5 py-4 bg-slate-900 hover:bg-slate-800 text-amber-200 font-bold text-sm rounded-2xl border border-amber-500/30 transition-all flex items-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>AI Smile Assessment</span>
                </button>
              </div>
            </div>

            {/* Right Visual (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/30 shadow-2xl bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
                  alt="High-End Smile Makeover"
                  className="w-full h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-6 flex flex-col justify-end">
                  <div className="flex items-center space-x-2 text-amber-300 text-xs font-bold">
                    <Crown className="w-4 h-4" />
                    <span>Haute Aesthetic Suite</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mt-1">
                    Hope Dental Hospital & Wellness Centre
                  </h3>
                  <p className="text-xs text-slate-300">
                    Sadrauna, Mohan Road, Lucknow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Shade & Smile Selector Studio */}
      <section id="shade-studio" className="py-20 bg-slate-900 border-y border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              Interactive Shade Calibration
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Choose Your Ideal Smile Radiance
            </h2>
            <p className="text-slate-400 text-sm">
              Explore European porcelain shades customized to blend seamlessly with your skin undertones and lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950 p-6 sm:p-8 rounded-3xl border border-amber-500/30">
            {/* Shade Selection Buttons (6 cols) */}
            <div className="lg:col-span-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Available Porcelain Shade Grades:
              </h4>
              {shades.map((shade) => (
                <div
                  key={shade.code}
                  onClick={() => setSelectedShade(shade.code as any)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    selectedShade === shade.code
                      ? 'border-amber-400 bg-amber-500/10 ring-2 ring-amber-500/30'
                      : 'border-slate-800 hover:border-slate-700 bg-slate-900/60'
                  }`}
                >
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono font-bold text-xs">
                        {shade.code}
                      </span>
                      <span className="font-bold text-sm text-white">{shade.name}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{shade.desc}</p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    selectedShade === shade.code ? 'border-amber-400 bg-amber-400 text-slate-950' : 'border-slate-700'
                  }`}>
                    {selectedShade === shade.code && <CheckCircle2 className="w-4 h-4" />}
                  </div>
                </div>
              ))}
            </div>

            {/* Live Interactive Before / After Visual (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative h-72 rounded-2xl overflow-hidden border border-amber-500/30 select-none">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
                  alt="After Smile Transformation"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 font-bold text-[11px] px-2.5 py-1 rounded-full shadow">
                  Selected Shade: {selectedShade} ✨
                </div>

                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"
                    alt="Before"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/90 text-white font-bold text-[11px] px-2.5 py-1 rounded-full">
                    Original Discolored
                  </div>
                </div>

                <div
                  className="absolute top-0 bottom-0 w-1 bg-amber-400 flex items-center justify-center"
                  style={{ left: `calc(${sliderPos}% - 2px)` }}
                >
                  <div className="w-7 h-7 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs shadow-xl">
                    ↔
                  </div>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-20"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>← Slide to compare before & after</span>
                <button
                  onClick={() => handleBook('cosmetic-veneers-smile-makeover')}
                  className="text-amber-400 font-bold hover:underline"
                >
                  Consult on Shade {selectedShade} →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Haute Dental Procedures Grid */}
      <section id="luxe-services" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              Signature Clinical Menu
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Precision Aesthetic & Surgical Mastery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {luxuryTreatments.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/70 border border-slate-800 hover:border-amber-500/50 rounded-3xl p-6 sm:p-8 space-y-4 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-white bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700">
                      {item.price}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="flex items-center text-xs text-amber-300/90 font-semibold pt-1">
                    <ShieldCheck className="w-4 h-4 mr-1.5 text-amber-400" />
                    <span>{item.warranty}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => handleBook(item.id)}
                    className="w-full py-3 bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Reserve Treatment Slot</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Master Surgeons Showcase */}
      <section id="luxe-doctors" className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              Board-Certified Clinicians
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Led by Master Implantologists & Endodontists
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden hover:border-amber-500/50 transition-all flex flex-col justify-between"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-xs font-bold text-amber-300">
                    {doc.experienceYears}+ Yrs Mastery
                  </div>
                </div>

                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-lg text-white">{doc.name}</h4>
                    <p className="text-xs text-amber-400/90 font-medium">{doc.role}</p>
                    <p className="text-[11px] text-slate-500 mt-1">{doc.qualification}</p>
                  </div>

                  <button
                    onClick={() => handleBook(undefined, doc.id)}
                    className="w-full py-2 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs rounded-xl border border-slate-800 transition-all mt-3"
                  >
                    Consult with {doc.name.split(' ')[1]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social & Contact Strip */}
      <footer className="py-12 bg-slate-950 border-t border-slate-800 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="font-serif font-bold text-lg text-amber-300">
              Hope Dental Hospital & Wellness Centre
            </div>
            <p>Sadrauna, Near Main Market, Mohan Road, Lucknow • Helpline: {HOSPITAL_INFO.phone}</p>
          </div>

          <div className="flex items-center space-x-3">
            <a href={HOSPITAL_INFO.socialLinks.youtube} target="_blank" rel="noreferrer" className="p-2 bg-slate-900 rounded-xl hover:text-red-500">
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <a href={HOSPITAL_INFO.socialLinks.facebook} target="_blank" rel="noreferrer" className="p-2 bg-slate-900 rounded-xl hover:text-blue-500">
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a href={HOSPITAL_INFO.socialLinks.justdial} target="_blank" rel="noreferrer" className="px-2.5 py-2 bg-slate-900 rounded-xl text-orange-400 font-bold">
              JustDial 4.8★
            </a>
            <a href={HOSPITAL_INFO.socialLinks.google} target="_blank" rel="noreferrer" className="px-2.5 py-2 bg-slate-900 rounded-xl text-amber-400 font-bold flex items-center space-x-1">
              <GoogleIcon className="w-3 h-3" />
              <span>4.9★</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
