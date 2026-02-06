'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Laptop, Monitor, Keyboard, Cpu, Camera, Printer, Wifi, HardDrive } from 'lucide-react'
import ScrollReveal, { StaggerReveal } from '@/components/ScrollReveal'
import GlowCard from '@/components/GlowCard'
import { PRODUCT_CATEGORIES } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  Laptop,
  Monitor,
  Keyboard,
  Cpu,
  Camera,
  Printer,
  Wifi,
  HardDrive,
}

export default function ProductsSection() {
  const featuredCategories = PRODUCT_CATEGORIES.slice(0, 4)

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container-custom relative">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent-cyan/10 border border-accent-cyan/20 rounded-full text-sm text-accent-cyan font-medium mb-4">
            Our Products
          </span>
          <h2 className="heading-lg text-white mb-4">
            Premium Technology{' '}
            <span className="text-gradient">Products</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            From high-performance laptops to complete security solutions, explore
            our wide range of quality products from trusted brands.
          </p>
        </ScrollReveal>

        {/* Featured Categories Grid */}
        <StaggerReveal
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
          staggerDelay={0.1}
        >
          {featuredCategories.map((category) => {
            const Icon = iconMap[category.icon] || Laptop
            return (
              <Link key={category.id} href={`/products#${category.id}`}>
                <GlowCard className="group cursor-pointer h-full overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />

                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary-500/20 border border-primary-500/30 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">
                          {category.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-300 mb-4">
                        {category.description}
                      </p>

                      {/* Brand tags */}
                      <div className="flex flex-wrap gap-2">
                        {category.brands.slice(0, 4).map((brand) => (
                          <span
                            key={brand}
                            className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-400"
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </Link>
            )
          })}
        </StaggerReveal>

        {/* Secondary Categories */}
        <StaggerReveal
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          staggerDelay={0.06}
        >
          {PRODUCT_CATEGORIES.slice(4).map((category) => {
            const Icon = iconMap[category.icon] || Laptop
            return (
              <Link key={category.id} href={`/products#${category.id}`}>
                <GlowCard className="group cursor-pointer">
                  <div className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/10 group-hover:border-primary-500/30 transition-all duration-300">
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors" />
                    </div>
                    <h3 className="text-sm font-medium text-white group-hover:text-primary-400 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </GlowCard>
              </Link>
            )
          })}
        </StaggerReveal>

        {/* CTA */}
        <ScrollReveal delay={0.3} className="text-center mt-12">
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary-600/25"
          >
            Browse All Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
