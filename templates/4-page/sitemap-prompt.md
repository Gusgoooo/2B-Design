# Stage 4 — 页面设计 / Sitemap

> 从 Stage 3 的 feature spec 推导出**页面清单**和**导航结构**。每个页面要明确「承载哪些 feature」+「用 design-anchor 的哪些组件」。

## 一、Feature → 页面的映射不是 1:1

常见误区：1 个 feature = 1 个页面。**不对**。

| 实际关系 | 例子 |
|---|---|
| 1 feature → 1 页 | "上传提案" → 上传 Dialog 弹窗（其实是 modal，不算独立页） |
| 1 feature 跨多页 | "权限管理" = 用户列表页 + 角色编辑页 + 邀请 modal |
| 多 feature → 1 页 | Dashboard = "看 KPI" + "看活动" + "快捷入口" 三个 feature 一起 |
| 0 feature → 1 页 | 空状态 / 错误页 / 加载页 / 404 / 登录页 |

## 二、推导步骤

### Step 1 — 从 user story 提取 "where"

每个 feature 的 user story 都隐含一个 "用户在哪儿操作"。例如：

> "As a PM, I want to upload a proposal..."

→ 用户从**项目主页**或**项目详情页**触发上传。**不是单独一个页面**。

### Step 2 — 列出所有"用户主动到达的位置"

```
用户视角的页面清单：
- 登录页 (/login)
- 注册页 (/signup)
- Dashboard (/) ← 默认登录后落地
- 项目列表 (/projects)
- 项目详情 (/projects/:id)
  - 标签：概览 / 提案 / 评论 / 设置
- 客户列表 (/clients)
- 客户详情 (/clients/:id)
- 设置 (/settings)
  - 账户 / 团队 / 集成 / 计费
- 帮助 (/help) — 静态文档
```

### Step 3 — 加上"系统自动到达的位置"

容易漏：

- 空状态（项目列表为空）
- 错误页 (404 / 500 / 网络断)
- 加载状态 (skeleton / spinner)
- 引导页 (新人 onboarding)
- 邮件 link 落地页（客户审批邮件点进来）

### Step 4 — 决定导航结构

3 种主流 B 端模式（选一种，别混）：

| 模式 | 适合 | design-anchor 组件 |
|---|---|---|
| **左侧 Sidebar** | 5+ 顶级页面 / 重浏览 | `Sidebar` + `NavigationMenu` |
| **顶部 Topbar** | ≤ 5 顶级页面 / 重内容 | `NavigationMenu` |
| **混合** | 顶部账户 + 左侧业务 | `Sidebar` + 顶部 `Avatar dropdown` |

## 三、最终 sitemap 输出格式

```markdown
# Sitemap: <产品名>

## 顶级导航
- [Sidebar 模式]
- 5 个顶级位置：Dashboard / Projects / Clients / Settings / Help
- 顶部右侧：搜索 + Avatar dropdown (账户 / 退出)

## 完整页面清单

### 公共页 (未登录)
- /login              登录页 (Form + SSO)
- /signup             注册页 (Form)
- /forgot-password    忘记密码 (Form)
- /invite/:token      接受团队邀请

### 主应用 (已登录)
- /                   Dashboard
- /projects           项目列表
- /projects/new       新建项目（modal，不是页面，但记一下）
- /projects/:id       项目详情
  - tab: overview     ← 默认
  - tab: proposals    提案列表
  - tab: comments
  - tab: settings
- /clients            客户列表
- /clients/:id        客户详情
- /clients/:id/edit   客户编辑（页 / drawer，TBD）
- /settings           设置
  - tab: account
  - tab: team
  - tab: integrations
  - tab: billing

### 系统页
- /404                未找到
- /500                服务端错误
- /maintenance        维护中
- /onboarding         新用户引导（首次登录强制）
- /empty              全局空状态指引（路由不到任何业务页）

## 导航 active state 规则
- /projects 和 /projects/:id 都让 "Projects" 高亮
- /settings/* 都让 "Settings" 高亮
- 第一级 active 用 primary bg；二级 active 用 muted bg

## 面包屑规则
- 项目详情：Projects > <Project Name>
- 客户详情：Clients > <Client Name>
- 设置子页：Settings > <Tab Name>
- Dashboard 不显示面包屑（它是根）
```

## 四、给每个页面附 component 选型

每个页面要写：用 design-anchor 哪些组件搭。例：

```markdown
## /projects (项目列表)

### 顶部
- 面包屑: 不显示 (一级页)
- 标题: "Projects" + 计数 Badge `text-2xl font-semibold`
- 右侧操作: [新建项目] (Button variant="default") + [筛选] (Button variant="outline")

### 内容
- 工具栏: 
  - 左: Input (搜索, 320px)
  - 中: 状态筛选 DropdownMenu (All / Active / Archived)
  - 右: 视图切换 ToggleGroup (Table / Grid)
  
- 主体: DataTable
  - 列: Checkbox / Name / Client / Status (Badge) / Last updated / Actions (DropdownMenu)
  - 分页: 25 条/页, sticky 底栏

### 状态
- 加载: Skeleton (5 行假数据)
- 空状态: empty.tsx 组件 + 引导 CTA "创建第一个项目"
- 错误: Alert variant="destructive" + 重试按钮

### 用到的 design-anchor 组件
- Button, Input, DropdownMenu, ToggleGroup, DataTable, Badge,
  Checkbox, Skeleton, Alert, Avatar, Pagination
```

## 五、不在 sitemap 里写的

- ❌ 颜色 (Stage 5 的 vibe 决定)
- ❌ 间距数值 (`p-4` / `gap-3` 不在 sitemap 写，让 vibe 决定)
- ❌ 动画细节 (vibe 决定)
- ❌ 字号数值 (vibe 决定)

## 完成 Stage 4 之后

你拿到 `pages/` 目录，每个页面一份带 layout + component 选型的文档：

- 每个页面 spec 喂给 AI，它就能精准实现
- 进 Stage 5 选 vibe preset
- Stage 6 hand-off 到 design-anchor 后，AI 读 page spec + style.md，写出来的代码自然合规
