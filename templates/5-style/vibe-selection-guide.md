# Stage 5 — 风格设计 / Vibe Selection

> 从 Stage 1 的概念文档 + Stage 4 的页面 spec 出发，**结构化地选 vibe preset**。
> 选完后输出 `anchor-theme-decision.md`，作为 Stage 6 Governed Build 的 token / style 输入。

## PRD-driven routing

优先不要让用户从空白审美问题里选风格。先读取上一步已经得到的 PRD / 页面产物：

- `concept.md`
- `roadmap.md`
- `features/*.md`
- `pages/*.md`

从这些材料里抽取 6 个信号：

| Signal | 说明 |
|---|---|
| Product domain | 金融、AI、CRM、DevTools、知识库、Web3、监控等 |
| User role | PM、运营、客服、工程师、设计师、管理者、风控等 |
| Workflow density | 高频表格/低频配置/长时间创作/短任务决策 |
| Trust expectation | 合规、资产、安全、品牌高级感、易上手、技术可靠 |
| Brand personality | 克制、友好、锋利、奢华、暗色、强表达 |
| Page mix | intro 页面占比、product 功能页占比、dashboard/setting/table/form 密度 |

如果匹配信号明确，直接推荐一个 preset，并在 `anchor-theme-decision.md` 里写明证据和
confidence。不要再问“你喜欢什么风格”这种泛问题。

如果 confidence 为 medium / low，或者用户明确希望自己视觉选择，则唤起 Design-anchor Portal：

```bash
npx --yes design-anchor@latest start
```

让用户在 Theme tab / preset selection surface 中选择 preset。用户选定后，以 Portal 选择为
source of truth，继续应用 preset，并直接进入 Stage 6 与 Design-anchor 配合生码。

## 决策树

回答下面 3 个问题，定位 preset：

### Q1. 用户在产品里的核心行为是什么？

| 行为 | 偏向 |
|---|---|
| 长时间浏览大量信息（dashboard / 表格 / 列表） | 紧凑型 → linear / vercel-geist |
| 内容创作 / 文档编辑 / 知识管理 | 留白型 → notion-soft |
| 快速决策 / 短任务（API key 管理 / 状态查看） | 中间型 → stripe / vercel-geist |
| 钱包 / 交易 / DeFi / 链上数据分析 | Web3 金融型 → web3-dark |
| 长时间专注 / dark workspace / AI 工作台 | 安静暗色型 → minimal-dark |
| 产品增长 / onboarding / polished dashboard | 现代 SaaS 型 → saas-style-01 |
| 强文字表达 / manifesto landing / dark SaaS | 暗色强排版型 → saas-dark-02 |
| 设置 / 表单 / 引导 / 平台型工作流 | 友好圆润型 → google-style |
| 指挥舱 / 监控 / 高信号 dark dashboard | 暗色 HUD 型 → hud-dark-style |
| 品牌叙事 / 高端体验 / editorial showcase | 奢华编辑型 → luxury-style |
| 浏览体验产品（更接近消费） | 灵活型 → glass / brutalist |

### Q2. 用户对你产品的"专业感"期待？

| 期待 | 偏向 |
|---|---|
| 强专业 / 银行级 / 金融级 | stripe |
| 技术金融 / Crypto / 安全与资产感 | web3-dark |
| 冷静 / 高级 / 夜间专注 / 开发者审美 | minimal-dark |
| 精致 / 现代 / 产品驱动型 SaaS | saas-style-01 |
| 自信 / 锋利 / 编辑感 / 技术品牌 | saas-dark-02 |
| 友好 / 大众 / 平台型 / 易上手 | google-style |
| 高端 / 仪表盘 / 安全感 / 交易感 | hud-dark-style |
| 奢华 / 克制 / 文化品味 / 品牌感 | luxury-style |
| 强工具 / 极客 / 工程师向 | linear / vercel-geist |
| 知识 / 内容 / 软专业 | notion-soft |
| 个性 / 反主流 / 文化品牌 | brutalist |
| 现代 / 苹果系 / 消费品 | glass |

### Q3. 你能/想/敢承担多少视觉风险？

| 风险偏好 | 偏向 |
|---|---|
| 保守 / 不犯错 | linear / stripe |
| 中性 / 经典 | vercel-geist / notion-soft / minimal-dark / saas-style-01 / google-style / luxury-style |
| 激进 / 留下印象 | saas-dark-02 / hud-dark-style / brutalist / glass |

