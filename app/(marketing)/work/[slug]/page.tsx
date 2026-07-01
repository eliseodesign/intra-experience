import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { WORK_ITEMS } from '@/lib/content'
import { WorkVideoPlayer } from '@/components/work/WorkVideoPlayer'

export function generateStaticParams() {
  return WORK_ITEMS.map((item) => ({ slug: item.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = WORK_ITEMS.find((w) => w.slug === params.slug)
  if (!item) return {}
  return {
    title: `${item.title} — INTRA`,
    description: item.description,
  }
}

export default function WorkDetailPage({ params }: { params: { slug: string } }) {
  const item = WORK_ITEMS.find((w) => w.slug === params.slug)
  if (!item) notFound()

  return (
    <div className="pt-32 pb-28 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/work"
          className="flex w-fit items-center gap-2 text-sm text-intra-text-dim hover:text-intra-text transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a The Work
        </Link>

        <span className="text-[10px] uppercase tracking-[0.2em] text-intra-orange font-semibold">
          {item.category}
        </span>
        <h1 className="text-4xl sm:text-6xl font-light text-intra-text mt-3 mb-6">{item.title}</h1>
        <p className="text-intra-text-dim font-light leading-relaxed max-w-2xl mb-6 text-base sm:text-lg">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-14">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] uppercase tracking-wide text-intra-muted border border-intra-border rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {item.kind === 'video' && (
          <WorkVideoPlayer
            video={item.video}
            poster={item.poster}
            label={item.title}
            width={item.width}
            height={item.height}
          />
        )}

        {item.kind === 'video-grid' && (
          <div className="grid sm:grid-cols-2 gap-8">
            {item.items.map((sub) => (
              <div key={sub.video}>
                <WorkVideoPlayer
                  video={sub.video}
                  poster={sub.poster}
                  label={sub.label}
                  width={sub.width}
                  height={sub.height}
                />
                <p className="text-sm text-intra-text-dim mt-3">{sub.label}</p>
              </div>
            ))}
          </div>
        )}

        {item.kind === 'gallery' && (
          <div className="grid sm:grid-cols-2 gap-8">
            {item.images.map((img) => {
              const url = 'url' in img ? (img as typeof img & { url: string }).url : undefined
              return (
                <div key={img.src}>
                  <div className="relative rounded-2xl overflow-hidden border border-intra-border bg-black/40">
                    <Image
                      src={img.src}
                      alt={img.label}
                      width={img.width}
                      height={img.height}
                      loading="eager"
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <p className="text-sm text-intra-text-dim">{img.label}</p>
                    {url && (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-intra-orange hover:text-intra-text transition-colors flex items-center gap-1 ml-4 shrink-0"
                      >
                        Ver sitio →
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
