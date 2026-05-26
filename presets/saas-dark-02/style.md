---
description: Saas Dark 02 visual constraints - applied as .cursor/rules/anchor-style.mdc when this preset is active. Uses Design-anchor components and semantic tokens instead of hardcoded bold typography values.
alwaysApply: true
---

# Saas Dark 02 - Design-anchor Style Prompt

The current vibe is **Saas Dark 02**: bold dark typography, sharp editorial
SaaS, poster-like hierarchy, and restrained vermillion emphasis. Typography is
the primary visual language; surfaces, color, and motion exist to support the
message, not compete with it.

This style is suitable for bold B2B SaaS landing pages, developer tools,
AI products, analytics products, creative infrastructure, modern admin tools,
and brand-led product surfaces that need to feel confident, direct, and
memorable.

## Design-anchor Contract

Use Design-anchor as the source of truth:

- Use the recommended Design-anchor default component library first.
- Import components from `@design` or the configured Design-anchor alias.
- Use semantic token classes such as `bg-background`, `bg-card`, `bg-muted`,
  `bg-primary`, `text-foreground`, `text-muted-foreground`, `border-border`,
  and `ring-ring`.
- Do not hardcode hex colors, raw RGB/HSL values, arbitrary spacing, arbitrary
  radius, arbitrary tracking, raw noise textures, duplicated display text,
  custom underline snippets, or one-off motion recipes in product code.
- Do not replace Design-anchor components with raw `<button>`, `<input>`,
  `<table>`, `<dialog>`, or hand-built equivalents.
- If the page needs poster typography, layered type, accent underline systems,
  oversized numbers, or manifesto-like sections, mark them as
  `needsCustomComponent` and add a spec before implementation.

## Surface Mode Policy

Apply this preset at two strengths:

- **Intro mode**: for homepage, landing, onboarding, docs showcase, pricing,
  launch, and brand storytelling pages. Use the original prompt's full visual
  character: poster-scale typography, editorial dark sections, accent underline
  systems, oversized type moments, and manifesto-like composition. Keep these
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

Saas Dark 02 is:

- **typographic**: words create the visual impact,
- **confident**: hierarchy is sharp and unmistakable,
- **editorial**: spacing frames the message like a poster spread,
- **minimal**: black, white, neutral surfaces, and one decisive accent,
- **direct**: interactions are fast and precise,
- **sharp**: no soft cards, friendly pills, or decorative gradients.

Avoid soft SaaS gradients, rounded startup UI, colorful dashboards, ornamental
illustrations, and visual clutter that weakens the type.

## Token Intent

This preset maps the bold dark typography identity into Design-anchor seeds:

- `colorPrimary`: vermillion accent for CTAs, active states, underline emphasis,
  focus indicators, and high-intent highlights.
- `colorInfo`: neutral supporting tone for metadata, secondary metrics, and
  quiet chart series.
- `colorBgBase`: near-black product canvas.
- `colorTextBase`: warm white foreground for strong contrast.
- `colorSuccess`, `colorWarning`, `colorError`: operational status tones that
  remain subordinate to the primary typographic hierarchy.
- `borderRadius`: sharp editorial shape language.
- `sizeUnit`: balanced spacing for bold but usable SaaS pages.

Use these meanings through semantic classes and component variants, not direct
values.

## Color Usage

Use a restrained dark palette:

- App canvas: `bg-background`.
- Secondary surfaces: `bg-card` or `bg-muted`.
- Text: `text-foreground` and `text-muted-foreground`.
- Structure: `border-border`, `divide-border`, `ring-ring`.
- Primary emphasis: Button default variants, `bg-primary`, active states,
  selected indicators, and accent underlines where component variants support
  them.
- Status: only through Design-anchor status variants or semantic status tokens.

Primary accent should be sparse. It should signal action, selection, or
priority, not decorate every heading.

## Typography Policy

Use the project typography configured by Design-anchor. Do not import fonts from
inside page or component files.

Recommended hierarchy:

- App body: `text-base` where readability matters; `text-sm` for dense controls.
- Metadata and labels: `text-xs` or `text-sm`.
- Product page titles: `text-2xl` or `text-3xl`.
- Bold landing sections: `text-4xl` or `text-5xl`.
- Hero statements: use larger display hierarchy only on true landing or
  campaign surfaces.
