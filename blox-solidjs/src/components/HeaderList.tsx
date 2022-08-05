import type { JSX, ParentComponent } from 'solid-js';
import styles from './HeaderList.module.css';

export const HeaderList: ParentComponent<{element: JSX.Element}> = (props) => {
  return (
    <div class={styles.listWrapper}>
      { props.element }
      <div class={styles.list}>
        { props.children }
      </div>
    </div>
  );
};
