import React from 'react'
import { cn } from '@/lib/utils'
import { Block } from '../personal/block'

interface ListItemProps<T> {
  children: React.ReactNode
  actions: React.ReactNode[]
  className?: string
  onClick?: () => void
}

const EntityListItem = <T extends { id: string | number; created: string; updated: string }>({
  children,
  actions,
  className,
  onClick
}: ListItemProps<T>) => {
  return (
    <Block
      className={cn(
        "flex items-center justify-between",
        className
      )}
      onClick={onClick}
    >
      <div className='flex w-full items-center space-x-4'>
        {children}
      </div>

      <div className="flex w-fit justify-center">
        {actions}
      </div>

    </Block>
  )
}

export default EntityListItem