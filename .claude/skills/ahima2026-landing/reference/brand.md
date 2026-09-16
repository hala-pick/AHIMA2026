# Brand reference

Source of truth: `C:\ReviewMate\workspace\Reviewmate\web\8\css\style.css`
(the "Modern ReviewMate" app's stylesheet). Re-verify against that file if it's
been a while — it's the live product's actual styling, this doc is a snapshot.

## Colors

```css
--primary: #ab0520;       /* dark maroon — the real brand color, from the logo */
--primary-dark: #7a0317;  /* used for gradient depth, not in the source file */
--primary-hover: #ff6666; /* lighter red, hover state */
--secondary: #ffd4d4;     /* pale pink */
--ink: #212529;           /* headings */
--body-text: #333333;     /* body copy */
--muted: #6b6b6b;
--bg-soft: #fbf6f6;       /* off-white section backgrounds */
--border: #eadddd;
```

All defined as CSS custom properties in `src/styles/global.css` — use those
variables, don't hardcode hex values in component CSS.

**Ignore `--bs-primary: #363062` (purple) and `--bs-secondary: #AC4CBC` (pink)**
if you ever look at `web/8/css/style.css` directly — those are unused Bootstrap
admin-template scaffolding, not ReviewMate's real identity. The maroon/red from
the logo is correct; confirmed by cross-checking the actual logo file.

## Typography

Google Font **Roboto**, weights 400/500/700/900. Loaded via `<link>` in
`index.html` (not `@import` in CSS, for faster loading). Fallback stack:

```
"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu,
"Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif
```

## Logo files

Copied from `web/8/images/` into this project's `public/`:

- `logo-full.png` — the real ReviewMate wordmark + magnifying-glass icon.
  **Has an opaque light gray/white background baked into the PNG** (not
  transparent) — only use it on white/light surfaces (e.g. the Header, which
  has a light pink/white background). It will show as an ugly gray box on any
  dark background.
- `favicon.png` — used as-is.

### Trap: `logo-text-white.png` is not real ReviewMate branding

`web/8/images/logo-text-white.png` despite its name is **not** a white/light
variant of the ReviewMate logo. Opening it
directly shows the literal text **"kripton"** rendered as an image. This is
leftover placeholder art from whatever Bootstrap admin theme ("Kripton") the
`web/8/` UI shell was originally built on top of, never replaced with real
branding. It was confirmed (2026-09) to be unreferenced by any `.jsp` file
under `web/8/`, so it's a dead asset in the real app too — not something a fix
there needs to account for, just something to never copy into a new project
assuming the filename is trustworthy.

**Do not use this file.** For a light/white wordmark on a dark background
(e.g. the page footer here), use a styled text wordmark instead — see
`Footer.jsx` for the pattern: literal "Review" + a small `lucide-react`
`Search` icon (rotated, colored with `--secondary`) + "Mate", all in white,
rather than an image.

## Icons

This project uses `lucide-react`, not Bootstrap Icons (which the internal
`web/8/` app uses). This is a deliberate choice — this is a fresh marketing
surface meant to look distinct and modern, not match the internal app chrome
pixel-for-pixel. Icon name → component resolution goes through
`src/lib/icons.jsx` (`iconMap` + `<Icon name="..." />`), driven by string names
stored in `src/data/features.js` — add any newly-used icon to `iconMap` there.
