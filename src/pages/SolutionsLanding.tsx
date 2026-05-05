import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { solutions } from "../data/solutions"

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

const iconMap: Record<string, JSX.Element> = {
  plane: <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />,
  ship: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></>,
  truck: <><rect x="1" y="3" width="15" height="13" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></>,
  warehouse: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M9 22V12h6v10" /></>,
  customs: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></>,
  project: <><polygon points="12 2 2 7 12 12 22 7" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></>,
  rail: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M4 11h16" /><path d="M12 3v8" /><circle cx="8" cy="15.5" r="1.5" /><circle cx="16" cy="15.5" r="1.5" /></>,
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  ecommerce: <><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" /></>,
  management: <><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" /></>,
  advisory: <><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></>,
  value: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></>,
  battery: <><rect x="1" y="6" width="18" height="12" rx="2" ry="2" /><line x1="23" y1="13" x2="23" y2="11" /><polyline points="11 6 7 12 13 12 9 18" /></>,
  nextgen: <><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6" y2="6" /><line x1="6" y1="18" x2="6" y2="18" /></>,
  clock: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
}

export function SolutionsLanding() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-[#f4f6f9] pt-[120px] lg:pt-[140px] pb-0">
        <div className="px-6 lg:px-12 pb-5">
          <nav className="flex items-center gap-2 text-[12px] text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span className="opacity-40">/</span>
            <span className="text-foreground font-medium">Services</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <HeroSection />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Full Width CTA */}
      <CTASection />

      <Footer />
    </div>
  )
}

/* ─── Hero ─── */
function HeroSection() {
  const reveal = useReveal()
  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className="relative bg-foreground overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2FgDOpCEQ5_YHXt0QXrsSsJ%2Funsplash-ocean-freight-container-ship-port_1.jpg"
          alt="Logistics services"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/80 to-[#0a1628]/50" />
      </div>
      <div className={`relative px-6 lg:px-12 py-20 lg:py-32 transition-all duration-1000 ${reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-[13px] text-white/80 font-medium">{solutions.length} Logistics Services</span>
            </div>
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              International Logistics Services
            </h1>
            <p className="text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed">
              From air and ocean freight to contract logistics and customs brokerage, Crane Worldwide delivers
              end-to-end supply chain solutions tailored to your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Services Grid ─── */
function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24 px-6 lg:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, i) => (
            <ServiceCard key={solution.slug} solution={solution} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ solution, index }: { solution: typeof solutions[0]; index: number }) {
  const reveal = useReveal(0.1)
  return (
    <Link
      to={`/solutions/${solution.slug}`}
      ref={reveal.ref as React.RefObject<HTMLAnchorElement>}
      className={`group relative bg-white rounded-2xl border border-border/50 overflow-hidden hover:border-secondary/40 hover:shadow-xl transition-all duration-500 ${
        reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${Math.min(index * 80, 400)}ms` }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={solution.image}
          alt={solution.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                {iconMap[solution.icon] || <circle cx="12" cy="12" r="10" />}
              </svg>
            </div>
            <h3 className="font-display text-lg font-bold text-white">{solution.name}</h3>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="text-[13px] font-semibold text-secondary mb-2">{solution.tagline}</div>
        <p className="text-[13px] text-muted-foreground leading-relaxed line-clamp-3">
          {solution.description}
        </p>
        <div className="mt-4 flex items-center gap-1.5 text-[13px] font-semibold text-primary group-hover:text-secondary transition-colors">
          Learn More
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}

/* ─── CTA ─── */
function CTASection() {
  const reveal = useReveal()
  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className={`py-16 lg:py-24 bg-primary transition-all duration-700 ${reveal.visible ? "opacity-100" : "opacity-0"}`}>
      <div className="px-6 lg:px-12 text-center max-w-3xl mx-auto">
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
          Request a Quote
        </h2>
        <p className="text-white/70 text-lg mb-8">
          Let one of our client advocates build a solution that fits your logistics needs.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="tel:+18888702726"
            className="inline-flex items-center gap-2 bg-secondary text-white font-semibold px-8 py-3.5 rounded-lg hover:brightness-110 transition-all"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            +1 888-870-2726
          </a>
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/20 transition-all"
          >
            Find a Location
          </Link>
        </div>
      </div>
    </section>
  )
}
