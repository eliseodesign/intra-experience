'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { WORK_ITEMS, FEATURED_WORK } from '@/lib/content'

function thumbFor(item: (typeof WORK_ITEMS)[number]) {
  if (item.kind === 'video') return item.poster
  if (item.kind === 'video-grid') return item.items[0].poster
  return item.images[0].src
}

export function WorkSection() {
  return (
    <section id="work" className="relative py-28 sm:py-36 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Portfolio" title="The Work" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-16 mb-12 rounded-3xl overflow-hidden border border-intra-border group"
        >
          <Link href={FEATURED_WORK.href} className="block">
            <div className="relative aspect-[16/10] sm:aspect-[16/7]">
              <Image
                src={FEATURED_WORK.image}
                alt={FEATURED_WORK.title}
                fill
                loading="eager"
                sizes="100vw"
                className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-[1.02] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-intra-bg via-intra-bg/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12">
                <span className="text-[10px] uppercase tracking-[0.2em] text-intra-orange font-semibold mb-3">
                  Proyecto Destacado · {FEATURED_WORK.category}
                </span>
                <h3 className="text-3xl sm:text-5xl font-light text-intra-text mb-4 max-w-2xl">
                  {FEATURED_WORK.title}
                </h3>
                <p className="text-intra-text-dim max-w-xl mb-6 font-light leading-relaxed text-sm sm:text-base">
                  {FEATURED_WORK.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-intra-text">
                  Vivir la experiencia
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {WORK_ITEMS.map((item, i) => {
            const thumb = thumbFor(item)

            return (
              <Link key={item.slug} href={`/work/${item.slug}`} className="block h-full">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl overflow-hidden border border-intra-border bg-intra-card h-full group"
                >
                  <div className="relative aspect-[16/10] bg-black/40">
                    <Image
                      src={thumb}
                      alt={item.title}
                      fill
                      loading="eager"
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-contain group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-black/50 px-4 py-2 rounded-full">
                        Ver proyecto
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-intra-text-dim font-medium">
                      {item.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-light text-intra-text mt-2 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-intra-text-dim font-light leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase tracking-wide text-intra-muted border border-intra-border rounded-full px-3 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  align = 'left',
}: {
  eyebrow: string
  title: string
  align?: 'left' | 'center'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={align === 'center' ? 'text-center' : ''}
    >
      <div className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="h-[1px] w-8 bg-intra-border" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-intra-muted font-medium">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-4xl sm:text-6xl font-light text-intra-text">{title}</h2>
    </motion.div>
  )
}
