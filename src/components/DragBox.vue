<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import { init, onHeaderDrag, onFooterResize } from './script';
const dragBox = ref<HTMLElement | null>(null)
const dragBoxHeader = ref<HTMLElement | null>(null)
const dragBoxFooter = ref<HTMLElement | null>(null)
const props = defineProps<{
  width: number
  height: number
  left: number
  top: number
}>()
onMounted(() => {
  init(props, dragBox as Ref<HTMLElement>)
  onHeaderDrag(props, dragBox as Ref<HTMLElement>, dragBoxHeader as Ref<HTMLElement>)
  onFooterResize(props, dragBox as Ref<HTMLElement>, dragBoxFooter as Ref<HTMLElement>)
})
</script>
<template>
  <article class="drag-box" ref="dragBox">
    <header class="drag-box__header" ref="dragBoxHeader">
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer class="drag-box__footer" ref="dragBoxFooter"></footer>
  </article>
</template>
<style scoped>
.drag-box {
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  border: 1px solid gray;
  border-radius: 4px;
  overflow: hidden;
}

.drag-box .drag-box__header {
  cursor: move;
  background-color: gray;
  color: white;
  font-weight: 700;
  padding: 2px 4px;
}

.drag-box .drag-box__footer {
  width: 0px;
  height: 0px;
  border: 6px solid gray;
  position: absolute;
  bottom: -6px;
  right: -6px;
  transform: rotate(45deg);
  cursor: nwse-resize;
}
</style>
