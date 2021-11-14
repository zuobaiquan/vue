<template>
  <div class="home">
    pos:{{pos}}
  </div>
</template>

<script lang="ts">
import useMousePosition from './useMousePosition'
export default {
  name: 'Mouse',
  setup () {
    const pos = useMousePosition()
    return {
      pos
    }
  }
}
</script>
