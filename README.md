# 《星际农场》

太空种田 + 星宠养成网页游戏：QQ 农场式核心玩法，故事背景设定在太空星球"希望星"。玩家通过网页链接进入，各玩各的、进度保存在服务器上。

## 项目状态

- 当前阶段：阶段 0 已完成（环境搭建）
- 进度：Vue 3 前端项目跑通、GitHub 仓库建立并完成首次推送、完成第一个小改动
- GitHub 仓库：https://github.com/lrl199516/star-farm

## 技术栈

- 前端：Vue 3 + Vite（JavaScript）
- 后端：Node.js 24 + Express + SQLite（阶段 5 搭建）
- 版本控制：Git + GitHub
- 部署：腾讯云轻量服务器 + PM2（阶段 7）

## 目录结构

```
codex-game/
├── client/   # 前端代码（Vue 3 + Vite）
├── docs/     # 项目文档
├── server/   # 后端代码（阶段 5 创建）
└── ...
```

## 本地运行

### 前端

```bash
cd client
npm install
npm run dev
```

然后在浏览器打开 http://localhost:5173

### 后端

阶段 5 搭建后补充说明。

## 文档

- [docs/notes.md](docs/notes.md) —— 项目要点速查（技术栈、游戏机制、AI 协作协议等）
- [docs/LOG.md](docs/LOG.md) —— 踩坑与补救记录

## 学习目标

1. 读懂 AI 写的代码
2. 出错时能主动排查
3. 掌握补救措施并应用到实际开发
