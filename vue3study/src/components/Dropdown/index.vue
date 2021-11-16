<template>
  <div class="dropdown" ref="dropdownRef">
    <a class="dropdown-toggle" href="javascript:;" @click="toggleOpen">{{title}}</a>
    <ul class="dropdown-menu" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
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
    const handle = (e:MouseEvent) => {
      if (dropdownRef.value) {
        console.log('dropdownRef', dropdownRef.value)
        if (!dropdownRef.value.contains(e.target as HTMLElement) && isOpen.value) {
          isOpen.value = false
        }
      }
    }
    onMounted(() => {
      document.addEventListener('click', handle)
    })
    onUnmounted(() => {
      document.removeEventListener('click', handle)
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
