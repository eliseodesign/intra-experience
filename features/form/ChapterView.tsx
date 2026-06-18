'use client'

import { motion, AnimatePresence } from 'framer-motion'
import type { Chapter } from '@/lib/questions'

interface ChapterTransitionProps {
  chapter: Chapter
  onContinue: () => void
}

export function ChapterTransition({ chapter, onContinue }: ChapterTransitionProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: '#07080d' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Background number */}
      <motion.span
        className="absolute select-none font-bold leading-none pointer-events-none"
        style={{
          fontSize: 'clamp(160px, 30vw, 320px)',
          color: chapter.accent,
          opacity: 0.04,
          fontWeight: 800,
        }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.04 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {chapter.number}
      </motion.span>

      <div className="relative z-10 text-center px-8 max-w-xl">
        {/* Chapter number pill */}
        <motion.div
          className="inline-flex items-center gap-2 mb-8"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{
              background: chapter.accent,
              boxShadow: `0 0 10px ${chapter.accent}`,
            }}
          />
          <span
            className="text-[11px] font-bold tracking-[0.2em] uppercase"
            style={{ color: chapter.accent }}
          >
            Capítulo {chapter.number}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-5xl sm:text-6xl font-light text-intra-text mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {chapter.title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-base text-intra-muted font-light mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {chapter.subtitle}
        </motion.p>

        {/* Dash separator */}
        <motion.div
          className="flex items-center gap-4 justify-center mb-10"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="h-[1px] w-12 bg-intra-border" />
          <span className="text-intra-border text-sm">—</span>
          <div className="h-[1px] w-12 bg-intra-border" />
        </motion.div>

        {/* Continue button */}
        <motion.button
          className="px-8 py-3.5 rounded-lg text-sm font-medium tracking-wide border transition-all duration-200 focus-visible:outline-none"
          style={{
            color: chapter.accent,
            borderColor: `${chapter.accent}40`,
            background: `${chapter.accent}10`,
          }}
          onClick={onContinue}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Comenzar este capítulo →
        </motion.button>
      </div>
    </motion.div>
  )
}
