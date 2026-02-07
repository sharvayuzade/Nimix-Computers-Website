import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Nimix Computers | Your Trusted Technology Partner Since 2007',
  description: 'Learn about Nimix Computers, Nagpur\'s trusted computer store since 2007. Founded by Mr. Hemant Shriram Zade, we provide quality products, expert services, and exceptional customer support.',
  keywords: [
    'Nimix Computers Nagpur',
    'computer store history',
    'Hemant Shriram Zade',
    'technology partner Nagpur',
    'computer store since 2007',
    'Kabir Nagar',
    'Nandanvan',
  ],
  openGraph: {
    title: 'About Us - Nimix Computers | Your Trusted Technology Partner Since 2007',
    description: 'Learn about Nimix Computers, Nagpur\'s trusted computer store since 2007.',
    type: 'website',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
