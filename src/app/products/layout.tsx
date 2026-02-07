import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products - Laptops, Desktops & Computer Peripherals | Nimix Computers',
  description: 'Browse our wide range of laptops, desktops, keyboards, computer components, CCTV systems, printers, networking equipment, and storage devices. Premium brands at competitive prices in Nagpur.',
  keywords: [
    'laptops Nagpur',
    'desktop computers',
    'HP laptops',
    'Dell laptops',
    'Lenovo laptops',
    'computer keyboards',
    'CCTV cameras',
    'printers Nagpur',
    'computer components',
    'storage devices',
    'networking equipment',
  ],
  openGraph: {
    title: 'Products - Laptops, Desktops & Computer Peripherals | Nimix Computers',
    description: 'Browse our wide range of laptops, desktops, and computer peripherals from premium brands.',
    type: 'website',
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
