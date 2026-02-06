'use client'

import Link from 'next/link'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowUpRight,
  Heart,
} from 'lucide-react'
import { BUSINESS, NAV_LINKS, SERVICES } from '@/lib/constants'

const footerLinks = {
  services: SERVICES.slice(0, 6).map((s) => ({
    label: s.title,
    href: `/services#${s.id}`,
  })),
  quickLinks: [
    ...NAV_LINKS,
    { label: 'Privacy Policy', href: '/privacy' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-surface-dark border-t border-white/5">
      {/* Gradient accent line */}
      <div className="gradient-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center">
                <span className="text-lg font-bold text-white">N</span>
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-wide block leading-none">
                  NIMIX
                </span>
                <span className="text-[10px] text-gray-500 tracking-[0.25em] leading-none">
                  COMPUTERS
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Your trusted technology partner since {BUSINESS.established}.
              Premium computer sales, expert repair services, and CCTV
              solutions in Nagpur.
            </p>

            {/* WhatsApp Link */}
            <a
              href={BUSINESS.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-600/20 hover:border-emerald-500/30 transition-all duration-300 text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-primary-500 shrink-0" />
                  <span>{BUSINESS.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-primary-500 shrink-0" />
                  <span>{BUSINESS.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-500 shrink-0" />
                <span>{BUSINESS.address.full}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Clock className="w-4 h-4 mt-0.5 text-primary-500 shrink-0" />
                <div>
                  <p>Mon - Sat: {BUSINESS.hours.weekdays}</p>
                  <p>Sunday: {BUSINESS.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
            GSTIN: {BUSINESS.gstin}
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500" /> in Nagpur
          </p>
        </div>
      </div>
    </footer>
  )
}
