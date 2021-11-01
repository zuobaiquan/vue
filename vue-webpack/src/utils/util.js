export function arrayFindIndex(arr, pred) {
  for (let i = 0; i !== arr.length; ++i) {
    if (pred(arr[i])) {
      return i
    }
  }
  return -1
}

export function arrayFind(arr, pred) {
  const idx = arrayFindIndex(arr, pred)
  return idx !== -1 ? arr[idx] : undefined
}

export function merge(target) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    const source = arguments[i] || {}
    for (const prop in source) {
      if (source.hasOwnProperty(prop)) {
        const value = source[prop]
        if (value !== undefined) {
          target[prop] = value
        }
      }
    }
  }
  return target
}
export function highlight(text, keyword, hlClass = 'highlight-text') {
  if (!keyword) return text
  if (Array.isArray(keyword)) {
    keyword.forEach(item => {
      if (item.indexOf('+') > 0) {
        const arr = item.split('+')
        if (arr.every(item2 => text.indexOf(item2) > -1)) {
          // 文字包含所有关键字
          arr.forEach(item3 => {
            text = highlight(text, item3, hlClass)
          })
        }
      } else {
        text = highlight(text, item, hlClass)
      }
    })
    return text
  } else {
    const reg = new RegExp(keyword, 'ig')
    return text.replace(reg, `<span class="${hlClass}">${keyword}</span>`)
  }
}
export function isEmptyStr(str) {
  if (!str && str !== 0) {
    return true
  }
  return false
}

export function formatNum(num) {
  if (num < 10) {
    return '0' + num
  }
  return num
}
const switchConnectSign = (date, type) => {
  if (type === 0) {
    return date
      .replace('T', ' ')
      .replace(/-/g, '/')
      .replace('.000+0000', '')
      .replace('.000+0800', '')
  } else if (type === 1) {
    return date
      .replace(/T/, ' ')
      .replace(/\//g, '-')
      .replace('.000+0000', '')
  }
}

export function parseTime(date, formatStr) {
  if (!date) {
    return '--'
  }
  let d
  date = date || new Date()
  if (date instanceof Date) {
    // 传入Date对象
    d = date
  } else if (typeof date === 'string') {
    // 日期格式
    date = date.replace(/(\d{4})(\d{1,2})(\d{1,2})/, (a, b, c, d) => { return `${b}-${c}-${d}` })
    d = new Date(switchConnectSign(date, 0))
  } else if (typeof date === 'number') {
    // 时间戳
    d = new Date(date)
  }
  if (!formatStr) {
    // 未传入格式
    formatStr = 'Y-M-D'
    // 未传入格式
    // formatStr = 'Y-M-D H:F:S';
  }
  const formatNumStr = num => (num < 10 ? '0' + num : num)
  return formatStr.replace(/Y|y|M|m|D|d|H|h|F|f|S|s/g, v => {
    switch (v) {
      case 'y':
        // yyyy => yy
        return (d.getFullYear() + '').slice(2)
      case 'Y':
        // yyyy
        return d.getFullYear()
      case 'm':
        // m
        return d.getMonth() + 1
      case 'M':
        // mm
        return formatNumStr(d.getMonth() + 1)
      case 'd':
        // d
        return d.getDate()
      case 'D':
        // dd
        return formatNumStr(d.getDate())
      case 'h':
        // h
        return d.getHours()
      case 'H':
        // hh
        return formatNumStr(d.getHours())
      case 'f':
        // f
        return d.getMinutes()
      case 'F':
        // ff
        return formatNumStr(d.getMinutes())
      case 's':
        // s
        return d.getSeconds()
      case 'S':
        // ss
        return formatNumStr(d.getSeconds())
    }
  })
}

export function diffDays(startDate, endDate) {
  startDate = Date.parse(startDate)
  endDate = Date.parse(endDate)
  const dateSpan = endDate - startDate
  const iDays = Math.floor(dateSpan / (24 * 3600 * 1000))
  return iDays
}

export function toThousand(num) {
  return (+num || 0)
    .toString()
    .replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

export const convertCurrency = money => {
  if (!money) {
    return '零'
  }
  // 汉字的数字
  const cnNums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  // 基本单位
  const cnIntRadice = ['', '拾', '佰', '仟']
  // 对应整数部分扩展单位
  const cnIntUnits = ['', '万', '亿', '兆']
  // 对应小数部分单位
  const cnDecUnits = ['角', '分', '毫', '厘']
  // 整数金额时后面跟的字符
  // const cnInteger = '整'
  // 整型完以后的单位
  const cnIntLast = '元'
  // 最大处理的数字
  const maxNum = 9999999999999999.99
  // 金额整数部分
  let integerNum
  // 金额小数部分
  let decimalNum
  // 输出的中文金额字符串
  let chineseStr = ''
  // 分离金额后用的数组，预定义
  let parts
  if (money === '') { return '' }
  money = parseFloat(money)
  if (money >= maxNum) {
    // 超出最大处理数字
    return ''
  }
  if (money === 0) {
    chineseStr = cnNums[0] + cnIntLast
    return chineseStr
  }
  // 转换为字符串
  money = money.toString()
  if (money.indexOf('.') === -1) {
    integerNum = money
    decimalNum = ''
  } else {
    parts = money.split('.')
    integerNum = parts[0]
    decimalNum = parts[1].substr(0, 2)
  }
  // 获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    var zeroCount = 0
    var IntLen = integerNum.length
    for (var i = 0; i < IntLen; i++) {
      const n = integerNum.substr(i, 1)
      const p = IntLen - i - 1
      const q = p / 4
      const m = p % 4
      if (n === '0') {
        zeroCount++
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0]
        }
        // 归零
        zeroCount = 0
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m]
      }
      if (m === 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q]
      }
    }
    chineseStr += cnIntLast
  }
  // 小数部分
  if (decimalNum !== '') {
    var decLen = decimalNum.length
    for (let i = 0; i < decLen; i++) {
      const n = decimalNum.substr(i, 1)
      if (n !== '0') {
        chineseStr += cnNums[Number(n)] + cnDecUnits[i]
      }
    }
  }
  if (chineseStr === '') {
    chineseStr += cnNums[0] + cnIntLast
  } else if (decimalNum === '') {
    chineseStr
  }
  return chineseStr
}

export function getStyle(obj, attr) {
  // 只适用于IE
  if (obj) {
    if (obj.currentStyle) {
      return obj.currentStyle[attr]
    } else {
      // 适用于FF,Chrome,Safa
      return getComputedStyle(obj, false)[attr]
    }
  }
}

