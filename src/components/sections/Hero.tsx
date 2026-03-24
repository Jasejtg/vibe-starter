"use client"
import { SITE_CONFIG } from "@/config/site"

export default function Hero() {
  const { hero, name, brand } = SITE_CONFIG
  if (!hero.enabled) return null

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: hero.backgroundImage
          ? `url(${hero.backgroundImage}) center/cover no-repeat`
          : `linear-gradient(135deg, ${brand.background} 0%, #1a1a1a 100%)`,
      }}
    >
      {/* Accent glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: brand.primary }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div
          className="inline-block text-xs font-mono tracking-widest uppercase px-4 py-2 rounded-full border mb-8"
          style={{ borderColor: brand.primary, color: brand.primary }}
        >
          {name}
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6" style={{ color: brand.foreground }}>
          {hero.headline}
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-70" style={{ color: brand.foreground }}>
          {hero.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={hero.cta.href}
            className="px-8 py-4 rounded-full font-semibold text-base transition-all hover:opacity-90 hover:scale-105"
            style={{ background: brand.primary, color: "#fff" }}
          >
            {hero.cta.label}
          </a>
          <a
            href={hero.ctaSecondary.href}
            className="px-8 py-4 rounded-full font-semibold text-base border transition-all hover:opacity-90"
            style={{ borderColor: brand.foreground, color: brand.foreground }}
          >
            {hero.ctaSecondary.label}
          </a>
        </div>
      </div>
    </section>
  )
}
