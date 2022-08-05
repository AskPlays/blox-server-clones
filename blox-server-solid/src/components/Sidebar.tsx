import type { ParentComponent } from 'solid-js';
import { stats } from '../store';

import styles from './Sidebar.module.css';

export const Sidebar: ParentComponent<{title: string}> = ({title, children}) => {
  return (
    <div class={styles.main}>
        <div class={styles.title}>{title}</div>
        {children}
        <div>
          <h1 class={styles.subtitle}>Stats</h1>
          PPS: {Math.floor(stats.pieces/stats.time*100)/100}<br/>
          APM: {Math.floor(stats.attack/stats.time*100)/100}<br/>
          Lines: {stats.lines}<br/>
          Time: {stats.time}<br/>
          Pieces: {stats.pieces}<br/>
        </div>
      </div>
  );
};
