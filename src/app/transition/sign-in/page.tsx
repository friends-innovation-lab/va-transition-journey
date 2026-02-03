'use client';

import Link from 'next/link';

export default function SignInPage() {
  return (
    <div className="flex-grow flex items-center justify-center py-16 px-6">
      <div className="w-full max-w-[450px]">
        {/* Card */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          {/* Header */}
          <h1 className="text-2xl font-bold text-[#111827] mb-2">
            Sign in to start your journey
          </h1>
          <p className="text-[#6b7280] mb-8">
            We&apos;ll save your progress and personalize your checklist.
          </p>

          {/* Sign-in Buttons */}
          <div className="space-y-4">
            {/* Login.gov */}
            <button className="w-full flex items-center justify-center gap-3 px-6 py-4 border-2 border-[#0071bc] rounded-lg hover:bg-[#eff6ff] transition-colors">
              <div className="w-8 h-8 bg-[#0071bc] rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-[#0071bc] font-semibold">Sign in with Login.gov</span>
            </button>

            {/* ID.me */}
            <button className="w-full flex items-center justify-center gap-3 px-6 py-4 border-2 border-[#2d8633] rounded-lg hover:bg-[#f0fdf4] transition-colors">
              <div className="w-8 h-8 bg-[#2d8633] rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">ID</span>
              </div>
              <span className="text-[#2d8633] font-semibold">Sign in with ID.me</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#e5e5e5]"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-[#6b7280]">or</span>
            </div>
          </div>

          {/* Create Account */}
          <p className="text-center text-[#374151]">
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
        </div>

        {/* Skip Link */}
        <div className="mt-6 text-center">
          <Link
            href="/transition/onboarding"
            className="text-sm text-[#6b7280] hover:text-[#374151] inline-flex items-center gap-1"
          >
            Skip for now
            <span>→</span>
          </Link>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-[#eff6ff] border border-[#bfdbfe] rounded-lg p-4">
          <p className="text-sm text-[#1e40af]">
            <strong>Why sign in?</strong> Your progress will be saved, and we can pre-fill forms with your information from VA records.
          </p>
        </div>
      </div>
    </div>
  );
}
