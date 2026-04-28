import { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"

const cn = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(" ")

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => { setIsVisible(true) }, [])

  return (
    <section ref={heroRef} className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.93] via-primary/80 to-primary/65" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 z-[1] opacity-[0.04]">
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
      <div className="relative z-10 pt-32 md:pt-40 pb-16 md:pb-20 px-6 lg:px-12">
        <div className="max-w-[90rem] mx-auto">
          {/* Card — tighter padding, higher contrast, anchored */}
          <div className={cn(
            "bg-white/[0.09] backdrop-blur-xl border border-white/[0.14] rounded-2xl p-7 md:p-10 shadow-2xl shadow-black/25 w-full lg:w-[50%] transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            {/* Headline */}
            <h1 className={cn(
              "text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.12] mb-4 font-display transition-all duration-700 delay-150",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              When your supply chain can't fail,{" "}
              <span className="text-secondary">we deliver.</span>
            </h1>

            {/* Subline */}
            <p className={cn(
              "text-[15px] md:text-base text-white/60 max-w-md leading-relaxed mb-7 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )} style={{ transitionDelay: "250ms" }}>
              Through hands-on expertise, real-time visibility, and proactive communication across every shipment.
            </p>

            {/* CTA */}
            <div className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")} style={{ transitionDelay: "350ms" }}>
              <Link to="/industries" className="inline-flex items-center gap-2.5 bg-secondary hover:bg-secondary/90 text-white font-semibold px-7 py-3 text-[15px] rounded-lg transition-all group shadow-lg shadow-secondary/25">
                Find Your Solution
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <div className="mt-3">
                <a href="#cta" className="text-[13px] text-white/45 hover:text-white/70 transition-colors">
                  Prefer to talk? <span className="underline underline-offset-2">Connect with an expert →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
