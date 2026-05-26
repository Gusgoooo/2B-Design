# Changelog

All notable changes to 2B-Design skill.

## [0.4.0] - 2026-05-26

### Restructured（结构重构）

- **Progressive disclosure SKILL.md**：主入口从 459 行（~5000 tokens）压到 ~100 行（~600 tokens），符合 Anthropic 官方 skills 最佳实践
- **新建 `references/` 单一真源**（5 个中文文件）：
  - `references/lifecycle.md` —— 9 stage 总览 + 触发词路由
  - `references/stage-rules.md` —— 每个 stage 的 AI 行为规则
  - `references/anchor-npm-protocol.md` —— design-anchor npm 工具调用协议
  - `references/hard-rules.md` —— 不可妥协的硬性约束
  - `references/surface-mode-policy.md` —— intro/product 双模式
- **AGENTS.md / system-prompt.md 重写为中文**（self-contained，给 Codex/Cursor/Cline/ChatGPT 等不支持 Read 的工具）

### Repositioned（重设计 lifecycle）

- **品牌前置（Stage 0）**：合并原项目模式 + 风格选择。首次进入必走 Stage 0 = 装 `design-anchor` + 跑 Portal onboarding + 定品牌 preset，让用户最早用上 npm 包，让后续梳理在已定品牌 scope 内
- 原 Stage 5「主题决策」→ 新 Stage 5「主题校准」：不再是从头选 preset，而是基于 Stage 4 实际页面密度反推 token 微调

### Locked（技术栈固定）

- **技术栈 React + Tailwind 固定**，skill 主动告知用户、主动应用，**不询问** Vue / Angular / styled-components 等替代

### Added（吸收热门 AI design skill 实践）

- **设计系统 supremacy** 原则（参考 Lovable Agent）：任何 ad-hoc style 等同 bug，必须回 Design-anchor token
- **两轮 refinement pass**（参考 Anthropic canvas-design）：Stage 7 第一轮跑 audit 修硬伤；第二轮不引入新组件/新 token，只 polish
- **反 bypass 强 gate**：每个 stage 提醒"绕过 design-anchor 直接写 style/装别家组件库 → STOP"
- **pushy description** + 强动词 routing（参考 Anthropic skills/pdf）：对抗 undertrigger

### Naming（命名统一）

- skill 内部名统一为 `2b-design`（SKILL.md frontmatter / 安装路径目录名）
- `package.json` name 保持 `2b-design-skill`（npm 包命名习惯）
- **删除 `package.json` 的 `bin` 字段**：废弃 `2b-design-apply-preset` CLI 入口
- INSTALL.md 收敛为单一 git clone 路径 `~/.claude/skills/2b-design`
- README.md / CHANGELOG.md 同步命名

### Migration from 0.3.x

- 已 clone 到 `~/.claude/skills/anchor-suite/` 的用户需要 `mv` 到 `~/.claude/skills/2b-design/`
- 之前依赖 `2b-design-apply-preset` 全局 CLI 的用户改为 `node ~/.claude/skills/2b-design/scripts/apply-preset.mjs <preset>`

## [0.3.8] - 2026-05-26

- Added a Design-anchor npm tool protocol so AI tools know when to download and
  invoke `design-anchor` for Portal, init, sync, audit, and Project Health.
- Documented local-vs-remote invocation: prefer `npx design-anchor`, fall back
  to `npx --yes design-anchor@latest`, and ask before persistent install.

## [0.3.7] - 2026-05-26

### Added

- `minimal-dark` preset:
  - display name: **Minimal Dark**
  - token seed file for layered slate surfaces, warm amber primary, calm dark
    UI, soft radius, and premium focus spacing
  - Design-anchor-first style prompt that preserves the original prompt's
    intro-page atmosphere while requiring product pages to use stable governed
    components

### Changed

- Stage 5 now uses PRD-driven preset routing:
  - reads `concept.md`, `roadmap.md`, `features/*.md`, and `pages/*.md`,
  - selects a preset from product domain, user role, workflow density, trust
    expectation, brand personality, and page mix,
  - invokes Design-anchor Portal for visual selection when confidence is not
    high,
  - continues into governed build after preset confirmation instead of stopping
    at style discussion.
- Added surface-mode policy across presets:
  - intro pages can use the original prompt's richer visual effects,
  - product pages use quieter component-first B2B expressions,
  - token-compatible details in intro pages must still use Design-anchor tokens
    or named variants so homepage and app interiors stay aligned.

## [0.3.6] - 2026-05-26

### Added

- `web3-dark` preset:
  - display name: **Web3 Dark**
  - token seed file for Bitcoin DeFi inspired dark surfaces, orange primary
    actions, digital-gold value accents, rounded crypto surfaces, and technical
    financial hierarchy
  - Design-anchor-first style prompt that replaces hardcoded Web3 glow/grid CSS
    with semantic tokens, default components, component specs, audit, and
    Project Health expectations

## [0.3.5] - 2026-05-26

### Added

- `saas-dark-02` preset:
  - display name: **Saas Dark 02**
  - token seed file for bold dark typography, near-black canvas, warm white
    text, vermillion primary accent, sharp edges, and restrained SaaS surfaces
  - Design-anchor-first style prompt that replaces hardcoded bold typography
    CSS with semantic tokens, default components, component specs, audit, and
    Project Health expectations

## [0.3.4] - 2026-05-26

### Added

