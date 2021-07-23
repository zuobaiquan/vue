// window.onload = function () {
//   var deviceWidth = document.documentElement.clientWidth
//   if (deviceWidth > 750) deviceWidth = 750
//   document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px'
// }
const remjs = function () {
  var calculateSize = function () {
    var baseFontSize = 100
    var docEl = document.documentElement
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = baseFontSize * (clientWidth / 750) + 'px'
  }
  if (document.addEventListener) {
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    window.addEventListener(resizeEvt, calculateSize, false)
    document.addEventListener('DOMContentLoaded', calculateSize, false)
    calculateSize()
  }
}
remjs()