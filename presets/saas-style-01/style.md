---
description: SaaS Style 01 visual constraints - applied as .cursor/rules/anchor-style.mdc when this preset is active. Uses Design-anchor components and semantic tokens instead of hardcoded visual constants.
alwaysApply: true
---

# SaaS Style 01 - Design-anchor Style Prompt

The current vibe is **SaaS Style 01**: minimalist modern SaaS with a confident
blue accent, warm off-white surfaces, deep slate text, generous whitespace, and
premium but restrained depth.

This style is for B2B SaaS, product-led growth pages, dashboards, onboarding,
pricing, analytics, customer portals, and admin tools that need to feel polished
without becoming decorative or fragile.

## Design-anchor Contract

Use Design-anchor as the source of truth:

- Use the recommended Design-anchor default component library first.
- Import components from `@design` or the configured Design-anchor alias.
- Use semantic token classes such as `bg-background`, `bg-card`, `bg-primary`,
  `text-foreground`, `text-muted-foreground`, `border-border`, `ring-ring`.
- Do not hardcode hex colors, raw RGB/HSL values, arbitrary spacing, arbitrary
  radius, or one-off CSS gradients in product code.
- Do not replace Design-anchor components with raw `<button>`, `<input>`,
  `<table>`, `<dialog>`, or hand-built equivalents.
- If a design idea needs a new primitive, mark it as `needsCustomComponent` and
  add a spec before implementation.

## Surface Mode Policy

Apply this preset at two strengths:

- **Intro mode**: for homepage, landing, onboarding, docs showcase, pricing,
  launch, and brand storytelling pages. Use the original prompt's full visual
  character: polished SaaS hero sections, refined gradients, animated product
  previews, premium cards, and confident blue signature moments. Keep these
  effects inside Design-anchor components, variants, or documented page
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

SaaS Style 01 is:

- **clear**: structure first, visual flourish second,
- **confident**: primary actions are unmistakable,
- **premium**: surfaces have calm spacing and considered hierarchy,
- **alive**: motion communicates state, never decoration,
- **design-forward**: landing and onboarding moments can be expressive, while
  app workflows remain efficient and scannable.

Avoid sterile grayscale screens. Also avoid over-designed marketing visuals that
fight the product workflow.

## Token Intent

This preset maps visual identity into Design-anchor seeds:

- `colorPrimary`: electric blue accent for primary actions, selected states,
  important links, and critical highlights.
- `colorInfo`: the lighter blue companion for charts, subtle emphasis, and
  approved accent-pair moments.
- `colorBgBase`: warm off-white application canvas.
- `colorTextBase`: deep slate text, also suitable for inverted spotlight
  sections through semantic foreground/background tokens.
- `borderRadius`: softly rounded SaaS surfaces.
- `sizeUnit`: comfortable spacing rhythm for premium B2B UI.

Use these meanings through semantic classes, not direct values.

## Color Usage

Use a concentrated accent model:

- Most surfaces: `bg-background`, `bg-card`, `bg-muted`.
- Most text: `text-foreground` and `text-muted-foreground`.
- Structure: `border-border`, `divide-border`, `ring-ring`.
- Primary emphasis: `bg-primary`, `text-primary`, selected states, key metric
  highlights, primary CTA.
- Status colors: only through component variants or semantic status tokens.

Accent should appear deliberately. A screen should not be saturated with primary
blue. Use it where the user should act, decide, or notice meaningful change.

### Gradient Policy

The original inspiration used a blue gradient as a signature. In Design-anchor,
do not write raw gradient stops or hex values in feature code.

Allowed:

- use `bg-primary` for normal product UI,
- use `text-primary` for emphasis,
- use a pre-approved named gradient utility or component variant if the project
  defines one,
- use primary/info token pairing only in isolated landing, hero, pricing, or
  onboarding moments.

Fallback:

- if no approved gradient utility exists, use solid semantic primary instead of
  hand-coding a gradient.

## Typography

Use the project typography configured by Design-anchor. Do not import fonts from
inside page or component files.

Recommended hierarchy:

