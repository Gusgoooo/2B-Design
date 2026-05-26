---
description: Vercel Geist visual constraints — applied as .cursor/rules/anchor-style.mdc when this preset is active. Tells AI agents how to style new components within this vibe.
alwaysApply: true
---

# Vercel Geist style — visual constraints for AI-written components

The current vibe is **Vercel Geist**: sharp minimalism, duotone, geometric, no
decoration. AI-written components must follow these constraints in addition to
design-anchor's standard token rules.

## Surface mode policy

Apply this preset at two strengths:

- **Intro mode**: for homepage, landing, onboarding, docs showcase, pricing,
  launch, and brand storytelling pages. Use the original prompt's stronger
  signature expression: stark hero typography, precise black-white contrast,
  clean product framing, minimal motion, and premium developer-brand restraint.
  Keep these effects inside Design-anchor components, variants, or documented
  page sections instead of raw primitives.
- Token-compatible details such as color, spacing, radius, typography, shadow,
  and motion roles must still resolve through Design-anchor tokens or named
  variants so intro pages and product pages remain visually aligned.
- **Product mode**: for app interiors, governance pages, admin pages, forms,
  tables, dashboards, settings, and repeated B2B workflows. Use the same tokens
  and component personality, but reduce decoration, continuous motion, complex
  backgrounds, and layout shifts. Prefer stable Design-anchor components,
  clear states, semantic tokens, and predictable density. If a later section
  says "Forbidden", read it as product-mode strict unless it protects
  accessibility, security, or component ownership.

## Personality

Pure information design. Whitespace and typography do all the work. No gradients,
no decorative shadows, no rounded everything. Confident black-on-white surfaces.

## Spacing rhythm

- Default `gap` / `padding`: spacing-3 / spacing-4 / spacing-5 (sizeUnit=4 base).
- Cards: `p-6` `gap-4` is the default; `p-8` for hero cards.
- Buttons: `px-4 py-2` standard; `px-3 py-1` for `size="sm"`.
- **Avoid** `p-1` `p-2` cramped feel; **avoid** `p-12` overspaced unless hero.

## Border radius

- Cards / buttons / inputs: `rounded-md` (6px).
- Avatars / circular: `rounded-full`.
- Avoid `rounded-2xl` / `rounded-3xl` — too soft for this vibe.

## Shadows

- Default: **no shadow**. Use `border-border` for separation instead.
- Elevated surface (popover / dropdown): `shadow-sm` only.
- **Never** `shadow-lg` or larger. Geist relies on borders, not depth.

## Typography

- Body: `text-sm` (14px from token).
- Heading sizes: `text-base` / `text-lg` / `text-xl` / `text-2xl` — stop at 2xl.
- Font: Inter / system-ui (already in `--font-family`).
- Weights: `font-normal` body, `font-medium` UI labels, `font-semibold` headlines.
  **Avoid** `font-bold` / `font-black`.

## Color usage

- 80% neutrals (`bg-background`, `text-foreground`, `text-muted-foreground`,
  `border-border`).
- 15% interactive (`bg-primary`, `text-primary`, `ring-ring`).
- 5% status (`text-destructive`, `text-warning`, `text-success`) — only on actual
  status indicators.
- **Never** invent gradient combinations. If gradient is requested, use a single
  token transitioning to its `/0` alpha.

## Motion

- `duration-fast` for hover; `duration-mid` for transitions; never `duration-slow`.
- `transition-colors` and `transition-opacity` only.
- **Forbidden**: `transition-transform` (no scale / rotate / translate animation),
  `animate-bounce`, `animate-spin` (except loading spinners).
- Hover states: opacity changes (`hover:opacity-80`) or color shifts
  (`hover:bg-primary/90`), never size shifts.

## Layout

- Sidebar widths: 240–280px.
- Content max-width: `max-w-5xl` for prose, `max-w-7xl` for dashboards.
- Generous outer padding: `py-12 px-6` on top-level pages.
- Section gaps: `gap-12` between major sections, `gap-6` within a section.

## Component preferences

When AI has a choice, prefer the more austere option:

| Choose | Over |
|---|---|
| Bordered card (`ring-1 ring-border`) | Shadow card (`shadow-md`) |
| Outline button (`variant="outline"`) | Filled secondary button |
| Plain text link | Underlined link with hover transform |
| Tabs over Accordion for switching content | |
| Tooltip over Popover for hint text | |

## Forbidden patterns

- ❌ `bg-gradient-to-r from-X to-Y` decorative gradients
- ❌ Glassmorphism / `backdrop-blur` (except the modal overlay primitive)
- ❌ Animated emoji
- ❌ Skeuomorphic shadows pretending to be physical objects
- ❌ Multiple competing focus colors on one screen

If the user explicitly requests one of the forbidden patterns, ask: "This breaks
the Vercel Geist vibe. Apply it as a one-off, or switch vibes (e.g. to `glass`)?"
