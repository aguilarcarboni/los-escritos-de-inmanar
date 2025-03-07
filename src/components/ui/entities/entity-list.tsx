import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Space } from '@/lib/entities/space'

interface ToolPageListViewProps<T extends { id: string | number; space_id: number; name: string }> {
  items: T[]
  selectedSpaceId: string | null
  renderItem: (item: T) => React.ReactNode
  spaces?: Space[]
}

const EntityList = <T extends { id: string | number; space_id: number; name: string }>({
  items,
  spaces,
  selectedSpaceId,
  renderItem,
}: ToolPageListViewProps<T>) => {

  const renderList = (items: T[]) => (
    <div className='w-full flex flex-col gap-y-5'>
      {items.map((item) => (
          <div key={item.id.toString()}>
            {renderItem(item)}
          </div>
        ))}
    </div>
  );

  // If a space is selected, separate the entity items by space
  if (!selectedSpaceId && spaces) return (
    <Accordion type="multiple" className="w-full" defaultValue={spaces.map(space => space.id.toString())}>
      {spaces.map((space) => {
        const spaceItems = items.filter(item => item.space_id === space.id)
        if (spaceItems.length === 0) return null
        return (
          <AccordionItem key={space.id} value={space.id.toString()}>
            <AccordionTrigger>{space.name}</AccordionTrigger>
            <AccordionContent>
              {renderList(spaceItems)}
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )

  // If no space is selected, render the list for all entity items
  return (
    <div className='w-full flex flex-col'>
      {renderList(items)}
    </div>
  )
}

export default EntityList