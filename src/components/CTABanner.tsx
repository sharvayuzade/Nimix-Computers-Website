'use client'

import Link from 'next/link'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import { BUSINESS } from '@/lib/constants'

export default function CTABanner() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-surface-dark to-surface-dark" />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"
      />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container-custom relative">
        <ScrollReveal className="text-center max-w-3xl mx-auto">
          <h2 className="heading-lg text-white mb-6">
            Ready to Upgrade Your{' '}
            <span className="text-gradient">Technology?</span>
          </h2>
          <p className="body-lg mb-10">
            Whether you need a new laptop, expert repair, or a complete security
            setup — we&apos;re here to help. Visit our store or give us a call today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary-600/25 w-full sm:w-auto justify-center"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={`tel:${BUSINESS.phone}`}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phoneDisplay}
            </a>

            <a
              href={BUSINESS.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-emerald-600/10 hover:bg-emerald-600/20 border border-emerald-500/20 hover:border-emerald-500/30 text-emerald-400 font-semibold rounded-xl transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Business hours */}
          <p className="text-sm text-gray-500 mt-8">
            📍 {BUSINESS.address.short} • Mon-Sat: {BUSINESS.hours.weekdays}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
