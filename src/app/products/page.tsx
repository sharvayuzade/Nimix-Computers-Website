'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Laptop,
  Monitor,
  Keyboard,
  Cpu,
  Camera,
  Printer,
  Wifi,
  HardDrive,
  ArrowRight,
  Phone,
  MessageCircle,
  CheckCircle,
} from 'lucide-react'
import ScrollReveal, { StaggerReveal } from '@/components/ScrollReveal'
import GlowCard from '@/components/GlowCard'
import { PRODUCT_CATEGORIES, BUSINESS } from '@/lib/constants'
import type { Metadata } from 'next'

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

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-radial-top" />
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="container-custom relative">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm text-primary-400 font-medium mb-6">
              Our Products
            </span>
            <h1 className="heading-xl text-white mb-6">
              Premium{' '}
              <span className="text-gradient">Technology Products</span>
            </h1>
            <p className="body-lg">
              From high-performance laptops to complete networking solutions,
              discover our extensive range of quality products from the
              world&apos;s most trusted brands.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="space-y-24">
            {PRODUCT_CATEGORIES.map((category, index) => {
              const Icon = iconMap[category.icon] || Laptop
              const isEven = index % 2 === 0

              return (
                <div
                  key={category.id}
                  id={category.id}
                  className="scroll-mt-24"
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      !isEven ? 'lg:grid-flow-dense' : ''
                    }`}
                  >
                    {/* Image */}
                    <ScrollReveal
                      direction={isEven ? 'right' : 'left'}
                      className={!isEven ? 'lg:col-start-2' : ''}
                    >
                      <div className="relative h-[350px] rounded-2xl overflow-hidden group">
                        <Image
                          src={category.image}
                          alt={category.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 to-transparent" />

                        {/* Floating badge */}
                        <div className="absolute top-4 left-4 px-3 py-1.5 bg-primary-600/90 backdrop-blur-sm rounded-lg text-xs font-medium text-white">
                          {category.brands.length}+ Brands Available
                        </div>
                      </div>
                    </ScrollReveal>

                    {/* Content */}
                    <ScrollReveal direction={isEven ? 'left' : 'right'}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary-400" />
                        </div>
                        <h2 className="heading-md text-white">
                          {category.title}
                        </h2>
                      </div>

                      <p className="body-md mb-6">{category.description}</p>

                      {/* Brands */}
                      <div className="mb-6">
                        <p className="text-sm text-gray-500 mb-3">
                          Available Brands:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {category.brands.map((brand) => (
                            <span
                              key={brand}
                              className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-white/10 transition-colors"
                            >
                              {brand}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-2 mb-8">
                        {[
                          'Genuine Products',
                          'Warranty Support',
                          'Best Prices',
                          'Bulk Orders',
                        ].map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-sm text-gray-400"
                          >
                            <CheckCircle className="w-4 h-4 text-primary-500" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex flex-wrap gap-3">
                        <Link
                          href="/contact"
                          className="group inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white text-sm font-medium rounded-xl transition-all duration-300"
                        >
                          Enquire Now
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a
                          href={`tel:${BUSINESS.phone}`}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-xl hover:bg-white/10 transition-all duration-300"
                        >
                          <Phone className="w-4 h-4" />
                          Call for Prices
                        </a>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bulk Order CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-surface to-primary-950" />
              <div className="absolute inset-0 bg-grid opacity-20" />

              <div className="relative">
                <h2 className="heading-md text-white mb-4">
                  Need Bulk Orders?
                </h2>
                <p className="body-md max-w-2xl mx-auto mb-8">
                  Special pricing for businesses, institutions, and government
                  orders. Buy laptops, desktops, and peripherals in bulk with
                  the best quality and service.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all duration-300"
                  >
                    Request Quote
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href={BUSINESS.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-600/20 transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
