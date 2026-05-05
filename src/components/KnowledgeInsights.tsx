import { useRef } from "react"
import { Link } from "react-router-dom"
import { useInView } from "../hooks/useInView"

const cn = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(" ")

const articles = [
  {
    tag: "Market Intelligence",
    tagColor: "bg-red-500",
    title: "Iran Tensions Disrupt Key Shipping Corridors — What Shippers Need to Know",
    excerpt: "Heightened tensions in the Strait of Hormuz are creating routing challenges for Asia–Europe trade. Our analysis covers alternative corridors, rate impacts, and mitigation strategies.",
    date: "Apr 28, 2026",
    image: "https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2FaJ5SmmcttRQEitnRoi5SC%2Fshipping-strait-of-hormuz-container-ship-unsplash_1.jpg",
    href: "/insights/iran-shipping-disruption",
  },
  {
    tag: "Seasonal Planning",
    tagColor: "bg-amber-500",
    title: "Lunar New Year 2027: Early Planning Guide for Importers",
    excerpt: "Factory shutdowns begin earlier each year. Start capacity planning now to avoid premium rates and space shortages.",
    date: "Apr 22, 2026",
    image: "https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2FE6_oDpcHJl0AHpKnChRXT%2Flunar-new-year-cargo-port-logistics_9.jpg",
    href: "/insights/lunar-new-year-2027",
  },
  {
    tag: "Regulatory Update",
    tagColor: "bg-blue-500",
    title: "CBAM Transition Period: Compliance Checklist for Exporters to the EU",
    excerpt: "The EU Carbon Border Adjustment Mechanism enters its next phase. Here's what documentation you need in place.",
    date: "Apr 15, 2026",
    image: "https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2FJGQJcXE9Z8agS3_N3RfFU%2Feu-carbon-border-adjustment-customs-compliance_3.jpg",
    href: "/insights/cbam-compliance-checklist",
  },
]

export function KnowledgeInsights() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className={cn("flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 transition-all duration-700", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[3px] bg-[#0ea554] rounded-full" />
              <span className="text-xs font-semibold tracking-[0.15em] text-[#0ea554] uppercase">Insights & Market Updates</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#0a1628] tracking-tight">
              Stay ahead of disruption
            </h2>
            <p className="mt-3 text-base text-gray-500 max-w-lg">Expert analysis on the trends shaping global trade.</p>
          </div>
          <a href="#" className="mt-6 sm:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-[#0ea554] hover:text-[#0ea554]/80 transition-colors group">
            View All Articles
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
        </div>

        {/* 3-Column Equal Grid */}
        <div className="grid md:grid-cols-3 gap-7">
          {articles.map((article, i) => (
            <Link
              key={i}
              to={article.href}
              className={cn(
                "group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white block",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: isInView ? `${150 + i * 100}ms` : "0ms" }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`${article.tagColor} px-3 py-1 rounded-full text-white text-[11px] font-semibold tracking-wide`}>
                    {article.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-7">
                <time className="text-sm text-gray-400">{article.date}</time>
                <h3 className="mt-3 text-lg font-bold text-[#0a1628] leading-snug group-hover:text-[#0ea554] transition-colors">
                  {article.title}
                </h3>
                <p className="mt-3 text-[14px] text-gray-500 leading-relaxed line-clamp-3">{article.excerpt}</p>
                <div className="mt-5">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a1628] group-hover:text-[#0ea554] transition-colors">
                    Read Article
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
