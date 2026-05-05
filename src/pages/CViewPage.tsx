import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

function useReveal(threshold = 0.06) {
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

export function CViewPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-[#f4f6f9] pt-[120px] lg:pt-[140px] pb-0">
        <div className="px-6 lg:px-12 pb-5 max-w-[90rem] mx-auto">
          <nav className="flex items-center gap-2 text-[12px] text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span className="opacity-40">/</span>
            <span className="opacity-60">Technology</span>
            <span className="opacity-40">/</span>
            <span className="text-foreground font-medium">Shipment Tracking</span>
          </nav>
        </div>
      </div>

      <HeroSection />
      <IntroSection />
      <FeaturesGrid />
      <DashboardShowcase />
      <TrackTraceSection />
      <PredictiveSection />
      <DemoCTA />
      <QuoteCTA />

      <Footer />
    </div>
  )
}

/* ─── Hero ─── */
function HeroSection() {
  const reveal = useReveal()
  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className="relative bg-foreground overflow-hidden min-h-[420px] lg:min-h-[520px]">
      <div className="absolute inset-0">
        <img src="/cview-global-network.jpg" alt="Global logistics network" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-[#0a1628]/50" />
      </div>
      <div className={`relative px-6 lg:px-12 py-20 lg:py-32 max-w-[90rem] mx-auto transition-all duration-1000 ${reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-secondary/15 border border-secondary/30 rounded-full px-4 py-1.5 mb-6">
            <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-[13px] text-secondary font-semibold tracking-wide uppercase">Logistics Technology</span>
          </div>
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            C-View<span className="text-secondary">.</span> <br className="hidden lg:block" />
            Shipment Tracker
          </h1>
          <p className="text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed">
            C-View is our virtual viewpoint that clients can access freely and track their
            shipments with Crane Worldwide Logistics.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#demo" className="inline-flex items-center gap-2 bg-secondary text-white font-semibold px-8 py-3.5 rounded-lg hover:brightness-110 transition-all shadow-lg shadow-secondary/25">
              Request a C-View Demo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="https://craneww.com" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/20 transition-all">
              Connect to C-View
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Intro ─── */
function IntroSection() {
  const reveal = useReveal()
  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className={`py-16 lg:py-28 px-6 lg:px-12 transition-all duration-700 ${reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-[90rem] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-foreground/10 border border-border/30">
              <img src="/cview-person.jpg" alt="Supply chain professional using C-View" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary rounded-xl p-4 shadow-lg hidden lg:block">
              <div className="text-white font-display font-bold text-2xl">97%</div>
              <div className="text-white/70 text-[11px]">On-time delivery</div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-[3px] bg-secondary rounded-full" />
              <span className="text-xs font-semibold tracking-widest uppercase text-secondary">Shipment Tracking Portal</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
              Logistics Technology: Shipment Tracking Logistics Portal
            </h2>
            <p className="text-muted-foreground text-[16px] leading-relaxed mb-6">
              From pickup to delivery, and all milestones in between, C-View, our logistics portal,
              offers end-to-end supply chain visibility. Easily track and trace via the shipment
              tracker, proactively manage exceptions in your supply chain, monitor on-time
              performance and spend over time.
            </p>
            <p className="text-muted-foreground text-[16px] leading-relaxed mb-8">
              Total visibility and transparency are at your fingertips with an effortless tracking
              system — even on mobile devices.
            </p>
            <a href="#demo" className="inline-flex items-center gap-2 bg-secondary text-white font-semibold px-8 py-3.5 rounded-lg hover:brightness-110 transition-all shadow-lg shadow-secondary/25">
              Request a C-View Demo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Features Grid ─── */
function FeaturesGrid() {
  const reveal = useReveal()
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "End-to-End Visibility",
      desc: "Real-time tracking from pickup to delivery across all transport modes — air, ocean, ground, and rail."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Exception Management",
      desc: "Proactively identify and manage exceptions before they impact your supply chain performance."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Performance Analytics",
      desc: "Monitor on-time performance, spending trends, and volume analytics over time with interactive charts."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Mobile Responsive",
      desc: "Access your shipment data anywhere, anytime. C-View works seamlessly on mobile devices."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Documents & Invoices",
      desc: "Access all shipment documents, invoices, and documentation directly within the platform."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Custom Dashboards",
      desc: "Dashboards configured specifically for each user and client with unique visual aspects and data views."
    }
  ]

  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className={`py-16 lg:py-24 px-6 lg:px-12 bg-[#f8f9fb] transition-all duration-700 ${reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-[90rem] mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-[3px] bg-secondary rounded-full" />
            <span className="text-xs font-semibold tracking-widest uppercase text-secondary">Shipment Tracking Made Easy</span>
            <span className="w-6 h-[3px] bg-secondary rounded-full" />
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our platform allows clients to access specific shipment details, documentation, financial
            spending, and overall performance — all in one place.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-xl p-7 border border-border/40 hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="font-display text-[17px] font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-[14px] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Dashboard Showcase ─── */
function DashboardShowcase() {
  const reveal = useReveal()
  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className={`py-16 lg:py-28 px-6 lg:px-12 transition-all duration-700 ${reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-[90rem] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-[3px] bg-secondary rounded-full" />
              <span className="text-xs font-semibold tracking-widest uppercase text-secondary">Dashboard</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
              Centralized Shipment Tracker Dashboard
            </h2>
            <p className="text-muted-foreground text-[16px] leading-relaxed mb-8">
              At-a-glance visibility to your current state of transportation and shipments on
              mobile-friendly dashboards. Easily identify exceptions so you can proactively manage them.
            </p>
            <ul className="space-y-4">
              {["On-time performance tracking with weekly, monthly & yearly views",
                "Spending over time with detailed cost breakdowns by mode",
                "Bookmarked shipments for quick access to priority cargo",
                "Real-time status updates across all transport modes"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] text-muted-foreground">
                  <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-foreground/15 border border-border/20">
              <img src="/cview-dashboard.png" alt="C-View Dashboard showing on-time performance and spending analytics" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Track & Trace ─── */
function TrackTraceSection() {
  const reveal = useReveal()
  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className={`py-16 lg:py-28 px-6 lg:px-12 bg-[#f8f9fb] transition-all duration-700 ${reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-[90rem] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative lg:order-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-[3px] bg-secondary rounded-full" />
              <span className="text-xs font-semibold tracking-widest uppercase text-secondary">Track & Trace</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
              Shipment Track &amp; Trace
            </h2>
            <p className="text-muted-foreground text-[16px] leading-relaxed mb-8">
              Powerful search offers complete access to all track & trace and shipment detail
              information, documents and invoices, the ability to export, and more.
            </p>
            <ul className="space-y-4">
              {["Search by AWB, BOL, origin, destination, or status",
                "Complete shipment timeline with all milestones",
                "Document access including invoices and customs paperwork",
                "Export capabilities for reporting and analysis"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] text-muted-foreground">
                  <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-foreground/15 border border-border/20">
              <img src="/cview-performance.png" alt="C-View Track and Trace interface" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Predictive Visibility ─── */
function PredictiveSection() {
  const reveal = useReveal()
  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className={`py-16 lg:py-28 px-6 lg:px-12 transition-all duration-700 ${reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-[90rem] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-[3px] bg-secondary rounded-full" />
              <span className="text-xs font-semibold tracking-widest uppercase text-secondary">Predictive Intelligence</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
              Potential Exceptions for Your Supply Chain Resilience
            </h2>
            <p className="text-muted-foreground text-[16px] leading-relaxed mb-8">
              Predictive visibility gives you early warnings on possible supply chain interruptions
              that can impact your shipments, such as weather events, strikes, and more.
            </p>
            <ul className="space-y-4">
              {["Shipment volume and count analysis by top lane pair",
                "Global trade lane visualization on interactive maps",
                "Trend analysis with week-over-week volume tracking",
                "Mode-specific filtering for air, ocean, and ground"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] text-muted-foreground">
                  <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-foreground/15 border border-border/20">
              <img src="/cview-analytics.png" alt="C-View analytics showing shipment volume and trade lane visualization" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Demo CTA ─── */
function DemoCTA() {
  const reveal = useReveal()
  return (
    <section id="demo" ref={reveal.ref as React.RefObject<HTMLElement>} className={`py-16 lg:py-24 bg-foreground relative overflow-hidden transition-all duration-700 ${reveal.visible ? "opacity-100" : "opacity-0"}`}>
      <div className="absolute inset-0 opacity-10">
        <img src="/cview-global-network.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative px-6 lg:px-12 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-secondary/15 border border-secondary/30 rounded-full px-4 py-1.5 mb-6">
          <span className="text-[13px] text-secondary font-semibold">Get Started Today</span>
        </div>
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">Request a C-View Demo</h2>
        <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
          See how C-View can transform your supply chain visibility. Our team will walk you through
          a personalized demo tailored to your business needs.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="mailto:info@craneww.com" className="inline-flex items-center gap-2 bg-secondary text-white font-semibold px-8 py-3.5 rounded-lg hover:brightness-110 transition-all shadow-lg shadow-secondary/25">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Request a Demo
          </a>
          <a href="tel:+18888702726" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/20 transition-all">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            +1 888-870-2726
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Quote CTA ─── */
function QuoteCTA() {
  const reveal = useReveal()
  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className={`py-16 lg:py-20 px-6 lg:px-12 bg-[#f8f9fb] transition-all duration-700 ${reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-[90rem] mx-auto">
        <div className="bg-white rounded-2xl border border-border/50 p-10 lg:p-14 flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
          <div className="flex-1">
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">Request a Quote</h3>
            <p className="text-muted-foreground text-[16px] leading-relaxed">
              Let one of our client advocates build a solution that fits your logistics needs.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/" className="inline-flex items-center gap-2 bg-secondary text-white font-semibold px-8 py-3.5 rounded-lg hover:brightness-110 transition-all">
              Request a Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a href="tel:+18888702726" className="inline-flex items-center gap-2 bg-white border border-border text-foreground font-semibold px-8 py-3.5 rounded-lg hover:bg-muted/50 transition-all">
              +1 888-870-2726
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
