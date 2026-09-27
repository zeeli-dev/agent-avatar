# Changelog

All notable changes to this project are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the project uses [Semantic Versioning](https://semver.org/).

## [Unreleased]

## [0.6.0] - 2026-09-27

First public release, published to npm as `agent-avatar`.

### Added

- Open-source release as `agent-avatar` under the MIT license. The project is now called Agent Avatar, matching the `<agent-avatar>` tag.
- Biome lint and format, type tests, registry tests, a size budget and Playwright browser tests.
- CI and npm release with provenance workflows.
- Docs site at https://avatars.zeeli.dev on Cloudflare Workers, with favicons, social preview, a 404 page and security headers.
- Contributing guide, code of conduct, security policy, and issue and pull request templates.

### Changed

- The docs page is split into `index.html`, `app.js` and `styles.css`.
- `pnpm dev` runs a zero-dependency Node server instead of Python.
- Tooling on the latest releases: pnpm 12, Biome 2.5, Playwright 1.63, TypeScript 7, Wrangler 4.141, and v7 of the checkout, setup-node and upload-artifact actions. CI tracks the current Node LTS.
- Node 22 or newer is required for development.

## [0.5.0] - 2026-09-27

### Added

- Edgy crew set: Smokey, Pugsy, Spike, Glitch, Tagz and Chomp.
- Wild bunch set: Nimbus, Toasty, Quack, Zorp, Turbo and Ember.
- Docs site with sidebar navigation, a playground, and syntax highlighting.

### Fixed

- Removing the `size` attribute now resets the size and lite mode.
- The offscreen pause survives a variant switch.
- Importing in Node or during SSR no longer throws.
- Reduced motion reuses lite mode's static fallbacks.
- React JSX types accept `ref`, `id`, `className` and event handlers.

## [0.3.0] - 2026-09-27

### Added

- Party crew set: Boo, Neko, Rex, Boba, Octo and Buzz.
- One file per character with a registry (`CHARACTERS`, `SETS`, `VARIANTS`).

### Changed

- Rebuilt for performance: compositor-only body motion, no SVG filters, state-scoped animations, offscreen pause and lite mode.

## [0.1.0] - 2026-09-27

### Added

- `<agent-avatar>` web component with Mochi, Byte, Orbit, Teddy, Pip and Kero, each with four states.

[Unreleased]: https://github.com/zeeli-dev/agent-avatar/compare/v0.6.0...HEAD
[0.6.0]: https://github.com/zeeli-dev/agent-avatar/releases/tag/v0.6.0
[0.5.0]: https://github.com/zeeli-dev/agent-avatar/commits/main
[0.3.0]: https://github.com/zeeli-dev/agent-avatar/commits/main
[0.1.0]: https://github.com/zeeli-dev/agent-avatar/commits/main
