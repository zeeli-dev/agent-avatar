import { DEFS, face } from '../core/parts.js';

// Bubble tea. Pearls ride up the straw while working, the straw wiggles for attention.
export default {
  name: 'boba',
  title: 'Boba',
  set: 'party',
  description: 'Bubble tea. Pearls ride up the straw while working, the straw wiggles for input.',
  svg: `
<defs>${DEFS}
  <linearGradient id="bb-tea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbe8cf"/><stop offset="1" stop-color="#d9a36d"/></linearGradient>
  <radialGradient id="bb-pearl" cx="35%" cy="30%" r="70%"><stop offset="0" stop-color="#8a5a44"/><stop offset="1" stop-color="#2a160e"/></radialGradient>
</defs>
<path d="M31 46H89L83 100Q82 106 60 106T37 100Z" fill="url(#bb-tea)"/>
<g class="pearls" fill="url(#bb-pearl)">
  <circle cx="44" cy="97" r="4.3"/><circle cx="52.5" cy="99" r="4.3"/><circle cx="61" cy="98.5" r="4.3"/><circle cx="69.5" cy="99" r="4.3"/><circle cx="77" cy="96.5" r="4.3"/>
  <circle cx="48" cy="90" r="4.3"/><circle cx="57" cy="91" r="4.3"/><circle cx="66" cy="90.5" r="4.3"/><circle cx="74" cy="89" r="4.3"/>
</g>
<path d="M31 46H89L83 100Q82 106 60 106T37 100Z" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="1.2"/>
<path d="M37 53l3.5 42" stroke="#fff" stroke-opacity=".55" stroke-width="3" stroke-linecap="round"/>
${face(66)}
<g class="straw">
  <path d="M66 44L74 5" stroke="#ff6fa8" stroke-width="6.5" stroke-linecap="round"/>
  <path d="M67.3 40L74.4 6" stroke="#fff" stroke-opacity=".45" stroke-width="1.6" stroke-linecap="round"/>
  <circle class="sip" cx="68" cy="36" r="3.3" fill="url(#bb-pearl)"/>
</g>
<path d="M28 46Q60 14 92 46Z" fill="#fff" opacity=".5"/>
<ellipse cx="46" cy="36" rx="9" ry="4" transform="rotate(-20 46 36)" fill="url(#hl)"/>
<rect x="26" y="42" width="68" height="7" rx="3.5" fill="#ffc6da"/><rect x="28" y="42.5" width="64" height="2" rx="1" fill="#fff" opacity=".6"/>`,
  css: `
.straw{transform-origin:66px 44px}
.sip{opacity:0}
[data-s=idle] .squash{animation:breathe 3.2s ease-in-out infinite}
[data-s=working] .sip{animation:bb-sip 1.1s ease-in infinite}
[data-s=working] .pearls{animation:bb-jiggle .35s ease-in-out infinite alternate}
[data-s=attention] .straw{animation:bb-straw .3s ease-in-out infinite alternate}
[data-s=done] .straw{animation:bb-straw .6s ease-in-out infinite alternate}
@keyframes bb-sip{0%{transform:translate(0,0);opacity:0}15%,80%{opacity:1}100%{transform:translate(6px,-28px);opacity:0}}
@keyframes bb-jiggle{to{transform:translateY(-1.5px)}}
@keyframes bb-straw{from{transform:rotate(-8deg)}to{transform:rotate(8deg)}}`,
};
