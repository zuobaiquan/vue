<template>
  <div class="article-create">
    <el-card>
      <el-input
        class="title-input"
        :placeholder="$t('msg.article.titlePlaceholder')"
        v-model="title"
        maxlength="20"
        clearable
      >
      </el-input>
      <el-tabs v-model="activeName">
        <el-tab-pane :label="$t('msg.article.markdown')" name="markdown">
          <markdown
            :detail="detail"
            :title="title"
            @onSuccess="onSuccess"
          ></markdown>
        </el-tab-pane>
        <el-tab-pane :label="$t('msg.article.richText')" name="editor">
          <editor
            :title="title"
            :detail="detail"
            @onSuccess="onSuccess"
          ></editor>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script setup>
import Editor from './components/Editor'
import Markdown from './components/Markdown'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { articleDetail } from '@/api/article'
const activeName = ref('markdown')
const title = ref('')
// 创建成功
const onSuccess = () => {
  title.value = ''
}
// 处理编辑相关
const route = useRoute()
const articleId = route.params.id
const detail = ref({})
const getArticleDetail = async () => {
  detail.value = await articleDetail(articleId)
  // 标题赋值
  title.value = detail.value.title
}
if (articleId) {
  getArticleDetail()
}
</script>

<style lang="scss" scoped>
.title-input {
  margin-bottom: 20px;
}
</style>
