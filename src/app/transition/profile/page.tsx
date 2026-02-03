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

const dependentOptions = [
  { value: 'none', label: 'None' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4+', label: '4+' },
];

const maritalStatusOptions = [
  { value: 'single', label: 'Single' },
  { value: 'married', label: 'Married' },
  { value: 'divorced', label: 'Divorced' },
  { value: 'widowed', label: 'Widowed' },
];

export default function ProfilePage() {
  const [maritalStatus, setMaritalStatus] = useState('');
  const [dependents, setDependents] = useState('');

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

            {/* Read-only fields from VA */}
            <div className="space-y-3">
              <ProfileField label="Name" value={profileData.name} />
              <ProfileField label="Branch" value={profileData.branch} />
              <ProfileField label="Rank" value={profileData.rank} />
              <ProfileField label="Service dates" value={profileData.serviceDates} />
              <ProfileField label="Separation date" value={profileData.separationDate} />
              <ProfileField label="Status" value={profileData.status} highlight />
            </div>

            {/* Divider */}
            <div className="border-t border-[#e5e5e5] my-5" />

            {/* Contact info */}
            <div className="space-y-3">
              <ProfileField label="Email" value={profileData.email} />
              <ProfileField label="Phone" value={profileData.phone} />
            </div>

            {/* Divider */}
            <div className="border-t border-[#e5e5e5] my-5" />

            {/* Editable fields */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm text-[#6b7280]">Marital status</label>
                <select
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  className="w-40 px-3 py-1.5 text-sm rounded-md border border-[#d1d5db] text-[#374151] bg-white focus:border-[#0071bc] focus:outline-none"
                >
                  <option value="">Select...</option>
                  {maritalStatusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm text-[#6b7280]">Dependents</label>
                <select
                  value={dependents}
                  onChange={(e) => setDependents(e.target.value)}
                  className="w-40 px-3 py-1.5 text-sm rounded-md border border-[#d1d5db] text-[#374151] bg-white focus:border-[#0071bc] focus:outline-none"
                >
                  <option value="">Select...</option>
                  {dependentOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
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
