import { DEFS } from '../core/parts.js';

// Hooded hacker. Glowing eyes in the dark, matrix rain while working, glitches for attention.
export default {
  name: 'glitch',
  title: 'Glitch',
  set: 'edgy',
  description: 'Hooded hacker. Glowing eyes, matrix rain while working, glitches out when it needs input.',
  svg: `
<defs>${DEFS}
  <linearGradient id="gl-hood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#454b62"/><stop offset="1" stop-color="#191c27"/></linearGradient>
  <radialGradient id="gl-green"><stop offset="0" stop-color="#3dff8a" stop-opacity=".6"/><stop offset="1" stop-color="#3dff8a" stop-opacity="0"/></radialGradient>
</defs>
<g class="st s-working" stroke="#3dff8a" stroke-width="1.6" stroke-linecap="round">
  <path class="code" d="M10 22v3M10 30v3M10 38v3"/><path class="code" d="M18 14v3M18 22v3"/>
  <path class="code" d="M104 20v3M104 28v3M104 36v3"/><path class="code" d="M112 12v3M112 20v3"/>
</g>
<path d="M22 106C22 66 34 28 60 28s38 38 38 78Z" fill="url(#gl-hood)"/>
<path d="M36 44q24-16 48 0" stroke="#fff" stroke-opacity=".12" stroke-width="2" fill="none" stroke-linecap="round"/>
<ellipse cx="42" cy="48" rx="10" ry="5" transform="rotate(-35 42 48)" fill="url(#hl)" opacity=".25"/>
<ellipse cx="60" cy="63" rx="25" ry="23" fill="#2a2e3d"/>
<ellipse cx="60" cy="64" rx="21" ry="19" fill="#06070b"/>
<ellipse cx="60" cy="64" rx="18" ry="11" fill="url(#gg)" opacity=".35"/>
<g style="fill:var(--glow);stroke:var(--glow)">
  <g class="st s-idle"><g class="blink" stroke="none"><rect x="48" y="58" width="7" height="9" rx="3"/><rect x="65" y="58" width="7" height="9" rx="3"/></g></g>
  <g class="st s-working"><g class="look" stroke="none"><rect x="47" y="61" width="9" height="3.4" rx="1.7"/><rect x="64" y="61" width="9" height="3.4" rx="1.7"/></g></g>
  <g class="st s-attention" stroke="none"><path d="M46 57l10 5-10 5zM74 57l-10 5 10 5z"/></g>
  <g class="st s-done" fill="none" stroke-width="2.6" stroke-linecap="round"><path d="M46 64q5-7 10 0M64 64q5-7 10 0"/></g>
</g>
<path d="M53 84v12M67 84v12" stroke="#c9ced8" stroke-width="1.6" stroke-linecap="round"/>
<rect x="51.8" y="95" width="2.4" height="4.5" rx="1" fill="#e0e4ec"/><rect x="65.8" y="95" width="2.4" height="4.5" rx="1" fill="#e0e4ec"/>
<path d="M42 98h36l-3 8H45z" fill="#11131b" opacity=".7"/>
<g class="st s-working">
  <ellipse cx="60" cy="74" rx="20" ry="9" fill="url(#gl-green)"/>
  <rect x="38" y="84" width="44" height="22" rx="3" fill="#20232d" stroke="#3a3f52" stroke-width="1"/>
  <circle cx="60" cy="93" r="5" fill="#e8e8e8"/><rect x="57" y="96" width="6" height="4" rx="1" fill="#e8e8e8"/>
  <circle cx="58" cy="93" r="1.3" fill="#20232d"/><circle cx="62" cy="93" r="1.3" fill="#20232d"/>
</g>
<g class="st s-attention" stroke-width="2" stroke-linecap="round"><path d="M24 50h8M88 70h9M20 80h6" stroke="#ff2e88"/><path d="M26 54h6M90 74h7" stroke="#2ee6ff"/></g>`,
  css: `
.code{opacity:0}
[data-s=idle] .squash{animation:breathe 3.8s ease-in-out infinite}
[data-s=working] .code{animation:gl-fall 1.2s linear infinite}
[data-s=working] .code:nth-child(2){animation-delay:.4s}
[data-s=working] .code:nth-child(3){animation-delay:.2s}
[data-s=working] .code:nth-child(4){animation-delay:.7s}
[data-s=attention] .bob{animation:gl-glitch .45s steps(1) infinite}
.root[data-lite] .code{opacity:.8}
@keyframes gl-fall{0%{transform:translateY(-6px);opacity:0}20%{opacity:1}100%{transform:translateY(22px);opacity:0}}
@keyframes gl-glitch{0%{transform:translate(0,0)}20%{transform:translate(-3%,0) skewX(-6deg)}40%{transform:translate(2%,0)}60%{transform:translate(0,0) skewX(4deg)}80%{transform:translate(3%,0)}}`,
};
