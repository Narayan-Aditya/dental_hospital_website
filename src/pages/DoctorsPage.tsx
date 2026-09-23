import React from 'react';
import { 
  Stethoscope, 
  Award, 
  Clock, 
  CheckCircle2, 
  Star, 
  Calendar, 
  Phone,
  Languages,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HOSPITAL_INFO } from '../data/mockData';

export const DoctorsPage: React.FC = () => {
  const { 
    language, 
    doctors, 
    setIsBookingOpen, 
    setSelectedDoctorIdForBooking 
  } = useApp();

  const handleBookDoctor = (docId: string) => {
    setSelectedDoctorIdForBooking(docId);
    setIsBookingOpen(true);
  };

  return (
    <div className="space-y-16 sm:space-y-20 animate-fadeIn py-6 sm:py-10">
      {/* 1. DOCTORS PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-slate-900 via-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-2xl space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold uppercase tracking-wider">
            <Stethoscope className="w-3.5 h-3.5 text-teal-400" />
            <span>{language === 'hi' ? 'विशेषज्ञ डॉक्टर्स' : 'Specialist Surgeon Faculty'}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            {language === 'hi'
              ? 'हमारे एमडीएस डिग्री धारक एवं अनुभवी सर्जन'
              : 'Our Team of MDS Dental Surgeons & Specialists'
            }
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {language === 'hi'
              ? 'सदरौना, लखनऊ में प्रत्येक दंत प्रक्रिया संबंधित सुपर-स्पेशलिस्ट डॉक्टर द्वारा की जाती है, जिससे पूर्ण सुरक्षा एवं उच्चतम गुणवत्ता सुनिश्चित होती है।'
              : 'At Hope Dental Hospital Sadrauna, every procedure is performed by qualified MDS surgeons specializing in root canal therapy, orthodontics, oral surgery, and pediatric smile care.'
            }
          </p>
        </div>
      </section>

      {/* 2. DOCTORS LISTING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 hover:shadow-xl hover:border-teal-500/40 transition-all justify-between"
            >
              {/* Doctor Image & Badge */}
              <div className="sm:w-44 flex flex-col items-center sm:items-start shrink-0">
                <div className="relative w-36 h-44 sm:w-40 sm:h-52 rounded-2xl overflow-hidden bg-slate-900 shadow-md">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-2 left-2 bg-teal-700 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    {doc.experienceYears}+ Yrs Exp
                  </div>
                </div>

                <div className="mt-3 flex items-center space-x-1 text-amber-500 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{doc.rating}★</span>
                  <span className="text-slate-400 font-normal">({doc.reviewCount}+ reviews)</span>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                      {doc.name}
                    </h3>
                    <div className="text-xs font-bold text-teal-700 dark:text-teal-400 mt-0.5">
                      {language === 'hi' ? doc.roleHi : doc.role}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                      {doc.qualification}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {doc.bio}
                  </p>

                  {/* Specialities pills */}
                  <div className="pt-1 flex flex-wrap gap-1.5">
                    {doc.specialities.map((spec, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Availability */}
                  <div className="pt-2 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                      <span>{doc.availability}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Languages className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                      <span>{doc.languages.join(', ')}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => handleBookDoctor(doc.id)}
                    className="w-full py-3 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-emerald-600 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 active:scale-95"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{language === 'hi' ? `डॉ. ${doc.name.split(' ')[1]} से परामर्श लें` : `Book Appointment with ${doc.name}`}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CLINICAL STANDARDS NOTE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="font-serif font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
              {language === 'hi' ? 'क्या आपके पास कोई एक्स-रे या रिपोर्ट है?' : 'Have Existing Dental X-Rays or Reports?'}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {language === 'hi' 
                ? 'अपॉइंटमेंट बुक करते समय आप अपनी रिपोर्ट जोड़ सकते हैं, जिससे हमारे डॉक्टर्स पहले से तैयारी कर सकें।'
                : 'You can attach previous OPG / RVG x-rays during online slot booking to get personalized advice.'
              }
            </p>
          </div>

          <button
            onClick={() => setIsBookingOpen(true)}
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 dark:bg-slate-750 dark:hover:bg-slate-700 text-white font-bold text-xs rounded-xl shadow transition-all active:scale-95 whitespace-nowrap"
          >
            {language === 'hi' ? 'ऑनलाइन कंसल्टेशन बुक करें' : 'Book Online Consultation'}
          </button>
        </div>
      </section>
    </div>
  );
};
