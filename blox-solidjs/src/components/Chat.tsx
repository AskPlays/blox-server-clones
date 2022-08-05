import { Component } from "solid-js";

import styles from './Chat.module.css';

export const Chat: Component = () => {
  let chat: HTMLInputElement | undefined = undefined,
  chatBox: HTMLInputElement | undefined = undefined;
  function onKeyDown(event: KeyboardEvent) { /*@once*/
    if(event.key === "Enter") {
      chatBox!.appendChild<HTMLDivElement>(<div>{chat!.value}</div> as HTMLDivElement);
      chat!.value = "";
    }
  }

  return (
    <div class={styles.main}>
      <div class={styles.title}>Chat</div>
      <div ref={chatBox as any} class={styles.messages}>
        <div>message1</div>
        <div>message2</div>
      </div>
      <input ref={chat} onKeyDown={onKeyDown} type="text" placeholder="type here to chat"/>
    </div>
  );
}