import React from 'react'

export type IButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  className?: string
  title: string
  handler: () => void
}
