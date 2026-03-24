# SkiHIve 项目工作逻辑文档

## 项目概述

SkiHIve 是一个低空装配与仿真平台，用于定制飞行器组件并进行飞行体验。项目基于 Next.js 14 + TypeScript + Framer Motion 构建。

## 页面流程

### 1. 首页 (`/`)
- **文件**: `app/page.tsx`
- **功能**: 欢迎页面，提供登录和注册入口
- **导航**: 
  - 点击"登录" → `/login`
  - 点击"注册" → `/register`

### 2. 登录页面 (`/login`)
- **文件**: `app/login/page.tsx` → `components/Auth/LoginForm.tsx`
- **功能**: 用户登录界面
- **特性**: 
  - 表单验证
  - 密码显示/隐藏切换
  - 记住密码功能

### 3. 注册页面 (`/register`)
- **文件**: `app/register/page.tsx` → `components/Auth/RegisterForm.tsx`
- **功能**: 新用户注册界面
- **特性**: 
  - 表单验证
  - 密码强度检查

### 4. 开始飞行页面 (`/flying`) ⭐ 核心页面
- **文件**: `app/flying/page.tsx` → `components/Flying/StartFlying.tsx`
- **功能**: 交互式滑动启动飞行体验
- **核心逻辑**:
  1. **初始状态**:
     - 显示欢迎文字："Hi Jade！"、"今天想要怎么飞？"
     - 背景使用 `Group.png`，初始位置 `y: 555px`
     - 滑动按钮在左侧，可拖拽
  
  2. **滑动交互**:
     - 用户拖拽滑动按钮（Component 2）向右移动
     - 最大拖拽距离：`261px` (从 0 到 261)
     - 滑动时实时响应：
       - `Group.png` 向上滑动：从 `y: 555px` → `y: -35px`（800ms 动画）
       - 光辉效果增强：透明度从 `0.3` → `1`，缩放从 `1` → `1.2`
       - 背景填充条宽度：从 `55px` → `316.57px`
  
  3. **完成状态**:
     - 当滑动超过 80% (`maxDrag * 0.8`) 时：
       - 滑动按钮自动移动到最右侧
       - `Group.png` 完成向上滑动动画（800ms）
       - 延迟 800ms 后触发溶解动画（`isExiting`）
       - 溶解动画持续 1200ms
       - 动画完成后跳转到 `/assembly` 页面
  
  4. **文字样式**:
     - 使用 `whiteSpace: 'nowrap'` 防止文字断行
     - 字体大小和间距按 Figma 设计精确设置
     - 无省略号显示

- **动画特性**:
  - 使用 Framer Motion 的 `useMotionValue` 和 `useTransform` 实现实时响应
  - 光辉效果使用径向渐变和模糊滤镜
  - 页面切换使用 `AnimatePresence` 实现溶解效果

### 5. 组件装配页面 (`/assembly`) ⭐ 核心页面
- **文件**: `app/assembly/page.tsx` → `components/Assembly/AssemblyAnimation.tsx`
- **功能**: 选择飞行器组件并进行装配
- **核心逻辑**:

  1. **页面布局**:
     - 全黑背景（`#000000`）
     - 标题："组件装配" + "定制你的飞行器"
     - 进度显示：`{selectedCount}/6`
     - 3D 预览区域（居中）
     - 组件选择按钮（6个组件）
     - AI 分析状态区域（Group 68.svg）
     - 底部操作按钮

  2. **组件列表**:
     - **机架** (frame): `Group 36.svg` - 默认选中
     - **螺旋桨** (propeller): `Group 66.svg`
     - **电机** (motor): `Group 40.svg`
     - **电池** (battery): `Group 45.svg`
     - **传感器** (sensor): `Group 67.svg`
     - **相机** (camera): `Group 37.svg`

  3. **组件按钮**:
     - 所有组件按钮统一尺寸：`54.29px × 54.29px`
     - 使用 SVG 图标，无圆形背景和边框
     - 位置按 Figma 设计精确定位：
       - 螺旋桨: `left: 58.57px, top: 181.38px`
       - 电机: `left: 280.14px, top: 181.38px`
       - 电池: `left: 58.57px, top: 543.92px`
       - 传感器: `left: 280.14px, top: 543.92px`
       - 机架: `left: 169px, top: 129.9px`
       - 相机: `left: 169.36px, top: 593.49px`
     - 点击组件按钮跳转到 `/component-selector?type={componentType}`

  4. **3D 预览区域**:
     - 位置: `top: 205.22px, left: 35.57px`
     - 尺寸: `321.87px × 407.19px`
     - **底层背景**: `Group 20.svg`（静态，无交互，z-index: 0）
     - **装配动画**: 选中组件时显示旋转装配动画
     - **完成状态**: 选中 6 个组件后显示"装配完成！"

  5. **AI 分析状态** (`Group 68.svg`):
     - 位置: `left: 30px, top: 687px`
     - 尺寸: `333px × 39px`
     - **流动光效边框**:
       - 使用 CSS `@keyframes` 实现
       - 动画持续时间：**8 秒**（已优化为慢速）
       - 四个方向流动：上→下、下→上、左→右、右→左
       - 紫色渐变光效：`rgba(133, 94, 238, 0.8)` → `rgba(177, 91, 230, 1)`
       - 使用伪元素（`::before`, `::after`）和独立 div 实现

  6. **底部按钮**:
     - **重置按钮**: 圆形，带旋转图标，重置装配状态
     - **下一步按钮**: 
       - 未选中组件时：灰色，显示"下一步，场景仿真"
       - 选中组件时：激活状态，可点击
       - 点击后跳转到 `/environment` 页面

