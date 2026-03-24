import { SITE_CONFIG } from "@/config/site"

export default function Testimonials() {
  const { testimonials, brand } = SITE_CONFIG
  if (!testimonials.enabled) return null

  return (
    <section className="py-24" style={{ background: brand.muted }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: brand.foreground }}>
            {testimonials.heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.items.map((t, i) => (
            <div key={i} className="p-8 rounded-2xl border flex flex-col gap-6"
              style={{ background: brand.background, borderColor: brand.border }}>
              <p className="text-lg leading-relaxed opacity-80 flex-1" style={{ color: brand.foreground }}>
                &ldquo;{t.body}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ background: brand.primary, color: "#fff" }}>
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: brand.foreground }}>{t.name}</div>
                  <div className="text-xs opacity-50" style={{ color: brand.foreground }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
