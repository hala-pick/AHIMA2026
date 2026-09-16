# Architecture

Plain Vite + React SPA. No router (single scrolling page), no state
management library (local `useState` only), no CSS framework.

```
AHIMA2026-Landing/
  public/
    logo-full.png, favicon.png
  src/
    main.jsx              → mounts <App/>, imports styles/global.css
    App.jsx                → assembles the page: Header, Hero, StatsBar,
                              Features, DemoForm, ContactSection, Footer
    styles/global.css      → CSS custom properties (brand palette, spacing,
                              radii, shadows), base element resets, .container,
                              .btn variants, .section/.section-head, .reveal
    lib/icons.jsx           → iconMap: string name → lucide-react component,
                              plus <Icon name="..." /> helper
    data/features.js       → content source of truth (see content-model.md)
    components/
      Header.jsx / .css     → sticky nav, mobile hamburger menu (own open state)
      Hero.jsx / .css       → launch message + decorative background layers
                              (dot-grid pattern, floating blur orbs, faint
                              watermark icons) + the UI-enhancements ticker
      StatsBar.jsx / .css   → 4 stat chips, inline data array (not features.js)
      Features.jsx / .css   → category tabs (filters features.js by category)
                              + decorative background layers (same pattern as
                              Hero, lighter/subtler) + card grid
      FeatureCard.jsx / .css → one expandable card (click to reveal `detail`),
                              uses the CSS grid-template-rows 0fr→1fr accordion
                              trick — see gotchas.md if copying this pattern
      DemoForm.jsx / .css    → "Schedule a Demo" — validated, visual-only submit
      ContactSection.jsx / .css → info cards + a lighter inquiry form, same
                              visual-only submit pattern as DemoForm
      Forms.css              → shared form-field/error/success styles used by
                              both DemoForm and ContactSection
      Reveal.jsx              → generic scroll-in-view wrapper
                              (IntersectionObserver), used as
                              `<Reveal as="div" delay={ms}>...</Reveal>`
                              around section heads and cards
      Footer.jsx / .css       → text-based wordmark (see brand.md — no image)
```

## Conventions to follow

- **Co-located CSS**: every component gets its own `ComponentName.css`
  imported directly at the top of the `.jsx` file. No CSS modules, no
  Tailwind, no styled-components.
- **Mobile-first**: base styles target the smallest viewport; `@media
  (min-width: 640px)` and `@media (min-width: 1024px)` add desktop
  refinements. Follow this direction (small → large), don't write
  desktop-first overrides with `max-width`.
- **Brand tokens only**: reference `var(--primary)`, `var(--secondary)`, etc.
  from `global.css` rather than hardcoding hex colors in component CSS.
- **Icons via the shared map**: don't `import` a `lucide-react` icon directly
  inside `FeatureCard.jsx`/`Features.jsx` for icons driven by `features.js`
  data — add the icon to `iconMap` in `lib/icons.jsx` and reference it by
  string name from the data file instead. (Icons used only for static,
  non-data-driven decoration — e.g. the Hero's watermark icons — are fine to
  import directly in that component.)
- **Decorative background layers**: Hero and Features both use the same
  layering pattern — an absolutely-positioned dot-grid `::pattern` div, blurred
  color "orb"/"blob" divs, and low-opacity oversized icon "watermarks" — all
  `aria-hidden`, all `z-index: 0`, with the real content wrapped at
  `z-index: 1`. Reuse this pattern for visual consistency if another section
  needs a more attractive background; don't invent a different technique.
- **No backend**: this project has no server, no API calls, no `.env` secrets.
  Keep it that way unless a task explicitly asks to wire up real form
  submission (and even then, confirm the endpoint/approach with the user
  first — see `SKILL.md` for why the forms are visual-only by design).
