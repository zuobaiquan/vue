<template>
  <div class="home">
    <h3>{{ count }}</h3>
    <h4>{{ double }}</h4>
    <button @click="increase">+1</button>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
export default {
  name: 'Home',
  setup () {
    const count = ref(0)
    const double = computed(() => {
      return count.value * 2
    })
    const increase = () => {
      count.value++
    }
    return {
      count,
      increase,
      double,
    }
  },
}
</script>
