import React, { useState } from 'react';
import { 
  Stethoscope, 
  Award, 
  Star, 
  Calendar, 
  Building2
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const DoctorsPage: React.FC = () => {
  const { doctors, setIsBookingOpen, setSelectedDoctorIdForBooking } = useApp();
  const [selectedDept, setSelectedDept] = useState<string>('all');

  const departments = [
    { id: 'all', label: 'All Specialists' },
    { id: 'Cosmetic Dentistry & Smile Makeover', label: 'Cosmetic & Restorative' },
    { id: 'Dental Implantology & Full-Arch Rehab', label: 'Implantology' },
    { id: 'Oral & Maxillofacial Surgery', label: 'Maxillofacial Surgery' },
    { id: 'Orthodontics & Clear Aligners', label: 'Invisalign & Orthodontics' },
    { id: 'Endodontics (Root Canal)', label: 'Microscopic RCT' },
    { id: 'Periodontics & Laser Surgery', label: 'Laser Gum Care' },
    { id: 'Prosthodontics & CAD/CAM Lab', label: 'Prosthodontics' }
  ];

  const filteredDoctors = doctors.filter(d => {
    if (selectedDept === 'all') return true;
    return d.department === selectedDept;
  });

  const handleBookDoctor = (docId: string) => {
    setSelectedDoctorIdForBooking(docId);
    setIsBookingOpen(true);
  };

  return (
    <div className="space-y-16 sm:space-y-20 animate-fadeIn py-6 sm:py-10">
      
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#07192b] via-[#091e34] to-[#0c2b4c] text-white rounded-3xl p-6 sm:p-12 border border-teal-900/40 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40 text-xs font-bold uppercase tracking-wider">
              <Stethoscope className="w-3.5 h-3.5 text-teal-400" />
              <span>TEAM HOPE DENTAL · MDS CLINICAL FACULTY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Meet the Specialist Dentists in Lucknow
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              One of the strongest pillars behind the reputation of Hope Dental Hospital & Wellness Centre is the clinical mastery within its medical faculty. Medically directed by Dr. Himangi Dubey (BDS, MDS – KGMU Lucknow Alumna, former Senior Resident KGMU, Head of Department Ajanta Hospital) alongside Emeritus Senior Prosthodontist Dr. M. S. Bhoj at our Sadrauna Lucknow campus.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="px-6 py-3.5 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-xl transition-all flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Priority Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEPARTMENT FILTER TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center space-x-2 overflow-x-auto pb-2">
          {departments.map(dept => (
            <button
              key={dept.id}
              onClick={() => setSelectedDept(dept.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedDept === dept.id
                  ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400'
              }`}
            >
              {dept.label}
            </button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map(doc => (
            <div 
              key={doc.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 hover:border-teal-500/40 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-20 h-24 rounded-2xl object-cover border-2 border-teal-500 shadow-md shrink-0"
                    onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                  />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60 block w-fit mb-1">
                      {doc.designation || 'Consultant Specialist'}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {doc.name}
                    </h3>
                    <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 mt-0.5">
                      {doc.role}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      {doc.qualification}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs py-2 border-y border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                  <span className="font-semibold text-[#091e34] dark:text-white">
                    {doc.experienceYears}+ Years Experience
                  </span>
                  <span className="flex items-center font-bold text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current mr-1" />
                    {doc.rating} ({doc.reviewCount}+ reviews)
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {doc.bio}
                </p>

                {/* Accolades */}
                <div className="space-y-1 text-[11px] text-slate-500">
                  {doc.accolades.slice(0, 2).map((acc, i) => (
                    <div key={i} className="flex items-center space-x-1.5">
                      <Award className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                      <span className="truncate">{acc}</span>
                    </div>
                  ))}
                </div>

                {/* OPD Schedule & Consultation Fee */}
                <div className="p-3 rounded-2xl bg-teal-50/60 dark:bg-teal-950/20 border border-teal-100 dark:border-teal-900/40 text-[11px] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">OPD Timings:</span>
                    <span className="font-bold text-slate-900 dark:text-white truncate ml-2 text-right">{doc.opdTimings || '10:00 AM – 8:00 PM'}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Available:</span>
                    <span className="font-semibold text-teal-700 dark:text-teal-300 truncate ml-2 text-right">{doc.availableDays || 'Mon – Sat'}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-teal-200/40 dark:border-teal-800/40">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Consultation Fee:</span>
                    <span className="font-bold text-emerald-700 dark:text-emerald-400">
                      ₹{doc.consultationFee || 500} <span className="text-[10px] font-normal text-slate-500">(Online ₹{doc.virtualFee || 300})</span>
                    </span>
                  </div>
                  {doc.registrationNo && (
                    <div className="text-[10px] text-slate-400 pt-0.5 flex justify-between">
                      <span>Council Reg. No:</span>
                      <span className="font-mono font-medium text-slate-600 dark:text-slate-300">{doc.registrationNo}</span>
                    </div>
                  )}
                </div>

                {/* Branch Venue */}
                <div className="text-[11px] text-slate-500 flex items-center pt-1">
                  <Building2 className="w-3.5 h-3.5 mr-1 text-slate-400 shrink-0" />
                  <span className="truncate">{doc.primaryBranch}</span>
                </div>
              </div>

              <div className="pt-5 border-t border-slate-100 dark:border-slate-800 mt-4">
                <button
                  onClick={() => handleBookDoctor(doc.id)}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center space-x-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Appointment with {doc.name.split(' ')[1]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
