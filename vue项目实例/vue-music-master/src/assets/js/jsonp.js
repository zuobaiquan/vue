import originJSONP from 'jsonp'

// 使用promise包装jsonp
export default function jsonp (url, param, option) {
  // 如果当前这个url没有参数，那么会返回-1，就拼接？加参数，如果有参数就拼接&
  url += (url.indexOf('?') < 0 ? '?' : '&') + ParamToUrl(param)
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

// 将param对象转成url后面的请求参数

function ParamToUrl (param) {
  let url = ''
  // 通过遍历拿到param对象的值，拼接key=value的请求串
  for (let key in param) {
    if (param.hasOwnProperty(key)) {
      let value = param[key] !== undefined ? param[key] : ''
      url += `&${key}=${value}`
    }
  }
  // 如果url有值，那么把第一个&去掉
  return url ? url.substring(1) : ''
}
