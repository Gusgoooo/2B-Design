# Surface Mode Policy —— intro / product 双模式

> 一套 preset，两种表达强度。让 B 端首页有 marketing 张力，让产品内页保持治理稳定，但两者共享同一 token 与组件语言。

## 两种模式

### intro mode

**适用页面**：homepage / landing / onboarding / pricing / docs showcase / 品牌叙事 / launch page

**表达策略**：
- 可以使用原 prompt 的**完整视觉效果**（hero 渐变、装饰图形、连续动效、富媒体）
- 但效果必须通过 **Design-anchor 组件、命名 variant、page-section spec** 表达，**不能用原生 CSS / 硬编码 hex / 任意 spacing**
- 即使是首页，token 化的细节（color / spacing / radius / typography / shadow / motion role）**仍要走 Design-anchor token 或命名 variant**

**目标**：让首页有 marketing 气势，但任何想搬到产品内页的视觉元素都能直接复用。

### product mode

**适用页面**：app 内页 / governance / admin / forms / tables / dashboards / settings / 重复性 B 端 workflow

**表达策略**：
- 同一套 token 和组件人格
- **降低装饰、连续动效、复杂背景、布局位移**
- 优先稳定的 Design-anchor 组件、清晰状态、语义 token、可预期密度
- 当下方 preset/style.md 写 "Forbidden" 时，product mode 严格执行，除非该规则是为了可访问性 / 安全 / 组件所有权

**目标**：让密集数据扫读高效，让 power user 操作可预测。

## token 一致性硬约束

无论 intro 还是 product，**任何可 token 化的视觉细节都必须走 Design-anchor token / 命名 variant**：

- 颜色 → seed / customSeeds / variant 命名色
- 间距 → sizeUnit 派生 / token 命名间距
- 圆角 → borderRadius token
- 字体 → font token
- 阴影 → shadow role token
- 动效 → motion role token

这是首页与产品内页**视觉血缘**的保证。任何"首页例外"都会让产品内页失去参照系。

## 决策表

| 页面类型 | 模式 |
|---|---|
| Home / Landing | intro |
| Onboarding | intro |
| Pricing | intro |
| Docs showcase / 文档 hero | intro |
| 品牌叙事 / launch | intro |
| Dashboard | product |
| Settings | product |
| Forms | product |
| Tables / Lists | product |
| Admin / Governance | product |
| Repeated B2B workflow | product |

## 给每个 preset 的应用

当前 skill 只保留 Design-anchor Portal onboarding 中展示的 6 个 preset：

- `linear`
- `stripe`
- `saas-style-01`
- `google-style`
- `minimal-dark`
- `hud-dark-style`

这些 preset 的 `style.md` 顶部都内联了简化版本的 surface mode 段；本文件是 canonical 版本。

如果 preset style.md 与本文件冲突，**以本文件为准**。
