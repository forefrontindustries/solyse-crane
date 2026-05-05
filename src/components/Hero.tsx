import { useEffect, useState, useRef } from "react"

const cn = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(" ")

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => { setIsVisible(true) }, [])

  const stats = [
    { value: "10", label: "Core Industries" },
    { value: "120+", label: "Countries" },
    { value: "4,000+", label: "Employees" },
    { value: "24/7", label: "Operations" },
  ]

  return (
    <section ref={heroRef} className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 z-[1] opacity-[0.05]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-36 md:pt-44 pb-20 md:pb-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Card — 50% width on desktop */}
          <div className={cn(
            "bg-white/[0.07] backdrop-blur-xl border border-white/[0.12] rounded-2xl p-8 md:p-10 lg:p-12 shadow-2xl shadow-black/20 transition-all duration-1000 w-full lg:w-[52%]",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            {/* Badge */}
            <div className={cn(
              "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 mb-7 transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
              </span>
              <span className="text-white/80 text-sm font-medium">Industry-specialized logistics</span>
            </div>

            {/* Headline */}
            <h1 className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-5 font-display transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              Your industry.{" "}
              <span className="text-secondary">Our expertise.</span>
            </h1>

            {/* Sub */}
            <p className={cn(
              "text-base md:text-lg text-white/60 max-w-lg leading-relaxed mb-8 transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              Crane Worldwide builds supply chains around the way your industry actually works — not the other way around.
            </p>

            {/* CTA */}
            <div className={cn(
              "transition-all duration-700 delay-400",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )} style={{ transitionDelay: "400ms" }}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-secondary hover:bg-secondary/90 text-white font-semibold px-7 py-3.5 text-[15px] rounded-lg transition-all group shadow-lg shadow-secondary/20"
              >
                Talk to an Expert
                <svg className="w-4.5 h-4.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </a>
            </div>
          </div>

          {/* Stats — outside the card */}
          <div className={cn(
            "grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )} style={{ transitionDelay: "600ms" }}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/[0.05] border border-white/[0.08] rounded-xl px-5 py-4 hover:bg-white/[0.08] transition-all duration-300"
              >
                <div className="text-2xl md:text-3xl font-bold text-white font-display leading-none mb-1">{stat.value}</div>
                <div className="text-[11px] md:text-xs text-white/40 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
