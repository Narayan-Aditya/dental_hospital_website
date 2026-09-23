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
  Gem,
  BookOpen,
  ChevronRight,
  Building
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { HOSPITAL_INFO } from '../../data/mockData';
import { YoutubeIcon, FacebookIcon, GoogleIcon } from '../common/SocialIcons';

export const Concept2Luxury: React.FC = () => {
  const { 
    language, 
    doctors, 
    blogs, 
    reviews,
    setIsBookingOpen, 
    setSelectedTreatmentIdForBooking,
    setSelectedDoctorIdForBooking 
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
                Sadrauna, Lucknow • Aesthetic Center
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8 text-xs font-semibold uppercase tracking-widest text-slate-300">
            <a href="#luxe-about" className="hover:text-amber-400 transition-colors">About Hospital</a>
            <a href="#luxe-services" className="hover:text-amber-400 transition-colors">Haute Services</a>
            <a href="#luxe-doctors" className="hover:text-amber-400 transition-colors">Surgeon Faculty</a>
            <a href="#luxe-reviews" className="hover:text-amber-400 transition-colors">Client Reviews</a>
            <a href="#luxe-blogs" className="hover:text-amber-400 transition-colors">Dental Blogs</a>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleBook()}
              className="px-5 py-2.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center space-x-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </header>

      {/* 1. HERO: Luxury Landing */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                <Gem className="w-3.5 h-3.5 text-amber-400" />
                <span>Sadrauna, Lucknow’s Premier Cosmetic Dental Hospital</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                The Architecture of a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-500">
                  Flawless, Radiant Smile.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                Experience bespoke aesthetic dentistry tailored to your unique facial contours. Handcrafted Swiss E-Max porcelain veneers, pain-free single-sitting root canals, and titanium dental implants in an ultra-luxurious private setting.
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
                  <span>Book VIP Appointment (60s)</span>
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

      {/* 2. ABOUT HOSPITAL SECTION */}
      <section id="luxe-about" className="py-20 bg-slate-900 border-y border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
                <Building className="w-3.5 h-3.5 text-amber-400" />
                <span>About Hope Dental Hospital</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Pioneering Painless Dentistry in Sadrauna, Lucknow
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Founded with a mission to eliminate the fear of dentists, Hope Dental Hospital brings together European Class-B 4-tier sterilization, digital computerized apex locators, and master dental surgeons. We have restored over 16,500+ confident smiles across Lucknow.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-semibold text-amber-200">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Single-Sitting Painless RCT</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Swiss Lifetime Implants</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>100% Sterile Protocol</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Ample Parking & AC Lounge</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-950 p-6 rounded-3xl border border-amber-500/30 space-y-4">
              <div className="flex items-center justify-between text-xs text-amber-400 font-bold uppercase">
                <span>Shade Calibration Studio</span>
                <span>Select Radiance</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {shades.map(s => (
                  <button
                    key={s.code}
                    onClick={() => setSelectedShade(s.code as any)}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                      selectedShade === s.code
                        ? 'border-amber-400 bg-amber-500/20 text-white font-bold'
                        : 'border-slate-800 text-slate-400'
                    }`}
                  >
                    <div className="font-bold text-amber-300">{s.code}</div>
                    <div className="text-[10px] line-clamp-1">{s.name}</div>
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-slate-400">
                Customized porcelain ceramics sculpted by master lab technicians for lifelike translucency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT SERVICES HOSPITAL PROVIDES */}
      <section id="luxe-services" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              Services & Treatments
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Clinical Procedures Provided by Hospital
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

                <div className="pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => handleBook(item.id)}
                    className="w-full py-3 bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Book Appointment for this Treatment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DOCTORS DETAILS */}
      <section id="luxe-doctors" className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              Specialist Doctors
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Meet Our Dental Surgeons & Faculty
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
                    Book with {doc.name.split(' ')[1]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CUSTOMER REVIEWS & SOCIAL MEDIA */}
      <section id="luxe-reviews" className="py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              Customer Reviews
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              What Our Patients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((r) => (
              <div key={r.id} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-300 italic">"{r.text}"</p>
                <div className="pt-2 border-t border-slate-800 flex justify-between text-[11px]">
                  <span className="font-bold text-white">{r.patientName}</span>
                  <span className="text-amber-400">{r.verifiedSource} 5★</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DENTAL BLOGS */}
      <section id="luxe-blogs" className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              Oral Health Education
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Dental Care Blogs & Insights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.slice(0, 3).map((b) => (
              <div key={b.id} className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between">
                <div className="h-44 overflow-hidden">
                  <img src={b.imageUrl} alt={b.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 space-y-2">
                  <div className="text-[10px] font-bold text-amber-400 uppercase">{b.category}</div>
                  <h4 className="font-serif font-bold text-base text-white line-clamp-2">{b.title}</h4>
                  <p className="text-xs text-slate-400 line-clamp-2">{b.summary}</p>
                </div>
                <div className="p-5 pt-0 text-xs text-slate-500 border-t border-slate-800/60 flex justify-between items-center">
                  <span>{b.authorDoctor}</span>
                  <span>{b.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
