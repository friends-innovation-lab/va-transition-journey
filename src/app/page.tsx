'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Briefcase,
  FileText,
  Heart,
  GraduationCap,
  Home as HomeIcon,
  Flower2,
  Menu,
  Search,
  ChevronDown,
  X,
} from 'lucide-react';

interface Journey {
  id: string;
  title: string;
  description: string;
  icon: typeof Briefcase;
  active: boolean;
  href?: string;
  badge?: {
    text: string;
    type: 'amber' | 'emerald' | 'blue';
  };
}

const journeys: Journey[] = [
  {
    id: 'transition',
    title: 'Leaving the Military',
    description: 'Navigate your transition with a personalized timeline covering benefits enrollment, career preparation, healthcare setup, and everything you need before and after separation.',
    icon: Briefcase,
    active: true,
    href: '/transition/sign-in',
    badge: {
      text: 'In progress — 2 of 5 tasks',
      type: 'blue',
    },
  },
  {
    id: 'claims',
    title: 'Filing a Claim',
    description: 'File disability claims, upload supporting evidence, track your status in real-time, and understand each step of the decision process.',
    icon: FileText,
    active: false,
    badge: {
      text: '1 claim in progress',
      type: 'amber',
    },
  },
  {
    id: 'healthcare',
    title: 'Getting Care',
    description: 'Enroll in VA health care, find and schedule appointments, manage prescriptions, message your care team, and access your health records.',
    icon: Heart,
    active: false,
    badge: {
      text: 'Enrolled ✓',
      type: 'emerald',
    },
  },
  {
    id: 'education',
    title: 'Education Benefits',
    description: 'Apply for GI Bill benefits, compare schools, track your remaining entitlement, manage housing payments, and transfer benefits to dependents.',
    icon: GraduationCap,
    active: false,
  },
  {
    id: 'homeloan',
    title: 'Buying a Home',
    description: 'Use your VA home loan benefit to buy with no down payment.',
    icon: HomeIcon,
    active: false,
  },
  {
    id: 'endoflife',
    title: 'End of Life',
    description: 'Plan burial arrangements, apply for survivor benefits, access memorial services, and ensure your family receives the support they\'ve earned.',
    icon: Flower2,
    active: false,
  },
];

