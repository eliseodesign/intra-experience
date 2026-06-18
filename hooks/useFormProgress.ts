'use client'

import { useState, useCallback, useEffect } from 'react'
import { chapters, totalQuestions, getGlobalQuestionIndex } from '@/lib/questions'
import { validateAnswer } from '@/lib/validation'

export type FormAnswers = Record<string, string>

interface FormProgress {
  chapterIndex: number
  questionIndex: number
  answers: FormAnswers
  direction: 1 | -1
  error: string | null
  isSubmitted: boolean
}

const STORAGE_KEY = 'intra-experience-progress'

function loadFromStorage(): Partial<FormProgress> {
  if (typeof window === 'undefined') return {}
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

function saveToStorage(state: FormProgress) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // ignore
  }
}

function clearStorage() {
  if (typeof window === 'undefined') return
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }
}

export function useFormProgress() {
  const [state, setState] = useState<FormProgress>({
    chapterIndex: 0,
    questionIndex: 0,
    answers: {},
    direction: 1,
    error: null,
    isSubmitted: false,
  })
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    const saved = loadFromStorage()
    if (saved.answers && Object.keys(saved.answers).length > 0) {
      setState((prev) => ({
        ...prev,
        chapterIndex: saved.chapterIndex ?? 0,
        questionIndex: saved.questionIndex ?? 0,
        answers: saved.answers ?? {},
      }))
    }
    setIsHydrated(true)
  }, [])

  const currentChapter = chapters[state.chapterIndex]
  const currentQuestion = currentChapter?.questions[state.questionIndex]
  const currentAnswer = currentQuestion ? (state.answers[currentQuestion.id] ?? '') : ''
  const globalIndex = getGlobalQuestionIndex(state.chapterIndex, state.questionIndex)
  const progressPercent = Math.round((globalIndex / totalQuestions) * 100)

  const setAnswer = useCallback((questionId: string, value: string) => {
    setState((prev) => {
      const next = { ...prev, answers: { ...prev.answers, [questionId]: value }, error: null }
      saveToStorage(next)
      return next
    })
  }, [])

  const goNext = useCallback(() => {
    const chapter = chapters[state.chapterIndex]
    const question = chapter.questions[state.questionIndex]
    const answer = state.answers[question.id] ?? ''
    const validationError = validateAnswer(answer, question.required ?? false)

    if (validationError) {
      setState((prev) => ({ ...prev, error: validationError }))
      return false
    }

    setState((prev) => {
      const isLastQuestion = prev.questionIndex >= chapter.questions.length - 1
      const isLastChapter = prev.chapterIndex >= chapters.length - 1

      if (isLastQuestion && isLastChapter) {
        clearStorage()
        return { ...prev, isSubmitted: true, error: null, direction: 1 }
      }

      if (isLastQuestion) {
        return {
          ...prev,
          chapterIndex: prev.chapterIndex + 1,
          questionIndex: 0,
          direction: 1,
          error: null,
        }
      }

      return {
        ...prev,
        questionIndex: prev.questionIndex + 1,
        direction: 1,
        error: null,
      }
    })
    return true
  }, [state])

  const goPrev = useCallback(() => {
    setState((prev) => {
      if (prev.questionIndex > 0) {
        return { ...prev, questionIndex: prev.questionIndex - 1, direction: -1, error: null }
      }
      if (prev.chapterIndex > 0) {
        const prevChapter = chapters[prev.chapterIndex - 1]
        return {
          ...prev,
          chapterIndex: prev.chapterIndex - 1,
          questionIndex: prevChapter.questions.length - 1,
          direction: -1,
          error: null,
        }
      }
      return prev
    })
  }, [])

  const isFirst = state.chapterIndex === 0 && state.questionIndex === 0
  const isLastChapter = state.chapterIndex === chapters.length - 1
  const isLastQuestion = state.questionIndex === currentChapter?.questions.length - 1
  const isFinalQuestion = isLastChapter && isLastQuestion

  return {
    state,
    currentChapter,
    currentQuestion,
    currentAnswer,
    globalIndex,
    progressPercent,
    totalQuestions,
    isFirst,
    isFinalQuestion,
    isHydrated,
    setAnswer,
    goNext,
    goPrev,
  }
}
