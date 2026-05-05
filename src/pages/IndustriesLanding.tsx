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

const industries = [
  {
    slug: "aerospace-defense",
    name: "Aerospace",
    tagline: "AOG response, MRO supply chains, ITAR compliance",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80&auto=format",
    stats: [{ value: "24/7", label: "AOG Desk" }, { value: "99.7%", label: "On-Time" }],
  },
  {
    slug: "automotive",
    name: "Automotive",
    tagline: "JIT/JIS delivery, sequenced logistics, EV supply chains",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80&auto=format",
    stats: [{ value: "12", label: "OEM Plants" }, { value: "99.8%", label: "JIT Rate" }],
  },
  {
    slug: "consumer-goods",
    name: "Consumer Goods",
    tagline: "Omnichannel fulfillment, peak season capacity, retail compliance",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format",
    stats: [{ value: "+400%", label: "Peak Flex" }, { value: "1.2d", label: "Avg Ship" }],
  },
  {
    slug: "cruise-marine",
    name: "Cruise, Marine & Hospitality",
    tagline: "Port-to-ship provisioning, global itinerary logistics",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80&auto=format",
    stats: [{ value: "80+", label: "Ports" }, { value: "100%", label: "Compliance" }],
  },
  {
    slug: "energy",
    name: "Energy",
    tagline: "Heavy-lift, project cargo, offshore and renewable logistics",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80&auto=format",
    stats: [{ value: "220t", label: "Max Lift" }, { value: "98.9%", label: "On-Time" }],
  },
  {
    slug: "government",
    name: "Government",
    tagline: "Classified shipments, defense logistics, compliance frameworks",
    image: "https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=800&q=80&auto=format",
    stats: [{ value: "ITAR", label: "Certified" }, { value: "C-TPAT", label: "Validated" }],
  },
  {
    slug: "high-tech",
    name: "Hi-Tech",
    tagline: "Speed-to-market, high-value security, data center logistics",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format",
    stats: [{ value: "28", label: "Countries" }, { value: "0.01%", label: "Damage" }],
  },
  {
    slug: "industrial",
    name: "Industrial",
    tagline: "Heavy machinery, plant relocations, manufacturing supply chains",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80&auto=format",
    stats: [{ value: "$180M", label: "Max Value" }, { value: "0", label: "Downtime" }],
  },
  {
    slug: "healthcare",
    name: "Life Sciences",
    tagline: "Cold chain, GDP compliance, clinical trial logistics",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80&auto=format",
    stats: [{ value: "100%", label: "GDP Comp." }, { value: "42", label: "Countries" }],
  },
  {
    slug: "mining",
    name: "Mining",
    tagline: "Remote site delivery, oversized equipment, mineral transport",
    image: "https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2FPp5cbyiOLjh2jRzHVdqOZ%2Fopen-pit-mine-excavator-heavy-machinery-unsplash_0.jpg",
    stats: [{ value: "1,200mi", label: "Max Range" }, { value: "24%", label: "Cost Saved" }],
  },
]

export function IndustriesLanding() {
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
            <span className="text-foreground font-medium">Industries</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=1600&q=80&auto=format"
            alt="Global logistics"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/95 to-foreground/60" />
        </div>
        <div className="relative px-6 lg:px-12 py-20 lg:py-28">
          <div className="max-w-[1600px] mx-auto">
          <div className="max-w-[640px]">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-[26px] h-[2px] bg-secondary rounded-sm" />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary">
                Industry Expertise
              </span>
            </div>
            <h1 className="font-display font-extrabold text-[clamp(32px,5vw,56px)] leading-[1.06] text-white tracking-tight">
              Logistics Built for<br />Your Industry
            </h1>
            <p className="text-[16px] text-white/55 leading-[1.8] mt-5 max-w-[500px]">
              Every industry has unique supply chain challenges. We've spent decades building
              specialized teams, technology, and networks to solve them.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <IndustryGrid />

      {/* Why Crane Section */}
      <WhyCrane />

      {/* CTA */}
      <IndustriesCTA />

      <Footer />
    </div>
  )
}

