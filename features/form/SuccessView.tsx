'use client'

import { motion } from 'framer-motion'
import { IntraLogo } from '@/components/brand/IntraLogo'
import { GlowEffect } from '@/components/brand/GlowEffect'

export function SuccessView() {
  return (
    <div className="min-h-screen bg-intra-bg flex items-center justify-center relative overflow-hidden px-6">
      {/* Background glows */}
      <GlowEffect color="#533ca7" size="xl" position="top-left" opacity={0.06} />
      <GlowEffect color="#e34b03" size="lg" position="bottom-right" opacity={0.05} />
      <GlowEffect color="#3443a7" size="md" position="center" opacity={0.04} />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <IntraLogo size="lg" className="opacity-95" />
        </motion.div>

        {/* Big decorative element */}
        <motion.div
          className="relative mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span
            className="text-[120px] sm:text-[180px] font-bold leading-none select-none"
            style={{ color: 'rgba(83, 60, 167, 0.12)', fontWeight: 800 }}
          >
            ✦
          </span>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl sm:text-5xl font-light text-intra-text leading-tight mb-6">
            Muchas{' '}
            <span className="font-semibold" style={{ color: 'var(--chapter-accent, #e34b03)' }}>
              gracias.
            </span>
          </h1>

          <div className="space-y-4 mb-10">
            <p className="text-lg text-intra-text-dim font-light leading-relaxed">
              Tu historia está con nosotros.
            </p>
            <p className="text-base text-intra-muted leading-relaxed max-w-md mx-auto">
              Cada capa que compartiste es el comienzo de algo genuino.
              Nos vemos del otro lado.
            </p>
          </div>

          {/* Dash separator */}
          <motion.div
            className="flex items-center gap-4 justify-center mb-10"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="h-[1px] w-16 bg-intra-border" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-intra-muted">
              La profundidad en la experiencia
            </span>
            <div className="h-[1px] w-16 bg-intra-border" />
          </motion.div>

          {/* Contact */}
          <motion.p
            className="text-xs text-intra-muted tracking-[0.12em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            INTRASTUDIO@GMAIL.COM
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
