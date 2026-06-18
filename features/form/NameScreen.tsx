'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { IntraLogo } from '@/components/brand/IntraLogo'
import { GlowEffect } from '@/components/brand/GlowEffect'

interface NameScreenProps {
  onContinue: (nombre: string) => void
}

export function NameScreen({ onContinue }: NameScreenProps) {
  const [nombre, setNombre] = useState('')
  const [focused, setFocused] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = () => {
    if (!nombre.trim() || nombre.trim().length < 2) {
      setError('Ingresá tu nombre para continuar.')
      return
    }
    onContinue(nombre.trim())
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSubmit()
  }

  return (
    <div className="min-h-screen bg-intra-bg flex flex-col relative overflow-hidden">
      <GlowEffect color="#e34b03" size="lg" position="top-right" opacity={0.07} />
      <GlowEffect color="#533ca7" size="md" position="bottom-left" opacity={0.05} />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Header */}
      <header className="relative z-10 px-8 sm:px-12 pt-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <IntraLogo size="xs" />
        </motion.div>
      </header>

      {/* Main */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 sm:px-12">
        <div className="w-full max-w-xl">

          {/* Step indicator */}
          <motion.div
            className="flex items-center gap-3 mb-10"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="h-[1px] w-8 bg-intra-border" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-intra-muted font-medium">
              Antes de empezar
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-4xl sm:text-5xl font-light text-intra-text leading-tight mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            ¿Cómo te llamás?
          </motion.h1>

          <motion.p
            className="text-sm text-intra-muted font-light mb-10 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            Tu nombre aparecerá junto a tus respuestas.
          </motion.p>

          {/* Input */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate={{
                boxShadow: focused
                  ? '0 0 0 1px #e34b03, 0 0 24px rgba(227,75,3,0.12)'
                  : '0 0 0 1px #1a1d2e',
              }}
              transition={{ duration: 0.2 }}
              className="relative rounded-xl overflow-hidden bg-intra-card mb-4"
            >
              <input
                type="text"
                value={nombre}
                onChange={(e) => { setNombre(e.target.value); setError('') }}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onKeyDown={handleKey}
                placeholder="Tu nombre completo..."
                autoFocus
                maxLength={80}
                aria-label="Tu nombre"
                className="
                  w-full bg-transparent text-intra-text placeholder:text-intra-muted
                  px-5 py-4 text-xl sm:text-2xl font-light
                  focus:outline-none caret-[#e34b03]
                "
              />
              {nombre && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'left', background: '#e34b03' }}
                />
              )}
            </motion.div>

            {error && (
              <motion.p
                className="text-sm text-red-400 mb-4"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
              >
                {error}
              </motion.p>
            )}

            {/* CTA */}
            <motion.button
              onClick={handleSubmit}
              className="flex items-center gap-3 px-7 py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none"
              style={{
                color: '#e34b03',
                background: 'rgba(227,75,3,0.12)',
                border: '1px solid rgba(227,75,3,0.35)',
              }}
              whileHover={{ scale: 1.03, background: 'rgba(227,75,3,0.18)', borderColor: 'rgba(227,75,3,0.55)' }}
              whileTap={{ scale: 0.97 }}
              aria-label="Comenzar la experiencia"
            >
              Comenzar la experiencia
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Manifesto hint */}
          <motion.p
            className="mt-12 text-[11px] text-intra-border leading-relaxed max-w-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            "No creemos en ideas rápidas.<br />
            Creemos en procesos profundos."
          </motion.p>
        </div>
      </main>
    </div>
  )
}
