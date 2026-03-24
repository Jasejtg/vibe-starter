import { SITE_CONFIG } from "@/config/site"
import { Zap, Shield, Star, Globe, Clock, Heart, Check, ArrowRight, Users, Briefcase, Code, Camera, BarChart, Headphones, Wrench, Leaf, TrendingUp, Lock, Rocket, MessageCircle, Palette, Database, Search } from "lucide-react"

const ICONS: Record<string, React.ElementType> = {
  Zap, Shield, Star, Globe, Clock, Heart, Check, ArrowRight, Users, Briefcase, Code, Camera,
  BarChart, Headphones, Wrench, Leaf, TrendingUp, Lock, Rocket, MessageCircle, Palette, Database, Search,
}

export default function Services() {
  const { services, brand } = SITE_CONFIG
  if (!services.enabled) return null

  return (
    <section id="services" className="py-24" style={{ background: brand.background }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: brand.foreground }}>
            {services.heading}
          </h2>
          <p className="text-lg opacity-60 max-w-xl mx-auto" style={{ color: brand.foreground }}>
            {services.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.items.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Zap
            return (
              <div
                key={i}
                className="p-8 rounded-2xl border transition-all hover:scale-105 hover:border-opacity-100 group"
                style={{ background: brand.muted, borderColor: brand.border }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: `${brand.primary}22` }}
                >
                  <Icon size={22} style={{ color: brand.primary }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: brand.foreground }}>{s.title}</h3>
                <p className="opacity-60 leading-relaxed" style={{ color: brand.foreground }}>{s.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
