# Stage 7 — Design Review Checklist

> Use this after the first generated screen or after a major page iteration.
> The goal is to help a product designer decide whether the UI is usable,
> consistent, and still inside the Design-anchor contract.

## Review Output

Create `design-review.md`:

```markdown
# Design Review: <page-or-flow>

## Summary
- Verdict: Pass / Needs iteration / Blocked
- Main risk:
- Recommended next action:

## Findings

| Priority | Area | Finding | Suggested fix |
|---|---|---|---|
| P1 | Component consistency | ... | ... |

## Design-anchor checks
- [ ] Uses default component library for known primitives
- [ ] Imports from `@design` or configured alias
- [ ] No hardcoded hex colors
- [ ] No arbitrary spacing/radius values
- [ ] Loading / empty / error / partial states present
- [ ] `npx design-anchor audit` passes or issues are documented; if unavailable locally, `npx --yes design-anchor@latest audit` was attempted

## Product design checks
- [ ] Page purpose is obvious in 5 seconds
- [ ] Primary action is clear
- [ ] Secondary actions are not visually louder than primary action
- [ ] Data-dense areas are scan-friendly
- [ ] Empty state teaches the next useful action
- [ ] Error state explains recovery

## Accessibility checks
- [ ] Buttons have visible labels or aria labels
- [ ] Focus order follows the visual order
- [ ] Keyboard path exists for power-user workflows
- [ ] Color contrast is acceptable

## Project Health follow-up
- Component adoption:
- Token status:
- AI rule freshness:
- Migration backlog:
```

## Review Priorities

P0:
- breaks a core workflow,
- bypasses Design-anchor components,
- uses hardcoded visual constants at scale,
- missing error/empty/loading states for a core path.

P1:
- confusing information hierarchy,
- wrong component choice,
- inconsistent action hierarchy,
- accessibility gaps.

P2:
- copy polish,
- small layout tuning,
- optional interaction polish.

## Fix Policy

- Token/spec changes must go through Design-anchor and be confirmed.
- Auto-fixes must be confirmed by the user before modifying code.
- Visual polish should preserve the selected preset and semantic tokens.
