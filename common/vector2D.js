class Vector2D {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  get length() {
    return Math.hypot(this.x, this.y)
  }

  get dir() {
    return Math.atan2(this.y, this.x)
  }

  copy() {
    return new Vector2D(this.x, this.y)
  }
  /**
   * @param {Vector2D} v 
   */
  add(v) {
    this.x += v.x
    this.y += v.y
    return this
  }
  /**
   * @param {Vector2D} v 
   */
  sub(v) {
    this.x -= v.x
    this.y -= v.y
    return this
  }
  /**
   * @param {Number} n
   */
  scale(n) {
    this.x *= n
    this.y *= n
    return this
  }
  /**
   * @param {Vector2D} v 
   */
  dot(v) {
    return this.x * v.x + this.y * v.y
  }
  /**
   * @param {Vector2D} v 
   */
  cross(v) {
    return this.x * v.y - this.y * v.x
  }

  normalize() {
    return this.scale(1 / this.length)
  }

  rotate(rad) {
    const c = Math.cos(rad)
    const s = Math.sin(rad)
    const { x, y } = this

    this.x = x * c - y * s
    this.y = x * s + y * c

    return this
  }
}

export default Vector2D