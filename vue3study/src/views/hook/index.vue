<template>
  <div class="home">
    pos:{{pos}}
    apiObj:{{apiObj}}
  </div>
</template>

<script lang="ts">
import useMousePosition from './useMousePosition'
import useURLLoader from './useURLLoader'
export default {
  name: 'Mouse',
  setup () {
    const pos = useMousePosition()
    const apiObj = useURLLoader('/users/zuobaiquan/repos')
    return {
      apiObj,
      pos
    }
  }
}
</script>
