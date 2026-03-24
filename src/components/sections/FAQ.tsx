"use client"
import { useState } from "react"
import { SITE_CONFIG } from "@/config/site"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const { faq, brand } = SITE_CONFIG
  const [open, setOpen] = useState<number | null>(null)
  if (!faq.enabled) return null

  return (
    <section className="py-24" style={{ background: brand.background }}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: brand.foreground }}>
            {faq.heading}
          </h2>
        </div>
        <div className="space-y-3">
          {faq.items.map((item, i) => (
            <div key={i} className="rounded-2xl border overflow-hidden"
              style={{ borderColor: brand.border, background: brand.muted }}>
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold"
                style={{ color: brand.foreground }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {item.q}
                <ChevronDown size={18} className={`transition-transform ${open === i ? "rotate-180" : ""}`}
                  style={{ color: brand.primary }} />
              </button>
              {open === i && (
                <div className="px-6 pb-5 opacity-70 leading-relaxed" style={{ color: brand.foreground }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
