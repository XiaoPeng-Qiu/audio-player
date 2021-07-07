export function debounce (func, time) {
  let timer = null
  return () => {
    clearTimeout(timer)
    timer = setTimeout(func, time)
  }
}
export function formatNumber (number) {
  number = Number(number) || 0
  return number > 10000 ? Math.round(number / 10000) + '万' : number
}
// 返回顶部
export function scrollInto(dom) {
  dom.scrollIntoView({ behavior: "smooth" })
}
// 计算日期
export function formatDate(date, fmt = 'yyyy-MM-dd hh:mm:ss') {
  date = date instanceof Date ? date : new Date(date)
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length)
      )
    }
  }
  return fmt
}
// 计算时间 传入毫秒数
export function formatTime (duration) {
  duration = (duration / 1000) | 0
  const minute = pad((duration / 60) | 0)
  const second = pad(Math.round(duration % 60))
  return `${minute}:${second}`
}
export function pad(num, n=2) {
  let len = num.toString().length
  while(len < n){
    num = '0' + num
    len++
  }
  return num
}