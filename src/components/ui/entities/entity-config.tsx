'use client'
import React, { useEffect } from 'react'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { Label } from '@/components/ui/label'
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Settings } from 'lucide-react'
import { Space } from '@/lib/entities/space'

export type ViewOption = {
    value: string
    label: string
}

type Props = {
    title: string
    description: string
    selectedSpaceId: string | null
    setSelectedSpaceId: (spaceId: string | null) => void
    spaces?: Space[] | null
    viewMode?: string
    viewOptions?: ViewOption[]
    setViewMode?: (viewMode: string) => void
    singular?: boolean
}

const EntityConfig = ({
    title,
    description,
    spaces,
    selectedSpaceId,
    viewMode,
    viewOptions,
    setViewMode,
    setSelectedSpaceId,
    singular
}: Props) => {

    useEffect(() => {
        if (selectedSpaceId === 'all') {
            setSelectedSpaceId(null)
        }
    }, [selectedSpaceId])

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className='p-1 bg-transparent hover:bg-muted text-foreground hover:text-foreground'>
                    <Settings className="h-5 w-5"/>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 mr-5">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">{title}</h4>
                        <p className="text-sm text-muted-foreground">
                            {description}
                        </p>
                    </div>
                    <div className="grid gap-2">
                        {spaces && 
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="space">Space</Label>
                                <Select value={selectedSpaceId || 'all'} onValueChange={setSelectedSpaceId}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {!singular && <SelectItem value="all">All</SelectItem>}
                                        {spaces && spaces.map((space) => (
                                            <SelectItem key={space.id} value={space.id.toString()}>{space.name}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>                        
                        }
                        {viewOptions && (
                            <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="view">View</Label>
                                <Select value={viewMode} onValueChange={setViewMode}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {viewOptions.map((option) => (
                                        <SelectItem key={option.value} value={option.value}>
                                            {option.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                                </Select>
                            </div>
                        )}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default EntityConfig 