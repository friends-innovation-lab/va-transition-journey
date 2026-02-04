'use client';

import { useReviewerMode } from '@/context/ReviewerModeContext';

interface LayerBadgeProps {
  layerName: string;
  description: string;
}

export function LayerBadge({ layerName, description }: LayerBadgeProps) {
  const { reviewerMode } = useReviewerMode();

  if (!reviewerMode) return null;

  return (
    <div className="w-full bg-slate-800 text-white py-3 px-6 animate-in fade-in duration-300">
      <div className="max-w-[1400px] mx-auto flex items-start gap-2">
        <span className="text-amber-400 text-lg">◆</span>
        <div>
          <div className="font-semibold text-sm uppercase tracking-wide">
            Layer: {layerName}
          </div>
          <div className="text-slate-300 text-sm mt-1">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}

interface UXAnnotationProps {
  children: string;
  position?: 'left' | 'right' | 'top' | 'bottom' | 'inline';
  className?: string;
}

export function UXAnnotation({ children, position = 'inline', className = '' }: UXAnnotationProps) {
  const { reviewerMode } = useReviewerMode();

  if (!reviewerMode) return null;

  const positionClasses = {
    left: 'absolute left-0 -translate-x-full -ml-4',
    right: 'absolute right-0 translate-x-full ml-4',
    top: 'absolute top-0 -translate-y-full -mt-2',
    bottom: 'absolute bottom-0 translate-y-full mt-2',
    inline: '',
  };

  return (
    <div
      className={`bg-amber-50 border-l-4 border-amber-500 py-2 px-4 max-w-xs animate-in fade-in duration-300 ${positionClasses[position]} ${className}`}
    >
      <div className="text-amber-900 text-sm">
        → {children}
      </div>
    </div>
  );
}

export function ReviewerModeToggle() {
  const { reviewerMode, setReviewerMode } = useReviewerMode();

  return (
    <div className="fixed top-20 right-4 z-[70] bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-slate-200 px-4 py-3">
      <label className="flex items-center gap-3 cursor-pointer">
        <span className="text-sm font-medium text-slate-700">Reviewer Mode</span>
        <button
          onClick={() => setReviewerMode(!reviewerMode)}
          className={`relative w-11 h-6 rounded-full transition-colors ${
            reviewerMode ? 'bg-amber-500' : 'bg-slate-300'
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
              reviewerMode ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>
      </label>
    </div>
  );
}
