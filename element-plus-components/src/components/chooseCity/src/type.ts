/*
 * @Descripttion: 类型接口
 * @Author: armin
 * @Date: 2022-02-17 16:04:19
 * @LastEditors: armin
 * @LastEditTime: 2022-02-17 16:38:16
 */
export interface City {
  id: number,
  // 拼音
  spell: string,
  // 名字
  name: string
}

export interface Province {
  // 省份名
  name: string,
  // 省份下面的城市
  data: string[],
  id?: string
}