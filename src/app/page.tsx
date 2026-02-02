'use client';

import { useState } from 'react';

export default function Home() {
  const [reviewerMode, setReviewerMode] = useState(false);

  return (
    <div className="vads-u-display--flex vads-u-flex-direction--column" style={{ minHeight: '100vh' }}>
      {/* VA Header */}
      <header className="vads-u-background-color--primary-darker vads-u-padding-y--1p5 vads-u-padding-x--2">
        <div className="vads-grid-container">
          <div className="vads-u-display--flex vads-u-align-items--center vads-u-justify-content--space-between">
            <div className="vads-u-display--flex vads-u-align-items--center">
              <span className="vads-u-color--white vads-u-font-size--lg vads-u-font-weight--bold">
                VA.gov
              </span>
              <span className="vads-u-color--white vads-u-margin-left--2 vads-u-padding-left--2" style={{ borderLeft: '1px solid rgba(255,255,255,0.3)' }}>
                Transition Journey
              </span>
            </div>
            <a href="#sign-in" className="vads-u-color--white vads-u-text-decoration--none">
              Sign in
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="vads-u-background-color--primary vads-u-padding-y--5">
        <div className="vads-grid-container">
          <div className="vads-grid-row">
            <div className="vads-grid-col-12 vads-u-text-align--center">
              <h1 className="vads-u-color--white vads-u-font-size--h1 vads-u-margin-top--0 vads-u-margin-bottom--2">
                Your transition, one step at a time
              </h1>
              <p className="vads-u-color--white vads-u-font-size--lg vads-u-margin-bottom--4 vads-u-line-height--4" style={{ maxWidth: '600px', margin: '0 auto', marginBottom: '32px' }}>
                A personalized guide for separating service members — from 12 months out through your first year as a veteran.
              </p>
              <div className="vads-u-display--flex vads-u-flex-direction--column vads-u-align-items--center">
                <a
                  href="/checklist"
                  className="usa-button vads-u-font-weight--bold vads-u-padding-x--4 vads-u-padding-y--2"
                  style={{
                    backgroundColor: '#fac922',
                    color: '#1b1b1b',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    fontSize: '1.125rem',
                    display: 'inline-block'
                  }}
                >
                  Start your transition checklist
                </a>
                <a
                  href="#sign-in"
                  className="vads-u-color--white vads-u-margin-top--2"
                  style={{ textDecoration: 'underline' }}
                >
                  Sign in to continue where you left off
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="vads-u-background-color--white vads-u-padding-y--5">
        <div className="vads-grid-container">
          <h2 className="vads-u-font-size--h2 vads-u-text-align--center vads-u-margin-bottom--4">
            Built around your needs
          </h2>
          <div className="vads-grid-row vads-u-justify-content--center">
            {/* Card 1 */}
            <div className="vads-grid-col-12 vads-u-padding--2" style={{ flex: '1 1 300px', maxWidth: '400px' }}>
              <div className="vads-u-background-color--base-lightest vads-u-padding--3 vads-u-height--full" style={{ borderRadius: '4px' }}>
                <div className="vads-u-margin-bottom--1p5" style={{ fontSize: '2rem' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#005ea2" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h3 className="vads-u-font-size--h4 vads-u-margin-top--0 vads-u-margin-bottom--1">
                  Personalized for you
                </h3>
                <p className="vads-u-margin--0 vads-u-color--base">
                  Checklist adapts to your service history, goals, and timeline. No generic advice — just what matters to your situation.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="vads-grid-col-12 vads-u-padding--2" style={{ flex: '1 1 300px', maxWidth: '400px' }}>
              <div className="vads-u-background-color--base-lightest vads-u-padding--3 vads-u-height--full" style={{ borderRadius: '4px' }}>
                <div className="vads-u-margin-bottom--1p5" style={{ fontSize: '2rem' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#005ea2" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>
                <h3 className="vads-u-font-size--h4 vads-u-margin-top--0 vads-u-margin-bottom--1">
                  Everything in one place
                </h3>
                <p className="vads-u-margin--0 vads-u-color--base">
                  Benefits, health care, education, employment — no more portal hopping. One journey, one dashboard.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="vads-grid-col-12 vads-u-padding--2" style={{ flex: '1 1 300px', maxWidth: '400px' }}>
              <div className="vads-u-background-color--base-lightest vads-u-padding--3 vads-u-height--full" style={{ borderRadius: '4px' }}>
                <div className="vads-u-margin-bottom--1p5" style={{ fontSize: '2rem' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#005ea2" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <h3 className="vads-u-font-size--h4 vads-u-margin-top--0 vads-u-margin-bottom--1">
                  Proactive guidance
                </h3>
                <p className="vads-u-margin--0 vads-u-color--base">
                  We tell you what to do next, not just what exists. Timely reminders so you never miss a deadline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="vads-u-background-color--base-lightest vads-u-padding-y--5">
        <div className="vads-grid-container">
          <h2 className="vads-u-font-size--h2 vads-u-text-align--center vads-u-margin-bottom--4">
            How it works
          </h2>
          <div className="vads-grid-row vads-u-justify-content--center">
            {/* Step 1 */}
            <div className="vads-grid-col-12 vads-u-padding--2 vads-u-text-align--center" style={{ flex: '1 1 300px', maxWidth: '400px' }}>
              <div
                className="vads-u-background-color--primary vads-u-color--white vads-u-font-weight--bold vads-u-margin-bottom--2"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem'
                }}
              >
                1
              </div>
              <h3 className="vads-u-font-size--h4 vads-u-margin-top--0 vads-u-margin-bottom--1">
                Tell us about your situation
              </h3>
              <p className="vads-u-margin--0 vads-u-color--base">
                Your separation date, goals, and service history help us personalize your experience.
              </p>
            </div>

            {/* Step 2 */}
            <div className="vads-grid-col-12 vads-u-padding--2 vads-u-text-align--center" style={{ flex: '1 1 300px', maxWidth: '400px' }}>
              <div
                className="vads-u-background-color--primary vads-u-color--white vads-u-font-weight--bold vads-u-margin-bottom--2"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem'
                }}
              >
                2
              </div>
              <h3 className="vads-u-font-size--h4 vads-u-margin-top--0 vads-u-margin-bottom--1">
                Get your personalized checklist
              </h3>
              <p className="vads-u-margin--0 vads-u-color--base">
                See exactly what you need to do, when to do it, and why it matters.
              </p>
            </div>

            {/* Step 3 */}
            <div className="vads-grid-col-12 vads-u-padding--2 vads-u-text-align--center" style={{ flex: '1 1 300px', maxWidth: '400px' }}>
              <div
                className="vads-u-background-color--primary vads-u-color--white vads-u-font-weight--bold vads-u-margin-bottom--2"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem'
                }}
              >
                3
              </div>
              <h3 className="vads-u-font-size--h4 vads-u-margin-top--0 vads-u-margin-bottom--1">
                Track progress and get reminders
              </h3>
              <p className="vads-u-margin--0 vads-u-color--base">
                Check off tasks as you go. We&apos;ll remind you of upcoming deadlines.
              </p>
            </div>
          </div>

          <div className="vads-u-text-align--center vads-u-margin-top--4">
            <a
              href="/checklist"
              className="usa-button"
              style={{
                backgroundColor: '#005ea2',
                color: '#ffffff',
                borderRadius: '4px',
                textDecoration: 'none',
                padding: '12px 24px',
                fontSize: '1rem',
                display: 'inline-block'
              }}
            >
              Get started now
            </a>
          </div>
        </div>
      </section>

      {/* Mega Footer */}
      <footer className="vads-u-background-color--primary-darker vads-u-padding-y--4 vads-u-margin-top--auto">
        <div className="vads-grid-container">
          {/* 3-Column Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {/* Health Care - VHA */}
            <div>
              <h3 className="vads-u-color--white vads-u-font-size--h4 vads-u-margin-top--0 vads-u-margin-bottom--2 vads-u-padding-bottom--1" style={{ borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
                Health Care (VHA)
              </h3>
              <ul className="vads-u-margin--0 vads-u-padding--0" style={{ listStyle: 'none' }}>
                <li className="vads-u-margin-bottom--1">
                  <a href="#" className="vads-u-color--base-lighter vads-u-text-decoration--none">Enroll in VA health care</a>
                </li>
                <li className="vads-u-margin-bottom--1">
                  <a href="#" className="vads-u-color--base-lighter vads-u-text-decoration--none">Schedule appointments</a>
                </li>
                <li className="vads-u-margin-bottom--1">
                  <a href="#" className="vads-u-color--base-lighter vads-u-text-decoration--none">Refill prescriptions</a>
                </li>
                <li className="vads-u-margin-bottom--1">
                  <a href="#" className="vads-u-color--base-lighter vads-u-text-decoration--none">Message your care team</a>
                </li>
              </ul>
            </div>

            {/* Benefits - VBA */}
            <div>
              <h3 className="vads-u-color--white vads-u-font-size--h4 vads-u-margin-top--0 vads-u-margin-bottom--2 vads-u-padding-bottom--1" style={{ borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
                Benefits (VBA)
              </h3>
              <ul className="vads-u-margin--0 vads-u-padding--0" style={{ listStyle: 'none' }}>
                <li className="vads-u-margin-bottom--1">
                  <a href="#" className="vads-u-color--base-lighter vads-u-text-decoration--none">File a disability claim</a>
                </li>
                <li className="vads-u-margin-bottom--1">
                  <a href="#" className="vads-u-color--base-lighter vads-u-text-decoration--none">Check claim status</a>
                </li>
                <li className="vads-u-margin-bottom--1">
                  <a href="#" className="vads-u-color--base-lighter vads-u-text-decoration--none">Education benefits (GI Bill)</a>
                </li>
                <li className="vads-u-margin-bottom--1">
                  <a href="#" className="vads-u-color--base-lighter vads-u-text-decoration--none">Home loan eligibility</a>
                </li>
              </ul>
            </div>

            {/* Memorials - NCA */}
            <div>
              <h3 className="vads-u-color--white vads-u-font-size--h4 vads-u-margin-top--0 vads-u-margin-bottom--2 vads-u-padding-bottom--1" style={{ borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
                Memorials (NCA)
              </h3>
              <ul className="vads-u-margin--0 vads-u-padding--0" style={{ listStyle: 'none' }}>
                <li className="vads-u-margin-bottom--1">
                  <a href="#" className="vads-u-color--base-lighter vads-u-text-decoration--none">Pre-need burial eligibility</a>
                </li>
                <li className="vads-u-margin-bottom--1">
                  <a href="#" className="vads-u-color--base-lighter vads-u-text-decoration--none">Schedule a burial</a>
                </li>
                <li className="vads-u-margin-bottom--1">
                  <a href="#" className="vads-u-color--base-lighter vads-u-text-decoration--none">Request military records</a>
                </li>
                <li className="vads-u-margin-bottom--1">
                  <a href="#" className="vads-u-color--base-lighter vads-u-text-decoration--none">Find a cemetery</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer Bar */}
          <div className="vads-u-border-top--1px vads-u-padding-top--3" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
            <div className="vads-u-text-align--center">
              <p className="vads-u-color--base-lighter vads-u-margin--0 vads-u-font-size--base">
                A{' '}
                <a
                  href="https://friendsfromthecity.com"
                  className="vads-u-color--white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Friends Innovation Lab
                </a>
                {' '}prototype
              </p>
              <p className="vads-u-color--base-light vads-u-margin-top--1 vads-u-margin-bottom--0 vads-u-font-size--sm">
                <a href="https://github.com/friends-innovation-lab/va-transition-journey" className="vads-u-color--base-lighter vads-u-margin-right--2" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://github.com/friends-innovation-lab/va-transition-journey/blob/main/docs/ARCHITECTURE.md" className="vads-u-color--base-lighter vads-u-margin-right--2" target="_blank" rel="noopener noreferrer">
                  Architecture
                </a>
                <a href="https://github.com/friends-innovation-lab/va-transition-journey/blob/main/docs/JOURNEY-MAP.md" className="vads-u-color--base-lighter vads-u-margin-right--2" target="_blank" rel="noopener noreferrer">
                  Journey Map
                </a>
                <a href="https://github.com/friends-innovation-lab/va-transition-journey/blob/main/docs/OPERATING-MODEL.md" className="vads-u-color--base-lighter" target="_blank" rel="noopener noreferrer">
                  Operating Model
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Reviewer Mode Toggle Button */}
      <button
        onClick={() => setReviewerMode(!reviewerMode)}
        className="vads-u-font-size--sm"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: reviewerMode ? '340px' : '20px',
          backgroundColor: reviewerMode ? '#005ea2' : '#f0f0f0',
          color: reviewerMode ? '#ffffff' : '#1b1b1b',
          border: 'none',
          borderRadius: '4px',
          padding: '8px 12px',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          zIndex: 1000,
          transition: 'right 0.3s ease'
        }}
      >
        👁️ Reviewer Mode {reviewerMode ? 'ON' : 'OFF'}
      </button>

      {/* Reviewer Mode Sidebar Panel */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: reviewerMode ? 0 : '-320px',
          width: '320px',
          height: '100vh',
          backgroundColor: '#1b1b1b',
          color: '#ffffff',
          padding: '24px',
          boxShadow: reviewerMode ? '-4px 0 20px rgba(0,0,0,0.3)' : 'none',
          transition: 'right 0.3s ease',
          zIndex: 999,
          overflowY: 'auto'
        }}
      >
        <div className="vads-u-display--flex vads-u-justify-content--space-between vads-u-align-items--center vads-u-margin-bottom--3">
          <h2 className="vads-u-font-size--h3 vads-u-margin--0" style={{ color: '#fac922' }}>
            Reviewer Notes
          </h2>
          <button
            onClick={() => setReviewerMode(false)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#ffffff',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            ×
          </button>
        </div>

        <div className="vads-u-margin-bottom--3">
          <h3 className="vads-u-font-size--h4 vads-u-margin-top--0 vads-u-margin-bottom--1" style={{ color: '#73b3e7' }}>
            WHAT YOU&apos;RE SEEING
          </h3>
          <p className="vads-u-font-size--sm vads-u-margin--0 vads-u-line-height--4" style={{ color: '#d4d4d4' }}>
            A journey-based front door that replaces VA&apos;s org-chart navigation with Veteran life moments. Instead of &quot;Benefits, Health Care, Education...&quot; we ask &quot;What are you trying to do?&quot;
          </p>
        </div>

        <div className="vads-u-margin-bottom--3">
          <h3 className="vads-u-font-size--h4 vads-u-margin-top--0 vads-u-margin-bottom--1" style={{ color: '#73b3e7' }}>
            WHY IT MATTERS
          </h3>
          <p className="vads-u-font-size--sm vads-u-margin--0 vads-u-line-height--4" style={{ color: '#d4d4d4' }}>
            Veterans think in journeys, not departments. &quot;I&apos;m separating from service&quot; is how they frame their needs — not &quot;I need VBA form 21-526EZ.&quot; This routes them to autonomous apps, not link forests.
          </p>
        </div>

        <div className="vads-u-margin-bottom--3">
          <h3 className="vads-u-font-size--h4 vads-u-margin-top--0 vads-u-margin-bottom--1" style={{ color: '#73b3e7' }}>
            THE MODEL
          </h3>
          <p className="vads-u-font-size--sm vads-u-margin--0 vads-u-line-height--4" style={{ color: '#d4d4d4' }}>
            Each journey is an independent app with its own team, codebase, and deploy pipeline — sharing only auth, design system, and Veteran profile. Teams ship without waiting on 44 other teams.
          </p>
        </div>

        <div style={{ borderTop: '1px solid #444', paddingTop: '16px', marginTop: '16px' }}>
          <p className="vads-u-font-size--sm vads-u-margin--0" style={{ color: '#888' }}>
            Toggle off to see it as a Veteran would.
          </p>
        </div>
      </div>
    </div>
  );
}
