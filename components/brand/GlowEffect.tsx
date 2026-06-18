'use client'

import { motion } from 'framer-motion'

interface GlowEffectProps {
  color?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'
  opacity?: number
}

const sizeMap = {
  sm: 'w-48 h-48',
  md: 'w-80 h-80',
  lg: 'w-[500px] h-[500px]',
  xl: 'w-[800px] h-[800px]',
}

const positionMap = {
  'top-left': 'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
  'top-right': 'top-0 right-0 translate-x-1/2 -translate-y-1/2',
  'bottom-left': 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
  'bottom-right': 'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
  center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
}

export function GlowEffect({
  color = 'var(--chapter-accent)',
  size = 'lg',
  position = 'top-right',
  opacity = 0.08,
}: GlowEffectProps) {
  return (
    <motion.div
      className={`absolute ${sizeMap[size]} ${positionMap[position]} rounded-full pointer-events-none blur-3xl`}
      style={{ background: color, opacity }}
      animate={{ opacity: [opacity, opacity * 1.4, opacity] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}
