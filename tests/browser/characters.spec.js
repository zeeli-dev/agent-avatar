import { expect, test } from './fixtures.js';

// Every variant x state, full and lite: renders, runs no animation inside a hidden state,
// and lite mode never animates SVG internals.
test('every character renders every state without waste', async ({ lib }) => {
  const report = await lib.evaluate(async () => {
    const { VARIANTS, STATES } = await import('/src/index.js');
    const out = { rendered: 0, wasted: [], liteSvg: [] };
    const frame = () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    for (const size of ['120', '28']) {
      for (const v of VARIANTS) {
        for (const s of STATES) {
          const a = document.createElement('agent-avatar');
          a.setAttribute('variant', v);
          a.setAttribute('state', s);
          a.setAttribute('size', size);
          document.body.append(a);
          await frame();
          const root = a.shadowRoot;
          if (root.querySelector('svg.art')?.childElementCount) out.rendered++;
          const hidden = (el) => {
            for (let n = el; n && n !== root; n = n.parentNode) {
              if (n.classList?.contains('st') && getComputedStyle(n).opacity === '0') return true;
            }
            return false;
          };
          for (const an of root.getAnimations()) {
            const tag = `${v}/${s}@${size}: ${an.animationName}`;
            if (hidden(an.effect.target)) out.wasted.push(tag);
            if (size === '28' && an.effect.target.closest('svg.art')) out.liteSvg.push(tag);
          }
          a.remove();
        }
      }
    }
    return { ...out, expected: VARIANTS.length * STATES.length * 2 };
  });
  expect(report.wasted).toEqual([]);
  expect(report.liteSvg).toEqual([]);
  expect(report.rendered).toBe(report.expected);
});
