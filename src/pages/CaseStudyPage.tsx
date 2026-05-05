import { useParams, Link } from "react-router-dom"
import { useRef, useState, useEffect } from "react"
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
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

const caseStudies: Record<string, {
  title: string
  industry: string
  client: string
  heroImage: string
  challenge: string
  solution: string
  results: { metric: string; label: string; description: string }[]
  timeline: string
  services: string[]
  testimonial?: { quote: string; author: string; role: string }
  relatedStudies: { title: string; slug: string; industry: string }[]
}> = {
  "aerospace-aog-response": {
    title: "Reducing AOG Response Time by 60% Across 12 Countries",
    industry: "Aerospace & Defense",
    client: "Major Aerospace OEM",
    heroImage: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1400&q=80&auto=format",
    challenge: "Our client, a leading aerospace manufacturer with operations across 12 countries, was spending over $14M annually on emergency AOG (Aircraft on Ground) freight. With no consolidated carrier strategy and fragmented procurement across regions, response times averaged 18+ hours and costs were escalating year-over-year. Every hour of aircraft downtime cost their airline customers approximately $150,000 in lost revenue.",
    solution: "We implemented a three-phase transformation: First, we consolidated their AOG response under a single global control tower with 24/7 coverage across all time zones. Second, we pre-positioned critical parts inventory at 8 strategic hub locations based on historical demand data and predictive analytics. Third, we established a tiered carrier network with guaranteed response SLAs — under 4 hours for Tier 1 critical parts, under 8 hours for Tier 2. Our C-View platform provided end-to-end visibility with real-time ETAs and automated escalation alerts.",
    results: [
      { metric: "60%", label: "Faster Response", description: "Average AOG response time reduced from 18 hours to under 7 hours" },
      { metric: "34%", label: "Cost Reduction", description: "Annual emergency freight spend reduced from $14M to $9.2M" },
      { metric: "99.4%", label: "SLA Compliance", description: "Tier 1 critical parts delivered within guaranteed 4-hour window" },
      { metric: "12", label: "Countries Unified", description: "Single control tower managing AOG response across all regions" },
    ],
    timeline: "Implementation completed in 90 days — Phase 1 (30 days), Phase 2 (45 days), Phase 3 (15 days)",
    services: ["Time-Critical Logistics", "Air Freight", "Contract Logistics", "Supply Chain Visibility"],
    testimonial: {
      quote: "Crane transformed our AOG response from a reactive fire-drill into a proactive, data-driven operation. The reduction in aircraft downtime has been worth multiples of the logistics investment.",
      author: "VP Supply Chain",
      role: "Major Aerospace OEM",
    },
    relatedStudies: [
      { title: "JIT Delivery Network for EV Battery Modules", slug: "automotive-jit-battery", industry: "Automotive" },
      { title: "Temperature-Controlled Pharma Distribution", slug: "pharma-cold-chain", industry: "Life Sciences" },
    ],
  },
  "automotive-jit-battery": {
    title: "Engineering a Multi-Modal JIT Network for EV Battery Modules",
    industry: "Automotive",
    client: "Leading EV Manufacturer",
    heroImage: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1400&q=80&auto=format",
    challenge: "A major electric vehicle manufacturer needed to deliver lithium-ion battery modules to 8 assembly plants across North America within 4-hour JIT windows. The challenge: batteries are classified as dangerous goods (Class 9), require temperature-controlled transport, and any delivery failure would halt an entire production line at a cost of $500K per hour.",
    solution: "We designed a hub-and-spoke network with 3 regional distribution centers positioned within 200 miles of each assembly plant. Multi-modal routing (dedicated trucking + rail for non-urgent replenishment) optimized cost while maintaining JIT precision. All shipments tracked via GPS with temperature monitoring and automated alerts. We obtained all necessary DG certifications and trained dedicated driver teams on battery handling protocols.",
    results: [
      { metric: "99.2%", label: "On-Time Rate", description: "Deliveries within the 4-hour JIT window across all 8 plants" },
      { metric: "0", label: "Line Stoppages", description: "Zero production halts attributed to logistics in 18 months" },
      { metric: "22%", label: "Cost Savings", description: "vs. previous all-truck dedicated fleet model" },
      { metric: "8", label: "Plants Served", description: "Seamless coverage across all North American assembly sites" },
    ],
    timeline: "Network design and launch in 120 days with phased plant onboarding",
    services: ["Ground Transport", "Contract Logistics", "Battery Logistics", "Supply Chain Visibility"],
    testimonial: {
      quote: "The precision and reliability Crane delivers is exceptional. They understand that in automotive JIT, there is no margin for error — and they consistently deliver.",
      author: "Director of Inbound Logistics",
      role: "Leading EV Manufacturer",
    },
    relatedStudies: [
      { title: "Reducing AOG Response Time by 60%", slug: "aerospace-aog-response", industry: "Aerospace & Defense" },
      { title: "Peak-Season Warehouse Surge Operations", slug: "ecommerce-peak-season", industry: "E-Commerce" },
    ],
  },
  "pharma-cold-chain": {
    title: "48-Hour Origin-to-Shelf Pharmaceutical Distribution",
    industry: "Life Sciences",
    client: "Global Pharmaceutical Company",
    heroImage: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1400&q=80&auto=format",
    challenge: "A top-10 global pharmaceutical company needed to distribute temperature-sensitive biologic medications from their EU manufacturing facility to US distribution centers within 48 hours — maintaining 2-8°C throughout the entire journey. Previous providers averaged 72+ hours with a 3.2% temperature excursion rate, resulting in $8M in annual product losses.",
    solution: "We engineered a GDP-compliant cold chain using active temperature-controlled containers with redundant cooling systems. A dedicated lane with pre-cleared customs documentation reduced border dwell time from 8 hours to under 90 minutes. Real-time IoT sensors provided minute-by-minute temperature readings with predictive alerts. We established backup routing protocols and maintained emergency inventory at a bonded cold-storage facility in transit.",
    results: [
      { metric: "48hr", label: "Cycle Time", description: "Consistent origin-to-shelf delivery within 48-hour window" },
      { metric: "0.1%", label: "Excursion Rate", description: "Temperature excursions reduced from 3.2% to 0.1%" },
      { metric: "$7.4M", label: "Product Saved", description: "Annual product loss eliminated through cold chain integrity" },
      { metric: "100%", label: "GDP Compliant", description: "Full Good Distribution Practice compliance maintained" },
    ],
    timeline: "Lane qualification and validation completed in 60 days",
    services: ["Air Freight", "Customs Brokerage", "Contract Logistics", "Supply Chain Visibility"],
    testimonial: {
      quote: "Patient safety depends on cold chain integrity. Crane's solution gave us confidence that our products arrive in perfect condition, every time. The reduction in excursions alone justified the entire program.",
      author: "Head of Supply Chain",
      role: "Global Pharmaceutical Company",
    },
    relatedStudies: [
      { title: "Reducing AOG Response Time by 60%", slug: "aerospace-aog-response", industry: "Aerospace & Defense" },
      { title: "JIT Delivery Network for EV Battery Modules", slug: "automotive-jit-battery", industry: "Automotive" },
    ],
  },
  "ecommerce-peak-season": {
    title: "Scaling from 400K to 2.1M Sq Ft in 90 Days for Peak Season",
    industry: "E-Commerce & Retail",
    client: "Major Online Retailer",
    heroImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1400&q=80&auto=format",
    challenge: "A high-growth e-commerce brand needed to scale their fulfillment capacity by 5x for the holiday peak season — from 400K sq ft to 2.1M sq ft — while maintaining 99.5%+ order accuracy. Previous peaks had resulted in shipping delays, mispicks, and negative customer reviews that impacted their marketplace ratings.",
    solution: "We activated 3 surge warehouses within our existing network, pre-configured with the client's WMS integration and pick/pack workflows. We recruited and trained 1,200 temporary workers using our standardized onboarding program. Inventory was pre-positioned based on velocity data, and we implemented wave-based picking with real-time accuracy monitoring. A dedicated operations team provided daily capacity planning and exception management.",
    results: [
      { metric: "2.1M", label: "Sq Ft Managed", description: "Scaled from 400K to 2.1M sq ft within 90-day ramp" },
      { metric: "99.7%", label: "Order Accuracy", description: "Exceeded target throughout entire peak period" },
      { metric: "1,200", label: "Temp Workers", description: "Recruited, trained, and deployed across 3 facilities" },
      { metric: "0", label: "SLA Misses", description: "All carrier pickup windows met throughout peak" },
    ],
    timeline: "90-day ramp beginning September 1st, peak operations October through January",
    services: ["Contract Logistics", "E-commerce Shipping", "Managed Transportation", "Value Added Services"],
    relatedStudies: [
      { title: "JIT Delivery Network for EV Battery Modules", slug: "automotive-jit-battery", industry: "Automotive" },
      { title: "48-Hour Pharma Distribution", slug: "pharma-cold-chain", industry: "Life Sciences" },
    ],
  },
}

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>()
  const study = caseStudies[slug || ""]
  const heroReveal = useReveal()
  const resultsReveal = useReveal()
  const solutionReveal = useReveal()

  if (!study) {
    return (
      <div className="min-h-screen bg-white text-foreground">
        <Header />
        <div className="pt-32 pb-20 px-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-muted-foreground mb-8">The case study you're looking for doesn't exist.</p>
          <Link to="/" className="text-secondary font-semibold hover:underline">← Back to Home</Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />

      {/* Hero */}
      <section ref={heroReveal.ref as React.RefObject<HTMLElement>} className="relative pt-24 md:pt-28">
        <div className="relative h-[340px] md:h-[420px] overflow-hidden">
          <img src={study.heroImage} alt={study.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-12 pb-10 md:pb-14">
            <div className="max-w-[1400px] mx-auto">
              <div className={cn("transition-all duration-700", heroReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-secondary bg-secondary/20 px-3 py-1 rounded-full">{study.industry}</span>
                  <span className="text-[11px] text-white/50">Case Study</span>
                </div>
                <h1 className="font-display text-2xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight max-w-3xl">{study.title}</h1>
                <p className="text-white/50 text-sm mt-4">Client: {study.client}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 md:py-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Challenge */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[3px] bg-red-400 rounded-full" />
                <span className="text-xs font-semibold tracking-[0.15em] text-red-400 uppercase">The Challenge</span>
              </div>
              <p className="text-[15px] text-muted-foreground leading-[1.85]">{study.challenge}</p>
            </div>

            {/* Solution */}
            <section ref={solutionReveal.ref as React.RefObject<HTMLElement>}>
              <div className={cn("transition-all duration-700", solutionReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[3px] bg-secondary rounded-full" />
                  <span className="text-xs font-semibold tracking-[0.15em] text-secondary uppercase">Our Solution</span>
                </div>
                <p className="text-[15px] text-muted-foreground leading-[1.85]">{study.solution}</p>
              </div>
            </section>

            {/* Results */}
            <section ref={resultsReveal.ref as React.RefObject<HTMLElement>}>
              <div className={cn("transition-all duration-700", resultsReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[3px] bg-primary rounded-full" />
                  <span className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">Results</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  {study.results.map((r, i) => (
                    <div
                      key={i}
                      className={cn(
                        "bg-[#f7f9fb] rounded-xl p-6 border border-gray-200/80 transition-all duration-500",
                        resultsReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      )}
                      style={{ transitionDelay: resultsReveal.visible ? `${i * 100}ms` : "0ms" }}
                    >
                      <div className="text-3xl font-bold text-[#0a3d62] mb-1">{r.metric}</div>
                      <div className="text-[11px] font-semibold tracking-[0.1em] text-secondary uppercase mb-2">{r.label}</div>
                      <p className="text-sm text-gray-500">{r.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonial */}
            {study.testimonial && (
              <div className="bg-primary/[0.03] border-l-4 border-secondary rounded-r-xl p-8">
                <blockquote className="text-[15px] text-foreground leading-[1.8] italic mb-4">
                  "{study.testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-sm text-foreground">{study.testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{study.testimonial.role}</div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Timeline */}
            <div className="bg-[#f7f9fb] rounded-xl p-6 border border-gray-200/80">
              <h4 className="font-display font-bold text-sm text-foreground mb-3">Timeline</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{study.timeline}</p>
            </div>

            {/* Services Used */}
            <div className="bg-[#f7f9fb] rounded-xl p-6 border border-gray-200/80">
              <h4 className="font-display font-bold text-sm text-foreground mb-3">Services Deployed</h4>
              <div className="flex flex-wrap gap-2">
                {study.services.map((s) => (
                  <span key={s} className="text-[11px] font-medium text-[#0a3d62] bg-white px-3 py-1.5 rounded-full border border-gray-200">{s}</span>
                ))}
              </div>
            </div>

            {/* Related */}
            <div>
              <h4 className="font-display font-bold text-sm text-foreground mb-4">Related Case Studies</h4>
              <div className="space-y-3">
                {study.relatedStudies.map((rs) => (
                  <Link
                    key={rs.slug}
                    to={`/case-studies/${rs.slug}`}
                    className="block p-4 rounded-xl border border-gray-200/80 hover:border-secondary/30 hover:shadow-md transition-all group"
                  >
                    <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-secondary">{rs.industry}</span>
                    <h5 className="text-sm font-semibold text-foreground mt-1 group-hover:text-secondary transition-colors leading-snug">{rs.title}</h5>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  )
}
