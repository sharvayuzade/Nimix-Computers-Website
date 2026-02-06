'use client'

import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Navigation,
} from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import GlowCard from '@/components/GlowCard'
import ContactForm from '@/components/ContactForm'
import { BUSINESS } from '@/lib/constants'

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-radial-top" />
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="container-custom relative">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-accent-emerald/10 border border-accent-emerald/20 rounded-full text-sm text-accent-emerald font-medium mb-6">
              Contact Us
            </span>
            <h1 className="heading-xl text-white mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="body-lg">
              Have a question, need a quote, or want to schedule a service?
              We&apos;re here to help. Reach out to us through any of the
              channels below.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Phone,
                title: 'Call Us',
                primary: BUSINESS.phoneDisplay,
                secondary: 'Mon-Sat, 10AM-8PM',
                href: `tel:${BUSINESS.phone}`,
                iconClass: 'bg-primary-500/10 border-primary-500/20',
                iconColor: 'text-primary-400',
              },
              {
                icon: MessageCircle,
                title: 'WhatsApp',
                primary: 'Message Us',
                secondary: 'Quick Response',
                href: BUSINESS.social.whatsapp,
                iconClass: 'bg-emerald-500/10 border-emerald-500/20',
                iconColor: 'text-emerald-400',
                external: true,
              },
              {
                icon: Mail,
                title: 'Email',
                primary: BUSINESS.email,
                secondary: 'We reply within 24hrs',
                href: `mailto:${BUSINESS.email}`,
                iconClass: 'bg-cyan-500/10 border-cyan-500/20',
                iconColor: 'text-cyan-400',
              },
              {
                icon: Clock,
                title: 'Business Hours',
                primary: BUSINESS.hours.weekdays,
                secondary: `Sunday: ${BUSINESS.hours.sunday}`,
                iconClass: 'bg-purple-500/10 border-purple-500/20',
                iconColor: 'text-purple-400',
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <GlowCard className="h-full">
                  <div className="p-6">
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${item.iconClass}`}
                    >
                      <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <h3 className="text-sm text-gray-500 mb-1">{item.title}</h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="text-lg font-semibold text-white hover:text-primary-400 transition-colors block mb-1"
                      >
                        {item.primary}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold text-white mb-1">
                        {item.primary}
                      </p>
                    )}
                    <p className="text-sm text-gray-500">{item.secondary}</p>
                  </div>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding pt-8">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <ScrollReveal>
              <GlowCard>
                <div className="p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Send us a Message
                  </h2>
                  <p className="text-gray-400 mb-8">
                    Fill out the form below and we&apos;ll get back to you
                    within 24 hours.
                  </p>
                  <ContactForm />
                </div>
              </GlowCard>
            </ScrollReveal>

            {/* Map & Address */}
            <ScrollReveal direction="left">
              <div className="h-full flex flex-col gap-6">
                {/* Map */}
                <GlowCard className="flex-1 min-h-[300px]">
                  <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5384659999997!2d79.0889!3d21.1266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a5a5a5a5%3A0x0!2sNandanvan%20Main%20Rd%2C%20Kabir%20Nagar%2C%20Nagpur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: 300 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    />
                    <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-2xl" />
                  </div>
                </GlowCard>

                {/* Address Card */}
                <GlowCard>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          Visit Our Store
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                          {BUSINESS.address.full}
                        </p>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.address.full)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 font-medium transition-colors"
                        >
                          <Navigation className="w-4 h-4" />
                          Get Directions
                        </a>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-md text-white">
              Prefer Direct Contact?
            </h2>
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href={`tel:${BUSINESS.phone}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary-600/25"
            >
              <Phone className="w-5 h-5" />
              Call {BUSINESS.phoneDisplay}
            </motion.a>

            <motion.a
              href={BUSINESS.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-emerald-600/25"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </motion.a>

            <motion.a
              href={`mailto:${BUSINESS.email}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </motion.a>
          </div>
        </div>
      </section>
    </>
  )
}
