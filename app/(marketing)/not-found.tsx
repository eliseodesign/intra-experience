import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="pt-32 pb-28 px-6 sm:px-10 min-h-[60vh] flex items-center justify-center text-center">
      <div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-intra-orange font-semibold">
          404
        </span>
        <h1 className="text-4xl sm:text-6xl font-light text-intra-text mt-3 mb-6">
          Esta página no existe.
        </h1>
        <p className="text-intra-text-dim font-light mb-10 max-w-md mx-auto">
          Puede que el proyecto que buscás todavía no esté publicado, o el link esté roto.
        </p>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-intra-text-dim hover:text-intra-text transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a The Work
        </Link>
      </div>
    </div>
  )
}
