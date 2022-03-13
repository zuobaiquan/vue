/*
 * @Descripttion: 
 * @Author: armin
 * @Date: 2022-01-05 16:08:54
 * @LastEditors: armin
 * @LastEditTime: 2022-02-17 10:32:52
 */
import {App} from 'vue'

import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'
import trend from './trend'
import notification from './notification'
import list from './list'
import menu from './menu'
import progress from './progress'
import chooseTime from './chooseTime'
import chooseDate from './chooseDate'
import chooseCity from './chooseCity'

const components = [ chooseArea, chooseIcon, trend, notification, list, menu, progress, chooseTime, chooseDate, chooseCity ]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}