---
description: Minimal Dark visual constraints - applied as .cursor/rules/anchor-style.mdc when this preset is active. Uses Design-anchor components and semantic tokens instead of hardcoded minimalist dark values.
alwaysApply: true
---

# Minimal Dark - Design-anchor Style Prompt

The current vibe is **Minimal Dark**: atmospheric, calm, premium, spacious, and
focused. It uses layered dark surfaces, warm amber emphasis, subtle borders, and
soft depth to make software feel refined at night without becoming harsh or
overdesigned.

This style is suitable for premium developer tools, productivity apps, focused
B2B dashboards, AI workspaces, internal consoles, observability products,
knowledge tools, and SaaS products that need dark-mode calm rather than visual
spectacle.

## Design-anchor Contract

Use Design-anchor as the source of truth:

- Use the recommended Design-anchor default component library first.
- Import components from `@design` or the configured Design-anchor alias.
- Use semantic token classes such as `bg-background`, `bg-card`, `bg-muted`,
  `bg-primary`, `text-foreground`, `text-muted-foreground`, `border-border`,
  and `ring-ring`.
- Do not hardcode hex colors, raw RGB/HSL values, arbitrary spacing, arbitrary
  radius, raw noise textures, radial glows, backdrop blur, glass effects, or
  one-off shadow recipes in product code.
- Do not replace Design-anchor components with raw `<button>`, `<input>`,
  `<table>`, `<dialog>`, or hand-built equivalents.
- If the page needs ambient orbs, glass cards, glow badges, atmospheric
  backgrounds, or special dark-mode hero treatments, mark them as
  `needsCustomComponent` and add a spec before implementation.

## Surface Mode Policy

Apply this preset at two strengths:

- **Intro mode**: for homepage, landing, onboarding, docs showcase, pricing,
  launch, and brand storytelling pages. Use the original prompt's full visual
  character: layered darkness, ambient glow, glass-effect cards, atmospheric
  hero backgrounds, warm amber focal points, and spacious dark sections. Keep
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

Minimal Dark is:

- **calm**: the interface supports long sessions without visual fatigue,
- **premium**: spacing, type, and subtle depth carry the feeling of quality,
- **warm**: amber emphasis prevents the dark palette from feeling cold,
- **focused**: every surface exists to improve reading, action, or hierarchy,
- **spacious**: dark space is a design tool, not empty filler,
- **restrained**: effects are present but never noisy.

Avoid pure-black harshness, neon cyberpunk, colorful gradients, heavy shadows,
busy background patterns, and generic inverted light-theme UI.

## Token Intent

This preset maps the minimalist dark identity into Design-anchor seeds:

- `colorPrimary`: warm amber emphasis for primary actions, selected states,
  focus, important highlights, and small moments of warmth.
- `colorInfo`: quiet neutral for metadata, secondary labels, and low-emphasis
  chart series.
- `colorBgBase`: deepest slate application canvas.
- `colorTextBase`: near-white foreground for readable dark UI.
- `colorSuccess`, `colorWarning`, `colorError`: operational status tones that
  stay subordinate to the calm dark palette.
- `borderRadius`: soft but controlled surfaces.
- `sizeUnit`: generous spacing rhythm for premium dark-mode focus.

Use these meanings through semantic classes and component variants, not direct
values.

## Color Usage

Use layered darkness:

- App canvas: `bg-background`.
- Elevated panels: `bg-card` or `bg-muted`.
- Text: `text-foreground` and `text-muted-foreground`.
- Structure: `border-border`, `divide-border`, `ring-ring`.
- Primary emphasis: Button default variants, `bg-primary`, selected states,
  active navigation, focus, and key highlight moments.
- Status: only through Design-anchor status variants or semantic status tokens.

Primary amber should be sparse. It should create warmth and direction, not turn
the interface into an orange theme.

## Atmosphere Policy

The original inspiration uses layered slate surfaces, ambient glow, glass-like
cards, and subtle noise. In Design-anchor:

- Use approved Card, Button, Badge, Alert, Stat, Hero, or Section variants for
  atmospheric treatments.
- Use named variants for glass, ambient, highlighted, or focused surfaces.
- Do not paste custom noise overlays, blurred orbs, glow shadows, or backdrop
  effects into feature code.
- If no approved atmospheric variant exists, use semantic background, border,
  and selected-state treatments instead.
- Decorative atmosphere must be non-semantic and `aria-hidden`.

## Typography

Use the project typography configured by Design-anchor. Do not import fonts from
inside page or component files.

Recommended hierarchy:

