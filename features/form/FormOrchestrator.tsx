'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { useFormProgress } from '@/hooks/useFormProgress'
import { useChapterTheme } from '@/hooks/useChapterTheme'
import { ProgressBar } from '@/components/layout/ProgressBar'
import { Header } from '@/components/layout/Header'
import { GlowEffect } from '@/components/brand/GlowEffect'
import { QuestionView } from './QuestionView'
import { ChapterTransition } from './ChapterView'
import { SuccessView } from './SuccessView'

type UIPhase = 'chapter-intro' | 'question'

const questionVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 56 : -56,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -56 : 56,
    opacity: 0,
  }),
}

export function FormOrchestrator() {
  const progress = useFormProgress()
  const {
    state,
    currentChapter,
    currentQuestion,
    currentAnswer,
    progressPercent,
    isFirst,
    isFinalQuestion,
    isHydrated,
    setAnswer,
    goNext,
    goPrev,
  } = progress

  useChapterTheme(currentChapter)

  const [uiPhase, setUIPhase] = useState<UIPhase>('chapter-intro')
  const prevChapterRef = useRef(-1)

  // When chapterIndex changes (from goNext crossing a chapter boundary),
  // show the chapter intro screen before questions
  useEffect(() => {
    if (!isHydrated) return
    if (state.chapterIndex !== prevChapterRef.current) {
      if (prevChapterRef.current !== -1) {
        // Genuine chapter change — show intro
        setUIPhase('chapter-intro')
      }
      prevChapterRef.current = state.chapterIndex
    }
  }, [state.chapterIndex, isHydrated])

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-intra-bg flex items-center justify-center">
        <motion.div
          className="w-5 h-5 rounded-full border-2 border-intra-border"
          style={{ borderTopColor: 'var(--chapter-accent)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    )
  }

  if (state.isSubmitted) {
    return <SuccessView />
  }

  if (uiPhase === 'chapter-intro') {
    return (
      <AnimatePresence mode="wait">
        <ChapterTransition
          key={`intro-${currentChapter.id}`}
          chapter={currentChapter}
          onContinue={() => setUIPhase('question')}
        />
      </AnimatePresence>
    )
  }

  if (!currentQuestion) return null

  const currentChapterQuestions = currentChapter.questions

  return (
    <div
      className="min-h-screen bg-intra-bg relative overflow-hidden flex flex-col"
    >
      {/* Ambient glow — color shifts with chapter */}
      <GlowEffect
        color={currentChapter.accent}
        size="xl"
        position="top-right"
        opacity={0.07}
      />
      <GlowEffect
        color={currentChapter.accent}
        size="md"
        position="bottom-left"
        opacity={0.04}
      />

      {/* Progress bar */}
      <ProgressBar
        chapterIndex={state.chapterIndex}
        questionIndex={state.questionIndex}
        progressPercent={progressPercent}
      />

      {/* Header */}
      <Header
        chapterTitle={currentChapter.title}
        chapterNumber={currentChapter.number}
      />

      {/* Main content */}
      <main className="flex-1 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 pt-28 pb-32">
        {/* Decorative chapter number */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentChapter.number}
              className="font-black leading-none block"
              style={{
                fontSize: 'clamp(140px, 22vw, 280px)',
                color: currentChapter.accent,
                opacity: 0,
                transform: 'translateX(25%)',
              }}
              animate={{ opacity: 0.045 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {currentChapter.number}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Animated question */}
        <div className="relative z-10 w-full max-w-3xl">
          <AnimatePresence mode="wait" custom={state.direction}>
            <motion.div
              key={currentQuestion.id}
              custom={state.direction}
              variants={questionVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 280, damping: 28 },
                opacity: { duration: 0.22 },
              }}
            >
              <QuestionView
                question={currentQuestion}
                value={currentAnswer}
                onChange={(val) => setAnswer(currentQuestion.id, val)}
                error={state.error}
                questionNumber={state.questionIndex + 1}
                totalInChapter={currentChapterQuestions.length}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Bottom navigation */}
      <motion.nav
        className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between px-6 sm:px-10 py-5 sm:py-6"
        style={{
          background: 'linear-gradient(to top, #07080d 55%, rgba(7,8,13,0.8) 80%, transparent)',
        }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {/* Back */}
        <motion.button
          onClick={goPrev}
          disabled={isFirst}
          className="flex items-center gap-2 text-intra-muted hover:text-intra-text-dim transition-colors duration-200 text-sm font-medium focus-visible:outline-none"
          style={{ opacity: isFirst ? 0 : 1, pointerEvents: isFirst ? 'none' : 'auto' }}
          whileHover={{ x: -2 }}
          whileTap={{ scale: 0.96 }}
          aria-label="Pregunta anterior"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:block tracking-wide">Anterior</span>
        </motion.button>

        {/* Dot indicators */}
        <div className="flex items-center gap-2" role="tablist" aria-label="Progreso del capítulo">
          {currentChapterQuestions.map((_, i) => (
            <motion.div
              key={i}
              className="rounded-full"
              role="tab"
              aria-selected={i === state.questionIndex}
              style={{
                background:
                  i === state.questionIndex
                    ? currentChapter.accent
                    : i < state.questionIndex
                    ? '#2a2d40'
                    : '#1a1d2e',
              }}
              animate={{
                width: i === state.questionIndex ? 20 : 6,
                height: 6,
                boxShadow:
                  i === state.questionIndex
                    ? `0 0 8px ${currentChapter.accent}80`
                    : 'none',
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            />
          ))}
        </div>

        {/* Next */}
        <motion.button
          onClick={goNext}
          className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none tracking-wide"
          style={{
            color: currentChapter.accent,
            background: `${currentChapter.accent}15`,
            border: `1px solid ${currentChapter.accent}40`,
          }}
          whileHover={{
            scale: 1.03,
            background: `${currentChapter.accent}20`,
            borderColor: `${currentChapter.accent}60`,
          }}
          whileTap={{ scale: 0.97 }}
          aria-label={isFinalQuestion ? 'Finalizar y enviar' : 'Siguiente pregunta'}
        >
          <span>{isFinalQuestion ? 'Finalizar' : 'Siguiente'}</span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.nav>
    </div>
  )
}
