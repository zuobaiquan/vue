<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <div class="m-choose-icon-dialog-body-height">
    <el-dialog :title="title" v-model="dialogVisible">
      <el-scrollbar>
        <div class="item" v-for="(item, index) in Object.keys(ElIcons)" :key="index" @click="clickItem(item)">
          <div class="text">
            <component :is="`el-icon-${toLine(item)}`"></component>
          </div>
          <div class="icon">{{ item }}</div>
        </div>
      </el-scrollbar>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import * as ElIcons from '@element-plus/icons'
import { watch, ref } from 'vue'
import useCopy from '../../../hooks/useCopy'
import { toLine } from '../../../utils'
const props = defineProps<{
  // 弹出框的标题
  title: string,
  // 弹出框的显示/隐藏
  visible: boolean
}>()

const emits = defineEmits(['update:visible'])
// 拷贝一份父组件传递过来的visible
let dialogVisible = ref<boolean>(props.visible)

// 监听visible的变化 只能监听第一次的变化
watch(() => props.visible, val => {
  dialogVisible.value = val
})
// 监听组件内部的dialogVisible变化
watch(() => dialogVisible.value, val => {
  emits('update:visible', val)
})
// 点击按钮显示弹出框
const handleClick = () => {
  // 需要修改父组件的数据
  emits('update:visible', !props.visible)
}
// 点击图标
const clickItem = (item:string) => {
  let text = `<el-icon-${toLine(item)} />`
  // 复制文本
  useCopy(text)
  // 关闭弹框
  dialogVisible.value = false
}
</script>

<style lang="scss" scoped>
.item {
  width: 25%;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
  .text {
    font-size: 14px;
  }
  .icon {
    flex: 1;
  }
}

svg {
  width: 2em;
  height: 2em;
}
</style>