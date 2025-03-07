import React from 'react'
import { cn } from '@/lib/utils'

interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Block({ children, className, ...props }: BlockProps) {
  return (
    <div className={cn("bg-muted rounded-md p-5", className)} {...props}>
      {children}
    </div>
  )
}