'use client'

import { motion } from 'framer-motion'
import type { QuestionOption } from '@/lib/questions'

interface RadioCardProps {
  option: QuestionOption
  selected: boolean
  onSelect: (value: string) => void
}

export function RadioCard({ option, selected, onSelect }: RadioCardProps) {
  return (
    <motion.button
      onClick={() => onSelect(option.value)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="relative w-full text-left rounded-xl p-4 sm:p-5 border transition-all duration-200 focus-visible:outline-none"
      style={{
        background: selected ? `rgba(var(--chapter-accent-rgb), 0.08)` : '#0d0f1a',
        borderColor: selected ? 'var(--chapter-accent)' : '#1a1d2e',
        boxShadow: selected
          ? '0 0 16px rgba(var(--chapter-accent-rgb), 0.12), 0 0 0 1px rgba(var(--chapter-accent-rgb), 0.15)'
          : 'none',
      }}
      role="radio"
      aria-checked={selected}
    >
      <div className="flex items-center gap-4">
        {/* Selection indicator */}
        <div
          className="flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200"
          style={{
            borderColor: selected ? 'var(--chapter-accent)' : '#2a2d40',
          }}
        >
          {selected && (
            <motion.div
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: 'var(--chapter-accent)' }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            />
          )}
        </div>

        {/* Icon */}
        {option.icon && (
          <span className="text-xl flex-shrink-0" aria-hidden="true">
            {option.icon}
          </span>
        )}

        {/* Label */}
        <span
          className="text-base sm:text-lg font-medium transition-colors duration-200"
          style={{ color: selected ? '#e8eaf0' : '#8b92b8' }}
        >
          {option.label}
        </span>
      </div>

      {/* Selected accent line */}
      {selected && (
        <motion.div
          className="absolute left-0 top-2 bottom-2 w-[3px] rounded-r-full"
          style={{ background: 'var(--chapter-accent)' }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.button>
  )
}
