import { useParams, Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { getSolution, getAllSolutions, type Solution } from "../data/solutions"

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
  management: <><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /></>,
  advisory: <><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></>,
  value: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></>,
  battery: <><rect x="1" y="6" width="18" height="12" rx="2" ry="2" /><line x1="23" y1="13" x2="23" y2="11" /><polyline points="11 6 7 12 13 12 9 18" /></>,
  nextgen: <><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6" y2="6" /><line x1="6" y1="18" x2="6" y2="18" /></>,
  clock: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
}

export function SolutionPage() {
  const { slug } = useParams()
  const solution = getSolution(slug || "")

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!solution) {
    return (
      <div className="min-h-screen bg-white text-foreground">
        <Header />
        <div className="pt-40 px-6 text-center">
          <h1 className="font-display text-3xl font-bold">Service not found</h1>
          <Link to="/solutions" className="text-secondary mt-4 inline-block">← Back to Services</Link>
        </div>
        <Footer />
      </div>
    )
  }

  const otherSolutions = getAllSolutions().filter(s => s.slug !== solution.slug).slice(0, 4)

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-[#f4f6f9] pt-[120px] lg:pt-[140px] pb-0">
        <div className="px-6 lg:px-12 pb-5">
          <nav className="flex items-center gap-2 text-[12px] text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span className="opacity-40">/</span>
            <Link to="/solutions" className="hover:text-foreground transition-colors">Services</Link>
            <span className="opacity-40">/</span>
            <span className="text-foreground font-medium">{solution.name}</span>
          </nav>
        </div>
      </div>

      <HeroSection solution={solution} />
      <IntroSection solution={solution} />
      {solution.features && <FeaturesSection solution={solution} />}
      {solution.whyChoose && <WhyChooseSection solution={solution} />}
      {solution.industries && <IndustriesSection solution={solution} />}
      <OtherServicesSection others={otherSolutions} />
      <CTASection solution={solution} />

      <Footer />
    </div>
  )
}

