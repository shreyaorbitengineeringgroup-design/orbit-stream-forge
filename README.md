# Orbit Brilliance

Orbit Engineering Solutions — Content Extract + 3D Website Design Prompt

1. Content extracted from orbitengineerings.com

Note: the live site is a JS-rendered app, so only meta/SEO-level content was retrievable, not the full projects/case-study page. Everything below is confirmed from the site's meta tags; add specific project photos/write-ups yourself if you want them included exactly.

Company: Orbit Engineering Solutions (formerly Orbit Engineering Group)

Location: Bhopal, Madhya Pradesh, India

Founded: 1998

Tagline: India's Leading Water Treatment & Automation Company

Certifications: Triple ISO Certified — ISO 9001:2015 (Quality), ISO 14001:2015 (Environment), ISO 45001:2018 (Health & Safety)

Portfolio scale: ₹200+ Cr project portfolio

Core services:

Water Treatment Plants (WTP)

Sewage Treatment Plants (STP)

Reverse Osmosis (RO)

Effluent Treatment Plants (ETP)

SCADA systems

PLC automation

IoT-based monitoring

Instrumentation

Solar energy solutions

Key clients / sectors served: MP Jal Nigam, MPUDCL, Bhopal Municipal Corporation, Indore District Administration, Tikamgarh Nagar Parishads, WRD Bhopal, Prism Cement, Lupin Pharmaceuticals, Vindhyachal Distillery, Dilip Buildcon, Tejas Construction, L&T, BHEL, Indian Railways

2. Website Design Prompt (v2 — light theme, clean layout, controlled motion)

The first version pushed too many simultaneous animations and layered 3D effects, which is what caused the cluttered/chaotic result. This version keeps the same structure as orbitengineerings.com — a standard, clean, light-theme corporate layout — and treats 3D/motion as a small number of deliberate accents, not a constant effect on every element.

Use this with an AI website builder (v0, Lovable, Bolt.new, etc.) or hand it to a frontend developer.

Design and build a clean, light-theme, professional corporate website for
"Orbit Engineering Solutions" — a water treatment & automation engineering company
(WTP, STP, RO, ETP, SCADA, PLC automation, IoT monitoring, instrumentation, solar),
based in Bhopal, India, operating since 1998, Triple ISO certified, ₹200+ Cr project
portfolio, trusted by MP Jal Nigam, MPUDCL, Bhopal Municipal Corporation, Prism Cement,
Lupin Pharmaceuticals, L&T, BHEL, Indian Railways and more.

LAYOUT & STRUCTURE — follow this closely, same overall page flow as orbitengineerings.com:
1. Header — logo left, horizontal nav right (Home, About, Services, Projects,
   Certifications, Contact), simple sticky bar, white/light background.
2. Hero section — full-width background video, headline + tagline, one CTA button.
3. About / stats strip — short intro paragraph + a row of key numbers
   (Since 1998, Triple ISO Certified, ₹200+ Cr Portfolio).
4. Services grid — one card per service (WTP, STP, RO, ETP, SCADA, PLC Automation,
   IoT Monitoring, Instrumentation, Solar), simple icon + title + one-line description.
5. Clients / projects section — logo strip or simple grid of client names/sectors.
6. Certifications section — three ISO badges in a row with labels.
7. Contact / CTA section — short prompt + button, or a simple contact form.
8. Footer — standard: company info, quick links, contact details.

Keep this exact structure. Do not add extra experimental sections, extra sidebars,
or unrelated blocks. This is a professional B2B/government-facing engineering firm,
not a consumer or entertainment product.

THEME
- LIGHT THEME ONLY. White / very light grey backgrounds throughout.
- Accent color: engineering blue (#0073bc-ish), used sparingly for buttons, links,
  icons, and section highlights — not as large background fills.
- Generous white space between sections. Clear visual hierarchy: one clear heading
  per section, short supporting text, no dense blocks of copy.
- Typography: one clean sans-serif for headings, one for body text. Consistent
  sizing scale — do not vary font sizes randomly between sections.

HERO SECTION (the one section allowed to feel bold)
- Full-bleed background video (the water-treatment plant footage, attached
  separately) — autoplay, muted, looped — with a light overlay (not heavy dark
  gradient) so it still reads as a light-theme page.
- Headline + tagline text, one CTA button. A single simple fade/slide-in on load
  is enough — do not stack multiple animated elements on top of the video.
- This is the ONLY section that should feel visually rich. Every section after it
  should feel calm and easy to scan.

MOTION — treat as light seasoning, not the main event
- Use at most ONE animation type per section: a simple fade-up on scroll for text/
  cards is enough. Do not combine parallax + tilt + glow + particles + counters all
  at once anywhere on the page.
- Service cards: a subtle hover lift (slight shadow increase) is enough — no 3D
  tilt, no glowing edges, no icon flourish animations.
- Stats numbers may count up once when scrolled into view — nothing else in that
  section should animate at the same time.
- No auto-playing carousels with motion blur, no floating/drifting decorative
  elements, no cursor-follow parallax anywhere outside the hero.
- No competing animations should ever run at the same time on screen. If in doubt,
  remove an animation rather than add one.

TECH DIRECTION (if implementing in code)
- React + Tailwind CSS.
- Framer Motion (or plain CSS transitions) for the light scroll-fade effects —
  avoid heavy Three.js/WebGL scenes; this is a content-first corporate site, not
  an interactive 3D experience.
- Fully responsive; on mobile, disable non-essential animation entirely and keep
  the video hero as a static fallback image if performance is a concern.

TONE
- Credible, professional, government-and-industry-facing. Should look like a
  serious ISO-certified engineering company — closer to a well-designed
  infrastructure/utility company site than a startup or design-agency site.
- No stock people photos, no generic clipart, no sci-fi styling, no visual clutter.
  When in doubt, choose the simpler, calmer option.


Notes

Replace the "attached separately" line in the hero section with the actual video file/link once you upload it to your chosen tool.

Agar chaos ab bhi aaye to sabse pehle yeh check karna: kitne animation types ek hi screen pe ek saath chal rahe hain — usually issue yahi hota hai, na ki color ya layout.

Chaho to main page-by-page content outline (headings + body copy) bhi likh sakta hoon extracted info se — bata dena.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://orbit-stream-forge.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/621ccb5e-accd-43aa-bfc6-3c55b8a1a212).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
