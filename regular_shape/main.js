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
draw(regularShape(6, -64, 128, 50));

draw(regularShape(11, -64, -64, 30));
draw(regularShape(60, 128, -64, 6));