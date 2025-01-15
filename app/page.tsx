import Hero from '@/app/_components/hero'
import FeaturedProducts from '@/app/_components/featured-products'
import AboutSection from '@/app/_components/about'
import ContactSection from '@/app/_components/contact'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
