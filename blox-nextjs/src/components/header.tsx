import type { NextPage } from "next";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { trpc } from "../utils/trpc";
import HeaderButton from "./headerbutton";
import HeaderDropdown from "./headerdropdown";

export default function Header() {
  const { height, width} = useWindowDimensions();

  return (
    <>
      <div className="flex justify-center items-center bg-purple-600 text-white">
        <HeaderDropdown href="" title="Play">
          <HeaderButton href="">Multiplayer</HeaderButton>
          <HeaderButton href="">Singleplayer</HeaderButton>
          <HeaderButton href="">Custom</HeaderButton>
          <HeaderButton href="">Opener</HeaderButton>
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
      </div>
    </>
  )
}