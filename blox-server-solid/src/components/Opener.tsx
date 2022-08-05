import type { JSX, Component } from 'solid-js';
import { Game } from './Game';

import styles from './Opener.module.css';
import { Sidebar } from './Sidebar';
import sideStyles from './Sidebar.module.css';

export const Opener: Component = () => {
  return (
    <div class={sideStyles.container}>
      <Sidebar title="Opener">
        <div>Opener</div>
        <div>settings</div>
      </Sidebar>
      <Game />
      <div>Opener info</div>
    </div>
  );
};
