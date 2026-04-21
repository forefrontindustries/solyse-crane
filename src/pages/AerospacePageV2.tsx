import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

function useReveal(threshold = 0.08) {
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

const cn = (...c: (string | boolean | undefined)[]) => c.filter(Boolean).join(" ")

export function AerospacePageV2() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      {/* Breadcrumb */}
      <div className="bg-[#f4f6f9] pt-[120px] lg:pt-[140px] pb-0">
        <div className="px-6 lg:px-12 pb-5">
          <nav className="flex items-center gap-2 text-[12px] text-muted-foreground">
            <Link to="/v2" className="hover:text-foreground transition-colors">Home</Link>
            <span className="opacity-40">/</span>
            <Link to="/industries" className="hover:text-foreground transition-colors">Industries</Link>
            <span className="opacity-40">/</span>
            <span className="text-foreground font-medium">Aerospace & Defense</span>
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

/* ─────────────────────────────────────────────
   1. HERO — keep headline + visual, add CTAs + proof strip
   ───────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative bg-foreground overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1200&q=80&auto=format"
          alt="Aerospace & Defense"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>
      <div className="relative px-6 lg:px-12 py-20 lg:py-28">
        <div className="max-w-[640px]">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-[26px] h-[2px] bg-secondary rounded-sm" />
            <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary">
              Aerospace & Defense Logistics
            </span>
          </div>
          <h1 className="font-display font-extrabold text-[clamp(32px,5vw,56px)] leading-[1.06] text-white tracking-tight">
            Mission-Critical Logistics{"\n"}for Aerospace
          </h1>
          <p className="text-[16px] text-white/60 leading-[1.8] mt-5 max-w-[480px]">
            From AOG response to MRO supply chains, we deliver precision logistics for the world's most demanding industry.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-secondary text-white font-semibold text-sm px-7 py-3.5 rounded-lg hover:brightness-110 transition-all"
            >
              Talk to an Aerospace Expert
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-white/20 transition-all border border-white/15"
            >
              Request a Quote
            </a>
          </div>

          {/* Proof strip */}
          <div className="flex flex-wrap items-center gap-5 mt-8 pt-6 border-t border-white/10">
            {[
              { icon: "🔒", label: "ITAR Compliant" },
              { icon: "⚡", label: "24/7 AOG Response" },
              { icon: "🌍", label: "Global Coverage" },
            ].map((p) => (
              <div key={p.label} className="flex items-center gap-2">
                <span className="text-[14px]">{p.icon}</span>
                <span className="text-[12px] font-semibold text-white/70 tracking-wide uppercase">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   2. CHALLENGES — retitled, icons, signal bullets
   ───────────────────────────────────────────── */
function ChallengesSection() {
  const { ref, visible } = useReveal()

  const challenges = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "AOG Downtime Costs",
      body: "Aircraft on Ground (AOG) events require immediate response to avoid costly downtime.",
      signals: ["24/7 response capability", "Time-critical global routing"],
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Regulatory Compliance",
      body: "Strict export controls and compliance requirements introduce operational risk.",
      signals: ["ITAR / EAR aligned processes", "Certified handling across global shipments"],
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="3" /><line x1="12" y1="8" x2="12" y2="14" /><circle cx="5" cy="19" r="3" /><circle cx="19" cy="19" r="3" /><line x1="12" y1="14" x2="5" y2="16" /><line x1="12" y1="14" x2="19" y2="16" />
        </svg>
      ),
      title: "Global MRO Supply",
      body: "Managing global MRO (Maintenance, Repair, and Overhaul) supply chains creates delays and inefficiencies.",
      signals: ["Integrated inventory + transport", "Multi-location coordination"],
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      title: "Visibility Gaps",
      body: "Limited shipment visibility increases risk across critical aerospace operations.",
      signals: ["Real-time tracking & alerts", "Predictive delay insights"],
    },
  ]

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 px-6 lg:px-12 bg-white">
      <div className={cn("mb-14 transition-all duration-700", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-[26px] h-[2px] bg-secondary rounded-sm" />
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary">
            Aerospace Logistics Risks
          </span>
        </div>
        <h2 className="font-display font-extrabold text-[clamp(28px,3.8vw,46px)] leading-[1.08] text-foreground tracking-tight">
          Where Aerospace Supply Chains<br />Break Down
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {challenges.map((c, i) => (
          <div
            key={c.title}
            className={cn(
              "group relative bg-[#f4f6f9] rounded-xl p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(11,37,69,0.08)]",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {/* Top accent */}
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-secondary/30 rounded-b group-hover:bg-secondary transition-colors duration-300" />

            {/* Icon */}
            <div className="w-11 h-11 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
              {c.icon}
            </div>

            <h3 className="font-display font-bold text-[18px] text-foreground mb-2 group-hover:text-secondary transition-colors">
              {c.title}
            </h3>
            <p className="text-[14px] text-muted-foreground leading-[1.7] mb-4">
              {c.body}
            </p>

            {/* Signal bullets */}
            <ul className="space-y-1.5">
              {c.signals.map((s) => (
                <li key={s} className="flex items-center gap-2.5 text-[13px] text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   3. SERVICES — reordered by urgency, outcome lines added
   ───────────────────────────────────────────── */
function ServicesSection() {
  const { ref, visible } = useReveal()

  const services = [
    {
      name: "Time Critical",
      bullets: ["NFO, OBC, charter for AOG situations", "24/7 AOG desk", "2-hour response SLA"],
      outcome: "Reduce aircraft downtime and restore operations faster",
      href: "/solutions/time-critical",
    },
    {
      name: "Air Freight",
      bullets: ["Priority routing, dangerous goods handling", "DG certified handling", "ITAR compliant"],
      outcome: "Ensure fast, reliable delivery for critical aerospace shipments",
      href: "/solutions/air-freight",
    },
    {
      name: "Project Logistics",
      bullets: ["Engine stands, assemblies, heavy-lift", "Heavy-lift coordination", "Multi-modal planning"],
      outcome: "Safely manage complex, oversized aerospace transport",
      href: "/solutions/project-logistics",
    },
    {
      name: "Customs Brokerage",
      bullets: ["ITAR/EAR compliance, trade advisory", "Licensed brokers", "C-TPAT certified"],
      outcome: "Eliminate delays and ensure regulatory compliance",
      href: "/solutions/customs-brokerage",
    },
  ]

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 px-6 lg:px-12 bg-[#f4f6f9]">
      <div className={cn("mb-14 transition-all duration-700", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-[26px] h-[2px] bg-secondary rounded-sm" />
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary">
            Our Solutions for Aerospace
          </span>
        </div>
        <h2 className="font-display font-extrabold text-[clamp(28px,3.8vw,46px)] leading-[1.08] text-foreground tracking-tight">
          Services Built for<br />Your Requirements
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <Link
            key={s.name}
            to={s.href}
            className={cn(
              "group bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(11,37,69,0.08)]",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {/* Green header */}
            <div className="bg-secondary px-6 py-3.5">
              <span className="text-white font-display font-bold text-[15px]">{s.name}</span>
            </div>

            <div className="p-6 flex flex-col h-[calc(100%-48px)]">
              <ul className="space-y-2.5 flex-1">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[13px] text-muted-foreground leading-[1.5]">
                    <span className="w-1 h-1 rounded-full bg-secondary mt-[7px] flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Outcome line */}
              <div className="mt-5 pt-4 border-t border-border/50">
                <p className="text-[13px] text-foreground/70 leading-[1.5] italic">
                  → {s.outcome}
                </p>
              </div>

              <div className="text-[13px] font-semibold text-secondary flex items-center gap-1.5 mt-4 group-hover:gap-2.5 transition-all">
                Learn More →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   4. WHY CRANE — NEW SECTION (biggest gap from feedback)
   ───────────────────────────────────────────── */
function WhyCraneSection() {
  const { ref, visible } = useReveal()

  const reasons = [
    {
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20l9.5-9.5M6.5 17.5L2 22" /><path d="M15 4l5 5-7 7-5-5z" /><path d="M22 2l-5.5 5.5" />
        </svg>
      ),
      title: "Aerospace Expertise",
      body: "Specialists who understand AOG response, MRO operations, and compliance requirements.",
    },
    {
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: "Global Network",
      body: "Coverage across major aerospace hubs and international supply chains.",
    },
    {
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />
        </svg>
      ),
      title: "Regulatory Leadership",
      body: "Deep experience with ITAR, export controls, and hazardous materials.",
    },
    {
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: "Operational Visibility",
      body: "Real-time tracking and proactive monitoring across every shipment.",
    },
  ]

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 px-6 lg:px-12 bg-white">
      <div className={cn("mb-14 transition-all duration-700", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-[26px] h-[2px] bg-secondary rounded-sm" />
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary">
            The Crane Difference
          </span>
        </div>
        <h2 className="font-display font-extrabold text-[clamp(28px,3.8vw,46px)] leading-[1.08] text-foreground tracking-tight">
          Why Aerospace Leaders<br />Choose Crane
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <div
            key={r.title}
            className={cn(
              "group relative transition-all duration-500",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {/* Left accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-secondary/20 rounded-full group-hover:bg-secondary transition-colors duration-300" />

            <div className="pl-6">
              <div className="text-secondary mb-4">{r.icon}</div>
              <h3 className="font-display font-bold text-[17px] text-foreground mb-2">{r.title}</h3>
              <p className="text-[14px] text-muted-foreground leading-[1.7]">{r.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   5. C-VIEW — repositioned, reframed as integrated
   ───────────────────────────────────────────── */
function CViewSection() {
  const { ref, visible } = useReveal()

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="px-6 lg:px-12 py-16 bg-white">
      <div
        className={cn(
          "bg-foreground rounded-2xl px-8 lg:px-12 py-10 flex flex-col lg:flex-row items-center justify-between gap-8 transition-all duration-700",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}
      >
          <div className="flex-1">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-white/40">
                Powered by Technology
              </span>
            </div>
            <h3 className="font-display font-bold text-[20px] lg:text-[24px] text-white leading-[1.25] mb-3">
              Real-Time Visibility Across Aerospace Shipments
            </h3>
            <p className="text-[14px] text-white/50 leading-[1.7] max-w-[520px]">
              Track critical shipments, anticipate delays, and maintain compliance with real-time monitoring and alerts.
            </p>
          </div>
          <a
            href="#"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-secondary text-white font-semibold text-sm px-7 py-3.5 rounded-lg hover:brightness-110 transition-all"
          >
            Explore Visibility Tools →
          </a>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   6. CASE STUDIES — outcome meaning added
   ───────────────────────────────────────────── */
function CaseStudiesSection() {
  const { ref, visible } = useReveal()

  const studies = [
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
      title: "Engine Mfr: Heavy-Lift to Remote Facility",
      outcome: "Delivered oversized cargo with zero incidents on compressed timeline",
      metrics: [{ label: "Weight", value: "47 tons" }, { label: "Incidents", value: "0" }],
    },
  ]

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 px-6 lg:px-12 bg-[#f4f6f9]">
      <div className={cn("mb-14 transition-all duration-700", visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-[26px] h-[2px] bg-secondary rounded-sm" />
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary">
            Proven Results
          </span>
        </div>
        <h2 className="font-display font-extrabold text-[clamp(28px,3.8vw,46px)] leading-[1.08] text-foreground tracking-tight">
          Aerospace & Defense Case Studies
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {studies.map((cs, i) => (
          <a
            key={cs.title}
            href="#"
            className={cn(
              "group bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(11,37,69,0.08)]",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {/* Image */}
            <div className="h-[180px] bg-foreground/5 overflow-hidden">
              <img
                src={cs.image}
                alt={cs.title}
                className="w-full h-full object-cover opacity-90 group-hover:scale-[1.03] transition-transform duration-400"
              />
            </div>

            <div className="p-6">
              <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-secondary">
                {cs.tag}
              </span>
              <h4 className="font-display font-bold text-[15px] text-foreground leading-[1.3] mt-2 mb-2 group-hover:text-secondary transition-colors">
                {cs.title}
              </h4>

              {/* Outcome line */}
              <p className="text-[13px] text-muted-foreground leading-[1.5] mb-4 italic">
                → {cs.outcome}
              </p>

              {/* Metrics */}
              <div className="flex gap-6 pt-4 border-t border-border/50">
                {cs.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-display font-extrabold text-[22px] text-foreground leading-none">{m.value}</div>
                    <div className="text-[11px] text-muted-foreground/60 uppercase tracking-wide mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   7. FINAL CTA — tightened headline
   ───────────────────────────────────────────── */
function FinalCTA() {
  const { ref, visible } = useReveal()

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-foreground">
      <div
        className={cn(
          "bg-secondary px-8 lg:px-12 py-12 lg:py-14 flex flex-col lg:flex-row items-center justify-between gap-6 transition-all duration-700",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}
      >
        <div>
          <h3 className="font-display font-bold text-[24px] text-white leading-[1.25] mb-1.5">
            Strengthen Your Aerospace Supply Chain
          </h3>
          <p className="text-[14px] text-white/70">Connect with our aerospace logistics specialists — they speak your language.</p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white text-foreground font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-white/90 transition-all"
          >
            Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  )
}