- Buttons, labels, and navigation: `font-semibold` or `font-medium`.
- Pull quotes or testimonials: use an approved typography variant, not a
  page-local font stack.

Avoid arbitrary tracking values in implementation code. If the design needs
tight display text or widely tracked labels, configure those as theme typography
or component variants.

## Shape And Structure

Shape should be sharp and typographic:

- Buttons, inputs, cards, dialogs, tables, and panels should follow the preset
  radius token.
- Use dividers, section rules, typography shifts, and controlled background
  alternation to separate content.
- Use cards sparingly; prefer sections and strong type hierarchy.
- Avoid arbitrary radius overrides, soft pills, decorative rounded containers,
  and ad hoc underline elements in page code.

If a typographic card, poster section, or accent underline treatment is needed,
define it as a reusable component or variant with a spec.

## Layout Rhythm

Saas Dark 02 is dramatic but still product-oriented:

- Use generous vertical space around headline groups.
- Use asymmetric splits when they improve message hierarchy.
- Keep body text in readable columns.
- Product app screens should stay efficient: title, actions, filters, content,
  and states.
- Landing pages may use stronger manifesto-like statements and full-width
  section breaks.
- Avoid nested cards inside cards; use sections, separators, and panels.

The screen should feel designed by typography, not by decorative containers.

## Surfaces And Depth

Use flat, precise separation:

- Standard work surfaces use `Card`, `bg-card`, `border-border`, and semantic
  dividers.
- Highlighted areas can use stronger border or accent component variants when
  available.
- Avoid traditional shadows as a primary depth tool.
- Dialogs, popovers, dropdowns, sheets, and tooltips must use Design-anchor
  primitives.

Avoid:

- soft glow systems,
- noisy custom backgrounds in product workflows,
- large decorative gradients,
- heavy card shadows,
- image or text effects pasted directly into feature code.

## Components

Prefer these Design-anchor components:

| UI need | Use |
|---|---|
| Primary action | Button |
| Secondary action | Button variant="secondary" / "outline" / "ghost" |
| Typographic emphasis | Badge / Text / documented typography variant |
| Status or category | Badge |
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

- Header: clear title, concise context, primary action, and optional secondary
  action.
- Toolbar: search, filters, sort, view options, and batch actions.
- Main content: DataTable, concise cards, detail panels, or grouped sections.
- States: loading, empty, error, partial, permission restricted, saved, draft.
- Navigation: selected state should be obvious through tokenized indicator,
  text, or border variants.

For landing and campaign surfaces:

- Use one dominant headline and one clear supporting paragraph.
- Use underlines, dividers, or accent badges only through approved variants.
- Keep imagery secondary unless the product screenshot is essential.
- Reveal the next section in the first viewport when possible.
- Use accent for the primary CTA and one or two high-signal moments.

For dashboards:

- Keep charts restrained and readable.
- Use `customSeeds` or chart semantic tokens.
- Pair color with labels, icons, or shapes for status.
- Do not use giant decorative numbers where operational clarity matters.

## Motion

Motion should be fast and decisive:

- Use component-provided transitions first.
- Prefer `transition-colors`, `transition-opacity`, and underline or border
  state changes when variants support them.
- Avoid bouncy motion, large transforms, floating elements, or constant
  animation.
- Product workflow controls should not shift layout on hover.
- Respect reduced motion preferences.

If a typographic reveal or underline system is needed, define it as a reusable
component variant so it remains governed and accessible.

## Accessibility

- All controls need visible labels or `aria-label`.
- Focus states must remain visible through Design-anchor focus/ring tokens.
- Do not rely on primary accent color alone for selected, error, or warning
  states.
- Body text must stay readable on dark surfaces.
- Decorative oversized type must be `aria-hidden`.
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

- Hardcoded dark typography colors in app code. These live in preset tokens, not
  implementation.
- Raw CSS snippets for noise overlays, text duplication, underline animations,
  custom tracking, or poster effects.
- Arbitrary Tailwind values for spacing, radius, grid, tracking, opacity, or
  motion.
- Raw HTML primitives where Design-anchor components exist.
- One-off typographic sections that bypass component specs.
- Overusing the primary accent until the page loses its dark editorial contrast.
