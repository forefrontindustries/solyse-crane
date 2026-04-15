import { useRef, useEffect, useState } from "react"

const pillars = [
  {
    title: "Carbon-Neutral Operations",
    desc: "We're actively reducing emissions across our global network through optimized routing, modal shift strategies, and verified carbon offset programs — targeting net-zero by 2035.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[21px] h-[21px]">
        <path d="M12 22c4-2.5 7-6.5 7-11a7 7 0 10-14 0c0 4.5 3 8.5 7 11z" />
        <path d="M12 13V8M9 11l3-3 3 3" />
      </svg>
    ),
  },
  {
    title: "Community Impact",
    desc: "Through Crane Cares, our people invest thousands of volunteer hours annually in local communities — from disaster relief logistics to STEM education programs worldwide.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[21px] h-[21px]">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Ethical Supply Chains",
    desc: "Full compliance with modern slavery legislation, anti-corruption frameworks, and responsible sourcing — because how you move goods matters as much as where.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[21px] h-[21px]">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
]

export function About() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative py-24 px-6 lg:px-12 bg-white overflow-hidden">
      {/* Diagonal background accent — offset higher so it doesn't align with content edges */}
      <div className="absolute right-0 -top-24 bottom-0 w-[55%] pointer-events-none" style={{ background: "linear-gradient(140deg, transparent 28%, #f4f6f9 28%)" }} />

      <div className={`relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        {/* Images */}
        <div className="relative h-[420px] lg:h-[500px]">
          <div className="absolute inset-0 right-20 bottom-20 rounded-[14px] overflow-hidden shadow-[0_20px_60px_rgba(11,37,69,0.14)]">
            <img
              src="https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2Fy2LUo7EwPPQETSk1tpg3p%2Fcontainer-port-cranes-golden-hour-sunset-unsplash_8.jpg"
              alt="Container port cranes at golden hour"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 left-[110px] top-[56%] rounded-[14px] overflow-hidden border-4 border-white shadow-[0_20px_60px_rgba(11,37,69,0.14)]">
            <img
              src="https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2FrID6yG3rTQKAD8cy_p5yj%2Fsolar-panels-warehouse-logistics-sustainability-unsplash_1.jpg"
              alt="Sustainable warehouse with solar panels"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Badge */}
          <div className="absolute top-9 -left-4 z-20 bg-secondary text-white rounded-xl px-5 py-4 shadow-[0_12px_32px_rgba(46,125,79,0.38)]">
            <div className="font-display font-extrabold text-[34px] leading-none">160+</div>
            <div className="text-[10px] uppercase tracking-[0.1em] opacity-80 mt-0.5">Countries Reached</div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-7">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-[26px] h-[2px] bg-secondary rounded-sm" />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary">About Crane Worldwide</span>
            </div>
            <h2 className="font-display font-extrabold text-[clamp(30px,4.2vw,54px)] leading-[1.06] text-foreground tracking-tight">
              We Are Making<br />a Difference
            </h2>
            <p className="text-[15px] text-muted-foreground leading-[1.8] font-light max-w-[500px] mt-3.5">
              As a global logistics leader, we believe our responsibility extends beyond moving freight. We're committed to building a more sustainable, equitable supply chain — reducing our environmental footprint while strengthening the communities where we operate.
            </p>
          </div>

          {/* Pillars */}
          <div className="flex flex-col gap-1">
            {pillars.map((p) => (
              <div key={p.title} className="flex gap-4 p-4 rounded-[10px] items-start hover:bg-[#f4f6f9] transition-colors">
                <div className="w-[42px] h-[42px] rounded-[10px] bg-secondary/10 flex items-center justify-center flex-shrink-0 text-secondary">
                  {p.icon}
                </div>
                <div>
                  <div className="font-display font-bold text-[15px] text-foreground mb-1">{p.title}</div>
                  <p className="text-[13px] text-muted-foreground leading-[1.6]">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#" className="inline-flex items-center gap-2 bg-secondary/10 text-secondary font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-secondary hover:text-white transition-all duration-200 self-start">
            Learn About Our Impact
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
