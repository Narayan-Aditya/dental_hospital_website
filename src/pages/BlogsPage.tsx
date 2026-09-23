import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  User, 
  Tag, 
  ArrowRight, 
  X, 
  Calendar,
  Share2,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const BlogsPage: React.FC = () => {
  const { language, blogs, setIsBookingOpen } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Articles', labelHi: 'सभी लेख' },
    { id: 'Endodontics', label: 'Root Canal & Tooth Pain', labelHi: 'रूट कैनाल व दर्द' },
    { id: 'Cosmetic Dentistry', label: 'Smile Makeover & Veneers', labelHi: 'स्माइल मेकओवर' },
    { id: 'Orthodontics', label: 'Aligners & Braces', labelHi: 'अलाइनर्स व तार' },
    { id: 'Implantology', label: 'Dental Implants', labelHi: 'डेंटल इम्प्लांट्स' },
    { id: 'Pediatric Dentistry', label: 'Child Dental Health', labelHi: 'बच्चों के दांत' },
    { id: 'Preventive Care', label: 'Oral Hygiene Tips', labelHi: 'स्वच्छता सुझाव' },
  ];

  const filteredBlogs = selectedCategory === 'all'
    ? blogs
    : blogs.filter(b => b.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const selectedBlog = blogs.find(b => b.id === selectedBlogId);

  return (
    <div className="space-y-16 sm:space-y-20 animate-fadeIn py-6 sm:py-10">
      {/* 1. BLOGS PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-slate-900 via-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-2xl space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-teal-400" />
            <span>{language === 'hi' ? 'दंत स्वास्थ्य ब्लॉग' : 'Patient Education & Dental Blogs'}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            {language === 'hi'
              ? 'विशेषज्ञ डॉक्टरों द्वारा लिखित दंत स्वास्थ्य मार्गदर्शिका'
              : 'Doctor-Curated Dental Health & Wellness Guides'
            }
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {language === 'hi'
              ? 'दांतों की सड़न, पायरिया, रूट कैनाल, और अलाइनर्स से जुड़ी महत्वपूर्ण जानकारियां और घरेलू सावधानियां।'
              : 'Evidence-based advice on oral hygiene, toothache prevention, root canals, dental implants, and cosmetic care written by our MDS surgeons.'
            }
          </p>
        </div>
      </section>

      {/* 2. CATEGORY PILLS & ARTICLES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Pills */}
        <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {language === 'hi' ? cat.labelHi : cat.label}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((b) => (
            <div
              key={b.id}
              onClick={() => setSelectedBlogId(b.id)}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:shadow-xl hover:border-teal-500/40 transition-all cursor-pointer group active:scale-98"
            >
              <div>
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                  <img
                    src={b.imageUrl}
                    alt={b.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-teal-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                    {b.category}
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-center space-x-2 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    <Clock className="w-3.5 h-3.5 text-teal-600" />
                    <span>{b.readTime}</span>
                    <span>•</span>
                    <span>{b.date}</span>
                  </div>

                  <h3 className="font-serif font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors line-clamp-2">
                    {language === 'hi' ? b.titleHi : b.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {language === 'hi' ? b.summaryHi : b.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800 dark:text-slate-200">{b.authorDoctor}</span>
                <span className="text-teal-700 dark:text-teal-400 font-bold flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                  <span>{language === 'hi' ? 'पूरा पढ़ें' : 'Read Article'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FULL BLOG READER MODAL */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[88vh] overflow-y-auto border border-slate-200 dark:border-slate-800 p-5 sm:p-8 space-y-5 shadow-2xl relative">
            <button
              onClick={() => setSelectedBlogId(null)}
              className="sticky top-0 float-right -mt-1 -mr-1 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white shadow-sm z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/80 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                {selectedBlog.category}
              </span>
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mt-2">
                {language === 'hi' ? selectedBlog.titleHi : selectedBlog.title}
              </h2>
            </div>

            <div className="flex items-center space-x-3 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 pb-3 border-b border-slate-200 dark:border-slate-800">
              <span className="font-bold text-slate-800 dark:text-slate-200">{selectedBlog.authorDoctor}</span>
              <span>•</span>
              <span>{selectedBlog.date}</span>
              <span>•</span>
              <span>{selectedBlog.readTime}</span>
            </div>

            <img
              src={selectedBlog.imageUrl}
              alt={selectedBlog.title}
              className="w-full h-52 sm:h-64 object-cover rounded-2xl"
            />

            <div className="prose prose-sm dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed text-xs sm:text-sm space-y-3">
              <p>{selectedBlog.content}</p>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3">
              <span className="text-[11px] text-slate-500">Hope Dental Hospital Sadrauna Knowledgebase</span>
              <button
                onClick={() => {
                  setSelectedBlogId(null);
                  setIsBookingOpen(true);
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-teal-600 to-emerald-500 text-white font-bold text-xs rounded-xl shadow active:scale-95"
              >
                {language === 'hi' ? 'संबंधित डॉक्टर से परामर्श लें' : 'Consult Doctor for this Condition'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
