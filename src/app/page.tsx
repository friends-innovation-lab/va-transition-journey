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
  Phone,
  Home as HomeIcon,
  Menu,
  ArrowRight,
} from 'lucide-react';

const journeys = [
  {
    id: 'transition',
    title: 'Leaving the Military',
    description: 'Your personalized checklist for a successful transition to civilian life.',
    icon: Briefcase,
    active: true,
    href: '/transition',
  },
  {
    id: 'claims',
    title: 'Filing a Claim',
    description: 'Track your disability claim status and submit evidence.',
    icon: FileText,
    active: false,
  },
  {
    id: 'healthcare',
    title: 'Getting Care',
    description: 'Enroll in VA health care, schedule appointments, and manage prescriptions.',
    icon: Heart,
    active: false,
  },
  {
    id: 'education',
    title: 'Education Benefits',
    description: 'Use your GI Bill benefits and track your remaining entitlement.',
    icon: GraduationCap,
    active: false,
  },
  {
    id: 'crisis',
    title: 'Crisis Support',
    description: 'Immediate help and resources when you need them most.',
    icon: Phone,
    active: false,
  },
  {
    id: 'endoflife',
    title: 'End of Life',
    description: 'Plan burial benefits and support for your family.',
    icon: HomeIcon,
    active: false,
  },
];

