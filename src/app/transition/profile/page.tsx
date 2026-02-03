'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Check, AlertTriangle, ChevronRight, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useErrorSimulation } from '@/context/ErrorSimulationContext';

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
  const router = useRouter();
  const { simulateErrors } = useErrorSimulation();
  const [maritalStatus, setMaritalStatus] = useState('');
  const [dependents, setDependents] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [statusToast, setStatusToast] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ maritalStatus?: boolean; dependents?: boolean }>({});
  const [shake, setShake] = useState(false);

  const handleContinue = () => {
    const newErrors: { maritalStatus?: boolean; dependents?: boolean } = {};

    if (!maritalStatus) {
      newErrors.maritalStatus = true;
    }
    if (!dependents) {
      newErrors.dependents = true;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    // Clear errors and show toast
    setErrors({});
    setShowToast(true);
    setTimeout(() => {
      router.push('/transition/onboarding');
    }, 1500);
  };

  const handleMaritalStatusChange = (value: string) => {
    setMaritalStatus(value);
    if (value) {
      setErrors(prev => ({ ...prev, maritalStatus: false }));
    }
  };

  const handleDependentsChange = (value: string) => {
    setDependents(value);
    if (value) {
      setErrors(prev => ({ ...prev, dependents: false }));
    }
  };

  const handleStatusClick = (message: string) => {
    setStatusToast(message);
    setTimeout(() => setStatusToast(null), 3000);
  };

  return (
    <div className="flex-grow py-12 px-6">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-24 right-6 z-50 animate-in slide-in-from-right duration-300">
          <div className="bg-white text-[#166534] px-5 py-4 rounded-lg shadow-lg border border-[#bbf7d0] flex items-start gap-3 max-w-sm">
            <div className="w-5 h-5 bg-[#22c55e] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm leading-relaxed">Saved to your Veteran Profile. This data is now available across all VA journeys.</span>
          </div>
        </div>
      )}

      {/* Status Toast - Dark bottom-center style */}
      {statusToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom duration-300">
          <div className="bg-[#1f2937] text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-3">
            <span className="text-sm">{statusToast}</span>
            <button
              onClick={() => setStatusToast(null)}
              className="text-[#9ca3af] hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-10">
          {/* Left Column - Profile Card */}
          <div className={`bg-white rounded-xl shadow-sm p-6 ${shake ? 'animate-shake' : ''}`}>
            {/* Error simulation banner */}
            {simulateErrors && (
              <div className="bg-[#fef3c7] border border-[#f59e0b] rounded-lg p-3 mb-6 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#d97706] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[#92400e]">
                  We couldn&apos;t retrieve all your information. Some fields may need manual entry.
                </span>
              </div>
            )}

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
              <ProfileField
                label="Email"
                value={simulateErrors ? 'Unable to load' : profileData.email}
                disabled={simulateErrors}
              />
              <ProfileField
                label="Phone"
                value={simulateErrors ? 'Unable to load' : profileData.phone}
                disabled={simulateErrors}
              />
            </div>

            {/* Divider */}
            <div className="border-t border-[#e5e5e5] my-5" />

            {/* Editable fields */}
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <label className={`text-sm ${errors.maritalStatus ? 'text-[#dc2626]' : 'text-[#6b7280]'}`}>
                    Marital status
                  </label>
                  <select
                    value={maritalStatus}
                    onChange={(e) => handleMaritalStatusChange(e.target.value)}
                    className={`w-40 px-3 py-1.5 text-sm rounded-md border text-[#374151] focus:outline-none transition-colors ${
                      errors.maritalStatus
                        ? 'border-[#ef4444] bg-[#fef2f2] focus:border-[#ef4444]'
                        : 'border-[#d1d5db] bg-white focus:border-[#0071bc]'
                    }`}
                  >
                    <option value="">Select...</option>
                    {maritalStatusOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.maritalStatus && (
                  <p className="text-xs text-[#dc2626] mt-1 text-right">Please select an option</p>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className={`text-sm ${errors.dependents ? 'text-[#dc2626]' : 'text-[#6b7280]'}`}>
                    Dependents
                  </label>
                  <select
                    value={dependents}
                    onChange={(e) => handleDependentsChange(e.target.value)}
                    className={`w-40 px-3 py-1.5 text-sm rounded-md border text-[#374151] focus:outline-none transition-colors ${
                      errors.dependents
                        ? 'border-[#ef4444] bg-[#fef2f2] focus:border-[#ef4444]'
                        : 'border-[#d1d5db] bg-white focus:border-[#0071bc]'
                    }`}
                  >
                    <option value="">Select...</option>
                    {dependentOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.dependents && (
                  <p className="text-xs text-[#dc2626] mt-1 text-right">Please select an option</p>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Status Card */}
          <div className="flex flex-col justify-start">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-[#e5e5e5]">
                <h2 className="text-lg font-semibold text-[#111827]">
                  Your Status Across VA
                </h2>
              </div>

              {/* Transition - Links to checklist */}
              <Link
                href="/transition/checklist"
                className="flex items-center justify-between px-6 py-4 border-b border-[#e5e5e5] hover:bg-[#f5f5f0] transition-colors group"
              >
                <div>
                  <div className="text-sm font-medium text-[#111827]">Transition</div>
                  <div className="text-sm text-[#6b7280]">In progress — 2 of 5 tasks</div>
                </div>
                <ChevronRight className="w-5 h-5 text-[#9ca3af] group-hover:text-[#6b7280] transition-colors" />
              </Link>

              {/* Disability Claim - Toast */}
              <button
                onClick={() => handleStatusClick('Claim tracking coming soon')}
                className="w-full flex items-center justify-between px-6 py-4 border-b border-[#e5e5e5] hover:bg-[#f5f5f0] transition-colors group text-left"
              >
                <div>
                  <div className="text-sm font-medium text-[#111827]">Disability Claim</div>
                  <div className="text-sm text-[#6b7280]">1 claim in progress</div>
                </div>
                <ChevronRight className="w-5 h-5 text-[#9ca3af] group-hover:text-[#6b7280] transition-colors" />
              </button>

              {/* Health Care - Toast */}
              <button
                onClick={() => handleStatusClick('Health care portal coming soon')}
                className="w-full flex items-center justify-between px-6 py-4 border-b border-[#e5e5e5] hover:bg-[#f5f5f0] transition-colors group text-left"
              >
                <div>
                  <div className="text-sm font-medium text-[#111827]">Health Care</div>
                  <div className="text-sm text-[#6b7280]">Enrolled</div>
                </div>
                <ChevronRight className="w-5 h-5 text-[#9ca3af] group-hover:text-[#6b7280] transition-colors" />
              </button>

              {/* Education - Toast */}
              <button
                onClick={() => handleStatusClick('Education benefits coming soon')}
                className="w-full flex items-center justify-between px-6 py-4 hover:bg-[#f5f5f0] transition-colors group text-left"
              >
                <div>
                  <div className="text-sm font-medium text-[#111827]">Education</div>
                  <div className="text-sm text-[#6b7280]">Not started</div>
                </div>
                <ChevronRight className="w-5 h-5 text-[#9ca3af] group-hover:text-[#6b7280] transition-colors" />
              </button>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="flex justify-end">
          <Button
            onClick={handleContinue}
            className="bg-[#003f72] hover:bg-[#002d52] text-white font-semibold px-8 py-3 rounded-lg h-auto"
          >
            Continue
          </Button>
        </div>
      </div>

      {/* Shake animation styles */}
      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}

function ProfileField({
  label,
  value,
  highlight = false,
  disabled = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  disabled?: boolean;
}) {
  return (
    <div className="flex justify-between items-center py-1">
      <span className="text-sm text-[#6b7280]">{label}</span>
      <span className={`text-sm ${
        disabled
          ? 'text-[#9ca3af] italic'
          : highlight
            ? 'text-[#0071bc] font-medium'
            : 'text-[#111827]'
      }`}>
        {value}
      </span>
    </div>
  );
}
