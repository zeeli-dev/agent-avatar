import { expect, test } from './fixtures.js';

const mount = (page, attrs) =>
  page.evaluate((attrs) => {
    const a = document.createElement('agent-avatar');
    for (const [k, v] of Object.entries(attrs)) a.setAttribute(k, v);
    document.body.append(a);
    const root = a.shadowRoot.firstElementChild;
    return { s: root.dataset.s, label: root.getAttribute('aria-label'), width: getComputedStyle(a).width };
  }, attrs);

test('defaults to mochi, idle, 96px', async ({ lib }) => {
  expect(await mount(lib, {})).toEqual({ s: 'idle', label: 'Agent idle', width: '96px' });
});

test('invalid variant and state fall back', async ({ lib }) => {
  expect((await mount(lib, { variant: 'nope', state: 'nope' })).s).toBe('idle');
});

test('size: numbers are px, small numbers enable lite, removal resets', async ({ lib }) => {
  const r = await lib.evaluate(() => {
    const a = document.createElement('agent-avatar');
    document.body.append(a);
    const lite = () => a.shadowRoot.firstElementChild.hasAttribute('data-lite');
    const out = [];
    for (const size of ['48', '24', '24px', '2rem']) {
      a.setAttribute('size', size);
      out.push([size, getComputedStyle(a).width, lite()]);
    }
    a.removeAttribute('size');
    out.push(['removed', getComputedStyle(a).width, lite()]);
    return out;
  });
  expect(r).toEqual([
    ['48', '48px', false],
    ['24', '24px', true],
    ['24px', '24px', true],
    ['2rem', '32px', false],
    ['removed', '96px', false],
  ]);
});

test('label attribute overrides and restores the accessible name', async ({ lib }) => {
  const r = await lib.evaluate(() => {
    const a = document.createElement('agent-avatar');
    a.setAttribute('label', 'Coder busy');
    document.body.append(a);
    const root = a.shadowRoot.firstElementChild;
    const custom = root.getAttribute('aria-label');
    a.removeAttribute('label');
    return [custom, root.getAttribute('aria-label'), root.getAttribute('role')];
  });
  expect(r).toEqual(['Coder busy', 'Agent idle', 'img']);
});

test('attributes set before connecting apply on connect, and after reconnecting', async ({ lib }) => {
  const r = await lib.evaluate(() => {
    const a = document.createElement('agent-avatar');
    a.setAttribute('variant', 'pip');
    a.setAttribute('state', 'working');
    const before = a.shadowRoot.childElementCount;
    document.body.append(a);
    const root = () => a.shadowRoot.firstElementChild;
    const connected = [!!root().querySelector('#p-body'), root().dataset.s];
    a.remove();
    a.setAttribute('state', 'done');
    document.body.append(a);
    return [before, connected, root().dataset.s];
  });
  expect(r).toEqual([0, [true, 'working'], 'done']);
});

test('switching variant keeps state and the offscreen pause', async ({ lib }) => {
  await lib.evaluate(() => {
    const a = document.createElement('agent-avatar');
    a.id = 'far';
    a.setAttribute('state', 'done');
    a.style.cssText = 'position:absolute;top:5000px';
    document.body.append(a);
  });
  const root = (sel) =>
    lib.evaluate((sel) => document.getElementById('far').shadowRoot.firstElementChild[sel[0]](sel[1]), sel);
  await expect.poll(() => root(['hasAttribute', 'data-off'])).toBe(true);
  await lib.evaluate(() => document.getElementById('far').setAttribute('variant', 'boo'));
  expect(await root(['hasAttribute', 'data-off'])).toBe(true);
  expect(await root(['getAttribute', 'data-s'])).toBe('done');
  expect(await lib.evaluate(() => !!document.getElementById('far').shadowRoot.querySelector('#bo-body'))).toBe(true);
});

test('reduced motion stops every animation', async ({ lib }) => {
  await lib.emulateMedia({ reducedMotion: 'reduce' });
  const running = await lib.evaluate(async () => {
    const a = document.createElement('agent-avatar');
    a.setAttribute('variant', 'rex');
    a.setAttribute('state', 'working');
    document.body.append(a);
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    return [a.shadowRoot.getAnimations().length, a.shadowRoot.firstElementChild.hasAttribute('data-lite')];
  });
  expect(running).toEqual([0, true]);
});
