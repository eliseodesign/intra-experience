'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { TEAM, MANIFESTO_LINES } from '@/lib/content'
import { SectionHeading } from './WorkSection'

export function AboutSection() {
  return (
    <section id="about" className="relative py-28 sm:py-36 px-6 sm:px-10 bg-intra-card/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Quiénes somos" title="About Us" />

        <div className="grid lg:grid-cols-2 gap-16 mt-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-intra-text-dim font-light leading-relaxed text-base sm:text-lg mb-6">
              Somos 6 sobrepensadores seriales, unidos por el movimiento y la necesidad de
              crear, que decidimos desarrollar un colectivo creativo especializado en la
              animación, el diseño 3D y la producción audiovisual publicitaria.
            </p>
            <p className="text-intra-text-dim font-light leading-relaxed text-base sm:text-lg">
              Obsesionados con las historias genuinas, creemos en la profundidad y no le
              tenemos miedo al análisis. Porque indagamos, avanzamos sobre las
              problemáticas y utilizamos las herramientas digitales para materializar lo
              que los demás no ven.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl border border-intra-border p-8 sm:p-10 bg-intra-bg"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-intra-orange font-semibold">
              Manifiesto
            </span>
            <div className="mt-5 space-y-1">
              {MANIFESTO_LINES.map((line, i) => (
                <p
                  key={i}
                  className={`font-light leading-relaxed ${
                    i >= MANIFESTO_LINES.length - 2
                      ? 'text-intra-text text-lg sm:text-xl mt-4 font-medium'
                      : 'text-intra-text-dim text-sm sm:text-base'
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h3 className="text-2xl sm:text-3xl font-light text-intra-text">Conocenos</h3>
          <p className="text-intra-text-dim font-light mt-2 max-w-xl">
            Nuestro team está integrado por distintos profesionales jóvenes, apasionados y
            motivados por crear y transmitir mediante sus proyectos.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-6">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl overflow-hidden border border-intra-border bg-intra-bg group"
            >
              <div className="relative aspect-square">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  loading="eager"
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div
                  className="absolute inset-0 mix-blend-multiply opacity-30 group-hover:opacity-0 transition-opacity duration-500"
                  style={{ background: member.accent }}
                />
              </div>
              <div className="p-4">
                <h4 className="text-sm sm:text-base font-medium text-intra-text leading-tight">
                  {member.name}
                </h4>
                <p
                  className="text-[11px] sm:text-xs uppercase tracking-wide mt-1"
                  style={{ color: member.accent }}
                >
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
