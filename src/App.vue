<script setup lang="ts">
import { ref } from 'vue'
import DragBox from './components/DragBox.vue'
const boxSize = {
  width: 300,
  height: 500,
  top: 100,
  left: 100
}
const visible = ref(true)
const toggle = () => {
  visible.value = !visible.value
}
const boxSize2 = {
  width: 400,
  height: 400,
  top: 200,
  left: 200
}
const visible2 = ref(false)
const toggle2 = () => {
  visible2.value = !visible2.value
}
</script>

<template>
  <div class="nav-bar">
    <span class="text">一个可自由拖拽拉伸的Vue3窗口组件，鼠标拖动窗口顶部进行拖拽，鼠标拖动窗口右下角进行拉伸。</span>
    <span>Test Switch :</span>
    <button @click="toggle">toggle1</button>
    <button @click="toggle2">toggle2</button>
    <a href="https://github.com/beikeliu/drag-box">跳转源码</a>
  </div>
  <DragBox v-show="visible" v-bind="boxSize">
    <template v-slot:header>窗口1</template>
    <div>
      name: <input type="text">
    </div>
  </DragBox>
  <DragBox v-show="visible2" v-bind="boxSize2">
    <template v-slot:header>
      <div>窗口2</div>
    </template>
    <div>随便写点什么测试</div>
  </DragBox>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.nav-bar {
  width: 100%;
  height: 50px;
  background-color: rgba(0,0,0,.05);
  padding: 10px;
}
.nav-bar button {
  margin-left: 25px;
}
.nav-bar a {
  float: right;
}
.nav-bar .text {
  margin-left: 30px;
  margin-right: 30px;
  line-height: 30px;
}
</style>
