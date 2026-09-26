import React from 'react';
import { X, Calendar, Clock, Eye, Heart, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const BlogDetailModal: React.FC = () => {
  const { activeBlogModal, setActiveBlogModal, setIsBookingOpen, setSelectedTreatmentIdForBooking } = useApp();

  if (!activeBlogModal) return null;

  const handleBookFromBlog = () => {
    setActiveBlogModal(null);
    setSelectedTreatmentIdForBooking('dental-implants');
    setIsBookingOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-2xl overflow-hidden my-auto transition-all flex flex-col max-h-[92vh]">
        
        {/* Header Image / Bar */}
        <div className="relative h-48 sm:h-56 bg-gradient-to-br from-[#0b1f3a] via-[#163864] to-[#0d9488] overflow-hidden">
          {activeBlogModal.imageUrl && (
            <img 
              src={activeBlogModal.imageUrl} 
              alt={activeBlogModal.title}
              className="w-full h-full object-cover opacity-40 mix-blend-overlay"
              onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
            />
          )}

          <button
            onClick={() => setActiveBlogModal(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900/80 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#c5a059] text-slate-950">
              {activeBlogModal.category}
            </span>
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white mt-1.5 line-clamp-2">
              {activeBlogModal.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 flex-1">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-slate-400 pb-3 border-b border-slate-100 dark:border-slate-800 gap-2">
            <div className="flex items-center space-x-3">
              <span className="flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1 text-teal-600" />
                {activeBlogModal.date}
              </span>
              <span className="flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1 text-teal-600" />
                {activeBlogModal.readTime}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <span className="flex items-center">
                <Eye className="w-3.5 h-3.5 mr-1" />
                {activeBlogModal.views.toLocaleString()} views
              </span>
              <span className="flex items-center text-rose-500 font-bold">
                <Heart className="w-3.5 h-3.5 mr-1 fill-current" />
                {activeBlogModal.likesCount}
              </span>
            </div>
          </div>

          {/* Author Badge */}
          <div className="flex items-center space-x-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
              {activeBlogModal.authorDoctor.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">
                {activeBlogModal.authorDoctor}
              </div>
              <div className="text-[11px] text-teal-600 dark:text-teal-400">
                {activeBlogModal.authorRole}
              </div>
            </div>
          </div>

          {/* Article Text */}
          <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-3">
            <p className="font-semibold text-slate-900 dark:text-white">
              {activeBlogModal.summary}
            </p>
            <p>
              {activeBlogModal.content}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-3">
            {activeBlogModal.tags.map((tag, i) => (
              <span key={i} className="text-[10px] px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                #{tag}
              </span>
            ))}
          </div>

          {/* Consultation CTA */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-center sm:text-left">
              <span className="text-xs font-bold text-slate-900 dark:text-white block">
                Have questions regarding this dental procedure?
              </span>
              <span className="text-[11px] text-slate-500">
                Book a consultation with {activeBlogModal.authorDoctor.split(',')[0]}
              </span>
            </div>

            <button
              type="button"
              onClick={handleBookFromBlog}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-md transition-all shrink-0"
            >
              <span>Consult Doctor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
