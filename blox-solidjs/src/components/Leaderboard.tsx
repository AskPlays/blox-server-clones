import type { JSX, Component } from 'solid-js';

import styles from './Leaderboard.module.css';

export const Leaderboard: Component = () => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Positon</th>
          <th>Player</th>
          <th>Time</th>
          <th>Pieces</th>
          <th>PPS</th>
          <th>Date</th>
          <th>Replay</th>
        </tr>
      </tbody>
    </table>
  );
};
