<template>
  <div class="dropdown" ref="dropdownRef">
    <a class="dropdown-toggle" href="javascript:;" @click="toggleOpen">{{title}}</a>
    <ul class="dropdown-menu" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue'
import useClickOutside from '@/hooks/useClickOutside'
export default defineComponent({
  props: {
    title: {
      type: String,
      require: true
    }
  },
  setup() {
    const isOpen = ref(false)
    const dropdownRef = ref<null | HTMLElement>(null)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    const isClickOutside = useClickOutside(dropdownRef)

    watch(isClickOutside, () => {
      if (isOpen.value && isClickOutside.value) {
        isOpen.value = false
      }
    })

    return {
      isOpen,
      toggleOpen,
      dropdownRef
    }
  }
})
</script>

<style>
</style>
