'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const separationOptions = [
  { value: 'separated', label: 'Already separated' },
  { value: '30days', label: 'Within 30 days' },
  { value: '1-3months', label: '1-3 months' },
  { value: '3-6months', label: '3-6 months' },
  { value: '6+months', label: '6+ months' },
];

const branchOptions = [
  { value: 'army', label: 'Army' },
  { value: 'navy', label: 'Navy' },
  { value: 'airforce', label: 'Air Force' },
  { value: 'marines', label: 'Marines' },
  { value: 'coastguard', label: 'Coast Guard' },
  { value: 'spaceforce', label: 'Space Force' },
];

const yearsOptions = [
  { value: '<4', label: 'Less than 4 years' },
  { value: '4-10', label: '4-10 years' },
  { value: '10-20', label: '10-20 years' },
  { value: '20+', label: '20+ years' },
];

const priorityOptions = [
  { value: 'healthcare', label: 'Health care' },
  { value: 'disability', label: 'Disability claim' },
  { value: 'education', label: 'Education / GI Bill' },
  { value: 'career', label: 'Career / employment' },
  { value: 'housing', label: 'Housing' },
  { value: 'mentalhealth', label: 'Mental health support' },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [separationDate, setSeparationDate] = useState('');
  const [branch, setBranch] = useState('');
  const [yearsOfService, setYearsOfService] = useState('');
  const [priorities, setPriorities] = useState<string[]>([]);

  const handlePriorityToggle = (value: string) => {
    if (priorities.includes(value)) {
      setPriorities(priorities.filter((p) => p !== value));
    } else if (priorities.length < 3) {
      setPriorities([...priorities, value]);
    }
  };

  const handleContinue = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Save to localStorage for now (could be API call)
      localStorage.setItem('va-onboarding', JSON.stringify({
        separationDate,
        branch,
        yearsOfService,
        priorities,
      }));
      router.push('/transition/checklist');
    }
  };

  const canContinue = () => {
    if (step === 1) return separationDate !== '';
    if (step === 2) return branch !== '' && yearsOfService !== '';
    if (step === 3) return priorities.length > 0;
    return false;
  };

  return (
    <div className="bg-white flex-grow">
      {/* Progress Bar */}
      <div className="h-1 bg-gray-100">
        <div
          className="h-full bg-[#0071bc] transition-all duration-300"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      {/* Content */}
      <div className="max-w-[500px] mx-auto px-6 py-12">
        {/* Step Indicator */}
        <p className="text-sm text-[#6b7280] mb-8">
          Step {step} of 3
        </p>

        {/* Step 1: Separation Date */}
        {step === 1 && (
          <div>
            <h1 className="text-3xl font-bold text-[#111827] mb-8">
              When are you separating?
            </h1>
            <div className="space-y-3">
              {separationOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSeparationDate(option.value)}
                  className={`w-full text-left px-5 py-4 rounded-lg border-2 transition-all duration-150 ${
                    separationDate === option.value
                      ? 'border-[#0071bc] bg-[#eff6ff]'
                      : 'border-[#e5e5e5] hover:border-[#9ca3af]'
                  }`}
                >
                  <span className={`text-base ${
                    separationDate === option.value
                      ? 'text-[#0071bc] font-medium'
                      : 'text-[#374151]'
                  }`}>
                    {option.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Service Info */}
        {step === 2 && (
          <div>
            <h1 className="text-3xl font-bold text-[#111827] mb-8">
              Tell us about your service.
            </h1>
            <div className="space-y-6">
              {/* Branch */}
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Branch
                </label>
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#e5e5e5] text-[#374151] bg-white focus:border-[#0071bc] focus:outline-none transition-colors"
                >
                  <option value="">Select branch</option>
                  {branchOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Years of Service */}
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Years of service
                </label>
                <select
                  value={yearsOfService}
                  onChange={(e) => setYearsOfService(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#e5e5e5] text-[#374151] bg-white focus:border-[#0071bc] focus:outline-none transition-colors"
                >
                  <option value="">Select years</option>
                  {yearsOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Priorities */}
        {step === 3 && (
          <div>
            <h1 className="text-3xl font-bold text-[#111827] mb-2">
              What matters most right now?
            </h1>
            <p className="text-[#6b7280] mb-8">
              Select up to 3 priorities
            </p>
            <div className="space-y-3">
              {priorityOptions.map((option) => {
                const isSelected = priorities.includes(option.value);
                const isDisabled = !isSelected && priorities.length >= 3;
                return (
                  <button
                    key={option.value}
                    onClick={() => handlePriorityToggle(option.value)}
                    disabled={isDisabled}
                    className={`w-full text-left px-5 py-4 rounded-lg border-2 transition-all duration-150 flex items-center justify-between ${
                      isSelected
                        ? 'border-[#0071bc] bg-[#eff6ff]'
                        : isDisabled
                        ? 'border-[#e5e5e5] opacity-50 cursor-not-allowed'
                        : 'border-[#e5e5e5] hover:border-[#9ca3af]'
                    }`}
                  >
                    <span className={`text-base ${
                      isSelected
                        ? 'text-[#0071bc] font-medium'
                        : 'text-[#374151]'
                    }`}>
                      {option.label}
                    </span>
                    {isSelected && (
                      <Check className="w-5 h-5 text-[#0071bc]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Continue Button */}
        <div className="mt-10">
          <Button
            onClick={handleContinue}
            disabled={!canContinue()}
            className={`w-full py-4 rounded-lg text-base font-semibold h-auto ${
              canContinue()
                ? 'bg-[#0071bc] hover:bg-[#005a9e] text-white'
                : 'bg-[#e5e5e5] text-[#9ca3af] cursor-not-allowed'
            }`}
          >
            {step === 3 ? 'Build my checklist' : 'Continue'}
          </Button>
        </div>

        {/* Back Link */}
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="w-full mt-4 text-center text-sm text-[#6b7280] hover:text-[#374151]"
          >
            ← Back
          </button>
        )}
      </div>
    </div>
  );
}
