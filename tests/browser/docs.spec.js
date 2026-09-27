import { expect, test } from '@playwright/test';

test('docs page is healthy', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  await page.goto('/docs/');
  await expect(page.locator('.card')).toHaveCount(
    await page.evaluate(async () => (await import('/src/index.js')).VARIANTS.length),
  );

  const audit = await page.evaluate(() => {
    const ids = new Set([...document.querySelectorAll('[id]')].map((e) => e.id));
    return {
      brokenAnchors: [...document.querySelectorAll('a[href^="#"]')]
        .map((a) => a.getAttribute('href').slice(1))
        .filter((h) => !ids.has(h)),
      duplicateIds: [...document.querySelectorAll('[id]')].map((e) => e.id).filter((x, i, all) => all.indexOf(x) !== i),
      unlabeledButtons: [...document.querySelectorAll('button')].filter(
        (b) => !(b.textContent.trim() || b.getAttribute('aria-label')),
      ).length,
      unhighlightedCode: [...document.querySelectorAll('pre code')].filter((c) => !c.querySelector('[class^="tk-"]'))
        .length,
    };
  });
  expect(audit).toEqual({ brokenAnchors: [], duplicateIds: [], unlabeledButtons: 0, unhighlightedCode: 0 });

  await page.locator('#pg-variant [data-v="chomp"]').click();
  await expect(page.locator('#pg-code')).toHaveText(
    '<agent-avatar variant="chomp" state="working" size="180"></agent-avatar>',
  );
  await page.locator('#filter').fill('smo');
  await expect(page.locator('#nav-gallery .sub:not([hidden])')).toHaveText(['Smokey']);
  expect(errors).toEqual([]);
});
