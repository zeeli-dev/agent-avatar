import { DEFS, INK } from '../core/parts.js';

// Raccoon with a cigarette. Chills behind the mask, blows a smoke ring when done.
export default {
  name: 'smokey',
  title: 'Smokey',
  set: 'edgy',
  description: 'Trash-panda smoker. Puffs harder while working, raises a brow for input, blows a smoke ring when done.',
  svg: `
<defs>${DEFS}
  <radialGradient id="sm-fur" cx="38%" cy="28%" r="85%"><stop offset="0" stop-color="#d9dce4"/><stop offset=".55" stop-color="#9a9fb0"/><stop offset="1" stop-color="#5d6275"/></radialGradient>
  <radialGradient id="sm-ember"><stop offset="0" stop-color="#ffb347" stop-opacity=".9"/><stop offset="1" stop-color="#ff5a1f" stop-opacity="0"/></radialGradient>
</defs>
<g class="tail">
  <path d="M76 100q24 2 26-22" stroke="#9a9fb0" stroke-width="9" fill="none" stroke-linecap="round"/>
  <path d="M76 100q24 2 26-22" stroke="#3a3d4a" stroke-width="9" fill="none" stroke-dasharray="5 5"/>
</g>
<ellipse cx="60" cy="96" rx="21" ry="10" fill="url(#sm-fur)"/>
<path d="M30 52Q26 24 42 28Q48 34 50 42ZM90 52Q94 24 78 28Q72 34 70 42Z" fill="url(#sm-fur)"/>
<path d="M34 46Q33 32 42 33Q45 37 46 42ZM86 46Q87 32 78 33Q75 37 74 42Z" fill="#3a3d4a"/>
<ellipse cx="60" cy="62" rx="33" ry="27" fill="url(#sm-fur)"/>
<ellipse cx="44" cy="44" rx="12" ry="6" transform="rotate(-20 44 44)" fill="url(#hl)" opacity=".5"/>
<ellipse cx="44" cy="49" rx="8" ry="3.2" fill="#fff" opacity=".9"/>
<g class="brow"><ellipse cx="76" cy="49" rx="8" ry="3.2" fill="#fff" opacity=".9"/></g>
<path d="M28 60q6-12 20-10q8 1 12 6q4-5 12-6q14-2 20 10q-4 10-16 9q-10-1-16 4q-6-5-16-4q-12 1-16-9z" fill="#2e3040"/>
<ellipse cx="60" cy="77" rx="15" ry="9" fill="#eef0f5"/>
<g class="st s-idle"><g class="blink">
  <ellipse cx="47" cy="61" rx="5" ry="2.6" fill="#fff"/><ellipse cx="48" cy="61.3" rx="2" ry="2.2" fill="${INK}"/>
  <ellipse cx="73" cy="61" rx="5" ry="2.6" fill="#fff"/><ellipse cx="74" cy="61.3" rx="2" ry="2.2" fill="${INK}"/>
</g></g>
<g class="st s-working"><g class="look">
  <ellipse cx="47" cy="61" rx="5" ry="1.8" fill="#fff"/><circle cx="48.5" cy="61" r="1.7" fill="${INK}"/>
  <ellipse cx="73" cy="61" rx="5" ry="1.8" fill="#fff"/><circle cx="74.5" cy="61" r="1.7" fill="${INK}"/>
</g></g>
<g class="st s-attention">
  <ellipse cx="47" cy="61" rx="5" ry="4.4" fill="#fff"/><circle cx="47.5" cy="61.5" r="2.6" fill="${INK}"/>
  <ellipse cx="73" cy="61" rx="5" ry="4.4" fill="#fff"/><circle cx="73.5" cy="61.5" r="2.6" fill="${INK}"/>
</g>
<g class="st s-done"><path d="M42 62q5-5 10 0M68 62q5-5 10 0" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/></g>
<ellipse cx="60" cy="71" rx="4.5" ry="3" fill="${INK}"/>
<g class="st s-idle s-working"><path d="M54 78q5 3 11-1" stroke="${INK}" stroke-width="1.8" fill="none" stroke-linecap="round"/></g>
<g class="st s-attention"><ellipse cx="58" cy="79" rx="2.2" ry="2.6" fill="${INK}"/></g>
<g class="st s-done"><path d="M53 76h12q-6 7-12 0Z" fill="${INK}"/></g>
<g class="cig">
  <path d="M65 78L84 74" stroke="#f4f4f4" stroke-width="3.2" stroke-linecap="round"/>
  <path d="M65 78l4.5-1" stroke="#e8a15a" stroke-width="3.2" stroke-linecap="round"/>
  <circle cx="85" cy="73.8" r="5" fill="url(#sm-ember)"/>
  <circle class="tip" cx="85" cy="73.8" r="1.9" fill="#ff5a1f"/>
</g>
<g class="st s-idle s-working s-attention" stroke="#c7cbd6" stroke-width="2" fill="none" stroke-linecap="round">
  <path class="smk" d="M86 70q-3-4 0-8t0-8"/><path class="smk" d="M90 70q-3-4 0-8t0-8"/>
</g>
<g class="st s-done"><ellipse class="ring" cx="92" cy="60" rx="5" ry="3.5" fill="none" stroke="#c7cbd6" stroke-width="2"/></g>`,
  css: `
.tail{transform-origin:76px 100px}
.brow{transform-box:fill-box;transform-origin:center}
.cig{transform-origin:65px 78px}
.smk,.ring{transform-box:fill-box;transform-origin:center;opacity:0}
[data-s=idle] .squash{animation:breathe 3.6s ease-in-out infinite}
[data-s=idle] .tail{animation:sm-tail 3s ease-in-out infinite alternate}
[data-s=idle] .smk{animation:sm-smoke 2.6s ease-out infinite}
[data-s=idle] .smk+.smk{animation-delay:1.3s}
[data-s=working] .smk{animation:sm-smoke 1.1s ease-out infinite}
[data-s=working] .smk+.smk{animation-delay:.55s}
[data-s=working] .tip{animation:flash .5s ease-in-out infinite}
[data-s=attention] .bob{animation:none}
[data-s=attention] .brow{transform:translateY(-4px) rotate(-10deg)}
[data-s=attention] .cig{animation:sm-talk .35s ease-in-out infinite alternate}
[data-s=done] .ring{animation:sm-ring 1.8s ease-out infinite}
.root[data-lite] .smk{opacity:.6}
.root[data-lite] .ring{opacity:.8}
@keyframes sm-tail{from{transform:rotate(-6deg)}to{transform:rotate(8deg)}}
@keyframes sm-smoke{0%{transform:translateY(2px);opacity:0}30%{opacity:.8}100%{transform:translate(4px,-12px);opacity:0}}
@keyframes sm-talk{to{transform:rotate(-8deg)}}
@keyframes sm-ring{0%{transform:translate(0,6px) scale(.4);opacity:0}25%{opacity:.9}100%{transform:translate(6px,-22px) scale(1.8);opacity:0}}`,
};
