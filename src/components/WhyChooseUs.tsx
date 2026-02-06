'use client'

import { Shield, Wrench, Cpu, Headphones } from 'lucide-react'
import ScrollReveal, { StaggerReveal } from '@/components/ScrollReveal'
import { FEATURES } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Wrench,
  Cpu,
  Headphones,
}

export default function WhyChooseUs() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-radial-center" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 bg-accent-purple/10 border border-accent-purple/20 rounded-full text-sm text-accent-purple font-medium mb-4">
                Why Choose Us
              </span>
              <h2 className="heading-lg text-white mb-6">
                Nagpur&apos;s Most Trusted{' '}
                <span className="text-gradient-purple">Computer Store</span>
              </h2>
              <p className="body-lg mb-8">
                With over 18 years of experience, Nimix Computers has earned the
                trust of thousands of customers across Nagpur. We don&apos;t just
                sell products — we build lasting relationships.
              </p>
            </ScrollReveal>

            <StaggerReveal className="space-y-6" staggerDelay={0.12}>
              {FEATURES.map((feature, index) => {
                const Icon = iconMap[feature.icon] || Shield
                return (
                  <div
                    key={index}
                    className="group flex items-start gap-5 p-5 rounded-2xl hover:bg-white/[0.02] transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-purple/10 border border-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1.5">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </StaggerReveal>
          </div>

          {/* Right: Visual Element */}
          <ScrollReveal direction="left" className="hidden lg:block">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-purple/10 rounded-3xl" />

              {/* Stats grid */}
              <div className="relative grid grid-cols-2 gap-4 p-8">
                {[
                  { number: '18+', label: 'Years Experience', color: 'from-primary-500 to-primary-600' },
                  { number: '10K+', label: 'Happy Customers', color: 'from-accent-cyan to-primary-500' },
                  { number: '50+', label: 'Brand Partners', color: 'from-accent-purple to-primary-500' },
                  { number: '15K+', label: 'Products Sold', color: 'from-accent-emerald to-accent-cyan' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="group p-6 rounded-2xl bg-surface/80 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div
                      className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                    >
                      {stat.number}
                    </div>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-primary-600 rounded-xl text-sm font-medium text-white shadow-lg shadow-primary-600/30 animate-float">
                Est. 2007
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
