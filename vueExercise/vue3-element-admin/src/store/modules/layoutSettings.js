import { getItem, setItem } from '@/utils/storage' //getItem和setItem是封装的操作localStorage的方法
import defaultSettings from '@/default-settings'
export default {
  namespaced: true,
  state: getItem('defaultSettings') || defaultSettings,
  mutations: {
    SAVE_SETTINGS(state, data) {
      Object.entries(data).forEach(([key, value]) => {
        state[key] = value
      })
      setItem('defaultSettings', data)
    },
  },
}
