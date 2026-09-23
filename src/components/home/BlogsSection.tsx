import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  User, 
  Tag, 
  Search, 
  ArrowRight, 
  X, 
  Share2, 
  ThumbsUp, 
  Volume2, 
  Calendar,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { BlogPost } from '../../types';

export const BlogsSection: React.FC = () => {
  const { language, blogs, setIsBookingOpen, setSelectedDoctorIdForBooking, doctors } = useApp();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  const categories = ['all', 'Root Canal & Surgery', 'Dental Implants', 'Orthodontics & Braces', 'Pediatric Dentistry', 'Gum Care & Hygiene', 'Cosmetic Dentistry'];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCat = activeCategory === 'all' || blog.category === activeCategory;
    const matchesSearch = 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.titleHi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleShare = (blog: BlogPost, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `Read "${blog.title}" by Hope Dental Hospital: ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleBookWithAuthor = (authorName: string) => {
    const doc = doctors.find(d => d.name.toLowerCase().includes(authorName.toLowerCase()) || authorName.toLowerCase().includes(d.name.toLowerCase()));
    if (doc) {
      setSelectedDoctorIdForBooking(doc.id);
    }
    setIsBookingOpen(true);
    setSelectedBlog(null);
  };

  return (
    <section id="blogs" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-100/80 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-teal-600" />
            <span>Oral Health Education & Wellness Hub</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            {language === 'hi' 
              ? 'दंत स्वास्थ्य ब्लॉग एवं विशेषज्ञ परामर्श' 
              : 'Dental Care Guides & Expert Articles'
            }
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            {language === 'hi'
              ? 'दांतों की सुरक्षा, पायरिया से बचाव, बच्चों की देखभाल और आधुनिक उपचारों पर हमारे डॉक्टरों द्वारा लिखे गए सरल लेख।'
              : 'Evidence-based oral health insights, procedure guides, and wellness tips written by our clinical specialist doctors.'
            }
          </p>
        </div>

        {/* Search & Categories Bar */}
        <div className="max-w-4xl mx-auto mb-12 flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics, symptoms, RCT, Implants..."
              className="w-full text-xs bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
            />
          </div>

          <div className="flex items-center overflow-x-auto w-full gap-1.5 pb-2 sm:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat === 'all' ? 'All Articles' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => {
            const isLiked = !!likedPosts[blog.id];
            const likesCount = isLiked ? blog.likesCount + 1 : blog.likesCount;

            return (
              <div
                key={blog.id}
                onClick={() => setSelectedBlog(blog)}
                className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-2xl hover:border-teal-300 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative h-48 overflow-hidden bg-slate-800">
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                      {blog.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-3 text-xs text-slate-400">
                      <span className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1 text-teal-600" />
                        {blog.readTime}
                      </span>
                      <span>•</span>
                      <span>{blog.date}</span>
                    </div>

                    <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 group-hover:text-teal-600 transition-colors leading-snug line-clamp-2">
                      {language === 'hi' ? blog.titleHi : blog.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {language === 'hi' ? blog.summaryHi : blog.summary}
                    </p>
                  </div>
                </div>

                {/* Footer metadata */}
                <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center text-[10px]">
                      Dr
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-[11px]">{blog.authorDoctor}</div>
                      <div className="text-[10px] text-slate-400">{blog.authorRole}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={(e) => handleLike(blog.id, e)}
                      className={`flex items-center space-x-1 p-1 rounded transition-colors ${
                        isLiked ? 'text-rose-600 font-bold' : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span className="text-[11px]">{likesCount}</span>
                    </button>

                    <button
                      onClick={(e) => handleShare(blog, e)}
                      className="text-slate-400 hover:text-teal-600 p-1"
                      title="Share to WhatsApp"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full Blog Reader Modal */}
        {selectedBlog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl border border-slate-200">
              {/* Top Action Bar */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                    {selectedBlog.category}
                  </span>
                  <span className="text-xs text-slate-400">{selectedBlog.readTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-colors ${
                      isPlayingAudio ? 'bg-amber-100 text-amber-900 animate-pulse' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{isPlayingAudio ? 'Reading Out Loud...' : 'Listen Audio'}</span>
                  </button>
                  <button
                    onClick={() => {
                      setSelectedBlog(null);
                      setIsPlayingAudio(false);
                    }}
                    className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Title & Author header */}
              <div className="pt-6 pb-4 space-y-3">
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 leading-tight">
                  {language === 'hi' ? selectedBlog.titleHi : selectedBlog.title}
                </h2>
                <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-1 border-b border-slate-100 pb-4 gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-slate-800">{selectedBlog.authorDoctor}</span>
                    <span>({selectedBlog.authorRole})</span>
                    <span>•</span>
                    <span>Published on {selectedBlog.date}</span>
                  </div>
                  <button
                    onClick={(e) => handleShare(selectedBlog, e)}
                    className="inline-flex items-center text-teal-600 font-bold hover:underline space-x-1"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share Article</span>
                  </button>
                </div>
              </div>

              {/* Featured Image */}
              <div className="my-4 rounded-2xl overflow-hidden h-64 sm:h-80 bg-slate-900">
                <img
                  src={selectedBlog.imageUrl}
                  alt={selectedBlog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Blog Content body */}
              <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed py-4 space-y-4 whitespace-pre-line">
                {selectedBlog.content}
              </div>

              {/* Tags */}
              <div className="pt-4 flex flex-wrap gap-1.5 border-t border-slate-100">
                {selectedBlog.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Doctor Consultation Card CTA */}
              <div className="mt-8 bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-2xl border border-teal-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="font-bold text-slate-900 text-sm">
                    Have questions about this condition?
                  </h4>
                  <p className="text-xs text-slate-600">
                    Consult with {selectedBlog.authorDoctor} at Hope Dental Hospital, Sadrauna.
                  </p>
                </div>
                <button
                  onClick={() => handleBookWithAuthor(selectedBlog.authorDoctor)}
                  className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow transition-all shrink-0 flex items-center space-x-1.5"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
