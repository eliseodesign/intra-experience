'use client'

import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import { Loader2 } from 'lucide-react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const variants = {
  primary:
    'text-white font-semibold border border-transparent',
  ghost:
    'text-intra-text-dim hover:text-intra-text bg-transparent border border-transparent hover:border-intra-border',
  outline:
    'text-intra-text border border-intra-border hover:border-intra-subtle bg-transparent',
}

const sizes = {
  sm: 'px-4 py-2 text-xs gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-4 text-base gap-2.5',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      iconPosition = 'right',
      children,
      disabled,
      className = '',
      ...props
    },
    ref
  ) => {
    const isPrimary = variant === 'primary'

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className={`
          relative inline-flex items-center justify-center rounded-lg
          tracking-wide font-medium transition-all duration-200
          disabled:opacity-40 disabled:cursor-not-allowed
          ${variants[variant]}
          ${sizes[size]}
          ${isPrimary ? 'accent-bg accent-border' : ''}
          ${className}
        `}
        style={
          isPrimary
            ? {
                background: 'rgba(var(--chapter-accent-rgb), 0.15)',
                borderColor: 'rgba(var(--chapter-accent-rgb), 0.4)',
                color: 'var(--chapter-accent)',
              }
            : undefined
        }
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
      >
        {loading && (
          <Loader2 className="w-4 h-4 animate-spin absolute left-1/2 -translate-x-1/2" />
        )}
        <span className={`flex items-center gap-inherit ${loading ? 'opacity-0' : ''}`} style={{ gap: 'inherit' }}>
          {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
        </span>
      </motion.button>
    )
  }
)

Button.displayName = 'Button'
