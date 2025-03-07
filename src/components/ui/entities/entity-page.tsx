'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

interface Props {
  name: string
  description: string
  CreateEntityComponent?:  React.ReactNode
  ConfigComponent?: React.ReactNode
  children: React.ReactNode
  className?: string
}

const EntityPage = ({
  name,
  description,
  CreateEntityComponent,
  ConfigComponent,
  children,
  className
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='w-full h-full'
    >
      <Card className={cn("w-full h-full flex flex-col gap-y-5", className)}>
        <CardHeader className='flex flex-row gap-10 justify-between items-center'>
          <motion.div
            className='flex flex-col gap-y-2'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <CardTitle>{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </motion.div>
          <motion.div
            className='flex gap-2 w-fit'
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            {CreateEntityComponent}
            {ConfigComponent}
          </motion.div>
        </CardHeader>
        <Separator />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='h-full overflow-scroll'
        >
          <CardContent className='flex h-full flex-row gap-x-5'>
            {children}
          </CardContent>
        </motion.div>
      </Card>
    </motion.div>
  )
}

export default EntityPage