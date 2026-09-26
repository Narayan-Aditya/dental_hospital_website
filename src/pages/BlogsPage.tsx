import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Search
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const BlogsPage: React.FC = () => {
  const { blogs, setActiveBlogModal } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [search, setSearch] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'Dental Implants', label: 'Dental Implants' },
    { id: 'Cosmetic Dentistry', label: 'Cosmetic & Veneers' },
    { id: 'Dental Tourism', label: 'Dental Tourism' },
    { id: 'Healthcare & Network', label: 'Clinics & Technology' }
  ];

  const filtered = blogs.filter(b => {
    const matchesCat = selectedCategory === 'all' || b.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = 
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.summary.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-16 sm:space-y-20 animate-fadeIn py-6 sm:py-10">
      
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#06131f] via-[#081726] to-[#0b1f3a] text-white rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#f5900d]/20 text-[#f5900d] border border-[#f5900d]/40 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-[#f5900d]" />
              <span>HOPE DENTAL CLINICAL BLOG & INSIGHTS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Evidence-Based Guides from Senior Dentists
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Explore clinical articles on full mouth dental implants, how to choose an implant center, the vital role of master ceramists in porcelain veneers, and neighborhood specialist care.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SEARCH & CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles by topic..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f5900d]"
            />
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto w-full sm:w-auto pb-1">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#f5900d] text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[#f5900d]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map(post => (
            <div
              key={post.id}
              onClick={() => setActiveBlogModal(post)}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl cursor-pointer transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/30 text-[#f5900d] border border-[#f5900d]/20">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#f5900d] transition-colors">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {post.summary}
                </p>

                {/* Author row */}
                <div className="flex items-center space-x-3 pt-2">
                  <div className="w-8 h-8 rounded-full bg-[#081726] text-[#f5900d] border border-[#f5900d]/40 flex items-center justify-center font-bold text-xs">
                    {post.authorDoctor.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">{post.authorDoctor}</div>
                    <div className="text-[10px] text-[#f5900d] font-semibold">{post.authorRole}</div>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-slate-100 dark:border-slate-800 mt-4 flex items-center justify-between text-xs text-slate-500">
                <span>{post.date}</span>
                <span className="font-bold text-[#f5900d] flex items-center group-hover:translate-x-1 transition-transform">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
