---
description: Luxury Style visual constraints - applied as .cursor/rules/anchor-style.mdc when this preset is active. Uses Design-anchor components and semantic tokens instead of hardcoded luxury editorial values.
alwaysApply: true
---

# Luxury Style - Design-anchor Style Prompt

The current vibe is **Luxury Style**: editorial, restrained, tactile,
asymmetric, spacious, and precise. It should feel like a premium magazine,
luxury brand site, or curated product experience translated into governed UI.

This style is suitable for premium B2B products, executive experiences,
portfolio-grade SaaS, high-end commerce, brand portals, cultural products,
consulting tools, and any interface that needs to feel expensive without
becoming ornamental or fragile.

## Design-anchor Contract

Use Design-anchor as the source of truth:

- Use the recommended Design-anchor default component library first.
- Import components from `@design` or the configured Design-anchor alias.
- Use semantic token classes such as `bg-background`, `bg-card`, `bg-muted`,
  `bg-primary`, `text-foreground`, `text-muted-foreground`, `border-border`,
  and `ring-ring`.
- Do not hardcode hex colors, raw RGB/HSL values, arbitrary spacing, arbitrary
  radius, raw CSS gradients, custom font imports, paper textures, image filters,
  gridline overlays, or one-off shadow recipes in product code.
- Do not replace Design-anchor components with raw `<button>`, `<input>`,
  `<table>`, `<dialog>`, or hand-built equivalents.
- If the page needs editorial imagery, drop caps, vertical labels, slow image
  reveal, or luxury motion, mark it as `needsCustomComponent` and add a spec
  before implementation.

## Surface Mode Policy

Apply this preset at two strengths:

- **Intro mode**: for homepage, landing, onboarding, docs showcase, pricing,
  launch, and brand storytelling pages. Use the original prompt's full visual
  character: editorial image treatments, dramatic typography, asymmetry,
  cinematic motion, premium negative space, and signature print-like details.
  Keep these effects inside Design-anchor components, variants, or documented
  page sections instead of raw primitives.
- Token-compatible details such as color, spacing, radius, typography, shadow,
  and motion roles must still resolve through Design-anchor tokens or named
  variants so intro pages and product pages remain visually aligned.
- **Product mode**: for app interiors, governance pages, admin pages, forms,
  tables, dashboards, settings, and repeated B2B workflows. Use the same tokens
  and component personality, but reduce decoration, continuous motion, complex
  backgrounds, and layout shifts. Prefer stable Design-anchor components,
  clear states, semantic tokens, and predictable density.

## Personality

Luxury Style is:

- **restrained**: remove decoration before adding anything,
- **editorial**: typography, image hierarchy, and space carry the brand,
- **architectural**: edges are sharp and layouts are deliberate,
- **tactile**: surfaces feel like refined paper, fabric, or print,
- **asymmetric**: composition can break the grid while staying balanced,
- **slow**: motion is calm and cinematic, never jumpy.

Avoid generic SaaS cards, playful illustration, saturated color systems,
excessive icons, and decorative flourishes that do not improve hierarchy.

## Token Intent

This preset maps the luxury editorial identity into Design-anchor seeds:

- `colorPrimary`: rich charcoal for primary actions, decisive text emphasis,
  strong borders, and inverted sections.
- `colorInfo`: restrained metallic accent for premium details, highlights,
  hover emphasis, focus accents, and chart callouts.
- `colorBgBase`: warm alabaster canvas.
- `colorTextBase`: rich charcoal foreground.
- `colorSuccess`, `colorWarning`, `colorError`: muted operational states that
  remain compatible with the editorial palette.
- `borderRadius`: architectural rectangular shape.
- `sizeUnit`: generous spacing rhythm for premium negative space.

Use these meanings through semantic classes and component variants, not direct
values.

## Color Usage

Use a sophisticated near-monochrome model:

- App canvas: `bg-background`.
- Editorial panels and cards: `bg-card` or `bg-muted`.
- Text: `text-foreground` and `text-muted-foreground`.
- Structure: `border-border`, `divide-border`, `ring-ring`.
- Primary actions: Button default variants and `bg-primary`.
- Premium accent: use Design-anchor info/accent variants only when the component
  library exposes them; otherwise keep the accent inside approved component
  variants.
- Status: only through Design-anchor status variants or semantic status tokens.

Accent should be sparse. Do not make the metallic accent the dominant fill
color across a screen.

### Editorial Treatment Policy

The original inspiration uses luxury editorial techniques: oversized serif
headlines, monochrome image reveals, paper grain, vertical labels, drop caps,
visible gridlines, and slow cinematic transitions. In Design-anchor:

- Use theme-level typography and component variants rather than page-local font
  imports.
- Use approved MediaCard, Hero, Quote, or EditorialSection variants for image
  treatments.
- Use semantic dividers and section structure instead of raw decorative lines.
- Use named variants for editorial labels, quotes, and feature panels.
- Do not paste raw filters, textures, fixed gridline overlays, or custom
  keyframes into product pages.

