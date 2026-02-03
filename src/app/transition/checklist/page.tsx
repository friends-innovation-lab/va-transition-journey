'use client';

import { useEffect, useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';

interface OnboardingData {
  separationDate: string;
  branch: string;
  yearsOfService: string;
  priorities: string[];
}

const checklistItems = [
  {
    id: 'tap',
    title: 'Register for TAP (Transition Assistance Program)',
    description: 'Required transition counseling and employment assistance',
    category: 'career',
    completed: false,
  },
  {
    id: 'medical-records',
    title: 'Request your complete medical records',
    description: 'Get copies from your military treatment facility',
    category: 'healthcare',
    completed: false,
  },
  {
    id: 'va-claim',
    title: 'File your VA disability claim',
    description: 'Start the Benefits Delivery at Discharge (BDD) program',
    category: 'disability',
    completed: false,
  },
  {
    id: 'va-healthcare',
    title: 'Apply for VA health care',
    description: 'Enroll online at VA.gov or call 1-877-222-8387',
    category: 'healthcare',
    completed: false,
  },
  {
    id: 'gi-bill',
    title: 'Apply for GI Bill benefits',
    description: 'Choose your education benefit and apply online',
    category: 'education',
    completed: false,
  },
  {
    id: 'resume',
    title: 'Create your civilian resume',
    description: 'Translate your military experience for employers',
    category: 'career',
    completed: false,
  },
  {
    id: 'housing',
    title: 'Research VA home loan options',
    description: 'Get your Certificate of Eligibility (COE)',
    category: 'housing',
    completed: false,
  },
  {
    id: 'mental-health',
    title: 'Schedule a mental health screening',
    description: 'Free, confidential support available to all Veterans',
    category: 'mentalhealth',
    completed: false,
  },
];

export default function ChecklistPage() {
  const [onboardingData, setOnboardingData] = useState<OnboardingData | null>(null);
  const [checklist, setChecklist] = useState(checklistItems);
  const [showSuccess, setShowSuccess] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem('va-onboarding');
    if (data) {
      setOnboardingData(JSON.parse(data));
    }
    // Hide success message after 3 seconds
    const timer = setTimeout(() => setShowSuccess(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const toggleItem = (id: string) => {
    setChecklist(checklist.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  // Filter checklist based on priorities
  const filteredChecklist = onboardingData?.priorities.length
    ? checklist.filter(item =>
        onboardingData.priorities.includes(item.category) ||
        item.category === 'career' // Always show career items
      )
    : checklist;

  const completedCount = filteredChecklist.filter(item => item.completed).length;
  const progress = Math.round((completedCount / filteredChecklist.length) * 100);

  return (
    <div className="flex-grow">
      {/* Success Message */}
      {showSuccess && (
        <div className="bg-[#dcfce7] border-b border-[#bbf7d0] py-4 px-6">
          <div className="max-w-3xl mx-auto flex items-center gap-3">
            <div className="w-6 h-6 bg-[#22c55e] rounded-full flex items-center justify-center flex-shrink-0">
              <Check className="w-4 h-4 text-white" />
            </div>
            <p className="text-[#166534] font-medium">
              Got it. Here&apos;s your personalized checklist.
            </p>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-10">
        {/* Progress */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#111827]">Your Progress</h2>
            <span className="text-2xl font-bold text-[#0071bc]">{progress}%</span>
          </div>
          <div className="h-3 bg-[#e5e5e5] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#0071bc] rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-[#6b7280] mt-3">
            {completedCount} of {filteredChecklist.length} tasks completed
          </p>
        </div>

        {/* Checklist */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-[#e5e5e5]">
            <h2 className="text-lg font-semibold text-[#111827]">
              Your Checklist
            </h2>
          </div>
          <div className="divide-y divide-[#e5e5e5]">
            {filteredChecklist.map((item) => (
              <button
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className="w-full text-left px-6 py-5 flex items-start gap-4 hover:bg-[#fafafa] transition-colors"
              >
                <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5 transition-colors ${
                  item.completed
                    ? 'bg-[#22c55e] border-[#22c55e]'
                    : 'border-[#d1d5db]'
                }`}>
                  {item.completed && <Check className="w-4 h-4 text-white" />}
                </div>
                <div className="flex-grow">
                  <h3 className={`text-base font-medium transition-colors ${
                    item.completed ? 'text-[#9ca3af] line-through' : 'text-[#111827]'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm mt-1 ${
                    item.completed ? 'text-[#d1d5db]' : 'text-[#6b7280]'
                  }`}>
                    {item.description}
                  </p>
                </div>
                <ChevronRight className={`w-5 h-5 flex-shrink-0 mt-1 ${
                  item.completed ? 'text-[#d1d5db]' : 'text-[#9ca3af]'
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#6b7280]">
            Need help? Call <a href="tel:1-800-827-1000" className="text-[#0071bc] hover:underline">1-800-827-1000</a>
          </p>
        </div>
      </div>
    </div>
  );
}
