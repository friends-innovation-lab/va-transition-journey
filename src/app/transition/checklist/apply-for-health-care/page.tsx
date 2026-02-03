'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Check, Square, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const requirements = [
  { text: 'Social Security Number', checked: false },
  { text: 'Military service information', checked: true, note: 'we have this' },
  { text: 'Insurance information (if applicable)', checked: false },
  { text: 'Income information (previous year)', checked: false },
];

const steps = [
  'Review your pre-filled information',
  'Confirm your health care preferences',
  'Select your preferred VA medical center',
  'Submit your application',
  'Receive confirmation (typically within 1 week)',
];

const prefilledData = [
  { label: 'Name', value: 'Marcus Johnson' },
  { label: 'SSN', value: '••••••1234' },
  { label: 'Branch', value: 'U.S. Army' },
  { label: 'Service dates', value: 'June 2018 – March 2026' },
];

export default function ApplyForHealthCarePage() {
  const [showToast, setShowToast] = useState(false);

  const handleMarkComplete = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

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

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Back Link */}
            <Link
              href="/transition/checklist"
              className="inline-flex items-center gap-2 text-[#0071bc] hover:underline mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to checklist
            </Link>

            {/* Header */}
            <div className="mb-10">
              <h1 className="text-[32px] font-bold text-[#111827] mb-3">
                Apply for VA Health Care
              </h1>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#dbeafe] rounded-full text-sm text-[#0071bc] font-medium">
                <Clock className="w-4 h-4" />
                ~20 minutes
              </span>
            </div>

            {/* Why This Matters */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-[#111827] mb-4">
                Why this matters
              </h2>
              <p className="text-[#4b5563] leading-relaxed text-base">
                As a transitioning service member, you have 5 years of enhanced eligibility for VA health care. Enrolling now ensures no gap in coverage when you separate.
              </p>
            </section>

            {/* What You'll Need */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-[#111827] mb-4">
                What you&apos;ll need
              </h2>
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
            </section>

            {/* Steps */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-[#111827] mb-4">
                Steps
              </h2>
              <ol className="space-y-4">
                {steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-[#0071bc] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-[#374151] pt-1 text-base">{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Pre-filled Preview */}
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-[#111827] mb-4">
                Pre-filled preview
              </h2>
              <div className="bg-[#f0fdf4] border-2 border-[#bbf7d0] rounded-xl p-5">
                <p className="text-sm text-[#166534] mb-4 font-medium flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  Based on your profile, we&apos;ve pre-filled:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {prefilledData.map((item) => (
                    <div key={item.label}>
                      <span className="text-xs text-[#6b7280] block mb-1">{item.label}</span>
                      <span className="text-sm text-[#111827] font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button className="bg-[#0071bc] hover:bg-[#005a9e] text-white font-semibold px-10 py-4 rounded-lg h-auto text-base shadow-md hover:shadow-lg transition-shadow">
                Start application →
              </Button>
              <Button
                variant="outline"
                onClick={handleMarkComplete}
                className="border-[#d1d5db] text-[#374151] hover:bg-[#f9fafb] font-medium px-6 py-4 rounded-lg h-auto"
              >
                Mark as complete
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-[#111827] mb-4">
                Need help?
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:1-800-827-1000"
                  className="flex items-center gap-3 text-[#0071bc] hover:underline"
                >
                  <Phone className="w-5 h-5" />
                  Call 1-800-827-1000
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-[#0071bc] hover:underline"
                >
                  <MapPin className="w-5 h-5" />
                  Find your local VA
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-[#0071bc] hover:underline"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat with us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
