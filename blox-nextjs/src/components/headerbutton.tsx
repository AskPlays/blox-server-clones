import Link from "next/link";

type HeaderButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export default function HeaderButton({children, href, className}:HeaderButtonProps) {
  return (
    <>
      <Link href={href ?? ""}>
        <a className={"p-4 block duration-100 hover:bg-purple-500 "+(className ?? '')}>{children}</a>
      </Link>
    </>
  )
}