## 三问交叉对照表

把 Q1 + Q2 + Q3 合起来看：

| 概念关键词 | 推荐 preset |
|---|---|
| 财务 / 银行 / 合规 / 投资 SaaS | **stripe** |
| Web3 / DeFi / wallet / crypto analytics | **web3-dark** |
| focused SaaS / AI workspace / premium dark dev tools | **minimal-dark** |
| PLG SaaS / onboarding / 产品分析 / 客户门户 | **saas-style-01** |
| bold SaaS / developer tools / manifesto landing | **saas-dark-02** |
| 设置中心 / CRM / 客服 / 教育 / 平台型后台 | **google-style** |
| 安全监控 / AI Ops / 交易 / 高管驾驶舱 | **hud-dark-style** |
| 高端品牌 / premium portal / editorial SaaS | **luxury-style** |
| 项目管理 / 任务 / 团队协作（密集） | **linear** |
| 文档 / 知识库 / Wiki / 内容协作 | **notion-soft** |
| 开发者工具 / API / DevOps / 监控 | **linear** 或 **vercel-geist** |
| 夜间工作台 / LLM 工具 / calm dashboard | **minimal-dark** |
| 链上数据 / token ops / crypto security | **web3-dark** |
| API 产品 / 文档站 / 着陆页 | **vercel-geist** |
| 客户支持 / CRM | **google-style** 或 **notion-soft** |
| 内部 admin 后台 | **linear** |
| 设计师 / 创意工作者用的产品 | **glass** 或 **brutalist** |
| 教育 / 学习平台 | **google-style** 或 **notion-soft** |
| 营销 / 增长 / 数据看板 | **saas-style-01** 或 **stripe** |
| 技术品牌 / AI 产品 / creative infrastructure | **saas-dark-02** |
| premium dashboard / command center / status wall | **hud-dark-style** |
| 高端咨询 / 文化机构 / 奢侈品 / 品牌官网 | **luxury-style** |
| 招聘 / HR | **notion-soft** |
| 个人作品集 / 独立产品 / Indie SaaS | **brutalist** 或 **vercel-geist** |
| 移动端为主 (PWA / Hybrid) | **glass** |

## 13 个 preset 的核心对比

| Preset | 圆角 | sizeUnit | 阴影 | 主色 | 字体 personality |
|---|---|---|---|---|---|
| **linear** | 4px | 3 (紧凑) | 几乎无 | indigo `#5e6ad2` | Inter, 中等字重，紧凑 |
| **vercel-geist** | 6px | 4 (默认) | 极少 | 黑 `#000000` | Inter, 几何, 专业 |
| **stripe** | 10px | 5 (宽松) | 有 (subtle) | 紫 `#635bff` | Inter, 较宽松, 商务 |
| **web3-dark** | 16px | 5 (宽松) | governed glow | Bitcoin-orange token | project font / mono-data, crypto finance |
| **minimal-dark** | 12px | 5 (宽松) | ambient subtle | amber primary token | project font / geometric, calm dark |
| **saas-style-01** | 12px | 5 (舒展) | 有 (restrained) | primary blue token | Inter / project font, premium SaaS |
| **saas-dark-02** | 0px | 4 (默认) | 无 | vermillion primary token | project font / bold typography, editorial dark SaaS |
| **google-style** | large token | 5 (舒展) | tonal first | primary purple token | project font / Roboto-like, friendly |
| **hud-dark-style** | sharp token | 4 (默认) | framed glow policy | metallic primary token | project font / display optional, HUD luxury |
| **luxury-style** | 0px | 5 (宽松) | subtle editorial | charcoal primary + metallic accent | project font / serif optional, premium editorial |
| **notion-soft** | 6px | 5 (宽松) | 几乎无 | Notion 蓝 `#2eaadc` | Inter, 阅读优先 |
| **brutalist** | 0px | 4 | 无 / 硬阴影 | 霓虹粉 `#ff3366` | Mono / Inter, 厚重 |
| **glass** | 14-16px | 4 | 软阴影 + blur | iOS 蓝 `#007aff` | Inter, 中性 |

## 自定义场景

如果 13 个 preset 都不完全契合，回到 Stage 1 的概念关键词，告诉我：

