'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from 'lucide-react'

export function WorkVideoPlayer({
  video,
  poster,
  label,
  width,
  height,
}: {
  video: string
  poster: string
  label: string
  width: number
  height: number
}) {
  const [playing, setPlaying] = useState(false)

  return (
    <div
      className="relative w-full bg-black rounded-2xl overflow-hidden border border-intra-border group"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {playing ? (
        <video
          src={video}
          poster={poster}
          controls
          autoPlay
          playsInline
          className="absolute inset-0 w-full h-full object-contain"
        />
      ) : (
        <button
          type="button"
          aria-label={`Reproducir ${label}`}
          onClick={() => setPlaying(true)}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={poster}
            alt={label}
            fill
            loading="eager"
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="object-contain"
          />
          <span className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors flex items-center justify-center">
            <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
              <Play className="w-6 h-6 text-intra-bg fill-intra-bg" />
            </span>
          </span>
        </button>
      )}
    </div>
  )
}
