import { DEFS, eye, INK } from '../core/parts.js';

// Frog detective. Sweeps a magnifying glass while working, hops for attention.
export default {
  name: 'kero',
  title: 'Kero',
  set: 'characters',
  description: 'Frog detective. Sweeps a magnifying glass while working, hops for input.',
  svg: `
<defs>${DEFS}
  <radialGradient id="k-skin" cx="38%" cy="30%" r="85%"><stop offset="0" stop-color="#c9f290"/><stop offset=".5" stop-color="#7cc95a"/><stop offset="1" stop-color="#3a8736"/></radialGradient>
  <radialGradient id="k-belly" cx="50%" cy="35%" r="70%"><stop offset="0" stop-color="#fbffe9"/><stop offset="1" stop-color="#dcefb2"/></radialGradient>
  <radialGradient id="k-eye" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#e3e8ec"/></radialGradient>
</defs>
<ellipse cx="40" cy="104" rx="11" ry="4.5" fill="#4d9e41"/><ellipse cx="80" cy="104" rx="11" ry="4.5" fill="#4d9e41"/>
<circle cx="41" cy="44" r="14" fill="url(#k-skin)"/><circle cx="79" cy="44" r="14" fill="url(#k-skin)"/>
<path d="M60 40c26 0 40 16 40 38 0 18-16 26-40 26S20 96 20 78c0-22 14-38 40-38Z" fill="url(#k-skin)"/>
<ellipse cx="60" cy="92" rx="22" ry="11" fill="url(#k-belly)"/>
<circle cx="54" cy="56" r="2.2" fill="#3a8736" opacity=".35"/><circle cx="66" cy="54" r="1.6" fill="#3a8736" opacity=".35"/><circle cx="88" cy="80" r="2" fill="#3a8736" opacity=".3"/>
<ellipse cx="36" cy="36" rx="7" ry="4" transform="rotate(-30 36 36)" fill="url(#hl)" opacity=".7"/>
<circle cx="41" cy="45" r="10" fill="url(#k-eye)"/><circle cx="79" cy="45" r="10" fill="url(#k-eye)"/>
<ellipse cx="32" cy="68" rx="8" ry="4.5" fill="url(#bl)"/><ellipse cx="88" cy="68" rx="8" ry="4.5" fill="url(#bl)"/>
<g class="st s-idle">
  ${eye(42, 46, 4.4, 5.2)}${eye(78, 46, 4.4, 5.2)}
  <circle class="lid" cx="41" cy="45" r="10.5" fill="url(#k-skin)"/><circle class="lid" cx="79" cy="45" r="10.5" fill="url(#k-skin)"/>
  <path d="M44 72q16 9 32 0" stroke="${INK}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
</g>
<g class="st s-working">
  <g class="look">${eye(43, 49, 4, 4.4)}${eye(80, 49, 4, 4.4)}</g>
  <path d="M30.5 45a10.5 10.5 0 0 1 21 0zM68.5 45a10.5 10.5 0 0 1 21 0z" fill="url(#k-skin)"/>
  <path d="M50 74q10 3 20 0" stroke="${INK}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  <g class="mag">
    <path d="M86 92l10 10" stroke="#7a5230" stroke-width="5" stroke-linecap="round"/>
    <circle cx="78" cy="84" r="11" style="fill:var(--a)" opacity=".35"/>
    <circle cx="78" cy="84" r="11" fill="none" stroke="#e8b84a" stroke-width="3"/>
    <path d="M71 81a8 8 0 0 1 5.5-5" stroke="#fff" stroke-width="2" stroke-linecap="round" fill="none" opacity=".85"/>
    <circle cx="96.5" cy="102.5" r="5" fill="url(#k-skin)"/>
  </g>
</g>
<g class="st s-attention">
  ${eye(41, 45, 5.6, 6.4)}${eye(79, 45, 5.6, 6.4)}
  <ellipse cx="60" cy="75" rx="4" ry="4.6" fill="${INK}"/>
</g>
<g class="st s-done">
  <path d="M36 48q5-7 10 0M74 48q5-7 10 0" stroke="${INK}" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  <path d="M45 71q15 15 30 0Z" fill="${INK}"/><ellipse cx="60" cy="78" rx="5" ry="2.4" fill="#ff7b9c"/>
</g>`,
  css: `
.lid{transform-box:fill-box;transform-origin:50% 0;transform:scaleY(0)}
.mag{transform-origin:96px 102px}
[data-s=idle] .squash{animation:breathe 3s ease-in-out infinite}
[data-s=idle] .lid{animation:k-lid 4.6s infinite}
[data-s=working] .squash{animation:breathe 1.8s ease-in-out infinite}
[data-s=working] .mag{animation:k-mag 2.2s ease-in-out infinite}
[data-s=attention] .bob{animation:hop .5s cubic-bezier(.33,0,.67,1) infinite}
[data-s=attention] .shadow{animation:shadow-hop .5s cubic-bezier(.33,0,.67,1) infinite}
@keyframes k-lid{0%,93%,100%{transform:scaleY(0)}96%{transform:scaleY(1)}}
@keyframes k-mag{0%,100%{transform:translate(0,0) rotate(0)}50%{transform:translate(-26px,-4px) rotate(-8deg)}}`,
};
