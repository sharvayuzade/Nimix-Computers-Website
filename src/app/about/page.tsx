'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Calendar,
  MapPin,
  Award,
  Users,
  Target,
  Heart,
  Shield,
  Wrench,
  Cpu,
  Headphones,
} from 'lucide-react'
import ScrollReveal, { StaggerReveal } from '@/components/ScrollReveal'
import GlowCard from '@/components/GlowCard'
import StatsCounter from '@/components/StatsCounter'
import CTABanner from '@/components/CTABanner'
import { BUSINESS, FEATURES, TESTIMONIALS } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Wrench,
  Cpu,
  Headphones,
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-radial-top" />
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 bg-accent-purple/10 border border-accent-purple/20 rounded-full text-sm text-accent-purple font-medium mb-6">
                About Us
              </span>
              <h1 className="heading-xl text-white mb-6">
                Nagpur&apos;s Trusted{' '}
                <span className="text-gradient-purple">Technology Partner</span>
              </h1>
              <p className="body-lg mb-8">
                Since 2007, Nimix Computers has been serving Nagpur with
                quality computer products, expert repair services, and
                cutting-edge technology solutions. We&apos;re more than just a
                store — we&apos;re your technology partner.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-5 h-5 text-primary-500" />
                  <span>Est. {BUSINESS.established}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-5 h-5 text-primary-500" />
                  <span>{BUSINESS.address.city}</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all duration-300"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80"
                    alt="Nimix Computers Store"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Floating card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 p-6 bg-surface/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {new Date().getFullYear() - BUSINESS.established}+
                      </span>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white">Years</p>
                      <p className="text-sm text-gray-400">
                        of Excellence
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsCounter />

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal className="text-center mb-16">
              <h2 className="heading-lg text-white mb-6">Our Story</h2>
            </ScrollReveal>

            <ScrollReveal>
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-gray-300 leading-relaxed mb-6">
                  Nimix Computers was founded in {BUSINESS.established} by{' '}
                  <strong className="text-white">{BUSINESS.owner}</strong> with a
                  simple vision: to provide Nagpur with reliable technology
                  products and services at fair prices.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  What started as a small computer shop in Kabir Nagar has grown
                  into one of Nagpur&apos;s most trusted technology stores. Over
                  the years, we have expanded our offerings from basic computer
                  sales to comprehensive IT solutions including laptop repairs,
                  CCTV installations, networking, and enterprise support.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Our success is built on three pillars:{' '}
                  <span className="text-primary-400">quality products</span>,{' '}
                  <span className="text-accent-cyan">expert service</span>, and{' '}
                  <span className="text-accent-purple">customer trust</span>.
                  We&apos;ve served over 10,000 customers — from students buying
                  their first laptop to enterprises deploying complete IT
                  infrastructure.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Today, we continue our commitment to bringing the latest
                  technology to Nagpur while maintaining the personalized
                  service that our customers have come to expect. Whether you
                  need a single laptop or a complete office setup, Nimix
                  Computers is here to help.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <StaggerReveal
            className="grid md:grid-cols-2 gap-8"
            staggerDelay={0.1}
          >
            <GlowCard>
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  To be Nagpur&apos;s most trusted technology partner by
                  providing high-quality products, expert services, and
                  exceptional customer support at competitive prices. We aim to
                  make technology accessible and hassle-free for everyone.
                </p>
              </div>
            </GlowCard>

            <GlowCard>
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-accent-purple" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  To become Central India&apos;s leading computer retail and
                  service provider, known for our expertise, reliability, and
                  commitment to customer satisfaction. We envision a future
                  where every home and business has access to the technology
                  they need.
                </p>
              </div>
            </GlowCard>
          </StaggerReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-accent-cyan/10 border border-accent-cyan/20 rounded-full text-sm text-accent-cyan font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="heading-lg text-white mb-4">
              What Sets Us <span className="text-gradient">Apart</span>
            </h2>
          </ScrollReveal>

          <StaggerReveal
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            staggerDelay={0.08}
          >
            {FEATURES.map((feature, index) => {
              const Icon = iconMap[feature.icon] || Shield
              return (
                <GlowCard key={index}>
                  <div className="p-6 text-center">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-cyan/10 border border-white/5 flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </GlowCard>
              )
            })}
          </StaggerReveal>
        </div>
      </section>

      {/* Owner Section */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden p-12 md:p-16">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 via-surface to-surface" />
              <div className="absolute inset-0 bg-grid opacity-20" />

              <div className="relative grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan p-1">
                    <div className="w-full h-full rounded-full bg-surface flex items-center justify-center">
                      <span className="text-5xl font-bold text-gradient">
                        HZ
                      </span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 text-center md:text-left">
                  <p className="text-sm text-primary-400 font-medium mb-2">
                    {BUSINESS.designation}
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {BUSINESS.owner}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    &ldquo;Our philosophy is simple: treat every customer like
                    family. Whether you&apos;re a student buying your first
                    laptop or a business setting up an entire office, you
                    deserve the same level of attention, honesty, and service.
                    That&apos;s what Nimix Computers stands for.&rdquo;
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white">18+</p>
                      <p className="text-xs text-gray-500">Years Experience</p>
                    </div>
                    <div className="w-px bg-white/10" />
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white">10K+</p>
                      <p className="text-xs text-gray-500">Happy Customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Business Details */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <ScrollReveal>
            <GlowCard>
              <div className="p-8 md:p-12">
                <h3 className="text-xl font-semibold text-white mb-8 text-center">
                  Business Information
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { label: 'Business Name', value: BUSINESS.name },
                    { label: 'Established', value: BUSINESS.established.toString() },
                    { label: 'GSTIN', value: BUSINESS.gstin },
                    { label: 'Location', value: BUSINESS.address.city + ', ' + BUSINESS.address.state },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/5"
                    >
                      <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                      <p className="text-sm text-white font-medium">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </GlowCard>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
