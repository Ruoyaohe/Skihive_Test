# Figma 交互组件创建指南

本文档说明如何在 Figma 中为登录/注册页面创建所有交互组件和原型。

## 📋 需要创建的交互组件清单

### 1. 输入框组件 (Input Field)
**组件名称**: `Input Field`
**变体**:
- Default (默认状态)
- Hover (悬停状态)
- Focus (聚焦状态)
- Error (错误状态)
- Disabled (禁用状态)

**属性**:
- State: Default | Hover | Focus | Error | Disabled
- Type: Email | Password | Text

**交互状态**:
- **Hover**: 边框颜色变化 `rgb(104, 104, 104)` → `rgb(133, 94, 238)`
- **Focus**: 边框颜色 `rgb(133, 94, 238)`, 添加外发光效果
- **Error**: 边框颜色 `rgb(255, 0, 0)`

### 2. 登录按钮组件 (Login Button)
**组件名称**: `Button - Login`
**变体**:
- Default (默认状态)
- Hover (悬停状态)
- Active/Pressed (按下状态)
- Loading (加载状态)
- Disabled (禁用状态)

**交互状态**:
- **Hover**: `opacity: 0.8`, `scale: 1.02`
- **Click**: `scale: 0.95`, 持续时间 `0.1s`
- **Loading**: 显示旋转加载动画

### 3. 注册按钮组件 (Register Button)
**组件名称**: `Button - Register`
**变体**:
- Default (默认状态)
- Hover (悬停状态)
- Active/Pressed (按下状态)

**交互状态**:
- **Hover**: `opacity: 0.8`, `scale: 1.02`
- **Click**: `scale: 0.95`, 持续时间 `0.1s`

### 4. 复选框组件 (Checkbox)
**组件名称**: `Checkbox`
**变体**:
- Unchecked (未选中)
- Checked (已选中)
- Hover (悬停状态)

**交互状态**:
- **Unchecked**: 边框 `rgb(155, 155, 155)`, 背景透明
- **Checked**: 背景 `rgb(133, 94, 238)`, 内部白色圆点
- **Hover**: 边框颜色加深

### 5. 协议链接组件 (Agreement Link)
**组件名称**: `Link - Agreement`
**变体**:
- Default (默认状态)
- Hover (悬停状态)

**交互状态**:
- **Hover**: 下划线显示/加粗, 颜色变化

## 🎨 在 Figma 中创建组件的步骤

### 步骤 1: 创建输入框组件

1. **选择输入框元素** (Rectangle 59 或 Rectangle 58)
2. **右键点击** → 选择 "Create Component" (或按 `Ctrl/Cmd + Alt + K`)
3. **命名组件**: `Input Field`
4. **创建变体**:
   - 选择组件，在右侧面板点击 "Create Variant"
   - 添加属性:
     - Property: `State` → Values: `Default`, `Hover`, `Focus`, `Error`, `Disabled`
     - Property: `Type` → Values: `Email`, `Password`, `Text`
5. **设置每个变体的样式**:
   - Default: `bg: rgb(34, 34, 34)`, `border: rgb(104, 104, 104)`
   - Hover: `border: rgb(133, 94, 238)`
   - Focus: `border: rgb(133, 94, 238)`, 添加 `Effect: Outer Glow`
   - Error: `border: rgb(255, 0, 0)`
   - Disabled: `opacity: 0.5`

### 步骤 2: 创建按钮组件

1. **选择登录按钮** (Component 1 / Rectangle 57)
2. **创建组件**: `Button - Login`
3. **创建变体**:
   - Property: `State` → Values: `Default`, `Hover`, `Active`, `Loading`, `Disabled`
4. **设置交互状态**:
   - Default: `bg: rgb(255, 255, 255)`, `border: rgb(0, 0, 0)`
   - Hover: `opacity: 0.8`
   - Active: `scale: 0.95`
   - Loading: 添加旋转图标
   - Disabled: `opacity: 0.5`

### 步骤 3: 创建复选框组件

