'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface IntraLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
  className?: string
}

// Width/height ratios derived from the 1011x370 imagotipo
const sizes = {
  xs: { width: 72,  height: 26  },
  sm: { width: 100, height: 37  },
  md: { width: 140, height: 51  },
  lg: { width: 200, height: 73  },
  xl: { width: 280, height: 103 },
}

export function IntraLogo({ size = 'md', animated = false, className = '' }: IntraLogoProps) {
  const { width, height } = sizes[size]

  const img = (
    <Image
      src="/intra-logo.png"
      alt="INTRA Multimedia Agency"
      width={width}
      height={height}
      priority
      className={`object-contain select-none ${className}`}
      style={{ filter: 'brightness(1)' }}
    />
  )

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {img}
      </motion.div>
    )
  }

  return img
}
