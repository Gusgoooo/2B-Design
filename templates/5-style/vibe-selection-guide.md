# Stage 5 — 风格设计 / Vibe Selection

> 从 Stage 1 的概念文档 + Stage 4 的页面 spec 出发，结构化地选择 Design-Anchor Portal 中展示的 preset。
> 选完后输出 `anchor-theme-decision.md`，作为 Stage 6 Governed Build 的 token / style 输入。

## 可用 preset

当前只使用 Portal onboarding 展示的 6 个 preset：

| Preset | 中文理解 | 适合 |
|---|---|---|
| `linear` | 紧凑、锐利、高频产品工作台 | 项目管理、任务系统、DevTools、内部 admin |
| `stripe` | 商务、可信、宽松的 SaaS | 金融、账单、API 平台、客户门户 |
| `saas-style-01` | 现代、清晰、产品驱动 | PLG SaaS、onboarding、分析看板、营销增长 |
| `google-style` | 友好、圆润、平台型 | CRM、客服、教育、设置中心、运营工具 |
| `minimal-dark` | 暗色、安静、专注 | AI workspace、夜间工作台、高级开发者工具 |
| `hud-dark-style` | 暗色、高信号、指挥舱 | 安全监控、交易、AI Ops、高管驾驶舱 |

## PRD-driven routing

优先不要让用户从空白审美问题里选风格。先读取上一步已经得到的 PRD / 页面产物：

- `concept.md`
- `roadmap.md`
- `features/*.md`
- `pages/*.md`

从这些材料里抽取 6 个信号：

| Signal | 说明 |
|---|---|
| Product domain | 金融、AI、CRM、DevTools、监控、运营、教育等 |
| User role | PM、运营、客服、工程师、设计师、管理者、风控等 |
| Workflow density | 高频表格 / 低频配置 / 长时间创作 / 短任务决策 |
| Trust expectation | 合规、资产、安全、品牌高级感、易上手、技术可靠 |
| Brand personality | 克制、友好、锋利、暗色、强控制、产品驱动 |
| Page mix | intro 页面占比、product 功能页占比、dashboard / setting / table / form 密度 |

如果匹配信号明确，直接推荐一个 preset，并在 `anchor-theme-decision.md` 里写明证据和 confidence。
不要再问"你喜欢什么风格"这种泛问题。

如果 confidence 为 medium / low，或者用户明确希望自己视觉选择，则唤起 Design-Anchor Portal：

```bash
npx --yes design-anchor@latest start
```

让用户在 onboarding / Theme preset selection 中确认 preset。用户选定后，以 Portal 选择为 source of truth，
继续应用 preset，并直接进入 Stage 6 与 Design-Anchor 配合生码。

## 决策树

### Q1. 用户在产品里的核心行为是什么？

| 行为 | 推荐 |
|---|---|
| 长时间浏览大量信息（dashboard / 表格 / 列表） | `linear` |
| 快速决策 / 账单 / API key / 状态查看 | `stripe` |
| 产品增长 / onboarding / polished dashboard | `saas-style-01` |
| 设置 / 表单 / 引导 / 平台型工作流 | `google-style` |
| 长时间专注 / dark workspace / AI 工作台 | `minimal-dark` |
| 指挥舱 / 监控 / 高信号 dark dashboard | `hud-dark-style` |

### Q2. 用户对产品"专业感"的期待是什么？

| 期待 | 推荐 |
|---|---|
| 强专业 / 银行级 / 金融级 | `stripe` |
| 冷静 / 高级 / 夜间专注 / 开发者审美 | `minimal-dark` |
| 精致 / 现代 / 产品驱动型 SaaS | `saas-style-01` |
| 友好 / 大众 / 平台型 / 易上手 | `google-style` |
| 高端 / 仪表盘 / 安全感 / 交易感 | `hud-dark-style` |
| 强工具 / 高频 / 工程师向 | `linear` |

### Q3. 你能承担多少视觉风险？

| 风险偏好 | 推荐 |
|---|---|
| 保守 / 不犯错 | `linear` / `stripe` |
| 中性 / 经典 | `saas-style-01` / `google-style` |
| 暗色 / 高级 / 强氛围 | `minimal-dark` / `hud-dark-style` |

## 三问交叉对照表

| 概念关键词 | 推荐 preset |
|---|---|
| 财务 / 银行 / 合规 / 投资 SaaS | `stripe` |
| PLG SaaS / onboarding / 产品分析 / 客户门户 | `saas-style-01` |
| CRM / 客服 / 教育 / 设置中心 / 平台型后台 | `google-style` |
| 项目管理 / 任务 / 团队协作 / 内部 admin | `linear` |
| 开发者工具 / API / DevOps / 监控 | `linear` |
| focused SaaS / AI workspace / calm dashboard | `minimal-dark` |
| 安全监控 / AI Ops / 交易 / 高管驾驶舱 | `hud-dark-style` |
| 营销 / 增长 / 数据看板 | `saas-style-01` |
| 客户支持 / CRM | `google-style` |

