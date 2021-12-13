<template>
  <div v-if="data.length <= 0" style="text-align:center;padding: 16px">
    暂无数据
  </div>
  <el-tree
    v-else
    class="common-tree"
    ref="tree"
    :data="data"
    :node-key="nodeKey"
    :show-checkbox="multiple"
    :check-strictly="treeProps['check-strictly'] || true"
    :expand-on-click-node="false"
    :check-on-click-node="true"
    :default-expanded-keys="treeProps['default-expanded-keys'] || value"
    :default-checked-keys="value"
    @node-click="handleNodeClick"
    @check-change="handleCheckChange"
    v-bind="treeProps"
  ></el-tree>
</template>
<script>
import { defineComponent, reactive, ref, toRefs, watch } from 'vue'

export default defineComponent({
  props: {
    value: {
      type: Array,
      default: () => [],
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
    const { multiple, treeProps } = props
    const state = reactive({
      nodeKey: treeProps['node-key'] || 'id',
      tree: ref(null),
      handleNodeClick(node) {
        if (!multiple) {
          state.tree.setCheckedKeys([node[state.nodeKey]])
          state.hanelEmit()
          emit('close')
        }
      },
      handleCheckChange() {
        if (!multiple) {
          return
        }
        state.hanelEmit()
      },
      hanelEmit() {
        const res = state.tree.getCheckedKeys()
        emit('tree-change', multiple ? res : res[0] || '')
      },
      updateValue(value) {
        if (state.tree) {
          state.tree.setCheckedKeys(value)
          // state.hanelEmit()
        }
      },
    })

    watch(
      () => props.value,
      v => {
        state.updateValue(v)
      },
      {
        immediate: true,
      }
    )

    return toRefs(state)
  },
})
</script>
<style lang="scss" scoped>
.common-tree {
  overflow: auto;
  :deep {
    .el-tree-node {
      &.is-checked {
        > .el-tree-node__content {
          color: $mainColor;
        }
      }
    }
  }
}
</style>
