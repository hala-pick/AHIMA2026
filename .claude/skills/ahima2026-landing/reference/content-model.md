# Content model

All feature copy lives in `src/data/features.js`, derived from
**"ReviewMate 8 - Release Notes.pdf"** (Release Date: March 2026), which has
14 numbered sections. This file explains how those sections map onto the page
so a future release's notes can be folded in the same way.

## The mapping

| # | Release Notes section | Where it went |
|---|---|---|
| 1 | Views and Filters | `features[]` card `system-views`, category `views` |
| 2 | Document Manager | card `document-manager`, category `workflow` |
| 3 | New Report Developer | card `report-developer`, category `views` |
| 4 | **User Interface Enhancements** | **not a card** — folded into `uiTicker[]`, shown as a scrolling strip in the Hero (see `Hero.jsx`) |
| 5 | Artificial Intelligence Features | card `ai-suite`, category `ai` |
| 6 | Dynamic Form Designer | card `dynamic-forms`, category `ai` |
| 7 | Recommendation Bank | card `recommendation-bank`, category `workflow` |
| 8 | Code Validation Enhancements | card `code-validation`, category `audit` |
| 9 | Inpatient DRGs Enhancements | card `inpatient-drg`, category `audit` (also absorbs the "Granular CPT/HCPCS Modifier" sub-point) |
| 10 | Audit Findings | card `audit-findings`, category `audit` |
| 11 | Accuracy Rates | card `accuracy-rates`, category `audit` |
| 12 | Task Management | card `task-management`, category `workflow` |
| 13 | CDI Support | card `cdi-support`, category `clinical` |
| 14 | RVU Integration | card `rvu-integration`, category `clinical` |

Result: **13 cards across 5 categories**, plus 1 section (UI Enhancements)
intentionally not a card.

## The 5 categories (`categories[]`)

`ai` (AI & Automation) · `views` (Views, Filters & Reporting) · `workflow`
(Document & Workflow) · `audit` (Audit Precision & Compliance) · `clinical`
(Clinical & Financial Intelligence). Each has `{ id, label, icon, blurb }` —
`blurb` is the italic one-liner shown under the active tab in `Features.jsx`.

## Each feature card's shape

```js
{
  id: "kebab-case-id",
  category: "one of the 5 category ids",
  icon: "PascalCase name matching a key in lib/icons.jsx's iconMap",
  title: "Card headline — punchy, product-name-style",
  short: "1 sentence shown collapsed, sets up the payoff",
  detail: "2-4 sentences shown on expand — the fuller explanation, can mention
           sub-features the release notes listed under this section",
}
```

## Extending this for a future release

1. Read the new release notes end to end first.
2. Decide per-section: does it deserve its own card, does it merge into an
   existing card (like the DRG modifier tracking point did), or is it more of
   an ambient UI polish item that belongs in the Hero ticker instead of a card
   (like section 4 was)? Don't mechanically create one card per numbered
   section — condense for a conference audience.
3. Assign each new/changed card to one of the 5 existing categories where it
   fits; only add a 6th category if something genuinely doesn't fit any of
   them (rare — these categories were chosen to be broad on purpose).
4. Pick an icon: check `lib/icons.jsx`'s `iconMap` for something already
   imported and reusable before adding a new `lucide-react` import.
5. Keep `short` to one sentence and `detail` to 2-4 — these render inside a
   fixed-width card, not a full page.
