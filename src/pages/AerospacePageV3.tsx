import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

const cn = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(" ")

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

/* ════════════════════════════════════════
   MAIN PAGE
   ════════════════════════════════════════ */

export function AerospacePageV3() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-[#f4f6f9] pt-[120px] lg:pt-[140px] pb-0">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12 pb-5">
          <nav className="flex items-center gap-2 text-[12px] text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span className="opacity-40">/</span>
            <Link to="/industries" className="hover:text-foreground transition-colors">Industries</Link>
            <span className="opacity-40">/</span>
            <span className="text-foreground font-medium">Aerospace &amp; Defense</span>
          </nav>
        </div>
      </div>

      <HeroSection />
      <ChallengesSection />
      <ServicesSection />
      <WhyCraneSection />
      <CViewSection />
      <CaseStudiesSection />
      <FinalCTA />

      <Footer />
    </div>
  )
}

/* ════════════════════════════════════════
   HERO
   ════════════════════════════════════════ */

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => { setIsVisible(true) }, [])

  return (
    <section className="relative bg-foreground overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2FJHzTiY2Fn5f0m32UzPGBf%2Fcrane-worldwide-logistics-aerospace-warehouse_5.jpg"
          alt="Aerospace logistics"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="relative max-w-[90rem] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="max-w-[600px]">
          <div className={cn("flex items-center gap-2.5 mb-4 transition-all duration-500", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
            <span className="w-[26px] h-[2px] bg-secondary rounded-sm" />
            <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary">
              Aerospace &amp; Defense Logistics
            </span>
          </div>
          <h1 className={cn("font-display font-extrabold text-[clamp(32px,5vw,56px)] leading-[1.06] text-white tracking-tight transition-all duration-700 delay-100", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
            Mission-Critical Logistics{"\n"}for Aerospace
          </h1>
          <p className={cn("text-[16px] text-white/60 leading-[1.8] mt-5 max-w-[480px] transition-all duration-700 delay-200", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
            From AOG response to MRO supply chains, we deliver precision logistics for the world's most demanding industry.
          </p>

          {/* CTAs */}
          <div className={cn("flex flex-wrap items-center gap-4 mt-8 transition-all duration-700 delay-300", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
            <a href="#cta" className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold px-7 py-3 text-[15px] rounded-lg transition-all group shadow-lg shadow-secondary/25">
              Talk to an Aerospace Expert
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
            <a href="#cta" className="text-[14px] text-white/50 hover:text-white/80 transition-colors underline underline-offset-2">
              Request a Quote
            </a>
          </div>
        </div>

        {/* Proof strip */}
        <div className={cn("flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10 transition-all duration-700 delay-400", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
          {[
            { label: "ITAR Compliant", icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
            { label: "24/7 AOG Response", icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> },
            { label: "Global Coverage", icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" /></svg> },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-white/40">
              <span className="text-secondary">{item.icon}</span>
              <span className="text-[13px] font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════
   CHALLENGES
   ════════════════════════════════════════ */

const challenges = [
  {
    title: "AOG Downtime Costs",
    body: "Aircraft on Ground (AOG) events require immediate response to avoid costly downtime.",
    bullets: ["24/7 response capability", "Time-critical global routing"],
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
  },
  {
    title: "Regulatory Compliance",
    body: "Strict export controls and compliance requirements introduce operational risk.",
    bullets: ["ITAR / EAR aligned processes", "Certified handling across global shipments"],
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  },
  {
    title: "Global MRO Supply",
    body: "Managing global MRO (Maintenance, Repair, and Overhaul) supply chains creates delays and inefficiencies.",
    bullets: ["Integrated inventory + transport", "Multi-location coordination"],
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" /></svg>,
  },
  {
    title: "Visibility Gaps",
    body: "Limited shipment visibility increases risk across critical aerospace operations.",
    bullets: ["Real-time tracking & alerts", "Predictive delay insights"],
    icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>,
  },
]

function ChallengesSection() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        <div className={cn("mb-14 transition-all duration-700", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary block mb-3">
            Aerospace Logistics Risks
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Where Aerospace Supply Chains Break Down
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((c, i) => (
            <div
              key={c.title}
              className={cn(
                "group relative bg-[#f8f9fb] rounded-xl p-7 lg:p-8 border border-slate-200 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0 mt-0.5">
                  {c.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {c.body}
                  </p>
                  <ul className="space-y-1.5">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════
   SERVICES (ordered by urgency)
   ════════════════════════════════════════ */

const services = [
  {
    name: "Time Critical",
    bullets: ["NFO, OBC, charter for AOG situations", "24/7 AOG desk", "2-hour response SLA"],
    outcome: "Reduce aircraft downtime and restore operations faster",
  },
  {
    name: "Air Freight",
    bullets: ["Priority routing, dangerous goods handling", "DG certified handling", "ITAR compliant"],
    outcome: "Ensure fast, reliable delivery for critical aerospace shipments",
  },
  {
    name: "Project Logistics",
    bullets: ["Engine stands, assemblies, heavy-lift", "Heavy-lift coordination", "Multi-modal planning"],
    outcome: "Safely manage complex, oversized aerospace transport",
  },
  {
    name: "Customs Brokerage",
    bullets: ["ITAR/EAR compliance, trade advisory", "Licensed brokers", "C-TPAT certified"],
    outcome: "Eliminate delays and ensure regulatory compliance",
  },
]

function ServicesSection() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="py-24 bg-[#f4f6f9]">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        <div className={cn("mb-14 transition-all duration-700", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary block mb-3">
            Our Solutions for Aerospace
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Services Built for Your Requirements
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <a
              key={s.name}
              href="#"
              className={cn(
                "group bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Green header bar */}
              <div className="bg-secondary px-6 py-3.5">
                <span className="text-white font-bold text-[15px]">{s.name}</span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <ul className="space-y-2.5 flex-1">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[13px] text-muted-foreground leading-[1.5]">
                      <span className="w-1 h-1 rounded-full bg-secondary mt-[7px] flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Outcome line */}
                <p className="text-[13px] text-foreground/70 font-medium mt-5 pt-4 border-t border-slate-100 leading-snug">
                  → {s.outcome}
                </p>

                <div className="text-[13px] font-semibold text-secondary flex items-center gap-1.5 mt-4 group-hover:gap-2.5 transition-all">
                  Learn More →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════
   WHY CRANE (NEW)
   ════════════════════════════════════════ */

const whyCranePillars = [
  {
    title: "Aerospace Expertise",
    description: "Specialists who understand AOG response, MRO operations, and compliance requirements.",
    icon: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>,
  },
  {
    title: "Global Network",
    description: "Coverage across major aerospace hubs and international supply chains.",
    icon: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" /></svg>,
  },
  {
    title: "Regulatory Leadership",
    description: "Deep experience with ITAR, export controls, and hazardous materials.",
    icon: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  },
  {
    title: "Operational Visibility",
    description: "Real-time tracking and proactive monitoring across every shipment.",
    icon: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>,
  },
]

function WhyCraneSection() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        <div className={cn("mb-14 transition-all duration-700", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Why Aerospace Leaders Choose Crane
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyCranePillars.map((p, i) => (
            <div
              key={p.title}
              className={cn(
                "group rounded-xl border border-slate-200 bg-[#f8f9fb] p-7 flex flex-col transition-all duration-500 hover:bg-white hover:shadow-lg hover:border-slate-300 hover:-translate-y-1",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${150 + i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════
   C-VIEW (repositioned)
   ════════════════════════════════════════ */

function CViewSection() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="px-6 lg:px-12 py-16 bg-white">
      <div className="max-w-[90rem] mx-auto">
        <div
          className={cn("bg-foreground rounded-2xl px-8 lg:px-12 py-8 flex flex-col lg:flex-row items-center justify-between gap-6 transition-all duration-700", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}
        >
          <div className="flex-1">
            <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-white/40 block mb-2.5">
              C-View Platform
            </span>
            <h3 className="font-bold text-[20px] lg:text-[22px] text-white leading-[1.25] mb-2">
              Real-Time Visibility Across Aerospace Shipments
            </h3>
            <p className="text-[14px] text-white/50 leading-[1.7] max-w-[520px]">
              Track critical shipments, anticipate delays, and maintain compliance with real-time monitoring and alerts.
            </p>
          </div>
          <a
            href="#"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-secondary text-white font-semibold text-sm px-6 py-3 rounded-lg hover:brightness-110 transition-all"
          >
            Explore Visibility Tools →
          </a>
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════
   CASE STUDIES
   ════════════════════════════════════════ */

const caseStudies = [
  {
    image: "https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2F3SM8OEHD-B3MioM-b2hjX%2Faerospace-logistics-aog-aircraft-maintenance-cargo_5.jpg",
    tag: "AOG Response",
    title: "Major Airline: 4-Hour AOG Part Delivery Across 3 Continents",
    outcome: "Prevented extended aircraft downtime with coordinated global response",
    metrics: [{ label: "Response", value: "4hrs" }, { label: "Value", value: "$2.4M" }],
  },
  {
    image: "https://images.unsplash.com/photo-1559297434-fae8a1916a79?w=600&q=80&auto=format",
    tag: "MRO Supply Chain",
    title: "Defense Contractor: Global MRO Parts Distribution",
    outcome: "Improved availability and reduced delays across global operations",
    metrics: [{ label: "On-time", value: "99.7%" }, { label: "Cost Reduction", value: "32%" }],
  },
  {
    image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=600&q=80&auto=format",
    tag: "Project Cargo",
    title: "Engine Manufacturer: Heavy-Lift to Remote Facility",
    outcome: "Zero-damage delivery of high-value aerospace components on tight timelines",
    metrics: [{ label: "Weight", value: "18T" }, { label: "Transit", value: "72hrs" }],
  },
]

function CaseStudiesSection() {
  const { ref, visible } = useReveal()
  return (
    <section ref={ref} className="py-24 bg-[#f4f6f9]">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        <div className={cn("mb-14 transition-all duration-700", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary block mb-3">
            Proven Results
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Aerospace &amp; Defense Case Studies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <a
              key={cs.title}
              href="#"
              className={cn(
                "group bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="h-[180px] overflow-hidden">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-400"
                />
              </div>

              <div className="p-6">
                <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-secondary">
                  {cs.tag}
                </span>
                <h4 className="font-bold text-[15px] text-foreground leading-[1.3] mt-2 mb-2 group-hover:text-secondary transition-colors">
                  {cs.title}
                </h4>
                <p className="text-[13px] text-muted-foreground leading-snug mb-4">
                  → {cs.outcome}
                </p>

                <div className="flex gap-6 pt-4 border-t border-slate-100">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-extrabold text-[22px] text-foreground leading-none">{m.value}</div>
                      <div className="text-[11px] text-muted-foreground/60 uppercase tracking-wide mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ════════════════════════════════════════
   FINAL CTA
   ════════════════════════════════════════ */

function FinalCTA() {
  const { ref, visible } = useReveal()
  const [showForm, setShowForm] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  return (
    <section ref={ref} id="cta" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ctaGridAero" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctaGridAero)" />
        </svg>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4", "transition-all duration-500")}>
            Strengthen Your Aerospace Supply Chain
          </h2>
          <p className={cn("text-lg text-primary-foreground/60 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-500 delay-100", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
            Connect with our aerospace logistics specialists today.
          </p>

          <div className={cn("flex flex-col sm:flex-row gap-4 justify-center mb-8 transition-all duration-500 delay-200", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
            <button
              onClick={() => { setShowForm(true); setSubmitted(false) }}
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 h-14 text-base rounded-lg transition-colors cursor-pointer group"
            >
              Talk to an Expert
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </button>
          </div>

          <div className={cn("transition-all duration-500 delay-300", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
            <a href="tel:+1-888-870-2726" className="inline-flex items-center gap-2 text-primary-foreground/50 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span className="text-sm font-medium">+1 888-870-2726</span>
            </a>
          </div>

          {/* Contact Form */}
          {showForm && (
            <div className="mt-12 pt-10 border-t border-white/10 animate-fade-in">
              {submitted ? (
                <div className="py-8">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">We'll be in touch</h3>
                  <p className="text-primary-foreground/60">An aerospace logistics specialist will reach out within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="max-w-xl mx-auto space-y-4 text-left">
                  <h3 className="text-lg font-bold text-white text-center mb-6">Talk to an Aerospace Expert</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" required placeholder="Name *" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors" />
                    <input type="email" required placeholder="Email *" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors" />
                  </div>
                  <textarea required rows={3} placeholder="How can we help? *" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors resize-none" />

                  {!showMore ? (
                    <button type="button" onClick={() => setShowMore(true)} className="text-sm text-white/40 hover:text-white/70 transition-colors cursor-pointer">
                      + Add company &amp; industry details (optional)
                    </button>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
                      <input type="text" placeholder="Company" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors" />
                      <input type="text" placeholder="Role / Title" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors" />
                    </div>
                  )}

                  <button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-3.5 rounded-lg transition-colors cursor-pointer">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
