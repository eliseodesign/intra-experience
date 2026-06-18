import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'INTRA — La profundidad en la experiencia',
  description:
    'Una experiencia de introspección guiada. Cuatro capítulos que exploran quién sos a través de tu historia.',
  keywords: ['INTRA', 'experiencia', 'introspección', 'agencia creativa', 'multimedia'],
  authors: [{ name: 'INTRA Multimedia Agency' }],
  openGraph: {
    title: 'INTRA — La profundidad en la experiencia',
    description: 'Una experiencia de introspección guiada.',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'INTRA — La profundidad en la experiencia',
    description: 'Una experiencia de introspección guiada.',
  },
}

export const viewport: Viewport = {
  themeColor: '#07080d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-intra-bg text-intra-text antialiased">
        {children}
      </body>
    </html>
  )
}
