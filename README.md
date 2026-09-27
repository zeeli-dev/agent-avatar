<div align="center">

# Agent Avatar

**Cute animated avatars for AI agents.** One zero-dependency web component, 24 characters, four states. By [Zeeli](https://zeeli.dev).

[![CI](https://github.com/zeeli-dev/agent-avatar/actions/workflows/ci.yml/badge.svg)](https://github.com/zeeli-dev/agent-avatar/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/agent-avatar?color=f45120)](https://www.npmjs.com/package/agent-avatar)
[![gzip size](https://img.shields.io/badge/gzip-22%20kB-6cb17b)](scripts/size.mjs)
[![license](https://img.shields.io/badge/license-MIT-94999f)](LICENSE)

[Docs and playground](https://avatars.zeeli.dev) · [Characters](#characters) · [API](#api) · [Contributing](CONTRIBUTING.md)

<img src="docs/assets/hero.gif" alt="All 24 Agent Avatar characters animating: idle, working, needing input and done" width="100%" />

</div>

## Why

Agent tools show a lot of status: this sub-agent is thinking, that one needs approval, another just finished. Agent Avatar turns that status into a small character that bounces while it works, waves for your attention and celebrates when it is done. It reads at 16px in a sidebar and holds up at 200px in a hero.

- **One tag, any framework.** A native custom element: plain HTML, React 19, Vue, Svelte, Solid, Angular.
- **Zero dependencies, 22 kB gzipped** for all 24 characters.
- **Built for lists of agents.** 300 avatars at 28px hold 60fps. Offscreen avatars pause, and small sizes switch to a lighter mode on their own.
- **Accessible.** Each avatar has an accessible label, and `prefers-reduced-motion` turns it into a still image.
- **Typed.** TypeScript types, including the React JSX element.

## Install

```sh
pnpm add agent-avatar    # or npm i / yarn add / bun add
```

## Usage

Import the package once. That registers `<agent-avatar>`.

```html
<script type="module">
  import 'agent-avatar';
</script>

<agent-avatar variant="teddy" state="working" size="40"></agent-avatar>
```

### React 19

```tsx
import 'agent-avatar';

export function AgentRow({ agent }) {
  return <agent-avatar variant={agent.avatar} state={agent.status} size={28} label={`${agent.name} is ${agent.status}`} />;
}
```

### Without a bundler

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/agent-avatar/src/index.js"></script>
```

## States

<img src="docs/assets/states.gif" alt="Mochi, Teddy, Rex and Glitch in each of the four states" width="100%" />

| State | Look | Use it for |
| --- | --- | --- |
| `idle` | Lavender, blinks and breathes | Waiting for work |
| `working` | Blue, typing dots, uses its prop | Running a task |
| `attention` | Orange, `!` badge | Needs input or approval |
| `done` | Green, check badge, sparkles | Finished |

Colors cross-fade when the state changes.

## Characters

Every character has its own idle, working, attention and done behavior. Try them all in the [playground](https://avatars.zeeli.dev/#playground).

### Abstract

<img src="docs/assets/set-abstract.png" alt="Mochi the gummy drop, Byte the ceramic robot and Orbit the glass orb" width="100%" />

### Characters

<img src="docs/assets/set-characters.png" alt="Teddy the bear with a laptop, Pip the penguin clerk and Kero the frog detective" width="100%" />

### Party crew

<img src="docs/assets/set-party.png" alt="Boo the ghost, Neko the cat, Rex the dino builder, Boba the bubble tea, Octo the octopus and Buzz the bee" width="100%" />

### Wild bunch

<img src="docs/assets/set-wild.png" alt="Nimbus the cloud, Toasty the toaster, Quack the rubber duck, Zorp the UFO, Turbo the rocket snail and Ember the baby dragon" width="100%" />

### Edgy crew

<img src="docs/assets/set-edgy.png" alt="Smokey the raccoon, Pugsy the pug, Spike the punk hedgehog, Glitch the hacker, Tagz the spray can and Chomp the shark" width="100%" />

## API

### Attributes

| Attribute | Values | Default |
| --- | --- | --- |
| `variant` | `mochi` `byte` `orbit` · `teddy` `pip` `kero` · `boo` `neko` `rex` `boba` `octo` `buzz` · `nimbus` `toasty` `quack` `zorp` `turbo` `ember` · `smokey` `pugsy` `spike` `glitch` `tagz` `chomp` | `mochi` |
| `state` | `idle` · `working` · `attention` · `done` | `idle` |
| `size` | Number in px, or any CSS length. Numbers of 32 or less turn on lite mode. | `96px` |
| `label` | Accessible label | `Agent <state>` |

Style the host like any inline-block element. `--size` sets the size from CSS.

### Exports

```js
import { AgentAvatar, CHARACTERS, SETS, STATES, VARIANTS } from 'agent-avatar';

VARIANTS;                    // ['mochi', 'byte', ...]
CHARACTERS.rex.description;  // 'Tiny dino builder. ...'
SETS;                        // [{ id: 'abstract', title: 'Abstract' }, ...]
```

Importing in Node or during SSR is safe. The element only renders in the browser. React JSX types come from `@types/react`, an optional peer dependency.

## Performance

- Bounce, squash, shadow, badges and sparkles only animate `transform` and `opacity` on HTML layers, so the compositor runs them without repainting.
- No SVG filters. Glows and highlights are baked gradients.
- Only the current state animates. Hidden states run nothing.
- One shared `IntersectionObserver` pauses offscreen avatars.
- Lite mode (32px or smaller, or reduced motion) keeps idle avatars still and gives other states a single body motion.
- Stylesheets are shared per variant, and markup is cloned from a cached template.

## Browser support

Evergreen browsers with constructable stylesheets: Chrome and Edge 73+, Firefox 101+, Safari 16.4+.

## Contributing

New characters are very welcome. [CONTRIBUTING.md](CONTRIBUTING.md) covers the dev loop, the drawing rules and the checks each pull request must pass.

## License

[MIT](LICENSE). Created by Manno Beats for [Zeeli](https://zeeli.dev).
