'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface WordInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  maxLength?: number
  autoFocus?: boolean
}

export function WordInput({
  value,
  onChange,
  placeholder = 'Una sola palabra...',
  maxLength = 40,
  autoFocus = false,
}: WordInputProps) {
  const [focused, setFocused] = useState(false)

  return (
    <div className="w-full">
      <motion.div
        animate={{
          boxShadow: focused
            ? '0 0 0 1px var(--chapter-accent), 0 0 24px rgba(var(--chapter-accent-rgb), 0.12)'
            : '0 0 0 1px #1a1d2e',
        }}
        transition={{ duration: 0.2 }}
        className="relative rounded-xl overflow-hidden bg-intra-card"
      >
        <input
          type="text"
          value={value}
          onChange={(e) => {
            const word = e.target.value.trim().includes(' ')
              ? e.target.value.trimStart()
              : e.target.value
            onChange(word)
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          maxLength={maxLength}
          autoFocus={autoFocus}
          aria-label="Tu palabra"
          className="
            w-full bg-transparent text-intra-text placeholder:text-intra-muted
            px-6 py-6 text-3xl sm:text-4xl font-light tracking-wide text-center
            focus:outline-none caret-[var(--chapter-accent)]
          "
        />
        {value && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
            style={{ transformOrigin: 'center', background: 'var(--chapter-accent)' }}
          />
        )}
      </motion.div>
      <p className="text-center text-[11px] text-intra-muted mt-3 tracking-[0.12em] uppercase">
        Una sola palabra — la primera que aparezca
      </p>
    </div>
  )
}
