// ============================================================
// WEBSITE FACTORY — SITE CONFIG
// Edit this one file to control your entire website.
// ============================================================

export const SITE_CONFIG = {
  // ── Business Info ─────────────────────────────────────────
  name: "Acme Co",
  tagline: "Your tagline here",

  // ── Brand Colours ─────────────────────────────────────────
  brand: {
    primary: "#FF6A00",       // Accent colour (buttons, highlights)
    background: "#000000",    // Page background
    foreground: "#FFFFFF",    // Text colour
    muted: "#111111",         // Card / section backgrounds
    border: "#222222",        // Borders / dividers
  },

  // ── Navigation ────────────────────────────────────────────
  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    cta: { label: "Get Started", href: "#contact" },
  },

  // ── Hero Section ──────────────────────────────────────────
  hero: {
    enabled: true,
    headline: "Build Something\nAmazing Today",
    subheadline: "We help ambitious businesses grow faster with smart digital solutions.",
    cta: { label: "Get Started", href: "#contact" },
    ctaSecondary: { label: "Learn More", href: "#services" },
    backgroundImage: "", // Optional: "/hero-bg.jpg"
  },

  // ── Stats Bar ─────────────────────────────────────────────
  stats: {
    enabled: true,
    items: [
      { value: "500+", label: "Happy Clients" },
      { value: "12yrs", label: "Experience" },
      { value: "99%", label: "Satisfaction" },
      { value: "24/7", label: "Support" },
    ],
  },

  // ── Services ──────────────────────────────────────────────
  services: {
    enabled: true,
    heading: "What We Do",
    subheading: "Everything you need to grow your business online.",
    items: [
      {
        icon: "Zap",
        title: "Fast Delivery",
        description: "We ship quickly without sacrificing quality. Speed is our competitive advantage.",
      },
      {
        icon: "Shield",
        title: "Secure & Reliable",
        description: "Enterprise-grade security baked in from day one. Your data stays safe.",
      },
      {
        icon: "BarChart",
        title: "Data Driven",
        description: "Make decisions backed by real data. We measure what matters.",
      },
      {
        icon: "Users",
        title: "Expert Team",
        description: "Seasoned professionals who've shipped hundreds of successful projects.",
      },
      {
        icon: "Globe",
        title: "Global Reach",
        description: "Reach customers anywhere in the world with localised experiences.",
      },
      {
        icon: "Headphones",
        title: "24/7 Support",
        description: "We're always here when you need us. Real humans, real fast responses.",
      },
    ],
  },

  // ── About ─────────────────────────────────────────────────
  about: {
    enabled: true,
    heading: "Built by people who care",
    body: "We started this company because we were tired of seeing great businesses held back by bad digital experiences. Our team brings together designers, engineers, and strategists who believe that great work changes lives.",
    image: "", // Optional: "/about.jpg"
    bullets: [
      "Founded in 2015 in Dublin, Ireland",
      "Team of 30+ across 8 countries",
      "Worked with 500+ businesses worldwide",
      "Certified partners with Google & Meta",
    ],
  },

  // ── Pricing ───────────────────────────────────────────────
  pricing: {
    enabled: true,
    heading: "Simple, Honest Pricing",
    subheading: "No hidden fees. Cancel anytime.",
    plans: [
      {
        name: "Starter",
        price: "€49",
        period: "/mo",
        description: "Perfect for small businesses just getting started.",
        highlighted: false,
        features: [
          "Up to 5 pages",
          "Basic analytics",
          "Email support",
          "SSL certificate",
          "1 user",
        ],
      },
      {
        name: "Growth",
        price: "€149",
        period: "/mo",
        description: "For growing teams who need more power.",
        highlighted: true,
        features: [
          "Unlimited pages",
          "Advanced analytics",
          "Priority support",
          "Custom domain",
          "5 users",
          "A/B testing",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For large organisations with specific needs.",
        highlighted: false,
        features: [
          "Everything in Growth",
          "Dedicated manager",
          "SLA guarantee",
          "Custom integrations",
          "Unlimited users",
          "On-site training",
        ],
      },
    ],
  },

  // ── Testimonials ──────────────────────────────────────────
  testimonials: {
    enabled: true,
    heading: "Loved by Our Clients",
    items: [
      {
        name: "Sarah Johnson",
        role: "CEO, TechStart",
        body: "Working with this team transformed our online presence. We saw a 3x increase in leads within the first month.",
      },
      {
        name: "Michael Chen",
        role: "Founder, GrowthLab",
        body: "The Website Factory approach is genius. They built our entire platform in under two weeks. Incredible.",
      },
      {
        name: "Emma O'Brien",
        role: "Marketing Director, Bloom Agency",
        body: "Fast, professional, and the results speak for themselves. Our conversion rate is up 47% since launch.",
      },
    ],
  },

  // ── FAQ ───────────────────────────────────────────────────
  faq: {
    enabled: true,
    heading: "Frequently Asked Questions",
    items: [
      {
        q: "How quickly can you deliver a website?",
        a: "Most projects are delivered within 5–10 business days depending on complexity. Rush delivery is available.",
      },
      {
        q: "Do I need technical skills to manage my site?",
        a: "Not at all. We build everything to be easily managed by non-technical staff, and we provide training.",
      },
      {
        q: "What if I need changes after launch?",
        a: "All plans include ongoing support. Simply reach out and we'll handle updates and changes promptly.",
      },
      {
        q: "Can I upgrade my plan later?",
        a: "Absolutely. You can upgrade, downgrade, or cancel at any time — no lock-in contracts.",
      },
      {
        q: "Do you offer custom designs?",
        a: "Yes! While we have beautiful templates to get you started fast, we also offer fully custom design work.",
      },
    ],
  },

  // ── Contact ───────────────────────────────────────────────
  contact: {
    enabled: true,
    heading: "Let's Talk",
    subheading: "Ready to build something great? Drop us a message.",
    email: "hello@acmeco.com",
    phone: "+353 1 234 5678",
  },

  // ── Footer ────────────────────────────────────────────────
  footer: {
    tagline: "Building beautiful digital experiences for businesses that want to grow.",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
    socials: {
      instagram: "",
      facebook: "",
      twitter: "",
      linkedin: "",
    },
  },
}
