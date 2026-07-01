import { ContactSection } from '@/components/sections/ContactSection'

export const metadata = {
  title: 'Contact — INTRA',
  description: 'Hablemos de tu próximo proyecto.',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  )
}
