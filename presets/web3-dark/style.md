---
description: Web3 Dark visual constraints - applied as .cursor/rules/anchor-style.mdc when this preset is active. Uses Design-anchor components and semantic tokens instead of hardcoded Bitcoin DeFi values.
alwaysApply: true
---

# Web3 Dark - Design-anchor Style Prompt

The current vibe is **Web3 Dark**: secure, technical, high-contrast, and
valuable. It translates Bitcoin DeFi energy into governed product UI: dark
void surfaces, orange primary emphasis, digital-gold value accents, translucent
technical panels, and data-first hierarchy.

This style is suitable for DeFi dashboards, wallet products, crypto analytics,
trading tools, Web3 infrastructure, security products, token operations,
on-chain data tools, and premium financial SaaS that needs to communicate
trust, precision, and digital value.

## Design-anchor Contract

Use Design-anchor as the source of truth:

- Use the recommended Design-anchor default component library first.
- Import components from `@design` or the configured Design-anchor alias.
- Use semantic token classes such as `bg-background`, `bg-card`, `bg-muted`,
  `bg-primary`, `text-foreground`, `text-muted-foreground`, `border-border`,
  and `ring-ring`.
- Do not hardcode hex colors, raw RGB/HSL values, arbitrary spacing, arbitrary
  radius, raw gradients, grid patterns, external texture URLs, backdrop blur,
  spinning orbitals, animated pings, or one-off glow shadows in product code.
- Do not replace Design-anchor components with raw `<button>`, `<input>`,
  `<table>`, `<dialog>`, or hand-built equivalents.
- If the page needs token cards, chain timelines, orbital hero visuals, glowing
  badges, grid backgrounds, or glass panels, mark them as `needsCustomComponent`
  and add a spec before implementation.

## Surface Mode Policy

Apply this preset at two strengths:

- **Intro mode**: for homepage, landing, onboarding, docs showcase, pricing,
  launch, and brand storytelling pages. Use the original prompt's full visual
  character: Bitcoin DeFi glow, grid atmosphere, orbital hero visuals, live
  network badges, glass panels, token-card drama, and crypto value emphasis.
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

Web3 Dark is:

- **secure**: hierarchy and contrast make the interface feel trustworthy,
- **technical**: data, addresses, balances, and network state are first-class,
- **valuable**: primary and success accents feel like digital gold,
- **precise**: borders, tables, and forms are clear and engineered,
- **atmospheric**: depth exists, but only through governed variants,
- **responsive**: interactions feel quick and transaction-ready.

Avoid generic dark SaaS, playful neon, overdone cyberpunk effects, speculative
visual noise, and decorative crypto cliches that reduce product clarity.

## Token Intent

This preset maps the Web3 dark identity into Design-anchor seeds:

- `colorPrimary`: Bitcoin-orange emphasis for primary actions, active states,
  selected navigation, transaction CTAs, links, and trust indicators.
- `colorSuccess`: digital-gold value accent for positive balances, rewards,
  value highlights, and approved chart moments.
- `colorWarning`: deeper orange for caution, pending states, and risk signals.
- `colorInfo`: stardust neutral tone for metadata, secondary data, labels, and
  quiet chart series.
- `colorBgBase`: true-void application canvas.
- `colorTextBase`: high-contrast foreground for dark financial UI.
- `borderRadius`: rounded crypto-product surfaces.
- `sizeUnit`: spacious rhythm for data-heavy premium workflows.

Use these meanings through semantic classes and component variants, not direct
values.

## Color Usage

Use a dark technical palette:

- App canvas: `bg-background`.
- Cards and panels: `bg-card` or `bg-muted`.
- Text: `text-foreground` and `text-muted-foreground`.
- Structure: `border-border`, `divide-border`, `ring-ring`.
- Primary emphasis: Button default variants, `bg-primary`, selected states,
  active transaction actions, and key trust indicators.
- Value emphasis: success/info/chart variants where the component library
  exposes them.
- Status: only through Design-anchor status variants or semantic status tokens.

Primary orange should be meaningful. Use it for action, ownership, activity,
selection, and value moments, not general decoration.

## Luminescence Policy

The original inspiration uses orange/gold light, translucent panels, glowing
badges, and ambient blockchain depth. In Design-anchor:

- Use approved Button, Badge, Card, Alert, Stat, or Chart variants for glow-like
  emphasis.
- Use named component variants for glass, holographic, value, trust, or network
  treatments.
- Do not paste custom shadows, opacity overlays, blur effects, or background
  patterns into feature code.
- If no approved glow or glass variant exists, use a semantic border, badge, or
  selected state instead.
- Decorative effects must be optional, non-semantic, and `aria-hidden`.

## Typography

Use the project typography configured by Design-anchor. Do not import fonts from
inside page or component files.

Recommended hierarchy:

- App body: `text-sm` or `text-base`, depending on data density.
- Addresses, hashes, balances, and technical labels: use approved mono/data
  typography variants.
- Page titles: `text-2xl` or `text-3xl`.
- Dashboard section headings: `text-lg` or `text-xl`.
- Landing or protocol hero headings: `text-4xl` or `text-5xl` only when the
  surface is brand-led.
