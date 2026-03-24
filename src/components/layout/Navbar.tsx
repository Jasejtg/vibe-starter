"use client"

import { useState, useEffect } from "react"
import { SITE_CONFIG } from "@/config/site"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const brand = SITE_CONFIG.brand
  const nav = SITE_CONFIG.nav
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      style={{
        background: scrolled ? brand.background + "ee" : "transparent",
        borderBottom: scrolled ? `1px solid ${brand.border}` : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        color: brand.foreground,
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          style={{ color: brand.foreground }}
          className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          <span style={{ color: brand.primary }}>{SITE_CONFIG.name.charAt(0)}</span>
          {SITE_CONFIG.name.slice(1)}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{ color: brand.foreground + "cc" }}
              className="text-sm font-medium hover:opacity-100 transition-opacity"
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = brand.primary)}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = brand.foreground + "cc")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={nav.cta.href}
            style={{ background: brand.primary, color: "#fff" }}
            className="text-sm font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
          >
            {nav.cta.label}
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: brand.foreground }}
          className="md:hidden p-2"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{ background: brand.background, borderTop: `1px solid ${brand.border}` }}
          className="md:hidden px-6 py-6 flex flex-col gap-4"
        >
          {nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{ color: brand.foreground + "cc" }}
              className="text-sm font-medium py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            style={{ background: brand.primary, color: "#fff" }}
            className="text-sm font-semibold px-5 py-3 rounded-xl text-center mt-2"
          >
            {nav.cta.label}
          </a>
        </div>
      )}
    </header>
  )
}
