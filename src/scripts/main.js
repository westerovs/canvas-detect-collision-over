import Ball from './components/Ball.js'

const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
}
let target = null
let cursor = null

// Event Listeners
addEventListener("mousemove", (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

const getDistance = (x1, y1, x2, y2) => {
  let xDistance = x2 - x1
  let yDistance = y2 - y1
  
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
}

const loop = () => {
  requestAnimationFrame(loop)
  
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  target.update()
  cursor.update()
  
  cursor.x = mouse.x
  cursor.y = mouse.y
  
  if (getDistance(target.x, target.y, cursor.x, cursor.y) < target.radius + cursor.radius) {
    target.color = 'red'
  }
  else {
    target.color = "black"
  }
}

const init = () => {
  target = new Ball(ctx, innerWidth / 2, innerHeight / 2, 100, 'black')
  cursor = new Ball(ctx, 0, 0, 20, 'blue')
  
  loop()
}
init()
