import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - Computer Repair, CCTV Installation & IT Support | Nimix Computers',
  description: 'Expert computer repair, laptop servicing, CCTV installation, networking solutions, data recovery, and annual maintenance contracts (AMC) in Nagpur. Fast, reliable, and affordable services.',
  keywords: [
    'computer repair Nagpur',
    'laptop repair',
    'CCTV installation Nagpur',
    'networking solutions',
    'data recovery Nagpur',
    'AMC services',
    'IT support Nagpur',
    'hardware repair',
    'software support',
  ],
  openGraph: {
    title: 'Services - Computer Repair, CCTV Installation & IT Support | Nimix Computers',
    description: 'Expert computer repair, laptop servicing, CCTV installation, and IT support services in Nagpur.',
    type: 'website',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
