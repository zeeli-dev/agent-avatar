# Contributing

Thanks for helping. Bug fixes, performance work and new characters are all welcome.

## Setup

Requires Node 20+ and pnpm (the version is pinned in `package.json`; `corepack enable` picks it up).

```sh
pnpm install
pnpm exec playwright install chromium   # once, for browser tests
pnpm dev                                # docs and playground at http://localhost:4173/docs/
```

There is no build step. The docs page imports `src/` directly, so a reload shows every change.

## Checks

| Command | What it does |
| --- | --- |
| `pnpm lint` | Biome lint and format check |
| `pnpm format` | Apply Biome fixes and formatting |
| `pnpm typecheck` | Type tests in `tests/types` (valid usage compiles, invalid usage must fail) |
| `pnpm test` | Registry checks for every character, plus an import without a DOM |
| `pnpm size` | Gzipped size of `src/` against the budget |
| `pnpm test:browser` | Playwright: element behavior, every character in every state, and the docs page |
| `pnpm check` | All of the above. CI runs the same steps. |
| `pnpm media` | Regenerate README GIFs, set strips and the social preview (needs ffmpeg) |
| `pnpm icons` | Regenerate favicons from `docs/favicon.svg` |
| `pnpm build:site` | Assemble the docs site into `dist/` |
| `pnpm deploy:site` | Build and deploy the docs to https://avatars.zeeli.dev (Cloudflare Workers static assets) |

## Project layout

```
src/
  index.js            entry: exports and registers <agent-avatar>
  index.d.ts          public types, including the React JSX element
  element.js          the custom element
  core/parts.js       shared face, gradients, badges, sparkles
  core/styles.js      shared CSS: palette, badges, keyframes, lite mode
  characters/         one file per character, plus index.js (the registry)
docs/                 docs site: index.html, app.js, styles.css, favicons, 404 page, _headers
tests/                node:test suites, type tests, Playwright specs
scripts/              dev server, size budget, site build, README media and favicons
wrangler.jsonc        docs site deployment (Cloudflare Workers static assets)
```

## Adding a character

1. Copy a file in `src/characters/` that is close to your idea. Set `name`, `title`, `set`, `description`, `svg` and `css`.
2. Import it in `src/characters/index.js` and add it to the list.
3. Add the name to `AvatarVariant` in `src/index.d.ts` and to the `variant` row of the README API table.
4. Run `pnpm dev` and check all four states at 28px and at 120px, in dark and light themes.
5. Run `pnpm check`, then `pnpm media` to regenerate the README images.

Drawing rules, most of which `pnpm test` enforces:

- Draw on a 120×120 viewBox with the feet around y=104.
- Prefix every id and keyframe with a short character prefix (`rx-`, `tg-`) so nothing collides.
- Put anything that only shows in some states in `<g class="st s-working">` (or several `s-*` classes).
- Scope every animation to a state: `[data-s=working] .hammer { animation: ... }`.
- Give animated parts their own `<g>` without a `transform` attribute. A CSS transform replaces the attribute.
- Animate `transform` and `opacity` only. No SVG filters: fake glows and highlights with radial gradients.
- If a prop starts hidden and only shows through an animation, add a static fallback for lite mode: `.root[data-lite] .prop { opacity: 1 }`.
- Keep a prop's motion away from the face so it never reads as hitting the character.

## Commits and releases

- Use [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `perf:`, `docs:`, `chore:`).
- Add a line to `CHANGELOG.md` under **Unreleased**.
- Maintainers release by bumping `version` in `package.json`, moving the changelog entries under the new version, and pushing a `vX.Y.Z` tag. The release workflow runs every check, publishes to npm with provenance and creates the GitHub release.

By contributing you agree to the [Code of Conduct](CODE_OF_CONDUCT.md) and to licensing your work under the [MIT License](LICENSE).
