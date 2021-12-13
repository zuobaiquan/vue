<template>
  <div class="current-time" v-html="currentTime"></div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { parseTime } from '@/utils'

export default defineComponent({
  setup() {
    const currentTime = ref(null)
    const getTime = () => {
      currentTime.value = parseTime(
        new Date(),
        '<div class="time">{h}:{i}:{s}</div><div class="date">{y}-{m}-{d} 周{a}</div>'
      )
      requestAnimationFrame(getTime)
    }

    onMounted(() => {
      requestAnimationFrame(getTime)
    })

    return {
      currentTime,
    }
  },
})
</script>
<style lang="scss" scoped>
.current-time {
  color: #fff;
  text-align: center;
  ::v-deep {
    .time {
      font-family: Arial;
      font-size: 48px;
      font-weight: 700;
    }
    .date {
      font-size: 20px;
      margin-top: 16px;
    }
  }
}
</style>
