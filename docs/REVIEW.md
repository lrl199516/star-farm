# 复习手册（REVIEW）

> 这是项目的"每日复习"入口。每次打开项目开始新会话时，先读这个文件：**先自测，再开始新任务**。
>
> 最近一次学习：2026-08-09（阶段 0 完成 + 阶段 1 完成）

## 一、今天学了什么（30 秒速览）

- **工具角色**：Node.js 是 JS 的"发动机"；Vue 3 是"界面与数据的对讲机"；Vite 是开发服务器和打包工具；Git 是"时光机"；GitHub 是远程仓库兼备份；VS Code 是编辑器；Chrome 是调试台。
- **项目流程**：脚手架创建项目 → `npm install` 装依赖 → `npm run dev` 本地预览 → `npm run build` 构建 → `git add` + `git commit` + `git push` 提交推送。
- **Vue 核心概念**：组件、数据绑定（`{{ }}`）、列表渲染（`v-for`）、条件渲染（`v-if` / `v-show`）、事件（`@click` + `emit`）、属性（`props`）、单一数据源（store）、响应式布局（媒体查询）、动画（`transition`）。
- **阶段 1 界面**：单屏主界面（田地 + 宠物同屏，不切换页面）、商店抽屉、设置弹窗、开场引导、顶部信息栏。

## 二、自测题（先自己回答，再核对答案）

1. 启动前端开发服务器的命令是什么？在哪个目录执行？
2. `git push` 之前必须依次执行哪两个命令？
3. Vue 里怎么把一个数组渲染成多个元素？（提示：`v-` 开头）
4. 游戏的所有数据集中存在哪个文件？为什么要集中放？
5. 窄屏（手机）下，田地和宠物栏如何排列？
6. 今天遇到的"所有权可疑"（dubious ownership）报错，解决命令是什么？

<details>
<summary>答案（点开核对）</summary>

1. 先 `cd client`，再 `npm run dev`，浏览器打开 http://localhost:5173
2. `git add`（把改动放进提交区）和 `git commit -m "说明"`（生成一次提交）
3. `v-for`，例如 `v-for="plot in game.plots"`
4. `client/src/stores/game.js`；集中放才能保证"数据一处改、界面全部跟着变"，也方便以后存服务器
5. 上下排列：田地上、宠物栏下，宠物栏可以收起
6. `git config --global --add safe.directory 'C:/Users/瑞/Documents/ChatGPT/codex-game'`

</details>

## 三、还没完成的小任务（明天优先做）

- [ ] 打开 `client/src/data/config.js`，把 `plotCount: 12` 改成 `8`，保存看田地块数变化（体会"改一处数据，界面跟着变"）
- [ ] 修改 `client/src/components/Onboarding.vue` 里的开场文案
- [ ] 拖动浏览器窗口宽度，观察布局变化；点开商店抽屉和设置弹窗看动画
- [ ] 把这些改动提交并推送到 GitHub（自己动手）

## 四、常用命令速查

| 想做什么 | 命令 |
|---|---|
| 启动前端 | `cd client` → `npm run dev` → 打开 http://localhost:5173 |
| 构建项目 | `cd client` → `npm run build` |
| 查看改动 | `git status` |
| 提交改动 | `git add .` → `git commit -m "说明"` |
| 推送到 GitHub | `git push` |
| 回退未提交的改动 | `git restore <文件名>` |

## 五、下一步预告

阶段 2：种田与成长系统——12 块地真正能种、能成熟、能收获，并且**重启不丢档**。会学到：时间戳计算、状态机、本地存储（localStorage）。
