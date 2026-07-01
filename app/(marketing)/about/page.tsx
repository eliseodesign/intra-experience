import { AboutSection } from '@/components/sections/AboutSection'

export const metadata = {
  title: 'About Us — INTRA',
  description: 'Quiénes somos: el equipo y el manifiesto detrás de INTRA Multimedia Agency.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutSection />
    </div>
  )
}
