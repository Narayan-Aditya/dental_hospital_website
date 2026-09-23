import React from 'react';
import { 
  Award, 
  Star, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Languages, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Doctor } from '../../types';

export const DoctorsSection: React.FC = () => {
  const { 
    language, 
    doctors, 
    setIsBookingOpen, 
    setSelectedDoctorIdForBooking 
  } = useApp();

  const handleBookDoctor = (doctorId: string) => {
    setSelectedDoctorIdForBooking(doctorId);
    setIsBookingOpen(true);
  };

  return (
    <section id="doctors" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-100/80 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-teal-600" />
            <span>Senior Clinical Specialists</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            {language === 'hi' 
              ? 'मिलिए हमारे अनुभवी दंत चिकित्सकों से' 
              : 'Meet Our Expert Dental Surgeons'
            }
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            {language === 'hi'
              ? 'एमडीएस उपाधि प्राप्त, अंतरराष्ट्रीय स्तर पर प्रमाणित और वर्षों के अनुभव के साथ आपकी मुस्कान की देखभाल।'
              : 'MDS specialists and fellowship holders dedicated to gentle, ethical, and evidence-based oral healthcare in Sadrauna, Lucknow.'
            }
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-slate-50 rounded-3xl border border-slate-200/80 overflow-hidden hover:shadow-2xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Doctor Image Container */}
              <div className="relative h-64 overflow-hidden bg-slate-800">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-slate-900 px-2.5 py-1 rounded-full text-xs font-bold shadow flex items-center space-x-1">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
                  <span>{doctor.rating}</span>
                  <span className="text-[10px] text-slate-400">({doctor.reviewCount})</span>
                </div>

                {/* Experience Badge */}
                <div className="absolute bottom-3 left-3 bg-teal-600/90 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-lg text-[11px] font-bold">
                  {doctor.experienceYears}+ Years Experience
                </div>
              </div>

              {/* Doctor Details Body */}
              <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-teal-600 transition-colors">
                    {language === 'hi' ? doctor.nameHi : doctor.name}
                  </h3>
                  <p className="text-xs text-teal-700 font-semibold mt-0.5">
                    {language === 'hi' ? doctor.roleHi : doctor.role}
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium mt-1 leading-snug">
                    {doctor.qualification}
                  </p>

                  <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    {doctor.bio}
                  </p>
                </div>

                {/* Specialities tags */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {doctor.specialities.slice(0, 3).map((spec, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Availability */}
                  <div className="text-[11px] text-slate-600 flex items-start space-x-1.5 bg-white p-2.5 rounded-xl border border-slate-200 mb-3">
                    <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{doctor.availability}</span>
                  </div>

                  {/* Languages */}
                  <div className="flex items-center space-x-1 text-[11px] text-slate-500 mb-4">
                    <Languages className="w-3.5 h-3.5 text-slate-400" />
                    <span>Speaks: {doctor.languages.join(', ')}</span>
                  </div>

                  {/* Book Button */}
                  <button
                    onClick={() => handleBookDoctor(doctor.id)}
                    className="w-full py-2.5 bg-slate-900 hover:bg-teal-600 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center space-x-1.5 group-hover:bg-teal-600"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book with {doctor.name.split(' ')[1]}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
