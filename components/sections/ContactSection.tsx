'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram, Mail, ArrowRight } from 'lucide-react'
import { GlowEffect } from '@/components/brand/GlowEffect'
import { CONTACT } from '@/lib/content'
import { SectionHeading } from './WorkSection'

export function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const mailtoHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    `Nuevo proyecto — de ${name || 'un visitante'}`
  )}&body=${encodeURIComponent(`${message}\n\n— ${name}\n${email}`)}`

  return (
    <section id="contact" className="relative py-28 sm:py-36 px-6 sm:px-10 overflow-hidden">
      <GlowEffect color="#533ca7" size="xl" position="bottom-left" opacity={0.08} />
      <GlowEffect color="#e34b03" size="lg" position="top-right" opacity={0.06} />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading eyebrow="Contacto" title="Contact" />

        <div className="grid lg:grid-cols-2 gap-16 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-2xl sm:text-3xl font-light text-intra-text leading-snug mb-8 max-w-md">
              ¿Cuántas capas hay detrás de tu próxima idea? Hablemos.
            </p>

            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 text-intra-text-dim hover:text-intra-text transition-colors mb-4"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm sm:text-base">{CONTACT.email}</span>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-intra-text-dim hover:text-intra-text transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span className="text-sm sm:text-base">{CONTACT.instagram}</span>
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              required
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-intra-card border border-intra-border rounded-lg px-5 py-4 text-sm text-intra-text placeholder:text-intra-muted focus:outline-none focus:border-intra-subtle transition-colors"
            />
            <input
              type="email"
              required
              placeholder="Tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-intra-card border border-intra-border rounded-lg px-5 py-4 text-sm text-intra-text placeholder:text-intra-muted focus:outline-none focus:border-intra-subtle transition-colors"
            />
            <textarea
              required
              rows={4}
              placeholder="Contanos tu proyecto"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-intra-card border border-intra-border rounded-lg px-5 py-4 text-sm text-intra-text placeholder:text-intra-muted focus:outline-none focus:border-intra-subtle transition-colors resize-none"
            />
            <a
              href={mailtoHref}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 mt-2"
              style={{
                background: 'rgba(227, 75, 3, 0.12)',
                border: '1px solid rgba(227, 75, 3, 0.35)',
                color: '#e34b03',
              }}
            >
              Enviar mensaje
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
