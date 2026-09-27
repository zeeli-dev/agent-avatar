// Type tests: valid usage compiles, invalid usage must error (@ts-expect-error fails if it does not).
import 'agent-avatar';
import {
  type AgentAvatar,
  type AvatarState,
  type AvatarVariant,
  CHARACTERS,
  SETS,
  STATES,
  VARIANTS,
} from 'agent-avatar';
import { useRef } from 'react';

export function Row({ variant, state }: { variant: AvatarVariant; state: AvatarState }) {
  const ref = useRef<AgentAvatar>(null);
  return (
    <agent-avatar
      ref={ref}
      id="coder"
      className="avatar"
      title={CHARACTERS[variant].title}
      variant={variant}
      state={state}
      size={28}
      label="Coder is working"
      onClick={() => ref.current?.setAttribute('state', STATES[3])}
    />
  );
}

export const sets: string[] = SETS.map((s) => s.title);
export const hasRex: boolean = VARIANTS.includes('rex');
export const el: AgentAvatar | null = document.querySelector('agent-avatar');

// @ts-expect-error unknown variant
export const badVariant = <agent-avatar variant="nope" />;
// @ts-expect-error unknown state
export const badState = <agent-avatar state="sleeping" />;
