// getters被当作快捷访问的形式进行访问
import {
  MAIN_COLOR
} from '@/constant'
import {
  getItem
} from '@/utils/storage'
import {
  generateColors
} from '@/utils/theme'
const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  /**
   * @returns true 表示已存在用户信息
   */
  hasUserInfo: state => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  cssVar: state => {
    return {
      ...state.theme.variables,
      ...generateColors(getItem(MAIN_COLOR))
    }
  },
  sidebarOpened: state => state.app.sidebarOpened,
  language: state => state.app.language,
  mainColor: state => state.theme.mainColor,
  tagsViewList: state => state.app.tagsViewList
}
export default getters