import { DEFS, face } from '../core/parts.js';

// Orbit ring, drawn twice (behind + in front of the sphere). Inline, not <use>, so the dash animation runs.
const RING = (attrs) => `<g transform="rotate(-16 60 62)"${attrs}>
  <ellipse cx="60" cy="62" rx="52" ry="13" fill="none" style="stroke:var(--a)" stroke-opacity=".45" stroke-width="1.2"/>
  <ellipse class="ring" cx="60" cy="62" rx="52" ry="13" fill="none" style="stroke:var(--glow)" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="0.1 9.9"/></g>`;

// Glass marble with a living nebula core and an orbiting particle ring.
export default {
  name: 'orbit',
  title: 'Orbit',
  set: 'abstract',
  description: 'Glass marble with a living nebula core and an orbiting particle ring.',
  svg: `
<defs>${DEFS}
  <radialGradient id="o-glass" cx="50%" cy="50%" r="50%"><stop offset="0" style="stop-color:var(--a)" stop-opacity=".1"/><stop offset=".7" style="stop-color:var(--b)" stop-opacity=".28"/><stop offset=".93" style="stop-color:var(--b)" stop-opacity=".6"/><stop offset="1" style="stop-color:var(--a)" stop-opacity=".95"/></radialGradient>
  <radialGradient id="o-core"><stop offset="0" stop-color="#fff"/><stop offset=".3" style="stop-color:var(--a)"/><stop offset=".7" style="stop-color:var(--b)" stop-opacity=".85"/><stop offset="1" style="stop-color:var(--b)" stop-opacity="0"/></radialGradient>
  <clipPath id="o-clip"><circle cx="60" cy="60" r="36"/></clipPath>
  <clipPath id="o-front"><rect x="-20" y="62" width="160" height="60"/></clipPath>
</defs>
${RING('')}
<circle cx="60" cy="60" r="36" fill="#0d0b1f" opacity=".55"/>
<circle cx="60" cy="60" r="36" fill="url(#o-glass)"/>
<g clip-path="url(#o-clip)">
  <g class="nebula">
    <circle class="core" cx="60" cy="62" r="24" fill="url(#o-core)"/>
    <ellipse cx="48" cy="54" rx="21" ry="12" fill="url(#ga)" opacity=".7"/>
    <ellipse cx="73" cy="70" rx="19" ry="12" fill="url(#gb)" opacity=".8"/>
  </g>
  <ellipse cx="60" cy="90" rx="24" ry="9" fill="url(#ga)"/>
</g>
<circle cx="60" cy="60" r="36" fill="none" stroke="#fff" stroke-opacity=".4" stroke-width=".8"/>
<ellipse cx="47" cy="40" rx="17" ry="10" transform="rotate(-30 47 40)" fill="url(#hl)" opacity=".7"/>
<ellipse cx="42" cy="38" rx="5" ry="2.5" transform="rotate(-30 42 38)" fill="#fff" opacity=".95"/>
${face(60, { blush: false })}
${RING(' clip-path="url(#o-front)"')}`,
  html: '<i class="ripple"></i><i class="ripple"></i>',
  css: `
.bob,.squash{transform-origin:50% 80%}
.nebula{transform-origin:60px 60px}
.ripple{position:absolute;left:20%;top:20%;width:60%;height:60%;border-radius:50%;box-shadow:0 0 0 1.5px var(--glow);opacity:0}
[data-s=idle] .nebula{animation:spin 14s linear infinite}
[data-s=idle] .ring{animation:o-orbit 3s linear infinite}
[data-s=idle] .bob{animation:float 4s ease-in-out infinite}
[data-s=idle] .shadow{animation:shadow-float 4s ease-in-out infinite}
[data-s=working] .nebula{animation:spin 2.2s linear infinite}
[data-s=working] .ring{animation:o-orbit .7s linear infinite}
[data-s=working] .core{animation:pulse .9s ease-in-out infinite}
[data-s=working] .bob{animation:float 1.6s ease-in-out infinite}
[data-s=attention] .core{animation:pulse .6s ease-in-out infinite}
[data-s=attention] .ripple{animation:o-ripple 1.6s ease-out infinite}
[data-s=attention] .ripple+.ripple{animation-delay:.8s}
[data-s=done] .ring{animation:o-orbit 6s linear infinite}
@keyframes o-orbit{to{stroke-dashoffset:-40}}
@keyframes o-ripple{from{transform:scale(1);opacity:.8}to{transform:scale(1.55);opacity:0}}`,
};
