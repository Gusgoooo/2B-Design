# Stage 3 — 功能设计 / Feature Spec

> Stage 2 出来的 MVP feature 列表，每一个都要写成**AI 能实现 + 测试能验证**的 spec。
> AI 写代码"过度发挥"的最大原因是 spec 太宽——这个模板把每个 feature 边界画死。

## Spec 必含 6 个块

每个 feature 一份 `features/<slug>.md`，6 个段落都不能省。

### 1. User story

```
As a <role>, I want to <action>, so that <outcome>.
```

例：

```
As a 设计公司的 PM，
I want to 把 Figma 提案上传到产品并关联到客户，
so that 客户回复时我知道他批的是哪一版。
```

### 2. Trigger / preconditions

什么时候用户进入这个 feature？

```
Trigger: 用户点击 "上传新提案" 按钮 (在 Project 页面顶部)
Preconditions:
  - 用户已登录
  - 用户已创建至少一个 Client
  - 浏览器支持文件上传 (modern browsers)
```

### 3. Happy path (按步骤)

理想路径：

```
1. 用户点击 "上传新提案"
2. 弹出 Dialog：选文件 / 关联 Client / 添加描述
3. 用户选 .pdf / .fig 文件 (≤ 50MB)
4. 用户从 Client dropdown 选一个 (或新建)
5. 用户填描述 (可选，max 200 chars)
6. 用户点 "确认上传"
7. 文件上传 → 显示进度条
8. 上传完成 → Dialog 关闭 + Toast 显示 "上传成功"
9. 列表刷新，新提案出现在最顶部，状态 = "Pending review"
```

### 4. Edge cases (至少 3-5 项)

**关键**：spec 不写 edge case = AI 自由发挥 = 泥浆

```
Edge cases:
  E1. 文件 > 50MB → 上传按钮禁用 + Tooltip 提示 "文件过大"
  E2. 网络中断 → 上传失败 → Toast 错误 + Dialog 保留用户输入，让用户重试
  E3. 同名文件 → 不阻断，自动加 v2 后缀
  E4. Client dropdown 空 → 显示 "新建 Client" 链接 inline
  E5. 上传中关闭 Dialog → 中断上传 + Toast "已取消"
```

### 5. Acceptance criteria (3-7 项可测断言)

每条都得是**测试能 pass / fail 的断言**：

```
AC1. 上传 .pdf 文件成功后，列表显示该提案，状态字段 = "Pending review"
AC2. 上传 .docx 文件被拒绝，显示提示 "仅支持 .pdf / .fig"
AC3. 上传期间用户点 "Cancel"，文件不入库，列表不刷新
AC4. 文件 50MB+1byte 触发禁用 + Tooltip
AC5. 上传成功 5s 内 Toast 自动关闭
```

### 6. Out of scope (主动列出不做的)

```
Out of scope (本 feature 不做):
  - 文件版本对比 (V1+)
  - 提案在线预览 (V1+)
  - 多文件批量上传 (V1+)
  - 客户登录审批 (另一个 feature)
  - PDF 内容分析 / OCR (V2+)
```

## 写好 spec 后的检查

我会帮你过这几条：

- [ ] User story 能在一行内说清，role / action / outcome 都具体
- [ ] Trigger 写明"用户从哪个页面 / 点哪个按钮"进入
- [ ] Happy path 步骤 ≤ 10 步（多了说明 feature 太大要拆）
- [ ] Edge case ≥ 3 项，每项都说明系统**怎么响应**
- [ ] Acceptance criteria 每条都能写成自动化测试
- [ ] Out of scope ≥ 2 项 (没有 = 边界没画清)
- [ ] 没有 "Make it nice / smart / smooth" 这种**主观词**

## 反 anti-pattern

AI 看到 spec 容易自由发挥，**写这些词的 spec 等于没写**：

- ❌ "用户体验良好" → 改成具体 AC
- ❌ "支持各种文件格式" → 改成 "支持 .pdf / .fig，其它拒绝并提示"
- ❌ "保证安全" → 改成具体的 "文件大小 ≤ 50MB; mime-type 校验"
- ❌ "界面美观" → Stage 5 的 vibe preset 决定，不在 feature spec 里
- ❌ "高性能" → 改成具体的 SLA "上传 < 30s for 50MB"

## 模板：每个 feature 复制一份

```markdown
# Feature: <feature-name>

**Status**: Draft / Reviewed / Implemented
**MVP tier**: M / S / C / W
**Estimate**: <Nd>

## User story
As a ___, I want to ___, so that ___.

## Trigger / preconditions
- Trigger:
- Preconditions:

## Happy path
1.
2.
3.

## Edge cases
- E1.
- E2.
- E3.

## Acceptance criteria
- [ ] AC1.
- [ ] AC2.
- [ ] AC3.

## Out of scope
-
```

## 完成 Stage 3 之后

你拿到 `features/` 目录里**每个 MVP feature 一份 spec**，可以：
- 喂给 AI 让它实现，AI 不会过度发挥（边界已经画死）
- 给 QA 写测试，每条 AC 都对应一个测试
- 进入 Stage 4 (Page IA)，看 feature 怎么映射到页面 / 用什么组件
