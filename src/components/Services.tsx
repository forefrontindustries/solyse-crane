import { useRef, useEffect, useState } from "react"

const services = [
  {
    name: "Air Freight",
    desc: "Time-critical air cargo with global carrier partnerships, charter options, and door-to-door visibility.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[23px] h-[23px]">
        <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
      </svg>
    ),
  },
  {
    name: "Ocean Freight",
    desc: "FCL and LCL ocean shipping with carrier-neutral flexibility and full customs support.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[23px] h-[23px]">
        <rect x="2" y="8" width="20" height="10" rx="2" />
        <path d="M6 8V6a4 4 0 018 0v2" />
        <circle cx="8" cy="18" r="2" />
        <circle cx="16" cy="18" r="2" />
      </svg>
    ),
  },
  {
    name: "Ground Services",
    desc: "FTL, LTL, and intermodal ground transportation across North America and beyond.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[23px] h-[23px]">
        <rect x="1" y="3" width="15" height="13" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    name: "Time Critical",
    desc: "Next flight out, on-board courier, and charter solutions for when every minute counts.",

    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[23px] h-[23px]">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
        <path d="M12 12l10-5M12 12v10M12 12L2 7" />
      </svg>
    ),
  },
  {
    name: "Contract Logistics",
    desc: "Integrated warehousing, fulfillment, and value-added services for your supply chain.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[23px] h-[23px]">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
  },
  {
    name: "Customs Brokerage",
    desc: "Licensed brokers ensuring compliant, efficient customs clearance across all trade lanes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[23px] h-[23px]">
        <path d="M12 2H2v10l9.29 9.29a1 1 0 001.41 0l7.79-7.79a1 1 0 000-1.41L12 2z" />
        <circle cx="7" cy="7" r="1.5" fill="currentColor" opacity=".4" />
      </svg>
    ),
  },
  {
    name: "Project Logistics",
    desc: "Heavy lift, oversized cargo, and complex project management from planning to delivery.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[23px] h-[23px]">
        <polygon points="12 2 2 7 12 12 22 7" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    name: "Managed Transport",
    desc: "Technology-driven TMS optimizing cost, visibility, and carrier performance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[23px] h-[23px]">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
]

export function Services() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.06, rootMargin: "0px 0px -30px 0px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} id="services" className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1600px] mx-auto">
      {/* Header */}
      <div className={`flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-[52px] transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-[26px] h-[2px] bg-secondary rounded-sm" />
            <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary">What We Do</span>
          </div>
          <h2 className="font-display font-extrabold text-[clamp(30px,4.2vw,54px)] leading-[1.06] text-foreground tracking-tight">
            Complete Logistics<br />Coverage
          </h2>
        </div>
        <div className="flex flex-col items-end gap-3.5">
          <p className="text-[15px] text-muted-foreground max-w-[340px] text-right leading-[1.7] font-light">
            Full-service global freight forwarding and contract logistics — every mode, every lane, every industry.
          </p>
          <a href="#" className="inline-flex items-center gap-2 bg-secondary/10 text-secondary font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-secondary hover:text-white transition-all duration-200">
            View All Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
        {services.map((s, i) => (
          <a
            key={s.name}
            href="#"
            className={`relative rounded-xl p-[30px_26px] flex flex-col gap-3.5 transition-all duration-300 group
              ${s.featured
                ? "bg-foreground border-[1.5px] border-foreground"
                : "bg-[#f4f6f9] border-[1.5px] border-transparent"
              }
              hover:-translate-y-[5px] hover:shadow-[0_16px_48px_rgba(11,37,69,0.1)]
              ${!s.featured ? "hover:bg-white" : ""}
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
            style={{ transitionDelay: `${(i % 4) * 80}ms` }}
          >
            {/* Hover border */}
            <span className={`absolute inset-[-1.5px] rounded-xl border-[1.5px] transition-opacity pointer-events-none ${s.featured ? "border-secondary/60" : "border-secondary"} opacity-0 group-hover:opacity-100`} />

            {/* Icon */}
            <div className={`w-[50px] h-[50px] rounded-[11px] flex items-center justify-center transition-all duration-300
              ${s.featured
                ? "bg-secondary/25 text-[#7eeabf] group-hover:bg-secondary group-hover:text-white"
                : "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white"
              }
            `}>
              {s.icon}
            </div>

            {/* Name */}
            <div className={`font-display font-bold text-[17px] tracking-[-0.01em] ${s.featured ? "text-white" : "text-foreground"}`}>
              {s.name}
            </div>

            {/* Description */}
            <p className={`text-[13px] leading-[1.6] flex-1 ${s.featured ? "text-white/[0.58]" : "text-muted-foreground"}`}>
              {s.desc}
            </p>

            {/* Link */}
            <div className={`text-[12px] font-semibold flex items-center gap-[5px] group-hover:gap-[9px] transition-all ${s.featured ? "text-[#7eeabf]" : "text-secondary"}`}>
              Learn more →
            </div>
          </a>
        ))}
      </div>
      </div>
    </section>
  )
}
