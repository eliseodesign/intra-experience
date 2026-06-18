export const INTRA_COLORS = {
  orange: '#e34b03',
  purple: '#533ca7',
  blue: '#3443a7',
  periwinkle: '#6f7bbf',
  sage: '#c7d9d6',
  bg: '#07080d',
  card: '#0d0f1a',
  border: '#1a1d2e',
  muted: '#4a5068',
  subtle: '#2a2d40',
  text: '#e8eaf0',
  textDim: '#8b92b8',
} as const

export const CHAPTER_THEMES = {
  infancia: {
    accent: '#e34b03',
    accentRgb: '227, 75, 3',
    gradient: 'from-[#1a0d06] via-[#07080d] to-[#07080d]',
    glowColor: 'rgba(227, 75, 3, 0.12)',
  },
  adolescencia: {
    accent: '#533ca7',
    accentRgb: '83, 60, 167',
    gradient: 'from-[#0f0c1a] via-[#07080d] to-[#07080d]',
    glowColor: 'rgba(83, 60, 167, 0.15)',
  },
  adultez: {
    accent: '#3443a7',
    accentRgb: '52, 67, 167',
    gradient: 'from-[#0c0f1f] via-[#07080d] to-[#07080d]',
    glowColor: 'rgba(52, 67, 167, 0.15)',
  },
  final: {
    accent: '#6f7bbf',
    accentRgb: '111, 123, 191',
    gradient: 'from-[#0d1018] via-[#07080d] to-[#07080d]',
    glowColor: 'rgba(111, 123, 191, 0.12)',
  },
} as const

export const TRANSITION_DURATION = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  xslow: 0.8,
} as const

export const EASING = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  spring: { type: 'spring', stiffness: 300, damping: 30 },
  elegant: [0.16, 1, 0.3, 1],
} as const
