import jsonp from '../assets/js/jsonp'
import {commonParams, options} from './config'

// 获取歌手详情页面相关数据
export function getSingerDetail (singerid, begin) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const param = Object.assign({}, commonParams, {
    singerid: singerid,
    uin: 0,
    format: 'json',
    platform: 'h5page',
    needNewCode: 1,
    order: 'listen',
    from: 'h5',
    num: 15,
    begin: begin,
    _: 1528443902453
  })
  return jsonp(url, param, options)
}
