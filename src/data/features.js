// Condensed from "ReviewMate 8 - Release Notes" (March 2026).
// Section 4 "User Interface Enhancements" is intentionally folded into the
// Hero ticker (see Hero.jsx) instead of a card here — see the build plan.

export const categories = [
  {
    id: "ai",
    label: "AI & Automation",
    icon: "Sparkles",
    blurb: "Let ReviewMate do the busywork.",
  },
  {
    id: "views",
    label: "Views, Filters & Reporting",
    icon: "LayoutDashboard",
    blurb: "See exactly the data you need, built your way.",
  },
  {
    id: "workflow",
    label: "Document & Workflow",
    icon: "FolderKanban",
    blurb: "Files, templates, and tasks — organized at last.",
  },
  {
    id: "audit",
    label: "Audit Precision & Compliance",
    icon: "ShieldCheck",
    blurb: "Fairer scoring, richer findings, fewer clicks.",
  },
  {
    id: "clinical",
    label: "Clinical & Financial Intelligence",
    icon: "HeartPulse",
    blurb: "CDI and RVU, natively built in.",
  },
];

export const features = [
  {
    id: "ai-suite",
    category: "ai",
    icon: "Bot",
    title: "ReviewMate AI Assistant",
    hook: "Your new coworker. Never takes PTO, never misses a code.",
    short:
      "Meet your new AI teammate: chat, research, rephrase, and assess risk — all inside ReviewMate.",
    detail:
      "The ReviewMate Chatbot drafts queries and reports conversationally, AI rephrasing sharpens finding language, AI research surfaces relevant codes and reference material instantly, and the AI-powered Risk Manager add-on flags risk areas using your historical audit data. Every AI tool can be switched on or off to match your compliance policy.",
  },
  {
    id: "dynamic-forms",
    category: "ai",
    icon: "PencilRuler",
    title: "Dynamic Form Designer",
    hook: "Just describe it. Watch a form build itself.",
    short:
      "Design custom forms in minutes — drag in fields, or just describe what you need to the chatbot.",
    detail:
      "Build forms from a library of text fields, dropdowns, checkboxes, and date pickers, or let the ReviewMate Chatbot assemble one conversationally from a plain-language description.",
  },
  {
    id: "system-views",
    category: "views",
    icon: "Columns3",
    title: "Custom System Views",
    short:
      "Drag-and-drop screens with exactly the columns and filters your team needs.",
    detail:
      "Rearrange columns by dragging and dropping, add derived columns like conversation counts or audit history, and filter faster with autocomplete and multi-select checkboxes. Views are role- and department-aware, can be cloned, shared, and set as your default on login.",
  },
  {
    id: "report-developer",
    category: "views",
    icon: "BarChart3",
    title: "Drag-and-Drop Report Developer",
    short:
      "A visual report builder that turns raw audit data into shareable insight.",
    detail:
      "Add columns, graphs, filters, and layout blocks without writing a query. Reports are role-aware, can be flagged as favorites for one-click access, and scheduled for automatic email delivery — embedded in the message or attached, with visibility rules built in.",
  },
  {
    id: "document-manager",
    category: "workflow",
    icon: "FolderOpen",
    title: "Reimagined Document Manager",
    short:
      "Drag-and-drop uploads with true folder organization, redesigned from the ground up.",
    detail:
      "Drop files straight from your desktop into the browser, group them into project folders (like “Inpatient Review April 2023”), and share by user, role, or department. Shared recipients get a secure, encrypted email link straight to the file.",
  },
  {
    id: "recommendation-bank",
    category: "workflow",
    icon: "Library",
    title: "Recommendation Bank",
    hook: "Write it once. Reuse it forever.",
    short:
      "A centralized library of reusable recommendation templates that write themselves.",
    detail:
      "Templates use merge codes and placeholders that auto-populate based on audit type, department, diagnosis, or procedure code — drag one into a finding for a consistent, preformatted recommendation every time.",
  },
  {
    id: "task-management",
    category: "workflow",
    icon: "ListChecks",
    title: "Built-In Task Management",
    short: "Every task, tied to every account, tracked from one dashboard.",
    detail:
      "A dedicated button surfaces pending or completed tasks for any account number, and the task dashboard has moved under Reporting for a cleaner, more logical home.",
  },
  {
    id: "code-validation",
    category: "audit",
    icon: "CheckCircle2",
    title: "FYI & Education Validation",
    short:
      "Two new validation types let you teach without dinging the scorecard.",
    detail:
      "Alongside PASS, REVISE, DELETE, and QUERY, reviewers can now flag codes as FYI or Education: informational notes that share knowledge without counting against coder accuracy metrics.",
  },
  {
    id: "inpatient-drg",
    category: "audit",
    icon: "Building2",
    title: "Smarter Inpatient DRG Workspace",
    short:
      "DRGs, always in view — faster repricing, collapsible widgets, and a layout that moves where you need it.",
    detail:
      "Refined third-party integrations speed up pricing and repricing. Original and revised DRGs stay visible without switching tabs, widgets expand for detail and recalculation, and the whole panel can be dragged to either side of the screen. Granular CPT/HCPCS modifier tracking gives coders partial credit instead of an all-or-nothing miss.",
  },
  {
    id: "audit-findings",
    category: "audit",
    icon: "Paperclip",
    title: "Richer Audit Findings",
    short:
      "Attach the “why” to every finding — PDFs, docs, links, and discharge disposition context included.",
    detail:
      "Auditors can attach supplemental materials — PDFs, Word docs, or web links — directly to a finding, shared with coders alongside the recommendation. Recommendations can now also be attached to discharge dispositions.",
  },
  {
    id: "accuracy-rates",
    category: "audit",
    icon: "Gauge",
    title: "Automatic Accuracy Rates",
    short: "Accuracy, calculated the moment an account is complete.",
    detail:
      "No more manual “Refresh calculations” clicks — rates compute automatically on completion, and completed accounts move to read-only status right away.",
  },
  {
    id: "cdi-support",
    category: "clinical",
    icon: "Stethoscope",
    title: "Full CDI Support",
    short:
      "Diagnoses, procedures, query recommendations, and outcomes — in one workflow.",
    detail:
      "CDI specialists can document findings end to end, with CDI-specific outcomes now trackable and new reports like “Notes on Line Items” revealing documentation impact and DRG shifts.",
  },
  {
    id: "rvu-integration",
    category: "clinical",
    icon: "CircleDollarSign",
    title: "RVU Integration for ProFee",
    short:
      "RVU values, mapped straight from CMS Physician Fee Schedule data.",
    detail:
      "RVU values map to audited CPT/HCPCS codes based on date and place of service, so you can see Total RVU and RVU change from coding updates — quantifying the impact of every audit finding on provider productivity.",
  },
];

// Folded from Release Notes section 4, "User Interface Enhancements" —
// surfaced as a ticker in the Hero rather than its own feature card.
export const uiTicker = [
  "Collapsible left-hand menus",
  "Persistent global search",
  "One-click Selected View switching",
  "Quick Create shortcuts",
  "Refreshed, colorful interface",
];
