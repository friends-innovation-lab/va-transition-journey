'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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

  const content = (
    <div
      className={`flex items-center gap-5 p-5 border-t border-gray-200 transition-all duration-200 ${
        journey.active
          ? 'opacity-100 hover:bg-white cursor-pointer'
          : 'opacity-50 cursor-default'
      }`}
    >
      {/* Icon */}
      <div
        className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center ${
          journey.active
            ? 'bg-[#0071bc]/10'
            : 'bg-gray-100'
        }`}
      >
        <Icon
          className={`w-8 h-8 ${
            journey.active ? 'text-[#0071bc]' : 'text-gray-400'
          }`}
        />
      </div>

      {/* Content */}
      <div className="flex-grow min-w-0">
        <h3 className="text-lg font-semibold text-[#1b1b1b] mb-1">
          {journey.title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-2">
          {journey.description}
        </p>
        {journey.active ? (
          <span className="text-[#0071bc] text-sm font-medium hover:underline inline-flex items-center gap-1">
            Start Journey <ChevronRight className="w-4 h-4" />
          </span>
        ) : (
          <Badge variant="secondary" className="text-[10px] uppercase tracking-wider bg-gray-100 text-gray-500 hover:bg-gray-100 font-medium">
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
    </div>
  );

  if (journey.active) {
    return (
      <Link href={journey.href || '#'} className="block">
        {content}
      </Link>
    );
  }

  return content;
}

export default function Home() {
  const [reviewerMode, setReviewerMode] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Crisis Line Banner - Sticky */}
      <div className="bg-[#c4262e] text-white text-center py-2 px-4 text-sm sticky top-0 z-50">
        <span className="font-bold">Veterans Crisis Line:</span>{' '}
        <a href="tel:988" className="underline font-semibold">Dial 988 then Press 1</a>
        {' | '}
        <a href="sms:838255" className="underline">Text 838255</a>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left - Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <Image
                src="/va-header-logo.png"
                alt="VA.gov"
                width={164}
                height={50}
                className="h-10 w-auto"
              />
            </Link>

            {/* Center - Nav Links */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-[#323a45] hover:text-[#0071bc] text-sm font-medium">
                Health Care
              </a>
              <a href="#" className="text-[#323a45] hover:text-[#0071bc] text-sm font-medium">
                Benefits
              </a>
              <a href="#" className="text-[#323a45] hover:text-[#0071bc] text-sm font-medium">
                About VA
              </a>
            </nav>
          </div>

          {/* Right - Sign In */}
          <Button className="bg-[#0071bc] hover:bg-[#205493] text-white">
            Sign in
          </Button>
        </div>
      </header>

      {/* Hero Section - Split Layout */}
      <section className="bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Left side - 60% */}
            <div className="lg:w-[60%] py-16 px-6 lg:px-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#1b1b1b] mb-4 leading-tight">
                Your VA journey<br />starts here
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Choose where you are in your journey. We&apos;ll guide you through every step.
              </p>
            </div>

            {/* Right side - 40% */}
            <div className="lg:w-[40%] relative min-h-[200px] lg:min-h-[300px]">
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, #003f72 0%, #0071bc 50%, #00bde3 100%)',
                }}
              >
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white rounded-full" />
                  <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-white rounded-full" />
                  <div className="absolute top-1/2 right-1/3 w-24 h-24 border border-white rounded-full" />
                </div>
                <div className="absolute bottom-6 left-6 text-white/80 text-sm">
                  Supporting Veterans since 1930
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Cards Section */}
      <section className="bg-[#f9fafb] py-12 px-6 flex-grow">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#1b1b1b] mb-2">
              Start with what you need
            </h2>
            <p className="text-gray-600">
              Each journey is designed to guide you through a specific life moment — from leaving service to planning for the future.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="bg-[#f9fafb] rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-1">
              {journeys.map((journey) => (
                <JourneyCard key={journey.id} journey={journey} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333333] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* 4-Column Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Column 1 - VA Info */}
            <div>
              <h3 className="text-white font-bold mb-4">VA.gov</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Find a VA Location</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Accessibility</a></li>
              </ul>
            </div>

            {/* Column 2 - Health Care */}
            <div>
              <h3 className="text-white font-bold mb-4">Health Care</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Enroll in health care</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">My HealtheVet</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Prescriptions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Mental health</a></li>
              </ul>
            </div>

            {/* Column 3 - Benefits */}
            <div>
              <h3 className="text-white font-bold mb-4">Benefits</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Disability</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Education</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Housing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Careers</a></li>
              </ul>
            </div>

            {/* Column 4 - Resources */}
            <div>
              <h3 className="text-white font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">VSO locator</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Life insurance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Burials & memorials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Family support</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-600 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                A{' '}
                <a href="https://friendsfromthecity.com" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">
                  Friends Innovation Lab
                </a>
                {' '}prototype
              </p>
              <div className="flex gap-4 text-sm">
                <a href="https://github.com/friends-innovation-lab/va-transition-journey" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://github.com/friends-innovation-lab/va-transition-journey/blob/main/docs/ARCHITECTURE.md" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                  Architecture
                </a>
                <a href="https://github.com/friends-innovation-lab/va-transition-journey/blob/main/docs/OPERATING-MODEL.md" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                  Operating Model
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Reviewer Mode Toggle Button */}
      <button
        onClick={() => setReviewerMode(!reviewerMode)}
        className="fixed bottom-5 text-sm px-3 py-2 rounded-lg shadow-lg z-50 transition-all duration-300 font-medium"
        style={{
          right: reviewerMode ? '340px' : '20px',
          backgroundColor: reviewerMode ? '#003f72' : 'white',
          color: reviewerMode ? '#ffffff' : '#323a45',
          border: reviewerMode ? 'none' : '1px solid #d1d5db',
        }}
      >
        👁️ Reviewer Mode {reviewerMode ? 'ON' : 'OFF'}
      </button>

      {/* Reviewer Mode Sidebar Panel */}
      <div
        className="fixed top-0 h-screen w-80 bg-[#1b1b1b] text-white p-6 overflow-y-auto z-40 transition-all duration-300"
        style={{
          right: reviewerMode ? 0 : '-320px',
          boxShadow: reviewerMode ? '-4px 0 20px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-[#fac922]">
            Reviewer Notes
          </h2>
          <button
            onClick={() => setReviewerMode(false)}
            className="text-white text-2xl hover:text-gray-300"
          >
            ×
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-[#73b3e7] font-bold mb-2 text-sm uppercase tracking-wide">What You&apos;re Seeing</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            A journey-based front door that replaces VA&apos;s org-chart navigation with 6 Veteran life moments. Instead of &quot;Benefits, Health Care, Education...&quot; we ask &quot;What are you trying to do?&quot;
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-[#73b3e7] font-bold mb-2 text-sm uppercase tracking-wide">Why It Matters</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Veterans think in journeys, not departments. &quot;I&apos;m separating from service&quot; is how they frame their needs — not &quot;I need VBA form 21-526EZ.&quot; This routes them to autonomous apps, not link forests.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-[#73b3e7] font-bold mb-2 text-sm uppercase tracking-wide">The Model</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Each journey is an independent app with its own team, codebase, and deploy pipeline — sharing only auth, design system, and Veteran profile. Teams ship without waiting on 44 other teams.
          </p>
        </div>

        <div className="border-t border-gray-700 pt-4 mt-4">
          <p className="text-gray-500 text-sm">
            Toggle off to see it as a Veteran would.
          </p>
        </div>
      </div>
    </div>
  );
}
