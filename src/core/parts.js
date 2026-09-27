// Shared building blocks for every character: palette ink, SVG gradients,
// the cartoon face, and the HTML overlay (state badges + sparkles).

export const STATES = ['idle', 'working', 'attention', 'done'];

export const INK = '#1b1330';

export const DEFS = `
  <radialGradient id="hl"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset=".55" stop-color="#fff" stop-opacity=".45"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
  <radialGradient id="ga"><stop offset="0" style="stop-color:var(--a)" stop-opacity=".9"/><stop offset="1" style="stop-color:var(--a)" stop-opacity="0"/></radialGradient>
  <radialGradient id="gb"><stop offset="0" style="stop-color:var(--b)" stop-opacity=".9"/><stop offset="1" style="stop-color:var(--b)" stop-opacity="0"/></radialGradient>
  <radialGradient id="gg"><stop offset="0" style="stop-color:var(--glow)" stop-opacity=".85"/><stop offset="1" style="stop-color:var(--glow)" stop-opacity="0"/></radialGradient>
  <radialGradient id="bl"><stop offset="0" stop-color="#ff6f9f" stop-opacity=".6"/><stop offset="1" stop-color="#ff6f9f" stop-opacity="0"/></radialGradient>`;

export const eye = (x, y, rx, ry) =>
  `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${INK}"/><circle cx="${x + rx * 0.35}" cy="${y - ry * 0.4}" r="${rx * 0.38}" fill="#fff"/>`;

// Shared cartoon face. y = eye line, dx = eye offset from center, m = mouth line.
export const face = (y, { blush = true, mouth = true, rx = 4.2, ry = 5.6, dx = 12, m = y + 8.5 } = {}) => {
  const L = 60 - dx;
  const R = 60 + dx;
  return `
  ${blush ? `<ellipse cx="${L - 10}" cy="${y + 9}" rx="8" ry="4.5" fill="url(#bl)"/><ellipse cx="${R + 10}" cy="${y + 9}" rx="8" ry="4.5" fill="url(#bl)"/>` : ''}
  <g class="st s-idle">
    <g class="blink">${eye(L, y, rx, ry)}${eye(R, y, rx, ry)}</g>
    ${mouth ? `<path d="M56.5 ${m}q3.5 3 7 0" stroke="${INK}" stroke-width="2" fill="none" stroke-linecap="round"/>` : ''}
  </g>
  <g class="st s-working">
    <g class="look" fill="${INK}"><path d="M${L - 4.5} ${y - 1}h9a4.5 4.5 0 0 1-9 0Z"/><path d="M${R - 4.5} ${y - 1}h9a4.5 4.5 0 0 1-9 0Z"/></g>
    ${mouth ? `<path d="M57 ${m + 1}h6" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>` : ''}
  </g>
  <g class="st s-attention">
    ${eye(L, y, rx * 1.2, ry * 1.18)}${eye(R, y, rx * 1.2, ry * 1.18)}
    ${mouth ? `<ellipse cx="60" cy="${m + 1.5}" rx="2.6" ry="3.2" fill="${INK}"/>` : ''}
  </g>
  <g class="st s-done">
    <path d="M${L - 5} ${y + 1}q5-7 10 0M${R - 5} ${y + 1}q5-7 10 0" stroke="${INK}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    ${mouth ? `<path d="M54.5 ${m - 1}h11q-5.5 7-11 0Z" fill="${INK}"/><ellipse cx="60" cy="${m + 2.5}" rx="2.4" ry="1.3" fill="#ff7b9c"/>` : ''}
  </g>`;
};

// HTML overlay: composited badges + sparkles.
export const BADGES = `
  <div class="badge b-working"><i></i><i></i><i></i></div>
  <div class="badge b-attention"><svg viewBox="0 0 12 12"><rect x="5" y="1.6" width="2" height="6" rx="1" fill="#fff"/><circle cx="6" cy="10" r="1.2" fill="#fff"/></svg></div>
  <div class="badge b-done"><svg viewBox="0 0 12 12"><path d="M3 6.3l2 2 4-4.3" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></div>`;
// Star is SVG content, not clip-path: an animated clip-path element re-rasterizes every frame.
const STAR =
  '<i class="spk"><svg viewBox="-6 -6 12 12"><path d="M0-6C.9-1.1 1.1-.9 6 0 1.1.9.9 1.1 0 6-.9 1.1-1.1.9-6 0-1.1-.9-.9-1.1 0-6Z"/></svg></i>';
export const SPARKS = STAR.repeat(3);
