import { SiteNavbar } from '@/components/layout/SiteNavbar'
import { SiteFooter } from '@/components/layout/SiteFooter'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-intra-bg relative">
      <div className="absolute inset-0 pointer-events-none opacity-40" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" opacity="0.05" />
        </svg>
      </div>

      <SiteNavbar />
      <main className="relative">{children}</main>
      <SiteFooter />
    </div>
  )
}
