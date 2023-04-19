import type { Ref } from 'vue'

type Props = Readonly<
  Omit<
    {
      width: number
      height: number
      left: number
      top: number
    },
    never
  > & {}
>

export const init = (props: Props, dragBox: Ref<HTMLElement>) => {
  dragBox.value.style.width = `${props.width}px`
  dragBox.value.style.height = `${props.height}px`
  dragBox.value.style.transform = `translate(${props.left}px, ${props.top}px)`
}

export const onHeaderDrag = (
  props: Props,
  dragBox: Ref<HTMLElement>,
  dragBoxHeader: Ref<HTMLElement>
) => {
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

export const onFooterResize = (
  props: Props,
  dragBox: Ref<HTMLElement>,
  dragBoxFooter: Ref<HTMLElement>
) => {
  let dragging = false
  let start = { x: 0, y: 0, sw: 0, sh: 0 }
  dragBoxFooter.value.addEventListener('mousedown', ({ x, y }) => {
    dragging = true
    const sw = Number(dragBox.value.style.width.replace('px', ''))
    const sh = Number(dragBox.value.style.height.replace('px', ''))
    start = { x, y, sw, sh }
  })
  window.addEventListener('mouseup', () => {
    dragging = false
  })
  window.addEventListener('mousemove', ({ x, y }) => {
    if (!dragging) return
    const xx = x - start.x + start.sw
    const yy = y - start.y + start.sh
    dragBox.value.style.width = `${xx}px`
    dragBox.value.style.height = `${yy}px`
  })
}
