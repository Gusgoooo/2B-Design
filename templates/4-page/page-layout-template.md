# Stage 4 — 单页面布局 + Anchor Component Map

> 给单个页面写「布局结构 + 组件选型 + Design-anchor 映射」spec，让 AI 能直接实现，
> 并且在生成过程中使用默认组件库和 token 协议保持一致。
> 复制这份模板，**每个页面填一份**到 `pages/<page-slug>.md`。

## 模板

```markdown
# Page: <name> (<route>)

**Status**: Draft / Reviewed / Implemented
**Hosts features**: <feature-1>, <feature-2>, ... (来自 Stage 3)

## Purpose
（1 句话——这页用户进来要做什么）

## Top-level layout

```
┌─────────────────────────────────────────┐
│  App header / top navigation             │
├──────────┬──────────────────────────────┤
│          │                              │
│ Sidebar  │  Main content                │
│          │  data-dense / scrollable      │
│          │                              │
└──────────┴──────────────────────────────┘
```

**Layout pattern**: app shell / sidebar workspace / single-column dashboard / split detail

**Used components**: Sidebar, NavigationMenu, ScrollArea, [其他]

## Sections (top to bottom in main content)

### Section 1 — Header
- 面包屑: <breadcrumbs>
- 标题: "<page title>" + 计数 / 状态 Badge
- 右侧 actions: <buttons>

**Components**: Badge, Button (variants...)

### Section 2 — Toolbar (filter / search / view)
- 左: Input (搜索, compact toolbar size) - placeholder "搜索 ___"
- 中: <filter dropdowns>
- 右: <view toggles>

**Components**: Input, DropdownMenu, ToggleGroup

### Section 3 — Main content
- <主体内容描述>
- 数据来源: <api endpoint or data shape>
- 列 / 卡 / 字段:
  - <field 1>: <component / format>
  - <field 2>: ...
- 交互:
  - 点击行 → <happens>
  - hover → <happens>
  - 右键 → <happens>

**Components**: <main components>

### Section 4 — Footer / Pagination
- 分页: <pagination config>
- 全选 actions: <bulk actions>

**Components**: Pagination, Button

## State coverage

每个页面**必须**覆盖这 4 种状态。**不写 = AI 自由发挥 = 泥浆**。

### Loading
- Skeleton 假数据 (5 行 / 3 卡 / 等)
- 加载时间 > 5s 显示 "正在加载，可能需要一些时间"
- **Components**: Skeleton

### Empty (没数据)
- Empty 组件内使用 lucide-react icon，颜色用 `text-muted-foreground`
- 标题: "<空状态标题>"
- 描述: "<引导文字>"
- CTA: Button (创建第一个 X / 邀请同事 / 等)
- **Components**: Empty (base/empty.tsx)

### Error
- Alert variant="destructive" 顶部
- 标题: "无法加载 <资源名>"
- 描述: "<具体错误信息或通用 fallback>"
- 重试按钮
- **Components**: Alert, Button

### Partial (部分加载 / 网络慢)
- 已加载部分正常显示
- 未加载部分显示 Skeleton
- 顶部小提示 "加载中..."

## Responsive

- ≥ 1280px: 完整布局
- 768-1279: Sidebar 折叠成 icon-only (`SidebarTrigger` toggle)
- < 768: 不强制支持 (B 端可以接受)，但页面不能崩

## Keyboard shortcuts (B 端 power user 关心)

- Cmd+K: 全局搜索 (Command 组件)
- N: 新建 (在列表页)
- /: 焦点到搜索框
- Esc: 关闭 modal / 取消选择

## Accessibility

- 所有 button 必须有 `aria-label` 或 visible label
- 表格行必须可键盘导航
- focus order 合理 (从上到下，从左到右)
- 颜色对比 ≥ AA

## 用到的 design-anchor 组件 (汇总)

```
- Sidebar
- Topbar / NavigationMenu
- Button (default / outline / ghost variants)
- Input
- DropdownMenu
- DataTable (or Card grid for grid view)
- Badge
- Avatar
- Skeleton
- Empty
- Alert
- Pagination
- Command (for cmd+K)
- Tooltip
- ...
```

## Anchor Component Map

| UI need | Use Design-anchor component | Notes |
|---|---|---|
| Primary action | Button | `variant="default"`；禁止 raw `<button>` |
| Search/filter | Input, Select, DropdownMenu | compact toolbar |
| Data list | DataTable | 必须覆盖 loading / empty / error |
| Confirmation | AlertDialog | destructive 只用于不可逆操作 |
| Status | Badge | variant 按语义选择 |
| Empty state | Empty | CTA 使用 Button |

## Token / style constraints

- 不写 hex 色值，使用 `bg-primary` / `text-muted-foreground` / `border-border` 等语义 token。
- 不写任意间距，例如 `p-[13px]`。
- 不在页面 spec 里指定视觉常量；视觉由 Stage 5 的 token decision 决定。

## Out of scope (本页不做)

- <feature> (在 page-Y 上做)
- <feature> (V1+ 才做)
- <feature> (打印模式不做，先看屏幕)
```

