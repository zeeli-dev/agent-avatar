import { DEFS, face } from '../core/parts.js';

// Bumblebee courier. Wings buzz, carries a honey pot while working, zig-zags for attention.
export default {
  name: 'buzz',
  title: 'Buzz',
  set: 'party',
  description: 'Bumblebee courier. Carries a honey pot while working, zig-zags for input.',
  svg: `
<defs>${DEFS}
  <radialGradient id="z-body" cx="38%" cy="28%" r="85%"><stop offset="0" stop-color="#fff3b0"/><stop offset=".5" stop-color="#ffc928"/><stop offset="1" stop-color="#e08e00"/></radialGradient>
  <clipPath id="z-clip"><ellipse cx="60" cy="66" rx="33" ry="30"/></clipPath>
</defs>
<path d="M50 40q-4-12-12-15M70 40q4-12 12-15" stroke="#2d2438" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<circle cx="38" cy="25" r="3.6" fill="#2d2438"/><circle cx="82" cy="25" r="3.6" fill="#2d2438"/>
<g class="wing-l"><ellipse cx="38" cy="36" rx="12" ry="19" transform="rotate(-35 38 36)" fill="#fff" fill-opacity=".75" stroke="#bfe6ff" stroke-width="1.5"/></g>
<g class="wing-r"><ellipse cx="82" cy="36" rx="12" ry="19" transform="rotate(35 82 36)" fill="#fff" fill-opacity=".75" stroke="#bfe6ff" stroke-width="1.5"/></g>
<path d="M56 93L60 104L64 93Z" fill="#2d2438" stroke="#2d2438" stroke-width="2" stroke-linejoin="round"/>
<ellipse cx="60" cy="66" rx="33" ry="30" fill="url(#z-body)"/>
<g clip-path="url(#z-clip)" fill="#2d2438"><rect x="20" y="77" width="80" height="7.5"/><rect x="20" y="89" width="80" height="7"/></g>
<ellipse cx="44" cy="46" rx="13" ry="7" transform="rotate(-30 44 46)" fill="url(#hl)" opacity=".8"/>
${face(58)}
<g class="st s-working"><g class="pot">
  <path d="M85 84h14l2 4v10q0 5-9 5t-9-5V88z" fill="#ffb300"/>
  <path d="M85 88q3 4 6 0q3 5 8 0" fill="#ffe082"/>
  <rect x="84" y="81" width="16" height="4" rx="2" fill="#b86400"/>
  <path d="M87 91v7" stroke="#fff" stroke-opacity=".5" stroke-width="1.6" stroke-linecap="round"/>
</g></g>`,
  css: `
.wing-l{transform-origin:50px 48px}.wing-r{transform-origin:70px 48px}
.pot{transform-origin:92px 81px}
[data-s=idle] .wing-l{animation:z-flap-l .2s ease-in-out infinite alternate}
[data-s=idle] .wing-r{animation:z-flap-r .2s ease-in-out infinite alternate}
[data-s=idle] .bob{animation:float 2s ease-in-out infinite}
[data-s=idle] .shadow{animation:shadow-float 2s ease-in-out infinite}
[data-s=working] .wing-l{animation:z-flap-l .08s linear infinite alternate}
[data-s=working] .wing-r{animation:z-flap-r .08s linear infinite alternate}
[data-s=working] .bob{animation:float .9s ease-in-out infinite}
[data-s=working] .shadow{animation:shadow-float .9s ease-in-out infinite}
[data-s=working] .pot{animation:z-swing .9s ease-in-out infinite alternate}
[data-s=attention] .bob{animation:z-zig 1.2s ease-in-out infinite}
[data-s=attention] .wing-l{animation:z-flap-l .1s linear infinite alternate}
[data-s=attention] .wing-r{animation:z-flap-r .1s linear infinite alternate}
[data-s=done] .wing-l{animation:z-flap-l .16s ease-in-out infinite alternate}
[data-s=done] .wing-r{animation:z-flap-r .16s ease-in-out infinite alternate}
@keyframes z-flap-l{to{transform:rotate(-22deg)}}
@keyframes z-flap-r{to{transform:rotate(22deg)}}
@keyframes z-swing{from{transform:rotate(-8deg)}to{transform:rotate(8deg)}}
@keyframes z-zig{0%,100%{transform:translate(0,0) rotate(0)}25%{transform:translate(-6%,-3%) rotate(-8deg)}75%{transform:translate(6%,-3%) rotate(8deg)}}`,
};
