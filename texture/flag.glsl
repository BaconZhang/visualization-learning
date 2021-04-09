precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 plot(vec2 st) {
  float s = distance(st, vec2(0.5));
  float h = 0.5 * sqrt(2.0) * 0.2;
  return vec3(
    step(0.0, s) - step(2.0 * h, s),
    step(h, s) - step(4.0 * h, s),
    step(3.0 * h, s) - step(5.0 * h, s)
  );
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution;

  vec3 color = plot(st) * vec3(1.0, 1.0, 1.0);
  gl_FragColor.rgb = color;
  gl_FragColor.a = 1.0;
}