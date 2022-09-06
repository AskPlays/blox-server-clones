import { Component, createSignal } from 'solid-js';
import { Link, Route, Routes } from '@solidjs/router';

import logo from './logo.svg';
import styles from './App.module.css';
import { HeaderList } from './components/HeaderList';
import { Leaderboard } from './components/Leaderboard';
import { Multiplayer } from './components/Multiplayer';
import { Singleplayer } from './components/Singleplayer';
import { Custom } from './components/Custom';
import { Opener } from './components/Opener';
import { Chat } from './components/Chat';

const App: Component = () => {
  const [loggedIn, setLoggedIn] = createSignal(localStorage.getItem('loggedIn') ?? false);
  const login = () => {
    localStorage.setItem('loggedIn', 'true');
    setLoggedIn(true);
    return '';
  };
  const logout = () => {
    localStorage.removeItem('loggedIn');
    setLoggedIn(false);
    return '';
  }
  return (
    <div>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <HeaderList element={<Link href="/">Play</Link>}>
          <Link href="/">Multiplayer</Link>
          <Link href="/singleplayer">Singleplayer</Link>
          <Link href="/custom">Custom</Link>
          <Link href="/opener">Opener</Link>
        </HeaderList>
        <Link href="/leaderboard">Leaderboard</Link>
        <Link href="/mapmaker">Map Maker</Link>
        <Link href="/about">About</Link>
        <HeaderList element={<Link href={loggedIn() ? "/profile" : "/login"}>{loggedIn() ? "profile" : "login"}</Link>}>
          <Link href="/times">Times</Link>
          <Link href="/account">Account</Link>
          <Link href="/logout" onClick={()=>{console.log("log out")}}>Log Out</Link>
        </HeaderList>
      </header>
      <Routes>
        <Route path="/" element={<Multiplayer />} />
        <Route path="/singleplayer" element={<Singleplayer />} />
        <Route path="/custom" element={<Custom />} />
        <Route path="/opener" element={<Opener />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/mapmaker" element={<div>map maker</div>} />
        <Route path="/about" element={<div>about</div>} />
        <Route path="/login" element={<div>you have now logged in {login()}</div>} />
        <Route path="/profile" element={<div>profile</div>} />
        <Route path="/times" element={<div>times</div>} />
        <Route path="/account" element={<div>account</div>} />
        <Route path="/logout" element={<div>You have logged out {logout()}</div>} />
      </Routes>
      <Chat/>
    </div>
  );
};

export default App;
