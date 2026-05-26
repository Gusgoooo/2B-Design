---
description: Stripe visual constraints — applied as .cursor/rules/anchor-style.mdc when this preset is active. Tells AI agents how to style new components within this vibe.
alwaysApply: true
---

# Stripe style — visual constraints for AI-written components

The current vibe is **Stripe**: professional, generous, polished. Purple accent.
Larger radius and spacing than dev-tool aesthetics. Card shadows are allowed and
encouraged for hierarchy.

## Surface mode policy

Apply this preset at two strengths:

- **Intro mode**: for homepage, landing, onboarding, docs showcase, pricing,
  launch, and brand storytelling pages. Use the original prompt's stronger
  signature expression: generous SaaS marketing sections, refined gradients,
  layered product previews, polished card depth, and confident conversion
  moments. Keep these effects inside Design-anchor components, variants, or
  documented page sections instead of raw primitives.
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

Trustworthy financial / API product feel. Generous whitespace conveys premium
quality. Curves are softer than Linear or Vercel. Type sizes can step bigger.
Information density medium — never feels cramped.

## Spacing rhythm

- Default `gap` / `padding`: spacing-4 / spacing-5 / spacing-6 (sizeUnit=5 base).
- Cards: `p-6` to `p-8`.
- Buttons: `px-5 py-2.5` standard; `px-4 py-2` for `size="sm"`; `px-6 py-3` for
  prominent CTAs.
- Section gaps: `gap-12` to `gap-16` between major sections.

## Border radius

- Cards: `rounded-xl` (resolves to ~16px under sizeUnit=5; sized for premium feel).
- Buttons / inputs: `rounded-lg` (~10px).
- Pills / Badge: `rounded-full`.
- **Avoid**: `rounded-sm` / `rounded-none` — too sharp for this vibe.

## Shadows

- Card default: `shadow-sm` for content cards; `shadow-md` for elevated surfaces.
- Hover state: increase one step (`shadow-sm` → `shadow-md`).
- Modal / popover: `shadow-lg` is OK.
- **Allowed**: subtle drop shadows for hierarchy.
- **Forbidden**: `shadow-2xl` over-the-top dramatic shadows.

## Typography

- Body: `text-base` (15px from token).
- Caption: `text-sm`.
- Headings: `text-lg` / `text-xl` / `text-2xl` / `text-3xl` — full ladder used.
- Font: Inter is the default (Stripe uses Söhne — closest is Inter or DM Sans).
- Weights: `font-normal` body, `font-medium` UI, `font-semibold` headings,
  `font-bold` only on hero numbers / large display text.
- Line-height: `leading-relaxed` for prose, default for UI.

## Color usage

- 60% neutrals (`bg-background`, `text-foreground`, `text-muted-foreground`).
- 25% surface variation (`bg-card`, `bg-muted`, `border-border`).
- 12% primary (`bg-primary`, `text-primary`) — used liberally on CTAs and active
  states. Stripe's purple is part of the brand, show it.
- 3% status colors.

## Motion

- `duration-mid` (default 200ms) for most transitions.
- `duration-slow` allowed for entrance animations.
- `transition-all` is OK on cards (smoother hover).
- **Allowed**: gentle scale on hover (`hover:scale-[1.02]` for cards).
- **Forbidden**: bouncy / elastic / spring-physics animations.
- Easing: ease-in-out is the default.

## Layout

- Content max-width: `max-w-7xl` for landing / marketing; `max-w-3xl` for prose.
- Sidebar: 280–320px (more generous than Linear).
- Section padding: `py-16` to `py-24` on landing pages.
- Form fields stack vertically with `gap-5` between groups.

## Component preferences

| Choose | Over |
|---|---|
| Filled `variant="default"` button (primary purple) | Outline button for primary action |
| Card with `shadow-sm` | Bordered-only card |
| Two-column form layout | Single dense column on B2B forms |
| Tabs with underline indicator | Pill tabs |
| Toast notifications (sonner) | Inline alerts |

## Forbidden patterns

- ❌ Sharp `rounded-none` / `rounded-sm` corners on CTAs (looks Linear, not Stripe)
- ❌ Pure black `#000` backgrounds (use the dark seed `#0a0a23` instead)
- ❌ Decorative emoji in UI labels
- ❌ Brutalist-style heavy borders (`border-2` `border-foreground`)
- ❌ Mono fonts for body copy (allowed only for code / API references / receipts)

## Light mode is canonical

Stripe's identity is in light mode (the public marketing surface). Design for
light first; dark mode is a serviceable variant but not the primary brand voice.
