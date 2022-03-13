
// 驼峰命名转为横杠
export const toLine = (value:string) => {
  return value.replace(/(A-Z)g/, '-$1').toLocaleLowerCase()
}

// 标准时间转换为自定义格式
export const convertDate = (date:Date, gap:string = '-') => {
  return date.getFullYear() + gap + (date.getMonth() + 1) + gap + date.getDate()
}