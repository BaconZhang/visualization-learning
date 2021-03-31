import Vector2D from '../common/vector2D.js'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

ctx.translate(0, canvas.height)
ctx.scale(1, -1)
ctx.lineCap = 'round'

/**
 * @param {CanvasRenderingContext2D} ctx 
 * @param {Vector2D} v0 
 * @param {Number} length 
 * @param {Number} thickness 
 * @param {Number} dir 
 * @param {Number} bias 
 */
function drawBranch(ctx, v0, length, thickness, dir, bias) {
  const v = new Vector2D(1, 0).rotate(dir).scale(length)
  const v1 = v0.copy().add(v)

  ctx.lineWidth = thickness
  ctx.beginPath()
  ctx.moveTo(v0.x, v0.y)
  ctx.lineTo(v1.x, v1.y)
  ctx.stroke()

  if (thickness > 2) {
    const left = Math.PI / 4 + 0.5 * (dir + 0.8) + bias * (Math.random() - 0.5)
    drawBranch(ctx, v1, length * 0.8, thickness * 0.8, left, bias)
    const right = Math.PI / 4 + 0.5 * (dir - 0.8) + bias * (Math.random() - 0.5);
    drawBranch(ctx, v1, length * 0.8, thickness * 0.8, right, bias)
  }
  
}

const v0 = new Vector2D(256, 0)
drawBranch(ctx, v0, 80, 10, Math.PI / 2, 3)