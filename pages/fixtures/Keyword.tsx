import { FC, HTMLAttributes } from 'react'

const Keyword: FC<HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
}) => {
  return (
    <div
      className={`rounded-full bg-key-6 px-2 py-[2px] text-center text-10 tracking-[-0.3px] text-key-1 ${className}`}
    >
      <span className=" mr-[2px] text-key-2">#</span>
      {children}
    </div>
  )
}

export { Keyword }
