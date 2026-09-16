# Gotchas

Things that look like real bugs during verification but aren't, plus a couple
of real content traps. Recorded so you don't spend time re-diagnosing them.

## 1. Screenshot tool shows a blank or torn/narrow image after scroll or resize

Symptom: `computer{action:"screenshot"}` in the Claude Browser pane returns a
fully blank white image, or an image where content only fills a narrow column
on the left with the rest blank — right after a `scroll`, or after
`resize_window` + `navigate` to a custom width/height.

This is a transient rendering/capture artifact in the pane's screenshot
mechanism, **not a real layout bug**. Confirmed multiple times by
cross-checking with `javascript_tool`:

```js
JSON.stringify({
  innerWidth: window.innerWidth,
  bodyScrollWidth: document.body.scrollWidth,
  someElementRect: document.querySelector('.some-el').getBoundingClientRect(),
});
```

— which always showed the real DOM/CSS was correct (full width, right
position) even when the screenshot looked broken. Fix: add a
`computer{action:"wait", duration:1}` before re-taking the screenshot. If a
screenshot still looks wrong after a 1s wait, verify with JS before assuming
it's a genuine bug.

## 2. `ref`-based clicks can miss at custom emulated viewport sizes

Symptom: `computer{action:"left_click", ref:"ref_N"}` resolves to a coordinate
that doesn't match where the element visually appears in the *screenshot's own
pixel space*, especially right after `resize_window` to a non-default size
(e.g. mobile 375×812 or a custom 1440×900). The click lands on the wrong spot
and appears to do nothing.

Workaround: at custom emulated sizes, prefer clicking by literal `coordinate`
read directly off the actual screenshot image over clicking by `ref`. `ref`
clicks were reliable at the pane's own default responsive size.

## 3. JSX text nodes decode HTML entities

`&amp;`, `&nbsp;`, etc. typed literally in JSX text children get decoded (e.g.
`&amp;` renders as `&`) the same as in HTML — this is correct, expected JSX
behavior, not a bug. That said, prefer just typing a literal `&` character in
JSX text over `&amp;` — same result, less confusing to read.

## 4. `logo-text-white.png` is not a real logo

See `brand.md` — this file, if copied from `web/8/images/`, renders the word
"kripton", not a ReviewMate wordmark. Not a screenshot artifact — genuinely bad
source content. Don't use it; use a text-based wordmark instead (see
`Footer.jsx`).

## 5. The `grid-template-rows: 0fr → 1fr` accordion trick needs `overflow: hidden` on the inner wrapper

Used in `FeatureCard.jsx`/`.css` for the expand/collapse animation. If you
copy this pattern elsewhere and forget the inner `overflow: hidden` (see
`.feature-card__panel-inner`), the collapsed state will still show the full
content instead of clipping it to zero height.
