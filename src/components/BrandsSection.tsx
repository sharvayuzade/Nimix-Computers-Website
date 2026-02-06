'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import { BRANDS } from '@/lib/constants'

export default function BrandsSection() {
  // Duplicate brands for infinite marquee
  const allBrands = [...BRANDS, ...BRANDS]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container-custom mb-12">
        <ScrollReveal className="text-center">
          <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 font-medium mb-4">
            Trusted Partners
          </span>
          <h2 className="heading-md text-white">
            Authorized Dealer of Top{' '}
            <span className="text-gradient">Brands</span>
          </h2>
        </ScrollReveal>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface-dark to-transparent z-10" />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: [0, '-50%'] }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {allBrands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-8 py-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/5 hover:border-white/10 transition-all duration-300 group"
              >
                <span className="text-lg font-semibold text-gray-500 group-hover:text-gray-300 transition-colors whitespace-nowrap">
                  {brand}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
