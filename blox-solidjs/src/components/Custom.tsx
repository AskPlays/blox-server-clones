import type { JSX, Component } from 'solid-js';
import { Game } from './Game';

import styles from './Custom.module.css';
import sideStyles from './Sidebar.module.css';
import { Sidebar } from './Sidebar';

export const Custom: Component = () => {
  return (
    <div class={sideStyles.container}>
      <Sidebar title="Custom">
        <div>settings</div>
      </Sidebar>
      <Game />
      <div>Bots</div>
    </div>
  );
};
