import type { JSX, Component } from 'solid-js';
import { Game } from './Game';

import styles from './Multiplayer.module.css';
import { Sidebar } from './Sidebar';
import sideStyles from './Sidebar.module.css';

export const Multiplayer: Component = () => {
  return (
    <div class={sideStyles.container}>
      <Sidebar title="Players">
        <div class={styles.list}>
          <div>Player1</div>
          <div>Player2</div>
          <div>Player3</div>
          <div>Player4</div>
        </div>
        <div>settings</div>
      </Sidebar>
      <Game />
      <div class={sideStyles.aside}>Opponents</div>
    </div>
  );
};
