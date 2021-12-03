<template>
  <div class="home">
    <button @click="openModal">Open Modal</button><br/>
    <modal :isOpen="modalIsOpen" @close="onModalClose"> My Modal !!!!</modal>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Modal from '@/components/Modal.vue'
export default defineComponent({
  components: {
    Modal
  },
  setup() {
    const modalIsOpen = ref(false)
    const openModal = () => {
      modalIsOpen.value = true
    }
    const onModalClose = () => {
      modalIsOpen.value = false
    }
    return {
      modalIsOpen,
      openModal,
      onModalClose
    }
  }
})
</script>
