<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
const dragBox = ref<HTMLElement | null>(null)
const dragBoxHeader = ref<HTMLElement | null>(null)
const dragBoxFooter = ref<HTMLElement | null>(null)
const props = defineProps<{
  width: number
  height: number
  left: number
  top: number
}>()
const init = (dragBox: Ref<HTMLElement>) => {
  dragBox.value.style.width = `${props.width}px`
  dragBox.value.style.height = `${props.height}px`
  dragBox.value.style.transform = `translate(${props.left}px, ${props.top}px)`
}
const onHeaderDrag = (dragBox: Ref<HTMLElement>, dragBoxHeader: Ref<HTMLElement>) => {
  let dragging = false
  let offset = { x: 0, y: 0 }
  dragBoxHeader.value.addEventListener('mousedown', ({ offsetX, offsetY }) => {
    dragging = true
    offset = { x: offsetX, y: offsetY }
  })
  window.addEventListener('mouseup', () => {
    dragging = false
  })
  window.addEventListener('mousemove', ({ x, y }) => {
    if (!dragging) return
    const xx = x - offset.x
    const yy = y - offset.y
    dragBox.value.style.transform = `translate(${xx}px, ${yy}px)`
  })
}
const onFooterResize = (dragBox: Ref<HTMLElement>, dragBoxFooter: Ref<HTMLElement>) => {
  let dragging = false
  let start = {x:0,y:0,sw:0,sh:0};
  dragBoxFooter.value.addEventListener('mousedown', ({x,y}) => {
    dragging = true
    const sw = Number(dragBox.value.style.width.replace('px',''))
    const sh = Number(dragBox.value.style.height.replace('px',''))
    start = {x,y, sw, sh}
  })
  window.addEventListener('mouseup', () => {
    dragging = false
  })
  window.addEventListener('mousemove', ({ x, y }) => {
    if (!dragging) return
    const xx = x - start.x + start.sw;
    const yy = y - start.y + start.sh;    
    dragBox.value.style.width = `${xx}px`
    dragBox.value.style.height = `${yy}px`
  })
}
onMounted(() => {
  init(dragBox as Ref<HTMLElement>)
  onHeaderDrag(dragBox as Ref<HTMLElement>, dragBoxHeader as Ref<HTMLElement>)
  onFooterResize(dragBox as Ref<HTMLElement>, dragBoxFooter as Ref<HTMLElement>)
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
    <footer class="drag-box_footer" ref="dragBoxFooter"></footer>
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

.drag-box .drag-box_footer {
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
