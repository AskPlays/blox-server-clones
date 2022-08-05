import type { JSX, Component } from 'solid-js';
import { Game } from './Game';

import styles from './Singleplayer.module.css';
import sideStyles from './Sidebar.module.css';
import { Sidebar } from './Sidebar';

export const Singleplayer: Component = () => {
  return (
    <div class={sideStyles.container}>
      <Sidebar title="Modes">
        <div class={styles.list}>
          <button tabindex="0">Default</button>
          <button tabindex="0">40 Lines</button>
          <button tabindex="0">Hyper</button>
          <button tabindex="0">Digger</button>
        </div>
        <div>settings</div>
      </Sidebar>
      <Game />
      <div>Nothing</div>
    </div>
  );
};
