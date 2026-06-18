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
import { NameScreen } from './NameScreen'
import { submitResponse } from '@/lib/supabase'

type UIPhase = 'name' | 'chapter-intro' | 'question' | 'submitting' | 'submitted'

const questionVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 56 : -56, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -56 : 56, opacity: 0 }),
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

  const [uiPhase, setUIPhase] = useState<UIPhase>('name')
  const [nombre, setNombre] = useState('')
  const [submitError, setSubmitError] = useState('')
  const prevChapterRef = useRef(-1)

  // Detect chapter changes to show intro
  useEffect(() => {
    if (!isHydrated || uiPhase === 'name') return
    if (state.chapterIndex !== prevChapterRef.current) {
      if (prevChapterRef.current !== -1) {
        setUIPhase('chapter-intro')
      }
      prevChapterRef.current = state.chapterIndex
    }
  }, [state.chapterIndex, isHydrated, uiPhase])

  // Loading
  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-intra-bg flex items-center justify-center">
        <motion.div
          className="w-5 h-5 rounded-full border-2 border-intra-border"
          style={{ borderTopColor: '#e34b03' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    )
  }

  // Success
  if (uiPhase === 'submitted') return <SuccessView nombre={nombre} />

  // Name screen
  if (uiPhase === 'name') {
    return (
      <NameScreen
        onContinue={(n) => {
          setNombre(n)
          prevChapterRef.current = -1
          setUIPhase('chapter-intro')
        }}
      />
    )
  }

  // Chapter intro
  if (uiPhase === 'chapter-intro') {
    return (
      <AnimatePresence mode="wait">
        <ChapterTransition
          key={`intro-${currentChapter.id}`}
          chapter={currentChapter}
          onContinue={() => {
            prevChapterRef.current = state.chapterIndex
            setUIPhase('question')
          }}
        />
      </AnimatePresence>
    )
  }

  if (!currentQuestion) return null

  // Handle final submit with Supabase
  const handleNext = async () => {
    if (isFinalQuestion) {
      const prevChIdx = state.chapterIndex
      const success = goNext()
      if (!success) return

      setUIPhase('submitting')
      setSubmitError('')

      const { success: ok, error } = await submitResponse(nombre, state.answers)

      if (!ok) {
        setSubmitError(error ?? 'Error al guardar. Intentá de nuevo.')
        setUIPhase('question')
        return
      }

      setUIPhase('submitted')
    } else {
      const prevChIdx = state.chapterIndex
      goNext()
    }
  }

  const currentChapterQuestions = currentChapter.questions

  // Submitting overlay
  if (uiPhase === 'submitting') {
    return (
      <div className="min-h-screen bg-intra-bg flex items-center justify-center flex-col gap-6">
        <motion.div
          className="w-8 h-8 rounded-full border-2 border-intra-border"
          style={{ borderTopColor: currentChapter.accent }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <p className="text-intra-muted text-sm tracking-wide">Guardando tu experiencia...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-intra-bg relative overflow-hidden flex flex-col">
      {/* Glows */}
      <GlowEffect color={currentChapter.accent} size="xl" position="top-right" opacity={0.07} />
      <GlowEffect color={currentChapter.accent} size="md" position="bottom-left" opacity={0.04} />

      {/* Progress */}
      <ProgressBar
        chapterIndex={state.chapterIndex}
        questionIndex={state.questionIndex}
        progressPercent={progressPercent}
      />

      {/* Header */}
      <Header chapterTitle={currentChapter.title} chapterNumber={currentChapter.number} />

      {/* Main */}
      <main className="flex-1 flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 pt-28 pb-32">
        {/* Decorative number */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentChapter.number}
              className="font-black leading-none block"
              style={{ fontSize: 'clamp(140px, 22vw, 280px)', color: currentChapter.accent, opacity: 0, transform: 'translateX(25%)' }}
              animate={{ opacity: 0.045 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {currentChapter.number}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Question */}
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
                error={submitError || state.error}
                questionNumber={state.questionIndex + 1}
                totalInChapter={currentChapterQuestions.length}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Navigation */}
      <motion.nav
        className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between px-6 sm:px-10 py-5 sm:py-6"
        style={{ background: 'linear-gradient(to top, #07080d 55%, rgba(7,8,13,0.8) 80%, transparent)' }}
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

        {/* Dots */}
        <div className="flex items-center gap-2" role="tablist">
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
                boxShadow: i === state.questionIndex ? `0 0 8px ${currentChapter.accent}80` : 'none',
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            />
          ))}
        </div>

        {/* Next */}
        <motion.button
          onClick={handleNext}
          className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none tracking-wide"
          style={{
            color: currentChapter.accent,
            background: `${currentChapter.accent}15`,
            border: `1px solid ${currentChapter.accent}40`,
          }}
          whileHover={{ scale: 1.03 }}
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
