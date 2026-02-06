'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
  hoverScale?: number
}

export default function GlowCard({
  children,
  className = '',
  glowColor = 'rgba(59, 130, 246, 0.15)',
  hoverScale = 1.02,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: hoverScale, y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={clsx(
        'relative rounded-2xl bg-surface border border-white/5 overflow-hidden',
        className
      )}
    >
      {/* Glow effect following mouse */}
      {isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300 z-0"
          style={{
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${glowColor}, transparent 70%)`,
            left: mousePosition.x - 150,
            top: mousePosition.y - 150,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}

      {/* Gradient border on hover */}
      <div
        className={clsx(
          'absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none',
          isHovered ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          padding: '1px',
          background:
            'linear-gradient(135deg, rgba(59,130,246,0.4), rgba(6,182,212,0.2), transparent)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
