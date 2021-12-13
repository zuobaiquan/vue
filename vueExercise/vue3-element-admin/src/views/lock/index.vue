<template>
  <div class="lock-wrap">
    <Unlock />
    <Clock />
    <current-time />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Unlock from './Unlock.vue'
import Clock from './Clock.vue'
import CurrentTime from './CurrentTime.vue'

export default defineComponent({
  name: 'lock',
  components: {
    Unlock,
    Clock,
    CurrentTime,
  },
  setup() {},
})
</script>

<style lang="scss" scoped>
.lock-wrap {
  background: #222;
  height: 100%;
  min-height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
</style>
