# Proposed Architecture: Veteran Journey Platform

This document describes the 4-layer architecture proposed for replacing VA.gov — organizing around veteran journeys rather than VA's organizational structure.

---

## The Problem with the Current Architecture

VA.gov's current architecture creates coupling that slows delivery:

- **Monolith frontend**: 45+ teams building in one repository (vets-website)
- **Centralized review gates**: Design, content, accessibility reviews create queues
- **Shared deploy pipeline**: Teams can't ship independently
- **Tight coupling**: One change can break multiple applications

The technology stack (React, Rails, PostgreSQL, Drupal) is sound. The architecture and operating model are the constraints.

---

## Proposed Architecture
```
┌─────────────────────────────────────────────────────────────────────────┐
│                      VETERAN EXPERIENCE LAYER                           │
│            "What are you trying to do?" → Routes to journey             │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
        ┌───────────────────────────┼───────────────────────────┐
        ▼                           ▼                           ▼
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│     JOURNEY:     │    │     JOURNEY:     │    │     JOURNEY:     │
│   Transitioning  │    │  Filing a Claim  │    │  Getting Care    │
│                  │    │                  │    │                  │
│   • Own repo     │    │   • Own repo     │    │   • Own repo     │
│   • Own team     │    │   • Own team     │    │   • Own team     │
│   • Own deploy   │    │   • Own deploy   │    │   • Own deploy   │
└──────────────────┘    └──────────────────┘    └──────────────────┘
        │                           │                           │
        └───────────────────────────┼───────────────────────────┘
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                       SHARED PLATFORM LAYER                             │
│        Design System (VADS) │ Auth │ Veteran Profile │ Analytics        │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                       INTEGRATION / API LAYER                           │
│     Abstracts legacy systems │ Stable contracts │ Graceful degradation  │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                       LEGACY BACKEND SYSTEMS                            │
│                  MVI │ BGS │ VistA │ VBMS │ etc.                        │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Layer 1: Veteran Experience Layer

**Purpose:** Route veterans to the right journey based on what they're trying to do.

This is not a website with 12 benefit categories. It's a simple routing layer:

- "What are you trying to do?" → Guides to the right journey
- Uses VEO's journey maps to match veteran situations to journeys
- Personalized if logged in (knows your status, shows relevant journeys)
- Universal if not logged in (guides based on situation)

**Key shift:** Organized around veteran intent, not VA org chart.

---

## Layer 2: Journey Apps

**Purpose:** Each major veteran journey becomes its own autonomous application.

| Journey | What It Does |
|---------|--------------|
| Transitioning Out | Checklist, benefit eligibility, enrollment guidance |
| Filing a Claim | Status tracking, evidence upload, appeals |
| Getting Health Care | Enrollment, appointments, prescriptions, messaging |
| Education Benefits | GI Bill status, school enrollment, payment tracking |
| Crisis Support | Immediate help, resources, warm handoffs |
| End of Life | Burial planning, survivor benefits, memorials |

**Each journey app:**
- Has its own codebase (not in the monolith)
- Has its own small team (3-5 people)
- Deploys independently (no waiting on other teams)
- Uses the shared design system (VADS) for consistency
- Owns its own content (no centralized content bottleneck)

**Key shift:** Autonomous teams with end-to-end ownership.

---

## Layer 3: Shared Platform Layer

**Purpose:** Provide common capabilities that should be consistent across all journeys.

**What's shared:**
- **Design System (VADS)** — Visual consistency across all journeys
- **Authentication** — One login across all journeys
- **Veteran Profile** — Your data, portable across journeys
- **Analytics** — Unified view of veteran experience

**What's NOT shared:**
- Codebase — Each journey owns its own
- Deploy pipeline — Each journey deploys independently
- Content — Each team has embedded content expertise
- Accessibility — Automated tooling, not manual review gates

**Key shift:** Share platforms, not processes.

---

## Layer 4: Integration / API Layer

**Purpose:** Abstract legacy backend systems and provide stable contracts to journey apps.

The legacy backends (MVI, BGS, VistA, VBMS) are fragile. The current model has the frontend coupled directly to them. When backends fail, the frontend fails.

**The new model:**
- API layer abstracts the backends
- Provides stable contracts to journey apps
- Handles retries, caching, graceful degradation
- When a legacy system is slow/down, journey apps can still show status, queue requests, or provide alternatives
- Isolates fragility — one backend failure doesn't break everything

**Key shift:** Decouple frontend reliability from backend fragility.

---

## Why This Works

| Current Model | Proposed Model |
|---------------|----------------|
| 45+ teams in one repo | Each journey has own repo |
| Centralized review gates | Governance through tooling |
| Coordinated deploys | Independent deploys |
| Org chart navigation | Journey-based navigation |
| Coupled to backend failures | Graceful degradation |

---

## This Prototype

This repository demonstrates **one journey** — Transitioning Out of Service — built using this architecture:

- Own codebase (this repo)
- Uses VADS for design consistency
- Deploys independently
- Journey-based organization

If one journey works, the model scales to all journeys.

---

## Further Reading

- [Journey Map](JOURNEY-MAP.md) — The transition journey in detail
- [Operating Model](OPERATING-MODEL.md) — How autonomous teams ship faster
