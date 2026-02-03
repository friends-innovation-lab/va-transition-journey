'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const profileData = {
  name: 'Marcus Johnson',
  branch: 'U.S. Army',
  rank: 'E-5 / Sergeant',
  serviceDates: 'June 2018 – March 2026',
  separationDate: 'March 15, 2026',
  status: 'Transitioning',
  email: 'marcus.johnson@email.com',
  phone: '(555) 123-4567',
};

const benefits = [
  'Pre-filled applications',
  'Consistent information across VA',
  'You control your data',
];

const maritalStatusOptions = [
  { value: 'single', label: 'Single' },
  { value: 'married', label: 'Married' },
  { value: 'divorced', label: 'Divorced' },
  { value: 'widowed', label: 'Widowed' },
];

export default function ProfilePage() {
  const [maritalStatus, setMaritalStatus] = useState('');
  const [hasDependents, setHasDependents] = useState<boolean | null>(null);
  const [dependentCount, setDependentCount] = useState('');

  return (
    <div className="flex-grow py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-[32px] font-bold text-[#111827] mb-2">
            Welcome back, Marcus.
          </h1>
          <p className="text-lg text-[#6b7280]">
            Here&apos;s what we already know.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Left Column - Profile Card */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6b7280]">
                Your Veteran Profile
              </span>
              <button className="text-sm text-[#0071bc] hover:underline">
                Edit
              </button>
            </div>

            <div className="space-y-4">
              <ProfileField label="Name" value={profileData.name} />
              <ProfileField label="Branch" value={profileData.branch} />
              <ProfileField label="Rank" value={profileData.rank} />
              <ProfileField label="Service dates" value={profileData.serviceDates} />
              <ProfileField label="Separation date" value={profileData.separationDate} />
              <ProfileField label="Status" value={profileData.status} highlight />
              <div className="border-t border-[#e5e5e5] pt-4 mt-4">
                <ProfileField label="Email" value={profileData.email} />
                <ProfileField label="Phone" value={profileData.phone} />
              </div>
            </div>
          </div>

          {/* Right Column - Explanation */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#111827] mb-4">
              One profile. Every journey.
            </h2>

            <p className="text-base text-[#4b5563] mb-4 leading-relaxed">
              This information comes from your service record and existing VA systems. You entered it once — now it follows you everywhere.
            </p>

            <p className="text-base text-[#4b5563] mb-6 leading-relaxed">
              When you start a disability claim, apply for health care, or use your GI Bill, this same profile is already there. No repeating yourself. No conflicting records.
            </p>

            <div className="space-y-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#22c55e] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-[#374151]">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Complete Your Profile Section */}
        <div className="bg-[#fafafa] border border-[#e5e5e5] rounded-xl p-6 mb-10">
          <h3 className="text-xl font-bold text-[#111827] mb-2">
            Help us complete your profile
          </h3>
          <p className="text-[#6b7280] mb-6">
            This information helps us personalize your benefits and coverage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Marital Status */}
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-2">
                Marital status
              </label>
              <select
                value={maritalStatus}
                onChange={(e) => setMaritalStatus(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] text-[#374151] bg-white focus:border-[#0071bc] focus:outline-none focus:ring-2 focus:ring-[#0071bc]/20 transition-colors"
              >
                <option value="">Select...</option>
                {maritalStatusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Dependents */}
            <div>
              <label className="block text-sm font-medium text-[#374151] mb-2">
                Do you have dependents?
              </label>
              <div className="flex gap-4 mb-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="dependents"
                    checked={hasDependents === true}
                    onChange={() => setHasDependents(true)}
                    className="w-4 h-4 text-[#0071bc] border-[#d1d5db] focus:ring-[#0071bc]"
                  />
                  <span className="text-[#374151]">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="dependents"
                    checked={hasDependents === false}
                    onChange={() => {
                      setHasDependents(false);
                      setDependentCount('');
                    }}
                    className="w-4 h-4 text-[#0071bc] border-[#d1d5db] focus:ring-[#0071bc]"
                  />
                  <span className="text-[#374151]">No</span>
                </label>
              </div>

              {hasDependents === true && (
                <div className="mt-3">
                  <label className="block text-sm font-medium text-[#374151] mb-2">
                    How many?
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={dependentCount}
                    onChange={(e) => setDependentCount(e.target.value)}
                    placeholder="Enter number"
                    className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] text-[#374151] bg-white focus:border-[#0071bc] focus:outline-none focus:ring-2 focus:ring-[#0071bc]/20 transition-colors"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="flex justify-end">
          <Link href="/transition/onboarding">
            <Button className="bg-[#003f72] hover:bg-[#002d52] text-white font-semibold px-8 py-3 rounded-lg h-auto">
              Continue
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProfileField({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex justify-between items-center py-1">
      <span className="text-sm text-[#6b7280]">{label}</span>
      <span className={`text-sm ${highlight ? 'text-[#0071bc] font-medium' : 'text-[#111827]'}`}>
        {value}
      </span>
    </div>
  );
}
