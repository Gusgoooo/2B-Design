---
description: HUD Dark Style visual constraints - applied as .cursor/rules/anchor-style.mdc when this preset is active. Uses Design-anchor components and semantic tokens instead of hardcoded Art Deco or HUD values.
alwaysApply: true
---

# HUD Dark Style - Design-anchor Style Prompt

The current vibe is **HUD Dark Style**: dark command-center UI with Art Deco
geometry, high contrast, metallic primary emphasis, crisp frames, and precise
dashboard energy. It should feel premium, cinematic, structured, and serious,
not soft, playful, or generic.

This style is suitable for executive dashboards, security consoles, AI ops,
financial monitoring, premium analytics, cultural/luxury products, trading
interfaces, system status hubs, and high-signal B2B command surfaces.

## Design-anchor Contract

Use Design-anchor as the source of truth:

- Use the recommended Design-anchor default component library first.
- Import components from `@design` or the configured Design-anchor alias.
- Use semantic token classes such as `bg-background`, `bg-card`, `bg-muted`,
  `bg-primary`, `text-foreground`, `text-muted-foreground`, `border-border`,
  and `ring-ring`.
- Do not hardcode hex colors, raw RGB/HSL values, arbitrary spacing, arbitrary
  radius, raw CSS gradients, clip paths, decorative patterns, or one-off glow
  shadows in product code.
- Do not replace Design-anchor components with raw `<button>`, `<input>`,
  `<table>`, `<dialog>`, or hand-built equivalents.
- If the page needs a HUD frame, diamond marker, stepped corner, or Art Deco
  ornament, mark it as `needsCustomComponent` and add a spec before
  implementation.

## Surface Mode Policy

Apply this preset at two strengths:

- **Intro mode**: for homepage, landing, onboarding, docs showcase, pricing,
  launch, and brand storytelling pages. Use the original prompt's full visual
  character: cinematic HUD framing, Art Deco geometry, command-center hero
  visuals, premium contrast, and signature decorative treatments. Keep these
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

HUD Dark Style is:

- **precise**: every line and state has operational purpose,
- **luxurious**: primary emphasis feels metallic and premium,
- **architectural**: cards and panels read like framed control surfaces,
- **high-contrast**: hierarchy is dramatic but still readable,
- **ceremonial**: hero or showcase areas may use symmetrical composition,
- **mission-focused**: dense product workflows remain stable and scannable.

Avoid friendly consumer softness, oversized rounded SaaS cards, playful
illustration, and decorative cyberpunk noise that reduces readability.

## Token Intent

This preset maps the dark Art Deco HUD identity into Design-anchor seeds:

- `colorPrimary`: metallic gold emphasis for primary actions, selected states,
  critical highlights, active indicators, and premium framing.
- `colorInfo`: midnight depth for secondary emphasis, technical panels, and
  non-critical analytic accents.
- `colorBgBase`: obsidian dark application canvas.
- `colorTextBase`: champagne foreground for readable dark-mode text.
- `colorSuccess`, `colorWarning`, `colorError`: operational status tones.
- `borderRadius`: crisp geometric corners.
- `sizeUnit`: precise spacing rhythm for dashboards and command surfaces.

Use these meanings through semantic classes and component variants, not direct
values.

## Color Usage

Use a dark-first, high-contrast model:

- App canvas: `bg-background`.
- Panels and cards: `bg-card` or `bg-muted`.
- Text: `text-foreground` and `text-muted-foreground`.
- Structure: `border-border`, `divide-border`, `ring-ring`.
- Primary emphasis: `bg-primary`, `text-primary`, selected states, active
  markers, key metric accents, and primary CTA.
- Status: only through Design-anchor status variants or semantic status tokens.

Primary should be decisive and sparse. A screen should feel framed and
intentional, not flooded with metallic emphasis.

### Ornament Policy

The original inspiration uses Art Deco geometry: frames, diamonds, stepped
corners, symmetrical dividers, and sunburst-like focal emphasis. In
Design-anchor:

- Use existing component variants for framed cards, badges, tabs, tables, and
  buttons.
- If ornaments are needed, implement them as named Design-anchor components or
  variants, not per-page CSS.
- Decorative lines or markers must be `aria-hidden` and must not carry meaning.
- Avoid raw background patterns, radial gradients, clip paths, and custom glow
  snippets in feature code.
- If no approved ornament component exists, choose a simpler semantic border or
  badge treatment.

## Typography

Use the project typography configured by Design-anchor. Do not import fonts from
inside page or component files.

Recommended hierarchy:

- App body: `text-sm` or `text-base`, depending on density.
- Data tables, telemetry, captions, metadata: `text-xs` or `text-sm`.
- Page titles: `text-xl` or `text-2xl`.
- Dashboard section headings: `text-lg` or `text-xl`.
- Landing/showcase hero headings: `text-4xl` or `text-5xl` only when the
  surface is truly ceremonial.
