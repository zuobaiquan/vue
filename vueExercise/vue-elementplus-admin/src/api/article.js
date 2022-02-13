/*
 * @Author: your name
 * @Date: 2022-01-15 13:27:10
 * @LastEditTime: 2022-01-15 17:58:35
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue-elementplus-admin/src/api/article.js
 */
import request from '@/utils/request'

/**
 * 获取列表数据
 */
export const getArticleList = (data) => {
  return request({
    url: '/article/list',
    params: data
  })
}
/**
 * 修改排序
 */
export const articleSort = (data) => {
  return request({
    url: '/article/sort',
    method: 'POST',
    data
  })
}
/**
 * 删除文章
 */
export const deleteArticle = (articleId) => {
  return request({
    url: `/article/delete/${articleId}`
  })
}

/**
 * 获取文章详情
 */
export const articleDetail = (articleId) => {
  return request({
    url: `/article/${articleId}`
  })
}
/**
 * 创建文章
 */
export const createArticle = (data) => {
  return request({
    url: '/article/create',
    method: 'POST',
    data
  })
}
/**
 * 编辑文章详情
 */
export const articleEdit = (data) => {
  return request({
    url: '/article/edit',
    method: 'POST',
    data
  })
}
