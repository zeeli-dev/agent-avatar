# avatar-ai

Cute animated avatars for agents and sub-agents. Eighteen characters, four states each, in one web component with no dependencies.

```html
<script type="module" src="avatar-ai/src/index.js"></script>
<agent-avatar variant="teddy" state="working" size="40"></agent-avatar>
```

React 19:

```tsx
import 'avatar-ai';

<agent-avatar variant={agent.avatar} state={agent.status} size={28} />
```

## Docs

```bash
npm run dev
```

Open http://localhost:4173/docs/ for the playground, the full gallery, the API and performance notes.

## API

| Attribute | Values | Default |
| --- | --- | --- |
| `variant` | `mochi` `byte` `orbit` · `teddy` `pip` `kero` · `boo` `neko` `rex` `boba` `octo` `buzz` · `nimbus` `toasty` `quack` `zorp` `turbo` `ember` | `mochi` |
| `state` | `idle` `working` `attention` `done` | `idle` |
| `size` | px number or CSS length. Numbers at 32 or below turn on lite mode. | `96px` |
| `label` | accessible label | `Agent <state>` |

Exports: `AgentAvatar`, `VARIANTS`, `CHARACTERS` (title, set, description per variant), `SETS`, `STATES`.

## Layout

```
src/
  index.js            entry: exports + registers <agent-avatar>
  index.d.ts          types, including React JSX
  element.js          the custom element (templates, shared sheets, offscreen pause)
  core/
    parts.js          states, gradients, face, badges, sparkles
    styles.js         shared CSS: palette, badges, keyframes, lite mode
  characters/
    index.js          registry: CHARACTERS, VARIANTS, SETS
    mochi.js ...      one file per character: metadata, svg, css
docs/index.html       docs site and playground
```

## Adding a character

1. Copy a file in `src/characters/` and change `name`, `title`, `set`, `description`, `svg` and `css`.
2. Import it in `src/characters/index.js`.
3. Add the name to `AvatarVariant` in `src/index.d.ts`.

Draw on a 120×120 viewBox with the feet around y=104. Scope every animation to a state (`[data-s=working] .prop{...}`). Put animated parts on their own `<g>`, because a CSS transform replaces the element's `transform` attribute.

## Performance

- Body motion, badges and sparkles only animate `transform` and `opacity` on HTML layers, so they run on the compositor.
- There are no SVG filters, and only the active state animates.
- Avatars pause while offscreen.
- Lite mode applies at 32px or smaller.
- Headless Chrome benchmark: 300 avatars at 28px hold 60fps.
