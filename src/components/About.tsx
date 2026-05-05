import { useRef, useEffect, useState } from "react"
import { Link } from "react-router-dom"

const pillars = [
  {
    title: "Hands-on Expertise",
    desc: "Not a call center — dedicated logistics professionals who know your cargo, your lanes, and your deadlines. Every shipment has a name behind it.",
    href: "/solutions",
    linkLabel: "Our services",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[21px] h-[21px]">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Global Reach",
    desc: "120+ offices across 6 continents. Local knowledge in every market, with the global infrastructure to move anything, anywhere.",
    href: "/locations",
    linkLabel: "Our locations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[21px] h-[21px]">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
      </svg>
    ),
  },
  {
    title: "Industry Specialization",
    desc: "Deep vertical expertise in aerospace, automotive, energy, healthcare, high-tech, and retail — we speak your industry's language.",
    href: "/industries",
    linkLabel: "Our industries",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[21px] h-[21px]">
        <polygon points="12 2 2 7 12 12 22 7" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    title: "Proactive Communication",
    desc: "Real-time visibility through C-View, proactive exception alerts, and a team that calls you before you have to call them.",
    href: "/technology/shipment-tracking",
    linkLabel: "Our technology",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[21px] h-[21px]">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <path d="M8 10h8M8 14h4" />
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
      {/* Diagonal background accent */}
      <div className="absolute right-0 -top-24 bottom-0 w-[55%] pointer-events-none" style={{ background: "linear-gradient(140deg, transparent 28%, #f4f6f9 28%)" }} />

      <div className={`relative z-10 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
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
            <div className="font-display font-extrabold text-[34px] leading-none">120+</div>
            <div className="text-[10px] uppercase tracking-[0.1em] opacity-80 mt-0.5">Offices Worldwide</div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-7">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-[26px] h-[2px] bg-secondary rounded-sm" />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary">Why Crane</span>
            </div>
            <h2 className="font-display font-extrabold text-[clamp(30px,4.2vw,54px)] leading-[1.06] text-foreground tracking-tight">
              We Are Making<br />a Difference
            </h2>
            <p className="text-[15px] text-muted-foreground leading-[1.8] font-light max-w-[500px] mt-3.5">
              What makes working with us different from every other logistics provider
            </p>
          </div>

          {/* Pillars */}
          <div className="flex flex-col gap-1">
            {pillars.map((p) => (
              <Link key={p.title} to={p.href} className="flex gap-4 p-4 rounded-[10px] items-start hover:bg-[#f4f6f9] transition-colors group">
                <div className="w-[42px] h-[42px] rounded-[10px] bg-secondary/10 flex items-center justify-center flex-shrink-0 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  {p.icon}
                </div>
                <div>
                  <div className="font-display font-bold text-[15px] text-foreground mb-1 group-hover:text-secondary transition-colors">{p.title}</div>
                  <p className="text-[13px] text-muted-foreground leading-[1.6]">{p.desc}</p>
                  <span className="text-[12px] font-semibold text-secondary mt-1.5 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {p.linkLabel} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
