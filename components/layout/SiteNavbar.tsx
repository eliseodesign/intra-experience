'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { IntraLogo } from '@/components/brand/IntraLogo'
import { NAV_LINKS } from '@/lib/content'

export function SiteNavbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || open ? 'bg-intra-bg/80 backdrop-blur-md border-b border-intra-border' : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 h-20">
          <Link href="/" aria-label="INTRA — Inicio" className="relative z-10">
            <IntraLogo size="sm" />
          </Link>

          <ul className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => {
              const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-xs uppercase tracking-[0.16em] transition-colors ${
                      active ? 'text-intra-text' : 'text-intra-text-dim hover:text-intra-text'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          <button
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative z-10 p-2 text-intra-text"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 top-20 bg-intra-bg z-40"
          >
            <ul className="flex flex-col items-center justify-center gap-8 h-full">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-light text-intra-text tracking-tight"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
