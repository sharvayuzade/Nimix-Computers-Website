import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import ProductsSection from '@/components/ProductsSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import StatsCounter from '@/components/StatsCounter'
import BrandsSection from '@/components/BrandsSection'
import Testimonials from '@/components/Testimonials'
import CTABanner from '@/components/CTABanner'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <ServicesSection />
      <ProductsSection />
      <WhyChooseUs />
      <BrandsSection />
      <Testimonials />
      <CTABanner />
    </>
  )
}
