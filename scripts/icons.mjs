// Renders the PNG and ICO favicons from docs/favicon.svg.
// Usage: node scripts/icons.mjs   (needs `pnpm exec playwright install chromium` once)
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { chromium } from '@playwright/test';

const docs = resolve(import.meta.dirname, '../docs');
const svg = readFileSync(resolve(docs, 'favicon.svg'), 'utf8');
const browser = await chromium.launch();
const page = await browser.newPage();

const render = async (size, { pad = 0, bg = 'transparent' } = {}) => {
  await page.setViewportSize({ width: size, height: size });
  const inner = size - pad * 2;
  await page.setContent(
    `<body style="margin:0;background:${bg};display:grid;place-items:center;width:${size}px;height:${size}px">
     <img src="data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}" width="${inner}" height="${inner}"></body>`,
  );
  return page.screenshot({ omitBackground: bg === 'transparent' });
};

const write = (name, buf) => writeFileSync(resolve(docs, name), buf);
// Apple touch icons get an opaque background; iOS fills transparency with black.
write('apple-touch-icon.png', await render(180, { pad: 18, bg: '#0b0c0e' }));
write('icon-192.png', await render(192, { pad: 16, bg: '#0b0c0e' }));
write('icon-512.png', await render(512, { pad: 44, bg: '#0b0c0e' }));

// favicon.ico: a single 32x32 PNG wrapped in an ICO container.
const png = await render(32);
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header.writeUInt8(32, 6);
header.writeUInt8(32, 7);
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(png.length, 14);
header.writeUInt32LE(22, 18);
write('favicon.ico', Buffer.concat([header, png]));

await browser.close();
console.log('wrote favicon.ico, apple-touch-icon.png, icon-192.png, icon-512.png');
