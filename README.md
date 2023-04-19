# drag-box

## 一个可自由拖拽拉伸的Vue3窗口组件

- 鼠标拖动窗口顶部进行拖拽
- 鼠标拖动窗口右下角进行拉伸

### 如何安装？
```sh
npm i @liubeike/drag-box
```

### 如何使用组件？
```vue
<script setup>
import DragBox from '@liubeike/drag-box'
import '@liubeike/drag-box/lib/style.css'
const boxSize = {
  width: 300, // 默认初始宽度
  height: 500, // 默认初始高度
  top: 100, // 默认初始距离顶部距离
  left: 100 // 默认初始距离左侧距离
}
</script>

<template>
  <DragBox v-bind="boxSize">
    <template v-slot:header>窗口标题</template>
    <main>窗口主题</main>
  </DragBox>
</template>
```
