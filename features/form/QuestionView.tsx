'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { AlertCircle } from 'lucide-react'
import type { Question } from '@/lib/questions'
import { TextareaInput } from '@/components/ui/TextareaInput'
import { RadioCard } from '@/components/ui/RadioCard'
import { ColorSelector } from '@/components/ui/ColorSelector'
import { WordInput } from '@/components/ui/WordInput'

interface QuestionViewProps {
  question: Question
  value: string
  onChange: (value: string) => void
  error: string | null
  questionNumber: number
  totalInChapter: number
}

export function QuestionView({
  question,
  value,
  onChange,
  error,
  questionNumber,
  totalInChapter,
}: QuestionViewProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Question counter */}
      <motion.div
        className="mb-6 flex items-center gap-3"
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <span
          className="text-[11px] font-bold tracking-[0.2em] uppercase"
          style={{ color: 'var(--chapter-accent)' }}
        >
          — {String(questionNumber).padStart(2, '0')} / {String(totalInChapter).padStart(2, '0')}
        </span>
      </motion.div>

      {/* Question text */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight text-intra-text mb-3"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        {question.question}
      </motion.h2>

      {/* Hint */}
      {question.hint && (
        <motion.p
          className="text-sm text-intra-muted italic mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          {question.hint}
        </motion.p>
      )}

      {!question.hint && <div className="mb-8" />}

      {/* Input area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        {question.type === 'textarea' && (
          <TextareaInput
            value={value}
            onChange={onChange}
            placeholder={question.placeholder}
            maxLength={question.maxLength}
            autoFocus
            minRows={4}
          />
        )}

        {question.type === 'radio' && question.options && (
          <div className="space-y-3" role="radiogroup" aria-label={question.question}>
            {question.options.map((option) => (
              <RadioCard
                key={option.value}
                option={option}
                selected={value === option.value}
                onSelect={onChange}
              />
            ))}
          </div>
        )}

        {question.type === 'color' && (
          <ColorSelector value={value} onChange={onChange} />
        )}

        {question.type === 'word' && (
          <WordInput
            value={value}
            onChange={onChange}
            placeholder={question.placeholder}
            maxLength={question.maxLength}
            autoFocus
          />
        )}

        {question.type === 'text' && (
          <TextareaInput
            value={value}
            onChange={onChange}
            placeholder={question.placeholder}
            maxLength={question.maxLength}
            autoFocus
            minRows={2}
          />
        )}
      </motion.div>

      {/* Error */}
      <AnimatePresence>
        {error && (
          <motion.div
            className="flex items-center gap-2 mt-4 text-sm text-red-400"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            role="alert"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
