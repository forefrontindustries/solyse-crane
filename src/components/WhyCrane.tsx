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
    title: "Hands-on Expertise",
    description: "Not a call center — dedicated logistics professionals who know your cargo, your lanes, and your deadlines. Every shipment has a name behind it.",
    href: "#services",
    linkLabel: "Our services",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Global Reach",
    description: "120+ offices across 6 continents. Local knowledge in every market, with the global infrastructure to move anything, anywhere.",
    href: "/locations",
    linkLabel: "Our locations",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
      </svg>
    ),
  },
  {
    title: "Industry Specialization",
    description: "Deep vertical expertise in aerospace, automotive, energy, healthcare, high-tech, and retail — we speak your industry's language.",
    href: "/industries",
    linkLabel: "Our industries",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 2 7 12 12 22 7" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    title: "Proactive Communication",
    description: "Real-time visibility through C-View, proactive exception alerts, and a team that calls you before you have to call them.",
    href: "#technology",
    linkLabel: "Our technology",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <path d="M8 10h8M8 14h4" />
      </svg>
    ),
  },
]

export function WhyCrane() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className={cn("mb-14 transition-all duration-700", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Why Crane
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-xl">
            What makes working with us different from every other logistics provider
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={cn(
                "group relative rounded-xl border border-slate-200 bg-[#f8f9fb] p-7 flex flex-col transition-all duration-500 hover:bg-white hover:shadow-lg hover:border-slate-300 hover:-translate-y-1",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: isInView ? `${150 + i * 100}ms` : "0ms" }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                {pillar.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-foreground mb-2">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                {pillar.description}
              </p>

              {/* Link */}
              <Link
                to={pillar.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary group-hover:gap-2.5 transition-all"
              >
                {pillar.linkLabel}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
