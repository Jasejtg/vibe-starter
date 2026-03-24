"use client"

import { useState } from "react"
import { SITE_CONFIG } from "@/config/site"
import { Send } from "lucide-react"

export default function Contact() {
  const cfg = SITE_CONFIG.contact
  if (!cfg.enabled) return null

  const brand = SITE_CONFIG.brand
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section
      id="contact"
      style={{ background: brand.muted, color: brand.foreground }}
      className="py-24 px-6"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{cfg.heading}</h2>
          <p style={{ color: brand.foreground + "99" }} className="text-lg">
            {cfg.subheading}
          </p>
        </div>

        {sent ? (
          <div
            style={{ borderColor: brand.primary, background: brand.primary + "15" }}
            className="border rounded-2xl p-12 text-center"
          >
            <div
              style={{ color: brand.primary }}
              className="text-5xl mb-4"
            >
              ✓
            </div>
            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
            <p style={{ color: brand.foreground + "99" }}>
              We&apos;ll get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ borderColor: brand.border, background: brand.background }}
            className="border rounded-2xl p-8 space-y-6"
          >
            <div>
              <label
                style={{ color: brand.foreground + "99" }}
                className="block text-sm font-medium mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="John Smith"
                style={{
                  background: brand.muted,
                  borderColor: brand.border,
                  color: brand.foreground,
                }}
                className="w-full border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2"
                onFocus={(e) => (e.target.style.borderColor = brand.primary)}
                onBlur={(e) => (e.target.style.borderColor = brand.border)}
              />
            </div>
            <div>
              <label
                style={{ color: brand.foreground + "99" }}
                className="block text-sm font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="john@example.com"
                style={{
                  background: brand.muted,
                  borderColor: brand.border,
                  color: brand.foreground,
                }}
                className="w-full border rounded-xl px-4 py-3 text-sm outline-none"
                onFocus={(e) => (e.target.style.borderColor = brand.primary)}
                onBlur={(e) => (e.target.style.borderColor = brand.border)}
              />
            </div>
            <div>
              <label
                style={{ color: brand.foreground + "99" }}
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your project..."
                style={{
                  background: brand.muted,
                  borderColor: brand.border,
                  color: brand.foreground,
                }}
                className="w-full border rounded-xl px-4 py-3 text-sm outline-none resize-none"
                onFocus={(e) => (e.target.style.borderColor = brand.primary)}
                onBlur={(e) => (e.target.style.borderColor = brand.border)}
              />
            </div>
            <button
              type="submit"
              style={{ background: brand.primary, color: "#fff" }}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
