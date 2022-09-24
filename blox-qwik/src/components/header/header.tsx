import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import { HeaderButton } from './headerbutton';
import { HeaderDropdown } from './headerdropdown';

export default component$(() => {
  return (
    <>
      <header className="flex justify-center items-center bg-purple-600 text-white">
      <div class="logo">
        <a href="https://qwik.builder.io/" target="_blank">
          <QwikLogo />
        </a>
      </div>
        <HeaderDropdown href="" title="Play">
          <HeaderButton href="/">Multiplayer</HeaderButton>
          <HeaderButton href="/?mode=0">Singleplayer</HeaderButton>
          <HeaderButton href="/?cmode=0">Custom</HeaderButton>
          <HeaderButton href="/?opener=">Opener</HeaderButton>
        </HeaderDropdown>
        <HeaderButton href="" className="hidden sm:block ">Leaderboards</HeaderButton>
        <HeaderButton href="" className="hidden sm:block ">Map Maker</HeaderButton>
        <HeaderButton href="" className="hidden sm:block ">About</HeaderButton> 
        <HeaderDropdown href="" title="Other" className="sm:hidden block">
          <HeaderButton href="">Leaderboards</HeaderButton>
          <HeaderButton href="">Map Maker</HeaderButton>
          <HeaderButton href="">About</HeaderButton>
        </HeaderDropdown>
        <HeaderDropdown href="" title="Profile">
          <HeaderButton href="">Times</HeaderButton>
          <HeaderButton href="">Account</HeaderButton>
          <HeaderButton href="">Log Out</HeaderButton>
        </HeaderDropdown>
      </header>
    </>
  );
});
