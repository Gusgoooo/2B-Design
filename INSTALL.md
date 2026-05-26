# Installation Guide

`2B-Design` 是一份产品设计 pipeline Skill，覆盖**主流 AI 编码工具**。下面按工具
分别给安装步骤。

---

## Claude Code (推荐 — 一等公民)

Claude Code 自动加载 `~/.claude/skills/` 目录里所有 Skill。

```bash
# 1. 装 2B-Design
mkdir -p ~/.claude/skills/
git clone https://github.com/<your-org>/2b-design-skill.git ~/.claude/skills/2b-design

# 2. 验证
ls ~/.claude/skills/2b-design/SKILL.md && echo "✓ installed"

# 3. 重启 Claude Code, 它会自动 pick up
```

之后任何对话里说一句和**产品规划 / vibe / 设计风格 / B 端 SaaS / token / 治理**沾边
的话，Skill 就会触发。

---

## Cursor

Cursor 同样支持 Skill (路径稍不同)：

```bash
# Cursor 把 skill 放在 .cursor/skills/ 或 ~/.cursor/skills/
mkdir -p ~/.cursor/skills/
git clone https://github.com/<your-org>/2b-design-skill.git ~/.cursor/skills/2b-design

# 重启 Cursor
```

如果你的 Cursor 版本不直接支持 Skill 文件夹，可以把 `SKILL.md` 内容复制到
`.cursor/rules/2b-design.mdc` 作为 always-apply 规则。

---

## OpenAI Codex CLI

Codex CLI 自动读取 `AGENTS.md`：

### 全局生效

```bash
# 把 2B-Design 的 AGENTS.md 复制到 Codex 的 global agents 目录
cp /path/to/2b-design/AGENTS.md ~/.codex/AGENTS.md
```

### 项目级生效

```bash
# 复制到项目根的 AGENTS.md
cp /path/to/2b-design/AGENTS.md ./AGENTS.md
git add AGENTS.md
```

注意：项目里如果已经有 AGENTS.md（比如 design-anchor 自己生成的），需要**合并**，
不要直接覆盖。

---

## GitHub Copilot Chat

Copilot Chat 读 `.github/copilot-instructions.md`：

```bash
# 复制 AGENTS.md (内容相同) 作为 Copilot 指令
mkdir -p .github
cp /path/to/2b-design/AGENTS.md .github/copilot-instructions.md
```

---

## Continue / Cline / Zed

这几个工具都支持自定义 system prompt。配置方法看各自文档，把 `AGENTS.md` 内容塞到
"system prompt" / "additional context" / "rules" 字段。

---

## ChatGPT / Claude.ai web / Gemini / 其他无本地 skill 的工具

复制 `system-prompt.md`（紧凑版）的内容，作为对话开头的系统提示：

```
[把 system-prompt.md 全文粘进 system / 自定义指令]
```

后续对话中跟 AI 说："帮我从头梳理一个 B端 SaaS"，Skill 流程就会启动。

---

## 验证安装成功

随便起一个对话：

> "我有个 B 端 客户提案管理工具的 idea，帮我从头梳理一下"

如果 Skill 装对了，AI 会**主动**问你：
- 你要解决的问题是什么？（具体到角色 + 场景）
- 目标用户是谁？
- 价值主张是什么？
- 为什么现在？

并引用 `templates/1-brainstorm/concept-template.md` 走流程。

如果它直接给你写代码 / 讨论 framework 选择 / 跳过 Stage 1 → Skill 没生效，检查
安装路径。

---

## 让 AI 工具调用 npm 包

2B-Design 进入 Portal、preset 选择、生码治理、Project Health 或 audit 时，应使用
`design-anchor` npm 工具：

```bash
# 无需预装，首次运行会从 npm 下载
npx --yes design-anchor@latest start

# 如果项目已经安装
npx design-anchor start

# 用户只想作为组件库使用时，确认后再写入 package.json
npm install -D design-anchor@latest
npx design-anchor init

# 生码或修改后
npx design-anchor audit
```

如果 npm registry、网络或权限失败，AI 应报告失败命令，并继续给出手动执行清单。

---

## 升级

```bash
cd ~/.claude/skills/2b-design
git pull
```

或者重新 clone。

---

## 卸载

```bash
rm -rf ~/.claude/skills/2b-design
```

`design-anchor` npm 包不会被影响（它是单独安装的）。

---

## 故障排查

| 症状 | 原因 | 解决 |
|---|---|---|
| AI 直接给代码不走 lifecycle | Skill 没加载 | 重启 AI 工具，验证 SKILL.md 路径 |
| AI 走了 Stage 1 但跳过其它 | description 匹配度不全 | 强制说："请按 2B-Design 的 5 个 stage 走" |
| Stage 6 跑 `npx --yes design-anchor@latest start` 失败 | npx 拉不到包 | 看你的 npm registry 配置；试 `npm install -g design-anchor` |
| MCP 工具显示找不到 | design-anchor 还没装 / Cursor 没重启 | 跑 `npx design-anchor start` 后**重启** Cursor |

---

## 多工具共存

可以同时装在多个工具里。比如在 Claude Code 和 Cursor 同时装 2B-Design，两边都
能用。**不冲突**——Skill 是只读资产，不会互相覆盖。

如果你在不同工具里维护不同版本（不推荐），用 git tag 或者 fork 来管理：

```bash
~/.claude/skills/2b-design (main)
~/.cursor/skills/2b-design (custom-fork)
```
