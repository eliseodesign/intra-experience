import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'INTRA — Multimedia Agency',
  description:
    'Colectivo creativo especializado en animación, diseño 3D y producción audiovisual. No hacemos contenido: construimos experiencias.',
  keywords: ['INTRA', 'agencia creativa', 'multimedia', 'animación', 'diseño 3D', 'producción audiovisual'],
  authors: [{ name: 'INTRA Multimedia Agency' }],
  openGraph: {
    title: 'INTRA — Multimedia Agency',
    description: 'La profundidad en la experiencia.',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'INTRA — Multimedia Agency',
    description: 'La profundidad en la experiencia.',
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
