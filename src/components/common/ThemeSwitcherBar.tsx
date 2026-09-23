import React from 'react';
import { Sparkles, Shield, Crown, Zap, Check } from 'lucide-react';
import { useApp, ConceptTheme } from '../../context/AppContext';

export const ThemeSwitcherBar: React.FC = () => {
  const { concept, setConcept } = useApp();

  const concepts: { id: ConceptTheme; title: string; badge: string; desc: string; icon: any; color: string }[] = [
    {
      id: 'clinical',
      title: '1. Clinical Clean (Teal)',
      badge: 'Hospital & Trust',
      desc: 'Complete medical ecosystem with fast booking, invoice PDF & bilingual triage.',
      icon: Shield,
      color: 'from-teal-600 to-teal-500 text-teal-700 bg-teal-50 border-teal-200'
    },
    {
      id: 'luxury',
      title: '2. Luxury Aesthetic (Gold)',
      badge: 'Cosmetic Lounge',
      desc: 'Obsidian & Champagne gold VIP smile studio with shade selector & concierge.',
      icon: Crown,
      color: 'from-amber-600 to-amber-500 text-amber-800 bg-amber-50 border-amber-300'
    },
    {
      id: 'promax',
      title: '3. UI UX Pro Max',
      badge: 'Museum-Grade AI',
      desc: 'Editorial typography, 3D interactive tooth arch, AI scan & tele-dentistry.',
      icon: Zap,
      color: 'from-sky-600 to-indigo-600 text-sky-800 bg-sky-50 border-sky-300'
    }
  ];

  return (
    <div className="bg-slate-950 text-white border-b border-slate-800 sticky top-0 z-50 shadow-2xl py-2 px-3 sm:px-6 backdrop-blur-lg bg-opacity-95">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
        {/* Left Label */}
        <div className="flex items-center space-x-2 text-xs">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
          </span>
          <span className="font-extrabold uppercase tracking-wider text-slate-300 text-[11px]">
            Explore 3 Website Design Concepts:
          </span>
        </div>

        {/* Concept Switcher Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center">
          {concepts.map((item) => {
            const Icon = item.icon;
            const isActive = concept === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setConcept(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 border ${
                  isActive
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-teal-400 shadow-lg shadow-teal-500/30 scale-105 ring-2 ring-teal-400/40'
                    : 'bg-slate-900/90 text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.title}</span>
                {isActive && <Check className="w-3 h-3 text-white" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
