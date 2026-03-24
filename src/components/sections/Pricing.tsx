import { SITE_CONFIG } from "@/config/site"
import { Check } from "lucide-react"

export default function Pricing() {
  const { pricing, brand } = SITE_CONFIG
  if (!pricing.enabled) return null

  return (
    <section id="pricing" className="py-24" style={{ background: brand.background }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: brand.foreground }}>
            {pricing.heading}
          </h2>
          <p className="text-lg opacity-60" style={{ color: brand.foreground }}>{pricing.subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricing.plans.map((plan, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border flex flex-col relative"
              style={{
                background: plan.highlighted ? brand.primary : brand.muted,
                borderColor: plan.highlighted ? brand.primary : brand.border,
              }}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-6">
                <div className="text-sm font-semibold uppercase tracking-widest mb-2 opacity-70"
                  style={{ color: plan.highlighted ? "#fff" : brand.foreground }}>
                  {plan.name}
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-bold" style={{ color: plan.highlighted ? "#fff" : brand.foreground }}>
                    {plan.price}
                  </span>
                  <span className="opacity-60 mb-2" style={{ color: plan.highlighted ? "#fff" : brand.foreground }}>
                    {plan.period}
                  </span>
                </div>
                <p className="text-sm opacity-70 mt-2" style={{ color: plan.highlighted ? "#fff" : brand.foreground }}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm"
                    style={{ color: plan.highlighted ? "#fff" : brand.foreground }}>
                    <Check size={16} style={{ color: plan.highlighted ? "#fff" : brand.primary }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="block text-center py-3 px-6 rounded-full font-semibold transition-all hover:opacity-90"
                style={{
                  background: plan.highlighted ? "#fff" : brand.primary,
                  color: plan.highlighted ? brand.primary : "#fff",
                }}
              >
                {plan.highlighted ? "Get Started" : "Choose Plan"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
