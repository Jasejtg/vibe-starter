# 🏭 Website Factory — AI Prompt Template

Paste this prompt into Cursor (or any AI) to generate a complete new client website.
Fill in the [BRACKETS] with real client info before pasting.

---

## THE PROMPT (copy everything below this line)

---

I'm using the Website Factory pattern. I have a single config file at `src/config/site.ts` that controls the entire website. I need you to fill it in for a new client.

**Client Details:**
- Business Name: [CLIENT NAME]
- Industry: [e.g. Plumbing, Law Firm, Gym, Restaurant, SaaS, Agency]
- Location: [CITY, COUNTRY]
- Tagline / What they do: [ONE SENTENCE]
- Brand Colour (primary): [HEX CODE or "choose a great one for this industry"]
- Dark or Light theme: [Dark / Light]
- Services they offer: [LIST 3-6 SERVICES]
- Target customer: [e.g. Homeowners, Small Businesses, Young Professionals]
- Tone of voice: [e.g. Professional, Friendly, Bold, Luxury, Fun]

**Task:**
Replace the entire contents of `src/config/site.ts` with a fully filled-in config for this client. 

Rules:
1. Write REAL, SPECIFIC copy — not placeholder text. Make it sound like a real business.
2. Choose a colour palette that fits the industry and tone (primary + background + muted).
3. Write 6 compelling services with relevant lucide-react icon names.
4. Write 3 realistic testimonials with believable names, roles and companies.
5. Write 5 FAQs that real customers actually ask in this industry.
6. Write pricing plans that make sense for this business type.
7. All `enabled` flags should be `true` unless the business type doesn't need that section.
8. Keep the exact TypeScript structure — don't change property names or types.
9. Add the client's email and phone number fields (use realistic placeholders if not provided).
10. Make the hero headline punchy — max 6 words, two lines, no filler words.

Only output the complete `src/config/site.ts` file. Nothing else.

---

## AFTER THE CONFIG IS GENERATED

Once Cursor gives you the new config, run:

```bash
npm run dev
```

Check it looks great at http://localhost:3000, then deploy:

```bash
git add -A
git commit -m "feat: [CLIENT NAME] website"
git push
```

Vercel will auto-deploy in ~60 seconds. Share the live URL with the client. Done. ✅

---

## TIPS FOR BEST RESULTS

- **Images**: Add real client photos to `/public/` and set `hero.backgroundImage: "/hero.jpg"` and `about.image: "/about.jpg"`
- **Domain**: In Vercel dashboard → Project Settings → Domains → Add their domain
- **Analytics**: Vercel Analytics is free — enable it in the Vercel dashboard
- **SEO**: The site title and description are auto-pulled from `SITE_CONFIG.name` and `SITE_CONFIG.tagline`
- **Colours**: For dark sites use `background: "#0A0A0A"`. For light sites use `background: "#FFFFFF"` and `foreground: "#0A0A0A"`

---

## QUICK COLOUR PALETTES BY INDUSTRY

| Industry | Primary | Background | Style |
|----------|---------|------------|-------|
| Tech/SaaS | #6366F1 | #0A0A0A | Dark |
| Legal | #1E3A5F | #FFFFFF | Light |
| Fitness/Gym | #FF3B30 | #0A0A0A | Dark |
| Restaurant | #E8A020 | #1A0F00 | Dark |
| Healthcare | #0EA5E9 | #FFFFFF | Light |
| Real Estate | #C9A84C | #0D0D0D | Dark |
| Beauty/Spa | #D4A5A5 | #FFF8F8 | Light |
| Construction | #F97316 | #111111 | Dark |
| Finance | #16A34A | #0A0A0A | Dark |
| Agency | #A855F7 | #050505 | Dark |
