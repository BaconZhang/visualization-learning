precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 plot (vec2 st) {
  float s = smoothstep(0.0, 1.0, st.x);
  return vec3(
    -0.6 * s + 1.0,
    -4.0 * (s - 0.5) * (s - 0.5) + 1.0,
    -4.0 * (s - 1.0) * (s - 1.0) + 1.0
  );
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution;

  vec3 color = plot(st) * vec3(1.0, 1.0, 1.0);
  gl_FragColor.rgb = color;
  gl_FragColor.a = 1.0;
}