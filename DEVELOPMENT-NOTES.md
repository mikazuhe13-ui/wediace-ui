# 开发笔记（Wediace 定制分支）

本文件记录本分支相对上游做的定制改造、踩过的坑与可复用的排查方法。
上游仓库：`WYH66666666/DSH-Transparent-UI-Plugin`（作者因学业已停止维护）。

---

## 一、产物结构速查

| 文件 | 作用 | 是否运行时加载 |
| --- | --- | --- |
| `lib/client.js` | **浏览器插件主体**（单文件 rolldown 产物，内联 CSS） | ✅ 是 |
| `cordis.patch.yml` | 注册补丁层，把插件插进 profile 的浏览器 roster | ✅ 是（DSH 启动时读） |
| `package.json` | 包名 / `dsh.bundle.patch` / `dsh.client` 声明 / `files` 白名单 | ✅ 是 |
| `lib/index.js` · `lib/invariant.js` | Host 侧入口 / invariant 同伴插件 | 视情况 |
| `src/**` | TypeScript 源码镜像（**改它不会影响运行时**） | ❌ 否 |

> **改效果 → 改 `lib/client.js`**。改完刷新页面即生效（宿主按文件 mtime 重新加载）。
> 改包名/注册 → 改 `package.json` + `cordis.patch.yml`，**需要重启 DSH**。

---

## 二、关键约定（改错会直接坏）

### 1. `lib/client.js` 的 `id` 必须等于 `package.json` 的 `name`

```js
window.__ModuleLoader__.load({ id: "wediace-ui", factory: (require) => { ... } })
```

已核对 `dsh-better-sidebar` / `@linxin666/dsh-web-all` 等插件，**无一例外**。
两处不一致会导致插件加载失败。

### 2. `package.json` 的 `files` 白名单必须包含 `cordis.patch.yml`

这是个**隐蔽但致命**的坑：`files` 决定 npm/GitHub 安装时打包哪些文件。
漏掉 `cordis.patch.yml` → 安装后 DSH 启动直接报：

```
dsh: failed to read overlay .../node_modules/wediace-ui/cordis.patch.yml:
Error: ENOENT: no such file or directory
```

正确写法：

```json
"files": [
  "lib/index.js",
  "lib/invariant.js",
  "lib/client.js",
  "lib/types/**/*.d.ts",
  "cordis.patch.yml",
  "README.md",
  "README.zh.md"
]
```

### 3. 内部属性名与身份名是两回事，别一起改

- **身份名**（可以改）：包名 `wediace-ui`、ModuleLoader `id`、CSS tagId、`OVERRIDE_SOURCE`
- **内部机制名**（不要改）：
  - `data-dsh-aqua` / `data-dsh-compat` / `data-dsh-float` —— 主题的 DOM 属性 + 175 处 CSS 选择器
  - `NS = "settings.aqua"` —— 设置持久化命名空间，改了会让已保存设置失效
  - `dsh.ui-aqua.*` —— localStorage 键
  - `ui-aqua:` —— 日志/错误标签

---

## 三、踩过的坑（按症状查）

### 症状：某个区域整体模糊 / 被毛玻璃盖住（如右侧图标栏）

**原因**：CSS 子串选择器误匹配。DSH 的布局类名形如 `xxx_panel`、`xxx_card`、`xxx_bubble`，
`[class*=card]` 这类**子串匹配**会把大容器也命中，套上 `backdrop-filter`。

**修法**：收窄到语义明确的属性/类名：

```css
/* ❌ 会误伤 */
[data-dsh-compat] [class*=card], [data-dsh-compat] [class*=panel] { backdrop-filter: blur(12px) }

/* ✅ 精确 */
[data-dsh-compat] [role=menu],
[data-dsh-compat] [role=tooltip],
[data-dsh-compat] [class*=popover],
[data-dsh-compat] [class*=dropdown] { backdrop-filter: blur(12px) }
```

**排查方法**：grep 产物里的 `display:none` / `backdrop-filter` / `[class*=`
，先怀疑子串选择器，别急着看 JS 逻辑。

### 症状：想替换品牌文字，但按文本匹配找不到元素

**原因**：**DSH 的品牌区里没有任何文本节点**。「deepseek」字标和「HARNESS」铭牌
全部是**画进 SVG 的矢量路径**（2 个 SVG，共约 19KB）。