- Buttons, tabs, badges, metric labels: `font-medium` or `font-semibold`.

Avoid custom letter-spacing in implementation code. If the brand requires a
display face or uppercase Art Deco treatment, configure it at the theme,
component variant, or app-shell level.

## Shape And Structure

Shape should feel sharp and engineered:

- Buttons, inputs, tabs, cards, and dialogs should follow the preset radius
  token, not ad hoc overrides.
- Favor crisp frames, thin dividers, aligned columns, and symmetrical groups.
- Use compact but readable panels for operational dashboards.
- Use clear table boundaries, sticky headers, and stable row states for dense
  data.
- Do not add arbitrary corner cuts, stepped shapes, or diamond rotations in page
  code.

If stepped corners, double frames, or diamond markers are important to the
brand, define them as reusable Design-anchor components or variants with specs.

## Layout Rhythm

HUD Dark Style works best with disciplined grids:

- Product app screens should prioritize hierarchy, density, and scan speed.
- Dashboards should group metrics by operational meaning, not decoration.
- Toolbars should expose search, filters, range controls, and view modes.
- Hero/showcase pages may use centered symmetry and strong stage presence.
- Avoid layout shifts on hover, loading, or selected states.
- Avoid nested cards inside cards; use sections, separators, and panels instead.

This preset can look dramatic, but product workflows must stay efficient.

## Surfaces And Depth

Use framed depth instead of soft shadows:

- Standard work surfaces use `Card`, `bg-card`, `border-border`, and subtle
  semantic dividers.
- Important panels can use stronger component variants if they exist.
- Tables should rely on row states, dividers, and status badges over decorative
  elevation.
- Dialogs, popovers, dropdowns, sheets, and tooltips must use Design-anchor
  primitives.

Avoid:

- raw glow shadows pasted into page code,
- heavy drop shadows on dark backgrounds,
- decorative noise overlays or crosshatch patterns in product workflows,
- bright ornamental borders around every element,
- glass or blur effects unless a tokenized component variant exists.

## Components

Prefer these Design-anchor components:

| UI need | Use |
|---|---|
| Primary action | Button |
| Secondary action | Button variant="secondary" / "outline" / "ghost" |
| Status or telemetry | Badge |
| Key metric | Card / Stat / Badge |
| Data list | DataTable / Table |
| Filters and ranges | Select, DropdownMenu, Tabs, ToggleGroup |
| Form input | Input, Textarea, Select, Checkbox, RadioGroup, Switch |
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

- Header: clear title, current scope, time range, and primary action.
- Toolbar: search, filters, segmented view controls, bulk actions.
- Main content: DataTable, metric grid, status lanes, or detail inspector.
- States: loading, empty, degraded, error, partial data, permission restricted.
- Navigation: selected state should be visible through tokenized background,
  border, or indicator variants.

For premium landing or showcase screens:

- Use strong centered hierarchy and measured negative space.
- Show real product UI, dashboards, or command surfaces as the hero visual.
- Use primary emphasis for one strong action and a quieter secondary action.
- Decorative geometry must remain secondary to the product message.

For analytics dashboards:

- Use `customSeeds` or chart semantic tokens for charts.
- Pair color with labels, icons, or shapes for status.
- Keep chart legends, tooltips, and table states accessible.
- Avoid using primary color for every data series.

## Motion

Motion should feel mechanical and deliberate:

- Use component-provided transitions first.
- Prefer `transition-colors`, `transition-opacity`, and restrained border or
  shadow changes.
- Hover states may intensify a frame or selected indicator when component
  variants support it.
- Avoid bouncy motion, floating objects, parallax, or continuous decorative
  animation in product workflows.
- Continuous animation is reserved for loading, live status, or streaming
  telemetry only.
- Respect reduced motion preferences.

## Accessibility

- All controls need visible labels or `aria-label`.
- Focus states must remain visible through Design-anchor focus/ring tokens.
- Do not rely on metallic primary color alone for selected, warning, or error
  states.
- Dense dashboards need clear headings, table captions where useful, and
  keyboard-reachable controls.
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

- Hardcoded Art Deco or HUD colors in app code. These live in preset tokens,
  not implementation.
- Raw CSS snippets for crosshatch backgrounds, sunbursts, clip paths, diamonds,
  glow shadows, or double frames.
- Arbitrary Tailwind values for spacing, radius, grid, opacity, or shadows.
- Raw HTML primitives where Design-anchor components exist.
- One-off decorative cards that bypass component specs.
- Decorative contrast that makes tables, forms, or charts harder to read.
