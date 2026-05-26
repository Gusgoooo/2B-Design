---
description: Google Style visual constraints - applied as .cursor/rules/anchor-style.mdc when this preset is active. Uses Design-anchor components and semantic tokens instead of hardcoded Material You values.
alwaysApply: true
---

# Google Style - Design-anchor Style Prompt

The current vibe is **Google Style**: Material You inspired, friendly,
adaptive, rounded, colorful, and product-first. The interface should feel soft
and approachable, with tonal surfaces and tactile states, while still staying
stable enough for serious B2B workflows.

This style is suitable for onboarding, settings, admin portals, internal tools,
customer support, education products, CRM, collaboration products, and dashboard
experiences that need to feel accessible, familiar, and human.

## Design-anchor Contract

Use Design-anchor as the source of truth:

- Use the recommended Design-anchor default component library first.
- Import components from `@design` or the configured Design-anchor alias.
- Use semantic token classes such as `bg-background`, `bg-card`, `bg-muted`,
  `bg-primary`, `text-foreground`, `text-muted-foreground`, `border-border`,
  and `ring-ring`.
- Do not hardcode hex colors, raw RGB/HSL values, arbitrary spacing, arbitrary
  radius, raw CSS gradients, or one-off shadow recipes in product code.
- Do not replace Design-anchor components with raw `<button>`, `<input>`,
  `<table>`, `<dialog>`, or hand-built equivalents.
- If Material You behavior requires a component that the library does not have,
  mark it as `needsCustomComponent` and add a spec before implementation.

## Surface Mode Policy

Apply this preset at two strengths:

- **Intro mode**: for homepage, landing, onboarding, docs showcase, pricing,
  launch, and brand storytelling pages. Use the original prompt's full visual
  character: richer shape language, expressive surfaces, product previews,
  decorative but accessible motion, and signature section treatments. Keep
  these effects inside Design-anchor components, variants, or documented page
  sections instead of raw primitives.
- Token-compatible details such as color, spacing, radius, typography, shadow,
  and motion roles must still resolve through Design-anchor tokens or named
  variants so intro pages and product pages remain visually aligned.
- **Product mode**: for app interiors, governance pages, admin pages, forms,
  tables, dashboards, settings, and repeated B2B workflows. Use the same tokens
  and component personality, but reduce decoration, continuous motion, complex
  backgrounds, and layout shifts. Prefer stable Design-anchor components,
  clear states, semantic tokens, and predictable density.

## Personality

Google Style is:

- **personal**: the UI feels adaptive and welcoming,
- **soft**: surfaces are tonal rather than stark,
- **rounded**: actions, chips, cards, and panels use generous shape language,
- **colorful**: emphasis uses tokenized primary/info/status colors carefully,
- **tactile**: interaction states feel responsive without moving the layout,
- **practical**: product workflows stay clear, scannable, and accessible.

Avoid both extremes: do not make the UI sterile and gray, and do not turn every
screen into a decorative consumer landing page.

## Token Intent

This preset maps the Material You inspired identity into Design-anchor seeds:

- `colorPrimary`: expressive purple for primary actions, selected states, focus,
  navigation highlights, and important user decisions.
- `colorInfo`: familiar Google-blue companion for informational accents, charts,
  and low-risk emphasis.
- `colorSuccess`, `colorWarning`, `colorError`: recognizable status tones for
  feedback, validation, and operational states.
- `colorBgBase`: warm tonal application canvas.
- `colorTextBase`: warm on-surface text color.
- `borderRadius`: large friendly shape language.
- `sizeUnit`: comfortable spacing for approachable B2B UI.

Use these meanings through semantic classes and component variants, not direct
values.

## Color Usage

Use a tonal surface model:

- App canvas: `bg-background`.
- Main panels and cards: `bg-card` or `bg-muted`.
- Text: `text-foreground` and `text-muted-foreground`.
- Structure: `border-border`, `divide-border`, `ring-ring`.
- Primary actions: `bg-primary` and Button default variants.
- Secondary emphasis: Button secondary/outline/ghost variants, Badge variants,
  Tabs, Select, ToggleGroup, and navigation selected states.
- Status: only through Design-anchor status variants or semantic status tokens.

Do not use pure white as a default product surface unless the active token map
intentionally resolves `bg-card` that way. The design goal is tonal hierarchy,
not white boxes on white pages.

### State Layer Policy

The original inspiration uses state layers instead of aggressive color changes.
In Design-anchor:

- Prefer component variants that already encode hover, active, selected, focus,
  and disabled states.
- Use `hover:bg-muted`, `hover:text-foreground`, `data-[state=active]`, and
  selected variants where the component supports them.
- Use focus tokens through `ring-ring` and component focus styles.
- Do not hand-code primary opacity overlays unless the project defines a named
  state-layer utility.
- If no state-layer utility exists, keep states simple with semantic hover,
  focus, and selected variants.

## Typography

Use the project typography configured by Design-anchor. Do not import fonts from
inside page or component files.

Recommended hierarchy:

- App body: `text-sm` or `text-base`, depending on density.
- Tables, captions, metadata: `text-xs` or `text-sm`.
- Page titles: `text-xl` or `text-2xl`.
- Product section headings: `text-2xl` or `text-3xl`.
- Marketing/onboarding hero headings: `text-4xl` or `text-5xl` only when the
  surface is truly introductory.
- Buttons, tabs, chips, and labels: `font-medium`.
- Body copy: normal weight with comfortable line height.

