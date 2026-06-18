'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { GlowEffect } from '@/components/brand/GlowEffect'
import { IntraLogo } from '@/components/brand/IntraLogo'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-intra-bg flex flex-col relative overflow-hidden">
      {/* Background glows */}
      <GlowEffect color="#e34b03" size="xl" position="top-left" opacity={0.07} />
      <GlowEffect color="#533ca7" size="xl" position="bottom-right" opacity={0.08} />
      <GlowEffect color="#3443a7" size="lg" position="center" opacity={0.04} />

      {/* Noise texture */}
      <div className="absolute inset-0 pointer-events-none opacity-40" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" opacity="0.05" />
        </svg>
      </div>

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 sm:px-12 pt-10">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <IntraLogo size="sm" animated />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[10px] uppercase tracking-[0.18em] text-intra-muted font-medium hidden sm:block"
        >
          Proyecto Transmedia
        </motion.div>
      </header>

      {/* Main */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 sm:px-12 text-center py-20">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="h-[1px] w-12 bg-intra-border" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-intra-muted font-medium">
            Experiencia INTRA
          </span>
          <div className="h-[1px] w-12 bg-intra-border" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl font-light leading-[1.05] text-intra-text mb-6 max-w-4xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          La profundidad{' '}
          <span
            className="font-semibold"
            style={{
              background: 'linear-gradient(135deg, #e34b03, #533ca7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            en la experiencia.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg sm:text-xl text-intra-muted font-light leading-relaxed max-w-xl mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Cuatro capítulos. Diecinueve preguntas.
          <br />
          Una sola historia: la tuya.
        </motion.p>

        <motion.p
          className="text-sm text-intra-border font-light mb-14 max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          No creemos en respuestas rápidas. Este espacio fue diseñado para ir más profundo.
          Tomá el tiempo que necesites.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link href="/experience" aria-label="Iniciar la experiencia INTRA">
            <motion.span
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 cursor-pointer"
              style={{
                background: 'rgba(227, 75, 3, 0.12)',
                border: '1px solid rgba(227, 75, 3, 0.35)',
                color: '#e34b03',
              }}
              whileHover={{
                scale: 1.04,
                background: 'rgba(227, 75, 3, 0.18)',
                borderColor: 'rgba(227, 75, 3, 0.55)',
                boxShadow: '0 0 32px rgba(227, 75, 3, 0.15)',
              }}
              whileTap={{ scale: 0.97 }}
            >
              Iniciar la experiencia
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </Link>
        </motion.div>

        {/* Duration hint */}
        <motion.p
          className="mt-6 text-[11px] text-intra-muted tracking-[0.12em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          ~15 minutos · Podés pausar y retomar
        </motion.p>
      </main>

      {/* Footer */}
      <footer className="relative z-10 flex items-center justify-between px-8 sm:px-12 pb-8">
        <motion.p
          className="text-[10px] text-intra-border tracking-[0.14em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          © 2026 INTRA Multimedia Agency
        </motion.p>

        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className="text-[10px] text-intra-border tracking-[0.12em] uppercase">
            INTRASTUDIO@GMAIL.COM
          </span>
        </motion.div>
      </footer>

      {/* Chapter preview dots */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        aria-hidden="true"
      >
        {[
          { label: '01 Infancia', color: '#e34b03' },
          { label: '02 Adolescencia', color: '#533ca7' },
          { label: '03 Adultez', color: '#3443a7' },
          { label: '04 Final', color: '#6f7bbf' },
        ].map((ch, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: ch.color, opacity: 0.6 }}
            />
            <span className="text-[9px] uppercase tracking-[0.14em] text-intra-border hidden sm:block">
              {ch.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