## 6 个 preset 的核心对比

| Preset | 圆角 | sizeUnit | 阴影 | 主色 | 字体 personality |
|---|---|---|---|---|---|
| `linear` | 4px | 3（紧凑） | 几乎无 | indigo `#5e6ad2` | Inter，中等字重，紧凑 |
| `stripe` | 10px | 5（宽松） | subtle | 紫 `#635bff` | Inter，商务、可信 |
| `saas-style-01` | 12px | 5（舒展） | restrained | blue `#0052ff` | Inter / project font，现代 SaaS |
| `google-style` | large token | 5（舒展） | tonal first | purple `#6750a4` | Roboto-like，友好平台型 |
| `minimal-dark` | 12px | 5（宽松） | ambient subtle | amber `#f59e0b` | geometric，安静暗色 |
| `hud-dark-style` | sharp token | 4（默认） | framed glow | metallic gold `#d4af37` | display optional，HUD 指挥舱 |

## 自定义场景

如果 6 个 preset 都不完全契合，回到 Stage 1 的概念关键词，选择最接近的 preset 后做 token 微调：

- **Color mood**: 冷 / 暖 / 中性？推荐 Design-Anchor seed token 更新，而不是页面里手写 hex
- **Radius character**: 尖 / 微圆 / 圆 / 大圆
- **Density**: 紧凑 / 默认 / 宽松（对应 sizeUnit 3 / 4 / 5）
- **Motion personality**: 锐利无缓动 / 温和缓动 / 弹性 spring
- **Shadow level**: 无 / 极少 / 中等 / 充分

自定义必须从最近的 preset **派生**，并记录为 token 更新，而不是散落在页面代码里。

## Surface mode 决策

选定 preset 后，还需要给每个页面标注模式：

| 页面类型 | Mode | 规则 |
|---|---|---|
| 首页 / landing / onboarding / pricing / docs showcase / 品牌叙事 | intro | 可以使用 preset 的完整视觉表达，但必须通过 Design-Anchor tokens、组件、命名 variants 或 page-section specs 表达 |
| 功能页 / 治理页 / 后台 / 表格 / 表单 / dashboard / settings | product | 使用同一 preset 的 token 和组件语言，但降低复杂装饰、连续动效、背景特效和布局位移 |

无论哪种 mode，颜色、间距、圆角、字体、阴影、动效角色等可 token 化内容都不能在页面中硬编码；
它们必须进入 Design-Anchor token seed、组件 spec、或命名 variant。这样首页可以更有表现力，
但不会和后续 B 端功能页割裂。

## 输出 `anchor-theme-decision.md`

```markdown
# Anchor Theme Decision

## 选定 preset
**saas-style-01**

## Routing source
- Source artifacts: `concept.md`, `roadmap.md`, `features/*.md`, `pages/*.md`
- Confidence: high
- Portal selection: not required

## 选择理由
- PRD 关键词：客户提案管理工具 / B 端 SaaS / PM 用户
- 核心行为：每天查看版本、跟进客户反馈、处理列表与状态
- Workflow density：中高频列表 + 短任务决策
- Trust expectation：专业、清晰、低学习成本
- Page mix：首页是 intro；项目列表、提案详情、治理页是 product
→ `saas-style-01` 命中

## Token seed changes
- Start from bundled `saas-style-01/tokens.json`.
- Optional customizations must be written as Design-Anchor token updates, never page-level constants.

## Surface modes
| Page | Mode | Policy |
|---|---|---|
| Home / Landing | intro | Can use richer preset hero effects through named section variants |
| Projects | product | Dense list, stable navigation, no decorative background effects |
| Proposal Detail | product | Form/table/detail components first; keep motion quiet |
| Governance | product | Health metrics and audit states first |

## 后续 Stage 6 该做的事
1. 应用 preset（MCP update_token 或 fallback script）
2. 写入 `.cursor/rules/anchor-style.mdc`
3. run_sync_rules / `npx design-anchor sync`
4. 生成 `implementation-brief.md`
5. 构建 app shell、首页 intro surface、首个 MVP product page
6. 跑 `npx design-anchor audit` 并回到 Project Health
```

## 完成 Stage 5 之后

你拿到 `anchor-theme-decision.md`，所有设计阶段产物都齐了：

```text
project/
├── concept.md
├── roadmap.md
├── features/
├── pages/
└── anchor-theme-decision.md
```

下一步是 Stage 6：生成 `implementation-brief.md`，通过 Design-Anchor 默认组件库、
tokens、MCP、AI rules 和 audit 进入受治理实现。

## 反 anti-pattern

- ❌ "每个页面用不同 preset" → 不行，会切碎产品视觉语言
- ❌ "先开始做，做了再选" → 不行，没 preset 的 implementation 就是泥浆 build 法
- ❌ "客户喜欢这个色就用这个色" → 客户挑色不是设计决策。把偏好加成关键词，让我推荐 preset
- ❌ "先做明亮模式，暗色后面再说" → preset 都包含 seedDark，必须同时定
