
type HeaderButtonProps = {
  children: React.ReactNode;
  className?: string;
}

export default function Button({children, className}:HeaderButtonProps) {
  return (
    <>
      <a className={"cursor-pointer text-sm p-2 mb-0.5 block duration-100 bg-purple-800 hover:bg-purple-500 rounded-lg "+(className ?? '')}>{children}</a>
    </>
  )
}