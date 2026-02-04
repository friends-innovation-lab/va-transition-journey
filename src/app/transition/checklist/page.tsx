'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Check, ChevronRight, X, ArrowRight, AlertTriangle, ArrowLeft } from 'lucide-react';
import { useErrorSimulation } from '@/context/ErrorSimulationContext';
import { JourneyBanner } from '@/components/JourneyBanner';
import { useReviewerMode } from '@/context/ReviewerModeContext';
import { LayerBadge, UXAnnotation, ReviewerModeToggle } from '@/components/ReviewerOverlay';

interface OnboardingData {
  separationDate: string;
  branch: string;
  yearsOfService: string;
  priorities: string[];
}

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  category: string;
  completed: boolean;
  href: string | null;
  time: string;
  isCurrent?: boolean;
}

const checklistItems: ChecklistItem[] = [
  {
    id: 'va-register',
    title: 'Register on VA.gov',
    description: 'Create your account to access VA services online',
    category: 'career',
    completed: true,
    href: null,
    time: '~5 min',
  },
  {
    id: 'dd214',
    title: 'Request your DD-214',
    description: 'Official discharge document needed for benefits',
    category: 'career',
    completed: true,
    href: null,
    time: '~10 min',
  },
  {
    id: 'va-healthcare',
    title: 'Apply for VA health care',
    description: 'Enroll online at VA.gov or call 1-877-222-8387',
    category: 'healthcare',
    completed: false,
    href: '/transition/checklist/apply-for-health-care',
    time: '~20 min',
    isCurrent: true,
  },
  {
    id: 'va-claim',
    title: 'File your VA disability claim',
    description: 'Start the Benefits Delivery at Discharge (BDD) program',
    category: 'disability',
    completed: false,
    href: null,
    time: '~45 min',
  },
  {
    id: 'gi-bill',
    title: 'Review GI Bill eligibility',
    description: 'Choose your education benefit and apply online',
    category: 'education',
    completed: false,
    href: null,
    time: '~10 min',
  },
  {
    id: 'tap',
    title: 'Register for TAP (Transition Assistance Program)',
    description: 'Required transition counseling and employment assistance',
    category: 'career',
    completed: false,
    href: null,
    time: '~15 min',
  },
  {
    id: 'resume',
    title: 'Create your civilian resume',
    description: 'Translate your military experience for employers',
    category: 'career',
    completed: false,
    href: null,
    time: '~30 min',
  },
  {
    id: 'housing',
    title: 'Research VA home loan options',
    description: 'Get your Certificate of Eligibility (COE)',
    category: 'housing',
    completed: false,
    href: null,
    time: '~15 min',
  },
];