1. **选择复选框** (Ellipse 55)
2. **创建组件**: `Checkbox`
3. **创建变体**:
   - Property: `State` → Values: `Unchecked`, `Checked`, `Hover`
4. **设置样式**:
   - Unchecked: `border: rgb(155, 155, 155)`, `bg: transparent`
   - Checked: `bg: rgb(133, 94, 238)`, 内部白色圆点
   - Hover: 边框颜色加深

## 🔗 创建原型交互 (Prototype Interactions)

### 输入框交互

1. **选择输入框组件**
2. **点击右侧 "Prototype" 标签**
3. **添加交互**:
   - **On Click** → Navigate to: `Input Field / Focus` state
   - **On Hover** → Change to: `Input Field / Hover` state
   - **On Mouse Leave** → Change to: `Input Field / Default` state

### 按钮交互

1. **选择登录按钮**
2. **添加交互**:
   - **On Click** → 
     - Change to: `Button - Login / Active` state
     - After delay: `100ms` → Change to: `Button - Login / Loading` state
     - After delay: `1000ms` → Navigate to: 下一个页面
   - **On Hover** → Change to: `Button - Login / Hover` state
   - **On Mouse Leave** → Change to: `Button - Login / Default` state

### 复选框交互

1. **选择复选框组件**
2. **添加交互**:
   - **On Click** → 
     - If `Unchecked` → Change to: `Checked`
     - If `Checked` → Change to: `Unchecked`
   - **On Hover** → Change to: `Hover` state (如果未选中)

### 页面导航交互

1. **选择注册按钮**
2. **添加交互**:
   - **On Click** → Navigate to: `注册页面` frame
   - **On Hover** → Change to: `Hover` state

3. **选择协议链接**
4. **添加交互**:
   - **On Click** → Open overlay: `协议页面` frame

## 📐 组件规格参考

### 输入框 (Rectangle 59/58)
- Width: `316.57px`
- Height: `55.54px`
- Border Radius: `58px`
- Background: `rgb(34, 34, 34)`
- Border: `1px solid rgb(104, 104, 104)`

### 登录按钮 (Rectangle 57)
- Width: `316.57px`
- Height: `55.54px`
- Border Radius: `42px`
- Background: `rgb(255, 255, 255)`
- Border: `1px solid rgb(0, 0, 0)`

### 注册按钮
- Width: `316.57px`
- Height: `55.54px`
- Border Radius: `42px`
- Background: `transparent`
- Border: `1px solid rgb(0, 0, 0)`

### 复选框 (Ellipse 55)
- Width: `8.48px`
- Height: `8.48px`
- Border: `1px solid rgb(155, 155, 155)`
- Border Radius: `50%` (圆形)

## 🎯 动画设置

### Hover 动画
- Duration: `200ms`
- Easing: `ease-in-out`

### Click 动画
- Duration: `100ms`
- Easing: `ease-in-out`
- Effect: `scale(0.95)`

### Focus 动画
- Duration: `150ms`
- Easing: `ease-out`

## 📝 注意事项

1. **组件命名**: 使用清晰的命名约定，如 `Component Name / Variant Name`
2. **属性组织**: 将相关属性分组，便于管理
3. **交互顺序**: 确保交互逻辑清晰，避免冲突
4. **状态管理**: 使用 Figma 的 Variants 功能管理不同状态
5. **原型测试**: 使用 Figma 的 Prototype 模式测试所有交互

## 🔄 与代码实现的对应关系

Figma 中的交互组件应该与代码中的实现保持一致：

- **Figma Variants** ↔ **React Component Props**
- **Figma Prototype** ↔ **React Event Handlers**
- **Figma Animations** ↔ **Framer Motion Animations**

## 📚 参考资源

- [Figma Components 文档](https://help.figma.com/hc/en-us/articles/5579474826519-Create-and-use-components)
- [Figma Variants 文档](https://help.figma.com/hc/en-us/articles/5579474826519-Create-and-use-components#Variants)
- [Figma Prototyping 文档](https://help.figma.com/hc/en-us/articles/360040328193-Create-prototypes)






