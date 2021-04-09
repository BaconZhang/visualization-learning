precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec4 plot(vec2 st, vec2 center) {
  float s = distance(st, center);
  return vec4(
    smoothstep(1.0, 0.0, s),
    smoothstep(0.2, 0.25, s) - smoothstep(0.2, 0.55, s),
    0.0,
    1.0 - s * s
  );
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution;
  float x = fract(u_time / 10.0);
  float y = -4.0 * (x - 0.5) * (x - 0.5) + 0.6;
  vec2 center = vec2(x, y);
  gl_FragColor = plot(st, center);
}