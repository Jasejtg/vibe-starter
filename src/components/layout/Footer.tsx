"use client"

import { SITE_CONFIG } from "@/config/site"

export default function Footer() {
  const brand = SITE_CONFIG.brand
  const footer = SITE_CONFIG.footer
  const nav = SITE_CONFIG.nav
  const socials = footer.socials
  const year = new Date().getFullYear()

  const linkStyle = { color: brand.foreground + "66" }
  const hoverIn = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = brand.primary
  }
  const hoverOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = brand.foreground + "66"
  }

  return (
    <footer
      style={{
        background: brand.background,
        borderTop: `1px solid ${brand.border}`,
        color: brand.foreground,
      }}
      className="py-16 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand Column */}
          <div>
            <div className="text-2xl font-bold mb-3">
              <span style={{ color: brand.primary }}>{SITE_CONFIG.name.charAt(0)}</span>
              {SITE_CONFIG.name.slice(1)}
            </div>
            <p style={{ color: brand.foreground + "66" }} className="text-sm leading-relaxed max-w-xs">
              {footer.tagline}
            </p>

            {/* Socials */}
            <div className="flex gap-4 mt-6">
              {socials.instagram && (
                <a href={socials.instagram} target="_blank" rel="noreferrer"
                  style={{ ...linkStyle, fontSize: "12px", fontWeight: 600, letterSpacing: "0.05em" }}
                  className="transition-colors uppercase"
                  onMouseEnter={hoverIn} onMouseLeave={hoverOut}
                >IG</a>
              )}
              {socials.facebook && (
                <a href={socials.facebook} target="_blank" rel="noreferrer"
                  style={{ ...linkStyle, fontSize: "12px", fontWeight: 600, letterSpacing: "0.05em" }}
                  className="transition-colors uppercase"
                  onMouseEnter={hoverIn} onMouseLeave={hoverOut}
                >FB</a>
              )}
              {socials.twitter && (
                <a href={socials.twitter} target="_blank" rel="noreferrer"
                  style={{ ...linkStyle, fontSize: "12px", fontWeight: 600, letterSpacing: "0.05em" }}
                  className="transition-colors uppercase"
                  onMouseEnter={hoverIn} onMouseLeave={hoverOut}
                >X</a>
              )}
              {socials.linkedin && (
                <a href={socials.linkedin} target="_blank" rel="noreferrer"
                  style={{ ...linkStyle, fontSize: "12px", fontWeight: 600, letterSpacing: "0.05em" }}
                  className="transition-colors uppercase"
                  onMouseEnter={hoverIn} onMouseLeave={hoverOut}
                >LI</a>
              )}
            </div>
          </div>

          {/* Nav Links Column */}
          <div>
            <h4 style={{ color: brand.foreground }} className="text-sm font-semibold uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {nav.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} style={linkStyle}
                    className="text-sm transition-colors"
                    onMouseEnter={hoverIn} onMouseLeave={hoverOut}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 style={{ color: brand.foreground }} className="text-sm font-semibold uppercase tracking-widest mb-4">
              Get In Touch
            </h4>
            {SITE_CONFIG.contact.email && (
              <a href={`mailto:${SITE_CONFIG.contact.email}`}
                style={linkStyle}
                className="text-sm block mb-2 transition-colors"
                onMouseEnter={hoverIn} onMouseLeave={hoverOut}
              >
                {SITE_CONFIG.contact.email}
              </a>
            )}
            {SITE_CONFIG.contact.phone && (
              <a href={`tel:${SITE_CONFIG.contact.phone}`}
                style={linkStyle}
                className="text-sm block transition-colors"
                onMouseEnter={hoverIn} onMouseLeave={hoverOut}
              >
                {SITE_CONFIG.contact.phone}
              </a>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{ borderTop: `1px solid ${brand.border}` }}
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p style={{ color: brand.foreground + "44" }} className="text-xs">
            © {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footer.links?.map((link) => (
              <a key={link.label} href={link.href}
                style={{ color: brand.foreground + "44" }}
                className="text-xs transition-colors"
                onMouseEnter={(e) => (e.currentTarget.style.color = brand.foreground + "99")}
                onMouseLeave={(e) => (e.currentTarget.style.color = brand.foreground + "44")}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
