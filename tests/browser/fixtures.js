import { test as base, expect } from '@playwright/test';

// Blank page with the library loaded and console errors collected.
export const test = base.extend({
  lib: async ({ page }, use) => {
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
    await page.goto('/tests/browser/blank.html');
    await page.waitForFunction(() => customElements.get('agent-avatar'));
    await use(page);
    expect(errors).toEqual([]);
  },
});
export { expect };
