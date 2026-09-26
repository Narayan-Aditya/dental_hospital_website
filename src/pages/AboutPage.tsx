import React from 'react';
import { 
  Building2, 
  Award, 
  CheckCircle2, 
  Calendar, 
  ArrowRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AboutPage: React.FC = () => {
  const { verticals, awards, setIsBookingOpen, navigateTo } = useApp();

  return (
    <div className="space-y-16 sm:space-y-20 animate-fadeIn py-6 sm:py-10">
      
      {/* 1. ABOUT HEADER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#06131f] via-[#081726] to-[#0b1f3a] text-white rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#f5900d]/20 text-[#f5900d] border border-[#f5900d]/40 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-[#f5900d]" />
              <span>ABOUT HOPE DENTAL HOSPITAL & WELLNESS CENTRE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Uttar Pradesh's Premier NABH-Accredited Dental & Wellness Institution
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Founded and medically directed by Dr. Himangi Dubey (BDS, MDS – KGMU Lucknow Alumna, former Senior Resident KGMU, and Head of Department at Ajanta Hospital) alongside Emeritus Senior Prosthodontist Dr. M. S. Bhoj, Hope Dental Hospital & Wellness Centre operates as an advanced standalone hospital campus in Sadrauna, Lucknow, featuring 5 specialized clinical wings under one roof (Implantology, Biolase Laser Dentistry, Microscopic Endodontics, TMJ/Splint Therapy, and Pediatric Dental Care).
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
                onClick={() => navigateTo('clinics')}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm rounded-2xl border border-white/20 transition-all flex items-center space-x-2"
              >
                <span>Explore Hospital Clinical Wings</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS & KEY MILESTONES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
            <span className="text-3xl sm:text-4xl font-black text-[#0b1f3a] dark:text-white block">5.0 ★</span>
            <span className="text-xs font-bold text-[#f5900d] uppercase tracking-wider block mt-1">Google & Justdial</span>
            <span className="text-[11px] text-slate-500 block mt-0.5">300+ Verified 5-Star Reviews</span>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
            <span className="text-3xl sm:text-4xl font-black text-[#f5900d] block">5</span>
            <span className="text-xs font-bold text-[#f5900d] uppercase tracking-wider block mt-1">Specialized Suites</span>
            <span className="text-[11px] text-slate-500 block mt-0.5">Under One Roof in Sadrauna, Lucknow</span>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
            <span className="text-3xl sm:text-4xl font-black text-[#0b1f3a] dark:text-white block">10+</span>
            <span className="text-xs font-bold text-[#f5900d] uppercase tracking-wider block mt-1">MDS Specialists</span>
            <span className="text-[11px] text-slate-500 block mt-0.5">KGMU Trained Clinicians</span>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
            <span className="text-3xl sm:text-4xl font-black text-[#0b1f3a] dark:text-white block">100%</span>
            <span className="text-xs font-bold text-[#f5900d] uppercase tracking-wider block mt-1">Hospital Sterilization</span>
            <span className="text-[11px] text-slate-500 block mt-0.5">Single Lucknow Hospital Campus</span>
          </div>
        </div>
      </section>

      {/* 3. THE STORY & MISSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#f5900d]">
              OUR PHILOSOPHY & LEADERSHIP
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0b1f3a] dark:text-white">
              Why Clinical Judgement Matters More Than Interiors
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              At Hope Dental Hospital, we believe that world-class dental healthcare is defined by the depth of diagnostic experience behind every chair. Guided by Dr. Himangi Dubey and Dr. M. S. Bhoj—bringing decades of clinical mastery in microscopic periodontics, computer-guided dental implants, and full-mouth rehabilitations.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Having planned and executed thousands of challenging cases, our leadership looks beyond individual procedures to assess the entire biological, functional, and facial aesthetic harmony.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#f5900d] shrink-0" />
                <span className="font-semibold text-slate-800 dark:text-slate-200">Uniform 7-step Class B Autoclave hospital-grade sterilisation protocol</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#f5900d] shrink-0" />
                <span className="font-semibold text-slate-800 dark:text-slate-200">Centralized ultra-low radiation digital 3D CBCT & intraoral scanning</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#f5900d] shrink-0" />
                <span className="font-semibold text-slate-800 dark:text-slate-200">Official warranties with verified titanium certificates</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-slate-100 dark:bg-slate-800/60 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Hope Dental Hospital Leadership Message
              </h3>
              <blockquote className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed border-l-2 border-[#f5900d] pl-4">
                "We founded Hope Dental Hospital & Wellness Centre with a single vision: to bring patient-first, world-class dental healthcare to Uttar Pradesh with zero compromise on sterilisation, surgical precision, and ethical transparency. From pain-free microscopic root canals to full-arch guided implant reconstructions, every treatment at Hope Dental is crafted with compassion and scientific excellence."
              </blockquote>
              <div className="flex items-center space-x-3 pt-2">
                <img 
                  src="./doctors/dr-shailaja-reddy.webp" 
                  alt="Dr. Himangi Dubey" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#f5900d]"
                />
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Dr. Himangi Dubey</div>
                  <div className="text-[11px] text-[#f5900d] font-semibold">Founder & Medical Director, Hope Dental Hospital</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE FIVE VERTICALS DETAILED */}
      <section className="bg-slate-100/70 dark:bg-slate-950/60 py-12 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#f5900d]">
              THE COMPLETE ECOSYSTEM
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0b1f3a] dark:text-white">
              The Five Verticals of Hope Dental Hospital
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              How one healthcare institution serves every segment of society without diluting specialty rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticals.map(vert => (
              <div 
                key={vert.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#f5900d]">
                      {vert.num}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#f5900d]/10 text-[#f5900d] border border-[#f5900d]/20">
                      {vert.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {vert.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#f5900d]">
                    {vert.tagline}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {vert.description}
                  </p>

                  <div className="pt-2 space-y-1.5 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500">
                    {vert.highlights.map((h, i) => (
                      <div key={i} className="flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f5900d]"></span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AWARDS & ACCREDITATIONS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#f5900d]">
            70+ NATIONAL & INTERNATIONAL HONORS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0b1f3a] dark:text-white">
            Awards & Accreditations
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Audited against rigorous national and international healthcare standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map(aw => (
            <div 
              key={aw.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-50 dark:bg-amber-950/30 text-[#f5900d] border border-[#f5900d]/20">
                  {aw.year}
                </span>
                <Award className="w-5 h-5 text-[#f5900d]" />
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {aw.title}
              </h3>

              <div className="text-xs font-semibold text-[#f5900d]">
                {aw.organization} ({aw.location})
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {aw.highlight}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
