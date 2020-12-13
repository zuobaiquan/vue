<template>
  <div class="home">
    <p>x：{{ x }}</p>
    <p>y：{{ y }}</p>
  </div>
</template>

<script lang="ts">
import useMousePosition from './useMousePosition'
export default {
  name: 'Mouse',
  setup () {
    const {x,y} = useMousePosition()
    return {
      x,
      y
    }
  }
}
</script>
