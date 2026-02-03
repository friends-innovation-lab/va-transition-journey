'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

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
  const [priorities, setPriorities] = useState<string[]>([]);
  const [showToast, setShowToast] = useState(false);

  const handlePriorityToggle = (value: string) => {
    if (priorities.includes(value)) {
      setPriorities(priorities.filter((p) => p !== value));
    } else if (priorities.length < 3) {
      setPriorities([...priorities, value]);
    }
  };

  const handleContinue = () => {
    // Save to localStorage
    localStorage.setItem('va-onboarding', JSON.stringify({
      priorities,
    }));
    setShowToast(true);
    setTimeout(() => {
      router.push('/transition/checklist');
    }, 1500);
  };

  const canContinue = priorities.length > 0;

  return (
    <div className="bg-white flex-grow relative">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-24 right-6 z-50 animate-in slide-in-from-right duration-300">
          <div className="bg-white text-[#166534] px-5 py-4 rounded-lg shadow-lg border border-[#bbf7d0] flex items-start gap-3 max-w-sm">
            <div className="w-5 h-5 bg-[#22c55e] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm leading-relaxed">Preferences saved. Your checklist has been personalized.</span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-[600px] mx-auto px-6 py-12">
        {/* Header */}
        <h1 className="text-[32px] font-bold text-[#111827] mb-2">
          What matters most right now?
        </h1>
        <p className="text-base text-[#6b7280] mb-8">
          Select up to 3. We&apos;ll prioritize your checklist.
        </p>

        {/* Priority Cards - 2 column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {priorityOptions.map((option) => {
            const isSelected = priorities.includes(option.value);
            const isDisabled = !isSelected && priorities.length >= 3;
            return (
              <button
                key={option.value}
                onClick={() => handlePriorityToggle(option.value)}
                disabled={isDisabled}
                className={`text-left px-5 py-4 rounded-lg border-2 transition-all duration-150 flex items-center justify-between ${
                  isSelected
                    ? 'border-[#0071bc] bg-[#dbeafe]'
                    : isDisabled
                    ? 'border-[#e5e5e5] opacity-50 cursor-not-allowed'
                    : 'border-[#e5e5e5] hover:border-[#9ca3af] bg-white'
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

        {/* Continue Button */}
        <Button
          onClick={handleContinue}
          disabled={!canContinue}
          className={`w-full py-4 rounded-lg text-base font-semibold h-auto ${
            canContinue
              ? 'bg-[#0071bc] hover:bg-[#005a9e] text-white'
              : 'bg-[#e5e5e5] text-[#9ca3af] cursor-not-allowed'
          }`}
        >
          Build my checklist
        </Button>
      </div>
    </div>
  );
}
