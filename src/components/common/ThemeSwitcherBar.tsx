import React from 'react';
import { Shield, Zap, Check, Sun, Moon } from 'lucide-react';
import { useApp, ConceptTheme } from '../../context/AppContext';

export const ThemeSwitcherBar: React.FC = () => {
  const { concept, setConcept, darkMode, toggleDarkMode } = useApp();

  const concepts: { id: ConceptTheme; title: string; badge: string; icon: any }[] = [
    {
      id: 'clinical',
      title: '1. Modern Clinical Care',
      badge: 'Hospital & Trust',
      icon: Shield,
    },
    {
      id: 'promax',
      title: '2. UI UX Pro Max Masterpiece',
      badge: 'Museum-Grade AI',
      icon: Zap,
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
            Website Version:
          </span>
        </div>

        {/* Center: 2 Website Concept Switcher Buttons */}
        <div className="flex items-center gap-2 flex-wrap justify-center">
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
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 border ${
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

        {/* Right: Dark / Light Mode Toggle Button */}
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleDarkMode}
            className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold flex items-center space-x-1.5 transition-all text-amber-300 hover:text-amber-200"
            title="Toggle Dark / Light Mode"
          >
            {darkMode ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-white text-[11px]">Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-white text-[11px]">Dark Mode</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
