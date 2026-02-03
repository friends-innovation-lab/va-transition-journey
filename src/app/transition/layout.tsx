'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ErrorSimulationProvider, useErrorSimulation } from '@/context/ErrorSimulationContext';

// Breadcrumb configuration for each route
const breadcrumbConfig: Record<string, { label: string; href?: string }[]> = {
  '/transition/sign-in': [
    { label: 'Home', href: '/' },
    { label: 'Leaving the Military' },
    { label: 'Sign in' },
  ],
  '/transition/profile': [
    { label: 'Home', href: '/' },
    { label: 'Leaving the Military', href: '/transition/checklist' },
    { label: 'Your Profile' },
  ],
  '/transition/onboarding': [
    { label: 'Home', href: '/' },
    { label: 'Leaving the Military', href: '/transition/checklist' },
    { label: 'Priorities' },
  ],
  '/transition/checklist': [
    { label: 'Home', href: '/' },
    { label: 'Leaving the Military' },
    { label: 'Your Checklist' },
  ],
  '/transition/checklist/apply-for-health-care': [
    { label: 'Home', href: '/' },
    { label: 'Leaving the Military', href: '/transition/checklist' },
    { label: 'Your Checklist', href: '/transition/checklist' },
    { label: 'Apply for VA Health Care' },
  ],
};

function ErrorSimulationToggle() {
  const { simulateErrors, setSimulateErrors } = useErrorSimulation();

  return (
    <div className="fixed top-20 right-4 z-[60] bg-white/95 backdrop-blur-sm rounded-lg shadow-md border border-[#e5e5e5] px-3 py-2">
      <label className="flex items-center gap-2 cursor-pointer">
        <span className="text-xs text-[#6b7280]">Simulate errors</span>
        <button
          onClick={() => setSimulateErrors(!simulateErrors)}
          className={`relative w-9 h-5 rounded-full transition-colors ${
            simulateErrors ? 'bg-[#ef4444]' : 'bg-[#d1d5db]'
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
              simulateErrors ? 'translate-x-4' : 'translate-x-0'
            }`}
          />
        </button>
      </label>
    </div>
  );
}

