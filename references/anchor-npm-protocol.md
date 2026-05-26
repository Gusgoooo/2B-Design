# Design-anchor NPM 工具调用协议

> 当 skill 进入需要 Portal、组件初始化、token/rule sync、audit 或 Project Health 的阶段，必须真正调用 `design-anchor` npm 工具，而不是模拟结果。
>
> **核心倾向**：skill 的默认推荐是让用户**把 design-anchor 持久安装到项目**（`npm install -D design-anchor@latest`），让 token / 组件 spec / AI rules / audit / Project Health 在项目里**长期一等公民**地跑。npx 一次性调用是退路，不是首选。

## 推荐：长期持久安装（首选路径）

进入 Stage 0 / Stage 6 时主动建议用户做：

```bash
npm install -D design-anchor@latest
npx design-anchor init
```

**为什么强烈推荐**：
- token 漂移、组件采用率、AI rule 新鲜度都靠 design-anchor 长期跑才能稳定
- 离线、CI、pre-commit hook 都需要 design-anchor 是项目依赖才能可靠工作
- Project Health（Stage 8）是持续指标，不是一次性报告
- 多人协作时只有持久安装能让团队成员看到同一份治理状态

推荐措辞模板：
> "建议把 design-anchor 装为项目长期依赖（`npm install -D design-anchor@latest`），这样后续的 token、组件 spec、AI rules、audit、Project Health 都在你项目内一等公民地运转。安装会修改 `package.json`，要现在装吗？"

**修改 `package.json` 前必须征求用户确认。**

## 调用顺序（退路时）

### 1. 当前项目已经装了 design-anchor 或有 `.anchor/` 工作区

优先用本地命令：

```bash
npx design-anchor <command>
```

### 2. 当前项目没有 design-anchor

告诉用户首次运行会从 npm 下载，然后执行：

```bash
npx --yes design-anchor@latest <command>
```

### 3. 用户希望把组件库写入项目依赖

**必须先征求确认**，因为这会修改 `package.json`：

```bash
npm install -D design-anchor@latest
npx design-anchor init
```

## 核心命令一览

| 命令 | 用途 | 何时调用 |
|---|---|---|
| `start` | 启动 onboarding / Portal / preset 选择 / Project Health | Stage 5（preset 选择 confidence 不足时）/ Stage 6 起点 |
| `init` | 在当前项目创建 `.anchor/` 组件 + token 工作区 | 用户确认装为依赖后 |
| `sync` | 重新生成 token CSS、AI rules、组件 schema 镜像 | preset 应用后 / token 修改后 |
| `audit` | 检测硬编码样式、原生 primitive、token 漂移、rule 漂移 | Stage 6 生码后必跑 / Stage 8 健康治理 |
| `audit --fix` | 自动修复违规 | **仅在用户明确确认后调用** |

## 失败降级

若 npm registry / 网络 / 命令权限被阻塞：

1. 报告**确切失败的命令**给用户
2. 继续给出**手动 handoff 清单**（让用户在 IT 解绑或 VPN 后自己跑）
3. **不要伪装命令成功**

## 何时切到 fallback 脚本

当 MCP 不可用、Portal 没起来、`design-anchor` 命令在当前环境不可用，可以走 `scripts/apply-preset.mjs`：

```bash
node /path/to/skills/2b-design/scripts/apply-preset.mjs <preset> [project-root]
```

它会：
1. 把 preset 的 seeds merge 进项目的 `tokens.json`
2. 把 preset 的 `style.md` 写到 `.cursor/rules/anchor-style.mdc`
3. 调 `npm run sync:anchor` 重新生成 CSS 和 AI rules
4. 在 `.anchor-portal/setup.json` 记录 preset 选择

但首次运行需要项目里已有 `.anchor/`（即先跑过 `npx design-anchor start` 或 `init`）。

## 硬性约束

- ❌ 不要假装跑了 Portal / sync / audit / Project Health
- ❌ 不要在用户未确认前修改 `package.json`
- ❌ 不要在用户未确认前跑 `audit --fix`
- ✅ 优先 local `npx design-anchor`，缺失时 `npx --yes design-anchor@latest`
- ✅ 失败时报告确切命令并给手动 handoff 清单