- App body: `text-sm` or `text-base`, depending on density.
- Dense tables and metadata: `text-xs` or `text-sm`.
- Page titles: `text-xl` / `text-2xl`.
- Marketing hero headings: `text-4xl` / `text-5xl` only when the screen is
  truly a landing or onboarding surface.
- Card titles: `font-semibold`.
- UI labels: `font-medium`.

Avoid custom letter-spacing, especially wide tracking on badges. Use component
shape, icon, and hierarchy instead.

## Layout Rhythm

SaaS Style 01 balances generous page whitespace with efficient B2B components.

- Product app screens should be scannable and not hero-heavy.
- Landing/onboarding screens can use more vertical space and stronger hierarchy.
- Use established Design-anchor layout primitives and responsive grid patterns.
- Avoid arbitrary grid tracks and pixel widths in implementation code.
- Prefer stable dimensions for tables, cards, toolbar controls, and counters so
  hover/loaded states do not shift layout.

## Surfaces And Depth

Use depth sparingly:

- Standard work surfaces: Card, border, subtle shadow only when hierarchy needs
  it.
- Data tables: prefer clear borders, row states, and spacing over decorative
  elevation.
- Dialog/popover surfaces: use Design-anchor Dialog, AlertDialog, Popover,
  DropdownMenu, Tooltip.
- Featured marketing cards: may use stronger elevation if consistent with the
  selected component variants.

Avoid:

- decorative blobs, gradient orbs, bokeh backgrounds,
- raw radial-gradient textures in product code,
- heavy custom shadow stacks,
- nested UI cards inside other cards.

## Components

Prefer these Design-anchor components:

| UI need | Use |
|---|---|
| Primary action | Button |
| Secondary action | Button variant="secondary" / "outline" / "ghost" |
| Status | Badge |
| Data list | DataTable / Table |
| Form input | Input, Textarea, Select, Checkbox, RadioGroup, Switch |
| Filters | DropdownMenu, Select, Tabs, ToggleGroup |
| Confirmation | AlertDialog |
| Inline feedback | Alert |
| Empty state | Empty |
| Loading state | Skeleton / Spinner |
| Navigation | Sidebar, NavigationMenu, Breadcrumb, Tabs |
| Help affordance | Tooltip |

Never hand-build these primitives unless the Design-anchor library lacks the
required component and the page spec marks it as `needsCustomComponent`.

## Section And Page Patterns

For product app screens:

- Header: clear title, one-line description only if useful, primary action on
  the right.
- Toolbar: search, filters, view options, bulk actions.
- Main content: DataTable, grouped cards, or detail panel.
- States: loading, empty, error, partial.

For landing/onboarding screens:

- Hero can be bold and spacious, but must reveal the next section.
- Use product-relevant visuals or actual UI previews, not abstract decoration.
- Use primary accent for one strong CTA and a quieter secondary action.
- Inverted contrast sections are allowed for stats, final CTA, or high-signal
  proof points, but implement them through semantic tokens.

## Motion

Motion should communicate responsiveness:

- Use `transition-colors`, `transition-opacity`, and restrained shadow changes.
- Use `duration-fast` or `duration-mid` where available.
- Hover can slightly lift a featured marketing card, but product app controls
  should stay stable.
- Continuous animation is rare and only for live status indicators or loading.
- Respect reduced motion preferences.

Avoid:

- decorative bouncing, pulsing, spinning rings, or floating hero elements inside
  core product workflows,
- large transform animations on tables, forms, or navigation,
- motion that changes layout.

## Accessibility

- All interactive controls need visible labels or `aria-label`.
- Focus states must remain visible through Design-anchor focus/ring tokens.
- Do not rely on blue alone for status.
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

- Hardcoded primary/info/slate colors or custom CSS variables in app code. These
  values live in the preset tokens, not in implementation.
- Arbitrary Tailwind values for spacing/radius/grid.
- Raw HTML primitives where Design-anchor components exist.
- One-off "pretty" cards that bypass component specs.
- Gradients or textures pasted from inspiration prompts without token support.
- Generic template SaaS pages with oversized heroes inside operational product
  surfaces.