function TransitionLayoutInner({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);

  // Show signed-in state for pages after sign-in
  const isSignedIn = pathname !== '/transition/sign-in';

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f0]">
      {/* Crisis Banner */}
      <div className="bg-[#c4262e] text-white h-10 px-6 lg:px-12 flex items-center">
        <span className="text-sm ml-auto mr-[25%]">
          <span className="font-semibold">Veterans Crisis Line:</span>{' '}
          <a href="tel:988" className="underline text-white">Call 988 (Press 1)</a>
          {' | '}
          <a href="sms:838255" className="underline text-white">Text 838255</a>
        </span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5] h-16 flex-shrink-0">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
          {/* Left - Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/va-logo-official.png"
              alt="VA | U.S. Department of Veterans Affairs"
              width={200}
              height={44}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Center - Main Nav (hidden on mobile) */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-[15px] font-medium text-[#4b5563] hover:text-[#111827]">
              Health Care
            </a>
            <a href="#" className="text-[15px] font-medium text-[#4b5563] hover:text-[#111827]">
              Benefits
            </a>
            <a href="#" className="text-[15px] font-medium text-[#4b5563] hover:text-[#111827]">
              About VA
            </a>
          </nav>

          {/* Right - Search, Contact, Sign In/User */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block p-2 text-[#6b7280] hover:text-[#111827]">
              <Search className="w-5 h-5" />
            </button>
            <a href="#" className="hidden md:block text-[15px] text-[#4b5563] hover:text-[#111827]">
              Contact
            </a>

            {isSignedIn ? (
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2 text-sm font-medium text-[#374151] hover:text-[#111827]"
                >
                  <div className="w-8 h-8 bg-[#003f72] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">MJ</span>
                  </div>
                  <span className="hidden sm:inline">Marcus J.</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {showDropdown && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setShowDropdown(false)}
                    />
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#e5e5e5] py-2 z-50">
                      <Link
                        href="/transition/profile"
                        className="block px-4 py-2 text-sm text-[#374151] hover:bg-[#f5f5f0]"
                        onClick={() => setShowDropdown(false)}
                      >
                        Your Profile
                      </Link>
                      <Link
                        href="/"
                        className="block px-4 py-2 text-sm text-[#374151] hover:bg-[#f5f5f0]"
                        onClick={() => setShowDropdown(false)}
                      >
                        Sign out
                      </Link>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <Button className="bg-[#0071bc] hover:bg-[#005a9e] text-white text-sm font-medium px-5 py-2 rounded-md">
                Sign in
              </Button>
            )}

            <button className="lg:hidden p-2 text-[#4b5563] hover:text-[#111827]">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      {breadcrumbConfig[pathname] && (
        <div className="sticky top-16 z-40 bg-[#f5f5f0] border-b border-[#e5e5e5]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-3">
            <nav className="flex items-center gap-2 text-sm">
              {breadcrumbConfig[pathname].map((crumb, index) => {
                const isLast = index === breadcrumbConfig[pathname].length - 1;
                return (
                  <span key={index} className="flex items-center gap-2">
                    {index > 0 && <span className="text-[#9ca3af]">/</span>}
                    {crumb.href && !isLast ? (
                      <Link
                        href={crumb.href}
                        className="text-[#6b7280] hover:text-[#0071bc] hover:underline"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className={isLast ? 'text-[#374151]' : 'text-[#6b7280]'}>
                        {crumb.label}
                      </span>
                    )}
                  </span>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] py-16 px-6 lg:px-12 flex-shrink-0">
        <div className="max-w-[1400px] mx-auto">
          {/* 5-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Column 1 - Contact */}
            <div>
              <h3 className="text-[13px] font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-[#d1d5db] hover:text-white transition-colors">Contact us</a></li>
                <li><a href="#" className="text-sm text-[#d1d5db] hover:text-white transition-colors">Find a VA location</a></li>
                <li><a href="#" className="text-sm text-[#d1d5db] hover:text-white transition-colors">1-800-827-1000</a></li>
              </ul>
            </div>

            {/* Column 2 - Health Care */}
            <div>
              <h3 className="text-[13px] font-semibold text-white uppercase tracking-wider mb-4">Health Care</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-[#d1d5db] hover:text-white transition-colors">Apply for health care</a></li>
                <li><a href="#" className="text-sm text-[#d1d5db] hover:text-white transition-colors">My HealtheVet</a></li>
                <li><a href="#" className="text-sm text-[#d1d5db] hover:text-white transition-colors">Prescriptions</a></li>
                <li><a href="#" className="text-sm text-[#d1d5db] hover:text-white transition-colors">Mental health</a></li>
              </ul>
            </div>

            {/* Column 3 - Benefits */}
            <div>
              <h3 className="text-[13px] font-semibold text-white uppercase tracking-wider mb-4">Benefits</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-[#d1d5db] hover:text-white transition-colors">Disability</a></li>
                <li><a href="#" className="text-sm text-[#d1d5db] hover:text-white transition-colors">Education (GI Bill)</a></li>
                <li><a href="#" className="text-sm text-[#d1d5db] hover:text-white transition-colors">Careers & employment</a></li>
                <li><a href="#" className="text-sm text-[#d1d5db] hover:text-white transition-colors">Housing assistance</a></li>
              </ul>
            </div>

            {/* Column 4 - Resources */}
            <div>
              <h3 className="text-[13px] font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-[#d1d5db] hover:text-white transition-colors">VSO finder</a></li>
                <li><a href="#" className="text-sm text-[#d1d5db] hover:text-white transition-colors">Life insurance</a></li>
                <li><a href="#" className="text-sm text-[#d1d5db] hover:text-white transition-colors">Burials & memorials</a></li>
                <li><a href="#" className="text-sm text-[#d1d5db] hover:text-white transition-colors">Family & caregivers</a></li>
              </ul>
            </div>

            {/* Column 5 - This Demo */}
            <div>
              <h3 className="text-[13px] font-semibold text-white uppercase tracking-wider mb-4">This Demo</h3>
              <ul className="space-y-3">
                <li><a href="https://github.com/friends-innovation-lab/va-transition-journey/blob/main/docs/OPERATING-MODEL.md" target="_blank" rel="noopener noreferrer" className="text-sm text-[#d1d5db] hover:text-white transition-colors">Operating Model ↗</a></li>
                <li><a href="https://github.com/friends-innovation-lab/va-transition-journey/blob/main/docs/ARCHITECTURE.md" target="_blank" rel="noopener noreferrer" className="text-sm text-[#d1d5db] hover:text-white transition-colors">Architecture ↗</a></li>
                <li><a href="https://github.com/friends-innovation-lab/va-transition-journey" target="_blank" rel="noopener noreferrer" className="text-sm text-[#d1d5db] hover:text-white transition-colors">GitHub Repo ↗</a></li>
                <li><a href="https://friendsfromthecity.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#d1d5db] hover:text-white transition-colors">Friends Innovation Lab ↗</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#333] pt-6 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[13px] text-[#d1d5db]">
                © 2026 U.S. Department of Veterans Affairs
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-[13px] text-[#d1d5db]">
                <a href="#" className="hover:text-white transition-colors">Accessibility</a>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">FOIA</a>
                <a href="#" className="hover:text-white transition-colors">No FEAR Act</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Error Simulation Toggle */}
      <ErrorSimulationToggle />
    </div>
  );
}

export default function TransitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorSimulationProvider>
      <TransitionLayoutInner>{children}</TransitionLayoutInner>
    </ErrorSimulationProvider>
  );
}
