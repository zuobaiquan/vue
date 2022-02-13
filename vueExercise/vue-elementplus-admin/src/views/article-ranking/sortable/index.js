/**
实现 表格拖动排序 的功能
对于这个功能，我们需要先来分析一下它的具体业务：
鼠标在某一行中按下
移动鼠标位置
产生对应的替换样式
鼠标抬起，表格行顺序发生变化

监听鼠标事件，完成对应的 UI 视图处理
具体来说：
监听鼠标的按下事件
监听鼠标的移动事件
生成对应的 UI 样式
监听鼠标的抬起事件

这个轮子就是 sortablejs：用于在列表中实现拖动排序
 */

import { ref } from 'vue'
import Sortable from 'sortablejs'
import { articleSort } from '@/api/article'
import { ElMessage } from 'element-plus'
import i18n from '@/i18n'
// 排序相关
// 获得那个表格
export const tableRef = ref(null)

/**
 * 初始化排序
 */
export const initSortable = (tableData, cb) => {
  // 设置拖拽效果
  const el = tableRef.value.$el.querySelectorAll(
    '.el-table__body-wrapper > table > tbody'
  )[0]
  // 1. 要拖拽的元素
  // 2. 配置对象
  Sortable.create(el, {
    // 拖拽时类名
    ghostClass: 'sortable-ghost',
    // 拖拽结束的回调方法
    // 拖拽结束的回调方法
    async onEnd (event) {
      const { newIndex, oldIndex } = event
      // 修改数据
      await articleSort({
        initRanking: tableData.value[oldIndex].ranking,
        finalRanking: tableData.value[newIndex].ranking
      })
      ElMessage.success({
        message: i18n.global.t('msg.article.sortSuccess'),
        type: 'success'
      })
      // 直接重新获取数据无法刷新 table！！
      tableData.value = []
      // 重新获取数据
      cb && cb()
    }
  })
}
