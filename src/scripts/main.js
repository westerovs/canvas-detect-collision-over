import Ball from './components/Ball.js'
import Collision from './components/Collision.js'

const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
const target = new Ball(ctx, innerWidth / 2, innerHeight / 2, 100, 'black')

new Collision(canvas, ctx, target).init()