If an editorial treatment is important but unsupported, add it as a reusable
Design-anchor component/spec before using it in feature code.

## Typography

Use the project typography configured by Design-anchor. Do not import fonts from
inside page or component files.

Recommended hierarchy:

- App body: `text-sm` or `text-base`, depending on density.
- Captions, metadata, labels: `text-xs` or `text-sm`.
- Product page titles: `text-2xl` or `text-3xl`.
- Editorial section headings: `text-3xl` or `text-4xl`.
- Landing/showcase hero headings: `text-5xl` only when the screen is truly
  brand-led or editorial.
- Buttons, tabs, labels, and links: `font-medium`.
- Long-form body copy: comfortable line height and readable measure.

Avoid arbitrary tracking values in implementation code. If wide editorial labels
or serif display headlines are required, configure them as theme typography or
component variants.

## Shape And Structure

Shape should feel precise and rectangular:

- Buttons, inputs, cards, dialogs, and panels should follow the preset radius
  token.
- Prefer single dividers, top borders, section rules, and generous internal
  spacing over boxed decorative cards.
- Use asymmetry for brand moments, but keep operational product workflows
  predictable.
- Avoid arbitrary radius overrides and decorative corner treatments in page
  code.

If a luxury editorial module requires special image framing, vertical text, or
drop-cap behavior, define it as a reusable component with a spec.

## Layout Rhythm

Luxury Style relies on negative space and measured imbalance:

- Give important content more space than a normal SaaS dashboard would.
- Use narrower text measures for reading comfort.
- Use offset layouts for editorial and onboarding sections when they improve
  hierarchy.
- Product app screens should remain efficient: title, actions, filters, content,
  and states.
- Avoid centered everything. Use alignment, whitespace, and hierarchy to create
  tension.
- Avoid nested cards inside cards; use sections, separators, and panels.

This preset is premium, not inefficient. Daily B2B workflows still need scan
speed and stable controls.

## Surfaces And Depth

Use subtle layered depth:

- Standard work surfaces use `Card`, `bg-card`, `border-border`, and calm
  semantic dividers.
- Featured editorial panels may use stronger component variants if available.
- Images and media treatments should use approved MediaCard or Hero variants.
- Dialogs, popovers, dropdowns, sheets, and tooltips must use Design-anchor
  primitives.

Avoid:

- harsh drop shadows,
- raw paper noise overlays,
- custom image filters in feature code,
- excessive accent borders,
- decorative image frames that bypass components.

## Components

Prefer these Design-anchor components:

| UI need | Use |
|---|---|
| Primary action | Button |
| Secondary action | Button variant="secondary" / "outline" / "ghost" |
| Editorial image | MediaCard / Card / documented editorial variant |
| Feature or article module | Card / Section / documented editorial variant |
| Status or metadata | Badge |
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

- Header: clear title, quiet subtitle, primary action, and optional secondary
  navigation.
- Toolbar: search, filters, sort, view options, and batch actions.
- Main content: DataTable, grouped sections, editorial detail panels, or media
  previews.
- States: loading, empty, error, partial, permission restricted, draft, saved.
- Navigation: selected state should be visible but understated.

For premium landing or editorial screens:

- Use strong typographic hierarchy and one dominant visual.
- Reveal the next section in the first viewport when possible.
- Use product-relevant photography, screenshots, or media previews.
- Use accent only for small details, selected emphasis, or interaction states.
- Keep text concise and curated.

For dashboards:

- Use near-monochrome charts with `customSeeds` or chart semantic tokens.
- Pair color with labels, icons, or shape for status.
- Keep charts and tables accessible, readable, and stable.
- Do not sacrifice operational clarity for editorial drama.

## Motion

Motion should feel slow, calm, and expensive:

- Use component-provided transitions first.
- Prefer `transition-colors`, `transition-opacity`, and subtle shadow changes.
- Image/media reveals must be component variants, not page-local filter hacks.
- Avoid bouncy motion, rapid transforms, parallax, or constant animation.
- Product workflow controls should stay stable on hover.
- Respect reduced motion preferences.

If slow cinematic motion is needed, define it as a reusable component variant so
it remains governed and accessible.

## Accessibility

- All controls need visible labels or `aria-label`.
- Focus states must remain visible through Design-anchor focus/ring tokens.
- Do not rely on metallic accent color alone for status or selection.
- Long-form content needs readable line length and semantic headings.
- Decorative editorial elements must be `aria-hidden`.
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

- Hardcoded luxury/editorial colors in app code. These live in preset tokens,
  not implementation.
- Raw CSS snippets for paper noise, vertical labels, drop caps, image filters,
  gold overlays, custom easing, or fixed editorial gridlines.
- Arbitrary Tailwind values for spacing, radius, grid, tracking, opacity, or
  shadows.
- Raw HTML primitives where Design-anchor components exist.
- One-off image cards or editorial sections that bypass component specs.
- Overusing metallic accent until the interface feels decorative rather than
  curated.
