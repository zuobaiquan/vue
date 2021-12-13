<template>
  <el-popover
    ref="popover"
    placement="bottom-start"
    trigger="click"
    :popper-options="{ boundariesElement: 'viewport' }"
    v-model:visible="visible"
    :disabled="disabled"
  >
    <tree
      ref="tree"
      :value="is_multiple ? modelValue : modelValue ? [modelValue] : []"
      :data="data || treeProps.data"
      :multiple="is_multiple"
      :tree-props="treeProps"
      @tree-change="handleTreeChange"
      @close="visible = false"
    />

    <template #reference>
      <custom-select
        ref="select"
        :value="modelValue"
        :data="data || treeProps.data"
        :multiple="is_multiple"
        :tree-props="{ children, label, nodeKey }"
        @select-change="handleSelectChange"
      />
    </template>
  </el-popover>
</template>

<script>
import { defineComponent, reactive, ref, toRefs, onMounted, provide } from 'vue'

import Tree from './Tree.vue'
import CustomSelect from './Select.vue'

export default defineComponent({
  name: 'el-select-tree',
  components: {
    Tree,
    CustomSelect,
  },
  props: {
    modelValue: {},
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '请选择',
    },
    data: {
      type: Array,
      default() {
        return []
      },
    },
    multiple: {
      type: Boolean,
      default() {
        return false
      },
    },
    treeProps: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  setup(props, { emit }) {
    provide('placeholder', props.placeholder)
    const { treeProps, multiple } = props
    const state = reactive({
      popover: ref(null),
      visible: false,
      select: ref(null),
      tree: ref(null),
      is_multiple: multiple || treeProps['show-checkbox'],
      label:
        treeProps.props && treeProps.props.label
          ? treeProps.props.label
          : 'label',
      children:
        treeProps.props && treeProps.props.children
          ? treeProps.props.children
          : 'children',
      nodeKey: treeProps['node-key'] || 'id',
      handleTreeChange(value) {
        emit('update:modelValue', value)
        emit('change', value)
      },
      handleSelectChange(value) {
        // state.tree.updateValue(value)
        emit('update:modelValue', value)
        emit('change', value)
      },
      initPopoverStyle(width) {
        state.popover.popperRef.style.minWidth = width
        state.popover.popperRef.style.boxSizing = 'border-box'
        state.popover.popperRef.style.maxHeight = '400px'
        state.popover.popperRef.style.overflow = 'auto'
      },
    })

    onMounted(() => {
      state.initPopoverStyle(
        state.select.select.selectWrapper.offsetWidth + 'px'
      )
    })

    return toRefs(state)
  },
})
</script>
