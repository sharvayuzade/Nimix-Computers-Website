import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch | Nimix Computers Nagpur',
  description: 'Contact Nimix Computers for computer sales, repair services, or queries. Visit us at Nandanvan Main Rd, Kabir Nagar, Nagpur. Call 093733 73952 or WhatsApp for quick response.',
  keywords: [
    'contact Nimix Computers',
    'Nimix Computers address',
    'computer store Kabir Nagar',
    'Nandanvan Main Road',
    'Nagpur computer store contact',
    'computer repair contact',
  ],
  openGraph: {
    title: 'Contact Us - Get in Touch | Nimix Computers Nagpur',
    description: 'Contact Nimix Computers for computer sales, repair services, or queries. Located in Kabir Nagar, Nagpur.',
    type: 'website',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