## 实例：Projects 列表页

```markdown
# Page: Projects (/projects)

**Status**: Draft
**Hosts features**: feature-create-project, feature-list-projects, feature-search-projects, feature-archive-project

## Purpose
让 PM 看到所有项目，能快速找到、筛选、新建。

## Top-level layout

Standard 双栏 (Sidebar + Main)。

## Sections

### Header
- 面包屑: 不显示 (一级页)
- 标题: "Projects" + count Badge
- 右侧: [+ New Project] (Button default) + [...] DropdownMenu (Import / Archive view)

### Toolbar
- Input (search, compact toolbar width, placeholder "Search projects...")
- DropdownMenu: Status (All / Active / Archived / Draft)
- DropdownMenu: Owner (All / Me / 团队成员)
- ToggleGroup (Table / Card)

### Content (default = Table view)
- DataTable
- 列: Checkbox / Name (text-foreground font-medium) / Client (Avatar + name) / Status (Badge variant by status) / Updated (relative time) / Actions (DropdownMenu)
- 行 click → 跳 /projects/:id
- 行 hover → row bg-muted/40 + Actions 显示 (默认隐藏)

### Bulk actions (有选中时)
- Sticky bar 底部
- 选中数 + [Archive] [Move to client] [Delete]

### Pagination
- 25 条/页 默认
- Sticky 底栏

## State coverage

### Loading
- DataTable 5 行 Skeleton

### Empty (无项目)
- Empty 组件
- icon: FolderOpen size=48
- 标题: "No projects yet"
- 描述: "Create your first project to get started."
- CTA: [Create project] button

### Error
- Alert variant="destructive" 顶部
- "Failed to load projects. Retry?"

## 用到的 design-anchor 组件
- Sidebar, NavigationMenu, Avatar
- Button, Input, DropdownMenu, ToggleGroup
- DataTable, Badge, Checkbox
- Empty, Skeleton, Alert
- Pagination, Command (for cmd+K to focus search)

## Anchor Component Map

| UI need | Use Design-anchor component | Notes |
|---|---|---|
| Create project | Button | default variant |
| Search | Input | slash shortcut focuses it |
| Status/owner filter | DropdownMenu | no raw select |
| Main list | DataTable | Checkbox, Badge, Avatar cells |
| Empty state | Empty | CTA uses Button |
| Error | Alert | destructive variant |

## Out of scope
- Project templates (V1+)
- Project comparison (V2+)
- Bulk client reassignment (V1+)
```

## 给每个页面填完后

每个页面一份 `<slug>.md`，丢给 AI 让它实现：

```bash
# Cursor / Claude Code 对话
"读 pages/projects.md，用 design-anchor 的组件实现这个页面。
路径放在 src/pages/Projects.tsx。完成后跑 npx design-anchor audit 验证；如果本地没有 design-anchor，用 npx --yes design-anchor@latest audit。"
```

AI 会：
- 用你列出的组件 (不会重新发明)
- 覆盖你列出的状态 (不会漏 loading/empty/error)
- 走你写的交互 (不会自由发挥)

这就是 2B-Design 的核心价值——**让 AI 实现的时候 spec 已经精到不需要它创造**。
