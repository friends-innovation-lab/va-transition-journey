'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Square, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const requirements = [
  { text: 'Social Security Number', checked: false },
  { text: 'Military service information', checked: true, note: 'we have this' },
  { text: 'Insurance information (if applicable)', checked: false },
  { text: 'Income information (previous year)', checked: false },
];

const prefilledData = [
  { label: 'Name', value: 'Marcus Johnson' },
  { label: 'SSN', value: '••••••1234' },
  { label: 'Branch', value: 'U.S. Army' },
  { label: 'Service', value: 'Jun 2018 – Mar 2026' },
];

export default function ApplyForHealthCarePage() {
  const [showToast, setShowToast] = useState(false);

  const handleMarkComplete = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  const readyCount = requirements.filter(r => r.checked).length;

  return (
    <div className="flex-grow py-8 px-6">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-24 right-6 z-50 animate-in slide-in-from-right duration-300">
          <div className="bg-white text-[#166534] px-5 py-4 rounded-lg shadow-lg border border-[#bbf7d0] flex items-start gap-3 max-w-sm">
            <div className="w-5 h-5 bg-[#22c55e] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm leading-relaxed">Progress saved to your Veteran Profile.</span>
          </div>
        </div>
      )}

      <div className="max-w-[640px] mx-auto">
        {/* Back Link */}
        <Link
          href="/transition/checklist"
          className="inline-flex items-center gap-2 text-[#0071bc] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to checklist
        </Link>

        {/* Title Area */}
        <div className="text-center mb-10">
          <h1 className="text-[28px] font-bold text-[#111827] mb-3">
            Apply for VA Health Care
          </h1>
          <span className="inline-flex items-center px-3 py-1.5 bg-[#f3f4f6] rounded-full text-sm text-[#6b7280]">
            ~20 minutes
          </span>
        </div>

        {/* Card: Why This Matters */}
        <div className="bg-white rounded-xl border border-[#e5e5e5] p-6 mb-4">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[#6b7280] mb-3">
            Why This Matters
          </h2>
          <p className="text-[#4b5563] leading-relaxed">
            As a transitioning service member, you have 5 years of enhanced eligibility for VA health care. Enrolling now ensures no gap in coverage when you separate.
          </p>
        </div>

        {/* Card: What You'll Need */}
        <div className="bg-white rounded-xl border border-[#e5e5e5] p-6 mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#6b7280]">
              What You&apos;ll Need
            </h2>
            <span className="text-xs text-[#6b7280]">
              {readyCount} of {requirements.length} ready
            </span>
          </div>
          <div className="space-y-3">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-center gap-3">
                {req.checked ? (
                  <div className="w-5 h-5 bg-[#22c55e] rounded flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                ) : (
                  <Square className="w-5 h-5 text-[#d1d5db] flex-shrink-0" />
                )}
                <span className={req.checked ? 'text-[#6b7280]' : 'text-[#374151]'}>
                  {req.text}
                  {req.note && (
                    <span className="text-[#22c55e] ml-1">({req.note} ✓)</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Card: Pre-filled From Your Profile */}
        <div className="bg-[#ecfdf5] rounded-xl border-l-4 border-l-[#10b981] p-6 mb-8">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[#065f46] mb-4">
            Pre-filled From Your Profile
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {prefilledData.map((item) => (
              <div key={item.label}>
                <span className="text-xs text-[#6b7280] block mb-1">{item.label}</span>
                <span className="text-sm text-[#111827] font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Primary CTA */}
        <div className="text-center mb-4">
          <Button className="bg-[#0071bc] hover:bg-[#005a9e] text-white font-semibold px-10 py-4 rounded-lg h-auto text-base shadow-md hover:shadow-lg transition-shadow w-full sm:w-auto sm:min-w-[280px]">
            Start application →
          </Button>
        </div>

        {/* Mark as complete link */}
        <div className="text-center mb-12">
          <button
            onClick={handleMarkComplete}
            className="text-sm text-[#6b7280] hover:text-[#374151] hover:underline"
          >
            Mark as complete
          </button>
        </div>

        {/* Help Section */}
        <div className="border-t border-[#e5e5e5] pt-8 text-center">
          <p className="text-sm text-[#6b7280] mb-4">Need help?</p>
          <div className="flex items-center justify-center gap-6">
            <a
              href="tel:1-800-827-1000"
              className="inline-flex items-center gap-2 text-sm text-[#0071bc] hover:underline"
            >
              <Phone className="w-4 h-4" />
              Call 1-800-827-1000
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm text-[#0071bc] hover:underline"
            >
              <MessageCircle className="w-4 h-4" />
              Chat with us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
