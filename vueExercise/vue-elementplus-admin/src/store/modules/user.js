// user.js 模块，用于处理所有和 用户相关 的内容
//
import { login, getUserInfo } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem, removeAllItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import { setTimeStamp } from '@/utils/auth'
import router, { resetRouter } from '@/router'
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken (state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    /**
     * 登录请求动作
     * @param {*} context
     * @param {*} userInfo
     * @returns
     */
    login (context, userInfo) {
      const { username, password } = userInfo
      // 不管成功和失败都是可以处理的
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then((data) => {
            this.commit('user/setToken', data.token)
            // 保存登录时间
            setTimeStamp()
            router.push('/')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    async getUserInfo (context, userInfo) {
      const res = await getUserInfo()
      this.commit('user/setUserInfo', res)
      return res
    },
    logout () {
      // 退出清理路由
      resetRouter()
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      removeAllItem()
      router.push('/login')
    }
  }
}
