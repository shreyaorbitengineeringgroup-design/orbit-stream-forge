import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Droplets,
  Recycle,
  Filter,
  Factory,
  Monitor,
  Cpu,
  Radio,
  Gauge,
  Sun,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
} from "lucide-react";
import heroPoster from "../assets/hero-poster.jpg";
import heroVideo from "../assets/hero-video.mp4.asset.json";
import waterTreatmentProject from "../assets/water-treatment-project.jpg";
import scadaControlRoom from "../assets/scada-control-room.jpg";
import solarUtilityProject from "../assets/solar-utility-project.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orbit Engineering Solutions — Water Treatment & Automation, Bhopal" },
      {
        name: "description",
        content:
          "India's leading water treatment & automation company since 1998. WTP, STP, RO, ETP, SCADA, PLC automation, IoT monitoring & solar. Triple ISO certified, ₹200+ Cr portfolio.",
      },
      { property: "og:title", content: "Orbit Engineering Solutions — Water Treatment & Automation" },
      {
        property: "og:description",
        content:
          "Triple ISO certified water treatment & automation engineering company from Bhopal, serving government and industry since 1998.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------------- Reveal: the single scroll-fade pattern ---------------- */

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

/* ---------------- Count-up stat ---------------- */

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        obs.disconnect();
        const duration = 1200;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref}>
      <div className="font-heading text-3xl font-bold text-primary sm:text-4xl">
        {value === 1998 ? value : `${display}${suffix}`}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

/* ---------------- Data ---------------- */

const services = [
  { icon: Droplets, title: "Water Treatment Plants", desc: "Design, build & commission of municipal and industrial WTPs." },
  { icon: Recycle, title: "Sewage Treatment Plants", desc: "STPs with SBR, MBBR and conventional technologies." },
  { icon: Filter, title: "Reverse Osmosis", desc: "Industrial & drinking-water RO systems of any capacity." },
  { icon: Factory, title: "Effluent Treatment Plants", desc: "ETPs engineered for pharma, distillery & process industries." },
  { icon: Monitor, title: "SCADA Systems", desc: "Centralised plant supervision, control and data acquisition." },
  { icon: Cpu, title: "PLC Automation", desc: "Panel design, PLC programming and process automation." },
  { icon: Radio, title: "IoT Monitoring", desc: "Remote, real-time monitoring of water assets and networks." },
  { icon: Gauge, title: "Instrumentation", desc: "Flow, level, pressure and quality instrumentation & calibration." },
  { icon: Sun, title: "Solar Energy", desc: "Solar power solutions for plants, campuses and utilities." },
];

const clients = [
  "MP Jal Nigam",
  "MPUDCL",
  "Bhopal Municipal Corporation",
  "Indore District Administration",
  "Tikamgarh Nagar Parishad",
  "WRD Bhopal",
  "Prism Cement",
  "Lupin Pharmaceuticals",
  "Vindhyachal Distillery",
  "Dilip Buildcon",
  "L&T",
  "BHEL",
  "Indian Railways",
];

const certifications = [
  { code: "ISO 9001:2015", label: "Quality Management" },
  { code: "ISO 14001:2015", label: "Environmental Management" },
  { code: "ISO 45001:2018", label: "Occupational Health & Safety" },
];

const projectViews = [
  {
    image: waterTreatmentProject,
    title: "Water, engineered at scale",
    label: "Treatment infrastructure",
    className: "lg:col-span-2",
  },
  {
    image: scadaControlRoom,
    title: "Every process in view",
    label: "SCADA & automation",
    className: "",
  },
  {
    image: solarUtilityProject,
    title: "Efficiency beyond the plant",
    label: "Solar utility systems",
    className: "",
  },
];

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Clients", href: "#clients" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