- **Color mood**: 冷 / 暖 / 中性？我推荐 Design-anchor seed token 更新，而不是页面里手写 hex
- **Radius character**: 尖 (0) / 微圆 (4-6) / 圆 (8-12) / 大圆 (14+)
- **Density**: 紧凑 / 默认 / 宽松（对应 sizeUnit 3 / 4 / 5）
- **Motion personality**: 锐利无缓动 / 温和缓动 / 弹性 spring
- **Shadow level**: 无 / 极少 / 中等 / 充分

我会从最接近的 preset **派生**一个自定义 preset 给你。

## Surface mode 决策

选定 preset 后，还需要给每个页面标注模式：

| 页面类型 | Mode | 规则 |
|---|---|---|
| 首页 / landing / onboarding / pricing / docs showcase / 品牌叙事 | intro | 可以使用原 prompt 的完整视觉效果，但必须通过 Design-anchor tokens、组件、命名 variants 或 page-section specs 表达 |
| 功能页 / 治理页 / 后台 / 表格 / 表单 / dashboard / settings | product | 使用同一 preset 的 token 和组件语言，但降低复杂装饰、连续动效、背景特效和布局位移 |

无论哪种 mode，颜色、间距、圆角、字体、阴影、动效角色等可 token 化内容都不能在页面中硬编码；
它们必须进入 Design-anchor token seed、组件 spec、或命名 variant。这样首页可以更有表现力，
但不会和后续 B 端功能页割裂。

## 输出 `anchor-theme-decision.md`

```markdown
# Anchor Theme Decision (v0.1)

## 选定 preset
**linear**

## Routing source
- Source artifacts: `concept.md`, `roadmap.md`, `features/*.md`, `pages/*.md`
- Confidence: high
- Portal selection: not required

## 选择理由
- PRD 关键词：客户提案管理工具 / B 端 SaaS / PM 用户
- 核心行为：每天查看版本、跟进客户反馈、处理列表与状态
- Workflow density：高频列表 + 短任务决策，需要紧凑和稳定
- Trust expectation：专业、清晰、低学习成本
- Page mix：首页是 intro；项目列表、提案详情、治理页是 product
→ **linear** 命中

## Token seed changes
- Start from bundled `linear/tokens.json`.
- Optional customizations must be written as Design-anchor token updates, never page-level constants.

## Surface modes
| Page | Mode | Policy |
|---|---|---|
| Home / Landing | intro | Can use richer preset hero effects through named section variants |
| Projects | product | Dense list, stable navigation, no decorative background effects |
| Proposal Detail | product | Form/table/detail components first; keep motion quiet |
| Governance | product | Health metrics and audit states first |

## 不动的部分
- 圆角 4px (linear 默认)
- sizeUnit 3 (紧凑保留)
- 暗色模式 seedDark (linear 默认)
- 所有首页可 token 化的视觉细节仍走 Design-anchor tokens / named variants

## 后续 Stage 6 该做的事
1. 应用 `linear` preset (MCP update_token 或 fallback script)
2. 写入 `.cursor/rules/anchor-style.mdc`
3. run_sync_rules / `npm run sync:anchor`
4. 生成 `implementation-brief.md`
5. 构建 app shell、首页 intro surface、首个 MVP product page
6. 跑 `npx design-anchor audit`（缺失时用 `npx --yes design-anchor@latest audit`）并回到 Project Health
```

## 完成 Stage 5 之后

你拿到 `anchor-theme-decision.md`，所有设计阶段产物都齐了：

```
project/
├── concept.md              ← Stage 1
├── roadmap.md              ← Stage 2
├── features/
│   ├── upload-proposal.md
│   ├── ...
├── pages/
│   ├── projects.md
│   ├── ...
└── anchor-theme-decision.md ← Stage 5
```

**下一步是 Stage 6**——生成 `implementation-brief.md`，通过 Design-anchor 默认组件库、
tokens、MCP、AI rules 和 audit 进入受治理实现。2B-Design 不再在这里停止，而是切换
成实现编排和设计复审。

## 反 anti-pattern

我会拒绝这几种 vibe 决定：

- ❌ "我都喜欢，每个页面用不同 vibe" → 不行，会切碎产品视觉语言
- ❌ "先开始做，做了再选" → 不行，没 vibe 的 implementation 就是泥浆 build 法
- ❌ "客户喜欢这个色就用这个色" → 客户挑色 ≠ 设计决策。把客户偏好加成关键词，让我推荐 preset
- ❌ "先做明亮模式，暗色后面再说" → 暗色不是 P2，preset 都包含 seedDark，必须同时定
