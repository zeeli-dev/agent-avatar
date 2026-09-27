import { DEFS, face } from '../core/parts.js';

// Plush teddy bear. Types on a laptop while working, waves for attention, cheers when done.
export default {
  name: 'teddy',
  title: 'Teddy',
  set: 'characters',
  description: 'Plush bear. Types on a laptop while working, waves for input, cheers when done.',
  svg: `
<defs>${DEFS}
  <radialGradient id="t-fur" cx="38%" cy="30%" r="80%"><stop offset="0" stop-color="#e9bf8f"/><stop offset=".55" stop-color="#c58a55"/><stop offset="1" stop-color="#8a5530"/></radialGradient>
  <radialGradient id="t-in" cx="45%" cy="35%" r="70%"><stop offset="0" stop-color="#fff4e4"/><stop offset="1" stop-color="#ecceab"/></radialGradient>
  <linearGradient id="t-lid" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#454c5e"/><stop offset="1" stop-color="#1f2430"/></linearGradient>
</defs>
<g class="ear-l"><circle cx="35" cy="34" r="11" fill="url(#t-fur)"/><circle cx="35" cy="34" r="6" fill="#f0c9a0"/></g>
<g class="ear-r"><circle cx="85" cy="34" r="11" fill="url(#t-fur)"/><circle cx="85" cy="34" r="6" fill="#f0c9a0"/></g>
<ellipse cx="60" cy="92" rx="27" ry="16" fill="url(#t-fur)"/>
<ellipse cx="60" cy="95" rx="14" ry="9" fill="url(#t-in)" opacity=".9"/>
<ellipse cx="44" cy="106" rx="9" ry="5" fill="url(#t-fur)"/><ellipse cx="44" cy="106.5" rx="4.5" ry="2.5" fill="#f0c9a0"/>
<ellipse cx="76" cy="106" rx="9" ry="5" fill="url(#t-fur)"/><ellipse cx="76" cy="106.5" rx="4.5" ry="2.5" fill="#f0c9a0"/>
<circle cx="60" cy="58" r="29" fill="url(#t-fur)"/>
<ellipse cx="45" cy="42" rx="13" ry="7" transform="rotate(-25 45 42)" fill="url(#hl)" opacity=".5"/>
<ellipse cx="60" cy="68" rx="13" ry="10" fill="url(#t-in)"/>
<ellipse cx="60" cy="63" rx="4.2" ry="3" fill="#3a2418"/><ellipse cx="58.8" cy="62" rx="1.4" ry=".8" fill="#fff" opacity=".7"/>
${face(53, { rx: 3.6, ry: 4.8, dx: 11, m: 69 })}
<g class="st s-idle">
  <ellipse cx="41" cy="89" rx="7" ry="9" transform="rotate(25 41 89)" fill="url(#t-fur)"/>
  <ellipse cx="79" cy="89" rx="7" ry="9" transform="rotate(-25 79 89)" fill="url(#t-fur)"/>
</g>
<g class="st s-working">
  <ellipse cx="60" cy="76" rx="24" ry="8" fill="url(#gg)" opacity=".55"/>
  <path d="M30 101h60l-5 6H35z" fill="#cfd4de"/>
  <rect x="37" y="80" width="46" height="21" rx="3.5" fill="url(#t-lid)"/>
  <rect x="37.5" y="80.5" width="45" height="3" rx="1.5" fill="#fff" opacity=".12"/>
  <circle cx="60" cy="90.5" r="7" fill="url(#gg)"/><circle cx="60" cy="90.5" r="2.8" style="fill:var(--glow)"/>
  <ellipse class="tap" cx="36" cy="100" rx="6.5" ry="4.5" fill="url(#t-fur)"/>
  <ellipse class="tap" cx="84" cy="100" rx="6.5" ry="4.5" fill="url(#t-fur)"/>
</g>
<g class="st s-attention">
  <ellipse cx="41" cy="89" rx="7" ry="9" transform="rotate(25 41 89)" fill="url(#t-fur)"/>
  <g class="wave"><ellipse cx="89" cy="65" rx="6.5" ry="13" transform="rotate(25 89 65)" fill="url(#t-fur)"/><circle cx="94" cy="54" r="4" fill="#f0c9a0"/></g>
</g>
<g class="st s-done"><g class="cheer">
  <ellipse cx="31" cy="65" rx="6.5" ry="13" transform="rotate(-25 31 65)" fill="url(#t-fur)"/><circle cx="26" cy="54" r="4" fill="#f0c9a0"/>
  <ellipse cx="89" cy="65" rx="6.5" ry="13" transform="rotate(25 89 65)" fill="url(#t-fur)"/><circle cx="94" cy="54" r="4" fill="#f0c9a0"/>
</g></g>`,
  css: `
.ear-r{transform-origin:80px 42px}
.wave{transform-origin:82px 80px}
.tap{transform-box:fill-box;transform-origin:center}
[data-s=idle] .squash{animation:breathe 3.6s ease-in-out infinite}
[data-s=idle] .ear-r{animation:t-twitch 5s ease-in-out infinite}
[data-s=working] .squash{animation:breathe 1.4s ease-in-out infinite}
[data-s=working] .tap{animation:t-tap .28s ease-in-out infinite alternate}
[data-s=working] .tap+.tap{animation-delay:.14s}
[data-s=attention] .bob{animation:none}
[data-s=attention] .wave{animation:t-wave .45s ease-in-out infinite alternate}
[data-s=done] .cheer{animation:t-cheer .45s ease-in-out infinite alternate}
@keyframes t-twitch{0%,86%,100%{transform:rotate(0)}90%{transform:rotate(14deg)}94%{transform:rotate(-5deg)}}
@keyframes t-tap{to{transform:translateY(-3px)}}
@keyframes t-wave{from{transform:rotate(-12deg)}to{transform:rotate(14deg)}}
@keyframes t-cheer{to{transform:translateY(-3px)}}`,
};
