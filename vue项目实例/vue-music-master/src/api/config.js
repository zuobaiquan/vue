// 配置请求文件

// 配置通用参数
export const commonParams = {
  g_tk: 5381,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0
}

// 配置jsonp库的通用的options
export const options = {
  // 通过qq得到了回掉函数的参数名
  param: 'jsonpCallback'
}

// PC端的回掉函数
export const optionsPc = {
  // 通过qq得到了回掉函数的参数名
  param: 'callback'
}

// 配置返回码
export const ERR_OK = 0
