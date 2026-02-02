# Operating Model: Autonomous Journey Teams

This document describes how teams work in the proposed architecture — and why it's different from the current VA.gov operating model.

---

## The Current Operating Model

VA.gov uses a centralized governance model with a monolith deploy process:

**How teams ship today:**
```
Team builds feature
       ↓
Design Intent Review (wait)
       ↓
CAIA Review - Content, Accessibility, IA (wait)
       ↓
Midpoint Review (wait)
       ↓
Staging Review (wait)
       ↓
Merge to shared monolith codebase
       ↓
Daily deploy (all 45+ teams' changes ship together)
       ↓
Post-launch 508 audit (wait)
```

**The deploy reality:**

VA.gov runs automated daily deploys at a configured time. All teams merge to the same `main` branch, and once per day, everything ships together. This means:

- If you merge at 9am, your code waits until tomorrow's deploy
- One team's breaking change can break everyone's features
- Rollbacks affect all teams, not just the team with the issue
- No team controls when their code goes live

**The result:**
- 45+ teams competing for review slots
- Weeks of wait time built into every release
- Centralized teams become bottlenecks
- Teams can't respond quickly to veteran feedback
- Innovation is slowed by coordination overhead
- One breaking change can take down unrelated features

This model was designed for control. It achieves control at the cost of speed.

---

## The Proposed Operating Model

Journey teams operate autonomously with embedded expertise:

**How journey teams ship:**
```
Team (with embedded design, content, accessibility)
       ↓
Build feature
       ↓
Automated checks (linting, a11y, design system compliance)
       ↓
Deploy to their journey app (independent pipeline)
       ↓
Monitor and iterate
```

**The deploy reality:**

Each journey app has its own repository and deployment pipeline. When the Transition Journey team ships, they don't wait for the Claims team or the Health Care team. Their deploy affects only their journey.

**The result:**
- Teams own their journey end-to-end
- No waiting on centralized reviewers
- Ship in hours, not days or weeks
- Respond to veteran feedback immediately
- Failures are isolated — one journey's bug doesn't break others
- Governance through tooling, not gates

---

## Governance Through Tooling

The fear with decentralization: "Everyone will do their own thing and it'll be chaos."

The answer: Automate governance into the development process.

| Current (Manual Gates) | Proposed (Automated Tooling) |
|------------------------|------------------------------|
| Manual design review | Linting for VADS compliance |
| Manual accessibility review | Automated a11y testing in CI/CD |
| Manual content review | Content standards in templates |
| Staging review before deploy | Automated tests + post-deploy monitoring |
| Centralized approval | Decentralized execution, shared standards |

**Example:** You don't need someone to manually check if you used the right button component. The linter tells you before you can commit.

**What this requires:**
- Mature design system (VADS already exists)
- Automated accessibility testing (axe, WAVE, Lighthouse)
- Component libraries with built-in compliance
- Monitoring and alerting for production issues

---

## Case Studies

### Rippling (HR/IT Platform)

**Model:** App-per-repo architecture with shared data platform

**How it works:**
- Unified employee data platform
- Small autonomous product teams (3-5 people)
- Each team owns one "app" with independent codebase
- Independent deploy cycles
- Shared design system for consistency

**Results:**
- Ships multiple product updates daily
- Teams don't block each other
- Consistent UX despite independent teams
- Scaled from startup to enterprise

**Lesson for VA:** Autonomy and consistency aren't opposites. Shared platforms enable independent teams.

---

### UK Government Digital Service (GDS)

**Model:** Small empowered teams, shared design system, service standard

**How it works:**
- GOV.UK Design System used across all services
- Service teams own their service end-to-end
- Service Standard defines quality bar (not review gates)
- Teams self-certify against the standard

**Results:**
- Transformed UK government digital services
- Consistent experience across departments
- Dramatically faster delivery than traditional government IT

**Lesson for VA:** Standards + design systems can replace manual review processes.

---

### USDS / 18F Projects

**Model:** Small teams, rapid iteration, user-centered design

**Examples:**
- Healthcare.gov rescue (2013)
- VA.gov modernization (2018)
- Login.gov creation

**How it works:**
- Small, senior teams (6-12 people)
- Ship early, iterate based on feedback
- Embedded with agency stakeholders
- Modern tech stack, continuous deployment

**Results:**
- Healthcare.gov: Stabilized in weeks after months of failure
- VA.gov: Consolidated 500+ sites into one platform
- Login.gov: Shared identity service across federal government

