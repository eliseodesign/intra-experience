'use client'

import { motion } from 'framer-motion'
import { chapters } from '@/lib/questions'

interface ProgressBarProps {
  chapterIndex: number
  questionIndex: number
  progressPercent: number
}

export function ProgressBar({ chapterIndex, questionIndex, progressPercent }: ProgressBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Thin overall progress line */}
      <div className="h-[2px] w-full bg-intra-border">
        <motion.div
          className="h-full progress-fill"
          style={{ background: 'var(--chapter-accent)' }}
          initial={{ width: '0%' }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>

      {/* Chapter dots */}
      <div className="absolute top-4 left-0 right-0 flex justify-center gap-6 pointer-events-none">
        {chapters.map((ch, i) => (
          <motion.div
            key={ch.id}
            className="flex items-center gap-2"
            animate={{ opacity: i <= chapterIndex ? 1 : 0.3 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background:
                  i === chapterIndex ? 'var(--chapter-accent)' : i < chapterIndex ? '#2a2d40' : '#1a1d2e',
              }}
              animate={{
                scale: i === chapterIndex ? 1.4 : 1,
                boxShadow:
                  i === chapterIndex
                    ? '0 0 8px rgba(var(--chapter-accent-rgb), 0.6)'
                    : 'none',
              }}
              transition={{ duration: 0.3 }}
            />
            <span
              className="text-[9px] uppercase tracking-[0.15em] font-medium hidden sm:block"
              style={{ color: i === chapterIndex ? 'var(--chapter-accent)' : '#2a2d40' }}
            >
              {ch.title}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
