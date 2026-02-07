import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import { BUSINESS } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nimixcomputers.vercel.app'),
  title: {
    default: 'Nimix Computers | Computer Sales, Repair & Services in Nagpur',
    template: '%s | Nimix Computers'
  },
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
  creator: 'Nimix Computers',
  publisher: 'Nimix Computers',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Nimix Computers | Computer Sales, Repair & Services in Nagpur',
    description:
      'Premium laptops, desktops, CCTV solutions, and expert repair services. Serving Nagpur since 2007.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Nimix Computers',
    url: 'https://nimixcomputers.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nimix Computers | Computer Sales, Repair & Services in Nagpur',
    description: 'Premium laptops, desktops, CCTV solutions, and expert repair services. Serving Nagpur since 2007.',
  },
  verification: {
    google: 'add-your-google-verification-code',
  },
  alternates: {
    canonical: 'https://nimixcomputers.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://nimixcomputers.vercel.app/#business',
    name: BUSINESS.name,
    alternateName: 'Nimix Computers',
    description: 'Premium computer store offering laptops, desktops, CCTV solutions, repair services, and computer peripherals in Nagpur since 2007',
    url: 'https://nimixcomputers.vercel.app',
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    foundingDate: '2007',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plot No-47, Besides Indian Oil Petrol Pump, Nandanvan Main Rd, Mire Layout, Kabir Nagar',
      addressLocality: 'Nagpur',
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.pincode,
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '21.1266',
      longitude: '79.0889'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '20:00'
      }
    ],
    sameAs: [BUSINESS.social.whatsapp],
    areaServed: {
      '@type': 'City',
      name: 'Nagpur',
      '@id': 'https://en.wikipedia.org/wiki/Nagpur'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Computer Products & Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Laptops & Desktops'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Computer Repair Services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'CCTV Installation'
          }
        }
      ]
    }
  }

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-surface-dark text-white antialiased">
        <Preloader />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