/* ─── Hero ─── */
function HeroSection({ solution }: { solution: Solution }) {
  const reveal = useReveal()
  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className="relative bg-foreground overflow-hidden">
      <div className="absolute inset-0">
        <img src={solution.image} alt={solution.name} className="w-full h-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/75 to-[#0a1628]/40" />
      </div>
      <div className={`relative px-6 lg:px-12 py-20 lg:py-32 transition-all duration-1000 ${reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                {iconMap[solution.icon] || <circle cx="12" cy="12" r="10" />}
              </svg>
            </div>
          </div>
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-white leading-[1.1] mb-4">
            {solution.name}
          </h1>
          <p className="font-display text-xl lg:text-2xl text-secondary font-semibold mb-4">{solution.tagline}</p>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
            {solution.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:+18888702726"
              className="inline-flex items-center gap-2 bg-secondary text-white font-semibold px-7 py-3.5 rounded-lg hover:brightness-110 transition-all"
            >
              Get a Quote
            </a>
            <a
              href="tel:+18888702726"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/20 transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              +1 888-870-2726
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Intro / Description ─── */
function IntroSection({ solution }: { solution: Solution }) {
  const reveal = useReveal()
  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className={`py-16 lg:py-20 px-6 lg:px-12 transition-all duration-700 ${reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
              Complete {solution.name} Services
            </h2>
            <p className="text-muted-foreground text-[16px] leading-relaxed mb-6">
              {solution.description}
            </p>
            {!solution.features && (
              <p className="text-muted-foreground text-[15px] leading-relaxed">
                Our experienced team manages the complexities of international logistics to deliver
                reliable, cost-effective solutions. With offices in 30+ countries, we provide local
                expertise backed by a global network.
              </p>
            )}
            {solution.features && (
              <p className="text-muted-foreground text-[15px] leading-relaxed">
                We provide end-to-end services that cover every stage of the shipping process:
              </p>
            )}
          </div>
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={solution.image} alt={solution.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Features / Services List ─── */
function FeaturesSection({ solution }: { solution: Solution }) {
  const reveal = useReveal()
  if (!solution.features) return null
  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className={`py-16 lg:py-20 bg-[#f4f6f9] px-6 lg:px-12 transition-all duration-700 ${reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">Complete {solution.name} Services</h2>
        <p className="text-muted-foreground mb-12 text-[15px] max-w-2xl">
          End-to-end solutions that cover every stage of the shipping process.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solution.features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }: { feature: { title: string; description: string }; index: number }) {
  const reveal = useReveal(0.1)
  return (
    <div
      ref={reveal.ref as React.RefObject<HTMLDivElement>}
      className={`bg-white rounded-xl p-6 border border-border/30 hover:border-secondary/30 hover:shadow-lg transition-all duration-500 ${
        reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
        <span className="font-display text-lg font-bold text-secondary">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="font-display text-[16px] font-bold mb-2">{feature.title}</h3>
      <p className="text-[13px] text-muted-foreground leading-relaxed">{feature.description}</p>
    </div>
  )
}

/* ─── Why Choose ─── */
function WhyChooseSection({ solution }: { solution: Solution }) {
  const reveal = useReveal()
  if (!solution.whyChoose) return null
  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className={`py-16 lg:py-24 px-6 lg:px-12 transition-all duration-700 ${reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
            Why Choose Crane Worldwide for {solution.name}?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-[15px]">
            We are recognized among the top freight companies because we prioritize speed, reliability, and visibility.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solution.whyChoose.map((item, i) => (
            <div key={i} className="relative">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-[16px] font-bold mb-2">{item.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Industries ─── */
function IndustriesSection({ solution }: { solution: Solution }) {
  const reveal = useReveal()
  if (!solution.industries) return null
  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className={`py-16 lg:py-20 bg-foreground px-6 lg:px-12 transition-all duration-700 ${reveal.visible ? "opacity-100" : "opacity-0"}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
        <p className="text-white/60 mb-10 text-[15px] max-w-2xl">
          Our {solution.name} solutions cater to a wide range of industries, ensuring your cargo arrives safely and efficiently.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solution.industries.map((industry) => (
            <div key={industry} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-secondary/40 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-white text-[15px]">{industry}</h3>
            </div>
          ))}
        </div>
        <p className="text-white/50 text-[14px] mt-8">
          No matter your industry, we ensure your shipments reach their destination safely, on time, and in perfect condition.
        </p>
      </div>
    </section>
  )
}

/* ─── Other Services ─── */
function OtherServicesSection({ others }: { others: Solution[] }) {
  const reveal = useReveal()
  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className={`py-16 lg:py-20 bg-[#f4f6f9] px-6 lg:px-12 transition-all duration-700 ${reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="font-display text-2xl lg:text-3xl font-bold">Explore More Services</h2>
            <p className="text-muted-foreground mt-2 text-[14px]">Comprehensive logistics solutions across every mode</p>
          </div>
          <Link to="/solutions" className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-semibold text-secondary hover:text-secondary/80 transition-colors">
            View All Services
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {others.map((s) => (
            <Link
              key={s.slug}
              to={`/solutions/${s.slug}`}
              className="bg-white rounded-xl overflow-hidden border border-border/30 hover:border-secondary/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="h-36 overflow-hidden relative">
                <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <div className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      {iconMap[s.icon] || <circle cx="12" cy="12" r="10" />}
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display font-bold text-[14px] group-hover:text-secondary transition-colors">{s.name}</h3>
                <p className="text-[12px] text-muted-foreground mt-1 line-clamp-2">{s.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ─── */
function CTASection({ solution }: { solution: Solution }) {
  const reveal = useReveal()
  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className={`py-16 lg:py-20 bg-primary transition-all duration-700 ${reveal.visible ? "opacity-100" : "opacity-0"}`}>
      <div className="px-6 lg:px-12 text-center max-w-4xl mx-auto">
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
          Get Started with Crane's {solution.name} Services
        </h2>
        <p className="text-white/70 text-lg mb-8">
          Partner with Crane Worldwide Logistics for reliable, fast, and flexible logistics solutions
          that enhance efficiency, minimize risk, and foster growth.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="tel:+18888702726"
            className="inline-flex items-center gap-2 bg-secondary text-white font-semibold px-8 py-3.5 rounded-lg hover:brightness-110 transition-all"
          >
            Request a Quote
          </a>
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/20 transition-all"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
