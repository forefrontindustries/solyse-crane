import { useRef, useEffect, useState } from "react"
import { Link } from "react-router-dom"

const industries = [
  {
    slug: "aerospace-defense",
    tag: "Aerospace & Defense",
    title: "Time-Critical AOG Solutions for Global Aviation",
    excerpt:
      "When an aircraft is grounded, every hour counts. Our dedicated aerospace team delivers urgent AOG parts worldwide with ITAR/EAR compliance and 24/7 operations.",
    image: "https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2FJHzTiY2Fn5f0m32UzPGBf%2Fcrane-worldwide-logistics-aerospace-warehouse_5.jpg",
  },
  {
    slug: "automotive",
    tag: "Automotive",
    title: "Just-in-Time Delivery for Production Line Continuity",
    excerpt:
      "Keep assembly lines moving with precision logistics. Multi-modal supply chains designed to meet the exact timing demands of modern automotive manufacturing.",
    image: "https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2F3v2Zji06dR8hnep7Vp33Q%2Fautomotive-logistics-supply-chain-warehouse_5.jpg",
  },
  {
    slug: "energy",
    tag: "Energy & Oil/Gas",
    title: "Heavy-Lift Project Cargo for Remote Operations",
    excerpt:
      "Oversized equipment transport and remote site delivery for the world's most demanding energy projects. From rigs to refineries, we move what others can't.",
    image: "https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2F1cvDm9TzZCCXFgRPtoIOO%2Fenergy-oil-gas-logistics-heavy-cargo_3.jpg",
  },
]

export function Insights() {
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
    <section
      ref={ref}
      id="insights"
      className="relative bg-[#f4f6f9] overflow-hidden py-24 px-6 lg:px-12"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className={`flex justify-between items-end mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-[26px] h-[2px] bg-secondary rounded-sm" />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-secondary">
                Industry Solutions
              </span>
            </div>
            <h2 className="font-display font-extrabold text-[clamp(30px,4.2vw,54px)] leading-[1.06] text-foreground tracking-tight">
              Find Your Industry Solution
            </h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
              Solutions tailored to your business and supply chain challenges
            </p>
          </div>
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 bg-secondary/10 text-secondary font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-secondary hover:text-white transition-all duration-200"
          >
            All Industries
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Link>
        </div>

        {/* 3 Equal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {industries.map((item, i) => (
            <Link
              key={item.slug}
              to={`/industries/${item.slug}`}
              className={`bg-white rounded-[14px] overflow-hidden flex flex-col transition-all duration-300 shadow-[0_2px_12px_rgba(11,37,69,0.05)] hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(11,37,69,0.12)] group ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="overflow-hidden bg-[#f4f6f9] h-[200px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.04]"
                />
              </div>

              {/* Body */}
              <div className="flex flex-col gap-2.5 flex-1 p-6">
                <div className="flex items-center gap-2.5">
                  <span className="text-[10px] font-bold tracking-[0.12em] uppercase bg-secondary/10 text-secondary px-2.5 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <div className="font-display font-bold text-foreground leading-[1.25] flex-1 group-hover:text-secondary transition-colors text-lg">
                  {item.title}
                </div>
                <p className="text-[13px] text-muted-foreground leading-[1.65]">{item.excerpt}</p>
                <div className="text-[14px] font-bold text-secondary flex items-center gap-1.5 mt-auto group-hover:gap-2.5 transition-all">
                  Learn More →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Wave transition to white */}
      <div className="absolute bottom-0 left-0 right-0 h-[50px] bg-white" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
    </section>
  )
}
