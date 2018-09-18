import jsonp from '../assets/js/jsonp'
import {commonParams, optionsPc} from './config'
// 获取歌手页面相关数据
export default function getSingerList () {
  const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
  const data = {
    'comm': {
      'ct': 24,
      'cv': 10000
    },
    'singerList': {
      'module': 'Music.SingerListServer',
      'method': 'get_singer_list',
      'param': {
        'area': -100,
        'sex': -100,
        'genre': -100,
        'index': -100,
        'sin': 0,
        'cur_page': 1
      }
    }
  }
  // 实现将多个对象拷贝到同一个对象中
  const param = Object.assign({}, commonParams,
    {
      loginUin: 0,
      hostUin: 0,
      format: 'jsonp',
      platform: 'yqq',
      needNewCode: 0,
      data: JSON.stringify(data)
    })
  // 返回值就是promise
  return jsonp(url, param, optionsPc)
}