Avoid custom letter-spacing and font imports in implementation code. If the
brand needs Roboto or another Google-like typeface, configure it at the
Design-anchor theme or app shell level, not inside page components.

## Shape And Radius

Shape is a signature of this preset, but it must still flow through tokens and
components:

- Buttons, badges, chips, filter pills, and compact selectors should use
  pill-like component variants when available.
- Cards, sheets, dialogs, empty states, and onboarding panels should feel
  generously rounded through the preset radius token.
- Data tables and dense admin controls may be calmer and more compact if the
  component spec requires it.
- Do not use arbitrary `rounded-*` values in product code.
- Do not override every component radius manually; let the preset seed and
  Design-anchor components carry the shape.

If a Material You filled text field or special container shape is required,
define it as a component variant/spec instead of styling raw inputs per page.

## Layout Rhythm

Google Style favors clear grouping and comfortable touch targets:

- Use Design-anchor layout primitives and responsive grid patterns.
- Use cards or panels to group tasks, but avoid nesting cards inside cards.
- Product screens should be scannable: title, actions, filters, content, states.
- Onboarding screens can use larger panels and more whitespace.
- Settings screens should group related fields into calm sections with clear
  labels and helper text.
- Avoid arbitrary grid tracks, fixed pixel widths, and layout shifts on hover.

This preset can be friendlier and more spacious than `linear`, but should not
become loose or inefficient for daily B2B usage.

## Surfaces And Depth

Use tonal depth first, shadow second:

- Prefer semantic surface changes over heavy elevation.
- Standard work surfaces use `Card`, `bg-card`, `bg-muted`, and subtle borders
  where needed.
- Interactive cards can use restrained shadow or background-state changes only
  if the component variant supports them.
- Dialogs, sheets, popovers, dropdowns, and tooltips must use Design-anchor
  primitives.
- Large marketing or onboarding containers may use stronger presence if backed
  by semantic tokens and existing variants.

Avoid:

- raw blur blobs, radial-gradient backgrounds, bokeh, or decorative orbs in
  product workflow screens,
- custom shadow stacks pasted from inspiration prompts,
- glass effects unless a tokenized component variant exists,
- using borders everywhere when a tonal surface hierarchy would be clearer.

## Components

Prefer these Design-anchor components:

| UI need | Use |
|---|---|
| Primary action | Button |
| Secondary action | Button variant="secondary" / "outline" / "ghost" |
| Floating or prominent action | Button or a documented FAB component variant |
| Status or category | Badge |
| Filter chips | Badge / ToggleGroup / Tabs |
| Data list | DataTable / Table |
| Form input | Input, Textarea, Select, Checkbox, RadioGroup, Switch |
| Settings groups | Card, Field, Form, Separator |
| Navigation | Sidebar, NavigationMenu, Breadcrumb, Tabs |
| Confirmation | AlertDialog |
| Inline feedback | Alert |
| Empty state | Empty |
| Loading state | Skeleton / Spinner |
| Help affordance | Tooltip |

Never hand-build these primitives unless the Design-anchor library lacks the
required component and the page spec marks it as `needsCustomComponent`.

## Section And Page Patterns

For product app screens:

- Header: clear title, short description when useful, primary action aligned to
  the workflow.
- Toolbar: search, filter chips, sort, view toggles, and batch actions.
- Main content: DataTable, task cards, detail panel, or settings groups.
- Feedback: loading, empty, error, partial, saved, unsaved, and permission
  states.
- Navigation: selected state should be obvious through tokenized background,
  text, or indicator variants.

For onboarding and setup:

- Use friendly rounded panels, clear step labels, and reassuring helper text.
- Prefer progressive disclosure over dumping every field at once.
- Use primary for the main next action; use secondary or ghost for optional
  actions.
- Use product-relevant UI previews rather than abstract decoration.

For dashboards:

- Use tonal cards for metrics.
- Use charts with `customSeeds` or chart semantic tokens.
- Use color plus labels/icons for status; never color alone.
- Keep dense areas stable on hover and during loading.

## Motion

Motion should feel tactile and calm:

- Use component-provided transitions first.
- Prefer `transition-colors`, `transition-opacity`, and subtle shadow changes.
- Press feedback is acceptable when the Button/component variant provides it.
- Avoid large hover scale transforms in core product workflows.
- Continuous animation is reserved for loading or live status only.
- Respect reduced motion preferences.

Do not add decorative bouncing, spinning, floating, or pulsing elements unless
the page is an onboarding/marketing surface and the motion is tokenized,
accessible, and nonessential.

## Accessibility

- All controls need visible labels or `aria-label`.
- Focus states must remain visible through Design-anchor focus/ring tokens.
- Do not rely on color alone for selected, success, warning, or error states.
- Forms need helper text and validation states where relevant.
- Empty and error states must explain the next action.
- Touch targets must remain usable on mobile.

## Project Health Expectations

After implementation:

- run `npx design-anchor audit`,
- check Project Health for default component adoption,
- confirm token status is ready,
- confirm AI rules are fresh,
- review any drift before continuing to more pages.

If an auto-fix is available, ask the user before applying it.

## What To Avoid

- Hardcoded Material You colors or custom CSS variables in app code. These live
  in preset tokens, not implementation.
- Raw Google/Material CSS snippets pasted into components.
- Arbitrary Tailwind values for spacing, radius, grid, opacity, or shadows.
- Raw HTML primitives where Design-anchor components exist.
- One-off filled text fields, chips, FABs, or cards that bypass component specs.
- Purely decorative blur backgrounds in operational product surfaces.
- Heavy shadow/elevation systems that fight tonal hierarchy.