**Lesson for VA:** Small empowered teams consistently outperform large coordinated efforts.

---

## Risks and Tradeoffs

### Risk 1: Inconsistent Experience Across Journeys

**Concern:** Without central review, each journey looks different.

**Mitigation:**
- Strong design system (VADS) with automated enforcement
- Shared component library with built-in accessibility
- Cross-journey design critiques (optional, not blocking)
- User research that spans journeys

**Tradeoff accepted:** Minor visual variations are acceptable if veterans can complete tasks faster.

---

### Risk 2: Security and Compliance Gaps

**Concern:** Autonomous teams might skip security steps.

**Mitigation:**
- Security scanning in CI/CD pipeline (automated, not optional)
- Shared authentication layer (teams don't build auth)
- Platform-level ATO that journey apps inherit
- Security-focused architecture review for new journeys (one-time, not per-release)

**Tradeoff accepted:** Initial architecture review is still centralized; ongoing releases are not.

---

### Risk 3: Duplicated Effort

**Concern:** Teams rebuild the same things.

**Mitigation:**
- Shared Platform Layer provides common capabilities
- Component library prevents reinventing UI patterns
- API layer provides consistent backend access
- Inner-source model: teams can see and borrow from each other's code

**Tradeoff accepted:** Some duplication is acceptable if it enables speed. Refactor later.

---

### Risk 4: Organizational Resistance

**Concern:** Centralized teams lose power and push back.

**Mitigation:**
- Pilot with one journey first (this prototype)
- Measure and publish results (speed, satisfaction, reliability)
- Position central teams as platform enablers, not gatekeepers
- Executive sponsorship for the new model

**Tradeoff accepted:** Organizational change is hard. Demonstrated success is the best argument.

---

### Risk 5: Legacy System Fragility

**Concern:** More teams hitting legacy backends increases failure risk.

**Mitigation:**
- API layer abstracts and protects legacy systems
- Caching and graceful degradation at platform level
- Journey apps designed to handle backend unavailability
- Incremental backend modernization over time

**Tradeoff accepted:** Legacy systems are already fragile. Better to isolate that fragility than pretend it doesn't exist.

---

## Lessons Learned from Past Deployments

### Lesson 1: Coordination Costs Scale Exponentially

From VA.gov's own experience: 45 teams in one repo means every change requires coordination. Adding team 46 makes everyone slower.

**Application:** Keep journey teams independent. Coordination should be optional, not mandatory.

---

### Lesson 2: Daily Deploys Don't Equal Agility

VA.gov deploys daily — but all 45+ teams deploy together. One team's bug can delay everyone. One rollback undoes everyone's work.

**Application:** Independent deploy pipelines per journey. Your deploy is your deploy.

---

### Lesson 3: Review Gates Become Bottlenecks

From multiple government IT projects: Centralized review sounds like quality control. In practice, it creates queues and delays that hurt quality by preventing iteration.

**Application:** Automate checks. Make reviews advisory, not blocking.

---

### Lesson 4: Design Systems Work

From GDS, USDS, and private sector: When teams share components, they ship faster AND more consistently. The investment in a design system pays for itself.

**Application:** VADS already exists. Use it. Invest in making it better. Don't layer manual review on top.

---

### Lesson 5: Small Teams Beat Large Teams

From every USDS rescue project: The teams that fix failing projects are small (6-12 people), senior, and empowered. The teams that created the failing projects were large and heavily coordinated.

**Application:** Journey teams should be 3-5 people with full ownership. Resist the urge to add coordination roles.

---

### Lesson 6: Pilots Beat Plans

From Healthcare.gov, VA.gov, and beyond: Working software convinces stakeholders. Documents don't.

**Application:** This prototype exists to demonstrate the model, not just describe it.

---

## This Prototype as Proof

This repository demonstrates the operating model:

| Principle | How We Demonstrated It |
|-----------|------------------------|
| Small team | Built by 2 people in < 1 week |
| Own codebase | This repo, not a monolith |
| Independent deploy | Ships to Vercel on every push |
| Uses design system | VADS components throughout |
| Automated checks | Linting, a11y testing in CI |
| Journey-focused | Everything serves the transition journey |

If one journey can work this way, all journeys can.

---

## Further Reading

- [Architecture](ARCHITECTURE.md) — The 4-layer platform model
- [Journey Map](JOURNEY-MAP.md) — The transition journey in detail
