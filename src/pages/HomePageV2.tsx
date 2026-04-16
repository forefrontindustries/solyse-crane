import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

const cn = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(" ")

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

/* ═══════════════════════════════════════════
   HOMEPAGE V2 — Conversion Funnel
   ═══════════════════════════════════════════ */

export function HomePageV2() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <HeroV2 />
      <UtilityRow />
      <IndustryEntry />
      <ProofStats />
      <HowWeDeliver />
      <TechnologyV2 />
      <WhyCrane />
      <MetricsV2 />
      <InsightsV2 />
      <FinalCTA />
      <Footer />
    </div>
  )
}

/* ─── 1. HERO ─── */
function HeroV2() {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => { setIsVisible(true) }, [])

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop')` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.92] via-primary/80 to-primary/65" />
      </div>

      <div className="absolute inset-0 z-[1] opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 pt-32 md:pt-40 pb-16 md:pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Card — anchored, tight padding, high contrast */}
          <div className={cn(
            "bg-white/[0.09] backdrop-blur-xl border border-white/[0.14] rounded-2xl p-7 md:p-10 shadow-2xl shadow-black/25 w-full lg:w-[50%] transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <h1 className={cn(
              "text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.12] mb-4 font-display transition-all duration-700 delay-150",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              When your supply chain can't fail,{" "}
              <span className="text-secondary">we deliver.</span>
            </h1>

            <p className={cn(
              "text-[15px] md:text-base text-white/60 max-w-md leading-relaxed mb-7 transition-all duration-700 delay-250",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )} style={{ transitionDelay: "250ms" }}>
              Through hands-on expertise, real-time visibility, and proactive communication across every shipment.
            </p>

            {/* CTA */}
            <div className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")} style={{ transitionDelay: "350ms" }}>
              <Link to="/industries" className="inline-flex items-center gap-2.5 bg-secondary hover:bg-secondary/90 text-white font-semibold px-7 py-3 text-[15px] rounded-lg transition-all group shadow-lg shadow-secondary/25">
                Find Your Solution
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <div className="mt-3">
                <a href="#final-cta" className="text-[13px] text-white/45 hover:text-white/70 transition-colors">
                  Prefer to talk? <span className="underline underline-offset-2">Connect with an expert →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── 2. UTILITY ROW ─── */
function UtilityRow() {
  const utils = [
    { label: "Track Shipment", href: "https://webtracker.craneww.com/", icon: <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" /></svg> },
    { label: "Get a Quote", href: "#final-cta", icon: <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12h6M12 9v6" /><rect x="3" y="3" width="18" height="18" rx="2" /></svg> },
    { label: "C-View Portal", href: "https://cview.craneww.com/", icon: <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="14" rx="2" /><path d="M8 20h8M12 18v2" /></svg> },
    { label: "Contact Us", href: "#final-cta", icon: <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg> },
  ]

  return (
    <div className="bg-[#f4f6f9] border-b border-[#e2e6ed]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-6 py-3 overflow-x-auto">
          <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-muted-foreground/50 flex-shrink-0">Quick actions</span>
          <div className="flex items-center gap-1">
            {utils.map((u) => (
              <a key={u.label} href={u.href} className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-[12px] font-medium text-muted-foreground hover:text-foreground hover:bg-white/60 transition-all flex-shrink-0">
                <span className="text-muted-foreground/60">{u.icon}</span>
                {u.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── 3. INDUSTRY ENTRY (PRIMARY ROUTING) ─── */
function IndustryEntry() {
  const reveal = useReveal()
  /*
    6-col grid layout (desktop):
    Row 1: [Aerospace 3col] [Automotive 2col] [Life Sciences 1col]
    Row 2: [Energy 1col]    [Hi-Tech 2col]    [Industrial 3col]
    Creates a mirrored asymmetry — visually balanced, no dead space.
  */
  const industries = [
    { name: "Aerospace & Defense", slug: "aerospace-defense", image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=900&q=80&auto=format", signals: ["Time-critical delivery", "Global compliance", "High-value cargo"], span: "lg:col-span-3" },
    { name: "Automotive", slug: "automotive", image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=900&q=80&auto=format", signals: ["JIT/JIS delivery", "Sequenced logistics", "EV supply chains"], span: "lg:col-span-2" },
    { name: "Life Sciences", slug: "healthcare", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=900&q=80&auto=format", signals: ["Cold chain", "Regulatory compliance", "End-to-end visibility"], span: "lg:col-span-1" },
    { name: "Energy", slug: "energy", image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=900&q=80&auto=format", signals: ["Heavy-lift cargo", "Offshore logistics", "Renewable energy"], span: "lg:col-span-1" },
    { name: "Hi-Tech", slug: "high-tech", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&auto=format", signals: ["Speed-to-market", "High-value security", "Data center logistics"], span: "lg:col-span-2" },
    { name: "Industrial", slug: "industrial", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&q=80&auto=format", signals: ["Heavy machinery", "Plant relocations", "Manufacturing"], span: "lg:col-span-3" },
  ]

  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className="py-20 lg:py-28 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className={cn("mb-12 transition-all duration-700", reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[3px] bg-secondary rounded-full" />
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-secondary">Industries We Serve</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="font-display text-3xl lg:text-[2.75rem] font-bold text-foreground leading-tight">Built for the world's most<br className="hidden lg:block" /> demanding supply chains</h2>
            <Link to="/industries" className="text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors whitespace-nowrap flex items-center gap-1.5 group">
              All 10 industries <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Full-width 6-col bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 auto-rows-[240px] lg:auto-rows-[280px]">
          {industries.map((ind, i) => (
            <Link
              key={ind.slug}
              to={`/industries/${ind.slug}`}
              className={cn(
                "group relative rounded-2xl overflow-hidden",
                ind.span,
                "transition-all duration-600",
                reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: reveal.visible ? `${80 + i * 90}ms` : "0ms" }}
            >
              {/* Image */}
              <img
                src={ind.image}
                alt={ind.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/5 group-hover:from-black/90 group-hover:via-black/40 transition-all duration-500" />

              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-secondary group-hover:w-full transition-all duration-500 ease-out" />

              {/* Content */}
              <div className="absolute inset-0 p-5 lg:p-7 flex flex-col justify-end">
                <h3 className="font-display font-bold text-white text-xl lg:text-2xl leading-tight mb-1">
                  {ind.name}
                </h3>

                {/* Signals — reveal on hover */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-[100px] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <div className="flex flex-wrap gap-1.5 pt-2 mb-3">
                    {ind.signals.map((s) => (
                      <span key={s} className="text-[11px] font-medium text-white/90 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="text-[13px] font-semibold text-secondary flex items-center gap-1.5">
                    Explore solutions <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── 4. PROOF STATS ─── */
function ProofStats() {
  const reveal = useReveal()
  const stats = [
    { value: "120+", label: "Global Locations" },
    { value: "4,000+", label: "Customers Served" },
    { value: "24/7", label: "Shipment Visibility" },
    { value: "99.2%", label: "On-Time Delivery" },
  ]

  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className="py-16 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={cn("grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 transition-all duration-700", reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          {stats.map((s, i) => (
            <div key={s.label} className="text-center" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2">{s.value}</div>
              <div className="text-[12px] md:text-sm text-white/40 uppercase tracking-wider font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── 5. HOW WE DELIVER ─── */
function HowWeDeliver() {
  const reveal = useReveal()
  const pillars = [
    { title: "Global Freight", desc: "Air, ocean, and multimodal solutions connecting every major trade lane worldwide.", link: "/solutions/air-freight", linkLabel: "Explore →" },
    { title: "Contract Logistics", desc: "Integrated warehousing, fulfillment, and value-added services at scale.", link: "/solutions/contract-logistics", linkLabel: "Explore →" },
    { title: "Time-Critical Solutions", desc: "Next flight out, charter, and on-board courier when every minute counts.", link: "/solutions/time-critical", linkLabel: "Explore →" },
    { title: "Project Logistics", desc: "Heavy-lift, oversized, and complex project cargo — planned and executed end-to-end.", link: "/solutions/project-logistics", linkLabel: "Explore →" },
  ]

  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className="py-20 lg:py-24 px-6 lg:px-12 bg-[#f7f9fb]">
      <div className="max-w-7xl mx-auto">
        <div className={cn("mb-10 transition-all duration-700", reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[3px] bg-secondary rounded-full" />
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-secondary">Capabilities</span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">How we deliver</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <Link
              key={p.title}
              to={p.link}
              className={cn(
                "bg-white rounded-xl p-6 border border-border/40 hover:border-secondary/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col",
                reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: reveal.visible ? `${150 + i * 80}ms` : "0ms" }}
            >
              <h3 className="font-display font-bold text-base text-foreground mb-2 group-hover:text-secondary transition-colors">{p.title}</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed flex-1 mb-4">{p.desc}</p>
              <span className="text-[13px] font-semibold text-secondary">{p.linkLabel}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── 6. TECHNOLOGY ─── */
function TechnologyV2() {
  const reveal = useReveal()
  const features = [
    { title: "Real-Time Visibility", desc: "Track every shipment with granular milestone updates." },
    { title: "Advanced Analytics", desc: "Transform supply chain data into actionable insights." },
    { title: "Process Automation", desc: "Streamline operations with intelligent automation." },
    { title: "Compliance Management", desc: "Stay ahead of regulatory requirements." },
  ]

  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className="py-20 lg:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className={cn("grid lg:grid-cols-2 gap-14 items-center transition-all duration-700", reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[3px] bg-secondary rounded-full" />
              <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-secondary">Technology</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">How we keep your shipments on track</h2>
            <p className="text-muted-foreground text-[15px] leading-relaxed mb-8 max-w-md">
              C-View powers your supply chain with real-time visibility, advanced analytics, and seamless integration with your existing systems.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((f) => (
                <div key={f.title} className="bg-[#f7f9fb] rounded-lg p-4 border border-border/30">
                  <div className="font-semibold text-[14px] text-foreground mb-1">{f.title}</div>
                  <p className="text-[12px] text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <Link to="/solutions" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors">
              See how it works
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </div>

          {/* Right — Dashboard mockup */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary/15 to-primary/15 rounded-3xl blur-2xl opacity-50" />
            <div className="relative bg-white rounded-2xl shadow-xl border border-border/50 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#f4f6f9] border-b border-border/50">
                <div className="flex gap-1.5"><span className="w-3 h-3 rounded-full bg-red-400" /><span className="w-3 h-3 rounded-full bg-yellow-400" /><span className="w-3 h-3 rounded-full bg-green-400" /></div>
                <div className="flex-1 flex justify-center"><div className="px-4 py-1 rounded-md bg-white text-xs text-muted-foreground">app.craneww.com/dashboard</div></div>
              </div>
              <div className="p-6 space-y-5">
                <div className="grid grid-cols-3 gap-3">
                  {[{ label: "In Transit", value: "247", color: "bg-secondary" }, { label: "Delivered", value: "1,892", color: "bg-primary" }, { label: "Pending", value: "56", color: "bg-amber-400" }].map((s) => (
                    <div key={s.label} className="p-4 rounded-xl bg-[#f7f9fb]">
                      <div className={cn("w-2 h-2 rounded-full mb-2", s.color)} />
                      <div className="text-2xl font-bold text-foreground">{s.value}</div>
                      <div className="text-xs text-muted-foreground">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="relative h-32 rounded-xl bg-primary/5 overflow-hidden">
                  <svg viewBox="0 0 400 130" className="absolute inset-0 w-full h-full">
                    <path d="M40,65 Q100,25 160,65 T280,55 T380,40" fill="none" stroke="rgba(46,125,79,0.2)" strokeWidth="2" />
                    <path d="M40,65 Q100,25 160,65 T280,55 T380,40" fill="none" stroke="rgba(46,125,79,0.5)" strokeWidth="2" strokeDasharray="8,6">
                      <animate attributeName="stroke-dashoffset" from="0" to="-28" dur="1.5s" repeatCount="indefinite" />
                    </path>
                    <circle cx="40" cy="65" r="4" fill="#2e7d4f"><animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite" /></circle>
                    <circle cx="160" cy="65" r="4" fill="#2e7d4f"><animate attributeName="r" values="4;7;4" dur="2s" begin="0.5s" repeatCount="indefinite" /></circle>
                    <circle cx="280" cy="55" r="4" fill="#2e7d4f"><animate attributeName="r" values="4;7;4" dur="2s" begin="1s" repeatCount="indefinite" /></circle>
                  </svg>
                  <div className="absolute bottom-2 left-2 right-2 p-2.5 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Live shipments</span>
                    <span className="font-semibold text-secondary">247 active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── 7. WHY CRANE ─── */
function WhyCrane() {
  const reveal = useReveal()
  const pillars = [
    { title: "Hands-on Expertise", desc: "Not a platform. Real people who know your freight, your lanes, and your deadlines.", link: "/solutions" },
    { title: "Global Reach", desc: "120+ locations across 6 continents — local knowledge at origin and destination.", link: "/locations" },
    { title: "Industry Specialization", desc: "Dedicated teams with decades of experience in your specific vertical.", link: "/industries" },
    { title: "Proactive Communication", desc: "You'll know before you need to ask. Real-time updates and exception alerts.", link: "/solutions/nextgen-logistics" },
  ]

  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className="py-20 lg:py-24 px-6 lg:px-12 bg-[#f7f9fb]">
      <div className="max-w-7xl mx-auto">
        <div className={cn("mb-10 transition-all duration-700", reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[3px] bg-secondary rounded-full" />
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-secondary">Differentiation</span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">Why Crane</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <Link
              key={p.title}
              to={p.link}
              className={cn(
                "bg-white rounded-xl p-6 border border-border/40 hover:border-secondary/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group",
                reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: reveal.visible ? `${150 + i * 80}ms` : "0ms" }}
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                <span className="font-display font-bold text-lg">0{i + 1}</span>
              </div>
              <h3 className="font-display font-bold text-base text-foreground mb-2 group-hover:text-secondary transition-colors">{p.title}</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{p.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── 8. METRICS ─── */
function MetricsV2() {
  const reveal = useReveal()
  const metrics = [
    { value: "99.2%", label: "On-Time Delivery", desc: "Across all modes and lanes" },
    { value: "48hr", label: "Pharma Distribution", desc: "Origin-to-shelf cycle time" },
    { value: "2.1M", label: "Sq Ft Warehousing", desc: "Managed globally" },
  ]

  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className="py-20 lg:py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className={cn("mb-12 text-center transition-all duration-700", reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-[3px] bg-secondary rounded-full" />
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-secondary">Results</span>
            <span className="w-6 h-[3px] bg-secondary rounded-full" />
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">Proof in the numbers</h2>
        </div>

        <div className={cn("grid md:grid-cols-3 gap-6 transition-all duration-700", reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="text-center p-8 rounded-xl border border-border/40 bg-white"
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="font-display text-5xl md:text-6xl font-bold text-foreground mb-2">{m.value}</div>
              <div className="font-semibold text-foreground text-sm mb-1">{m.label}</div>
              <div className="text-xs text-muted-foreground">{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── 9. INSIGHTS ─── */
function InsightsV2() {
  const reveal = useReveal()
  const posts = [
    { tag: "Market Update", title: "Q2 2026 Global Freight Rate Outlook", date: "Apr 10, 2026" },
    { tag: "Trade Advisory", title: "New EU Carbon Border Adjustment Mechanisms", date: "Apr 8, 2026" },
    { tag: "Case Study", title: "How We Cut Aerospace AOG Response by 60%", date: "Apr 3, 2026" },
  ]

  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className="py-16 lg:py-20 px-6 lg:px-12 bg-[#f7f9fb]">
      <div className="max-w-7xl mx-auto">
        <div className={cn("flex items-end justify-between mb-8 transition-all duration-700", reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[3px] bg-secondary rounded-full" />
              <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-secondary">Knowledge</span>
            </div>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground">Insights & Market Updates</h2>
          </div>
          <a href="#" className="hidden md:inline-flex text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors">View all →</a>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {posts.map((p, i) => (
            <a
              key={p.title}
              href="#"
              className={cn(
                "bg-white rounded-xl p-6 border border-border/40 hover:border-secondary/30 hover:shadow-md transition-all duration-300 group",
                reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: reveal.visible ? `${150 + i * 80}ms` : "0ms" }}
            >
              <span className="text-[10px] font-semibold tracking-wider uppercase text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">{p.tag}</span>
              <h3 className="font-display font-bold text-[15px] text-foreground mt-3 mb-2 group-hover:text-secondary transition-colors leading-snug">{p.title}</h3>
              <span className="text-[12px] text-muted-foreground">{p.date}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── 10. FINAL CTA ─── */
function FinalCTA() {
  const reveal = useReveal()

  return (
    <section id="final-cta" ref={reveal.ref as React.RefObject<HTMLElement>} className="py-20 lg:py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="ctaGrid2" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#ctaGrid2)" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        <h2 className={cn(
          "font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 transition-all duration-700",
          reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}>
          Ready to solve your logistics challenge?
        </h2>

        <div className={cn("flex flex-col sm:flex-row gap-4 justify-center mb-10 transition-all duration-700 delay-150", reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
          <Link to="/industries" className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-3.5 text-base rounded-lg transition-all group shadow-lg shadow-secondary/25">
            Find Your Solution
            <svg className="w-4.5 h-4.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Link>
          <a href="#final-cta" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-3.5 text-base rounded-lg hover:bg-white/20 transition-all">
            Talk to an Expert
          </a>
        </div>

        <div className={cn("transition-all duration-700 delay-300", reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
          <a href="tel:+18888702726" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-lg font-medium">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            +1 888-870-2726
          </a>
        </div>
      </div>
    </section>
  )
}
