<template>
  <el-popover
    v-model:visible="visible"
    placement="bottom-start"
    :width="430"
    trigger="click"
  >
    <template #reference>
      <div class="result">
        <div>{{ result }}</div>
        <div>
          <el-icon-arrowdown :class="{ rotate: visible }"></el-icon-arrowdown>
        </div>
      </div>
    </template>
    <div class="container">
      <el-row>
        <el-col :span="8">
          <el-radio-group v-model="radioValue" size="small">
            <el-radio-button label="按城市"></el-radio-button>
            <el-radio-button label="按省份"></el-radio-button>
          </el-radio-group>
        </el-col>
        <el-col :offset="2" :span="14">
          <el-select size="small" placeholder="请搜索城市" v-model="selectValue" filterable :filter-method="filterMethod" @change="changeSelect">
            <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-col>
      </el-row>
      <template v-if="radioValue === '按城市'">
        <div class="city">
          <!-- 字母区域 -->
          <div
            class="city-item"
            @click="clickChat(item)"
            v-for="(item, index) in Object.keys(cities)"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
        <el-scrollbar max-height="300px">
          <template v-for="(value, key) in cities" :key="key">
            <el-row style="margin-bottom: 10px" :id="key">
              <el-col :span="2">{{ key }}：</el-col>
              <el-col class="city-name" :span="22">
                <div
                  @click="clickItem(item)"
                  class="city-name-item"
                  v-for="item in value"
                  :key="item.id"
                >
                  <div>{{ item.name }}</div>
                </div>
              </el-col>
            </el-row>
          </template>
        </el-scrollbar>
      </template>
      <template v-else>
        <div class="province">
          <div
            class="province-item"
            v-for="(item, index) in Object.keys(provinces)"
            :key="index"
            @click="clickChat(item)"
          >
            {{ item }}
          </div>
        </div>
        <el-scrollbar max-height="300px">
          <template
            v-for="(item, index) in Object.values(provinces)"
            :key="index"
          >
            <template v-for="(item1, index1) in item" :key="index1">
              <el-row style="margin-bottom: 10px" :id="item1.id">
                <el-col :span="4">{{ item1.name }}：</el-col>
                <el-col class="province-name" :span="20">
                  <div
                    class="province-name-item"
                    v-for="(item2, index2) in item1.data"
                    :key="index2"
                  >
                    <div @click="clickProvince(item2)">{{ item2 }}</div>
                  </div>
                </el-col>
              </el-row>
            </template>
          </template>
        </el-scrollbar>
      </template>
    </div>
  </el-popover>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue"
import city from "../lib/city"
import province from "../lib/province.json"
import { City, Province } from "./type"

// 分发事件
let emits = defineEmits(["changeCity", "changeProvince"])

// 最终选择的结果
let result = ref<string>("请选择")
// 控制弹出层的显示
let visible = ref<boolean>(false)
// 单选框的值 按城市还是按省份
let radioValue = ref<string>("按城市")
// 下拉框的值 搜索下拉框
let selectValue = ref<string>("")
// 下拉框显示城市的数据
let options = ref<City[]>([])
// 所有的城市数据
let cities = ref(city.cities)
// 所有省份的数据
let provinces = ref(province)
// 过滤城市数据
let allCity = ref<City[]>([])
// 点击每个城市
let clickItem = (item: City) => {
  // 给结果赋值
  result.value = item.name
  // 关闭弹出层
  visible.value = false
  emits("changeCity", item)
}

let clickProvince = (item: string) => {
  // 给结果赋值
  result.value = item
  // 关闭弹出层
  visible.value = false
  emits("changeProvince", item)
}
// 点击字母区域
let clickChat = (item: string) => {
  let el = document.getElementById(item)
  if (el) {
    el.scrollIntoView()
  }
}
// 自定义过滤
let filterMethod = (val: string) => {
  let values = Object.values(cities.value).flat(2)
  if(val === '') {
    options.value = values
  } else {
    if(radioValue.value === '按城市') {
      // 中文和拼音一起过滤
      options.value = values.filter(item => item.name.includes(val) || item.spell.includes(val))
    } else {
      // 中文过滤
      options.value = values.filter(item => item.name.includes(val))
    }
  }
}

// 下拉框选择
let changeSelect = (val: number) => {
  let city = allCity.value.find(item => item.id === val)!
  result.value = city.name
  if(radioValue.value === '按城市') {
    emits('changeCity', city)
  } else {
    emits('changeProvince', city.name)
  }
  
}

onMounted(() => {
  // 获取下拉框的城市数据
  let values = Object.values(cities.value).flat(2)
  allCity.value = values
  options.value = values
  
})
</script>

<style lang="scss" scoped>
.result {
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
}

.rotate {
  transform: rotate(180deg);
}
svg {
  width: 1em;
  height: 1em;
  position: relative;
  top: 2px;
  margin-left: 4px;
  transition: all 0.25s linear;
}

.container {
  padding: 6px;
}

.city,
.province {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;
  &-item {
    padding: 3px 6px;
    margin-right: 8px;
    margin-bottom: 8px;
    border: 1px solid #eee;
    cursor: pointer;
  }
}

.city-name,
.province-name {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .city-name-item,
  .province-name-item {
    margin-right: 6px;
    margin-bottom: 6px;
    cursor: pointer;
  }
}
</style>
