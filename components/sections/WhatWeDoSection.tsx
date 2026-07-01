'use client'

import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/content'
import { SectionHeading } from './WorkSection'

export function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="relative py-28 sm:py-36 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Servicios" title="What We Do" />

        <div className="mt-16 divide-y divide-intra-border border-y border-intra-border">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-[auto_1fr] sm:grid-cols-[80px_1fr_1fr] gap-4 sm:gap-10 items-start py-8 sm:py-10"
            >
              <span
                className="text-sm font-mono tracking-wide"
                style={{ color: service.accent }}
              >
                {service.number}
              </span>
              <h3 className="text-2xl sm:text-4xl font-light text-intra-text group-hover:translate-x-1 transition-transform duration-300">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-intra-text-dim font-light leading-relaxed col-span-2 sm:col-span-1">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
