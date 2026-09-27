// Renders docs/assets/preview.png (README / npm banner): every character, cycling states.
// Usage: node scripts/preview.mjs   (needs `pnpm exec playwright install chromium` once)
import { spawn } from 'node:child_process';
import { resolve } from 'node:path';
import { chromium } from '@playwright/test';

const root = resolve(import.meta.dirname, '..');
const server = spawn(process.execPath, ['scripts/serve.mjs', '4180'], { cwd: root, stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 400));

const browser = await chromium.launch();
// Reduced motion gives a still, deterministic frame with every prop visible.
const page = await browser.newPage({
  viewport: { width: 1280, height: 640 },
  deviceScaleFactor: 2,
  reducedMotion: 'reduce',
});
await page.goto('http://localhost:4180/tests/browser/blank.html');
await page.evaluate(async () => {
  const { VARIANTS, STATES } = await import('/src/index.js');
  document.body.style.cssText = `margin:0;height:640px;display:grid;place-items:center;
    background:radial-gradient(120% 90% at 50% 10%,#1d2027 0%,#0b0c0e 70%);font-family:-apple-system,system-ui,sans-serif`;
  document.body.innerHTML = `<div style="display:grid;grid-template-columns:repeat(8,128px);gap:18px 20px">${VARIANTS.map(
    (v, i) => `<agent-avatar variant="${v}" state="${STATES[i % 4]}" size="128"></agent-avatar>`,
  ).join('')}</div>`;
  await new Promise((r) => setTimeout(r, 300));
});
await page.screenshot({ path: resolve(root, 'docs/assets/preview.png') });
await browser.close();
server.kill();
console.log('wrote docs/assets/preview.png');
