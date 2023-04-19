import type { App } from 'vue'
import DragBox from './components/DragBox.vue'

DragBox.install = (App: App) => {
  App.component(DragBox.name, DragBox)
}

export default DragBox