function JourneyCard({
  journey,
  isSignedIn,
  onMockJourneyClick
}: {
  journey: Journey;
  isSignedIn: boolean;
  onMockJourneyClick?: () => void;
}) {
  const Icon = journey.icon;
  const isMockJourney = !journey.active && journey.badge;

  const cardContent = (
    <div
      className="group flex items-start gap-5 py-8 px-4 border-t border-[#e5e5e5] transition-all duration-200 hover:bg-[#fafaf8] cursor-pointer"
    >
      {/* Icon - 64px flat blue */}
      <div className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center bg-[#dbeafe]">
        <Icon
          className="w-7 h-7 text-[#0071bc]"
          strokeWidth={1.5}
        />
      </div>

      {/* Content */}
      <div className="flex-grow min-w-0">
        {/* Title row with arrow */}
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-lg font-semibold text-[#111827]">
            {journey.title}
          </h3>
          <span className="text-[#9ca3af] transition-transform duration-150 ease-out group-hover:translate-x-1.5">→</span>
        </div>

        {/* Description */}
        <p className="text-[15px] text-[#4b5563] leading-relaxed mb-3">
          {journey.description}
        </p>

        {/* Cross-journey badge - only show when signed in, positioned below description */}
        {isSignedIn && journey.badge && (
          <div className="mb-3">
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full inline-block ${
                journey.badge.type === 'amber'
                  ? 'bg-[#fef3c7] text-[#b45309]'
                  : journey.badge.type === 'blue'
                    ? 'bg-[#dbeafe] text-[#1d4ed8]'
                    : 'bg-[#d1fae5] text-[#047857]'
              }`}
            >
              {journey.badge.text}
            </span>
          </div>
        )}

        {/* Action */}
        <span className="text-[15px] font-medium text-[#111827] border-b-2 border-[#f59e0b] hover:border-[#d97706] pb-0.5 inline-block">
          {journey.active && isSignedIn ? 'Continue' : 'Start Journey'}
        </span>
      </div>
    </div>
  );

  // Active journey - links to checklist when signed in, sign-in when not
  if (journey.active) {
    const href = isSignedIn ? '/transition/checklist' : (journey.href || '#');
    return (
      <Link href={href} className="block">
        {cardContent}
      </Link>
    );
  }

  // Mock journey with badge - show toast when clicked (only when signed in)
  if (isMockJourney && isSignedIn && onMockJourneyClick) {
    return (
      <button onClick={onMockJourneyClick} className="block w-full text-left">
        {cardContent}
      </button>
    );
  }

  return cardContent;
}

export default function Home() {
  const [reviewerMode, setReviewerMode] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleMockJourneyClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. CRISIS BANNER - Positioned at 3/4 */}
      <div className="bg-[#c4262e] text-white h-10 px-6 lg:px-12 flex items-center">
        <span className="text-sm ml-auto mr-[25%]">
          <span className="font-semibold">Veterans Crisis Line:</span>{' '}
          <a href="tel:988" className="underline text-white">Call 988 (Press 1)</a>
          {' | '}
          <a href="sms:838255" className="underline text-white">Text 838255</a>
        </span>
      </div>

      {/* 2. HEADER - STICKY */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5] h-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
          {/* Left - Official VA logo with seal */}
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

          {/* Right - Search, Contact, Sign In */}
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
                      <button
                        onClick={() => {
                          setIsSignedIn(false);
                          setShowDropdown(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-[#374151] hover:bg-[#f5f5f0]"
                      >
                        Sign out
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <Button
                onClick={() => setIsSignedIn(true)}
                className="bg-[#0071bc] hover:bg-[#005a9e] text-white text-sm font-medium px-5 py-2 rounded-md"
              >
                Sign in
              </Button>
            )}
            <button className="lg:hidden p-2 text-[#4b5563] hover:text-[#111827]">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION */}
      <section
        className="relative flex flex-col"
        style={{
          background: 'linear-gradient(135deg, #003f72 0%, #0071bc 100%)',
        }}
      >
        {/* Hero Content */}
        <div className="flex-grow flex items-center py-20 px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto w-full">
            <div className="max-w-2xl">
              {isSignedIn ? (
                <>
                  <h1 className="mb-3">
                    <span
                      className="block text-[56px] text-white leading-[1.1] tracking-[-0.02em]"
                      style={{ fontFamily: 'var(--font-instrument-serif)' }}
                    >
                      Welcome back, Marcus.
                    </span>
                  </h1>
                  <p className="text-lg text-white max-w-xl mt-6 mb-8">
                    Pick up where you left off, or start something new.
                  </p>
                </>
              ) : (
                <>
                  <h1 className="mb-3">
                    <span
                      className="block text-[56px] text-white leading-[1.1] tracking-[-0.02em]"
                      style={{ fontFamily: 'var(--font-instrument-serif)' }}
                    >
                      You served your country.
                    </span>
                    <span
                      className="block text-[56px] text-white leading-[1.1] tracking-[-0.02em] italic"
                      style={{ fontFamily: 'var(--font-instrument-serif)' }}
                    >
                      Let us return the favor.
                    </span>
                  </h1>
                  <p className="text-lg text-white max-w-xl mt-6 mb-8">
                    What brings you here today? Choose a journey. We&apos;ll show you exactly what steps to take, what documents you need, and what to expect.
                  </p>
                </>
              )}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => document.getElementById('journeys')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-[#003f72] hover:bg-gray-100 font-semibold px-7 py-3.5 rounded-lg text-base h-auto"
                >
                  {isSignedIn ? 'View your journeys' : 'Find your journey'}
                </Button>
                {!isSignedIn && (
                  <Button
                    onClick={() => setIsSignedIn(true)}
                    variant="outline"
                    className="bg-transparent border border-white/50 text-white hover:bg-white/10 px-7 py-3.5 rounded-lg text-base h-auto"
                  >
                    Sign in
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Veterans Portrait Strip */}
        <div className="flex justify-center w-full">
          <Image
            src="/veterans-banner.png"
            alt="Portraits of Veterans"
            width={1920}
            height={200}
            className="w-[85%] h-auto"
            priority
          />
        </div>
      </section>

      {/* 4. JOURNEY CARDS SECTION */}
      <section id="journeys" className="bg-[#f5f5f0] py-20 px-6 lg:px-12 flex-grow">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header - only show for unauthenticated */}
          {!isSignedIn && (
            <div className="mb-12">
              <h2 className="text-[40px] font-bold text-[#111827] tracking-tight mb-4">
                Your Journeys
              </h2>
              <p className="text-[17px] text-[#4b5563] max-w-2xl">
                Choose a journey. We&apos;ll show you exactly what steps to take, what documents you need, and what to expect.
              </p>
            </div>
          )}

          {/* Cards - 3 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {journeys.map((journey) => (
              <JourneyCard
                key={journey.id}
                journey={journey}
                isSignedIn={isSignedIn}
                onMockJourneyClick={handleMockJourneyClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-[#1a1a1a] py-16 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* 5-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Column 1 - VA Info */}
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

      {/* Toast for mock journeys */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div className="bg-[#1f2937] text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3">
            <span>This journey is simulated for the demo.</span>
            <button onClick={() => setShowToast(false)} className="text-white/70 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 6. REVIEWER MODE Toggle - Pill shape */}
      <button
        onClick={() => setReviewerMode(!reviewerMode)}
        className="fixed bottom-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full shadow-lg transition-all duration-300 text-sm font-medium"
        style={{
          right: reviewerMode ? '340px' : '24px',
          backgroundColor: reviewerMode ? '#003f72' : 'white',
          color: reviewerMode ? '#ffffff' : '#333333',
          border: reviewerMode ? 'none' : '1px solid #e5e5e5',
        }}
      >
        👁 Reviewer Mode {reviewerMode ? 'ON' : 'OFF'}
      </button>

      {/* Reviewer Mode Sidebar Panel */}
      <div
        className="fixed top-0 h-screen w-80 bg-[#1a1a1a] text-white p-6 overflow-y-auto z-40 transition-all duration-300"
        style={{
          right: reviewerMode ? 0 : '-320px',
          boxShadow: reviewerMode ? '-4px 0 24px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-[#fac922]">
            Reviewer Notes
          </h2>
          <button
            onClick={() => setReviewerMode(false)}
            className="text-white text-2xl hover:text-gray-300 leading-none"
          >
            ×
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-[#73b3e7] font-bold mb-2 text-xs uppercase tracking-wider">
              What You&apos;re Seeing
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              A journey-based front door that replaces VA&apos;s org-chart navigation with 6 Veteran life moments. Instead of &quot;Benefits, Health Care, Education...&quot; we ask &quot;What are you trying to do?&quot;
            </p>
          </div>

          <div>
            <h3 className="text-[#73b3e7] font-bold mb-2 text-xs uppercase tracking-wider">
              Why It Matters
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Veterans think in journeys, not departments. &quot;I&apos;m separating from service&quot; is how they frame their needs — not &quot;I need VBA form 21-526EZ.&quot; This routes them to autonomous apps, not link forests.
            </p>
          </div>

          <div>
            <h3 className="text-[#73b3e7] font-bold mb-2 text-xs uppercase tracking-wider">
              The Model
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Each journey is an independent app with its own team, codebase, and deploy pipeline — sharing only auth, design system, and Veteran profile. Teams ship without waiting on 44 other teams.
            </p>
          </div>

          <div className="border-t border-gray-700 pt-4">
            <p className="text-gray-500 text-sm">
              Toggle off to see it as a Veteran would.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
