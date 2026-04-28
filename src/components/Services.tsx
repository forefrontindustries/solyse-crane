import { useRef, useEffect, useState } from "react"
import { Link } from "react-router-dom"

const cn = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(" ")

function useInView(ref: React.RefObject<Element | null>) {
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsInView(true); observer.disconnect() }
    }, { threshold: 0.15 })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return isInView
}

const pillars = [
  {
    title: "Global Freight",
    description: "Air, ocean, and ground freight forwarding across every trade lane — carrier-neutral, fully managed.",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
      </svg>
    ),
  },
  {
    title: "Contract Logistics",
    description: "Integrated warehousing, fulfillment, and value-added services built around your supply chain.",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
  },
  {
    title: "Time-Critical Solutions",
    description: "Next flight out, on-board courier, and charter logistics for when every minute counts.",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Project Logistics",
    description: "Heavy-lift, oversized cargo, and complex multi-modal project management from plan to site.",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 2 7 12 12 22 7" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
]

export function Services() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  return (
    <section ref={ref} id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className={cn("mb-14 transition-all duration-700", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            How we deliver
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-xl">
            Four core capabilities powering every industry we serve
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => (
            <Link
              key={pillar.title}
              to={pillar.href}
              className={cn(
                "group relative rounded-xl border border-slate-200 bg-[#f8f9fb] p-7 flex flex-col transition-all duration-500 hover:bg-white hover:shadow-lg hover:border-slate-300 hover:-translate-y-1",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: isInView ? `${150 + i * 100}ms` : "0ms" }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-5 transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                {pillar.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                {pillar.description}
              </p>

              {/* CTA */}
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary group-hover:gap-2.5 transition-all">
                Explore
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
