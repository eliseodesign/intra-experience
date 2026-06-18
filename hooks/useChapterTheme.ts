'use client'

import { useEffect } from 'react'
import type { Chapter } from '@/lib/questions'

export function useChapterTheme(chapter: Chapter | undefined) {
  useEffect(() => {
    if (!chapter) return
    const root = document.documentElement
    root.style.setProperty('--chapter-accent', chapter.accent)
    root.style.setProperty('--chapter-accent-rgb', chapter.accentRgb)
  }, [chapter])
}