- Buttons and labels: `font-semibold` or `font-medium`.

Avoid arbitrary tracking values and page-local font imports. If Space Grotesk,
JetBrains Mono, or data-specific typography is needed, configure it in the
theme or component variants.

## Shape And Structure

Shape should feel geometric but approachable:

- Buttons, badges, cards, dialogs, tables, and panels should follow the preset
  radius token.
- Use thin dividers, clear table rows, value badges, and selected states for
  structure.
- Use rounded crypto-product surfaces where component variants support them.
- Avoid arbitrary radius overrides, raw pill styles, corner accent snippets, and
  page-local glass styling.

If token cards, value nodes, chain steps, or network timeline visuals are part
of the product, define them as reusable Design-anchor components or variants.

## Layout Rhythm

Web3 Dark should feel expansive and data-ready:

- Use clear top-level sections for portfolio, balances, positions, activity,
  risks, and actions.
- Keep transaction flows focused and confirmable.
- Use wide dashboard grids for analytics only when they remain readable.
- Product app screens should prioritize title, scope, wallet/network state,
  actions, filters, content, and states.
- Landing pages may use stronger hero composition and protocol proof points.
- Avoid nested cards inside cards; use sections, separators, and panels.

The interface should feel engineered for assets and data, not just decorated for
crypto culture.

## Surfaces And Depth

Use governed technical depth:

- Standard work surfaces use `Card`, `bg-card`, `border-border`, and semantic
  dividers.
- Data tables should use row states, badges, and clear formatting over
  decorative elevation.
- Important values may use approved Stat, Badge, Alert, or Chart variants.
- Dialogs, popovers, dropdowns, sheets, and tooltips must use Design-anchor
  primitives.

Avoid:

- raw glow shadows pasted into page code,
- heavy black shadows,
- external texture images,
- custom grid backgrounds in product workflows,
- animated background effects that distract from balances or transactions.

## Components

Prefer these Design-anchor components:

| UI need | Use |
|---|---|
| Primary transaction action | Button |
| Secondary action | Button variant="secondary" / "outline" / "ghost" |
| Wallet/network state | Badge / Alert / Stat |
| Balance or KPI | Card / Stat / Badge |
| Token list or activity | DataTable / Table |
| Filters and networks | Select, DropdownMenu, Tabs, ToggleGroup |
| Form input | Input, Textarea, Select, Checkbox, RadioGroup, Switch |
| Confirmation | AlertDialog |
| Risk or warning | Alert |
| Empty state | Empty |
| Loading state | Skeleton / Spinner |
| Navigation | Sidebar, NavigationMenu, Breadcrumb, Tabs |
| Help affordance | Tooltip |

Never hand-build these primitives unless the Design-anchor library lacks the
required component and the page spec marks it as `needsCustomComponent`.

## Section And Page Patterns

For product app screens:

- Header: title, network/wallet scope, current status, and primary action.
- Toolbar: chain selector, wallet filter, token search, range controls, view
  modes, and batch actions when relevant.
- Main content: portfolio table, token cards, position grid, transaction list,
  or risk panel.
- States: loading, empty, disconnected, pending, confirmed, failed, partial
  data, permission restricted.
- Navigation: selected state should be visible through tokenized background,
  border, badge, or indicator variants.

For landing and protocol pages:

- Use one clear product claim and proof points.
- Show real dashboard, wallet, or protocol UI rather than abstract decoration.
- Use primary emphasis for one strong CTA and a quieter secondary action.
- Keep trust, security, and risk information visible.

For financial dashboards:

- Use `customSeeds` or chart semantic tokens.
- Pair color with labels, icons, or shapes for status.
- Keep balances, decimals, and timestamps readable.
- Do not rely on orange/gold alone to indicate profit, loss, risk, or success.

## Motion

Motion should feel precise and transaction-ready:

- Use component-provided transitions first.
- Prefer `transition-colors`, `transition-opacity`, and restrained border or
  state changes.
- Loading and pending states may use approved Spinner, Skeleton, or status
  variants.
- Avoid decorative spinning orbitals, bouncing stat cards, animated background
  blobs, or pulsing badges in product workflows unless defined as governed
  variants.
- Respect reduced motion preferences.

If a live-network animation is needed, define it as a reusable component variant
with accessibility and reduced-motion behavior.

## Accessibility

- All controls need visible labels or `aria-label`.
- Focus states must remain visible through Design-anchor focus/ring tokens.
- Do not rely on orange or gold alone for selected, warning, success, or error
  states.
- Financial values need clear labels, units, and formatting.
- Transaction confirmations must be explicit and reversible when possible.
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

- Hardcoded Web3, Bitcoin, orange, or gold colors in app code. These live in
  preset tokens, not implementation.
- Raw CSS snippets for grid patterns, glow shadows, glass effects, animated
  orbitals, pings, background textures, or gradient text.
- Arbitrary Tailwind values for spacing, radius, grid, tracking, opacity,
  shadows, or motion.
- Raw HTML primitives where Design-anchor components exist.
- One-off token cards, wallet panels, or chain timelines that bypass component
  specs.
- Decorative crypto visuals that obscure risk, balances, or transaction state.
