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

  if (journey.active) {
    return (
      <Link href={journey.href || '#'} className="block group">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full transition-all duration-200 ease-out cursor-pointer hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-l-4 border-l-[#0071bc]">
          <div className="mb-4">
            <div className="w-14 h-14 bg-[#0071bc]/10 rounded-xl flex items-center justify-center">
              <Icon className="w-7 h-7 text-[#0071bc]" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-[#323a45] mb-2">
            {journey.title}
          </h3>
          <p className="text-[#5b616b] text-sm mb-4 leading-relaxed">
            {journey.description}
          </p>
          <div className="flex items-center text-[#0071bc] font-medium text-sm group-hover:gap-2 transition-all">
            Start Journey <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full opacity-60 cursor-default">
      <div className="mb-4">
        <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center">
          <Icon className="w-7 h-7 text-gray-400" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-[#323a45] mb-2">
        {journey.title}
      </h3>
      <p className="text-[#5b616b] text-sm mb-4 leading-relaxed">
        {journey.description}
      </p>
      <Badge variant="secondary" className="text-xs uppercase tracking-wide bg-gray-100 text-gray-500 hover:bg-gray-100">
        Coming Soon
      </Badge>
    </div>
  );
}

export default function Home() {
  const [reviewerMode, setReviewerMode] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Crisis Line Banner */}
      <div className="bg-[#c4262e] text-white text-center py-2 px-4 text-sm">
        <span className="font-bold">Veterans Crisis Line:</span>{' '}
        <a href="tel:988" className="underline">Dial 988 then Press 1</a>
        {' | '}
        <a href="sms:838255" className="underline">Text 838255</a>
      </div>

      {/* VA Header */}
      <header className="bg-[#112e51] py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/va-logo-white.svg"
              alt="VA Logo"
              width={160}
              height={50}
              className="h-10 w-auto"
            />
            <span className="text-white border-l border-white/30 pl-4 text-lg">
              Transition Journey
            </span>
          </div>
          <Button variant="outline" className="text-white border-white/50 hover:bg-white/10 hover:text-white">
            Sign in
          </Button>
        </div>
      </header>

      {/* Compact Hero Section */}
      <section className="bg-[#003f72] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-3">
            Your VA journey starts here
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Choose where you are in your journey. We&apos;ll guide you through every step.
          </p>
        </div>
      </section>

      {/* Journey Cards Section */}
      <section className="py-12 px-4 bg-[#f7f7f7] flex-grow">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {journeys.map((journey) => (
              <JourneyCard key={journey.id} journey={journey} />
            ))}
          </div>
        </div>
      </section>

      {/* Mega Footer */}
      <footer className="bg-[#112e51] py-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* 3-Column Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Health Care - VHA */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4 pb-2 border-b border-white/20">
                Health Care (VHA)
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Enroll in VA health care</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Schedule appointments</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Refill prescriptions</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Message your care team</a></li>
              </ul>
            </div>

            {/* Benefits - VBA */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4 pb-2 border-b border-white/20">
                Benefits (VBA)
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">File a disability claim</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Check claim status</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Education benefits (GI Bill)</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Home loan eligibility</a></li>
              </ul>
            </div>

            {/* Memorials - NCA */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4 pb-2 border-b border-white/20">
                Memorials (NCA)
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Pre-need burial eligibility</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Schedule a burial</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Request military records</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Find a cemetery</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer Bar */}
          <div className="border-t border-white/20 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              A{' '}
              <a href="https://friendsfromthecity.com" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">
                Friends Innovation Lab
              </a>
              {' '}prototype
            </p>
            <div className="flex justify-center gap-4 mt-2 text-sm">
              <a href="https://github.com/friends-innovation-lab/va-transition-journey" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://github.com/friends-innovation-lab/va-transition-journey/blob/main/docs/ARCHITECTURE.md" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                Architecture
              </a>
              <a href="https://github.com/friends-innovation-lab/va-transition-journey/blob/main/docs/JOURNEY-MAP.md" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                Journey Map
              </a>
              <a href="https://github.com/friends-innovation-lab/va-transition-journey/blob/main/docs/OPERATING-MODEL.md" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                Operating Model
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Reviewer Mode Toggle Button */}
      <button
        onClick={() => setReviewerMode(!reviewerMode)}
        className="fixed bottom-5 text-sm px-3 py-2 rounded shadow-lg z-50 transition-all duration-300"
        style={{
          right: reviewerMode ? '340px' : '20px',
          backgroundColor: reviewerMode ? '#003f72' : '#f1f1f1',
          color: reviewerMode ? '#ffffff' : '#323a45',
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
          <h3 className="text-[#73b3e7] font-bold mb-2">WHAT YOU&apos;RE SEEING</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            A journey-based front door that replaces VA&apos;s org-chart navigation with 6 Veteran life moments. Instead of &quot;Benefits, Health Care, Education...&quot; we ask &quot;What are you trying to do?&quot;
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-[#73b3e7] font-bold mb-2">WHY IT MATTERS</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Veterans think in journeys, not departments. &quot;I&apos;m separating from service&quot; is how they frame their needs — not &quot;I need VBA form 21-526EZ.&quot; This routes them to autonomous apps, not link forests.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-[#73b3e7] font-bold mb-2">THE MODEL</h3>
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
