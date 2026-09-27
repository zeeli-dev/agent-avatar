// avatar-ai: cute animated agent avatars as one zero-dependency web component.
//
//   <agent-avatar variant="mochi" state="working" size="28"></agent-avatar>
//
// Importing this module registers <agent-avatar>.

import { AgentAvatar } from './element.js';

export { AgentAvatar } from './element.js';
export { STATES } from './core/parts.js';
export { CHARACTERS, SETS, VARIANTS } from './characters/index.js';

if (typeof customElements !== 'undefined' && !customElements.get('agent-avatar')) {
  customElements.define('agent-avatar', AgentAvatar);
}
