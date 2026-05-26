# Hard Rules —— 不可妥协的硬性约束

> 这些规则在任何 stage 都生效。违反就是产品质量损失，应主动 push back 用户。

## 技术栈固定（不给选项）

- ✅ **技术栈：React + Tailwind**。skill 主动告知用户、主动应用
- ❌ **不要询问**用户要不要 Vue / Angular / Svelte / styled-components / CSS Modules 等替代
- ❌ **已有项目若不是 React + Tailwind**，skill 不支持，建议用户考虑 Anchor 之外的方案
- ✅ 组件库：Design-anchor 默认组件库（新项目首选）

## 品牌前置（Stage 0 强制）

- ✅ **首次进入 skill 必须先走 Stage 0**：装 design-anchor + 跑 Portal onboarding + 选品牌 preset
- ✅ Stage 0 完成后再进入 Stage 1+ 的产品梳理
- ❌ **不要让用户在没有品牌 scope 的情况下**梳理概念 / MVP / 功能 / 页面
- ❌ **不要把 Stage 5 当成"风格决策"** —— 它现在是「主题校准」，基于 Stage 4 实际页面密度反推微调

## NPM 工具调用契约

- ✅ **首选：长期持久安装** —— `npm install -D design-anchor@latest` + `npx design-anchor init`，让 design-anchor 在项目里长期治理
- ✅ 退路：未持久安装时用 `npx --yes design-anchor@latest <command>`
- ✅ 已持久安装时用本地 `npx design-anchor <command>`
- ❌ **不要假装跑了** Portal / sync / audit / Project Health
- ❌ **不要在用户确认前**修改 `package.json` 或跑 `audit --fix`
- ✅ 命令失败时报告确切失败命令并给手动 handoff 清单

## 组件库与生码契约

- ❌ **不要发明组件**当 Design-anchor 已有对应组件时
- ❌ **不要在页面 spec 里写视觉常量**（hex / 任意 spacing / 任意 radius）；视觉走 Stage 0 锁定 + Stage 5 校准
- ❌ **不要用原生** `<button>` / `<input>` / `<table>` / `<dialog>` 当对应 Design-anchor 组件存在时
- ✅ 只用语义 token 类（`bg-primary` / `text-muted-foreground` / `border-border`）
- ✅ 从 `@design` 或配置的 Design-anchor 别名 import 组件

## 产品设计契约

- ❌ **不要跳过产品上下文**当跳过会让页面变成 generic 模板
- ❌ **不要接受空话价值主张**（"更高效" / "AI 驱动" / "为所有人"）—— 主动 push back 到具体场景
- ❌ **不要让用户在空白审美问题里挑风格** —— PRD-driven preset 推荐 + Portal 二次确认
- ❌ **不要漏 loading / empty / error / partial 状态** —— 漏 = AI 自由发挥 = 泥浆

## 复审与修复契约

- ❌ **不要 auto-fix 用户代码**未经确认
- ❌ **不要静默改 token / spec** —— 走 Design-anchor 工具链并确认
- ✅ 实现后必须跑 `npx design-anchor audit`，未跑要解释原因

## 长期治理契约

- ✅ Stage 8 不是收尾，是持续节奏：建议用户把 `audit` 加进 CI / pre-commit / 周会
- ✅ Project Health 是长期指标，不是一次性报告
- ✅ design-anchor 是项目的长期治理基线，不是一次性脚手架

## 与其它 skill 的边界

- ✅ 微交互、可访问性、PR 自动化、指标可以交给下游 skill
- ❌ 下游 skill 不能替代 Design-anchor 的组件 / token / audit 契约
