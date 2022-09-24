import { component$, Slot } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

type HeaderButtonProps = {
  href?: string;
  className?: string;
}

export const HeaderButton = component$<HeaderButtonProps>(({href, className}) => {
  return (
    <>
      <Link href={href ?? ""}>
        <a className={"p-4 block duration-100 hover:bg-purple-500 cursor-pointer "+(className ?? '')}><Slot/></a>
      </Link>
    </>
  )
});