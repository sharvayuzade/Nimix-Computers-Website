'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { getDb } from '@/lib/firebase'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const db = getDb()
      if (!db) {
        throw new Error('Firebase not initialized')
      }
      
      await addDoc(collection(db, 'inquiries'), {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'new',
      })
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const inputClasses =
    'w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.07] transition-all duration-300 text-sm'

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm text-gray-400 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+91 XXXXX XXXXX"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={inputClasses}
          >
            <option value="">Select a subject</option>
            <option value="Product Inquiry">Product Inquiry</option>
            <option value="Repair Service">Repair Service</option>
            <option value="CCTV Installation">CCTV Installation</option>
            <option value="Bulk Order">Bulk Order</option>
            <option value="AMC">Annual Maintenance Contract</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us about your requirements..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={status === 'loading'}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 disabled:bg-primary-600/50 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary-600/25 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : status === 'success' ? (
          <>
            <CheckCircle className="w-5 h-5" />
            Message Sent!
          </>
        ) : status === 'error' ? (
          <>
            <AlertCircle className="w-5 h-5" />
            Failed. Try Again
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </motion.button>

      {/* Status Messages */}
      {status === 'success' && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-emerald-400 text-center"
        >
          Thank you! We&apos;ll get back to you within 24 hours.
        </motion.p>
      )}
      {status === 'error' && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-400 text-center"
        >
          Something went wrong. Please try again or call us directly.
        </motion.p>
      )}
    </form>
  )
}
