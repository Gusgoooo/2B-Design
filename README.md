# 2B-Design

面向长期 B 端产品的 AI 设计 Skill。

如果你没有 B 端设计师，2B-Design 可以帮助 AI 从 PRD 开始梳理产品方案、页面结构、交互与视觉方向，并通过 Design-Anchor 的组件库、token、spec 和 audit 管线，让后续 AI Coding 不再把页面做散。

## 它解决什么

很多设计类 Skill 适合一次性生成漂亮页面，但长期产品真正困难的是：

- PRD 没被拆成可执行的页面结构
- AI 每次生成的组件、颜色、间距、圆角都不一致
- 首页好看，功能页却很难长期维护
- 多轮 AI Coding 后，B 端后台逐渐泥浆化

2B-Design 的目标不是只生成一张图，而是建立一条完整管线：

```text
PRD 梳理
→ B 端产品设计判断
→ 页面 IA / 交互 / 状态
→ 品牌风格 preset
→ Design-Anchor 组件与 token 约束
→ AI Coding
→ audit / Project Health 治理
```

## 和 Design-Anchor 的关系

2B-Design 是设计与编排层，负责让 AI 像 B 端产品设计师一样思考。

Design-Anchor 是实现与治理基座，提供：

- 默认 React + Tailwind 组件库
- token 派生系统
- 组件 `spec.json` 协议
- Cursor / Claude Code / Copilot / Qoder 规则
- MCP Server
- `anchor audit`
- Project Health

推荐路径是：新产品直接使用 Design-Anchor 默认组件库；已有项目只支持导入 React + Tailwind `.tsx` 组件库后再治理。

## 适合谁

- Product Designer / UX Designer / UI Designer
- 没有专职 B 端设计师的创业团队
- 需要快速搭建 SaaS、后台、Dashboard、内部工具的团队
- 想让 AI Coding 长期保持组件一致性的工程团队
- 正在把已有 React + Tailwind 组件库治理起来的设计系统团队

## 仓库结构

```text
.
├── SKILL.md                         # Claude / Codex Skill 主文件
├── AGENTS.md                        # 通用 AI agent 指令镜像
├── system-prompt.md                 # 适合复制到 ChatGPT / Claude Web 的系统提示
├── presets/                         # B 端风格预设
├── templates/                       # PRD、Roadmap、Feature、Page IA 等模板
├── scripts/
│   ├── apply-preset.mjs             # 应用 preset 到 Design-Anchor
│   └── eject-preset.mjs
└── releases/
    └── 2b-design-skill-0.3.8.tgz
```

## 安装方式

### Claude Code

```bash
mkdir -p ~/.claude/skills
git clone https://github.com/Gusgoooo/2B-Design.git ~/.claude/skills/2b-design
```

### Codex

```bash
mkdir -p ~/.codex/skills
git clone https://github.com/Gusgoooo/2B-Design.git ~/.codex/skills/2b-design
```

### Cursor / Qoder / 其他 AI Coding 工具

把 `AGENTS.md` 放到项目级 AI 指令中，或把 `system-prompt.md` 作为系统提示使用。

### ChatGPT / Claude Web

复制 `system-prompt.md` 的内容作为对话开场，然后贴入 PRD 或产品想法。

## 快速使用

新产品：

```text
使用 2B-Design 帮我根据这份 PRD 设计一个 B 端 SaaS 产品。
请从产品方案、页面结构、交互、视觉 preset 到 Design-Anchor 组件约束完整推进。
```

已有 React + Tailwind 项目：

```text
我有一个已有 React + Tailwind 组件库，想导入 Design-Anchor 治理。
请使用 2B-Design 帮我先评估组件来源、迁移路径和 Project Health 目标。
```

只使用组件库：

```bash
npx --yes design-anchor@latest start
```

或安装到项目：

```bash
npm install -D design-anchor@latest
npx design-anchor init
```

> 写入依赖或自动修复前，2B-Design 会要求 AI 先让用户确认。

## Skill 运行示例

用户输入：

```text
我想做一个客户工单管理后台，目标用户是客服主管。
需要工单列表、筛选、SLA 风险、批量分派和详情页。
```

2B-Design 会推进：

```text
1. 拆解用户角色和核心任务
2. 规划 MVP 页面和信息架构
3. 输出工单列表页的模块、状态、空态、批量操作和权限边界
4. 根据产品密度推荐 SaaS Style 01 或 Google Style
5. 使用 Design-Anchor 默认组件库建立 Anchor Component Map
6. 生成 implementation brief
7. 指导 AI Coding 使用 @design 组件和 token
8. 生成后运行 anchor audit / Project Health 做治理
```

## 风格预设

内置 preset 面向 B 端产品和长期 AI Coding：

- `saas-style-01`
- `google-style`
- `hud-dark-style`
- `luxury-style`
- `saas-dark-02`
- `web3-dark`
- `minimal-dark`
- `linear`（SaaS Dark 01 / Linear Modern）
- `vercel-geist`
- `stripe`
- `notion-soft`
- `brutalist`
- `glass`

Preset 不是硬编码样式。2B-Design 会尽量把颜色、间距、圆角、字体、阴影、动效角色等转成 Design-Anchor token、组件变体和 AI 规则，让首页和产品内页保持一致。

## Design-Anchor npm 调用协议

当需要 Portal、组件初始化、token 同步、审计或 Project Health 时，2B-Design 会引导 AI 调用：

```bash
npx --yes design-anchor@latest start
npx design-anchor sync
npx design-anchor audit
```

自动修复使用：

```bash
npx design-anchor audit --fix
```

但必须在修改前让用户确认。

## 版本

当前版本：`0.3.8`

主要能力：

- PRD-driven preset routing
- intro / product 双模式
- Design-Anchor token-first prompt 改造
- React + Tailwind 旧组件库导入路径
- AI Coding 后 audit / Project Health 治理闭环

## License

MIT
