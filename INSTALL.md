# 安装指南

> `2B-Design` 是一份面向中国产品设计师的 B 端 SaaS / dashboard / 内部工具产品设计 pipeline Claude Skill，覆盖**主流 AI 编码工具**。

**安装路径全部统一**：`~/.claude/skills/2b-design/`（Claude Code）或对应工具的 skills 目录。**只走 git clone**，不再提供 npm CLI 入口。

---

## Claude Code（一等公民，推荐）

Claude Code 自动加载 `~/.claude/skills/` 下所有 skill。

```bash
# 1. 装 2B-Design
mkdir -p ~/.claude/skills/
git clone https://github.com/Gusgoooo/2B-Design.git ~/.claude/skills/2b-design

# 2. 验证
ls ~/.claude/skills/2b-design/SKILL.md && echo "✓ installed"

# 3. 重启 Claude Code，它会自动 pick up
```

之后任何对话里说一句和**产品规划 / B 端 SaaS / dashboard / vibe / 设计风格 / Design-anchor 治理**相关的话，skill 就会触发。

---

## Cursor

```bash
mkdir -p ~/.cursor/skills/
git clone https://github.com/Gusgoooo/2B-Design.git ~/.cursor/skills/2b-design
```

如果你的 Cursor 版本不直接支持 Skill 文件夹，可以把 `SKILL.md` 内容复制到 `.cursor/rules/2b-design.mdc` 作为 always-apply 规则。

---

## OpenAI Codex CLI

Codex CLI 自动读取 `AGENTS.md`：

```bash
# 全局
cp ~/.claude/skills/2b-design/AGENTS.md ~/.codex/AGENTS.md

# 项目级
cp ~/.claude/skills/2b-design/AGENTS.md ./AGENTS.md
git add AGENTS.md
```

注意：项目里如果已经有 `AGENTS.md`（比如 design-anchor 主仓库生成的），需要**合并**，不要直接覆盖。

---

## GitHub Copilot Chat

```bash
mkdir -p .github
cp ~/.claude/skills/2b-design/AGENTS.md .github/copilot-instructions.md
```

---

## Continue / Cline / Zed / Qoder

这几个工具都支持自定义 system prompt。把 `AGENTS.md` 内容塞到"system prompt" / "additional context" / "rules" 字段。

---

## ChatGPT / Claude.ai web / Gemini / 其他无本地 skill 体系的对话工具

复制 `system-prompt.md`（紧凑版）的内容，作为对话开头的系统提示：

```
[把 system-prompt.md 全文粘进 system / 自定义指令]
```

后续对话中跟 AI 说："帮我从头梳理一个 B 端 SaaS"，pipeline 流程就会启动。

---

## 验证安装

随便起一个对话：

> "我有个 B 端客户提案管理工具的 idea，帮我从头梳理一下"

如果 skill 装对了，AI 会**首先**告知：

- 我们用 **React + Tailwind** 技术栈，组件库基于 **Design-anchor**（这是固定栈）
- 建议立刻把 design-anchor 装为项目依赖（`npm install -D design-anchor@latest`）让后续治理一等公民
- 唤起 Portal onboarding（`npx design-anchor start`）让你选品牌 preset

如果 AI 直接给你写代码 / 跳过 Stage 0 装包 → skill 没生效，检查安装路径。

---

## 让 AI 工具调用 design-anchor npm 包

skill 在 Stage 0（品牌前置）、Stage 5（主题校准）、Stage 6（生码）、Stage 8（健康治理）会调 design-anchor 工具：

```bash
# 首选：持久安装到项目（让 design-anchor 长期治理）
npm install -D design-anchor@latest
npx design-anchor init

# 已装后
npx design-anchor start    # Portal / onboarding
npx design-anchor sync     # 重生 token CSS + AI rules
npx design-anchor audit    # 检测违规

# 未装退路（首次会从 npm 下载）
npx --yes design-anchor@latest start
```

修改 `package.json` 或跑 `audit --fix` 前必须征求用户确认。

如果 npm registry / 网络 / 权限失败，AI 会报告失败命令并继续给手动 handoff 清单。

---

## 升级

```bash
cd ~/.claude/skills/2b-design
git pull
```

---

## 卸载

```bash
rm -rf ~/.claude/skills/2b-design
```

`design-anchor` npm 包不会被影响（它在用户项目里独立安装）。

---

## 故障排查

| 症状 | 原因 | 解决 |
|---|---|---|
| AI 直接给代码不走 lifecycle | skill 没加载 | 重启 AI 工具，验证 `SKILL.md` 路径在 `~/.claude/skills/2b-design/` |
| AI 直接进 Stage 1 不走 Stage 0 | description 触发不准 | 重启工具；说"按 2B-Design 的品牌前置 Stage 0 来" |
| Stage 0 跑 `npx --yes design-anchor@latest start` 失败 | npx 拉不到包 | 检查 npm registry 配置；试 `npm install -g design-anchor` |
| MCP 工具显示找不到 | design-anchor 还没装 / Cursor 没重启 | 跑 `npx design-anchor start` 后**重启**编辑器 |
| 唤起 Portal 后浏览器没自动开 | 端口被占 / firewall | 看终端打印的 URL，手动浏览器访问 |

---

## 多工具共存

可以同时装在 Claude Code 和 Cursor。**不冲突** —— skill 是只读资产，不会互相覆盖。

如果你在不同工具里维护不同版本（不推荐），用 git tag 或 fork 管理：

```bash
~/.claude/skills/2b-design (main)
~/.cursor/skills/2b-design (custom-fork)
```
