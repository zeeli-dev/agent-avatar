import { DEFS, eye, INK } from '../core/parts.js';

// Rocket snail. Straps on a booster while working, eyestalks stretch for attention.
export default {
  name: 'turbo',
  title: 'Turbo',
  set: 'wild',
  description: 'Rocket snail. Straps on a booster while working, stretches its eyestalks for input.',
  svg: `
<defs>${DEFS}
  <radialGradient id="tb-skin" cx="40%" cy="30%" r="80%"><stop offset="0" stop-color="#dcf8ff"/><stop offset=".6" stop-color="#8fd8ee"/><stop offset="1" stop-color="#4aa6c4"/></radialGradient>
  <radialGradient id="tb-shell" cx="38%" cy="30%" r="80%"><stop offset="0" stop-color="#ffd6f2"/><stop offset=".55" stop-color="#c77dff"/><stop offset="1" stop-color="#7b3fd1"/></radialGradient>
</defs>
<g class="st s-working" stroke="#9aa3b5" stroke-width="2" stroke-linecap="round">
  <path class="speed" d="M4 66h10"/><path class="speed" d="M2 78h12"/><path class="speed" d="M6 90h8"/>
</g>
<rect x="14" y="88" width="90" height="16" rx="8" fill="url(#tb-skin)"/>
<g class="stalks">
  <path d="M90 66L85 46M98 66L104 46" stroke="#6fc4df" stroke-width="3.6" stroke-linecap="round"/>
  <circle cx="85" cy="43" r="6.5" fill="#fff"/><circle cx="104" cy="43" r="6.5" fill="#fff"/>
  <g class="st s-idle"><g class="blink">${eye(86, 43, 2.8, 3.6)}${eye(105, 43, 2.8, 3.6)}</g></g>
  <g class="st s-working"><g class="look">${eye(87, 43, 2.6, 2.6)}${eye(106, 43, 2.6, 2.6)}</g>
    <path d="M78 40h33" stroke="#2b2233" stroke-width="2.2" stroke-linecap="round"/></g>
  <g class="st s-attention">${eye(85, 43, 3.6, 4.4)}${eye(104, 43, 3.6, 4.4)}</g>
  <g class="st s-done"><path d="M81 45q4-6 8 0M100 45q4-6 8 0" stroke="${INK}" stroke-width="2.4" fill="none" stroke-linecap="round"/></g>
</g>
<ellipse cx="94" cy="80" rx="12" ry="16" fill="url(#tb-skin)"/>
<ellipse cx="89" cy="70" rx="4" ry="6" fill="url(#hl)" opacity=".7"/>
<ellipse cx="86" cy="86" rx="4.5" ry="2.5" fill="url(#bl)"/><ellipse cx="102" cy="86" rx="4.5" ry="2.5" fill="url(#bl)"/>
<g class="st s-idle s-working"><path d="M90 84q4 3 8 0" stroke="${INK}" stroke-width="2" fill="none" stroke-linecap="round"/></g>
<g class="st s-attention"><ellipse cx="94" cy="85" rx="2.4" ry="3" fill="${INK}"/></g>
<g class="st s-done"><path d="M89 83h10q-5 6-10 0Z" fill="${INK}"/></g>
<circle cx="52" cy="70" r="23" fill="url(#tb-shell)"/>
<path d="M50 70a2 2 0 1 1 4 0a6 6 0 1 1-12 0a10 10 0 1 1 20 0a14 14 0 1 1-28 0" stroke="#7b3fd1" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".55"/>
<ellipse cx="42" cy="56" rx="10" ry="6" transform="rotate(-30 42 56)" fill="url(#hl)"/>
<g class="st s-working">
  <g class="flame"><ellipse cx="25" cy="43.5" rx="9" ry="4.5" fill="#ff8a3d"/><ellipse cx="28" cy="43.5" rx="5" ry="2.4" fill="#ffe066"/></g>
  <path d="M34 38l-5-5h7zM34 49l-5 5h7z" fill="#ff5d5d"/>
  <rect x="32" y="38" width="26" height="11" rx="5.5" fill="#f4f6fb"/><rect x="34" y="39.5" width="20" height="2.4" rx="1.2" fill="#fff"/>
  <path d="M57 38q9 5.5 0 11z" fill="#ff5d5d"/>
  <circle cx="45" cy="43.5" r="2.4" style="fill:var(--glow)"/>
</g>`,
  css: `
.stalks{transform-origin:94px 66px}
.flame{transform-box:fill-box;transform-origin:100% 50%}
.speed{opacity:0}
[data-s=idle] .squash{animation:breathe 3.6s ease-in-out infinite}
[data-s=idle] .stalks{animation:tb-sway 3s ease-in-out infinite}
[data-s=working] .bob{animation:tb-zoom .3s ease-in-out infinite alternate}
[data-s=working] .flame{animation:tb-flame .12s linear infinite alternate}
[data-s=working] .speed{animation:tb-speed .6s linear infinite}
[data-s=working] .speed:nth-child(2){animation-delay:.2s}
[data-s=working] .speed:nth-child(3){animation-delay:.4s}
[data-s=attention] .stalks{animation:tb-stretch .35s ease-in-out infinite alternate}
[data-s=done] .stalks{animation:tb-sway .6s ease-in-out infinite}
.root[data-lite] .speed{opacity:.8}
@keyframes tb-sway{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}
@keyframes tb-zoom{to{transform:translateX(2%)}}
@keyframes tb-flame{from{transform:scaleX(.7)}to{transform:scaleX(1.25)}}
@keyframes tb-speed{0%{transform:translateX(8px);opacity:0}30%{opacity:1}100%{transform:translateX(-8px);opacity:0}}
@keyframes tb-stretch{to{transform:scaleY(1.15)}}`,
};
