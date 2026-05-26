---
description: Brutalist visual constraints — applied as .cursor/rules/anchor-style.mdc when this preset is active.
alwaysApply: true
---

# Brutalist style — visual constraints for AI-written components

The current vibe is **Brutalist**: hard edges, heavy borders, no decoration, high
contrast, neon accent. Anti-corporate. Says: this is software, not a product
launch.

## Surface mode policy

Apply this preset at two strengths:

- **Intro mode**: for homepage, landing, onboarding, docs showcase, pricing,
  launch, and brand storytelling pages. Use the original prompt's stronger
  signature expression: raw contrast, heavy framing, loud type, graphic offset
  treatments, and anti-template brand impact. Keep these effects inside
  Design-anchor components, variants, or documented page sections instead of
  raw primitives.
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

Confidently raw. Honest about being software. No skeuomorphism, no soft shadows,
no friendly rounding. Every visual choice is deliberate; the discomfort is the
feature. Loud accent against monochrome.

## Spacing rhythm

- Default `gap` / `padding`: spacing-3 / spacing-4 (sizeUnit=4 base).
- Cards: `p-4` to `p-6`.
- Buttons: `px-4 py-2` standard, `px-6 py-3` for prominent CTAs.
- Heavy padding around section dividers: `py-8` to `py-12`.

## Border radius

- **Everywhere**: `rounded-none` (0px). This is the defining feature.
- **Only exception**: avatars (`rounded-full`).
- **Forbidden**: `rounded-md` / `rounded-lg` / etc. anywhere — breaks the vibe.

## Borders

- Default: `border-2 border-foreground` (or `border-black` in light, `border-white`
  in dark) on cards and key blocks.
- Inputs: `border-2 border-foreground`.
- Buttons: `border-2` for outline variants; filled variant has no border.
- **Heavy**: borders are visual structure, not hairlines. `border` (1px) feels too
  timid; `border-2` is the floor. `border-4` allowed for emphasis blocks.

## Shadows

- **Forbidden** in general. Brutalism rejects soft depth.
- **Allowed**: hard offset shadow as graphic device — `shadow-[4px_4px_0_0]` style
  blocks (when explicitly part of the design language).
- **Never** `shadow-sm` / `shadow-md` / `shadow-lg` / `drop-shadow-*`.

## Typography

- Body: `text-base` (16px).
- Headings: `text-2xl` / `text-4xl` / `text-6xl` — go big. Brutalist wants drama.
- Font choice (already in tokens): use `font-mono` for headings is encouraged
  (JetBrains Mono / IBM Plex Mono); body can be sans (Inter) or mono.
- Weights: `font-bold` and `font-black` are the norm here. `font-medium` only on
  body.
- All-caps for labels/buttons is allowed and encouraged (`uppercase tracking-wide`).

## Color usage

- 80% pure neutrals — pure black `#000000`, pure white `#ffffff`. **No grays in
  between** for backgrounds.
- 15% interactive accent (`bg-primary` neon pink/red `#ff3366`).
- 5% semantic (success green / warning yellow / error red — but they all look
  neon in this palette).

**Critical**: don't use the muted gray ladder. Brutalism is binary — black or
white surface; accent or none. Skip the tasteful in-between.

## Motion

- `duration-fast` for everything (150ms) — snappy, not soft.
- `transition-colors` only.
- **Forbidden**:
  - `transition-transform` — no scale / rotate / translate animations
  - Gradients that fade
  - Spring physics
  - `animate-pulse` / `animate-bounce` decorative
- Hover: instant color flip (`hover:bg-foreground hover:text-background`) for
  inverse highlight.

## Layout

- Asymmetry is OK, even encouraged. Brutalism doesn't worship grids.
- Generous outer padding `p-12` to `p-16` on hero sections.
- Section breaks via `border-t-2 border-foreground` heavy lines, not soft gradients.
- No max-width constraint on hero sections; let content breathe edge-to-edge.

## Component preferences

| Choose | Over |
|---|---|
| Inverted hover (bg → fg, fg → bg) | Color shift hover |
| Heavy outline button (`border-2`) | Filled subtle button |
| All-caps button label | Sentence case |
| Hard-edge offset shadow `shadow-[4px_4px_0_0]` | Soft drop shadow |
| Mono font for headings | Sans-serif everywhere |
| `border-t-2` section separator | Margin-only spacing |

## Forbidden patterns

- ❌ ANY rounded corners except avatars
- ❌ ANY soft gradient
- ❌ ANY soft shadow / glow
- ❌ Subtle hover transitions (must be instant + dramatic)
- ❌ Decorative emoji / illustrations
- ❌ "Tasteful" muted color ladders (it's binary, not a spectrum)

## Both modes are canonical

Brutalist works equally well in light and dark. Light = white bg + black ink +
neon accent. Dark = black bg + white ink + neon accent. The accent stays the
same hex in both modes (it's part of the brand voice).
