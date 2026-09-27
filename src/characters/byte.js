import { DEFS } from '../core/parts.js';

// Ceramic mini robot: glass visor with glowing LED eyes, antenna beacon.
export default {
  name: 'byte',
  title: 'Byte',
  set: 'abstract',
  description: 'Ceramic mini robot. Glass visor, LED eyes, antenna beacon that signals state.',
  svg: `
<defs>${DEFS}
  <radialGradient id="b-shell" cx="34%" cy="26%" r="88%"><stop offset="0" stop-color="#fff"/><stop offset=".38" stop-color="#eef0f5"/><stop offset=".8" stop-color="#c3c9d6"/><stop offset="1" stop-color="#8d96a9"/></radialGradient>
  <radialGradient id="b-ear" cx="35%" cy="30%" r="80%"><stop offset="0" stop-color="#f4f6fa"/><stop offset="1" stop-color="#7c8598"/></radialGradient>
  <linearGradient id="b-visor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b3247"/><stop offset="1" stop-color="#06080e"/></linearGradient>
  <linearGradient id="b-gloss" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".28"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
  <linearGradient id="b-scan"><stop offset="0" style="stop-color:var(--glow)" stop-opacity="0"/><stop offset=".5" style="stop-color:var(--glow)" stop-opacity=".45"/><stop offset="1" style="stop-color:var(--glow)" stop-opacity="0"/></linearGradient>
  <clipPath id="b-clip"><rect x="30" y="47" width="60" height="40" rx="18"/></clipPath>
</defs>
<g class="antenna">
  <path d="M60 36V21" stroke="#8d96a9" stroke-width="3" stroke-linecap="round"/>
  <g class="bulb"><circle cx="60" cy="16" r="11" fill="url(#gg)"/><circle cx="60" cy="16" r="5.5" style="fill:var(--glow)"/></g>
  <circle cx="58.3" cy="14.3" r="1.6" fill="#fff" opacity=".85"/>
</g>
<circle cx="20" cy="67" r="8" fill="url(#b-ear)"/><circle cx="100" cy="67" r="8" fill="url(#b-ear)"/>
<g class="ear"><circle cx="20" cy="67" r="3" style="fill:var(--glow)"/><circle cx="100" cy="67" r="3" style="fill:var(--glow)"/></g>
<rect x="22" y="34" width="76" height="66" rx="28" fill="url(#b-shell)"/>
<ellipse cx="43" cy="41.5" rx="15" ry="6" transform="rotate(-16 43 41.5)" fill="url(#hl)"/>
<rect x="30" y="47" width="60" height="40" rx="18" fill="url(#b-visor)"/>
<g clip-path="url(#b-clip)">
  <ellipse cx="60" cy="67" rx="28" ry="16" fill="url(#gg)" opacity=".45"/>
  <rect class="scan st s-working" x="0" y="47" width="16" height="40" fill="url(#b-scan)"/>
  <g style="fill:var(--glow);stroke:var(--glow)">
    <g class="st s-idle"><g class="blink" stroke="none"><rect x="45" y="61" width="7" height="12" rx="3.5"/><rect x="68" y="61" width="7" height="12" rx="3.5"/></g></g>
    <g class="st s-working"><g class="look" stroke="none"><rect x="43" y="65" width="10" height="5" rx="2.5"/><rect x="67" y="65" width="10" height="5" rx="2.5"/></g></g>
    <g class="st s-attention" fill="none" stroke-width="3"><circle cx="48.5" cy="66" r="5.2"/><circle cx="71.5" cy="66" r="5.2"/></g>
    <g class="st s-done" fill="none" stroke-width="3" stroke-linecap="round"><path d="M43 69q5.5-8 11 0M66 69q5.5-8 11 0"/><path d="M56 77q4 3.5 8 0" stroke-width="2"/></g>
  </g>
  <g class="st s-done"><ellipse cx="39" cy="77" rx="6" ry="3.5" fill="url(#bl)"/><ellipse cx="81" cy="77" rx="6" ry="3.5" fill="url(#bl)"/></g>
  <rect x="30" y="47" width="60" height="17" fill="url(#b-gloss)"/>
</g>
<rect x="30" y="47" width="60" height="40" rx="18" fill="none" stroke="#000" stroke-opacity=".18" stroke-width="1.2"/>`,
  css: `
.antenna{transform-origin:60px 36px}
[data-s=idle] .bob{animation:float 3.6s ease-in-out infinite}
[data-s=idle] .shadow{animation:shadow-float 3.6s ease-in-out infinite}
[data-s=idle] .antenna{animation:b-sway 3.6s ease-in-out infinite}
[data-s=working] .bob{animation:float 1.3s ease-in-out infinite}
[data-s=working] .shadow{animation:shadow-float 1.3s ease-in-out infinite}
[data-s=working] .bulb,[data-s=working] .ear{animation:flash .5s steps(2) infinite}
[data-s=working] .scan{animation:b-scan 1.5s linear infinite}
[data-s=attention] .bulb{animation:flash .6s ease-in-out infinite}
[data-s=done] .antenna{animation:b-sway .9s ease-in-out infinite}
@keyframes b-sway{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}
@keyframes b-scan{from{transform:translateX(14px)}to{transform:translateX(90px)}}`,
};
