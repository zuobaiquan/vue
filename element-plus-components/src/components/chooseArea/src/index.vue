<template>
  <div>
    <el-select placeholder="请选择省份" clearable v-model="province">
      <el-option v-for="item in areas" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
    <el-select
      :disabled="!province"
      style="margin: 0 10px;"
      placeholder="请选择城市"
      clearable
      v-model="city"
    >
      <el-option v-for="item in selectCity" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
    <el-select
      style="margin-right: 10px;"
      :disabled="!city"
      placeholder="请选择区域"
      clearable
      v-model="area"
    >
      <el-option v-for="item in selectArea" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
    <el-select :disabled="!area" placeholder="请选择乡镇" clearable v-model="town">
      <el-option v-for="item in selectTown" :key="item.code" :value="item.code" :label="item.name"></el-option>
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { watch, ref } from 'vue'
import allAreas from '../lib/pcas-code.json'

export interface IAreaItem {
  name: string,
  code: string,
  children?: IAreaItem[]
}

export interface IData {
  name: string,
  code: string
}

// 下拉框选择省份的值
const province = ref<string>('')
// 下拉框选择城市的值
const city = ref<string>('')
// 下拉框选择区域的值
const area = ref<string>('')
// 下拉框选择乡镇的值
const town = ref<string>('')
// 拷贝全国省市区数据
const areas = ref(allAreas)
// 城市下拉框的所有值
const selectCity = ref<IAreaItem[]>([])

// 区域下拉框的所有值
const selectArea = ref<IAreaItem[]>([])

// 乡镇下拉框的所有值
const selectTown = ref<IAreaItem[]>([])
// 分发事件给父组件
const emits = defineEmits(['change'])

// 监听选择省份
watch(() => province.value, val => {
  if (val) {
    const cities = areas.value?.find(item => item.code === province.value)!.children
    selectCity.value = cities
  }
  city.value = ''
  area.value = ''
  town.value = ''
})

// 监听选择城市
watch(() => city.value, val => {
  if (val) {
    const areas = selectCity.value?.find(item => item.code === city.value)!.children!
    selectArea.value = areas
  }
  area.value = ''
  town.value = ''
})

// 监听选择区域
watch(() => area.value, val => {
  if (val) {
    const towns = selectArea.value?.find(item => item.code === area.value)!.children!
    selectTown.value = towns
  }
  town.value = ''
})

// 监听选择乡镇
watch(() => town.value, val => {
  if (val) {
    let provinceData: IData = {
      name: province.value && allAreas.find(item => item.code === province.value)!.name,
      code: province.value
    }
    let cityData: IData = {
      name: city.value && selectCity.value.find(item => item.code === city.value)!.name,
      code: city.value
    }
    let areaData: IData = {
      name: area.value && selectArea.value.find(item => item.code === area.value)!.name,
      code: area.value
    }
    let townData: IData = {
      name: val && selectTown.value.find(item => item.code === val)!.name,
      code: val
    }
    emits('change', { province: provinceData, city: cityData, area: areaData, town: townData })
  }
})
</script>