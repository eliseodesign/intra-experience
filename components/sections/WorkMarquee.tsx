import Image from 'next/image'
import Link from 'next/link'
import { WORK_ITEMS, FEATURED_WORK } from '@/lib/content'

function thumbFor(item: (typeof WORK_ITEMS)[number]) {
  if (item.kind === 'video') return item.poster
  if (item.kind === 'video-grid') return item.items[0].poster
  return item.images[0].src
}

export function WorkMarquee() {
  const reel = [
    { slug: FEATURED_WORK.slug, title: FEATURED_WORK.title, thumb: FEATURED_WORK.image, href: FEATURED_WORK.href },
    ...WORK_ITEMS.map((item) => ({
      slug: item.slug,
      title: item.title,
      thumb: thumbFor(item)!,
      href: `/work/${item.slug}`,
    })),
  ]
  const looped = [...reel, ...reel]

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden border-t border-intra-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-10 flex items-end justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[1px] w-8 bg-intra-border" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-intra-muted font-medium">
              Selected Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-intra-text">Lo último que hicimos</h2>
        </div>
        <Link
          href="/work"
          className="hidden sm:inline-flex text-sm text-intra-text-dim hover:text-intra-text transition-colors whitespace-nowrap"
        >
          Ver todo →
        </Link>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-intra-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-intra-bg to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 animate-marquee hover:[animation-play-state:paused]">
          {looped.map((work, i) => (
            <Link
              key={`${work.slug}-${i}`}
              href={work.href}
              className="relative flex-shrink-0 w-64 sm:w-80 aspect-[4/3] rounded-2xl overflow-hidden border border-intra-border group"
            >
              <Image
                src={work.thumb}
                alt={work.title}
                fill
                loading="eager"
                sizes="320px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-intra-bg/90 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-sm font-medium text-intra-text">
                {work.title}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 mt-8 sm:hidden">
        <Link href="/work" className="text-sm text-intra-text-dim hover:text-intra-text transition-colors">
          Ver todo el trabajo →
        </Link>
      </div>
    </section>
  )
}
