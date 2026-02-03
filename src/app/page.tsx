'use client';

import { useState } from 'react';
import Link from 'next/link';
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
  Search,
} from 'lucide-react';

const journeys = [
  {
    id: 'transition',
    title: 'Leaving the Military',
    description: 'Navigate your transition with a personalized timeline covering benefits enrollment, career preparation, healthcare setup, and everything you need before and after separation.',
    icon: Briefcase,
    active: true,
    href: '/transition',
  },
  {
    id: 'claims',
    title: 'Filing a Claim',
    description: 'File disability claims, upload supporting evidence, track your status in real-time, and understand each step of the decision process.',
    icon: FileText,
    active: false,
  },
  {
    id: 'healthcare',
    title: 'Getting Care',
    description: 'Enroll in VA health care, find and schedule appointments, manage prescriptions, message your care team, and access your health records.',
    icon: Heart,
    active: false,
  },
  {
    id: 'education',
    title: 'Education Benefits',
    description: 'Apply for GI Bill benefits, compare schools, track your remaining entitlement, manage housing payments, and transfer benefits to dependents.',
    icon: GraduationCap,
    active: false,
  },
  {
    id: 'crisis',
    title: 'Crisis Support',
    description: 'Connect immediately with crisis counselors, find local Vet Centers, access mental health resources, and get support for yourself or a Veteran you know.',
    icon: Phone,
    active: false,
  },
  {
    id: 'endoflife',
    title: 'End of Life',
    description: 'Plan burial arrangements, apply for survivor benefits, access memorial services, and ensure your family receives the support they\'ve earned.',
    icon: HomeIcon,
    active: false,
  },
];

function JourneyCard({ journey }: { journey: typeof journeys[0] }) {
  const Icon = journey.icon;

  const cardContent = (
    <div
      className={`flex items-start gap-5 py-8 px-4 border-t border-[#e5e5e5] transition-all duration-200 hover:bg-[#fafaf8] cursor-pointer ${
        journey.active
          ? 'opacity-100'
          : 'opacity-60 hover:opacity-80'
      }`}
    >
      {/* Icon - 64px flat blue */}
      <div
        className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center ${
          journey.active
            ? 'bg-[#dbeafe]'
            : 'bg-[#f3f4f6]'
        }`}
      >
        <Icon
          className={`w-7 h-7 ${journey.active ? 'text-[#0071bc]' : 'text-[#9ca3af]'}`}
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
          {journey.active && (
            <span className="text-[#9ca3af]">→</span>
          )}
        </div>

        {/* Description */}
        <p className="text-[15px] text-[#4b5563] leading-relaxed mb-4">
          {journey.description}
        </p>

        {/* Action */}
        {journey.active ? (
          <span className="text-[15px] font-medium text-[#111827] border-b-2 border-[#f59e0b] hover:border-[#d97706] pb-0.5 inline-block">
            Start Journey
          </span>
        ) : (
          <span className="text-[11px] font-medium uppercase tracking-wider text-[#9ca3af]">
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
          {/* Left - VA.gov text logo */}
          <Link href="/" className="text-[22px] font-bold text-[#003f72]">
            VA.gov
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
            <Button className="bg-[#0071bc] hover:bg-[#005a9e] text-white text-sm font-medium px-5 py-2 rounded-md">
              Sign in
            </Button>
            <button className="lg:hidden p-2 text-[#4b5563] hover:text-[#111827]">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION */}
      <section
        className="relative min-h-[500px] flex items-center py-20 px-6 lg:px-12"
        style={{
          background: 'linear-gradient(135deg, #003f72 0%, #0071bc 100%)',
        }}
      >
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-1">
              <h1 className="text-[48px] font-bold text-white tracking-tight leading-tight mb-6">
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
                  className="bg-white border-white text-[#0071bc] hover:bg-gray-100 px-6 py-3 rounded-md text-base font-semibold"
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
                      <p className="text-sm font-semibold text-[#111827]">Transition Checklist</p>
                      <p className="text-xs text-[#6b7280]">12 months before separation</p>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[#4b5563]">Progress</span>
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
                      <span className="text-sm text-[#374151]">Register for TAP class</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-[#374151]">Request medical records</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border-2 border-[#0071bc]">
                      <div className="w-5 h-5 border-2 border-[#0071bc] rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-[#111827] font-medium">Schedule VA benefits briefing</span>
                      <ArrowRight className="w-4 h-4 text-[#0071bc] ml-auto" />
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg">
                      <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-[#9ca3af]">Create eBenefits account</span>
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
      <section className="bg-[#f5f5f0] py-20 px-6 lg:px-12 flex-grow">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-[40px] font-bold text-[#111827] tracking-tight mb-4">
              Start with what you need
            </h2>
            <p className="text-[17px] text-[#4b5563]">
              Each journey guides you through a specific life moment.
            </p>
          </div>

          {/* Cards - 3 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {journeys.map((journey) => (
              <JourneyCard key={journey.id} journey={journey} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-[#1a1a1a] py-16 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Column 1 - VA Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                U.S. Department of Veterans Affairs
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-[#9ca3af] hover:text-white transition-colors">Contact us</a></li>
                <li><a href="#" className="text-sm text-[#9ca3af] hover:text-white transition-colors">Find a VA location</a></li>
                <li><a href="#" className="text-sm text-[#9ca3af] hover:text-white transition-colors">1-800-827-1000</a></li>
              </ul>
            </div>

            {/* Column 2 - Health Care */}
            <div>
              <h3 className="text-[13px] font-semibold text-white uppercase tracking-wider mb-4">Health Care</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-[#9ca3af] hover:text-white transition-colors">Apply for health care</a></li>
                <li><a href="#" className="text-sm text-[#9ca3af] hover:text-white transition-colors">My HealtheVet</a></li>
                <li><a href="#" className="text-sm text-[#9ca3af] hover:text-white transition-colors">Prescriptions</a></li>
                <li><a href="#" className="text-sm text-[#9ca3af] hover:text-white transition-colors">Mental health</a></li>
              </ul>
            </div>

            {/* Column 3 - Benefits */}
            <div>
              <h3 className="text-[13px] font-semibold text-white uppercase tracking-wider mb-4">Benefits</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-[#9ca3af] hover:text-white transition-colors">Disability</a></li>
                <li><a href="#" className="text-sm text-[#9ca3af] hover:text-white transition-colors">Education (GI Bill)</a></li>
                <li><a href="#" className="text-sm text-[#9ca3af] hover:text-white transition-colors">Careers & employment</a></li>
                <li><a href="#" className="text-sm text-[#9ca3af] hover:text-white transition-colors">Housing assistance</a></li>
              </ul>
            </div>

            {/* Column 4 - Resources */}
            <div>
              <h3 className="text-[13px] font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-[#9ca3af] hover:text-white transition-colors">VSO finder</a></li>
                <li><a href="#" className="text-sm text-[#9ca3af] hover:text-white transition-colors">Life insurance</a></li>
                <li><a href="#" className="text-sm text-[#9ca3af] hover:text-white transition-colors">Burials & memorials</a></li>
                <li><a href="#" className="text-sm text-[#9ca3af] hover:text-white transition-colors">Family & caregivers</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#333] pt-6 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[13px] text-[#6b7280]">
                © 2026 U.S. Department of Veterans Affairs
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-[13px] text-[#6b7280]">
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
