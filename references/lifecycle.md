# Lifecycle —— 2B-Design 9 个阶段

> **立足点**：以**产品设计师**的视角，帮用户**梳理页面结构框架与内容**（Stage 1-4），让 **Design-anchor npm 包**从 Stage 0 就成为项目的**长期治理基线**与**品牌锚点**。
>
> **技术栈固定**：**React + Tailwind**。这不是给用户的选项，是 skill 的前置事实。skill 主动告知用户、主动应用，**不询问**「要不要 Vue / Angular / styled-components / CSS Modules」等替代。已有项目若不是 React + Tailwind，skill 不支持迁移。
>
> **核心策略：品牌前置**。在用户开始梳理页面之前，先让 design-anchor 装进项目、Portal onboarding 跑起来、品牌 preset 定下来。之后的概念、MVP、功能、页面、生码全部以**已定的品牌为 scope**进行，避免"做完所有梳理才发现风格不对要返工"。
>
> 用户可以从任意 stage 进入，但若上游 artifact 缺失会导致下游变成猜测，应主动补齐。

## 阶段总览

```
Stage 0 → Stage 1 → Stage 2 → Stage 3 → Stage 4 → Stage 5 → Stage 6 → Stage 7 → Stage 8
品牌前置   概念框定   MVP 路线   功能规格   页面 IA    主题校准   受治理生码  设计复审   健康治理
(装包+品牌)                                          (微调)
```

| Stage | 产物 | 价值 |
|---|---|---|
| **0 品牌前置** | `anchor-project-mode.md` + `anchor-theme-decision.md`（初稿）+ 项目内 `.anchor/` + `package.json` 加 design-anchor 依赖 | 装包 + 跑 Portal onboarding + 选定品牌 preset，让后续所有梳理在已定品牌 scope 内 |
| 1 概念框定 | `concept.md` | 明确用户、场景、痛点、价值主张（在品牌语境下） |
| 2 MVP 路线 | `roadmap.md` | MVP / V1 / V2+ 范围决策 |
| 3 功能规格 | `features/*.md` | AI 可实现、QA 可验证 |
| 4 页面 IA | `pages/*.md` | 页面结构 + Anchor Component Map（用 Stage 0 的品牌 preset 组件） |
| **5 主题校准** | `anchor-theme-decision.md`（终稿） | 基于实际页面密度反过来微调 token，不是从头选 preset |
| 6 受治理生码 | `implementation-brief.md` + 代码 | 用默认组件库 + 语义 token 生成 UI |
| 7 设计复审 | `design-review.md` | 一致性、可用性、状态覆盖检查 |
| 8 健康治理 | Project Health 报告 | 组件采用、token、AI rule、迁移 backlog |

## 触发词 → Stage 路由表

| 用户说 | 进入 Stage |
|---|---|
| "想做个产品" / "新产品" / "新项目" / "已有项目" / "上传组件库" / "开始" | **0**（品牌前置必做）|
| "我有个 idea" / "B 端" / "SaaS" / "做个 dashboard"（且 Stage 0 已完成） | 1 |
| "MVP" / "路线图" / "roadmap" / "scope" / "先做哪些" / "优先级" | 2 |
| "feature" / "功能细化" / "user story" / "验收标准" | 3 |
| "页面结构" / "页面设计" / "IA" / "sitemap" / "用什么组件" / "页面布局" | 4 |
| "风格不对" / "微调 token" / "调整 density" / "校准主题" | 5 |
| "开始做" / "build" / "实现页面" / "scaffold" / "生码" / "generate UI" | 6 |
| "review" / "看一下设计" / "polish" / "体验检查" / "视觉检查" | 7 |
| "health" / "治理" / "长期维护" / "组件采用" / "drift" / "漂移" | 8 |

**重要**：当用户首次进入 skill（说"想做个产品"），**先走 Stage 0**（装包 + Portal + 品牌），再走 Stage 1。不要直接跳到 Stage 1 让用户描述概念。

## 阶段间的硬性依赖

- **Stage 0 是几乎所有路径的入口**：除非用户明确说"概念已定，只想梳理页面"等局部任务，否则首次进入必须走 Stage 0
- Stage 5 现在是「校准」而非「决策」：依赖 Stage 0 已选 preset + Stage 4 已出页面 spec，根据实际密度反推 token 微调
- Stage 6 必须验证 0-4 所有 artifact 存在
- Stage 7 / 8 在 Stage 6 产出 UI 之后才有意义

## 为什么品牌前置？

1. **让用户最早用上 design-anchor**：Stage 0 装包 + Portal = npm 包的最佳推广时机
2. **后续梳理在品牌 scope 内**：Stage 4 页面组件映射时，AI 已经知道是用 `linear` 紧凑还是 `stripe` 宽松，组件选择会更准
3. **避免返工**：传统流程"先想清楚再选风格"的痛点是 ——— 概念 / MVP / 功能都做了，最后发现品牌定位完全不匹配，整套页面要重画
4. **品牌是产品锚点**：B 端 SaaS 的视觉决策影响信任感与定价信号，越早定越好

## 完整行为规则

每个 stage 的具体行为见 `references/stage-rules.md`。