/* ---------------- Page ---------------- */

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
              <Droplets className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="font-heading text-lg font-bold leading-tight tracking-tight">
              Orbit Engineering
              <span className="block text-xs font-medium text-muted-foreground">Solutions</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-border bg-background px-4 py-3 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero — the one bold section */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo.url}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative mx-auto grid w-full max-w-6xl items-end gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_0.72fr]">
          <div className="max-w-2xl animate-fade-in">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Since 1998 · Bhopal, India
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              India's Leading Water Treatment &amp; Automation Company
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Engineering clean water and intelligent automation for government
              and industry — triple ISO certified, with a ₹200+ Cr project portfolio.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Discuss Your Project
            </a>
          </div>
          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-lg border border-primary-foreground/30 bg-background/20 shadow-xl backdrop-blur-sm">
              <img
                src={waterTreatmentProject}
                alt="Circular water treatment basins at a modern plant"
                width={1600}
                height={1008}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="flex items-center justify-between gap-4 border-t border-primary-foreground/20 bg-background/90 px-5 py-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Featured capability</p>
                  <p className="mt-1 font-heading text-lg font-semibold">Water systems that perform</p>
                </div>
                <span className="font-heading text-2xl font-bold text-primary">01</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / stats */}
      <section id="about" className="border-b border-border bg-background py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight">
              About Orbit Engineering Solutions
            </h2>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              Founded in 1998 and headquartered in Bhopal, Madhya Pradesh, Orbit
              Engineering Solutions (formerly Orbit Engineering Group) delivers
              end-to-end water treatment and automation infrastructure — from
              municipal water and sewage treatment to SCADA-driven industrial
              automation — for government bodies and India's leading industries.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-8 border-t border-border pt-10 sm:grid-cols-3">
            <Stat value={1998} suffix="" label="Established & operating since" />
            <Stat value={3} suffix="×" label="ISO certified — 9001, 14001, 45001" />
            <Stat value={200} suffix="+ Cr" label="Project portfolio value (₹)" />
          </div>
        </div>
      </section>

      {/* Project views */}
      <section className="border-b border-border bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Inside the work</p>
                <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight">Infrastructure with a point of view</h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                From the treatment basin to the control room, every detail is designed for dependable operation.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            {projectViews.map((project, index) => (
              <Reveal key={project.title} className={project.className}>
                <article className={`group relative h-full min-h-[280px] overflow-hidden rounded-lg bg-card ${index === 0 ? "lg:row-span-2" : ""}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    width={index === 0 ? 1600 : 1200}
                    height={index === 0 ? 1008 : 912}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/45 transition-colors duration-300 group-hover:bg-foreground/35" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/75">{project.label}</p>
                    <h3 className="mt-2 max-w-xs font-heading text-xl font-semibold leading-tight">{project.title}</h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight">Our Services</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Complete water treatment, automation and energy capabilities under one roof.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Reveal key={s.title}>
                <div className="h-full rounded-lg border border-border bg-card p-6 transition-shadow duration-200 hover:shadow-md">
                  <s.icon className="h-7 w-7 text-primary" />
                  <h3 className="mt-4 font-heading text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight">Trusted By</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Government utilities, municipal bodies and industrial leaders across India.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((c) => (
              <div
                key={c}
                className="flex items-center justify-center bg-card px-4 py-6 text-center text-sm font-medium text-secondary-foreground"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="border-y border-border bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold tracking-tight">Certifications</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Triple ISO certified — quality, environment and safety built into every project.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {certifications.map((c) => (
              <Reveal key={c.code}>
                <div className="flex h-full items-center gap-4 rounded-lg border border-border bg-card p-6">
                  <ShieldCheck className="h-9 w-9 shrink-0 text-primary" />
                  <div>
                    <div className="font-heading text-lg font-semibold">{c.code}</div>
                    <div className="text-sm text-muted-foreground">{c.label}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight">
                Let's Build Your Next Project
              </h2>
              <p className="mt-4 text-muted-foreground">
                Planning a water treatment plant, automation upgrade or solar
                installation? Our engineering team in Bhopal is ready to help.
              </p>
              <a
                href="mailto:info@orbitengineerings.com"
                className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Contact Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/50 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:grid-cols-3 sm:px-6">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
                <Droplets className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="font-heading text-lg font-bold leading-tight">
                Orbit Engineering
                <span className="block text-xs font-medium text-muted-foreground">Solutions</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              India's leading water treatment &amp; automation company since 1998.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <nav className="mt-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-muted-foreground hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Bhopal, Madhya Pradesh, India
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                info@orbitengineerings.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                +91 755 000 0000
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl border-t border-border px-4 pt-6 text-center text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} Orbit Engineering Solutions. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
