import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  MapPin, 
  Phone, 
  Award, 
  Layers, 
  ChevronRight, 
  Check, 
  Building,
  ShieldCheck,
  BookOpen
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { HOSPITAL_INFO } from '../../data/mockData';
import { YoutubeIcon, FacebookIcon, GoogleIcon } from '../common/SocialIcons';

export const Concept3ProMax: React.FC = () => {
  const { 
    language, 
    doctors, 
    blogs, 
    reviews, 
    setIsBookingOpen, 
    setSelectedTreatmentIdForBooking,
    setSelectedDoctorIdForBooking 
  } = useApp();

  // 3D Dental Arch Anatomy State
  const [selectedToothZone, setSelectedToothZone] = useState<'incisor' | 'canine' | 'premolar' | 'molar' | 'wisdom'>('molar');

  const toothAnatomyData = {
    incisor: {
      title: 'Central & Lateral Incisors (Front Teeth)',
      titleHi: 'सामने के दांत (इनसाइज़र)',
      functions: 'Aesthetic smile line, cutting food, speech pronunciation.',
      conditions: 'Chipping, fluorosis stains, gaps (diastema), minor crowding.',
      recommended: 'E-Max Ceramic Veneers / Invisible Clear Aligners',
      startingPrice: '₹6,999',
      treatmentId: 'cosmetic-veneers-smile-makeover',
    },
    canine: {
      title: 'Canines (Eye Teeth / Cuspid)',
      titleHi: 'नुकीले दांत (कैनाइन)',
      functions: 'Tearing food, guiding jaw occlusion and lateral bite movements.',
      conditions: 'High canine eruption, sharp tip attrition, gum recession.',
      recommended: 'Orthodontic Arch Expansion & Invisible Aligners',
      startingPrice: '₹34,999',
      treatmentId: 'clear-aligners-braces',
    },
    premolar: {
      title: 'Bicuspids / Premolars',
      titleHi: 'दाढ़ से पहले के दांत (प्रीमोलर)',
      functions: 'Transition mastication, initial chewing breakdown.',
      conditions: 'Interdental hidden cavities, food lodgement, cracked cusp.',
      recommended: 'Single-Sitting Rotary RCT + CAD/CAM Zirconia Cap',
      startingPrice: '₹2,499',
      treatmentId: 'rct-single-sitting',
    },
    molar: {
      title: 'First & Second Molars (Chewing Powerhouse)',
      titleHi: 'मुख्य चबाने वाली दाढ़ें (मोलर)',
      functions: 'Heavy chewing pressure up to 70 kg/cm² force.',
      conditions: 'Deep root pulpitis, decay from sticky food, structural fractures.',
      recommended: 'Painless Rotary RCT / Swiss Dental Implants',
      startingPrice: '₹2,499',
      treatmentId: 'rct-single-sitting',
    },
    wisdom: {
      title: 'Third Molars (Wisdom Teeth)',
      titleHi: 'तीसरी दाढ़ (अक्ल दाढ़)',
      functions: 'Vestigial evolutionary tooth, often lacks space to emerge.',
      conditions: 'Horizontal impaction, severe nerve pressure, gum infection.',
      recommended: 'Minimally Invasive Oral Surgery & Keyhole Extraction',
      startingPrice: '₹2,999',
      treatmentId: 'wisdom-tooth-surgery',
    }
  };

  const activeTooth = toothAnatomyData[selectedToothZone];

  const handleBookTooth = (treatmentId: string) => {
    setSelectedTreatmentIdForBooking(treatmentId);
    setIsBookingOpen(true);
  };

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
            <a href="#pro-about" className="hover:text-teal-700 transition-colors">About Hospital</a>
            <a href="#pro-services" className="hover:text-teal-700 transition-colors">Services & 3D Explorer</a>
            <a href="#pro-doctors" className="hover:text-teal-700 transition-colors">Surgeon Faculty</a>
            <a href="#pro-reviews" className="hover:text-teal-700 transition-colors">Customer Reviews</a>
            <a href="#pro-blogs" className="hover:text-teal-700 transition-colors">Dental Blogs</a>
          </nav>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-xl shadow-lg shadow-teal-700/20 transition-all flex items-center space-x-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </header>

      {/* 1. HERO / LANDING */}
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
                Next-Generation Dental Care &{' '}
                <span className="text-teal-700 italic">
                  Gentle Surgery.
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
              </div>
            </div>

            {/* Right Column (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F9F9FB] bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Consultation Suite"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-bold text-teal-400">Sadrauna Clinic</span>
                  <h3 className="font-serif font-bold text-lg text-white">Hope Dental Hospital & Wellness Centre</h3>
                  <p className="text-xs text-slate-300">Mohan Road, Lucknow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT HOSPITAL */}
      <section id="pro-about" className="py-20 bg-[#F9F9FB] border-y border-[#E5E5EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
                <Building className="w-3.5 h-3.5 text-teal-700" />
                <span>About Hope Dental Hospital</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111] leading-tight">
                Empathetic Healthcare & European Clinical Standards
              </h2>
              <p className="text-[#6E6E73] text-sm leading-relaxed">
                Hope Dental Hospital & Wellness Centre in Sadrauna, Lucknow is committed to gentle, evidence-based dentistry. Equipped with digital 3D CBCT imaging, rotary endodontic motors, and 4-tier Class-B autoclave sterilization, we ensure zero infection and complete comfort.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-semibold text-[#111111]">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700" />
                  <span>14+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700" />
                  <span>ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700" />
                  <span>100% Sterile Sealed Instruments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-700" />
                  <span>Dedicated Kids Operatory</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E5EA] shadow-lg space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-teal-800 uppercase">
                <span>Clinical Standards</span>
                <span>Sadrauna Branch</span>
              </div>
              <p className="text-xs text-[#6E6E73] leading-relaxed">
                "Our promise is simple: provide world-class dental care where every patient feels completely heard, respected, and treated with gentle precision."
              </p>
              <div className="pt-2 border-t border-[#E5E5EA] flex justify-between items-center text-xs">
                <span className="font-bold text-[#111111]">Dr. Amit Verma & Team</span>
                <span className="text-teal-700 font-semibold">Chief Dental Surgeons</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT SERVICES HOSPITAL PROVIDES (With 3D Dental Arch Anatomy Explorer) */}
      <section id="pro-services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-teal-700" />
              <span>Services & 3D Anatomy Navigator</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
              Services & Treatments Provided
            </h2>
            <p className="text-[#6E6E73] text-sm">
              Explore hospital procedures categorized by dental arch anatomy. Click any zone to view clinical solutions and book directly.
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
                        ? 'border-teal-600 bg-teal-50/50 shadow-md ring-2 ring-teal-600/10'
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

            {/* Right: Detailed Service Card (7 cols) */}
            <div className="lg:col-span-7 bg-[#F9F9FB] p-6 sm:p-8 rounded-3xl border border-[#E5E5EA] shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-[#E5E5EA] pb-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
                    Clinical Treatment Overview
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#111111] mt-1">
                    {activeTooth.title}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#6E6E73]">Starting Fee</div>
                  <div className="font-mono font-bold text-xl text-teal-800">{activeTooth.startingPrice}</div>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 bg-white rounded-xl border border-[#E5E5EA]">
                  <span className="font-bold text-[#111111] block mb-1">Biological Function:</span>
                  <p className="text-[#6E6E73]">{activeTooth.functions}</p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#E5E5EA]">
                  <span className="font-bold text-[#111111] block mb-1">Common Conditions:</span>
                  <p className="text-[#6E6E73]">{activeTooth.conditions}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-teal-50/80 border border-teal-200 text-xs">
                <span className="font-bold text-teal-900 block mb-1">Recommended Treatment:</span>
                <p className="text-teal-800 font-semibold">{activeTooth.recommended}</p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleBookTooth(activeTooth.treatmentId)}
                  className="w-full py-3 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center space-x-1.5"
                >
                  <span>Book Appointment for this Treatment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DOCTORS DETAILS */}
      <section id="pro-doctors" className="py-20 bg-[#F9F9FB] border-t border-[#E5E5EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-800">
              Surgeon Faculty
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
              Meet Our Specialist Doctors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl border border-[#E5E5EA] overflow-hidden hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover object-top" />
                  <div className="absolute bottom-2.5 left-2.5 bg-teal-700 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {doc.experienceYears}+ Yrs Exp
                  </div>
                </div>

                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-lg text-[#111111]">{doc.name}</h4>
                    <p className="text-xs text-teal-700 font-semibold">{doc.role}</p>
                    <p className="text-[11px] text-[#6E6E73] mt-1">{doc.qualification}</p>
                    <p className="text-xs text-[#6E6E73] mt-2 line-clamp-2">{doc.bio}</p>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedDoctorIdForBooking(doc.id);
                      setIsBookingOpen(true);
                    }}
                    className="w-full py-2 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-xl shadow transition-all mt-3"
                  >
                    Book with {doc.name.split(' ')[1]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CUSTOMER REVIEWS */}
      <section id="pro-reviews" className="py-20 bg-white border-t border-[#E5E5EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-800">
              Verified Feedback
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
              Customer Reviews & Experiences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((r) => (
              <div key={r.id} className="bg-[#F9F9FB] p-6 rounded-2xl border border-[#E5E5EA] space-y-3">
                <div className="flex items-center space-x-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-[#6E6E73] italic">"{r.text}"</p>
                <div className="pt-2 border-t border-[#E5E5EA] flex justify-between text-[11px]">
                  <span className="font-bold text-[#111111]">{r.patientName}</span>
                  <span className="text-teal-700 font-bold">{r.verifiedSource} Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DENTAL BLOGS */}
      <section id="pro-blogs" className="py-20 bg-[#F9F9FB] border-t border-[#E5E5EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-800">
              Patient Education
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111]">
              Oral Health & Dental Blogs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.slice(0, 3).map((b) => (
              <div key={b.id} className="bg-white rounded-2xl overflow-hidden border border-[#E5E5EA] flex flex-col justify-between hover:shadow-lg transition-all">
                <div className="h-44 overflow-hidden">
                  <img src={b.imageUrl} alt={b.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 space-y-2">
                  <div className="text-[10px] font-bold text-teal-700 uppercase">{b.category}</div>
                  <h4 className="font-serif font-bold text-base text-[#111111] line-clamp-2">{b.title}</h4>
                  <p className="text-xs text-[#6E6E73] line-clamp-2">{b.summary}</p>
                </div>
                <div className="p-5 pt-0 text-xs text-[#6E6E73] border-t border-[#E5E5EA] flex justify-between items-center">
                  <span>{b.authorDoctor}</span>
                  <span>{b.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-14 bg-white border-t border-[#E5E5EA] text-xs text-[#6E6E73]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="font-serif font-bold text-lg text-[#111111]">
              Hope Dental Hospital & Wellness Centre
            </div>
            <p>Sadrauna, Near Main Market, Mohan Road, Lucknow, UP 226009 • Helpline: {HOSPITAL_INFO.phone}</p>
          </div>

          <div className="flex items-center space-x-3">
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
