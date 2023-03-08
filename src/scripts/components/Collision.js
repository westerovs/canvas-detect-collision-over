import Ball from './Ball.js'

export default class Collision {
  constructor(canvas, ctx, target) {
    this.canvas = canvas
    this.ctx = ctx
    this.target = target
    
    this.canvas.width = innerWidth
    this.canvas.height = innerHeight
    
    this.position = {
      x: innerWidth / 2,
      y: innerHeight / 2,
    }
    this.pointer = null
    
    let count = 0
    window.addEventListener('resize', () => {
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
      count++
    })
    window.addEventListener('pointermove', (event) => {
      this.position.x = event.clientX
      this.position.y = event.clientY
    })
  }
  
  getDistance = (x1, y1, x2, y2) => {
    let xDistance = x2 - x1
    let yDistance = y2 - y1
    
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
  }
  
  loop = () => {
    requestAnimationFrame(this.loop)
    
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.target.update()
    this.pointer.update()
    
    this.pointer.x = this.position.x
    this.pointer.y = this.position.y
    
    if (this.getDistance(this.target.x, this.target.y, this.pointer.x, this.pointer.y) < this.target.radius + this.pointer.radius) {
      this.target.color = 'tomato'
    }
    else {
      this.target.color = "black"
    }
  }
  
  init = () => {
    this.pointer = new Ball(this.ctx, 0, 0, 20, 'blue')
    
    this.loop()
  }
}