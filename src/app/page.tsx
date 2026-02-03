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
      className={`group flex items-start gap-5 py-8 px-4 border-t border-[#e5e5e5] transition-all duration-200 hover:bg-[#fafaf8] cursor-pointer ${
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
            <span className="text-[#9ca3af] transition-transform duration-150 ease-out group-hover:translate-x-1.5">→</span>
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
        className="relative flex flex-col"
        style={{
          background: 'linear-gradient(135deg, #003f72 0%, #0071bc 100%)',
        }}
      >
        {/* Hero Content */}
        <div className="flex-grow flex items-center py-20 px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto w-full">
            <div className="max-w-3xl">
              <h1 className="mb-6">
                <span className="block text-[52px] text-white leading-[1.15] tracking-[-0.02em] font-semibold">
                  Your service was unique.
                </span>
                <span
                  className="block text-[58px] text-white leading-[1.15] tracking-[-0.02em]"
                  style={{ fontFamily: 'var(--font-instrument-serif)', fontStyle: 'italic' }}
                >
                  Your VA experience should be too.
                </span>
              </h1>
              <p className="text-lg text-white/80 max-w-xl mt-6 mb-8">
                Tell us where you are, and we&apos;ll show you exactly what to do next.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => document.getElementById('journeys')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-[#003f72] hover:bg-gray-100 font-semibold px-7 py-3.5 rounded-lg text-base h-auto"
                >
                  Find your journey
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border border-white/50 text-white hover:bg-white/10 px-7 py-3.5 rounded-lg text-base h-auto"
                >
                  Sign in
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Veterans Portrait Strip - with gradient fade */}
        <div className="relative w-full">
          <div
            className="absolute inset-x-0 top-0 h-16 z-10"
            style={{
              background: 'linear-gradient(to bottom, #0071bc 0%, transparent 100%)',
            }}
          />
          <div className="flex justify-center">
            <Image
              src="/veterans-banner.png"
              alt="Portraits of Veterans"
              width={1920}
              height={200}
              className="w-[85%] h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* 4. JOURNEY CARDS SECTION */}
      <section id="journeys" className="bg-[#f5f5f0] py-20 px-6 lg:px-12 flex-grow">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-[40px] font-bold text-[#111827] tracking-tight mb-4">
              What brings you here today?
            </h2>
            <p className="text-[17px] text-[#4b5563] max-w-2xl">
              Choose a journey. We&apos;ll show you exactly what steps to take, what documents you need, and what to expect. All in one place.
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
          {/* 5-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Column 1 - VA Info with Logo */}
            <div>
              <Image
                src="/va-header-logo.png"
                alt="VA Seal"
                width={48}
                height={48}
                className="h-12 w-12 mb-4 brightness-0 invert"
              />
              <h3 className="text-base font-semibold text-white mb-4">
                U.S. Department of Veterans Affairs
              </h3>
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
                <li><a href="/docs/OPERATING-MODEL.md" className="text-sm text-[#d1d5db] hover:text-white transition-colors">Operating Model</a></li>
                <li><a href="/docs/ARCHITECTURE.md" className="text-sm text-[#d1d5db] hover:text-white transition-colors">Architecture</a></li>
                <li><a href="#" className="text-sm text-[#d1d5db] hover:text-white transition-colors">Tech Stack</a></li>
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
