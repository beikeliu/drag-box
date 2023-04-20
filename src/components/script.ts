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

export const init = (props: Props, dragBox: HTMLElement) => {
  const { width, height, left, top } = props
  dragBox.style.width = `${width}px`
  dragBox.style.height = `${height}px`
  dragBox.style.transform = `translate(${left}px, ${top}px)`
}
/**
 * 监听拖动
 * 1. 鼠标按下窗口顶栏时开始监听鼠标拖动并执行拖动方法进行位移窗口
 * 2. 鼠标在任意位置抬起时停止监听鼠标拖动并停止位移窗口方法
 * @param dragBox 
 * @param dragBoxHeader 
 */
export const onHeaderDrag = (dragBox: HTMLElement, dragBoxHeader: HTMLElement) => {
  let offset = { x: 0, y: 0 }
  dragBoxHeader.addEventListener('mousedown', ({ offsetX, offsetY }) => {
    offset = { x: offsetX, y: offsetY }
    window.addEventListener('mousemove', handleMove)
  })
  window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', handleMove)
  })
  function handleMove({ x, y }: { x: number; y: number }) {
    const xx = x - offset.x
    const yy = y - offset.y
    dragBox.style.transform = `translate(${xx}px, ${yy}px)`
  }
}

export const onFooterResize = (dragBox: HTMLElement, dragBoxFooter: HTMLElement) => {
  let start = { x: 0, y: 0, sw: 0, sh: 0 }
  dragBoxFooter.addEventListener('mousedown', ({ x, y }) => {
    const sw = Number(dragBox.style.width.replace('px', ''))
    const sh = Number(dragBox.style.height.replace('px', ''))
    start = { x, y, sw, sh }
    window.addEventListener('mousemove', handleMove)
  })
  window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', handleMove)
  })
  function handleMove({ x, y }: { x: number; y: number }) {
    const xx = x - start.x + start.sw
    const yy = y - start.y + start.sh
    dragBox.style.width = `${xx}px`
    dragBox.style.height = `${yy}px`
  }
}
