'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Wrench,
  Monitor,
  Camera,
  Wifi,
  Database,
  Shield,
  ArrowRight,
  Phone,
  CheckCircle,
  Clock,
  Award,
} from 'lucide-react'
import ScrollReveal, { StaggerReveal } from '@/components/ScrollReveal'
import GlowCard from '@/components/GlowCard'
import CTABanner from '@/components/CTABanner'
import { SERVICES, BUSINESS } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  Monitor,
  Camera,
  Wifi,
  Database,
  Shield,
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-radial-top" />
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="container-custom relative">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-accent-cyan/10 border border-accent-cyan/20 rounded-full text-sm text-accent-cyan font-medium mb-6">
              Our Services
            </span>
            <h1 className="heading-xl text-white mb-6">
              Expert{' '}
              <span className="text-gradient">Technology Services</span>
            </h1>
            <p className="body-lg">
              From repairs to installations, our certified technicians deliver
              professional solutions that keep your technology running at peak
              performance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="container-custom">
          <StaggerReveal
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            staggerDelay={0.1}
          >
            {[
              {
                icon: Clock,
                title: 'Quick Turnaround',
                desc: 'Most repairs completed within 24-48 hours',
              },
              {
                icon: Award,
                title: 'Certified Technicians',
                desc: 'Trained professionals with years of experience',
              },
              {
                icon: Shield,
                title: 'Service Warranty',
                desc: 'All repairs backed by our service guarantee',
              },
            ].map((item, index) => (
              <GlowCard key={index}>
                <div className="p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </GlowCard>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding pt-8">
        <div className="container-custom">
          <div className="space-y-16">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon] || Wrench
              const isEven = index % 2 === 0

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-24"
                >
                  <ScrollReveal>
                    <GlowCard>
                      <div className="p-8 md:p-12">
                        <div
                          className={`grid lg:grid-cols-2 gap-8 items-start ${
                            !isEven ? 'lg:grid-flow-dense' : ''
                          }`}
                        >
                          {/* Main Content */}
                          <div className={!isEven ? 'lg:col-start-2' : ''}>
                            <div className="flex items-center gap-4 mb-6">
                              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-cyan/10 border border-primary-500/20 flex items-center justify-center">
                                <Icon className="w-7 h-7 text-primary-400" />
                              </div>
                              <div>
                                <h2 className="text-2xl font-bold text-white">
                                  {service.title}
                                </h2>
                                <p className="text-sm text-gray-500">
                                  Professional {service.title.toLowerCase()}
                                </p>
                              </div>
                            </div>

                            <p className="body-md mb-8">
                              {service.description}
                            </p>

                            {/* CTA */}
                            <div className="flex flex-wrap gap-3">
                              <Link
                                href="/contact"
                                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white text-sm font-medium rounded-xl transition-all duration-300"
                              >
                                Book Service
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </Link>
                              <a
                                href={`tel:${BUSINESS.phone}`}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-xl hover:bg-white/10 transition-all duration-300"
                              >
                                <Phone className="w-4 h-4" />
                                {BUSINESS.phoneDisplay}
                              </a>
                            </div>
                          </div>

                          {/* Features List */}
                          <div>
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                              What&apos;s Included
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {service.features.map((feature, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: i * 0.05 }}
                                  className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5"
                                >
                                  <CheckCircle className="w-4 h-4 text-primary-500 shrink-0" />
                                  <span className="text-sm text-gray-300">
                                    {feature}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </GlowCard>
                  </ScrollReveal>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* AMC Highlight */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden p-12 md:p-16">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 via-surface to-primary-950/50" />
              <div className="absolute inset-0 bg-grid opacity-20" />

              <div className="relative grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block px-4 py-1.5 bg-accent-purple/10 border border-accent-purple/20 rounded-full text-sm text-accent-purple font-medium mb-4">
                    Recommended
                  </span>
                  <h2 className="heading-md text-white mb-4">
                    Annual Maintenance Contract
                  </h2>
                  <p className="body-md mb-6">
                    Keep your systems running smoothly year-round with our
                    comprehensive AMC plans. Regular maintenance, priority
                    support, and discounted repairs.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 px-6 py-3 bg-accent-purple hover:bg-accent-purple/80 text-white text-sm font-medium rounded-xl transition-all duration-300"
                    >
                      Get AMC Quote
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '4+', label: 'Visits/Year' },
                    { value: '30%', label: 'Repair Discount' },
                    { value: '24hr', label: 'Response Time' },
                    { value: '100%', label: 'Peace of Mind' },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-xl bg-white/5 border border-white/10 text-center"
                    >
                      <div className="text-2xl font-bold text-white mb-1">
                        {stat.value}
                      </div>
                      <p className="text-xs text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
