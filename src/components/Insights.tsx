import { useRef, useEffect, useState } from "react"

const articles = [
  {
    tag: "Geopolitics",
    date: "February 8, 2026",
    title: "Iran Tensions & Global Supply Chain Disruption: What Shippers Need to Know",
    excerpt:
      "Escalating tensions in the Middle East are reshaping global shipping routes and driving rate volatility. From Red Sea diversions to insurance surcharges, here's what supply chain leaders need to plan for — and how to protect your cargo flow.",
    image: "https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2FfoAeVQv2yopJ7wDFuqCTn%2Fmiddle-east-shipping-route-red-sea-cargo-ship-unsplash_4.jpg",
    size: "main" as const,
  },
  {
    tag: "Supply Chain Alert",
    date: "January 26, 2026",
    title: "Lunar New Year 2026: Supply Chain Impact & Strategy Guide",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80&auto=format",
    size: "sm" as const,
  },
  {
    tag: "Trade Policy",
    date: "January 22, 2026",
    title: "CBAM Transition: Reporting & Financial Obligations",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format",
    size: "sm" as const,
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
      {/* Header */}
      <div className={`max-w-[90rem] mx-auto flex justify-between items-end mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Insights &amp; Market Updates
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-xl">
            Industry intelligence to keep your supply chain ahead
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-secondary/10 text-secondary font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-secondary hover:text-white transition-all duration-200"
        >
          View All Articles
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </a>
      </div>

      {/* Grid */}
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-[5fr_3fr_3fr] gap-5">
        {articles.map((article, i) => (
          <a
            key={article.title}
            href="#"
            className={`bg-white rounded-[14px] overflow-hidden flex flex-col transition-all duration-300 shadow-[0_2px_12px_rgba(11,37,69,0.05)] hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(11,37,69,0.12)] group ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {/* Image */}
            <div className={`overflow-hidden bg-[#f4f6f9] ${article.size === "main" ? "h-[220px]" : "h-[148px]"}`}>
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.04]"
              />
            </div>

            {/* Body */}
            <div className={`flex flex-col gap-2.5 flex-1 ${article.size === "main" ? "p-6" : "p-5"}`}>
              <div className="flex items-center gap-2.5">
                <span className="text-[10px] font-bold tracking-[0.12em] uppercase bg-secondary/10 text-secondary px-2.5 py-0.5 rounded-full">
                  {article.tag}
                </span>
                <span className="text-[11px] text-muted-foreground/50">{article.date}</span>
              </div>
              <div className={`font-display font-bold text-foreground leading-[1.25] flex-1 group-hover:text-secondary transition-colors ${article.size === "main" ? "text-xl" : "text-base"}`}>
                {article.title}
              </div>
              {article.excerpt && (
                <p className="text-[13px] text-muted-foreground leading-[1.65]">{article.excerpt}</p>
              )}
              <div className="text-[14px] font-bold text-secondary flex items-center gap-1.5 mt-auto group-hover:gap-2.5 transition-all">
                Read Article →
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Wave transition to white */}
      <div className="absolute bottom-0 left-0 right-0 h-[50px] bg-white" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
    </section>
  )
}
