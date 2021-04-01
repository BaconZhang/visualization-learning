import Vector2D from '../common/vector2D.js'

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const {width, height} = canvas;
ctx.translate(0.5 * width, 0.5 * height);
ctx.scale(1, -1);

/**
 * @param {Number} edges 
 * @param {Number} x 
 * @param {Number} y 
 * @param {Number} step 
 */
function regularShape(edges, x, y, step) {
  const result = []
  let v = new Vector2D(x, y)
  
  const dir = new Vector2D(step, 0)
  const delta = Math.PI * 2 / edges

  result.push([v.x, v.y])
  for (let i = 0; i < edges; i++) {
    v = v.copy().add(dir.rotate(delta))
    result.push([v.x, v.y])
  }
  
  return result
}
/**
 * @param {Number} x0 
 * @param {Number} y0 
 * @param {Number} radius 
 * @param {Number} startAng 
 * @param {Number} endAng 
 */
function arc(x0, y0, radius, startAng = 0, endAng = Math.PI * 2) {
  const ang = Math.min(Math.PI * 2, endAng - startAng)
  const ret = ang === Math.PI * 2 ? [] : [[x0, y0]]
  const sgements = 360 * ang / Math.PI * 2
  for (let i = 0; i <= sgements; i++) {
    const targetAng = startAng + ang * i / sgements
    const x = x0 + radius * Math.cos(targetAng)
    const y = y0 + radius * Math.sin(targetAng)
    ret.push([x, y])
  }
  return ret
}
/**
 * @param {Number} x0 
 * @param {Number} y0 
 * @param {Number} radiusX 
 * @param {Number} radiusY 
 * @param {Number} startAng 
 * @param {Number} endAng 
 */
function ellipse(x0, y0, radiusX, radiusY, startAng = 0, endAng = Math.PI * 2) {
  const ang = Math.min(Math.PI * 2, endAng - startAng)
  const ret = ang === Math.PI * 2 ? [] : [[x0, y0]]
  const sgements = 360 * ang / Math.PI * 2
  for (let i = 0; i <= sgements; i++) {
    const targetAng = startAng + ang * i / sgements
    const x = x0 + radiusX * Math.cos(targetAng)
    const y = y0 + radiusY * Math.sin(targetAng)
    ret.push([x, y])
  }
  return ret
}
/**
 * @param {Number} x0 
 * @param {Number} y0 
 * @param {Number} p 
 * @param {Number} min 
 * @param {Number} max 
 */
function parabola(x0, y0, p, min, max) {
  const ret = []
  for (let i = 0; i < 60; i++) {
    const s = i / 60
    const t = min * (1 - s) + max * s
    const x = x0 + 2 *p * t ** 2
    const y = y0 + 2 * p * t
    ret.push([x, y])
  }
  return ret
}

function draw(points, strokeStyle = 'black', fillStyle = null) {
  ctx.strokeStyle = strokeStyle;
  ctx.beginPath();
  ctx.moveTo(...points[0]);
  for(let i = 1; i < points.length; i++) {
    ctx.lineTo(...points[i]);
  }
  ctx.closePath();
  if(fillStyle) {
    ctx.fillStyle = fillStyle;
    ctx.fill();
  }
  ctx.stroke();
}

draw(regularShape(3, 128, 128, 100));
// draw(regularShape(6, -64, 128, 50));

// draw(regularShape(11, -64, -64, 30));
// draw(regularShape(60, 128, -64, 6));

draw(arc(0, -200, 50))

draw(ellipse(0, 80, 70, 50))

draw(parabola(0, 0, 5.5, -10, 10))