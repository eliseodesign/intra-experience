import { WorkSection } from '@/components/sections/WorkSection'

export const metadata = {
  title: 'The Work — INTRA',
  description: 'Animación, diseño 3D, producción audiovisual, branding y experiencias digitales.',
}

export default function WorkPage() {
  return (
    <div className="pt-20">
      <WorkSection />
    </div>
  )
}
