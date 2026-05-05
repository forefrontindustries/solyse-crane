import { useRef, useEffect, useState } from "react"

const cn = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(" ")

function useInView(ref: React.RefObject<Element | null>, options?: IntersectionObserverInit) {
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsInView(true); observer.disconnect() }
    }, { threshold: 0.15, ...options })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return isInView
}

const caseStudies = [
  {
    industry: "AEROSPACE & DEFENSE",
    stat: "34%",
    statLabel: "COST REDUCTION",
    title: "Consolidated AOG response across 12 countries",
    description: "Reduced emergency freight spend by consolidating carriers and implementing predictive parts positioning for a major OEM.",
  },
  {
    industry: "AUTOMOTIVE",
    stat: "99.2%",
    statLabel: "ON-TIME RATE",
    title: "JIT delivery network for EV battery modules",
    description: "Engineered a multi-modal just-in-time network with 4-hour delivery windows across 8 assembly plants in North America.",
  },
  {
    industry: "HEALTHCARE & LIFE SCIENCES",
    stat: "48hr",
    statLabel: "CYCLE TIME",
    title: "Temperature-controlled pharma distribution",
    description: "End-to-end cold-chain from EU manufacturing to US distribution — GDP-compliant, 48-hour origin-to-shelf cycle time.",
  },
  {
    industry: "E-COMMERCE & RETAIL",
    stat: "2.1M",
    statLabel: "SQ FT MANAGED",
    title: "Peak-season warehouse surge operations",
    description: "Scaled from 400K to 2.1M sq ft in 90 days with temp workforce, WMS integration, and 99.7% order accuracy during holiday peak.",
  },
]

export function ProofInPractice() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef)

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-[#f7f9fb]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className={cn("flex items-center gap-3 mb-4 transition-all duration-700", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
          <div className="w-8 h-[3px] bg-[#0ea554] rounded-full" />
          <span className="text-xs font-semibold tracking-[0.15em] text-[#0ea554] uppercase">Proof in Practice</span>
        </div>

        {/* Heading */}
        <h2 className={cn("text-3xl md:text-4xl font-bold text-[#0a1628] mb-12 transition-all duration-700 delay-100", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
          Real results for real supply chains
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study, i) => (
            <div
              key={i}
              className={cn(
                "bg-white rounded-xl border border-gray-200/80 p-6 md:p-8 flex gap-5 md:gap-7 transition-all duration-700 hover:shadow-lg hover:border-gray-300",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: isInView ? `${200 + i * 100}ms` : "0ms" }}
            >
              {/* Stat Block */}
              <div className="flex-shrink-0 flex flex-col items-center min-w-[70px] md:min-w-[85px]">
                <span className="text-3xl md:text-4xl font-bold text-[#0a3d62] leading-tight">{study.stat}</span>
                <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.1em] text-[#0ea554] uppercase mt-1 text-center">{study.statLabel}</span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.12em] text-[#0a3d62]/60 uppercase">{study.industry}</span>
                <h3 className="text-base md:text-lg font-bold text-[#0a1628] mt-1 mb-2 leading-snug">{study.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{study.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
