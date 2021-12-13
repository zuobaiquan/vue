import { getItem, setItem, removeItem } from '@/utils/storage'
import { AesEncryption } from '@/utils/encrypt'
import { toRaw } from 'vue'
export const TOKEN = 'VEA-TOKEN'
const COLLAPSE = 'VEA-COLLAPSE'

export default {
  namespaced: true,
  state: {
    title: 'Vue3 Element Admin',
    authorization: getItem(TOKEN),
    sidebar: {
      collapse: getItem(COLLAPSE),
    },
    device: 'desktop',
  },
  mutations: {
    setToken(state, data) {
      state.authorization = data
      // 保存到localStorage
      setItem(TOKEN, data)
    },
    clearToken(state) {
      state.authorization = ''

      removeItem(TOKEN)
    },
    setCollapse(state, data) {
      state.sidebar.collapse = data
      // 保存到localStorage
      setItem(COLLAPSE, data)
    },
    clearCollapse(state) {
      state.sidebar.collapse = ''

      removeItem(COLLAPSE)
    },
    setDevice(state, device) {
      state.device = device
    },
  },
  actions: {
    setToken({ commit, dispatch }, payload) {
      dispatch('clearToken')
      commit('setToken', payload)
    },
    clearToken({ commit }) {
      // 清除token
      commit('clearToken')
      // 清除用户信息
      commit('account/clearUserinfo', '', { root: true })
      // 清除标签栏
      commit('tags/CLEAR_ALL_TAGS', '', { root: true })
      // 清空menus
      commit('menu/SET_MENUS', [], { root: true })
    },
    setScreenCode({ commit, state }, password) {
      const authorization = toRaw(state.authorization)

      if (!password) {
        try {
          delete authorization.screenCode
        } catch (err) {
          console.log(err)
        }
        commit('setToken', authorization)

        return
      }

      // 对密码加密
      const screenCode = new AesEncryption().encryptByAES(password)

      commit('setToken', {
        ...authorization,
        screenCode,
      })
    },
  },
}
