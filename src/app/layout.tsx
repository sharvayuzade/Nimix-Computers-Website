import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nimix Computers | Computer Sales, Repair & Services in Nagpur',
  description:
    'Nimix Computers - Your trusted technology partner since 2007. HP laptops, desktops, CCTV solutions, computer peripherals, and expert repair services in Nagpur, Maharashtra.',
  keywords: [
    'Nimix Computers',
    'computer store Nagpur',
    'laptop repair Nagpur',
    'HP laptop Nagpur',
    'CCTV installation Nagpur',
    'computer peripherals',
    'desktop repair',
    'computer sales Nagpur',
    'Kabir Nagar computer shop',
    'Nandanvan computer store',
  ],
  authors: [{ name: 'Nimix Computers' }],
  openGraph: {
    title: 'Nimix Computers | Computer Sales, Repair & Services in Nagpur',
    description:
      'Premium laptops, desktops, CCTV solutions, and expert repair services. Serving Nagpur since 2007.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Nimix Computers',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-surface-dark text-white antialiased">
        <Preloader />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
