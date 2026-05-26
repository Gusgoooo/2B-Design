---
description: Glass / iOS-style visual constraints — applied as .cursor/rules/anchor-style.mdc when this preset is active.
alwaysApply: true
---

# Glass style — visual constraints for AI-written components

The current vibe is **Glass**: translucent surfaces, blurred backgrounds, large
radius, soft tints. iOS / iPadOS / Apple Liquid-Glass inspired. Premium consumer
feel.

## Surface mode policy

Apply this preset at two strengths:

- **Intro mode**: for homepage, landing, onboarding, docs showcase, pricing,
  launch, and brand storytelling pages. Use the original prompt's stronger
  signature expression: immersive translucent heroes, soft image or gradient
  backgrounds, floating glass panels, polished mobile-first motion, and premium
  consumer feel. Keep these effects inside Design-anchor components, variants,
  or documented page sections instead of raw primitives.
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

You're building something users feel before they read. Surfaces float, light
passes through, edges curve generously. Restraint with color but joy with
material — frosted glass is the texture.

## Spacing rhythm

- Default `gap` / `padding`: spacing-3 / spacing-4 / spacing-5 (sizeUnit=4).
- Cards: `p-5` to `p-6`.
- Buttons: `px-5 py-2.5`; `px-6 py-3` for prominent CTAs.
- Soft generous spacing — not as tight as Linear, not as loose as Stripe.

## Border radius

- Cards: `rounded-2xl` (~14-16px from token).
- Buttons / inputs: `rounded-xl`.
- Pills: `rounded-full`.
- **Embrace large radius**. Sharp corners feel wrong here.
- **Forbidden**: `rounded-none` / `rounded-sm` (except hairline dividers).

## Shadows

- Card surfaces: `shadow-sm` to `shadow-md` — gentle, never harsh.
- Hover: `shadow-md` → `shadow-lg` lift.
- Modal / dropdown: `shadow-xl` allowed.
- **Plus blur**: `backdrop-blur-md` or `backdrop-blur-xl` on translucent surfaces
  is the **defining feature**.
- **Forbidden**: hard offset shadows (`shadow-[Npx_Npx_0_0]`) — that's brutalist.

## Translucency (the signature feature)

Use translucent surfaces with `backdrop-blur` on top of a colored or imaged
background:

- Card backgrounds: `bg-card/70 backdrop-blur-md` or `bg-background/60 backdrop-blur-xl`.
- Floating bars (top nav, bottom tab bar): `bg-background/80 backdrop-blur-xl`.
- Modal overlays: existing `modalOverlayClasses` already does this.
- Sidebars: `bg-card/50 backdrop-blur-md`.

**Critical**: translucent surfaces need a **non-uniform background** behind them
(gradient, image, or multiple stacked colors). On flat white, `backdrop-blur` does
nothing visible. So Glass vibe pages should have a soft gradient or imagery base
layer.

## Typography

- Body: `text-base` (16px).
- Headings: `text-xl` / `text-2xl` / `text-3xl` / `text-4xl`.
- Font: SF Pro fallback (Inter / system). The `--font-family` token already
  prefers `-apple-system`.
- Weights: `font-normal` body, `font-medium` UI labels, `font-semibold` headings,
  `font-bold` for hero numerals.

## Color usage

- 70% neutrals + soft tints (`bg-background`, `bg-card/70`, `bg-muted/40`).
- 20% color accents — Glass palette is more colorful than dev-tool aesthetics.
  Multiple hues allowed in moderation.
- 10% gradient accents on hero / focal CTA — soft, two-stop gradients.

**Allowed gradients**: subtle tints (`from-primary/10 to-primary/0`) or
two-color (`from-primary to-info`). **Avoid** harsh saturated gradients.

## Motion

- `duration-mid` for transitions; `duration-slow` for entrance anims.
- **Allowed and encouraged**:
  - Spring easing on draggable surfaces (sheets, sliders)
  - Subtle scale on press (`active:scale-[0.98]`)
  - Smooth backdrop-blur transitions when surfaces appear
- **Forbidden**: instantaneous binary state changes — Glass vibe wants smoothness.

## Layout

- Mobile-first thinking even on desktop.
- Bottom tab bars allowed (uncommon in B2B).
- Sheets / drawers preferred over modals (`@design Drawer`).
- Generous outer margins; centered hero sections.
- Background gradients or images on hero / landing.

## Component preferences

| Choose | Over |
|---|---|
| Drawer / Sheet | Modal Dialog |
| Translucent floating bar | Solid app bar |
| Pill button (`rounded-full`) | Squared button |
| Soft bg gradient hero | Solid color hero |
| Spring-easing on drag | Linear easing |
| Bottom tab bar (mobile) | Hamburger menu |

## Forbidden patterns

- ❌ `rounded-none` / `rounded-sm` anywhere
- ❌ Hard / offset shadows (brutalist territory)
- ❌ Solid heavy borders (`border-2+`) — Glass uses translucency for separation
- ❌ All-caps text everywhere (Apple uses sentence case)
- ❌ Grayscale-only — Glass is colorful

## Both modes are canonical

Glass works equally well light and dark. Light = warm tints, soft blue accent.
Dark = deep blacks with vivid colored translucency.

## Background recommendation

For Glass to look right, page backgrounds need texture. In your business pages:

```tsx
<div className="relative min-h-screen bg-gradient-to-br from-primary/5 via-background to-info/10">
  {/* your translucent components on top */}
</div>
```

Or use a soft image background with `bg-cover bg-center` and translucent cards
floating over it.
