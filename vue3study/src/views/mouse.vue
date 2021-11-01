<template>
  <div class="home">
    <p>x：{{ x }}</p>
    <p>y：{{ y }}</p>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'Mouse',
  setup () {
    const x = ref(0)
    const y = ref(0)
    const updateMouse = (e: MouseEvent) => {
      x.value = e.pageX
      y.value = e.pageY
    }
    onMounted(() => {
      document.addEventListener('click', updateMouse)
    })
    onUnmounted(() => {
      document.removeEventListener('click', updateMouse)
    })
    return {
      x,
      y
    }
  }
}
</script>
