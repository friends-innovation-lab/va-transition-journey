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

## The Veteran Profile: Why Shared Data Matters

The Veteran Profile makes autonomous journey apps possible. Without shared data, decentralization becomes fragmentation.

**The Rippling Model:**

Rippling (HR/IT platform) achieves both autonomy AND integration through architecture:
- Independent apps (Payroll, Benefits, IT, etc.) with own repos and deploy cycles
- Unified "Employee Graph" data layer underneath
- All apps read/write to the same employee data
- Result: Update your address once → Payroll, Benefits, IT all see it instantly

**The VA Equivalent:**

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    JOURNEY APPS (Independent)                           │
│    Transitioning  │  Filing Claim  │  Getting Care  │  Education       │
└─────────────────────────────────────────────────────────────────────────┘
                            ↓ read/write ↓
┌─────────────────────────────────────────────────────────────────────────┐
│                    VETERAN PROFILE (Shared Data)                        │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐       │
│  │ Identity    │ │ Contact     │ │ Benefits    │ │ Status      │       │
│  │ - ICN       │ │ - Address   │ │ - Enrolled  │ │ - Claims    │       │
│  │ - EDIPI     │ │ - Phone     │ │ - Elections │ │ - Appeals   │       │
│  │ - SSN       │ │ - Email     │ │ - Dependents│ │ - Appts     │       │
│  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘       │
└─────────────────────────────────────────────────────────────────────────┘
                            ↓ sync ↓
┌─────────────────────────────────────────────────────────────────────────┐
│                    LEGACY SYSTEMS (Source of Truth)                     │
│              MVI  │  BGS  │  VistA  │  VBMS  │  VADIR                   │
└─────────────────────────────────────────────────────────────────────────┘
```

**What this enables:**

| Capability | How Shared Data Makes It Possible |
|------------|-----------------------------------|
| Update once, reflected everywhere | Address change in Transition app → Claims and Health Care see it |
| Unified status view | Veteran sees all claims, enrollments, appointments in one place |
| Cross-journey analytics | "How many veterans complete transition checklist AND file within 90 days?" |
| Proactive guidance | "You just enrolled in health care → here's what to do next" |
| Personalized journeys | App knows your service history, current benefits, pending actions |

**What this requires:**

- Clear data ownership (who is authoritative for each field?)
- Sync strategy with legacy systems (real-time vs. batch)
- Conflict resolution (what if VistA and VBMS disagree?)
- Privacy controls (what can each journey app access?)

**Why this is hard but necessary:**

Without a shared Veteran Profile, "autonomous journey apps" becomes "more silos." The veteran would have to update their address in every journey app. Status would be fragmented. The experience would be worse, not better.

The Veteran Profile is what makes decentralization feel unified to the veteran.

---

## Identity, Sign-In, and Recovery

**Purpose:** Provide secure, veteran-friendly authentication across all journey apps.

This is part of the Shared Platform Layer — authentication is a capability that all journeys use but none should build independently.

### Current State

VA.gov currently supports multiple sign-in options:
- **Login.gov** — Federal shared service, phishing-resistant MFA
- **ID.me** — Commercial identity verification
- **My HealtheVet** — Legacy health portal credentials (being phased out)
- **DS Logon** — DoD credential (being phased out)

The consolidation toward Login.gov and ID.me is already underway.

### Proposed Approach

Journey apps should not implement authentication. They consume it from the Shared Platform Layer.

**Sign-In Workflow:**

```
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│  Journey App    │ ──▶  │  Auth Service   │ ──▶  │  Login.gov /    │
│  (Transition)   │      │  (Platform)     │      │  ID.me          │
└─────────────────┘      └─────────────────┘      └─────────────────┘
         │                        │                        │
         │    "Sign in needed"    │    Redirect to IDP     │
         │◀───────────────────────│◀───────────────────────│
         │                        │                        │
         │                        │    Token returned      │
         │    Session created     │◀───────────────────────│
         │◀───────────────────────│                        │
         │                        │                        │
         ▼                        ▼                        ▼
   Veteran sees             Auth validates           Identity verified
   personalized             and maintains            at IAL2/AAL2
   journey content          session state
```

**Identity Proofing Levels:**

| Level | What It Means | Used For |
|-------|---------------|----------|
| IAL1 | Self-asserted identity | Browsing, general info |
| IAL2 | Verified identity (ID scan, SSN, etc.) | Claims, health records, payments |

Journey apps declare what level they need. The platform handles verification.

### Account Recovery Workflow

When a veteran can't sign in:

1. **Forgot password** → Handled by Login.gov/ID.me directly
2. **Lost MFA device** → Recovery codes, backup methods at IDP
3. **Identity re-verification** → IDP re-proofs if needed
4. **Account locked** → Support escalation path

**Key principle:** Journey apps don't handle recovery. The identity provider does.

### What Journey Apps Receive

After successful authentication, journey apps receive:

```json
{
  "veteran_id": "uuid",
  "icn": "integration-control-number",
  "ial_level": 2,
  "aal_level": 2,
  "email": "veteran@example.com",
  "first_name": "Jane",
  "last_name": "Smith",
  "verified": true
}
```

Journey apps use this to fetch veteran-specific data from the API layer.

### Why This Matters

| Concern | How Platform Auth Solves It |
|---------|---------------------------|
| Security | Centralized, audited, FedRAMP-compliant |
| Veteran experience | One login across all journeys |
| Journey team burden | Zero auth code to write or maintain |
| Compliance | Inherits ATO from platform |
| Recovery | Handled by proven IDPs, not custom code |

### This Prototype

This prototype demonstrates the UX without implementing actual authentication:

- Mock "Sign in with Login.gov" button
- Simulated authenticated state
- Shows what personalized experience looks like post-sign-in

Production implementation would use VA's existing SSOe (Single Sign-On External) service.

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
| Large teams, slow iteration | Small teams + AI-augmented development |

---

## This Prototype

This repository demonstrates **one journey** — Transitioning Out of Service — built using this architecture:

- Own codebase (this repo)
- Uses VADS design patterns for consistency
- Deploys independently
- Journey-based organization
- Graceful degradation when backends fail

**Build Details:**

| Metric | This Prototype |
|--------|----------------|
| Team size | 1 person + AI assistance |
| Timeline | 2 days |
| Stack | Next.js, Tailwind, TypeScript |
| Deployment | Vercel (independent) |

**What this proves:**

A single founder with AI-augmented development tools can build a complete, polished journey experience in 2 days.

Imagine what a small, focused team (3-5 people) could deliver with this approach — shipping independently, iterating on veteran feedback, without waiting on 44 other teams or centralized review gates.

If one journey works, the model scales to all journeys.

---

## Governance Through Tooling

Instead of manual review gates that create queues, enforce standards through automation:

| Manual Gate (Current) | Automated Check (Proposed) |
|-----------------------|---------------------------|
| Design review | VADS component linting in CI |
| Accessibility review | axe-core automated testing |
| Content review | Content templates + style linting |
| Staging review | Automated E2E tests + monitoring |
| Security review | Dependency scanning + SAST |

**Result:** Teams ship when ready. Standards are enforced by code, not calendars.

---

## Further Reading

- [Journey Map](JOURNEY-MAP.md) — The transition journey in detail
- [Operating Model](OPERATING-MODEL.md) — How autonomous teams ship faster