- **状态管理**:
  - `selectedComponents`: 已选中的组件 ID 数组（初始包含 'frame'）
  - `isAnalyzing`: AI 分析状态
  - `isAssembling`: 装配进行中状态
  - `currentStep`: 当前装配步骤

### 6. 组件选择页面 (`/component-selector`)
- **文件**: `app/component-selector/page.tsx` → `components/Assembly/ComponentSelector.tsx`
- **功能**: 选择具体组件型号
- **逻辑**: 根据 `type` 参数显示对应类型的组件列表

### 7. 场景仿真页面 (`/environment`)
- **文件**: `app/environment/page.tsx` → `components/Environment/EnvironmentSelector.tsx`
- **功能**: 选择飞行场景和环境
- **导航**: 从装配页面点击"下一步，场景仿真"进入

## 技术实现要点

### 动画系统
1. **Framer Motion**:
   - `useMotionValue`: 创建响应式数值
   - `useTransform`: 基于其他 motion value 计算衍生值
   - `AnimatePresence`: 页面切换动画
   - `motion.div`: 动画容器

2. **CSS 动画**:
   - `@keyframes`: 自定义动画（如流动光效）
   - `transition`: 过渡效果
   - 伪元素（`::before`, `::after`）: 装饰效果

### 样式系统
- **Tailwind CSS**: 基础样式
- **全局样式** (`app/globals.css`): 
  - 自定义滚动条
  - Group 68 流动光效样式
  - 全局字体和背景设置

### 资源管理
- **静态资源**: `public/assets/`
  - `materials/flying/`: 飞行页面资源（Group.png）
  - `materials/assembly/`: 装配页面资源（Group 20.svg, Group 36-68.svg）
  - `materials/1.iOS/`: iOS 状态栏资源

### 响应式设计
- 固定尺寸：`393px × 852px`（iPhone 标准尺寸）
- 居中显示：`mx-auto`
- 绝对定位：按 Figma 设计精确布局

## 设计规范

### 字体
- **主字体**: `PingFang SC`
- **备用字体**: `SF Pro Text`, `SF Pro Display`, `system-ui`, `sans-serif`

### 颜色
- **背景**: `#000000`（纯黑）
- **文字主色**: `#FFFFFF`
- **文字次色**: `#D5D3D3`
- **边框**: `rgba(104, 104, 104, 0.48)`
- **渐变**: 紫色系（`rgba(120, 73, 230, 1)` → `rgba(67, 41, 128, 0)`）

### 动画时长
- **快速动画**: 0.3s - 0.5s
- **标准动画**: 0.8s - 1.2s
- **慢速动画**: 2s - 8s（流动光效）

## 关键文件说明

### 核心组件
- `components/Flying/StartFlying.tsx`: 飞行启动页面，包含滑动交互和背景动画
- `components/Assembly/AssemblyAnimation.tsx`: 装配页面，包含组件选择和 3D 预览

### 样式文件
- `app/globals.css`: 全局样式和动画定义

### 资源文件
- `public/assets/materials/flying/Group.png`: 飞行页面背景图
- `public/assets/materials/assembly/Group 20.svg`: 装配页面 3D 预览背景
- `public/assets/materials/assembly/Group 36-68.svg`: 各组件图标和状态图

## 开发注意事项

1. **Figma 设计对齐**: 所有位置、尺寸、字体大小严格按照 Figma 设计实现
2. **动画性能**: 使用 `transform` 和 `opacity` 属性实现动画，避免触发重排
3. **资源优化**: 使用 Next.js `Image` 组件优化图片加载
4. **状态管理**: 使用 React `useState` 管理本地状态，路由使用 Next.js `useRouter`
5. **类型安全**: 使用 TypeScript 确保类型安全

## 待优化项

- [ ] 添加加载状态
- [ ] 优化动画性能
- [ ] 添加错误处理
- [ ] 完善组件选择页面逻辑
- [ ] 实现场景仿真页面功能

