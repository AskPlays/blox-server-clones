import { Component, onCleanup } from 'solid-js';
import { stats } from '../store';

import styles from './Game.module.css';

export const Game: Component = () => {
  const interval = setInterval(() => {
    stats.time++;
  }, 1000);
  onCleanup(() => {
    clearInterval(interval);
  });
  return (
    <div class={styles.game} onKeyUp={()=>{stats.pieces++}} tabindex="0">
      <div class={styles.left}>left</div>
      <div class={styles.center}>
        <div class={styles.top}>top</div>
        <div class={styles.bottom}>bottom</div>
      </div>
      <div class={styles.right}>right</div>
    </div>
  );
};
