import { WhatWeDoSection } from '@/components/sections/WhatWeDoSection'

export const metadata = {
  title: 'What We Do — INTRA',
  description: 'Animación, diseño 3D, producción audiovisual, branding y experiencias digitales.',
}

export default function WhatWeDoPage() {
  return (
    <div className="pt-20">
      <WhatWeDoSection />
    </div>
  )
}
