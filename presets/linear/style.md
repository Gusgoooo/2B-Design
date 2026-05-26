---
description: Linear visual constraints — applied as .cursor/rules/anchor-style.mdc when this preset is active. Tells AI agents how to style new components within this vibe.
alwaysApply: true
---

# Linear style — visual constraints for AI-written components

The current vibe is **Linear**: dense, sharp, dev-tool aesthetic. Every pixel earns
its place. Indigo accent used sparingly. Near-black backgrounds in dark mode.

## Surface mode policy

Apply this preset at two strengths:

- **Intro mode**: for homepage, landing, onboarding, docs showcase, pricing,
  launch, and brand storytelling pages. Use the original prompt's stronger
  signature expression: crisp dev-tool heroes, refined product screenshots,
  subtle accent moments, command-palette energy, and polished marketing rhythm.
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

Built for power users. Information-dense without feeling crowded. Subtle hover
states. Sharp corners. Confident but quiet color use — accent shows up only on
interactive elements that matter.

## Spacing rhythm

- Default `gap` / `padding`: spacing-2 / spacing-3 (sizeUnit=3 base — half of
  Tailwind default).
- Cards: `p-3` to `p-4`; never `p-6+` unless hero/empty state.
- Buttons: `px-3 py-1.5` standard; `px-2.5 py-1` for `size="sm"`.
- List items: `py-1.5` to `py-2` per row, no `py-3+`.
- **Compact is the default**.

## Border radius

- Cards / buttons / inputs: `rounded-md` (resolves to ~4px under sizeUnit=3).
- Avatars: `rounded-full`.
- **Forbidden**: `rounded-lg` and larger anywhere except modals (`rounded-xl` for
  modal containers only).

## Shadows

- Default: **no shadow**. Use `border-border/60` for hairline separation.
- Popover / dropdown: `shadow-sm` only.
- Modal: `shadow-md` max.
- **Forbidden**: `shadow-lg` / `shadow-2xl` / `drop-shadow-*` decorative.

## Typography

- Body: `text-sm` (14px) — the workhorse.
- Caption / metadata: `text-xs` (12px).
- Headings: `text-base` / `text-lg` / `text-2xl` — `text-xl` rarely needed; never
  `text-3xl+`.
- Font: Inter (already in tokens).
- Weights: `font-medium` for UI labels, `font-semibold` for headings, `font-normal`
  for body. **Forbidden**: `font-bold` / `font-black`.
- Line-height: `leading-tight` or default; never `leading-loose`.

## Color usage

- 75% neutral grays (`bg-background`, `text-muted-foreground`, `border-border`).
- 15% foreground text (`text-foreground`).
- 8% accent (`text-primary`, `bg-primary` — ONLY on CTAs, key links, selected state).
- 2% status (red destructive only on irreversible actions; green / amber rarely).

**Critical**: accent color shows up at most 2-3 times per screen. If everything is
indigo, nothing is.

## Motion

- `duration-fast` (default 150ms) for everything interactive.
- `transition-colors` and `transition-opacity` only.
- **Forbidden**:
  - `transition-transform` (no scale / rotate / translate)
  - `animate-bounce` / `animate-pulse` / `animate-ping` decorative
  - Spring physics / elastic easing
- Hover: subtle background tint (`hover:bg-muted/40`) or text color shift, never
  size or shadow change.

## Layout

- Sidebar: 224–256px (compact).
- Toolbar height: 36–40px.
- Row height: 32–36px in lists / tables.
- Content max-width: `max-w-3xl` for prose, full-width for power-user surfaces.

## Component preferences

| Choose | Over |
|---|---|
| Compact list with hairline `divide-border/60` | Large card grid with shadows |
| `variant="ghost"` button | `variant="default"` (saved for primary CTA) |
| Inline edit | Modal-based edit |
| Keyboard shortcuts (Cmd+K) | Buttons for everything |
| Dense table with `text-xs` metadata | Spacious card per row |
| Tooltip on icon | Visible label text |

## Forbidden patterns

- ❌ Decorative gradients on backgrounds (subtle `via` ramps OK on dividers only)
- ❌ Glassmorphism / `backdrop-blur` (except modal overlay)
- ❌ Emojis as functional icons (use lucide-react icons)
- ❌ Centered text on UI surfaces (only on empty states / hero)
- ❌ Large illustration / mascot art

## Dark mode is canonical

Linear was born dark. Default to dark mode in design decisions; light mode is the
inverse. When making contrast / hue tradeoffs, optimize for dark first.
