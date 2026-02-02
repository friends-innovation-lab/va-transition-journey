# Veteran Transition Journey

A prototype demonstrating journey-based architecture for VA.gov, built in response to the Replacement Model for VA.gov RFI.

**Live Demo:** [va-journey.lab.cityfriends.tech](https://va-journey.lab.cityfriends.tech)

---

## What This Is

This is a working prototype of the "Transitioning Out of Service" veteran journey — one of the 45+ journeys identified by the Veterans Experience Office (VEO).

Instead of organizing around VA's org chart (benefits, health care, education...), this app organizes around **what the veteran is trying to do**: successfully transition from military to civilian life.

## Why We Built It

The Replacement Model for VA.gov RFI asks for new approaches. Our hypothesis:

> VA doesn't need a new website. VA needs a new operating model.

This prototype demonstrates what becomes possible when a small, autonomous team owns a complete veteran journey — with its own codebase, its own deployment pipeline, using the existing VA Design System.

**What we're proving:**
- Journey-based architecture works
- The VA Design System (VADS) is solid — execution is the constraint
- A focused team can ship fast without centralized review gates
- Better veteran experiences are possible today

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Next.js 14 (Static Export) | Fast, reliable, no cold starts |
| Design System | VA Design System (VADS) | Consistency with VA.gov, proves VADS works |
| Hosting | Vercel | Instant deploys, edge network |
| Data | Mock data | Demonstrates UX without backend dependencies |

## Running Locally
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build static export
npm run build
```

Open [http://localhost:3000](http://localhost:3000)

## Documentation

- [Architecture](docs/ARCHITECTURE.md) — Proposed 4-layer Veteran Journey Platform
- [Journey Map](docs/JOURNEY-MAP.md) — The veteran transition journey
- [Operating Model](docs/OPERATING-MODEL.md) — How autonomous teams ship faster

## Project Structure
```
src/
├── app/                  # Pages (Next.js App Router)
├── components/           # UI components (VADS-based)
├── lib/                  # Utilities
└── data/                 # Mock veteran scenarios
docs/
├── ARCHITECTURE.md       # Proposed VA.gov architecture
├── JOURNEY-MAP.md        # Transition journey breakdown
└── OPERATING-MODEL.md    # Autonomous teams model
```

## The Bigger Picture

This prototype is one journey. The model scales:

- **Filing a Claim** → Own team, own repo, own deploy
- **Getting Health Care** → Own team, own repo, own deploy
- **Education Benefits** → Own team, own repo, own deploy

Shared platform layer (auth, profile, design system) keeps it cohesive. Independent journeys let teams ship without waiting on 44 other teams.

---

Built by [Friends Innovation Lab](https://friendsfromthecity.com) · February 2026

For questions: lapedra@cityfriends.tech
