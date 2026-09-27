import { DEFS, face } from '../core/parts.js';

// Tiny dino builder. Hard hat and hammer while working, stomps when done.
export default {
  name: 'rex',
  title: 'Rex',
  set: 'party',
  description: 'Tiny dino builder. Hard hat and hammer while working, stomps when done.',
  svg: `
<defs>${DEFS}
  <radialGradient id="r-skin" cx="38%" cy="28%" r="85%"><stop offset="0" stop-color="#a8f0e4"/><stop offset=".5" stop-color="#4fc9b7"/><stop offset="1" stop-color="#23897d"/></radialGradient>
  <radialGradient id="r-belly" cx="50%" cy="35%" r="70%"><stop offset="0" stop-color="#fffbe0"/><stop offset="1" stop-color="#ffe89a"/></radialGradient>
  <linearGradient id="r-hat" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe066"/><stop offset="1" stop-color="#f5b400"/></linearGradient>
</defs>
<path class="st s-idle s-attention s-done" d="M86 90q20 4 26-10q-2 16-22 20z" fill="url(#r-skin)"/>
<g class="st s-idle s-attention s-done"><path d="M44 34l4-12 6 9zM55 29l5-13 5 13zM66 31l6-9 4 12z" fill="#ffa94d" stroke="#ffa94d" stroke-width="3" stroke-linejoin="round"/></g>
<ellipse cx="46" cy="104" rx="9" ry="4.5" fill="#23897d"/><ellipse cx="74" cy="104" rx="9" ry="4.5" fill="#23897d"/>
<path d="M24 78C24 46 40 28 60 28s36 18 36 50c0 18-14 26-36 26S24 96 24 78Z" fill="url(#r-skin)"/>
<ellipse cx="60" cy="89" rx="20" ry="13" fill="url(#r-belly)"/>
<path d="M52 86h16M53 92h14" stroke="#f2cf6b" stroke-width="1.5" stroke-linecap="round"/>
<ellipse cx="44" cy="42" rx="13" ry="7" transform="rotate(-30 44 42)" fill="url(#hl)" opacity=".7"/>
<circle cx="80" cy="48" r="2.4" fill="#23897d" opacity=".35"/><circle cx="85" cy="56" r="1.6" fill="#23897d" opacity=".35"/>
${face(60)}
<ellipse cx="33" cy="80" rx="5" ry="7" transform="rotate(30 33 80)" fill="url(#r-skin)"/>
<g class="st s-idle s-attention s-done"><ellipse cx="87" cy="80" rx="5" ry="7" transform="rotate(-30 87 80)" fill="url(#r-skin)"/></g>
<g class="st s-working">
  <path d="M30 46Q32 18 60 18T90 46Z" fill="url(#r-hat)"/>
  <path d="M60 20v24" stroke="#f5b400" stroke-width="4"/>
  <ellipse cx="45" cy="30" rx="7" ry="3.5" transform="rotate(-30 45 30)" fill="#fff" opacity=".55"/>
  <rect x="26" y="43" width="68" height="6" rx="3" fill="#f0a800"/>
  <rect x="99" y="100" width="19" height="5" rx="1.5" fill="#c68a4e"/><rect x="99" y="100" width="19" height="1.6" rx=".8" fill="#e2b07a"/>
  <rect x="109.6" y="96" width="1.8" height="4.5" rx=".6" fill="#8b95a8"/>
  <path class="spark" d="M104 95l-3-3M110.5 92v-4M117 95l3-3" stroke="#ffd23f" stroke-width="1.8" stroke-linecap="round"/>
  <g class="hammer">
    <path d="M97 86H114" stroke="#9a6534" stroke-width="3.6" stroke-linecap="round"/>
    <rect x="111" y="78" width="8" height="16" rx="2.2" fill="#8b95a8"/><rect x="111" y="78" width="2.6" height="16" rx="1.2" fill="#c5ccd8"/>
  </g>
  <ellipse cx="95" cy="85" rx="7" ry="5.5" transform="rotate(20 95 85)" fill="url(#r-skin)"/>
</g>`,
  css: `
.hammer{transform-origin:97px 86px;transform:rotate(-35deg)}
.spark{opacity:0}
[data-s=idle] .squash{animation:breathe 3s ease-in-out infinite}
[data-s=working] .hammer{animation:r-hammer .6s cubic-bezier(.55,0,.35,1) infinite}
[data-s=working] .spark{animation:r-spark .6s linear infinite}
[data-s=done] .squash{animation:r-stomp 1.8s ease-in-out infinite}
@keyframes r-hammer{0%,100%{transform:rotate(-40deg)}45%,55%{transform:rotate(22deg)}}
@keyframes r-spark{0%,40%,70%,100%{opacity:0}48%{opacity:1}}
@keyframes r-stomp{0%,100%{transform:scale(1)}6%{transform:scale(1.1,.9)}14%{transform:scale(.95,1.06)}30%{transform:scale(1)}}`,
};
