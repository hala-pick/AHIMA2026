---
name: ahima2026-landing
description: Context, brand assets, architecture, and known gotchas for the ReviewMate AHIMA 2026 landing page project. Load this before making changes anywhere in this repo (AHIMA2026-Landing) so you don't re-derive brand colors, re-discover the component structure, or repeat known tooling pitfalls.
---

# ReviewMate — AHIMA 2026 Landing Page

This is a standalone marketing page for **ReviewMate 8** (a medical coding audit
product) built for the AHIMA 2026 conference. It is a plain Vite + React SPA with
**its own git repo**, fully decoupled from the main ReviewMate product — a
Java/JSP app that lives in a sibling repo at `C:\ReviewMate\workspace\Reviewmate`
(deployed as a WAR via Jenkins to Tomcat). Nothing in this project is built,
tested, or deployed through that pipeline. Treat the two as separate codebases
that only share a brand identity.

Read the reference files below **as needed** for the task at hand — don't load
all of them up front.

## Quick facts

- Tagline: **"The Gold Standard for Medical Coding Audits"**
- Tech: Vite + React 19, plain hand-rolled CSS (no Bootstrap, no CSS framework),
  `lucide-react` for icons
- Content source of truth: `src/data/features.js` — 13 feature cards (from the
  14-section ReviewMate 8 Release Notes, March 2026) across 5 themed categories,
  plus a `uiTicker` array for the one section folded into the Hero instead of a
  card. See `reference/content-model.md` before editing feature copy or adding
  a new release's features.
- Forms (`DemoForm.jsx`, `ContactSection.jsx`) are **visual-only by design** —
  client-side validated, fake-delay success state, no backend/CRM call. This
  was an explicit product decision, not an oversight — don't "fix" it by wiring
  up a real endpoint without being asked.
- Several fields are conference-day placeholders (booth #, dates, contact
  email/phone) marked with `// TODO` comments in `Hero.jsx` and
  `ContactSection.jsx` — check these are filled in before ship, or leave them
  alone if this is a pre-conference draft.

## Reference files

- **`reference/brand.md`** — exact colors/fonts/logo file paths pulled from the
  live ReviewMate 8 app, plus a real trap to avoid (a "brand" asset that isn't
  actually branded). Read before touching any visual styling.
- **`reference/architecture.md`** — file/component map, how data flows from
  `features.js` into the UI, and conventions to follow when adding a component.
- **`reference/content-model.md`** — how the 14 Release Notes sections map to
  this page's 5 categories and 13 cards, and how to extend it for a future
  release.
- **`reference/dev-workflow.md`** — how to run, preview, and build this project,
  including the cross-repo `launch.json` setup needed for the Claude Browser
  pane's `preview_start` tool.
- **`reference/gotchas.md`** — tooling quirks specific to verifying this app in
  the Claude Browser pane (transient screenshot artifacts, ref-click coordinate
  mismatches at custom viewport sizes, etc.) that look like real bugs but
  aren't. Read this before reporting a "layout bug" you can't explain.
