function draw(points, context, {
  strokeStyle = 'black',
  fillStyle = null,
  close = false,
} = {}) {
  context.strokeStyle = strokeStyle
  context.beginPath()
  context.moveTo(...points[0])
  for(let i = 1; i < points.length; i++) {
    context.lineTo(...points[i])
  }
  if(close) context.closePath()
  if(fillStyle) {
    context.fillStyle = fillStyle
    context.fill()
  }
  context.stroke()
}

export default function parametric(sFunc, tFunc, rFunc = (x, y) => [x,y]) {
  return function (start, end, seg = 100, ...args) {
    const points = []
    for (let i = 0; i <= seg; i ++) {
      const p = i / seg
      const t = start + (end - start) * p
      const x = sFunc(t, ...args)
      const y = tFunc(t, ...args)
      points.push(rFunc(x, y))
    }
    return {
      points,
      draw: (ctx, config) => draw(points, ctx, config)
    }
  }
}