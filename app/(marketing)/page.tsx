import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Hero } from '@/components/sections/Hero'
import { WorkMarquee } from '@/components/sections/WorkMarquee'

export default function HomePage() {
  return (
    <>
      <Hero />
      <WorkMarquee />

      <section className="relative py-24 sm:py-32 px-6 sm:px-10 border-t border-intra-border text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-light text-intra-text mb-6">
            ¿Cuántas capas hay detrás de tu próxima idea?
          </h2>
          <p className="text-intra-text-dim font-light mb-10 max-w-xl mx-auto">
            Contanos qué estás construyendo y vemos juntos cómo le damos profundidad.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300"
            style={{
              background: 'rgba(227, 75, 3, 0.12)',
              border: '1px solid rgba(227, 75, 3, 0.35)',
              color: '#e34b03',
            }}
          >
            Hablemos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
