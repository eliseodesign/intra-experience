import Link from 'next/link'
import { IntraLogo } from '@/components/brand/IntraLogo'
import { NAV_LINKS, CONTACT } from '@/lib/content'

export function SiteFooter() {
  return (
    <footer className="relative border-t border-intra-border px-6 sm:px-10 py-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:items-end justify-between gap-8">
        <div>
          <IntraLogo size="sm" />
          <p className="text-xs text-intra-muted mt-4 max-w-xs font-light">
            Proyecto Transmedia · La profundidad en la experiencia.
          </p>
        </div>

        <ul className="flex flex-wrap gap-6 justify-center">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[11px] uppercase tracking-[0.14em] text-intra-text-dim hover:text-intra-text transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="text-center sm:text-right">
          <p className="text-[11px] text-intra-border tracking-[0.12em] uppercase">
            {CONTACT.email}
          </p>
          <p className="text-[10px] text-intra-border tracking-[0.12em] uppercase mt-2">
            © 2026 INTRA Multimedia Agency
          </p>
        </div>
      </div>
    </footer>
  )
}
