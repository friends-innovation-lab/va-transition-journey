export default function Home() {
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
            <div className="vads-grid-col-12 vads-grid-col--4 vads-u-padding--2">
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
            <div className="vads-grid-col-12 vads-grid-col--4 vads-u-padding--2">
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
            <div className="vads-grid-col-12 vads-grid-col--4 vads-u-padding--2">
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
            <div className="vads-grid-col-12 vads-grid-col--4 vads-u-padding--2 vads-u-text-align--center">
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
            <div className="vads-grid-col-12 vads-grid-col--4 vads-u-padding--2 vads-u-text-align--center">
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
            <div className="vads-grid-col-12 vads-grid-col--4 vads-u-padding--2 vads-u-text-align--center">
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

      {/* Footer */}
      <footer className="vads-u-background-color--base-darkest vads-u-padding-y--3 vads-u-margin-top--auto">
        <div className="vads-grid-container">
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
              <a href="/docs/ARCHITECTURE.md" className="vads-u-color--base-lighter vads-u-margin-right--2">
                Architecture
              </a>
              <a href="/docs/JOURNEY-MAP.md" className="vads-u-color--base-lighter vads-u-margin-right--2">
                Journey Map
              </a>
              <a href="/docs/OPERATING-MODEL.md" className="vads-u-color--base-lighter">
                Operating Model
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
