import request from '@/utils/request'

/**
 * 个人项目
 */
export const feature = () => {
  return request({
    url: '/user/feature'
  })
}
/**
 *  章节模块
 */
export const chapter = () => {
  return request({
    url: '/user/chapter'
  })
}
