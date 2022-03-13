<template>
  <div style="display: flex;">
    <div style="margin-right: 20px;">
      <el-time-select
        v-model="startTime"
        class="mr-4"
        :placeholder="startPlaceholder"
        :start="startTimeStart"
        :step="startStep"
        :end="startTimeEnd"
        v-bind="$attrs.startOptions"
      >
      </el-time-select>
    </div>
    <div>
      <el-time-select
        v-model="endTime"
        :min-time="startTime"
        :placeholder="endPlaceholder"
        :start="endTimeStart"
        :step="endStep"
        :end="endTimeEnd"
        :disabled="endTimeDisabled"
        v-bind="$attrs.endOptions"
      >
      </el-time-select>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { ref, watch } from 'vue';

let props = defineProps({
  // 开始时间的占位符
  startPlaceholder: {
    type: String,
    default: '请选择开始时间'
  },
  // 开始时间的开始选择
  startTimeStart: {
    type: String,
    default: '08:00'
  },
  // 开始时间的步进
  startStep: {
    type: String,
    default: "00:30"
  },
  // 开始时间的结束选择
  startTimeEnd: {
    type: String,
    default: "24:00"
  },
  // 结束时间的占位符
  endPlaceholder: {
    type: String,
    default: '请选择结束时间'
  },
  // 结束时间的开始选择
  endTimeStart: {
    type: String,
    default: '08:00'
  },
  // 结束时间的步进
  endStep: {
    type: String,
    default: "00:30"
  },
  // 结束时间的结束选择
  endTimeEnd: {
    type: String,
    default: "24:00"
  },
})

let emits = defineEmits(['timeChange'])

// 开始时间
let startTime = ref<string>('')
// 结束时间
let endTime = ref<string>('')
// 是否禁用结束时间
let endTimeDisabled = ref<boolean>(true)

// 监听时间变化
watch(() => [startTime.value, endTime.value], val => {
  if(!val[0]) {
    endTime.value = ''
    endTimeDisabled.value = true
  } else {
    endTimeDisabled.value = false
  }
  emits('timeChange', {
    startTime: val[0],
    endTime: val[1]
  })
})
</script>
