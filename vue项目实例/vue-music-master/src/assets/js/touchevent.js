export default function touch (element, up) {
  let startX, startY, moveEndX, moveEndY, X, Y
  element.addEventListener('touchstart', function (e) {
    e.preventDefault()
    startX = e.touches[0].pageX
    startY = e.touches[0].pageY
  })
  element.addEventListener('touchmove', function (e) {
    e.preventDefault()
    moveEndX = e.changedTouches[0].pageX
    moveEndY = e.changedTouches[0].pageY
    X = moveEndX - startX
    Y = moveEndY - startY
    if (Math.abs(X) > Math.abs(Y) && X > 0) {
      // alert('向右')
      // right();
    } else if (Math.abs(X) > Math.abs(Y) && X < 0) {
      // alert('向左')
      // left()
    } else if (Math.abs(Y) > Math.abs(X) && Y > 0) {
      // alert('向下')
      // down()
    } else if (Math.abs(Y) > Math.abs(X) && Y < 0) {
      console.log('向上')
      up()
    }
  })
}
