'use client';

import { useRouter } from 'next/navigation';
import { useReviewerMode } from '@/context/ReviewerModeContext';
import { LayerBadge, UXAnnotation, ReviewerModeToggle } from '@/components/ReviewerOverlay';

export default function SignInPage() {
  const router = useRouter();
  const { reviewerMode } = useReviewerMode();

  const handleSignIn = () => {
    localStorage.setItem('va-auth', 'true');
    sessionStorage.setItem('va-profile-first-visit', 'true');
    router.push('/transition/profile');
  };

  return (
    <div className="flex-grow flex flex-col">
      {/* Layer Badge for Reviewer Mode */}
      <LayerBadge
        layerName="Shared Platform Layer — Authentication"
        description="Login.gov / ID.me integration shared by all journeys. One sign-in for all of VA."
      />

      <div className="flex-grow flex items-center justify-center py-16 px-6">
        <div className="w-full max-w-[450px]">
          {/* Reviewer annotation */}
          {reviewerMode && (
            <div className="mb-4">
              <UXAnnotation>Shared auth layer. Journey Apps never handle credentials directly.</UXAnnotation>
            </div>
          )}

          {/* Card */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            {/* Header */}
            <h1 className="text-2xl font-bold text-[#111827] mb-2">
              Sign in to continue
            </h1>
            <p className="text-[#6b7280] mb-4">
              We&apos;ll pull your service record from DoD so you don&apos;t have to enter it manually.
            </p>
            {/* Reviewer annotation for DoD text */}
            {reviewerMode && (
              <div className="mb-6">
                <UXAnnotation>Preparing the user: their data will already be there.</UXAnnotation>
              </div>
            )}

          {/* Sign-in Buttons */}
          <div className="space-y-4">
            {/* Login.gov */}
            <button
              onClick={handleSignIn}
              className="w-full h-14 flex items-center justify-center gap-3 px-6 bg-[#112e51] rounded-lg hover:bg-[#1a4480] transition-colors"
            >
              <div className="w-6 h-6 bg-[#e21c3d] rounded flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white font-semibold">Sign in with Login.gov</span>
            </button>
            {/* Reviewer annotation for Login.gov */}
            {reviewerMode && (
              <div className="mt-2">
                <UXAnnotation>Uses VA&apos;s existing identity infrastructure. No new identity system needed.</UXAnnotation>
              </div>
            )}

            {/* ID.me */}
            <button
              onClick={handleSignIn}
              className="w-full h-14 flex items-center justify-center gap-3 px-6 bg-[#2d8633] rounded-lg hover:bg-[#236b29] transition-colors"
            >
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center flex-shrink-0">
                <span className="text-[#2d8633] font-bold text-xs">ID</span>
              </div>
              <span className="text-white font-semibold">Sign in with ID.me</span>
            </button>
          </div>

          {/* Create Account */}
          <p className="text-center text-[#374151] mt-6 text-sm">
            Don&apos;t have an account?{' '}
            <a
              href="https://login.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0071bc] font-medium hover:underline"
            >
              Create one with Login.gov
            </a>
          </p>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#e5e5e5]"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-[#6b7280]">or</span>
            </div>
          </div>

          {/* Skip Link */}
          <div className="text-center">
            <button
              onClick={handleSignIn}
              className="text-sm text-[#6b7280] hover:text-[#374151] hover:underline inline-flex items-center gap-1"
            >
              Skip for now
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Reviewer Mode Toggle */}
    <ReviewerModeToggle />
  </div>
  );
}
