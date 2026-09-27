export type AvatarVariant =
  | 'mochi' | 'byte' | 'orbit'
  | 'teddy' | 'pip' | 'kero'
  | 'boo' | 'neko' | 'rex' | 'boba' | 'octo' | 'buzz'
  | 'nimbus' | 'toasty' | 'quack' | 'zorp' | 'turbo' | 'ember';
export type AvatarState = 'idle' | 'working' | 'attention' | 'done';

export type AvatarSet = 'abstract' | 'characters' | 'party' | 'wild';

export interface Character {
  name: AvatarVariant;
  title: string;
  set: AvatarSet;
  description: string;
  svg: string;
  css: string;
  html?: string;
}

export const STATES: AvatarState[];
export const VARIANTS: AvatarVariant[];
export const CHARACTERS: Record<AvatarVariant, Character>;
export const SETS: { id: AvatarSet; title: string }[];
export class AgentAvatar extends HTMLElement {}

type AgentAvatarAttributes = {
  variant?: AvatarVariant;
  state?: AvatarState;
  /** Pixels (number) or any CSS length. */
  size?: number | string;
  label?: string;
  class?: string;
  className?: string;
  style?: unknown;
};

declare global {
  interface HTMLElementTagNameMap { 'agent-avatar': AgentAvatar }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements { 'agent-avatar': AgentAvatarAttributes }
  }
}
