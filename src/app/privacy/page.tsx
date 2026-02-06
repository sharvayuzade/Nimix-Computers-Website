import { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import { BUSINESS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy | Nimix Computers',
  description: 'Privacy Policy for Nimix Computers - Learn how we collect, use, and protect your information.',
}

export default function PrivacyPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-radial-top" />
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="container-custom relative">
          <ScrollReveal className="max-w-4xl mx-auto">
            <h1 className="heading-lg text-white mb-8">Privacy Policy</h1>
            
            <div className="prose prose-invert prose-gray max-w-none">
              <p className="text-gray-400 mb-6">
                Last updated: {new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
              </p>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-400 mb-4">
                At {BUSINESS.name}, we collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Product and service inquiries</li>
                <li>Communication preferences</li>
                <li>Feedback and correspondence</li>
              </ul>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-400 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Process and fulfill your orders</li>
                <li>Send you updates about our products and services (with your consent)</li>
                <li>Improve our website and services</li>
              </ul>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">
                3. Information Security
              </h2>
              <p className="text-gray-400 mb-6">
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. Your data 
                is stored securely using industry-standard encryption and security practices.
              </p>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">
                4. Third-Party Services
              </h2>
              <p className="text-gray-400 mb-6">
                We may use third-party services (such as Firebase for data storage and analytics) 
                that collect, monitor, and analyze data. These services have their own privacy 
                policies governing the use of your information.
              </p>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">
                5. Your Rights
              </h2>
              <p className="text-gray-400 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">
                6. Contact Us
              </h2>
              <p className="text-gray-400 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>Email: {BUSINESS.email}</li>
                <li>Phone: {BUSINESS.phoneDisplay}</li>
                <li>Address: {BUSINESS.address.full}</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
