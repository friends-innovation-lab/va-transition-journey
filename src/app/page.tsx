'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import {
  Briefcase,
  FileText,
  Heart,
  GraduationCap,
  Phone,
  Home as HomeIcon,
  ChevronRight,
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
    <Card
      className={`flex items-center gap-4 p-6 border-t border-gray-200 border-x-0 border-b-0 rounded-none bg-white transition-all duration-200 ${
        journey.active
          ? 'opacity-100 hover:bg-gray-50 cursor-pointer'
          : 'opacity-60 cursor-default'
      }`}
    >
      {/* Icon */}
      <div
        className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center ${
          journey.active ? 'bg-[#dbeafe]' : 'bg-[#f3f4f6]'
        }`}
      >
        <Icon
          className={`w-8 h-8 ${journey.active ? 'text-[#0071bc]' : 'text-[#9ca3af]'}`}
          strokeWidth={1.5}
        />
      </div>

      {/* Content */}
      <div className="flex-grow min-w-0">
        <h3 className="text-lg font-bold text-[#1b1b1b] mb-1">
          {journey.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-2">
          {journey.description}
        </p>
        {journey.active ? (
          <span className="text-[#0071bc] text-sm font-medium hover:underline inline-flex items-center gap-1">
            Start Journey <ChevronRight className="w-4 h-4" />
          </span>
        ) : (
          <Badge className="text-xs uppercase tracking-wider bg-gray-100 text-gray-500 hover:bg-gray-100 font-medium px-2 py-1">
            Coming Soon
          </Badge>
        )}
      </div>

      {/* Arrow for active */}
      {journey.active && (
        <div className="flex-shrink-0">
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
      )}
    </Card>
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
      {/* 1. CRISIS BANNER - Sticky */}
      <div className="bg-[#c4262e] text-white text-center py-2 px-6 text-sm sticky top-0 z-50">
        <span className="font-bold">Veterans Crisis Line:</span>{' '}
        <a href="tel:988" className="underline font-semibold">Call 988 then Press 1</a>
        {' | '}
        <a href="sms:838255" className="underline">Text 838255</a>
      </div>

      {/* 2. HEADER */}
      <header className="bg-white border-b border-gray-200 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left - Logo */}
          <Link href="/">
            <Image
              src="/va-header-logo.png"
              alt="VA.gov"
              width={164}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Right - Sign In */}
          <Button className="bg-[#0071bc] hover:bg-[#205493] text-white rounded-md px-6">
            Sign in
          </Button>
        </div>
      </header>

      {/* 3. HERO SECTION - BIG and Inviting */}
      <section
        className="relative min-h-[70vh] flex items-center"
        style={{
          background: 'linear-gradient(135deg, #003f72 0%, #0071bc 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto w-full px-8 lg:px-20 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - 55% */}
            <div className="lg:w-[55%] text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Your VA journey<br />starts here
              </h1>
              <p className="text-xl text-white/90 max-w-lg mx-auto lg:mx-0 mb-8">
                Choose where you are in your journey. We&apos;ll guide you through every step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-white text-[#003f72] hover:bg-gray-100 font-semibold px-8 py-6 text-lg"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white/10 px-8 py-6 text-lg"
                >
                  Sign in to personalize
                </Button>
              </div>
            </div>

            {/* Right side - 45% */}
            <div className="lg:w-[45%] w-full max-w-md lg:max-w-none">
              <div className="relative">
                {/* Device mockup placeholder */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  {/* Tablet frame */}
                  <div className="bg-[#1a1a1a] rounded-2xl p-4 shadow-2xl">
                    {/* Screen */}
                    <div className="bg-white rounded-xl overflow-hidden">
                      {/* App UI mockup */}
                      <div className="p-4">
                        {/* Header bar */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 bg-[#003f72] rounded"></div>
                          <div className="h-3 w-20 bg-gray-200 rounded"></div>
                        </div>
                        {/* Progress indicator */}
                        <div className="mb-4">
                          <div className="h-2 bg-gray-100 rounded-full">
                            <div className="h-2 w-3/4 bg-[#0071bc] rounded-full"></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">75% complete</p>
                        </div>
                        {/* Checklist items */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div className="h-3 w-32 bg-gray-200 rounded"></div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div className="h-3 w-28 bg-gray-200 rounded"></div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-5 h-5 border-2 border-[#0071bc] rounded-full"></div>
                            <div className="h-3 w-36 bg-gray-200 rounded"></div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                            <div className="h-3 w-24 bg-gray-100 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#fac922]/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. JOURNEY CARDS SECTION */}
      <section className="bg-[#f9fafb] py-12 px-6 flex-grow">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#1b1b1b] mb-2">
              Start with what you need
            </h2>
            <p className="text-gray-600">
              Each journey guides you through a specific life moment.
            </p>
          </div>

          {/* Cards - 3 columns on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {journeys.map((journey) => (
              <JourneyCard key={journey.id} journey={journey} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-[#333333] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Column 1 - VA Info */}
            <div>
              <h3 className="text-white font-bold mb-4 text-lg">
                U.S. Department of<br />Veterans Affairs
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Contact us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Find a VA location</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">1-800-827-1000</a></li>
              </ul>
            </div>

            {/* Column 2 - Health Care */}
            <div>
              <h3 className="text-white font-bold mb-4">Health Care</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Apply for health care</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">My HealtheVet</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Prescriptions</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Mental health</a></li>
              </ul>
            </div>

            {/* Column 3 - Benefits */}
            <div>
              <h3 className="text-white font-bold mb-4">Benefits</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Disability</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Education (GI Bill)</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Careers & employment</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Housing assistance</a></li>
              </ul>
            </div>

            {/* Column 4 - Resources */}
            <div>
              <h3 className="text-white font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">VSO finder</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Life insurance</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Burials & memorials</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Family & caregiver</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-600 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <div className="flex flex-wrap justify-center gap-4 text-gray-400">
                <a href="#" className="hover:text-white">Accessibility</a>
                <a href="#" className="hover:text-white">Privacy</a>
                <a href="#" className="hover:text-white">FOIA</a>
                <a href="#" className="hover:text-white">No FEAR Act</a>
                <a href="#" className="hover:text-white">USA.gov</a>
              </div>
              <p className="text-gray-400">
                A{' '}
                <a href="https://friendsfromthecity.com" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">
                  Friends Innovation Lab
                </a>
                {' '}prototype
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* 6. REVIEWER MODE Toggle */}
      <button
        onClick={() => setReviewerMode(!reviewerMode)}
        className="fixed bottom-5 text-sm px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-300 font-medium flex items-center gap-2"
        style={{
          right: reviewerMode ? '340px' : '20px',
          backgroundColor: reviewerMode ? '#003f72' : 'white',
          color: reviewerMode ? '#ffffff' : '#333333',
          border: reviewerMode ? 'none' : '1px solid #e5e7eb',
        }}
      >
        👁️ Reviewer Mode {reviewerMode ? 'ON' : 'OFF'}
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