- App body: `text-sm` or `text-base`, depending on density.
- Metadata, technical labels, and quiet captions: `text-xs` or `text-sm`.
- Page titles: `text-2xl` or `text-3xl`.
- Product section headings: `text-3xl` or `text-4xl` for less dense surfaces.
- Landing or onboarding hero headings: `text-4xl` or `text-5xl` only when the
  screen is truly introductory.
- Buttons, labels, and navigation: `font-medium`.
- Body copy: comfortable line height and restrained contrast.

Avoid arbitrary tracking values and page-local font imports. If geometric
display typography or mono labels are required, configure them as theme
typography or component variants.

## Shape And Structure

Shape should feel soft but disciplined:

- Buttons, cards, inputs, dialogs, tables, and panels should follow the preset
  radius token.
- Use subtle borders and semantic surfaces to create depth.
- Keep cards visually light; avoid heavy framed boxes.
- Use pill treatments only where the component variant already supports them.
- Avoid arbitrary radius overrides and page-local glass styling.

If a focused dark card, ambient hero, or glow badge is important, define it as a
reusable Design-anchor component or variant with a spec.

## Layout Rhythm

Minimal Dark works best when the interface can breathe:

- Use generous section spacing for marketing, onboarding, and empty states.
- Use efficient but calm density for product apps.
- Keep content grouped by task: title, action, filters, content, states.
- Use simple grids and clear alignment over decorative layouts.
- Avoid nested cards inside cards; use sections, separators, and panels.
- Maintain mobile spacing enough that the dark atmosphere survives small screens.

The screen should feel focused and premium, not sparse because content is
missing.

## Surfaces And Depth

Use subtle ambient depth:

- Standard work surfaces use `Card`, `bg-card`, `border-border`, and semantic
  dividers.
- Highlighted panels may use approved ambient or selected variants.
- Tables should rely on row states and calm dividers over shadows.
- Dialogs, popovers, dropdowns, sheets, and tooltips must use Design-anchor
  primitives.

Avoid:

- heavy black shadows,
- raw amber glow shadows pasted into page code,
- custom noise textures,
- decorative background orbs in operational workflows,
- glass effects unless a tokenized component variant exists.

## Components

Prefer these Design-anchor components:

| UI need | Use |
|---|---|
| Primary action | Button |
| Secondary action | Button variant="secondary" / "outline" / "ghost" |
| Status or category | Badge |
| Key metric | Card / Stat / Badge |
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

- Header: clear title, calm subtitle if useful, primary action, and compact
  context.
- Toolbar: search, filters, sort, view options, and batch actions.
- Main content: DataTable, focused cards, detail panel, or grouped sections.
- States: loading, empty, error, partial, permission restricted, saved, draft.
- Navigation: selected state should be visible through semantic background,
  indicator, or border variants.

For onboarding and landing surfaces:

- Use dark space, one clear headline, and one decisive primary action.
- Use product UI previews or focused screenshots when visuals are needed.
- Use amber emphasis for the primary action and a few high-signal details.
- Keep copy concise and calm.

For dashboards:

- Use `customSeeds` or chart semantic tokens.
- Pair color with labels, icons, or shapes for status.
- Keep tables, charts, and filters readable on dark surfaces.
- Do not overuse amber in every metric.

## Motion

Motion should be smooth and subtle:

- Use component-provided transitions first.
- Prefer `transition-colors`, `transition-opacity`, and restrained border or
  state changes.
- Hover states may brighten borders or emphasis if component variants support
  it.
- Avoid bouncy motion, large transforms, constant animation, or decorative
  background motion in product workflows.
- Respect reduced motion preferences.

If ambient pulse, glow, or accordion behavior is needed, define it as a reusable
component variant with accessible reduced-motion behavior.

## Accessibility

- All controls need visible labels or `aria-label`.
- Focus states must remain visible through Design-anchor focus/ring tokens.
- Do not rely on amber alone for selected, warning, success, or error states.
- Body text must remain readable on dark surfaces.
- Decorative atmosphere must be `aria-hidden`.
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

- Hardcoded minimalist dark colors in app code. These live in preset tokens, not
  implementation.
- Raw CSS snippets for noise overlays, ambient orbs, glass cards, glow shadows,
  backdrop effects, or radial backgrounds.
- Arbitrary Tailwind values for spacing, radius, grid, tracking, opacity,
  shadows, or motion.
- Raw HTML primitives where Design-anchor components exist.
- One-off dark cards or atmospheric sections that bypass component specs.
- Turning the preset into a generic dark mode by removing layered surfaces and
  warm primary emphasis.
