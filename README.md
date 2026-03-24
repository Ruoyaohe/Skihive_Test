# SkiHIve - 滑雪体验平台

一个现代化的滑雪装备定制与飞行体验平台，使用 Next.js、TypeScript 和 Tailwind CSS 构建。

## 功能特性

- 🔐 **注册/登录页面** - 现代化的认证界面
- ✈️ **开始飞行页面** - 交互式飞行体验界面
- 🔧 **装配制作动画** - 装备组装动画展示

## 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React

## 开始使用

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 运行开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
npm run build
npm start
```

## 页面路由

- `/` - 首页
- `/login` - 登录页面
- `/register` - 注册页面
- `/flying` - 开始飞行页面
- `/assembly` - 装配制作动画页面

## 项目结构

```
SkiHIve/
├── app/                    # Next.js App Router 页面
│   ├── login/             # 登录页面
│   ├── register/          # 注册页面
│   ├── flying/            # 飞行页面
│   ├── assembly/          # 装配页面
│   ├── layout.tsx         # 根布局
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── Auth/             # 认证相关组件
│   ├── Flying/           # 飞行相关组件
│   └── Assembly/         # 装配相关组件
└── public/               # 静态资源
```

## 设计说明

本项目基于 Figma 设计稿创建，包含以下 UI 特性：

- 现代化的渐变背景
- 流畅的动画过渡效果
- 响应式设计，支持移动端和桌面端
- 玻璃态（Glassmorphism）设计风格
- 直观的用户交互体验

## 开发说明

### 自定义颜色

颜色配置在 `tailwind.config.js` 中，主要使用蓝色系（primary）作为主题色。

### 添加新页面

1. 在 `app/` 目录下创建新的路由文件夹
2. 创建 `page.tsx` 文件
3. 在 `components/` 目录下创建对应的组件

## 许可证

MIT