**修法**：不能改文本，要**隐藏宿主 SVG + 注入自己的元素**：

```js
// 隐藏宿主 SVG，注入自定义内容
for (const svg of brand.querySelectorAll("svg")) svg.style.display = "none";
```

并用 `MutationObserver` 持续执行（React 会不断重挂载）：

```js
const observer = new MutationObserver(() => { wordmarkSync(); headerSync(); });
observer.observe(document.documentElement, { childList: true, subtree: true });
```

### 症状：按标题文本匹配 DOM 一直失败

**原因**：DSH 的文案是「探索未**至**之境」（至此的至），**不是**「探索未**知**之境」。
一字之差，精确匹配永远失败。

**教训**：文本匹配前先用 Console 打印实际内容确认，别凭印象写。

### 症状：矢量化 SVG 放在有背景的地方，字母中间是一块白色

**原因**：SVG 里的「镂空」是**一条白色路径**，不是透明。在白底上看着像镂空，
放到彩色背景上就是一块白。

**修法**：用 `<mask>` 真挖空 —— 白色路径转成 mask 里的黑色遮罩：

```svg
<defs><mask id="hole">
  <rect width="100%" height="100%" fill="white"/>
  <path d="...原白色路径的 d..." fill="black"/>   <!-- 黑 = 挖掉 -->
</mask></defs>
<g mask="url(#hole)"> ...字形... </g>
```

⚠️ 注意：从矢量化产物里清理「白色背景」时，**别把所有的近白色路径都删掉**——
其中可能有字母的镂空孔。只删**全尺寸**的背景矩形。

### 症状：流式对话时卡顿

**原因**：`MutationObserver` 回调里做 `document.querySelectorAll("*")` 全页面扫描，
而流式输出每秒触发几十次 DOM 变更。

**修法**：加**短路守卫** —— 应用成功一次后直接 return：

```js
function headerSync() {
  if (document.querySelector("[data-dsh-header-title]") !== null) return;  // 已应用，跳过
  // ...昂贵的扫描...
}
```

React 重挂载时哨兵元素消失，同步会自动重跑一次，语义正确。

### 症状：安装后插件报错，但本地直接跑没问题

**排查顺序**：
1. `package.json` 的 `files` 是否包含 `cordis.patch.yml`
2. `lib/client.js` 的 `id` 是否等于 `package.json` 的 `name`
3. 产物是否真的提交进了 git（`.gitignore` 是否排除了 `lib/`）

---

## 四、安装方式

### 方式 A：GitHub 依赖（推荐，无需手动建链接）

profile 的 `package.json`：

```json
"wediace-ui": "github:mikazuhe13-ui/wediace-ui"
```

然后：

```bash
cd <DSH_HOME>/profiles/desktop
pnpm install
```

### 方式 B：本地开发（junction）

```powershell
$link = "$env:DSH_HOME\profiles\desktop\node_modules\wediace-ui"
cmd /c mklink /J "$link" "D:\DSHspace\repos\DSH-Transparent-UI-Plugin"
```

⚠️ **junction 的坑**：任何 `pnpm install` 都可能把 junction 替换成**实体目录拷贝**，
而拷贝按 `files` 白名单过滤 —— 于是 `cordis.patch.yml` 又丢了，报 ENOENT。
所以本地开发时每次 `pnpm install` 后要检查 junction 是否还在：

```powershell
(Get-Item "$link").LinkType   # 应该是 Junction，不是空
```

---

## 五、改完后的验证清单

```powershell
# 1. 语法检查
node --check lib/client.js

# 2. JSON 合法性
Get-Content package.json -Raw | ConvertFrom-Json

# 3. 身份一致性（三处必须相同）
(Get-Content package.json -Raw | ConvertFrom-Json).name
[regex]::Match([IO.File]::ReadAllText("lib/client.js"), 'id:\s*"([^"]+)"').Groups[1].Value

# 4. files 白名单含 patch
(Get-Content package.json -Raw | ConvertFrom-Json).files -contains 'cordis.patch.yml'
```

刷新页面（`Ctrl+Shift+R` 硬刷新）看效果。

---

## 六、备份与回滚

改产物前务必备份 `lib/client.js`。本分支改造过程中的关键备份点：

- 毛玻璃修复前 / 品牌区改造前 / 头部改造前 / 改名前后

回滚 = 用备份覆盖 `lib/client.js` + 硬刷新。
