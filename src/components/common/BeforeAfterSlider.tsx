import React, { useState, useRef } from 'react';
import { SmileTransformation } from '../../types';
import { Calendar, User } from 'lucide-react';

interface BeforeAfterSliderProps {
  transformation: SmileTransformation;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ transformation }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg hover:shadow-xl transition-all">
      {/* Slider Viewport */}
      <div 
        ref={containerRef}
        className="relative h-64 sm:h-72 w-full select-none cursor-ew-resize overflow-hidden bg-slate-950"
        onMouseDown={() => { isDragging.current = true; }}
        onMouseUp={() => { isDragging.current = false; }}
        onMouseLeave={() => { isDragging.current = false; }}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Full background) */}
        <img
          src={transformation.afterImage}
          alt={`After: ${transformation.title}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-600/90 text-white backdrop-blur-sm z-10">
          AFTER SMILE
        </span>

        {/* Before Image (Clipped via clipPath) */}
        <div 
          className="absolute inset-0 overflow-hidden z-10"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={transformation.beforeImage}
            alt={`Before: ${transformation.title}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-900/90 text-white backdrop-blur-sm z-10">
            BEFORE
          </span>
        </div>

        {/* Draggable Divider Handle */}
        <div 
          className="absolute inset-y-0 z-20 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-teal-600 shadow-xl flex items-center justify-center">
            <div className="flex space-x-0.5">
              <span className="w-0.5 h-3 bg-teal-600 rounded-full"></span>
              <span className="w-0.5 h-3 bg-teal-600 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Meta Content */}
      <div className="p-4 sm:p-5 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300">
            {transformation.category}
          </span>
          <span className="text-xs text-slate-500 flex items-center">
            <Calendar className="w-3.5 h-3.5 mr-1 text-teal-600" />
            {transformation.duration}
          </span>
        </div>

        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white line-clamp-1">
          {transformation.title}
        </h4>

        <div className="text-xs text-slate-600 dark:text-slate-400 italic bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl border border-slate-100 dark:border-slate-800">
          {transformation.patientFeedback}
        </div>

        <div className="flex items-center justify-between text-[11px] pt-1 text-slate-500">
          <span className="flex items-center">
            <User className="w-3.5 h-3.5 mr-1 text-slate-400" />
            {transformation.doctorName}
          </span>
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            {transformation.patientAgeCity}
          </span>
        </div>
      </div>
    </div>
  );
};
