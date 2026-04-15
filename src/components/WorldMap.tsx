import { useRef } from "react"
import { useInView } from "../hooks/useInView"

const cn = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(" ")

const offices = [
  { name: "Houston (HQ)", x: "19%", y: "44%", type: "headquarters" as const },
  { name: "Los Angeles", x: "12%", y: "40%", type: "office" as const },
  { name: "New York", x: "24%", y: "38%", type: "office" as const },
  { name: "Mexico City", x: "17%", y: "50%", type: "office" as const },
  { name: "Sao Paulo", x: "30%", y: "68%", type: "office" as const },
  { name: "London", x: "46%", y: "32%", type: "regional" as const },
  { name: "Frankfurt", x: "49%", y: "33%", type: "office" as const },
  { name: "Dubai", x: "59%", y: "46%", type: "regional" as const },
  { name: "Mumbai", x: "65%", y: "48%", type: "office" as const },
  { name: "Singapore", x: "73%", y: "56%", type: "regional" as const },
  { name: "Shanghai", x: "77%", y: "40%", type: "office" as const },
  { name: "Tokyo", x: "82%", y: "38%", type: "office" as const },
  { name: "Sydney", x: "84%", y: "72%", type: "regional" as const },
  { name: "Johannesburg", x: "53%", y: "68%", type: "office" as const },
]

const regions = [
  { name: "North America", offices: 85 },
  { name: "South America", offices: 25 },
  { name: "Europe", offices: 65 },
  { name: "Middle East & Africa", offices: 35 },
  { name: "Asia Pacific", offices: 45 },
]

export function WorldMap() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section id="locations" ref={sectionRef} className="py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={cn("inline-block text-secondary font-semibold mb-4 transition-all duration-500 font-display", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>GLOBAL NETWORK</span>
          <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-500 delay-100 text-balance font-display", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
            Wherever you need us, we're there
          </h2>
          <p className={cn("text-lg text-primary-foreground/70 leading-relaxed transition-all duration-500 delay-200", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
            With 250+ offices across 120+ countries, Crane Worldwide provides local expertise backed by global resources.
          </p>
        </div>

        {/* Stats */}
        <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-500 delay-300", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
          {[
            { icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z", value: "120+", label: "Countries" },
            { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", value: "250+", label: "Offices" },
            { icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm13 10v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75", value: "4,000+", label: "Employees" },
            { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", value: "24/7", label: "Support" },
          ].map((s) => (
            <div key={s.label} className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <svg className="h-8 w-8 text-secondary mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={s.icon} /></svg>
              <div className="text-3xl font-bold mb-1 font-display">{s.value}</div>
              <div className="text-primary-foreground/60 text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className={cn("relative w-full max-w-7xl mx-auto transition-all duration-700 delay-400 rounded-2xl overflow-hidden border border-white/10", isInView ? "opacity-100 scale-100" : "opacity-0 scale-95")}>
          <div className="relative w-full" style={{ paddingBottom: "50%" }}>
            <img src="/world-map-dark.svg" alt="World map" className="absolute inset-0 w-full h-full object-contain opacity-40" />
            {/* Office dots */}
            {offices.map((office) => (
              <div key={office.name} className="absolute group" style={{ left: office.x, top: office.y, transform: "translate(-50%, -50%)" }}>
                {office.type === "headquarters" && (
                  <span className="absolute inset-0 w-5 h-5 -m-1 rounded-full bg-secondary animate-ping opacity-40" />
                )}
                <span className={cn(
                  "block rounded-full border border-white/50 relative z-10",
                  office.type === "headquarters" ? "w-3.5 h-3.5 bg-secondary" : office.type === "regional" ? "w-2.5 h-2.5 bg-secondary/80" : "w-2 h-2 bg-green-400"
                )} />
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-card text-card-foreground text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg z-20">
                  {office.name}
                  {office.type === "headquarters" && <span className="text-secondary ml-1">(HQ)</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-4 bg-primary/80 backdrop-blur-sm rounded-lg p-3 text-sm border border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-secondary" />
              <span className="text-primary-foreground/80">Headquarters</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary/80" />
              <span className="text-primary-foreground/80">Regional Hub</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-primary-foreground/80">Office</span>
            </div>
          </div>
        </div>

        {/* Region cards */}
        <div className={cn("grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-16 transition-all duration-500 delay-500", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
          {regions.map((r) => (
            <div key={r.name} className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
              <h4 className="font-semibold mb-1 font-display">{r.name}</h4>
              <p className="text-sm text-primary-foreground/60">{r.offices} offices</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={cn("text-center mt-16 transition-all duration-500 delay-700", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
          <a href="#" className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 py-3.5 rounded-lg transition-colors">
            Find Your Nearest Office
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