function JourneyCard({ journey }: { journey: typeof journeys[0] }) {
  const Icon = journey.icon;

  const cardContent = (
    <div
      className={`flex items-start gap-6 py-8 border-t border-[#e5e5e5] transition-all duration-200 ${
        journey.active
          ? 'opacity-100 hover:bg-[#fafaf8] cursor-pointer'
          : 'opacity-50 cursor-default'
      }`}
    >
      {/* Icon - 80px with gradient for active */}
      <div
        className={`flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center ${
          journey.active
            ? 'bg-gradient-to-br from-[#667eea] to-[#764ba2]'
            : 'bg-[#e5e5e5]'
        }`}
      >
        <Icon
          className={`w-9 h-9 ${journey.active ? 'text-white' : 'text-[#9ca3af]'}`}
          strokeWidth={1.5}
        />
      </div>

      {/* Content */}
      <div className="flex-grow min-w-0">
        {/* Title row with arrow */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-900">
            {journey.title}
          </h3>
          {journey.active && (
            <span className="text-gray-400 text-xl">→</span>
          )}
        </div>

        {/* Description */}
        <p className="text-[15px] text-gray-500 leading-relaxed mb-4 max-w-lg">
          {journey.description}
        </p>

        {/* Action */}
        {journey.active ? (
          <span className="text-[15px] font-medium text-gray-900 border-b-2 border-[#f59e0b] hover:border-[#d97706] pb-0.5 inline-block">
            Start Journey
          </span>
        ) : (
          <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
            Coming Soon
          </span>
        )}
      </div>
    </div>
  );

  if (journey.active) {
    return (
      <Link href={journey.href || '#'} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}

export default function Home() {
  const [reviewerMode, setReviewerMode] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. CRISIS BANNER - NOT sticky, right-aligned */}
      <div className="bg-[#c4262e] text-white h-10 px-6 flex items-center justify-end">
        <span className="text-sm">
          <span className="font-semibold">Veterans Crisis Line:</span>{' '}
          <a href="tel:988" className="underline">Call 988 (Press 1)</a>
          {' | '}
          <a href="sms:838255" className="underline">Text 838255</a>
        </span>
      </div>

      {/* 2. HEADER - STICKY */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5] h-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
          {/* Left - Logo with seal and text */}
          <Link href="/" className="flex items-center">
            <Image
              src="/va-logo-official.png"
              alt="VA | U.S. Department of Veterans Affairs"
              width={240}
              height={53}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Center - Main Nav (hidden on mobile) */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-[15px] font-medium text-gray-600 hover:text-gray-900">
              Health Care
            </a>
            <a href="#" className="text-[15px] font-medium text-gray-600 hover:text-gray-900">
              Benefits
            </a>
            <a href="#" className="text-[15px] font-medium text-gray-600 hover:text-gray-900">
              About VA
            </a>
            <a href="#" className="text-[15px] font-medium text-gray-600 hover:text-gray-900">
              Find a Location
            </a>
          </nav>

          {/* Right - Sign In & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button className="bg-[#0071bc] hover:bg-[#005a9e] text-white text-sm font-medium px-5 py-2.5 rounded-md">
              Sign in
            </Button>
            <button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION */}
      <section
        className="relative min-h-[500px] flex items-center py-20 px-6"
        style={{
          background: 'linear-gradient(135deg, #003f72 0%, #0071bc 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - 55% */}
            <div className="lg:col-span-1">
              <h1 className="text-5xl lg:text-[48px] font-bold text-white tracking-tight leading-tight mb-6">
                Your VA journey<br />starts here
              </h1>
              <p className="text-lg text-white/80 max-w-lg mb-8">
                Choose where you are in your journey. We&apos;ll guide you through every step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-[#003f72] hover:bg-gray-100 font-semibold px-6 py-3 rounded-md text-base"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-6 py-3 rounded-md text-base"
                >
                  Sign in to personalize
                </Button>
              </div>
            </div>

            {/* Right Column - Device Mockup */}
            <div className="lg:col-span-1 hidden lg:flex justify-end">
              <div className="relative w-full max-w-md">
                {/* Card/Checklist mockup */}
                <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#003f72] rounded-lg flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Transition Checklist</p>
                      <p className="text-xs text-gray-500">12 months before separation</p>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-semibold text-[#0071bc]">75%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-[#0071bc] to-[#003f72] rounded-full"></div>
                    </div>
                  </div>

                  {/* Checklist items */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Register for TAP class</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Request medical records</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border-2 border-[#0071bc]">
                      <div className="w-5 h-5 border-2 border-[#0071bc] rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-900 font-medium">Schedule VA benefits briefing</span>
                      <ArrowRight className="w-4 h-4 text-[#0071bc] ml-auto" />
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg">
                      <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-400">Create eBenefits account</span>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#fac922]/30 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. JOURNEY CARDS SECTION */}
      <section className="bg-[#f5f5f0] py-20 px-6 flex-grow">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Start with what you need
            </h2>
            <p className="text-base text-gray-500">
              Each journey guides you through a specific life moment.
            </p>
          </div>

          {/* Cards - 2 columns on desktop, horizontal rows */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
            {journeys.map((journey) => (
              <JourneyCard key={journey.id} journey={journey} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-[#1a1a1a] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Column 1 - VA Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                U.S. Department of Veterans Affairs
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Contact us</a></li>
                <li><a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Find a VA location</a></li>
                <li><a href="#" className="text-sm text-white/80 hover:text-white transition-colors">1-800-827-1000</a></li>
              </ul>
            </div>

            {/* Column 2 - Health Care */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Health Care</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Apply for health care</a></li>
                <li><a href="#" className="text-sm text-white/80 hover:text-white transition-colors">My HealtheVet</a></li>
                <li><a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Prescriptions</a></li>
                <li><a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Mental health</a></li>
              </ul>
            </div>

            {/* Column 3 - Benefits */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Benefits</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Disability</a></li>
                <li><a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Education (GI Bill)</a></li>
                <li><a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Careers & employment</a></li>
                <li><a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Housing assistance</a></li>
              </ul>
            </div>

            {/* Column 4 - Resources */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-white/80 hover:text-white transition-colors">VSO finder</a></li>
                <li><a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Life insurance</a></li>
                <li><a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Burials & memorials</a></li>
                <li><a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Family & caregivers</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#333] pt-6 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[13px] text-white/70">
                © 2026 U.S. Department of Veterans Affairs
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-[13px] text-white/70">
                <a href="#" className="hover:text-white transition-colors">Accessibility</a>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">FOIA</a>
                <a href="#" className="hover:text-white transition-colors">No FEAR Act</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

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
