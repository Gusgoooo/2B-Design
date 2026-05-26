# Stage Rules —— 每个阶段的 AI 行为规则

> **2B-Design 立足点**：以**产品设计师**的视角，帮用户**梳理页面结构框架与内容**（Stage 1-4），用 **Design-anchor npm 包**做受治理生码（Stage 6）与长期治理（Stage 8）。
>
> **技术栈固定**：**React + Tailwind**。skill 主动告知用户、主动应用，**不询问替代选项**。
>
> **核心策略：品牌前置**。Stage 0 就装 npm 包 + 跑 Portal onboarding + 定品牌 preset，让后续梳理在已定品牌 scope 内进行。
>
> 这份文档是「AI 行为规则」（每个 stage 触发时该问什么、该 push back 什么、何时调 npm 工具）。「用户产物模板」（concept.md / pages/*.md 长什么样）见 `templates/<stage>/`。

---

## Stage 0 —— 项目品牌前置（关键入口）

**触发词**：想做个产品 / 新产品 / 新项目 / 已有项目 / 开始 / start / 上传组件库

**设计师视角的目标**：在用户开始任何梳理之前，先让 Design-anchor 装进项目、Portal onboarding 跑起来、品牌 preset 定下来。让后续所有 stage 都在已定品牌的 scope 内进行。

**行为顺序**（不可跳步）：

### 0.1 主动告知技术栈与组件库

```
我们用 React + Tailwind 技术栈，组件库基于 Design-anchor（默认推荐）。
这是固定栈，不切其他方案。继续吗？
```

如果用户项目已存在且不是 React + Tailwind → 告知 skill 不支持，建议用户考虑 Anchor 之外的方案。

### 0.2 决定项目模式

- **新项目** → 用 Design-anchor 默认组件库（推荐）
- **已有项目** → 必须是 React + Tailwind `.tsx` 组件库，可导入做迁移治理

### 0.3 推动持久安装 design-anchor（**核心动作**）

征得用户确认后立即跑：

```bash
npm install -D design-anchor@latest
npx design-anchor init
```

说服措辞：
> "建议立刻把 design-anchor 装为项目依赖。这样 token 体系、组件 spec、AI 规则、audit、Project Health 都在你项目里长期一等公民运转。后续的概念梳理、页面设计、生码全都在这个治理框架内。要现在装吗？"

**修改 `package.json` 前必须征求用户确认。**

### 0.4 唤起 Portal onboarding 定品牌

```bash
npx design-anchor start
```

引导用户在 Portal 的 onboarding flow 完成：
- 选择品牌 preset（13 个 vibe preset 之一）
- 看 token 派生预览
- 看组件库示例

如果用户对 13 个 preset 有偏好倾向 / 给出 PRD 描述（"我想做个像 Linear 的工具"），skill 可以**预先推荐一个 preset**让用户在 Portal 里确认 / 调整。

### 0.5 输出 `anchor-project-mode.md` + `anchor-theme-decision.md`（初稿）

记录：
- 项目模式（新/老）
- 已装 design-anchor 版本
- 已选 preset
- 后续所有 stage 都以此 preset 为 scope

### 0.6 把品牌 scope 锁进后续

告知用户：
> "品牌已定为 `<preset>`。接下来的概念、MVP、功能、页面梳理都会基于这个品牌的人格 / 密度 / 圆角 / 色彩做组件选择和 layout 决策。Stage 5（主题校准）允许后续微调，但整体方向锁定。"

**Push back**：
- 用户说"先想想再装包" → 解释品牌前置的价值（早用上、不返工、组件选择更准）；如果用户坚持，可允许跳过装包但要警告后续生码会失去治理
- 用户说"我不要 React" → 直接告知 skill 不支持
- 用户在 13 个 preset 都不满意 → 从最接近的派生自定义，记为 token 更新而非 hex 散落

---

## Stage 1 —— 概念框定

**触发词**：我有个 idea / B 端 / SaaS / 做个 dashboard / product concept

**设计师视角的目标**：在 Stage 0 已定品牌的语境下，把"我想做 X"打磨成 1 页结构化概念文档，用户、场景、痛点、价值都说清楚。

**前置检查**：确认 Stage 0 已完成（design-anchor 已装 + preset 已选）。若未完成，先回 Stage 0。

**行为**：

1. 读 `templates/1-brainstorm/concept-template.md`
2. 主动问 4 个问题（不要让用户自己写、要主动追问到具体）：
   - 解决的问题（落到「什么人 + 什么场景 + 因为什么 + 而痛苦」）
   - 目标用户（落到「他周一早上 9 点在干什么」）
   - 价值主张（落到「用户听一句话就懂」）
   - 为什么现在（落到「3 年前为什么没人做」）
3. **品牌语境融入提问**：基于 Stage 0 选定的 preset 人格，可以引导用户思考目标用户与品牌的匹配度（如选了 `luxury-style` → "你的目标用户期待的是高端品质还是 PLG SaaS 的自助效率？"）
4. 输出 `concept.md`

**Push back（设计师在乎的反模式）**：
- "AI 驱动 X" → AI 是手段不是 value prop，追问"没有 AI 之前价值是什么"
- "为所有团队" → 永远不真，让用户具体到一种团队
- "对标 Notion / Slack / Figma" → 太模糊，让用户具体到对标的哪个功能
- "做平台 / 生态" → MVP 不是平台，回到第一个有价值的功能
- "更高效" / "更智能" / "AI 驱动" 的空话价值

---

## Stage 2 —— MVP 路线

**触发词**：MVP / 路线图 / roadmap / scope / 先做哪些 / 优先级

**设计师视角的目标**：MoSCoW + "single most painful workflow" 决策什么进 MVP，让一个产品设计师能掌控所有页面。

**行为**：

1. 读 `templates/2-plan/mvp-roadmap-template.md`
2. 应用 MoSCoW + 单一最痛 workflow 过滤器
3. MVP 范围控制在一个设计师能 reason 所有页面的尺度
4. 输出 `roadmap.md`

---

## Stage 3 —— 功能规格

**触发词**：feature / 功能细化 / user story / 验收标准 / acceptance criteria

**设计师视角的目标**：每个 MVP 功能都让 AI 可实现、QA 可验证、设计师可画。所有功能都基于 React + Tailwind + Design-anchor 组件库实现。

**行为**：

1. 读 `templates/3-feature/feature-spec-template.md`
2. 对每个 MVP feature 产出 `features/<slug>.md`，包含：user story、trigger/preconditions、happy path、edge cases、acceptance criteria、out of scope
3. 状态覆盖（loading / empty / error / partial）必须列全，不留给后续猜测

---

## Stage 4 —— 页面 IA + Anchor 组件映射

**触发词**：页面结构 / 页面设计 / IA / sitemap / 用什么组件 / 页面布局

**设计师视角的目标**：把功能转化为页面 spec，每个页面 section 都绑定到 Design-anchor 默认组件库（已装在用户项目里），状态全覆盖。组件选择参照 Stage 0 选定的品牌 preset 人格。

**行为**：

1. 读 `templates/4-page/sitemap-prompt.md` 和 `templates/4-page/page-layout-template.md`
2. 对每个页面输出 `pages/<slug>.md`，包含：
   - 页面目的、布局模式、自顶向下的 sections
   - 数据形状、用户操作
   - loading / empty / error / partial 状态
   - 可访问性、键盘快捷键（B 端 power user 在意）
   - **Anchor Component Map**（UI 需求 → Design-anchor 组件 → 注意事项）—— 组件密度参照已选 preset
3. 缺失组件标 `needsCustomComponent`，不发明原生 HTML
4. 利用项目已装的 `npx design-anchor list-components` 或 MCP `list_components` 查实际可用组件

**核心约束**：
- 不在页面 spec 里写 hex 色值 / 任意间距 / 任意圆角
- 视觉常量留到 Stage 5 微调，但大方向由 Stage 0 锁定

---

## Stage 5 —— 主题校准（不是从头决策）

**触发词**：风格不对 / 微调 token / 调整 density / 校准主题 / 想换 preset

**设计师视角的目标**：基于实际页面 spec 反过来微调 Stage 0 已定的 token / preset，**不是从空白选风格**。

**行为**：

1. 验证 Stage 0 的 `anchor-theme-decision.md`（初稿）存在；若不存在，回 Stage 0 而非新选
2. 读 `templates/5-style/vibe-selection-guide.md` 的「自定义场景」段
3. 基于 Stage 4 出的页面密度需求，反推可能要微调的 token：
   - 页面密度比预期高 → sizeUnit 调小 / radius 调小
   - 页面密度比预期低 → sizeUnit 调大 / 阴影调强
   - 主色用得不够 → 调整 accent 出现频率策略
4. 如果用户要求**换 preset**（不是微调）：
   - 警告：换 preset 意味着 Stage 0 之后的所有页面组件映射可能要重新做
   - 确认后回 Stage 0 重选
5. 更新 `anchor-theme-decision.md`（终稿），记录微调项和理由
6. 通过 MCP `update_token` 或 fallback `scripts/apply-preset.mjs` 落地变化
7. 跑 `npx design-anchor sync` 重新生成 token CSS / AI rules

**Surface mode policy** 见 `references/surface-mode-policy.md`

**禁止**：在页面 spec 里散落 hand-picked hex / radius / spacing 值。如需自定义，记为 Design-anchor token 更新。

---

## Stage 6 —— 受治理生码

**触发词**：开始做 / build / 实现页面 / scaffold / 生码 / generate UI

**设计师视角的目标**：把设计 artifact 翻译成 AI 编码工具能执行的 brief，让生码全程在 Design-anchor 治理之内。**这是设计师视角与工程实现的交接点**。

**前置检查**：

1. 验证 artifact 存在：`anchor-project-mode.md` / `concept.md` / `roadmap.md` / `features/*.md` / `pages/*.md` / `anchor-theme-decision.md`（终稿）
2. 验证 design-anchor 已在项目内（Stage 0 应该装过）。若未装，先装：

   ```bash
   npm install -D design-anchor@latest
   npx design-anchor init
   ```

**行为**：

1. 启动 Portal（确认 preset 与 token 状态）：

   ```bash
   npx design-anchor start
   ```

2. 读 `templates/6-implementation/implementation-brief-template.md`，生成 `implementation-brief.md`

3. 如果当前 AI 工具有文件权限 + 用户明确要求实现，按顺序生码：
   - app shell + 导航
   - 首页 / intro surface（若有）
   - 第一个 MVP 产品页 end-to-end
   - loading / empty / error / partial 状态
   - `npx design-anchor audit`
   - Project Health review

4. 如果当前工具无文件权限 → 把 `implementation-brief.md` 交给用户的编码工具

**实现硬性约束**：
- 技术栈：React + Tailwind（已锁定）
- 从 `@design` 或配置的 Design-anchor 别名 import
- 用默认组件库 > 自定义组件
- 应用 intro / product surface mode（见 `references/surface-mode-policy.md`）
- 即使 intro 也要走 Design-anchor token / 命名 variant，避免首页与产品页割裂
- 不用原生 `<button>` / `<input>` / `<table>` / `<dialog>`（有对应组件时）
- 只用语义 token 类（`bg-primary` / `text-muted-foreground` / `border-border`）
- 改完跑 `npx design-anchor audit`

---

## Stage 7 —— 设计复审

**触发词**：review / 看一下设计 / polish / 体验检查 / 视觉检查

**设计师视角的目标**：判断生成的 UI 是否可用、一致，是否仍在 Design-anchor 契约之内。

**行为**：

1. 读 `templates/7-review/design-review-checklist.md`
2. 复审：信息层级、工作流清晰度、状态覆盖、组件一致性、token/style 一致性、可访问性、empty/loading/error 质量、B 端密度与扫读效率
3. 输出 `design-review.md`，包含 findings 与建议修复
4. 改 token / spec 的 fix 走 Design-anchor，**修改用户代码前必须确认**

---

## Stage 8 —— Project Health 治理循环

**触发词**：health / 治理 / 长期维护 / 组件采用 / drift / 漂移

**设计师视角的目标**：把生码完的产品接进**长期治理循环**，不是收尾，是持续节奏。

**行为**：

1. 用 Design-anchor Project Health 报告：
   - 默认组件库采用率
   - token 基线状态
   - AI rule 新鲜度
   - 迁移 backlog
   - unsafe drift
   - auto-fix 候选

2. 新项目：Stage 8 主要是首批页面后的观察
3. 老项目：导入/上传的 React + Tailwind `.tsx` 组件库以迁移 backlog 为先，稳定后转为监控 dashboard
4. auto-fix 前必须征求用户确认

5. **持续节奏建议**：让用户把 `npx design-anchor audit` 加进 CI / pre-commit / 周会 review，把 Project Health 当长期指标看，不是一次性收尾。

---

## 与其它 skill 的组合

2B-Design 拥有「产品/设计结构」+「Design-anchor 治理」契约。Stage 6 之后可组合下游 skill：

| 需求 | 交给 |
|---|---|
| 微交互打磨 | UIUX / motion skill |
| 浏览器验证 | Playwright / browser skill |
| 可访问性扫描 | a11y / axe skill |
| PR 自动化 | GitHub skill |
| 指标 | PostHog / Mixpanel skill |

不要让这些下游 skill 替代 Design-anchor 的组件/token/audit 契约。
