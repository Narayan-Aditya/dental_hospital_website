import React from 'react';
import { 
  Phone, 
  Clock 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Footer: React.FC = () => {
  const { 
    hospitalInfo, 
    blogs,
    navigateTo, 
    setIsBookingOpen, 
    setActiveBlogModal
  } = useApp();

  return (
    <footer className="text-slate-400 text-xs transition-colors">
      
      {/* 1. TOP STRIP: EXACT FMS 4 WHITE CARDS WITH GOLD TOP BORDER */}
      <div className="bg-[#f8fafc] dark:bg-[#06101c] py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Card 1: Flagship Hospital */}
            <div className="bg-white dark:bg-[#0c1f33] p-5 rounded-b-xl border-x border-b border-slate-200 dark:border-slate-800 border-t-2 border-t-[#f5900d] shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white leading-snug">
                Hope Dental Hospital - Advanced Dental Implant Clinic
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Door No. 1779 Near Bramha Dev Mandir, Sadrauna Road, Para Rd, Munnu Khera, Lucknow – 226011
              </p>
            </div>

            {/* Card 2: Laser Pavilion */}
            <div className="bg-white dark:bg-[#0c1f33] p-5 rounded-b-xl border-x border-b border-slate-200 dark:border-slate-800 border-t-2 border-t-[#f5900d] shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white leading-snug">
                Hope Biolase Laser & Periodontics Suite
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Ground Floor Clinical Pavilion, Sadrauna Road, Lucknow – Scalpel-free hydrokinetic laser therapies.
              </p>
            </div>

            {/* Card 3: Cosmetic Wing */}
            <div className="bg-white dark:bg-[#0c1f33] p-5 rounded-b-xl border-x border-b border-slate-200 dark:border-slate-800 border-t-2 border-t-[#f5900d] shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white leading-snug">
                Hope Aesthetic Dentistry & Clear Aligner Studio
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                1st Floor Cosmetic & Smile Design Wing, Sadrauna Road, Lucknow – Porcelain veneers & invisible braces.
              </p>
            </div>

            {/* Card 4: Endodontic & Emergency */}
            <div className="bg-white dark:bg-[#0c1f33] p-5 rounded-b-xl border-x border-b border-slate-200 dark:border-slate-800 border-t-2 border-t-[#f5900d] shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white leading-snug">
                Hope Microscopic Endodontics & 24/7 Dental Emergency
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                Para Road, Mohan Road, Lucknow – 226011. Single-visit root canal treatments & urgent trauma care.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER BODY (DEEP NAVY #081726) */}
      <div className="bg-[#081726] text-slate-400 border-t border-slate-800/80 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Col 1: Brand Logo & Description (5 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center space-x-3">
                {/* Crest SVG */}
                <div className="w-12 h-12 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
                    <g fill="#c59b27" opacity="0.85">
                      <path d="M 22 28 C 16 35, 14 48, 18 60 C 22 72, 32 82, 45 88 C 43 85, 33 78, 28 68 C 24 58, 24 45, 27 34 Z" fill="#c59b27" />
                      <path d="M 78 28 C 84 35, 86 48, 82 60 C 78 72, 68 82, 55 88 C 57 85, 67 78, 72 68 C 76 58, 76 45, 73 34 Z" fill="#c59b27" />
                    </g>
                    <path d="M 36 22 L 42 27 L 50 18 L 58 27 L 64 22 L 62 30 L 38 30 Z" fill="#c59b27" />
                    <path d="M 28 32 C 28 32, 50 30, 50 30 C 50 30, 72 32, 72 32 C 72 55, 64 74, 50 82 C 36 74, 28 55, 28 32 Z" fill="#040c14" stroke="#c59b27" strokeWidth="2.5" />
                    <path d="M 42 42 C 42 38, 46 37, 50 37 C 54 37, 58 38, 58 42 C 58 46, 57 52, 57 58 C 57 65, 53 68, 52 70 C 51 68, 50 63, 50 58 C 50 63, 49 68, 48 70 C 47 68, 43 65, 43 58 C 43 52, 42 46, 42 42 Z" fill="#ffffff" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#f5900d] tracking-wider uppercase">
                    HOPE DENTAL
                  </h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    Face Make Over & Smile Clinics
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
                Advanced dental care backed by specialist expertise, modern technology and a dedicated standalone dental hospital campus in Sadrauna, Para Road, Lucknow.
              </p>

              <div className="space-y-1.5 text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-[#f5900d]" />
                  <span className="font-bold text-white">{hospitalInfo.phone}</span>
                  <span>/</span>
                  <span>{hospitalInfo.altPhone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-3.5 h-3.5 text-[#f5900d]" />
                  <span>Mon–Sun: 10:00 AM–8:00 PM</span>
                </div>
              </div>
            </div>

            {/* Col 2: Book Your Visit (4 cols) matching FMS center column */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#f5900d] block">
                BOOK YOUR VISIT
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Book an appointment
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Speak with the Hope Dental team about your treatment, consultation or dental tourism requirements.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="px-6 py-2.5 rounded-md bg-[#e8b96a] hover:bg-[#d4a359] text-black font-extrabold text-xs tracking-wider uppercase shadow-md active:scale-98 transition-all"
                >
                  BOOK AN APPOINTMENT
                </button>
              </div>
            </div>

            {/* Col 3: Follow Us & Quick Links (4 cols) matching FMS right column */}
            <div className="lg:col-span-4 space-y-4">
              {/* Follow Us */}
              <div>
                <h4 className="text-sm font-bold text-white mb-2">
                  Follow Us
                </h4>
                <div className="flex items-center space-x-2">
                  <a
                    href={hospitalInfo.socialLinks?.facebook || 'https://www.facebook.com/p/Hope-Dental-Hospital-and-Wellness-Center-100083540701821/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded border border-slate-700 hover:border-[#f5900d] bg-[#0c1f33] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                    title="Facebook"
                  >
                    <span className="font-bold text-xs">f</span>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded border border-slate-700 hover:border-[#f5900d] bg-[#0c1f33] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                    title="X / Twitter"
                  >
                    <span className="font-bold text-xs">𝕏</span>
                  </a>
                  <a
                    href={hospitalInfo.socialLinks?.youtube || 'https://youtube.com/@drhimangidubey_hopedental?si=dICNBMYUw_9KpXfp'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded border border-slate-700 hover:border-[#f5900d] bg-[#0c1f33] text-slate-300 hover:text-[#FF0000] flex items-center justify-center transition-colors"
                    title="YouTube"
                  >
                    <span className="text-xs">▶</span>
                  </a>
                  <a
                    href={hospitalInfo.socialLinks?.google || 'https://share.google/M13VNXGp52dAKKUWl'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded border border-slate-700 hover:border-[#f5900d] bg-[#0c1f33] text-slate-300 hover:text-[#4285F4] flex items-center justify-center transition-colors"
                    title="Google 5.0 Star Profile"
                  >
                    <span className="font-bold text-xs">G</span>
                  </a>
                  <a
                    href={hospitalInfo.socialLinks?.justdial || 'https://jsdl.in/DT-39XTVYSNSB8'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded border border-slate-700 hover:border-[#f5900d] bg-[#0c1f33] text-slate-300 hover:text-[#ff6a00] flex items-center justify-center transition-colors"
                    title="Justdial 5.0 Star"
                  >
                    <span className="font-black text-[10px] text-[#ff6a00]">JD</span>
                  </a>
                  <a
                    href={hospitalInfo.socialLinks?.whatsapp || 'https://wa.me/917905287870'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded border border-slate-700 hover:border-[#f5900d] bg-[#0c1f33] text-slate-300 hover:text-[#25D366] flex items-center justify-center transition-colors"
                    title="WhatsApp"
                  >
                    <span className="font-bold text-xs">💬</span>
                  </a>
                </div>
              </div>

              {/* Quick Links in 2 Columns */}
              <div>
                <h4 className="text-sm font-bold text-white mb-2">
                  Quick Links
                </h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-slate-400">
                  <button onClick={() => navigateTo('about')} className="text-left hover:text-[#f5900d] transition-colors">
                    Why Hope?
                  </button>
                  <button onClick={() => navigateTo('about')} className="text-left hover:text-[#f5900d] transition-colors">
                    FAQs
                  </button>
                  <button onClick={() => navigateTo('about')} className="text-left hover:text-[#f5900d] transition-colors">
                    Awards
                  </button>
                  <button onClick={() => navigateTo('tourism')} className="text-left hover:text-[#f5900d] transition-colors">
                    Dental Tourism
                  </button>
                  <button onClick={() => navigateTo('about')} className="text-left hover:text-[#f5900d] transition-colors">
                    In-House Dental Lab
                  </button>
                  <button onClick={() => navigateTo('reviews')} className="text-left hover:text-[#f5900d] transition-colors">
                    Testimonials
                  </button>
                  <button onClick={() => navigateTo('services')} className="text-left hover:text-[#f5900d] transition-colors">
                    Photo Gallery
                  </button>
                  <button onClick={() => navigateTo('contact')} className="text-left hover:text-[#f5900d] transition-colors">
                    Contact Us
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* 3. LATEST BLOGS CAROUSEL / GRID STRIP IN FOOTER */}
          <div className="pt-8 border-t border-slate-800/80">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-black text-white tracking-wider uppercase">
                LATEST BLOGS
              </h4>
              <button 
                onClick={() => navigateTo('blogs')}
                className="text-xs font-bold text-[#f5900d] hover:underline flex items-center space-x-1"
              >
                <span>READ MORE</span>
                <span>→</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {blogs.slice(0, 4).map((b, idx) => (
                <div 
                  key={b.id || idx}
                  onClick={() => setActiveBlogModal(b)}
                  className="bg-[#0c1f33] hover:bg-[#122b46] border border-slate-800 rounded-lg p-3 cursor-pointer transition-all flex items-start space-x-3 group"
                >
                  <div className="w-16 h-14 rounded overflow-hidden bg-slate-800 shrink-0">
                    <img 
                      src={b.imageUrl || '/images/hope/real_clinic_7_.jpg'} 
                      alt={b.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-[#f5900d] block">
                      {b.date || '10 SEPT 2026'}
                    </span>
                    <h5 className="text-xs font-bold text-white group-hover:text-[#f5900d] transition-colors line-clamp-2 leading-tight">
                      {b.title}
                    </h5>
                    <span className="text-[10px] text-slate-400 group-hover:text-white transition-colors block">
                      Read More
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. COPYRIGHT BAR */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
            <div>
              Copyright {new Date().getFullYear()} © All rights Reserved.
            </div>
            <div>
              Design by <span className="text-slate-300 font-semibold">Team Hope</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
