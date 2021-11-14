import { toRefs, reactive, onMounted, onUnmounted } from 'vue'
function useMousePosition() {
  // const x = ref(0)
  // const y = ref(0)
  const xy = reactive({
    x: 0,
    y: 0
  })
  const updateMouse = (e: MouseEvent) => {
    xy.x = e.pageX
    xy.y = e.pageY
  }
  onMounted(() => {
    document.addEventListener('click', updateMouse)
  })
  onUnmounted(() => {
    document.removeEventListener('click', updateMouse)
  })
  return toRefs(xy)
}
export default useMousePosition
