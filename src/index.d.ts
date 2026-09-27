import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export type AvatarVariant =
  | 'mochi'
  | 'byte'
  | 'orbit'
  | 'teddy'
  | 'pip'
  | 'kero'
  | 'boo'
  | 'neko'
  | 'rex'
  | 'boba'
  | 'octo'
  | 'buzz'
  | 'nimbus'
  | 'toasty'
  | 'quack'
  | 'zorp'
  | 'turbo'
  | 'ember'
  | 'smokey'
  | 'pugsy'
  | 'spike'
  | 'glitch'
  | 'tagz'
  | 'chomp';
export type AvatarState = 'idle' | 'working' | 'attention' | 'done';

export type AvatarSet = 'abstract' | 'characters' | 'party' | 'wild' | 'edgy';

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

export interface AgentAvatarProps {
  variant?: AvatarVariant;
  state?: AvatarState;
  /** Pixels (number) or any CSS length. Numbers at 32 or below turn on lite mode. */
  size?: number | string;
  /** Accessible label. Defaults to "Agent <state>". */
  label?: string;
}

declare global {
  interface HTMLElementTagNameMap {
    'agent-avatar': AgentAvatar;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'agent-avatar': DetailedHTMLProps<HTMLAttributes<AgentAvatar>, AgentAvatar> & AgentAvatarProps;
    }
  }
}
