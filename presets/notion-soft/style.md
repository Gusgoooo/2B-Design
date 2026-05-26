---
description: Notion Soft visual constraints — applied as .cursor/rules/anchor-style.mdc when this preset is active.
alwaysApply: true
---

# Notion Soft style — visual constraints for AI-written components

The current vibe is **Notion Soft**: warm, content-first, generous, soft. Reading
comfort is the top priority. Color shows up sparingly and intentionally. Page feels
like a document, not a console.

## Surface mode policy

Apply this preset at two strengths:

- **Intro mode**: for homepage, landing, onboarding, docs showcase, pricing,
  launch, and brand storytelling pages. Use the original prompt's stronger
  signature expression: warm document-like sections, editorial callouts,
  content-first hierarchy, soft product previews, and calm onboarding moments.
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

You're building a tool people inhabit for hours doing knowledge work. Visual
quietness, ink-black text on warm white, soft borders. Color is a callout device,
not decoration.

## Spacing rhythm

- Default `gap` / `padding`: spacing-4 / spacing-5 / spacing-6 (sizeUnit=5).
- Section blocks: `gap-8` to `gap-12` between major content sections.
- Inline elements: `gap-2` (icon+label inline pairs).
- Buttons: `px-4 py-2` standard.
- **Generous reading width**: text content `max-w-prose` (65ch) for any paragraph.

## Border radius

- Cards / inputs: `rounded-md` (~6px under sizeUnit=5).
- Buttons: `rounded-md`.
- Embedded blocks (callouts, code): `rounded-md`.
- **Avoid**: `rounded-full` (except avatars), `rounded-2xl+` (too playful).

## Shadows

- Default: **subtle hairline**, `border-border/60`.
- Elevated callouts (toggle blocks, hover popovers): `shadow-sm` only.
- **Forbidden**: `shadow-md` and larger — Notion Soft trusts borders and warm tints.

## Typography

- Body: `text-base` (15px).
- Caption: `text-sm`.
- Headings: `text-lg` / `text-xl` / `text-2xl` (no jumps to text-3xl unless hero).
- Font: Inter for UI; serif for prose-heavy content (`font-serif` if available).
- Weights: `font-normal` body, `font-medium` UI labels, `font-semibold` headings.
- **Line-height**: `leading-relaxed` for paragraphs (Notion's reading-first feel).

## Color usage

- 90% near-monochrome (warm white background, ink-black text, muted variants).
- 8% subtle tint backgrounds (`bg-muted/40` for callouts, `bg-primary/10` for highlights).
- 2% pure accent (`bg-primary`, `text-primary`) — only on key CTAs or selected items.

**Notion's secret**: tints, not fills. Prefer `bg-primary/10` over `bg-primary`
for non-button surfaces. Accent comes from contrast with the warm white, not from
saturation.

## Motion

- `duration-mid` for transitions; `duration-fast` for hover.
- `transition-colors` and `transition-opacity` only.
- **Allowed**: subtle `hover:bg-muted/40` shifts.
- **Forbidden**: scale / rotate animations, springs.

## Layout

- Sidebar: 240–280px (collapsible).
- Main content: centered, `max-w-3xl` for documents, `max-w-5xl` for dashboards.
- Toolbar: minimal, `h-12` height, no hard borders.
- Lots of vertical breathing space at section transitions.

## Component preferences

| Choose | Over |
|---|---|
| Toggle / accordion for nested content | Dialog |
| Inline callout (`bg-muted/40` block) | Modal |
| Subtle bordered card | Shadow card |
| Plain text with hover-reveal | Buttons everywhere |
| Sidebar nav with subtle indent | Collapsible mega-menu |
| Inline edit on click | Modal-based edit |

## Forbidden patterns

- ❌ Saturated full-color backgrounds (Notion's accent is in tints, not fills)
- ❌ Heavy borders (`border-2+`) — feels too aggressive
- ❌ Glassmorphism — Notion is opaque and grounded
- ❌ Dramatic shadows or 3D effects
- ❌ All-caps labels (except small uppercase metadata at `text-xs`)

## Light mode is canonical

Notion's identity lives in light mode. Dark mode is functional but not the
brand voice. Optimize light first.
