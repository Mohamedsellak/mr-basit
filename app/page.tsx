import Hero from '@/app/_components/hero'
import FeaturedProducts from '@/app/_components/featured-products'
import AboutSection from '@/app/_components/about'
import ContactSection from '@/app/_components/contact'
import BgImages from '@/app/_components/bg-images'

export default function HomePage() {
  return (
    <main className="overflow-hidden">


      {/* Decorative background images */}
      <BgImages />

      {/* Hero Section */}
      <Hero />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* About Section */}
      <AboutSection />
      
      {/* Contact Section */}
      <ContactSection />

    </main>
  )
}
