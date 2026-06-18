'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface TextareaInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  maxLength?: number
  autoFocus?: boolean
  minRows?: number
}

export function TextareaInput({
  value,
  onChange,
  placeholder,
  maxLength,
  autoFocus = false,
  minRows = 3,
}: TextareaInputProps) {
  const [focused, setFocused] = useState(false)
  const charCount = value.length
  const nearLimit = maxLength ? charCount > maxLength * 0.85 : false

  return (
    <div className="relative w-full">
      {/* Textarea */}
      <motion.div
        animate={{
          boxShadow: focused
            ? '0 0 0 1px var(--chapter-accent), 0 0 20px rgba(var(--chapter-accent-rgb), 0.1)'
            : '0 0 0 1px #1a1d2e',
        }}
        transition={{ duration: 0.2 }}
        className="relative rounded-xl overflow-hidden bg-intra-card"
      >
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          maxLength={maxLength}
          autoFocus={autoFocus}
          rows={minRows}
          aria-label="Campo de respuesta"
          className="
            w-full bg-transparent text-intra-text placeholder:text-intra-muted
            px-5 py-4 text-base sm:text-lg font-light leading-relaxed
            focus:outline-none resize-none min-h-[120px]
            caret-[var(--chapter-accent)]
          "
        />

        {/* Bottom gradient indicator */}
        {value.length > 0 && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
            style={{ transformOrigin: 'left', background: 'var(--chapter-accent)' }}
          />
        )}
      </motion.div>

      {/* Char count */}
      {maxLength && (
        <motion.div
          className="flex justify-end mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: focused || charCount > 0 ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <span
            className="text-[11px] font-medium tabular-nums"
            style={{ color: nearLimit ? 'var(--chapter-accent)' : '#4a5068' }}
          >
            {charCount} / {maxLength}
          </span>
        </motion.div>
      )}
    </div>
  )
}
