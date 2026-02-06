'use client'

import Link from 'next/link'
import { ArrowRight, Wrench, Monitor, Camera, Wifi, Database, Shield } from 'lucide-react'
import ScrollReveal, { StaggerReveal } from '@/components/ScrollReveal'
import GlowCard from '@/components/GlowCard'
import { SERVICES } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  Monitor,
  Camera,
  Wifi,
  Database,
  Shield,
}

export default function ServicesSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-radial-top" />

      <div className="container-custom relative">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm text-primary-400 font-medium mb-4">
            Our Services
          </span>
          <h2 className="heading-lg text-white mb-4">
            Expert Solutions for Every{' '}
            <span className="text-gradient">Tech Need</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            From repairs to installations, our certified technicians deliver
            professional services that keep your technology running at peak
            performance.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <StaggerReveal
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Wrench
            return (
              <Link key={service.id} href={`/services#${service.id}`}>
                <GlowCard className="h-full group cursor-pointer">
                  <div className="p-8">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-6 group-hover:bg-primary-500/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary-400" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>

                    {/* Link */}
                    <div className="flex items-center gap-2 text-sm text-primary-400 font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </GlowCard>
              </Link>
            )
          })}
        </StaggerReveal>

        {/* CTA */}
        <ScrollReveal delay={0.3} className="text-center mt-12">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium rounded-xl transition-all duration-300"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
