'use client';

import { ReactNode } from 'react';

interface JourneyBannerProps {
  journeyName: string;
  journeyIcon: ReactNode;
  subtitle: string;
}

export function JourneyBanner({ journeyName, journeyIcon, subtitle }: JourneyBannerProps) {
  return (
    <div className="w-full bg-[#eff6ff] border-l-4 border-l-[#0071bc] py-4 px-6 mb-6">
      <div className="max-w-[1400px] mx-auto flex items-center gap-3">
        <span className="text-2xl">{journeyIcon}</span>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-[#0071bc] uppercase tracking-wider">
            {journeyName}
          </span>
          <span className="text-sm text-[#4b5563]">
            {subtitle}
          </span>
        </div>
      </div>
    </div>
  );
}
