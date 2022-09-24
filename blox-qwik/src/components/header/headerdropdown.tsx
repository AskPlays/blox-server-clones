import { component$, Slot } from '@builder.io/qwik';
import { HeaderButton } from './headerbutton';

type HeaderDropdownProps = {
  href: string;
  title: string;
  className?: string;
}

export const HeaderDropdown = component$(({href, title, className}:HeaderDropdownProps) => {
  return (
    <div className={"relative group "+(className ?? '')}>
      <HeaderButton href={href}>{title}</HeaderButton>
      <div className="absolute top-full hidden bg-gray-800 group-hover:block group-hover:drop-shadow">
        <Slot/>
      </div>
    </div>
  )
});