- `luxury-style` preset:
  - display name: **Luxury Style**
  - token seed file for warm alabaster canvas, rich charcoal primary actions,
    restrained metallic accent, sharp rectangular edges, and generous editorial
    spacing
  - Design-anchor-first style prompt that replaces hardcoded luxury/editorial
    CSS with semantic tokens, default components, component specs, audit, and
    Project Health expectations

## [0.3.3] - 2026-05-26

### Added

- `hud-dark-style` preset:
  - display name: **HUD Dark Style**
  - token seed file for dark Art Deco HUD surfaces, metallic primary emphasis,
    champagne foreground, midnight depth, and sharp geometric controls
  - Design-anchor-first style prompt that replaces hardcoded Art Deco/HUD CSS
    with semantic tokens, default components, component specs, audit, and
    Project Health expectations

## [0.3.2] - 2026-05-26

### Added

- `google-style` preset:
  - display name: **Google Style**
  - token seed file for Material You inspired tonal surfaces, expressive
    purple primary, rounded controls, and Google-like status colors
  - Design-anchor-first style prompt that replaces hardcoded Material values
    with semantic tokens, default components, component specs, audit, and
    Project Health expectations

## [0.3.1] - 2026-05-26

### Added

- `saas-style-01` preset:
  - display name: **SaaS Style 01**
  - token seed file for electric-blue minimalist modern SaaS
  - Design-anchor-first style prompt that replaces hardcoded CSS/hex guidance
    with semantic tokens, default components, component specs, audit, and
    Project Health expectations

## [0.3.0] - 2026-05-26

### Repositioned

Reframed 2B-Design as **Product Designer → Governed UI**, not just a
planning funnel. The skill now targets designers and product designers who want
to shape a new B2B product and generate consistent UI through Design-anchor.

### Added

- Stage 0 — Project Mode:
  - new project: recommend Design-anchor default component library
  - existing project: import/upload legacy component library for migration
- Stage 6 — Governed Build:
  - generates `implementation-brief.md`
  - can guide implementation using Design-anchor components when the AI tool has
    file access
- Stage 7 — Design Review:
  - generates `design-review.md`
  - checks hierarchy, states, component consistency, token consistency, a11y
- Stage 8 — Project Health Loop:
  - routes generated UI back into Design-anchor health/adoption/governance
- New templates:
  - `templates/6-implementation/implementation-brief-template.md`
  - `templates/7-review/design-review-checklist.md`

### Changed

- `SKILL.md`, `AGENTS.md`, and `system-prompt.md` now share the same lifecycle
  model and default-component-library recommendation.
- Stage 4 page template now requires an explicit Anchor Component Map.
- Stage 5 now outputs `anchor-theme-decision.md` and treats visual choices as
  token updates, not one-off style constants.
- `scripts/apply-preset.mjs` now discovers all preset directories and runs
  `npm run sync:anchor` so tokens and AI rules stay aligned.

## [0.2.0] - 2026-05-25

### Repositioned 🔄

Pivoted from "全周期 lifecycle backbone" to **"产品 → design-anchor 漏斗管道"**.
The Skill now stops at Stage 6 (hand-off) instead of trying to cover Phase 6-10
in implementation. Implementation/governance is fully delegated to the
`design-anchor` npm package.

### Added

- 5-stage pipeline structure in SKILL.md / AGENTS.md / system-prompt.md:
  - Stage 1 — 脑爆 (Brainstorm)
  - Stage 2 — 计划 (MVP/V1/V2+ Roadmap)
  - Stage 3 — 功能设计 (Feature spec)
  - Stage 4 — 页面设计 (Page IA + component selection)
  - Stage 5 — 风格设计 (Vibe preset)
  - Stage 6 — Hand off to design-anchor
- 5 stage-specific templates under `templates/`:
  - `1-brainstorm/concept-template.md`
  - `2-plan/mvp-roadmap-template.md`
  - `3-feature/feature-spec-template.md`
  - `4-page/sitemap-prompt.md` + `page-layout-template.md`
  - `5-style/vibe-selection-guide.md`
- 6 vibe presets (each = `tokens.json` + `style.md`):
  - `linear` — Compact, sharp, dev-tool aesthetic
  - `vercel-geist` — Sharp B/W minimalism
  - `stripe` — Professional purple, generous spacing
  - `notion-soft` — Warm, content-focused (NEW)
  - `brutalist` — Hard, 0 radius, neon (NEW)
  - `glass` — Translucent, large radius, iOS (NEW)
- AGENTS.md mirror for Codex CLI / Continue / Cline compatibility
- system-prompt.md compact mirror for ChatGPT-style copy-paste
- INSTALL.md with multi-tool installation steps (Claude Code / Cursor / Codex /
  Copilot / generic)
- `scripts/apply-preset.mjs` — CLI fallback applier when MCP unavailable
- LICENSE (MIT)
- This CHANGELOG

### Removed

- Phase 1-3 / 6-10 lifecycle templates (handoff / qa / governance / metrics
  checklists) — those are design-anchor npm's domain post hand-off, not the
  Skill's
- "Full lifecycle backbone" framing in README

### Migration from 0.1.0

- `templates/discovery/` was renamed to `templates/1-brainstorm/` and rewritten
  as proactive concept generation (vs passive interview templates)
- `templates/ia/` and `templates/wireframe/` merged into `templates/4-page/`
- `templates/metrics/` removed (post-implementation concern)
- `checklists/` directory removed (handoff / qa / governance moved to
  design-anchor's domain)

## [0.1.0] - 2026-05-24 (deprecated)

Initial release. "Full lifecycle backbone" framing covering all 10 phases
of B端 design lifecycle. Superseded by 0.2.0's tighter funnel framing.
