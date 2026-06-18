'use client'

import { motion } from 'framer-motion'
import { IntraLogo } from '@/components/brand/IntraLogo'

interface HeaderProps {
  showProgress?: boolean
  chapterTitle?: string
  chapterNumber?: string
}

export function Header({ chapterTitle, chapterNumber }: HeaderProps) {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 sm:px-10 pt-8"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <IntraLogo size="xs" />

      {chapterTitle && chapterNumber && (
        <motion.div
          className="flex items-center gap-2 text-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <span className="text-[10px] uppercase tracking-[0.18em] text-intra-muted font-medium hidden sm:block">
            {chapterTitle}
          </span>
          <span
            className="text-[10px] font-bold tracking-[0.1em]"
            style={{ color: 'var(--chapter-accent)' }}
          >
            {chapterNumber}
          </span>
        </motion.div>
      )}
    </motion.header>
  )
}
