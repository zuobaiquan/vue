import jsonp from '../assets/js/jsonp'
import {commonParams, options, optionsPc} from './config'

// 获取推荐页面轮播图数据
export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  // 实现将多个对象拷贝到同一个对象中
  const param = Object.assign({}, commonParams,
    {uin: 0, format: 'json', platform: 'h5', needNewCode: 1, _: 1527572070718})
  // 返回值就是promise
  return jsonp(url, param, options)
}

export function getrecomPlaylist () {
  const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
  const data = {
    'comm': {'ct': 24},
    'category': {'method': 'get_hot_category', 'param': {'qq': ''}, 'module': 'music.web_category_svr'},
    'recomPlaylist': {'method': 'get_hot_recommend', 'param': {'async': 1, 'cmd': 2}, 'module': 'playlist.HotRecommendServer'},
    'playlist': {'method': 'get_playlist_by_category', 'param': {'id': 8, 'curPage': 1, 'size': 40, 'order': 5, 'titleid': 8}, 'module': 'playlist.PlayListPlazaServer'},
    'new_song': {'module': 'QQMusic.MusichallServer', 'method': 'GetNewSong', 'param': {'type': 0}},
    'new_album': {'module': 'music.web_album_library', 'method': 'get_album_by_tags', 'param': {'area': 1, 'company': -1, 'genre': -1, 'type': -1, 'year': -1, 'sort': 2, 'get_tags': 1, 'sin': 0, 'num': 40, 'click_albumid': 0}},
    'toplist': {'module': 'music.web_toplist_svr', 'method': 'get_toplist_index', 'param': {}},
    'focus': {'module': 'QQMusic.MusichallServer', 'method': 'GetFocus', 'param': {}}
  }
  const param = Object.assign({}, commonParams,
    {
      loginUin: 0,
      hostUin: 0,
      format: 'jsonp',
      platform: 'yqq',
      needNewCode: 0,
      data: JSON.stringify(data)
    })
  return jsonp(url, param, optionsPc)
}
