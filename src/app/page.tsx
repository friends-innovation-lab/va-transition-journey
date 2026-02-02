'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

      {/* Hero Section */}
      <section className="bg-[#003f72] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Your transition, one step at a time
          </h1>
          <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
            A personalized guide for separating service members — from 12 months out through your first year as a veteran.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="bg-[#fac922] text-[#1b1b1b] hover:bg-[#e0b51e] font-bold text-lg px-8 py-6"
            >
              Start your transition checklist
            </Button>
            <a href="#sign-in" className="text-white underline hover:text-white/80">
              Sign in to continue where you left off
            </a>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#323a45]">
            Built around your needs
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Card className="bg-[#f1f1f1] border-none">
              <CardHeader>
                <div className="mb-2">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#003f72" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <CardTitle className="text-[#323a45]">Personalized for you</CardTitle>
              </CardHeader>
              <CardContent className="text-[#5b616b]">
                Checklist adapts to your service history, goals, and timeline. No generic advice — just what matters to your situation.
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-[#f1f1f1] border-none">
              <CardHeader>
                <div className="mb-2">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#003f72" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>
                <CardTitle className="text-[#323a45]">Everything in one place</CardTitle>
              </CardHeader>
              <CardContent className="text-[#5b616b]">
                Benefits, health care, education, employment — no more portal hopping. One journey, one dashboard.
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-[#f1f1f1] border-none">
              <CardHeader>
                <div className="mb-2">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#003f72" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <CardTitle className="text-[#323a45]">Proactive guidance</CardTitle>
              </CardHeader>
              <CardContent className="text-[#5b616b]">
                We tell you what to do next, not just what exists. Timely reminders so you never miss a deadline.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-[#f1f1f1]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#323a45]">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Step 1 */}
            <div>
              <div className="bg-[#003f72] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#323a45]">
                Tell us about your situation
              </h3>
              <p className="text-[#5b616b]">
                Your separation date, goals, and service history help us personalize your experience.
              </p>
            </div>

            {/* Step 2 */}
            <div>
              <div className="bg-[#003f72] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#323a45]">
                Get your personalized checklist
              </h3>
              <p className="text-[#5b616b]">
                See exactly what you need to do, when to do it, and why it matters.
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <div className="bg-[#003f72] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#323a45]">
                Track progress and get reminders
              </h3>
              <p className="text-[#5b616b]">
                Check off tasks as you go. We&apos;ll remind you of upcoming deadlines.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-[#003f72] hover:bg-[#112e51]">
              Get started now
            </Button>
          </div>
        </div>
      </section>

      {/* Mega Footer */}
      <footer className="bg-[#112e51] py-12 px-4 mt-auto">
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
            A journey-based front door that replaces VA&apos;s org-chart navigation with Veteran life moments. Instead of &quot;Benefits, Health Care, Education...&quot; we ask &quot;What are you trying to do?&quot;
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
