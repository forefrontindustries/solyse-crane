import { useParams, Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { getIndustry, getAllIndustries } from "../data/industries"
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

export function IndustryPage() {
  const { slug } = useParams()
  const industry = getIndustry(slug || "")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!industry) {
    return (
      <div className="min-h-screen bg-white text-foreground">
        <Header />
        <div className="pt-40 px-6 text-center">
          <h1 className="font-display text-3xl font-bold">Industry not found</h1>
          <Link to="/" className="text-secondary mt-4 inline-block">← Back to Home</Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-[#f4f6f9] pt-[120px] lg:pt-[140px] pb-0">
        <div className="px-6 lg:px-12 pb-5">
          <nav className="flex items-center gap-2 text-[12px] text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span className="opacity-40">/</span>
            <Link to="/industries" className="hover:text-foreground transition-colors">Industries</Link>
            <span className="opacity-40">/</span>
            <span className="text-foreground font-medium">{industry.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <HeroSection industry={industry} />
      <ChallengesSection industry={industry} />
      <ServicesSection industry={industry} />
      <CViewSection industry={industry} />
      <CaseStudiesSection industry={industry} />
      <IndustryCTA industry={industry} />

      <Footer />
    </div>
  )
}

/* ─── Hero ─── */
function HeroSection({ industry }: { industry: ReturnType<typeof getIndustry> }) {
  if (!industry) return null
  return (
    <section className="relative bg-foreground overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={industry.heroImage}
          alt={industry.name}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>
      <div className="relative px-6 lg:px-12 py-20 lg:py-28">
        <div className="max-w-[600px]">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-[26px] h-[2px] bg-secondary rounded-sm" />
            <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary">
              {industry.tagline}
            </span>
          </div>
          <h1 className="font-display font-extrabold text-[clamp(32px,5vw,56px)] leading-[1.06] text-white tracking-tight whitespace-pre-line">
            {industry.headline}
          </h1>
          <p className="text-[16px] text-white/60 leading-[1.8] mt-5 max-w-[480px]">
            {industry.description}
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Challenges — clean, minimal, with room for description text ─── */
function ChallengesSection({ industry }: { industry: ReturnType<typeof getIndustry> }) {
  const { ref, visible } = useReveal()
  if (!industry) return null

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-white">
      <div className={`mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-[26px] h-[2px] bg-secondary rounded-sm" />
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary">
            Your Challenges
          </span>
        </div>
        <h2 className="font-display font-extrabold text-[clamp(28px,3.8vw,46px)] leading-[1.08] text-foreground tracking-tight">
          What Keeps {industry.name} Leaders<br />Up at Night
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {industry.challenges.map((c, i) => (
          <a
            key={c.title}
            href={c.href}
            className={`group relative bg-[#f4f6f9] rounded-xl p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(11,37,69,0.08)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {/* Subtle top accent */}
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-secondary/30 rounded-b group-hover:bg-secondary transition-colors duration-300" />

            <h3 className="font-display font-bold text-[18px] text-foreground mb-3 group-hover:text-secondary transition-colors">
              {c.title}
            </h3>
            <p className="text-[14px] text-muted-foreground leading-[1.7]">
              {c.description}
            </p>

            <div className="text-[13px] font-semibold text-secondary flex items-center gap-1.5 mt-5 group-hover:gap-2.5 transition-all">
              Learn how we solve this →
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

/* ─── Services ─── */
function ServicesSection({ industry }: { industry: ReturnType<typeof getIndustry> }) {
  const { ref, visible } = useReveal()
  if (!industry) return null

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-[#f4f6f9]">
      <div className={`mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-[26px] h-[2px] bg-secondary rounded-sm" />
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary">
            Our Solutions for {industry.name}
          </span>
        </div>
        <h2 className="font-display font-extrabold text-[clamp(28px,3.8vw,46px)] leading-[1.08] text-foreground tracking-tight">
          Services Built for<br />Your Requirements
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {industry.services.map((s, i) => (
          <a
            key={s.name}
            href={s.href}
            className={`group bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(11,37,69,0.08)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {/* Green header bar */}
            <div className="bg-secondary px-6 py-3.5">
              <span className="text-white font-display font-bold text-[15px]">{s.name}</span>
            </div>

            <div className="p-6">
              <ul className="space-y-2.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[13px] text-muted-foreground leading-[1.5]">
                    <span className="w-1 h-1 rounded-full bg-secondary mt-[7px] flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="text-[13px] font-semibold text-secondary flex items-center gap-1.5 mt-6 group-hover:gap-2.5 transition-all">
                Learn More →
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

/* ─── C-View Technology Banner ─── */
function CViewSection({ industry }: { industry: ReturnType<typeof getIndustry> }) {
  const { ref, visible } = useReveal()
  if (!industry) return null

  return (
    <section ref={ref} className="px-6 lg:px-12 py-16 bg-white">
      <div
        className={`bg-foreground rounded-2xl px-8 lg:px-12 py-8 flex flex-col lg:flex-row items-center justify-between gap-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="flex-1">
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-white/40">
              Powered by Technology
            </span>
          </div>
          <h3 className="font-display font-bold text-[20px] lg:text-[22px] text-white leading-[1.25] mb-2">
            {industry.cviewHeadline}
          </h3>
          <p className="text-[14px] text-white/50 leading-[1.7] max-w-[520px]">
            {industry.cviewDescription}
          </p>
        </div>
        <a
          href="#"
          className="flex-shrink-0 inline-flex items-center gap-2 bg-secondary text-white font-semibold text-sm px-6 py-3 rounded-lg hover:brightness-110 transition-all"
        >
          See Platform →
        </a>
      </div>
    </section>
  )
}

/* ─── Case Studies ─── */
function CaseStudiesSection({ industry }: { industry: ReturnType<typeof getIndustry> }) {
  const { ref, visible } = useReveal()
  if (!industry) return null

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-white">
      <div className={`mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-[26px] h-[2px] bg-secondary rounded-sm" />
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary">
            Proven Results
          </span>
        </div>
        <h2 className="font-display font-extrabold text-[clamp(28px,3.8vw,46px)] leading-[1.08] text-foreground tracking-tight">
          {industry.name} Case Studies
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {industry.caseStudies.map((cs, i) => (
          <a
            key={cs.title}
            href="#"
            className={`group bg-[#f4f6f9] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(11,37,69,0.08)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
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
              <h4 className="font-display font-bold text-[15px] text-foreground leading-[1.3] mt-2 mb-4 group-hover:text-secondary transition-colors">
                {cs.title}
              </h4>

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

/* ─── Industry CTA ─── */
function IndustryCTA({ industry }: { industry: ReturnType<typeof getIndustry> }) {
  const { ref, visible } = useReveal()
  if (!industry) return null

  return (
    <section ref={ref} className="px-6 lg:px-12 pb-24">
      <div
        className={`bg-secondary rounded-2xl px-8 lg:px-12 py-8 flex flex-col lg:flex-row items-center justify-between gap-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div>
          <h3 className="font-display font-bold text-[22px] text-white leading-[1.25] mb-1.5">
            {industry.ctaHeadline}
          </h3>
          <p className="text-[14px] text-white/70">{industry.ctaDescription}</p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white text-foreground font-semibold text-sm px-6 py-3 rounded-lg hover:bg-white/90 transition-all"
          >
            Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  )
}
