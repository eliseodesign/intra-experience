'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20"
    >
      <div className="absolute inset-0 z-0">
        <video
          src="/work/spiderverse.mp4"
          poster="/work/spiderverse.jpg"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-intra-bg/70 via-intra-bg/80 to-intra-bg" />
        <div className="absolute inset-0 bg-gradient-to-t from-intra-bg via-transparent to-intra-bg/40" />
      </div>

      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <motion.div
        className="relative z-20 flex items-center gap-3 mb-10"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="h-[1px] w-12 bg-intra-border" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-intra-muted font-medium">
          Multimedia Agency
        </span>
        <div className="h-[1px] w-12 bg-intra-border" />
      </motion.div>

      <motion.h1
        className="relative z-20 text-center text-5xl sm:text-7xl md:text-8xl font-light leading-[1.05] text-intra-text mb-6 max-w-4xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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

      <motion.p
        className="relative z-20 text-center text-lg sm:text-xl text-intra-muted font-light leading-relaxed max-w-xl mb-12"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        Somos un colectivo creativo especializado en animación, diseño 3D y producción
        audiovisual. No hacemos contenido: construimos experiencias.
      </motion.p>

      <motion.div
        className="relative z-20 flex flex-col sm:flex-row items-center gap-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link
          href="/work"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300"
          style={{
            background: 'rgba(227, 75, 3, 0.12)',
            border: '1px solid rgba(227, 75, 3, 0.35)',
            color: '#e34b03',
          }}
        >
          Ver nuestro trabajo
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-medium text-intra-text-dim border border-intra-border hover:text-intra-text hover:border-intra-subtle transition-colors"
        >
          Hablemos
        </Link>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-intra-muted z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown className="w-5 h-5" />
      </motion.div>
    </section>
  )
}