export default function ChecklistPage() {
  const { simulateErrors } = useErrorSimulation();
  const { reviewerMode } = useReviewerMode();
  const [onboardingData, setOnboardingData] = useState<OnboardingData | null>(null);
  const [checklist, setChecklist] = useState(checklistItems);
  const [showSuccess, setShowSuccess] = useState(true);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('va-onboarding');
    if (data) {
      setOnboardingData(JSON.parse(data));
    }
    // Hide success message after 3 seconds
    const timer = setTimeout(() => setShowSuccess(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const toggleItem = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setChecklist(checklist.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const handleItemClick = (item: ChecklistItem) => {
    if (!item.href) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
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
      {/* Layer Badge for Reviewer Mode */}
      <LayerBadge
        layerName="Journey App — Autonomous Product"
        description="Own codebase. Own team. Deploys independently. Uses shared design system and profile data."
      />

      {/* Journey Banner */}
      <div className="relative">
        <JourneyBanner
          journeyName="Leaving the Military"
          journeyIcon="🎖️"
          subtitle="Your personalized transition checklist"
        />
        {/* Reviewer annotation for journey banner */}
        {reviewerMode && (
          <div className="max-w-3xl mx-auto px-6 py-2">
            <UXAnnotation>Clear context: the Veteran knows which journey they&apos;re in.</UXAnnotation>
          </div>
        )}
      </div>

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

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div className="bg-[#1f2937] text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3">
            <span>This task detail is coming soon.</span>
            <button onClick={() => setShowToast(false)} className="text-white/70 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-10">
        {/* Progress */}
        <div className="mb-8">
          {/* Reviewer annotation for progress */}
          {reviewerMode && (
            <div className="mb-4">
              <UXAnnotation>Journey-specific progress tracking. Veteran sees momentum.</UXAnnotation>
            </div>
          )}
          <div className="bg-white rounded-xl p-6 shadow-sm">
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
        </div>

        {/* Error simulation banner */}
        {simulateErrors && (
          <div className="bg-[#fef3c7] border border-[#f59e0b] rounded-lg p-4 mb-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#d97706] flex-shrink-0 mt-0.5" />
            <span className="text-sm text-[#92400e]">
              Having trouble syncing your progress. Changes will save when connection is restored.
            </span>
          </div>
        )}

        {/* Checklist */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-[#e5e5e5]">
            <h2 className="text-lg font-semibold text-[#111827]">
              Your Checklist
            </h2>
            {/* Reviewer annotation for task list */}
            {reviewerMode && (
              <div className="mt-3">
                <UXAnnotation>Personalized based on service record, separation date, and eligibility. Not a generic checklist.</UXAnnotation>
              </div>
            )}
          </div>
          <div className="divide-y divide-[#e5e5e5]">
            {filteredChecklist.map((item, index) => {
              const ItemWrapper = item.href ? Link : 'div';
              const wrapperProps = item.href
                ? { href: item.href }
                : { onClick: () => handleItemClick(item) };

              // Determine styling based on item state
              const isCompleted = item.completed;
              const isCurrent = item.isCurrent && !item.completed;

              // Show annotation after second completed task
              const showCompletedAnnotation = reviewerMode && isCompleted && index === 1;

              return (
                <div key={item.id}>
                  <ItemWrapper
                    {...(wrapperProps as any)}
                    className={`w-full text-left px-6 py-5 flex items-start gap-4 transition-colors cursor-pointer block ${
                      isCurrent
                        ? 'bg-[#eff6ff] border-l-4 border-l-[#0071bc]'
                        : 'hover:bg-[#fafafa]'
                    }`}
                  >
                  <button
                    onClick={(e) => toggleItem(item.id, e)}
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5 transition-colors ${
                      isCompleted
                        ? 'bg-[#22c55e] border-[#22c55e]'
                        : 'border-[#d1d5db] hover:border-[#9ca3af]'
                    }`}
                  >
                    {isCompleted && <Check className="w-4 h-4 text-white" />}
                  </button>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className={`text-base font-medium transition-colors ${
                        isCompleted ? 'text-[#9ca3af] line-through' : 'text-[#111827]'
                      }`}>
                        {item.title}
                      </h3>
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        isCompleted
                          ? 'bg-[#dcfce7] text-[#166534]'
                          : 'bg-[#f3f4f6] text-[#6b7280]'
                      }`}>
                        {isCompleted ? '✓ Complete' : item.time}
                      </span>
                    </div>
                    <p className={`text-sm mt-1 ${
                      isCompleted ? 'text-[#d1d5db]' : 'text-[#6b7280]'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                  {isCurrent ? (
                    <div className="flex items-center gap-1 text-[#0071bc] font-medium text-sm flex-shrink-0 mt-1">
                      <span>Start</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  ) : (
                    <ChevronRight className={`w-5 h-5 flex-shrink-0 mt-1 ${
                      isCompleted ? 'text-[#d1d5db]' : 'text-[#9ca3af]'
                    }`} />
                  )}
                </ItemWrapper>
                {/* Annotation for completed tasks */}
                {showCompletedAnnotation && (
                  <div className="px-6 py-3 bg-[#fafafa]">
                    <UXAnnotation>Tasks auto-completed from profile confirmation and eligibility check.</UXAnnotation>
                  </div>
                )}
              </div>
              );
            })}
          </div>
        </div>

        {/* Back to All Journeys */}
        <div className="mt-8">
          {/* Reviewer annotation for back link */}
          {reviewerMode && (
            <div className="mb-3">
              <UXAnnotation>Easy exit to dashboard. Journeys are parallel, not linear.</UXAnnotation>
            </div>
          )}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#6b7280] hover:text-[#374151] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Journeys</span>
          </Link>
        </div>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#6b7280]">
            Need help? Call <a href="tel:1-800-827-1000" className="text-[#0071bc] hover:underline">1-800-827-1000</a>
          </p>
        </div>
      </div>

      {/* Reviewer Mode Toggle */}
      <ReviewerModeToggle />
    </div>
  );
}
