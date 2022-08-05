import HeaderButton from "./headerbutton";

type HeaderDropdownProps = {
  children: React.ReactNode;
  href: string;
  title: string;
  className?: string;
}

export default function HeaderDropdown({children, href, title, className}:HeaderDropdownProps) {
  return (
    <div className={"relative group "+(className ?? '')}>
      <HeaderButton href={href}>{title}</HeaderButton>
      <div className="absolute top-full hidden bg-gray-800 group-hover:block group-hover:drop-shadow">
        {children}
      </div>
    </div>
  )
}