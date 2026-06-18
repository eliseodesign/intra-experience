'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface ColorSelectorProps {
  value: string
  onChange: (color: string) => void
}

const PRESET_COLORS = [
  { hex: '#1a1a2e', label: 'Azul medianoche' },
  { hex: '#16213e', label: 'Azul profundo' },
  { hex: '#0f3460', label: 'Azul índigo' },
  { hex: '#533da0', label: 'Violeta' },
  { hex: '#7b2d8b', label: 'Púrpura' },
  { hex: '#c0392b', label: 'Rojo oscuro' },
  { hex: '#e74c3c', label: 'Rojo vivo' },
  { hex: '#e67e22', label: 'Naranja' },
  { hex: '#f39c12', label: 'Ámbar' },
  { hex: '#2ecc71', label: 'Verde esmeralda' },
  { hex: '#1abc9c', label: 'Verde agua' },
  { hex: '#3498db', label: 'Azul cielo' },
  { hex: '#95a5a6', label: 'Gris frío' },
  { hex: '#bdc3c7', label: 'Gris plata' },
  { hex: '#2c3e50', label: 'Gris carbón' },
  { hex: '#000000', label: 'Negro absoluto' },
  { hex: '#ffffff', label: 'Blanco' },
  { hex: '#ecf0f1', label: 'Blanco nieve' },
]

export function ColorSelector({ value, onChange }: ColorSelectorProps) {
  const [customOpen, setCustomOpen] = useState(false)

  const selectedColor = value || ''

  return (
    <div className="w-full space-y-6">
      {/* Selected color display */}
      <motion.div
        className="flex items-center gap-4 p-5 rounded-xl border"
        style={{
          borderColor: selectedColor ? selectedColor + '40' : '#1a1d2e',
          background: selectedColor ? selectedColor + '12' : '#0d0f1a',
        }}
        animate={{
          borderColor: selectedColor ? selectedColor + '60' : '#1a1d2e',
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-12 h-12 rounded-lg border-2 border-white/10 flex-shrink-0"
          style={{ background: selectedColor || '#1a1d2e' }}
          animate={{
            boxShadow: selectedColor ? `0 0 20px ${selectedColor}40` : 'none',
          }}
          transition={{ duration: 0.3 }}
        />
        <div>
          {selectedColor ? (
            <>
              <p className="text-base text-intra-text font-medium">
                {PRESET_COLORS.find((c) => c.hex.toLowerCase() === selectedColor.toLowerCase())?.label ||
                  'Color personalizado'}
              </p>
              <p className="text-xs text-intra-muted font-mono mt-0.5">{selectedColor.toUpperCase()}</p>
            </>
          ) : (
            <p className="text-base text-intra-muted">Ningún color seleccionado aún</p>
          )}
        </div>
      </motion.div>

      {/* Preset grid */}
      <div>
        <p className="text-[11px] uppercase tracking-[0.15em] text-intra-muted font-medium mb-3">
          — Elegí un color
        </p>
        <div className="grid grid-cols-6 sm:grid-cols-9 gap-2.5">
          {PRESET_COLORS.map((color) => {
            const isSelected = selectedColor.toLowerCase() === color.hex.toLowerCase()
            return (
              <motion.button
                key={color.hex}
                onClick={() => onChange(color.hex)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="relative aspect-square rounded-lg border-2 transition-all duration-200 focus-visible:outline-none"
                style={{
                  background: color.hex,
                  borderColor: isSelected ? '#e8eaf0' : 'transparent',
                  boxShadow: isSelected ? `0 0 12px ${color.hex}80` : 'none',
                }}
                title={color.label}
                aria-label={`Color: ${color.label}`}
                aria-pressed={isSelected}
              >
                {isSelected && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white/90 shadow-lg" />
                  </motion.div>
                )}
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Custom color input */}
      <div>
        <button
          className="text-[11px] uppercase tracking-[0.12em] text-intra-muted hover:text-intra-text-dim transition-colors duration-200 flex items-center gap-2"
          onClick={() => setCustomOpen(!customOpen)}
          aria-expanded={customOpen}
        >
          <span>{customOpen ? '−' : '+'}</span>
          <span>Elegir color exacto</span>
        </button>

        {customOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-3 flex items-center gap-3"
          >
            <input
              type="color"
              value={selectedColor || '#533ca7'}
              onChange={(e) => onChange(e.target.value)}
              className="w-12 h-10 rounded-lg cursor-pointer border-0 bg-transparent p-0"
              aria-label="Selector de color personalizado"
            />
            <input
              type="text"
              value={selectedColor}
              onChange={(e) => {
                const val = e.target.value
                if (/^#[0-9A-Fa-f]{0,6}$/.test(val)) onChange(val)
              }}
              placeholder="#000000"
              className="bg-intra-card border border-intra-border rounded-lg px-3 py-2 text-sm font-mono text-intra-text focus:outline-none focus:border-[var(--chapter-accent)] w-32"
              aria-label="Código hexadecimal del color"
            />
          </motion.div>
        )}
      </div>
    </div>
  )
}
