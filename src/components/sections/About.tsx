import { SITE_CONFIG } from "@/config/site"
import { Check } from "lucide-react"

export default function About() {
  const { about, brand } = SITE_CONFIG
  if (!about.enabled) return null

  return (
    <section id="about" className="py-24" style={{ background: brand.muted }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            className="rounded-2xl overflow-hidden aspect-square flex items-center justify-center"
            style={{ background: brand.border }}
          >
            {about.image ? (
              <img src={about.image} alt="About" className="w-full h-full object-cover" />
            ) : (
              <div className="text-6xl opacity-20">🏢</div>
            )}
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: brand.foreground }}>
              {about.heading}
            </h2>
            <p className="text-lg opacity-70 leading-relaxed mb-8" style={{ color: brand.foreground }}>
              {about.body}
            </p>
            <ul className="space-y-3">
              {about.bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check size={18} style={{ color: brand.primary }} />
                  <span style={{ color: brand.foreground }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
