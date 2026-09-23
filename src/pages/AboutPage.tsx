import React from 'react';
import { 
  Building, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Calendar, 
  Phone, 
  Sparkles, 
  HeartHandshake, 
  Microscope, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HOSPITAL_INFO } from '../data/mockData';

export const AboutPage: React.FC = () => {
  const { language, setIsBookingOpen, navigateTo } = useApp();

  return (
    <div className="space-y-16 sm:space-y-20 animate-fadeIn py-6 sm:py-10">
      {/* 1. ABOUT HEADER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-slate-900 via-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold uppercase tracking-wider">
              <Building className="w-3.5 h-3.5 text-teal-400" />
              <span>{language === 'hi' ? 'अस्पताल परिचय' : 'About Hope Dental Hospital'}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              {language === 'hi'
                ? 'सहानुभूतिपूर्ण दंत चिकित्सा एवं यूरोपीय क्लीनिकल मानक'
                : 'Empathetic Healthcare & European Clinical Excellence'
              }
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {language === 'hi'
                ? 'सदरौना, मोहन रोड लखनऊ में स्थापित होप डेंटल हॉस्पिटल एवं वेलनेस सेंटर प्रमाण-आधारित, सुरक्षित और दर्द-मुक्त दंत चिकित्सा के लिए प्रतिबद्ध है।'
                : 'Founded in Sadrauna, Mohan Road Lucknow, Hope Dental Hospital & Wellness Centre is committed to gentle, evidence-based, and zero-infection clinical dentistry.'
              }
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center space-x-2 active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>{language === 'hi' ? 'अपॉइंटमेंट बुक करें' : 'Book Appointment'}</span>
              </button>

              <button
                onClick={() => navigateTo('doctors')}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 transition-all flex items-center space-x-2 active:scale-95"
              >
                <span>{language === 'hi' ? 'हमारे डॉक्टर्स देखें' : 'Meet Our Specialists'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE CLINICAL PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-teal-800 dark:text-teal-400">
                Hospital Philosophy
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                {language === 'hi'
                  ? 'मरीज की सुरक्षा और दर्द-मुक्त अनुभव हमारी सर्वोच्च प्राथमिकता'
                  : 'Patient Safety & Painless Comfort at the Core'
                }
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'hi'
                ? 'होप डेंटल हॉस्पिटल में हम मानते हैं कि दंत चिकित्सा कभी भी डरावनी या दर्दनाक नहीं होनी चाहिए। हमारी उन्नत स्थानीय एनेस्थीसिया डिलीवरी, रोटरी मोटर्स और डिजिटल सीबीसीटी डायग्नोस्टिक्स यह सुनिश्चित करते हैं कि आपको न्यूनतम समय में अधिकतम आराम मिले।'
                : 'At Hope Dental Hospital, we believe dental treatments should never be traumatic. Our computerized painless local anesthesia delivery, rotary micro-motors, and digital 3D imaging ensure precise treatment with complete peace of mind.'
              }
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-bold text-slate-800 dark:text-slate-200">
              <div className="flex items-center space-x-2 p-3 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>14+ {language === 'hi' ? 'वर्ष क्लीनिकल अनुभव' : 'Years Experience'}</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>ISO 9001:2015 {language === 'hi' ? 'प्रमाणित' : 'Certified'}</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>100% {language === 'hi' ? 'स्टरलाइज्ड उपकरण' : 'Sterile Instruments'}</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>{language === 'hi' ? 'बाल चिकित्सा कक्ष' : 'Kids Friendly Operatory'}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between text-xs font-bold text-teal-800 dark:text-teal-300 uppercase">
              <span>Chief Surgeon's Statement</span>
              <span>Sadrauna OPD</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
              "{language === 'hi'
                ? 'हमारा उद्देश्य केवल दांतों का इलाज करना नहीं है, बल्कि हर मरीज को जीवनभर स्वस्थ और आत्मविश्वासी मुस्कान प्रदान करना है। हमने सदरौना में बड़े मेट्रो शहरों जैसी सुविधाएं उपलब्ध कराई हैं ताकि आपको इलाज के लिए दूर न जाना पड़े।'
                : 'Our goal is not just fixing teeth, but giving every patient a healthy, confident smile that lasts a lifetime. We brought metro-grade clinical dental infrastructure right to Sadrauna, Lucknow.'
              }"
            </p>
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs">
              <div>
                <div className="font-bold text-slate-900 dark:text-white">Dr. Amit Verma & Team</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Chief Dental Surgeons & MDS Faculty</div>
              </div>
              <span className="text-teal-700 dark:text-teal-400 font-bold">Sadrauna Branch</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOSPITAL INFRASTRUCTURE & STERILIZATION */}
      <section className="bg-slate-50 dark:bg-slate-900/60 py-12 sm:py-16 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-800 dark:text-teal-400">
              Technology & Hygiene
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'आधुनिक उपकरण एवं 4-स्तरीय स्वच्छता' : 'Advanced Dental Equipment & 4-Tier Hygiene'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {language === 'hi'
                ? 'अत्याधुनिक चिकित्सा उपकरणों से सुसज्जित हमारा अस्पताल हर मरीज के लिए पूर्ण सुरक्षा की गारंटी देता है।'
                : 'Equipped with the latest diagnostic and therapeutic dental apparatus ensuring flawless outcomes.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                <Microscope className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-white">
                {language === 'hi' ? 'डिजिटल 3D सीबीसीटी स्कैन' : 'Digital 3D CBCT Imaging'}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'hi'
                  ? 'अति-सटीक 3D स्कैन जिससे नसों, जबड़े की हड्डी और दांतों की जड़ों का 100% सटीक विश्लेषण होता है।'
                  : 'Ultra-low radiation high-resolution 3D volumetric scanning for pin-point root and bone diagnostics.'
                }
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-white">
                {language === 'hi' ? 'क्लास-बी ऑटोक्लेव स्टरलाइजेशन' : 'Class-B Vacuum Autoclave'}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'hi'
                  ? 'अस्पताल के हर उपकरण को 134°C पर वैक्यूम ऑटोक्लेव किया जाता है, जिससे बैक्टीरिया और वायरस का पूर्ण खात्मा होता है।'
                  : 'Medical-grade multi-pulse vacuum autoclave sterilizing instruments at 134°C for zero infection.'
                }
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-white">
                {language === 'hi' ? 'रोटरी एंडोडॉन्टिक्स व लेज़र' : 'Rotary Endodontics & Lasers'}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'hi'
                  ? 'कंप्यूटराइज्ड रोटरी मोटर्स और सॉफ्ट-टिशू डेंटल लेज़र से दर्द-रहित और रक्तहीन उपचार।'
                  : 'Motorized nickel-titanium file systems and soft-tissue dental lasers for quiet, pain-free procedures.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOSPITAL LOCATION & APPOINTMENT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-600 text-white rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif font-bold text-xl sm:text-3xl">
              {language === 'hi' ? 'आज ही अपने दांतों की जांच करवाएं' : 'Schedule Your Hospital Consultation Today'}
            </h3>
            <p className="text-xs sm:text-sm text-teal-100">
              {language === 'hi'
                ? 'सदरौना, मोहन रोड लखनऊ • हेल्पलाईन: 94500 00000 / 98390 11111'
                : 'Sadrauna, Mohan Road Lucknow • Helpline: +91 94500 00000 / +91 98390 11111'
              }
            </p>
          </div>

          <button
            onClick={() => setIsBookingOpen(true)}
            className="px-6 py-3.5 bg-white text-teal-900 hover:bg-teal-50 font-bold text-xs sm:text-sm rounded-xl shadow-lg active:scale-95 transition-all whitespace-nowrap"
          >
            {language === 'hi' ? 'तुरंत अपॉइंटमेंट बुक करें (60s)' : 'Book 60-Second Appointment'}
          </button>
        </div>
      </section>
    </div>
  );
};
