<template>
  <div class="user-manage-container">
    <el-card class="header">
      <div>
        <el-button
          type="primary"
          @click="onImportExcelClick"
          v-permission="['importUser']"
        >
          {{ $t('msg.excel.importExcel') }}</el-button
        >
        <el-button type="success" @click="onToExcelClick">
          {{ $t('msg.excel.exportExcel') }}
        </el-button>
      </div>
    </el-card>
    <el-card>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column label="#" type="index" />
        <el-table-column prop="username" :label="$t('msg.excel.name')">
        </el-table-column>
        <el-table-column prop="mobile" :label="$t('msg.excel.mobile')">
        </el-table-column>
        <el-table-column :label="$t('msg.excel.avatar')" align="center">
          <template v-slot="{ row }">
            <el-image
              class="avatar"
              :src="row.avatar"
              :preview-src-list="[row.avatar]"
            ></el-image>
          </template>
        </el-table-column>
        <el-table-column :label="$t('msg.excel.role')">
          <template #default="{ row }">
            <div v-if="row.role && row.role.length > 0">
              <el-tag v-for="item in row.role" :key="item.id" size="mini">{{
                item.title
              }}</el-tag>
            </div>
            <div v-else>
              <el-tag size="mini">{{ $t('msg.excel.defaultRole') }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column :label="$t('msg.excel.openTime')">
          <template #default="{ row }">
            {{ $filters.dateFilter(row.openTime) }}
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('msg.excel.action')"
          fixed="right"
          width="260"
        >
          <template #default>
            <el-button type="primary" size="mini" @click="onShowClick(row._id)">
              {{ $t('msg.excel.show') }}
            </el-button>

            <el-button
              type="info"
              size="mini"
              @click="onShowRoleClick(row)"
              v-permission="['distributeRole']"
            >
              {{ $t('msg.excel.showRole') }}</el-button
            >
            <el-button
              type="danger"
              size="mini"
              @click="onRemoveClick(row)"
              v-permission="['removeUser']"
              >{{ $t('msg.excel.remove') }}</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        class="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[2, 5, 10, 20]"
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
    <export-to-excel v-model="exportToExcelVisible"></export-to-excel>
    <roles-dialog
      v-model="roleDialogVisible"
      :userId="selectUserId"
      @updateRole="getListData"
    ></roles-dialog>
  </div>
</template>
<script setup>
import { ref, onActivated, watch } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getUserManageList, deleteUser } from '@/api/user-manage'
import { watchSwitchLang } from '@/utils/i18n'
import ExportToExcel from './components/Export2Excel.vue'
import RolesDialog from './components/roles.vue' /** * 查看角色的点击事件 */
// 数据相关
const tableData = ref([])
const total = ref(0)
const page = ref(1)
const size = ref(2)
// 获取数据的方法
const getListData = async () => {
  const result = await getUserManageList({
    page: page.value,
    size: size.value
  })
  tableData.value = result.list
  total.value = result.total
}
getListData()
// 监听语言切换
watchSwitchLang(getListData)

// 分页相关
/**
 * size 改变触发
 */
const handleSizeChange = (currentSize) => {
  size.value = currentSize
  getListData()
}

/**
 * 页码改变触发
 */
const handleCurrentChange = (currentPage) => {
  page.value = currentPage
  getListData()
}

const router = useRouter()
/**
 * excel 导入点击事件
 */
const onImportExcelClick = () => {
  router.push('/user/import')
}
/**
 * 删除按钮点击事件
 */
const i18n = useI18n()
const onRemoveClick = (row) => {
  ElMessageBox.confirm(
    i18n.t('msg.excel.dialogTitle1') +
      row.username +
      i18n.t('msg.excel.dialogTitle2'),
    {
      type: 'warning'
    }
  ).then(async () => {
    await deleteUser(row._id)
    ElMessage.success(i18n.t('msg.excel.removeSuccess'))
    // 重新渲染数据
    getListData()
  })
}
/**
 * excel 导出点击事件
 */
const exportToExcelVisible = ref(false)
const onToExcelClick = () => {
  exportToExcelVisible.value = true
}
/**
 * 查看按钮点击事件
 */
const onShowClick = (id) => {
  router.push(`/user/info/${id}`)
}
const roleDialogVisible = ref(false)
// 保证每次打开重新获取用户角色数据
watch(roleDialogVisible, (val) => {
  if (!val) selectUserId.value = ''
})
const selectUserId = ref('')
const onShowRoleClick = (row) => {
  selectUserId.value = row._id
  roleDialogVisible.value = true
}
// 返回用户列表之后，数据不会自动刷新：
// 出现该问题的原因是因为：appmain 中使用 keepAlive 进行了组件缓存。
// 解决的方案也很简单，只需要：监听 onActivated 事件，重新获取数据即可
// 处理导入用户后数据不重新加载的问题
// 被keep-alive 缓存的组件激活时调用
onActivated(getListData)
</script>

<style lang="scss" scoped>
.user-manage-container {
  .header {
    margin-bottom: 22px;
    text-align: right;
  }
  ::v-deep .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  ::v-deep .el-tag {
    margin-right: 6px;
  }

  .pagination {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
