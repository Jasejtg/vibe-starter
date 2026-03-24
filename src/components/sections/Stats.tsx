import { SITE_CONFIG } from "@/config/site"

export default function Stats() {
  const { stats, brand } = SITE_CONFIG
  if (!stats.enabled) return null

  return (
    <section className="py-12 border-y" style={{ borderColor: brand.border, background: brand.muted }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.items.map((s, i) => (
            <div key={i}>
              <div className="text-4xl font-bold mb-1" style={{ color: brand.primary }}>{s.value}</div>
              <div className="text-sm opacity-60 uppercase tracking-widest" style={{ color: brand.foreground }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
