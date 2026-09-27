// @zeeli/avatars: cute animated agent avatars as one zero-dependency web component.
//
//   <agent-avatar variant="mochi" state="working" size="28"></agent-avatar>
//
// Importing this module registers <agent-avatar>.

import { AgentAvatar } from './element.js';

export { CHARACTERS, SETS, VARIANTS } from './characters/index.js';
export { STATES } from './core/parts.js';
export { AgentAvatar } from './element.js';

if (typeof customElements !== 'undefined' && !customElements.get('agent-avatar')) {
  customElements.define('agent-avatar', AgentAvatar);
}
