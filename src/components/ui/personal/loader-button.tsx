import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'

type Props = {
    isLoading: boolean
    onSuccess: boolean
    loadingText: string
    successText: string
    onClick: (params: any) => any
    className?: string
    children: React.ReactNode
}

const LoaderButton = ({ 
    isLoading, 
    onSuccess, 
    onClick, 
    loadingText, 
    successText, 
    children,
    className
}: Props) => {

  return (  
    <Button 
        onClick={onClick} 
        disabled={isLoading} 
        className={cn(isLoading ? 'opacity-50 cursor-not-allowed' : (onSuccess ? 'bg-green-500 hover:bg-green-600' : ''), className)}
    >
        {isLoading ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    <p className='text-sm text-background'>{loadingText}</p>
                </>
            ) : onSuccess ? (
                <p className='text-sm text-background'>{successText}</p>
            ) : (
                children
            )
        }
    </Button>
  )
}

export default LoaderButton