# Changelog

## 0.4.1 - 2026-05-26

- Align preset set with current Design-Anchor Portal onboarding.
- Keep only 6 active presets: `linear`, `stripe`, `saas-style-01`, `google-style`, `minimal-dark`, `hud-dark-style`.
- Remove older exploratory preset folders from the distributed skill package.
- Add `agents/openai.yaml` for Codex/OpenAI skill UI metadata.
- Add `scripts/verify-skill.mjs` to validate required files and preset completeness.
- Update README, SKILL resources, references, and system prompt to use the 6-preset source of truth.

## 0.4.0 - 2026-05-26

- Restructure `SKILL.md` into a concise progressive-disclosure entrypoint.
- Add `references/` as the canonical source for lifecycle, stage rules, npm protocol, hard rules, and surface mode.
- Reposition Stage 0 as brand-first onboarding: install Design-Anchor, run Portal, select preset, then continue product design.
- Lock technical scope to React + Tailwind.
- Add Claude plugin manifests under `.claude-plugin/`.

## 0.3.x - 2026-05-26

- Add PRD-driven preset routing.
- Add intro/product surface mode policy.
- Add Design-Anchor npm invocation protocol for Portal, init, sync, audit, and Project Health.
- Add Design-Anchor-first preset prompts and token seed files.

## 0.2.0 - 2026-05-25

- Reframe 2B-Design as a product-to-Design-Anchor funnel.
- Add stage-specific templates for concept, roadmap, feature spec, page IA, vibe selection, implementation brief, and design review.
- Add preset apply/eject fallback scripts.

## 0.1.0 - 2026-05-24

- Initial lifecycle draft.
