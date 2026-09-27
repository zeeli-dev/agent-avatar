import { DEFS, face } from '../core/parts.js';

// Alien in a flying saucer. Beams up crates while working, flashes its lights for attention.
export default {
  name: 'zorp',
  title: 'Zorp',
  set: 'wild',
  description: 'Alien in a flying saucer. Beams up crates while working, flashes its lights for input.',
  svg: `
<defs>${DEFS}
  <linearGradient id="zp-saucer" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4f6fb"/><stop offset=".5" stop-color="#b9c1d3"/><stop offset="1" stop-color="#6d7690"/></linearGradient>
  <radialGradient id="zp-alien" cx="40%" cy="30%" r="80%"><stop offset="0" stop-color="#dcffcc"/><stop offset="1" stop-color="#5fcf6a"/></radialGradient>
  <linearGradient id="zp-beam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--glow)" stop-opacity=".75"/><stop offset="1" style="stop-color:var(--glow)" stop-opacity="0"/></linearGradient>
</defs>
<g class="st s-working">
  <path class="beam" d="M48 80L32 110H88L72 80Z" fill="url(#zp-beam)"/>
  <g class="crate"><rect x="55" y="96" width="10" height="10" rx="2" fill="#ffb14a"/><rect x="55" y="96" width="10" height="3" rx="1.5" fill="#ffd28a"/></g>
</g>
<path d="M54 45l-4-8M66 45l4-8" stroke="#5fcf6a" stroke-width="2" stroke-linecap="round"/>
<circle cx="50" cy="36" r="2.6" style="fill:var(--glow)"/><circle cx="70" cy="36" r="2.6" style="fill:var(--glow)"/>
<ellipse cx="60" cy="55" rx="13" ry="12" fill="url(#zp-alien)"/>
${face(54, { dx: 6, rx: 3.2, ry: 4.4, blush: false, m: 61 })}
<path d="M36 68a24 24 0 0 1 48 0z" fill="#bfe8ff" opacity=".3"/>
<path d="M36 68a24 24 0 0 1 48 0" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="1.2"/>
<path d="M44 52a17 17 0 0 1 10-8" stroke="#fff" stroke-opacity=".85" stroke-width="2.4" fill="none" stroke-linecap="round"/>
<ellipse cx="60" cy="72" rx="46" ry="12" fill="url(#zp-saucer)"/>
<ellipse cx="60" cy="68" rx="30" ry="4.5" fill="#e6eaf2"/>
<ellipse cx="40" cy="70" rx="12" ry="3" fill="url(#hl)"/>
<g class="lights" style="fill:var(--glow)">
  <circle cx="28" cy="75" r="2.6"/><circle cx="44" cy="78.5" r="2.6"/><circle cx="60" cy="80" r="2.6"/><circle cx="76" cy="78.5" r="2.6"/><circle cx="92" cy="75" r="2.6"/>
</g>`,
  css: `
.bob{transform-origin:50% 60%}
.crate{transform-box:fill-box;transform-origin:center;opacity:0}
.lights circle:nth-child(2){animation-delay:.15s!important}
.lights circle:nth-child(3){animation-delay:.3s!important}
.lights circle:nth-child(4){animation-delay:.45s!important}
.lights circle:nth-child(5){animation-delay:.6s!important}
[data-s=idle] .bob{animation:zp-hover 3.2s ease-in-out infinite}
[data-s=idle] .shadow{animation:shadow-float 3.2s ease-in-out infinite}
[data-s=idle] .lights circle{animation:flash 1.5s ease-in-out infinite}
[data-s=working] .bob{animation:float 2.4s ease-in-out infinite}
[data-s=working] .lights circle{animation:flash .6s ease-in-out infinite}
[data-s=working] .crate{animation:zp-lift 1.8s ease-in infinite}
[data-s=working] .beam{animation:flash 1.8s ease-in-out infinite}
[data-s=attention] .lights circle{animation:flash .25s steps(2) infinite}
.root[data-lite] .crate{opacity:1}
@keyframes zp-hover{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-4%) rotate(3deg)}}
@keyframes zp-lift{0%{transform:translateY(6px) rotate(0);opacity:0}20%{opacity:1}85%{opacity:1}100%{transform:translateY(-16px) rotate(90deg);opacity:0}}`,
};
