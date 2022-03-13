<template>
 <m-choose-time :startOptions="startOptions" @timeChange="timeChange"></m-choose-time>
 <br />
 <el-button @click="handleSeach">查询时间</el-button>
 <br />
 <br />
 <m-choose-date :startOptions="startOptions" @dateChange="dateChange"></m-choose-date>
 <br />
 <el-button @click="seachDate">查询日期</el-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { convertDate } from '../../utils';

interface endValue {
  startTime: string
  endTime: string
}

interface endDateValue<T> {
  startDate: T
  endDate: T
}
let startOptions = {
  // size: 'small',
  // clearable: false
}
// 时间数据
let startTime = ref('')
let endTime = ref('')

// 日期数据
let startDate = ref<string>('')
let endDate = ref<string>('')

let timeChange = (val:endValue) => {
  startTime.value = val.startTime
  endTime.value = val.endTime
}

let dateChange = (val:endDateValue<Date>) => {
  const changeStartDate = val.startDate && convertDate(val.startDate)
  const changeEndDate = val.endDate && convertDate(val.endDate)
  startDate.value = changeStartDate
  endDate.value = changeEndDate
}
let handleSeach = () => {
  console.log('开始时间', startTime.value);
  console.log('结束时间', endTime.value);
}
let seachDate = () => {
  console.log('开始日期', startDate.value);
  console.log('结束日期', endDate.value);
  
}
</script>