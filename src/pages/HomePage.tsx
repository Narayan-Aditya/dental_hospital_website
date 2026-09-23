import React from 'react';
import { 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  MapPin, 
  Phone, 
  Layers, 
  Building, 
  ShieldCheck, 
  Stethoscope, 
  BookOpen, 
  Clock,
  Sparkles,
  Award
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HOSPITAL_INFO } from '../data/mockData';

export const HomePage: React.FC = () => {
  const { 
    language, 
    setIsBookingOpen, 
    navigateTo, 
    treatments, 
    doctors, 
    reviews, 
    setSelectedTreatmentIdForBooking,
    setSelectedDoctorIdForBooking 
  } = useApp();

  return (
    <div className="space-y-16 sm:space-y-24 animate-fadeIn">
      {/* 1. HERO SECTION */}
      <section className="pt-6 sm:pt-12 pb-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] sm:text-xs text-slate-800 dark:text-slate-200 font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Sadrauna, Mohan Road, Lucknow</span>
                <span className="text-slate-400">•</span>
                <span className="text-amber-600 dark:text-amber-400 font-bold">4.9★ Google & JustDial</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.14]">
                {language === 'hi' ? (
                  <>
                    आधुनिक दर्द-रहित डेंटल उपचार एवं{' '}
                    <span className="text-teal-700 dark:text-teal-400 italic">
                      सटीक सर्जरी।
                    </span>
                  </>
                ) : (
                  <>
                    Next-Generation Dental Care &{' '}
                    <span className="text-teal-700 dark:text-teal-400 italic">
                      Gentle Surgery.
                    </span>
                  </>
                )}
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                {language === 'hi' 
                  ? 'सदरौना, लखनऊ में हॉस्पिटल-ग्रेड सिंगल-सिटिंग रूट कैनाल, लाइफटाइम वारंटी वाले स्विस डेंटल इम्प्लांट्स, एवं 3D कम्प्यूटर गाइडेड इनविजिबल अलाइनर्स की विश्वस्तरीय सुविधा।'
                  : 'Experience hospital-grade painless dentistry with single-sitting rotary root canals, Swiss dental implants with lifetime warranties, and 3D computer-guided clear aligners in Sadrauna, Lucknow.'
                }
              </p>

              {/* Stats Grid (Mobile Optimized) */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
                <div>
                  <div className="font-serif font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">{HOSPITAL_INFO.stats.patientsTreated}</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">{language === 'hi' ? 'संतुष्ट मरीज' : 'Patients Treated'}</div>
                </div>
                <div>
                  <div className="font-serif font-bold text-xl sm:text-2xl text-teal-700 dark:text-teal-400">100% Painless</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">{language === 'hi' ? 'सुन्न तकनीक' : 'Numbing Tech'}</div>
                </div>
                <div>
                  <div className="font-serif font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">Class-B</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">{language === 'hi' ? 'स्टरलाइजेशन' : 'Sterilization'}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500 hover:from-teal-700 hover:to-emerald-600 text-white font-bold text-sm rounded-2xl shadow-xl shadow-teal-600/25 transition-all flex items-center justify-center space-x-2 active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'hi' ? 'अपॉइंटमेंट बुक करें (60s)' : 'Reserve Appointment (60s)'}</span>
                </button>
                <button
                  onClick={() => navigateTo('services')}
                  className="w-full sm:w-auto px-6 py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm rounded-2xl border border-slate-200 dark:border-slate-800 transition-all flex items-center justify-center space-x-2 text-center active:scale-95"
                >
                  <span>{language === 'hi' ? 'सभी उपचार देखें' : 'Explore Treatments'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 dark:border-slate-800 bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Consultation Suite"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex flex-col justify-end p-5 sm:p-6 text-white">
                  <span className="text-xs font-bold text-teal-400">Sadrauna Clinic</span>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-white">Hope Dental Hospital & Wellness Centre</h3>
                  <p className="text-xs text-slate-300">Mohan Road, Lucknow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE HOPE DENTAL (Feature Badges) */}
      <section className="bg-slate-50 dark:bg-slate-900/60 py-12 sm:py-16 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-slate-900 dark:text-white text-base">
                {language === 'hi' ? '100% स्टरलाइज्ड क्लीनिक' : 'Class-B Autoclave'}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'hi' 
                  ? 'यूरोपीय मानक 4-स्तरीय स्टरलाइजेशन जिससे हर मरीज को सुरक्षित और संक्रमण-मुक्त वातावरण मिले।'
                  : '4-tier medical grade sterilization ensuring zero cross-contamination for every single patient.'
                }
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-slate-900 dark:text-white text-base">
                {language === 'hi' ? 'दर्द-रहित सिंगल RCT' : 'Single-Sitting Rotary RCT'}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'hi' 
                  ? 'आधुनिक रोटरी एंडोडॉन्टिक्स और एपैक्स लोकेटर तकनीक से केवल 30-45 मिनट में रूट कैनाल पूरा।'
                  : 'Painless motorized root canal completed comfortably in 30-45 minutes with Swiss precision.'
                }
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-slate-900 dark:text-white text-base">
                {language === 'hi' ? 'स्विस डेंटल इम्प्लांट्स' : 'Swiss Implants Warranty'}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'hi' 
                  ? 'लाइफटाइम वारंटी वाले प्रीमियम टाइटेनियम और जिरकोनिया इम्प्लांट्स प्राकृतिक चबाने की क्षमता के लिए।'
                  : 'Genuine titanium implants with lifetime warranties for natural chewing strength and aesthetics.'
                }
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/80 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-slate-900 dark:text-white text-base">
                {language === 'hi' ? 'एमडीएस विशेषज्ञ डॉक्टर्स' : 'MDS Surgeon Faculty'}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'hi' 
                  ? '14+ वर्षों के अनुभवी विशेषज्ञ सर्जनों की टीम द्वारा व्यक्तिगत क्लीनिकल परामर्श।'
                  : 'Super-specialist MDS dental surgeons dedicated to compassionate and gentle treatment.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TREATMENTS PREVIEW TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
              <span>{language === 'hi' ? 'मुख्य सेवाएं' : 'Key Dental Services'}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'विश्वस्तरीय दंत चिकित्सा सेवाएं' : 'Clinical Treatments & Specialities'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              {language === 'hi' 
                ? 'सदरौना में अत्याधुनिक डिजिटल डायग्नोस्टिक्स और दर्द-रहित तकनीकों के साथ सभी उपचार उपलब्ध।'
                : 'Hospital-grade dental procedures tailored for long-lasting health, beauty, and oral function.'
              }
            </p>
          </div>

          <button
            onClick={() => navigateTo('services')}
            className="inline-flex items-center space-x-2 text-teal-700 dark:text-teal-400 font-bold text-xs sm:text-sm hover:underline"
          >
            <span>{language === 'hi' ? '3D एनाटॉमी एक्सप्लोरर व सभी 12+ उपचार देखें' : 'View 3D Anatomy & All 12+ Services'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {treatments.slice(0, 3).map((t) => (
            <div 
              key={t.id}
              className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between hover:shadow-xl hover:border-teal-500/40 transition-all group"
            >
              <div className="space-y-2.5 sm:space-y-3">
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
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  {t.duration}
                </span>
                <button
                  onClick={() => {
                    setSelectedTreatmentIdForBooking(t.id);
                    setIsBookingOpen(true);
                  }}
                  className="px-3.5 py-1.5 bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center space-x-1 active:scale-95"
                >
                  <span>{language === 'hi' ? 'बुक करें' : 'Book'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DOCTORS SPOTLIGHT */}
      <section className="bg-slate-50 dark:bg-slate-900/70 py-12 sm:py-16 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
                <Stethoscope className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" />
                <span>{language === 'hi' ? 'विशेषज्ञ सर्जन्स' : 'Surgeon Faculty'}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                {language === 'hi' ? 'हमारे विशेषज्ञ डॉक्टर्स' : 'Meet Our Specialist Doctors'}
              </h2>
            </div>

            <button
              onClick={() => navigateTo('doctors')}
              className="inline-flex items-center space-x-2 text-teal-700 dark:text-teal-400 font-bold text-xs sm:text-sm hover:underline"
            >
              <span>{language === 'hi' ? 'सभी विशेषज्ञ डॉक्टर्स देखें' : 'View All Doctors Profiles'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {doctors.map((doc) => (
              <div
                key={doc.id}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover object-top" />
                  <div className="absolute bottom-2.5 left-2.5 bg-teal-700 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {doc.experienceYears}+ Yrs Exp
                  </div>
                </div>

                <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-base text-slate-900 dark:text-white">{doc.name}</h4>
                    <p className="text-xs text-teal-700 dark:text-teal-400 font-semibold">{language === 'hi' ? doc.roleHi : doc.role}</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{doc.qualification}</p>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedDoctorIdForBooking(doc.id);
                      setIsBookingOpen(true);
                    }}
                    className="w-full py-2 bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow transition-all mt-2 active:scale-95"
                  >
                    {language === 'hi' ? 'परामर्श लें' : 'Book Consultation'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PATIENT REVIEWS & LOCATION CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Reviews snippet (6 cols) */}
          <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-teal-800 dark:text-teal-400">
                  Google & JustDial 4.9★
                </span>
                <button
                  onClick={() => navigateTo('reviews')}
                  className="text-xs font-bold text-teal-700 dark:text-teal-400 hover:underline flex items-center space-x-1"
                >
                  <span>{language === 'hi' ? 'सभी समीक्षाएं' : 'View All'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                {language === 'hi' ? 'मरीजों का विश्वास एवं संतुष्टि' : 'What Our Patients Say'}
              </h3>

              <div className="space-y-3 pt-2">
                {reviews.slice(0, 2).map((r) => (
                  <div key={r.id} className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-1.5 shadow-xs">
                    <div className="flex items-center space-x-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 italic">"{r.text}"</p>
                    <div className="text-[11px] font-bold text-slate-900 dark:text-white pt-1">
                      {r.patientName} • <span className="text-teal-700 dark:text-teal-400 font-semibold">{r.verifiedSource} Verified</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sadrauna Contact snippet (6 cols) */}
          <div className="lg:col-span-6 bg-gradient-to-tr from-slate-950 to-teal-950 p-6 sm:p-8 rounded-3xl text-white flex flex-col justify-between space-y-5 border border-slate-800 shadow-xl">
            <div className="space-y-3">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                Sadrauna, Mohan Road Lucknow
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                Hope Dental Hospital & Wellness Centre
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'hi'
                  ? 'सदरौना मुख्य बाजार के निकट, मोहन रोड लखनऊ। आसान पार्किंग, 24x7 इमरजेंसी सहायता और आधुनिक सुविधाएं।'
                  : 'Conveniently located near Sadrauna Main Market on Mohan Road, Lucknow. Easy parking & rapid OPD access.'
                }
              </p>

              <div className="pt-2 space-y-1.5 text-xs text-slate-200">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                  <span className="font-bold">{HOSPITAL_INFO.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Mon – Sat: 9:00 AM – 8:00 PM | Sun: 10:00 AM – 2:00 PM</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full sm:w-auto px-5 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center space-x-1.5 active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>{language === 'hi' ? 'अपॉइंटमेंट बुक करें' : 'Book Appointment'}</span>
              </button>

              <button
                onClick={() => navigateTo('contact')}
                className="w-full sm:w-auto px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 transition-all flex items-center justify-center space-x-1.5 active:scale-95"
              >
                <MapPin className="w-4 h-4 text-teal-400" />
                <span>{language === 'hi' ? 'लोकेशन व पूछताछ फॉर्म' : 'Location & Inquiry'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