/* ─── Industry Grid ─── */
function IndustryGrid() {
  const { ref, visible } = useReveal()

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12">
      <div className={`mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-[26px] h-[2px] bg-secondary rounded-sm" />
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary">
            10 Specialized Verticals
          </span>
        </div>
        <h2 className="font-display font-extrabold text-[clamp(28px,3.8vw,46px)] leading-[1.08] text-foreground tracking-tight">
          Your Industry, Our Expertise
        </h2>
        <p className="text-[15px] text-muted-foreground leading-[1.7] mt-3 max-w-[520px]">
          Dedicated teams with deep domain knowledge, purpose-built solutions, and proven results across the industries we serve.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {industries.map((ind, i) => (
          <Link
            key={ind.slug}
            to={`/industries/${ind.slug}`}
            className={`group relative rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(11,37,69,0.12)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: `${(i % 3) * 80}ms` }}
          >
            {/* Image */}
            <div className="h-[200px] bg-foreground overflow-hidden">
              <img
                src={ind.image}
                alt={ind.name}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-500"
              />
              <div className="absolute inset-0 h-[200px] bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              {/* Name overlay on image */}
              <div className="absolute top-0 left-0 right-0 h-[200px] flex items-end p-6">
                <h3 className="font-display font-extrabold text-[22px] text-white leading-[1.15] drop-shadow-sm">
                  {ind.name}
                </h3>
              </div>
            </div>

            {/* Body */}
            <div className="bg-[#f4f6f9] group-hover:bg-white transition-colors duration-300 p-6">
              <p className="text-[14px] text-muted-foreground leading-[1.6] mb-5">
                {ind.tagline}
              </p>

              {/* Stats */}
              <div className="flex gap-6 pb-4 mb-4 border-b border-border/40">
                {ind.stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display font-extrabold text-[20px] text-foreground leading-none">{s.value}</div>
                    <div className="text-[10px] text-muted-foreground/50 uppercase tracking-wide mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="text-[13px] font-semibold text-secondary flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                Explore {ind.name} Solutions →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

/* ─── Why Crane ─── */
function WhyCrane() {
  const { ref, visible } = useReveal()

  const pillars = [
    {
      number: "01",
      title: "Dedicated Industry Teams",
      description: "Not generalists. Our specialists have decades of experience in your specific vertical — they understand your terminology, regulations, and pain points.",
    },
    {
      number: "02",
      title: "Purpose-Built Technology",
      description: "C-View adapts to your industry's needs — from cold chain monitoring for pharma to AOG dashboards for aerospace. One platform, configured for you.",
    },
    {
      number: "03",
      title: "120+ Global Locations",
      description: "Local expertise at origin and destination. Our people on the ground know the ports, customs, and regulations in your key trade lanes.",
    },
    {
      number: "04",
      title: "Proven Track Record",
      description: "We don't pitch capabilities we haven't delivered. Every industry solution is backed by case studies, metrics, and referenceable customers.",
    },
  ]

  return (
    <section ref={ref} className="py-24 px-6 lg:px-12 bg-[#f4f6f9]">
      <div className={`mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-[26px] h-[2px] bg-secondary rounded-sm" />
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary">
            Why Crane Worldwide
          </span>
        </div>
        <h2 className="font-display font-extrabold text-[clamp(28px,3.8vw,46px)] leading-[1.08] text-foreground tracking-tight">
          What Sets Us Apart
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((p, i) => (
          <div
            key={p.number}
            className={`bg-white rounded-xl p-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <span className="font-display font-extrabold text-[38px] text-secondary/15 leading-none block mb-3">
              {p.number}
            </span>
            <h3 className="font-display font-bold text-[17px] text-foreground mb-2">
              {p.title}
            </h3>
            <p className="text-[14px] text-muted-foreground leading-[1.7]">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Industries CTA ─── */
function IndustriesCTA() {
  const { ref, visible } = useReveal()

  return (
    <section ref={ref} className="px-6 lg:px-12 py-16">
      <div
        className={`bg-secondary rounded-2xl px-8 lg:px-12 py-8 flex flex-col lg:flex-row items-center justify-between gap-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div>
          <h3 className="font-display font-bold text-[22px] text-white leading-[1.25] mb-1.5">
            Don't see your industry?
          </h3>
          <p className="text-[14px] text-white/70">
            We solve complex logistics across every vertical. Tell us your challenge.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white text-foreground font-semibold text-sm px-6 py-3 rounded-lg hover:bg-white/90 transition-all"
          >
            Talk to a Specialist
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-white/10 transition-all"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  )
}
