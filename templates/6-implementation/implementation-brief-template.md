# Stage 6 — Governed Implementation Brief

> This template turns product/page design artifacts into instructions an AI
> coding tool can execute while staying inside Design-anchor governance.

## Template

```markdown
# Implementation Brief: <product-name> (v0.1)

## Project mode
- Mode: New project / Existing project
- Component source: Design-anchor default component library / Imported legacy library
- Governance goal:
  - New project: start from a clean default-component baseline.
  - Existing project: migrate legacy components and track backlog in Project Health.

## Inputs
- Concept: `concept.md`
- Roadmap: `roadmap.md`
- Features: `features/*.md`
- Pages: `pages/*.md`
- Theme decision: `anchor-theme-decision.md` from PRD-driven preset routing or Portal selection

## Design-anchor contract

Use Design-anchor as the implementation boundary:

- Invoke the Design-anchor npm tool for setup, sync, audit, and Project Health.
  Prefer local `npx design-anchor <command>`; if unavailable, use
  `npx --yes design-anchor@latest <command>`. Ask before installing it as a
  project dependency with `npm install -D design-anchor@latest`.
- Import UI components from `@design` or the configured Design-anchor alias.
- Use the recommended default component library first.
- Do not use raw `<button>`, `<input>`, `<table>`, `<dialog>` when a Design-anchor component exists.
- Use semantic token classes only (`bg-primary`, `text-muted-foreground`, `border-border`).
- Do not hardcode hex colors, arbitrary spacing, or one-off radius values.
- Apply the selected preset by page mode:
  - intro pages may use richer original-prompt effects through Design-anchor
    components, named variants, or page-section specs,
  - product pages use the same tokens and components with quieter B2B density.
- Even on intro pages, token-compatible values such as color, spacing, radius,
  typography, shadow, and motion roles must come from Design-anchor tokens or
  named variants so the homepage stays consistent with app interiors.
- Preserve loading, empty, error, and partial states from each page spec.
- Run `npx design-anchor audit` after implementation; if unavailable locally,
  run `npx --yes design-anchor@latest audit`.

## Pages to implement

| Page | Route | Source spec | Priority | Components |
|---|---|---|---|---|
| <name> | </route> | `pages/<slug>.md` | MVP | Button, DataTable, Empty |

## Surface modes

| Page | Mode | Visual intensity | Token/variant notes |
|---|---|---|---|
| Home | intro | Full preset expression | Use named hero/media/effect variants |
| Dashboard | product | Stable B2B expression | Same tokens, lower decoration |

## Page build order

1. Build the app shell/navigation.
2. Build the first MVP page end-to-end.
3. Add loading/empty/error/partial states.
4. Run `npx design-anchor audit` or `npx --yes design-anchor@latest audit`.
5. Review Project Health for component adoption and drift.

## Component map summary

| UI need | Component | Required states |
|---|---|---|
| Primary action | Button | default / disabled / loading |
| Entity list | DataTable | loading / empty / error |
| Destructive confirm | AlertDialog | cancel / confirm / pending |

## Acceptance checklist

- [ ] Every page uses Design-anchor components for known primitives.
- [ ] No raw component substitute where a default component exists.
- [ ] All semantic states from page specs exist.
- [ ] Theme matches the selected preset/token decision.
- [ ] `npx design-anchor audit` passes or remaining issues are documented.
- [ ] Project Health has been checked after the first generated page.
```

## How to use

When Stage 6 starts, fill this file as `implementation-brief.md`. Then either:

- implement directly if the current AI tool has file access and the user asks to build,
- or hand this brief to Cursor / Claude Code / Codex / Qoder.

The coding prompt should be:

```text
Read implementation-brief.md and pages/<first-page>.md.
Implement the page using Design-anchor default components and semantic tokens.
Apply the page's intro/product surface mode. Rich homepage effects must use
Design-anchor tokens or named variants, not local hardcoded CSS.
After implementation, run npx design-anchor audit or
npx --yes design-anchor@latest audit, then report Project Health.
```
