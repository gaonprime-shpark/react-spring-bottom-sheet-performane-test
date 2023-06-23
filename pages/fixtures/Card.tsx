import React from 'react'
import { FC, HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

const Card: FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={` whitespace-pre-line rounded-[20px] bg-white p-[10px] tracking-[-0.3px] shadow-[0_4px_8px_0_rgba(0,0,0,0.05)] ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

const MemoCard = React.memo(Card)

export { MemoCard as Card }
