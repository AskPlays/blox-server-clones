import { createMutable } from 'solid-js/store';

export const stats = createMutable({
  time: 0,
  score: 0,
  pieces: 0,
  attack: 0,
  lines: 0,
});