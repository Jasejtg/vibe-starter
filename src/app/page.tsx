import { SITE_CONFIG } from "@/config/site"

import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

import Hero from "@/components/sections/Hero"
import Stats from "@/components/sections/Stats"
import Services from "@/components/sections/Services"
import About from "@/components/sections/About"
import Pricing from "@/components/sections/Pricing"
import Testimonials from "@/components/sections/Testimonials"
import FAQ from "@/components/sections/FAQ"
import Contact from "@/components/sections/Contact"

export default function Home() {
  const brand = SITE_CONFIG.brand

  return (
    <main style={{ background: brand.background, color: brand.foreground }}>
      <Navbar />

      {SITE_CONFIG.hero.enabled && <Hero />}
      {SITE_CONFIG.stats.enabled && <Stats />}
      {SITE_CONFIG.services.enabled && <Services />}
      {SITE_CONFIG.about.enabled && <About />}
      {SITE_CONFIG.pricing.enabled && <Pricing />}
      {SITE_CONFIG.testimonials.enabled && <Testimonials />}
      {SITE_CONFIG.faq.enabled && <FAQ />}
      {SITE_CONFIG.contact.enabled && <Contact />}

      <Footer />
    </main>
  )
}
