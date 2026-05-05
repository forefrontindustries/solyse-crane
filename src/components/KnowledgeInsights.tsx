import { useRef } from "react"
import { useInView } from "../hooks/useInView"

const cn = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(" ")

const articles = [
  {
    tag: "Market Intelligence",
    title: "Iran Tensions Disrupt Key Shipping Corridors — What Shippers Need to Know",
    excerpt: "Heightened tensions in the Strait of Hormuz are creating routing challenges for Asia–Europe trade. Our analysis covers alternative corridors, rate impacts, and mitigation strategies.",
    date: "Apr 28, 2026",
    large: true,
  },
  {
    tag: "Seasonal Planning",
    title: "Lunar New Year 2027: Early Planning Guide for Importers",
    excerpt: "Factory shutdowns begin earlier each year. Start capacity planning now to avoid premium rates and space shortages.",
    date: "Apr 22, 2026",
    large: false,
  },
  {
    tag: "Regulatory Update",
    title: "CBAM Transition Period: Compliance Checklist for Exporters to the EU",
    excerpt: "The EU Carbon Border Adjustment Mechanism enters its next phase. Here's what documentation you need in place.",
    date: "Apr 15, 2026",
    large: false,
  },
]

export function KnowledgeInsights() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  const mainArticle = articles[0]
  const sideArticles = articles.slice(1)

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white relative">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className={cn("flex items-center gap-3 mb-4 transition-all duration-700", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
          <div className="w-8 h-[3px] bg-[#0ea554] rounded-full" />
          <span className="text-xs font-semibold tracking-[0.15em] text-[#0ea554] uppercase">Insights & Market Updates</span>
        </div>

        {/* Heading + View All */}
        <div className={cn("flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 transition-all duration-700 delay-100", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628]">
            Stay ahead of disruption
          </h2>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0ea554] hover:text-[#0ea554]/80 transition-colors group">
            View All Articles
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
        </div>

        {/* Articles Grid: 1 large + 2 small stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Main Article */}
          <div className={cn(
            "lg:col-span-3 bg-[#f7f9fb] rounded-xl border border-gray-200/80 p-8 md:p-10 flex flex-col justify-between transition-all duration-700 delay-200 hover:shadow-lg hover:border-gray-300 group cursor-pointer",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}>
            <div>
              <span className="inline-block text-[10px] font-semibold tracking-[0.12em] uppercase text-[#0a3d62]/60 bg-white px-3 py-1 rounded-full border border-gray-200 mb-6">{mainArticle.tag}</span>
              <h3 className="text-xl md:text-2xl font-bold text-[#0a1628] mb-4 leading-snug group-hover:text-[#0a3d62] transition-colors">{mainArticle.title}</h3>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed">{mainArticle.excerpt}</p>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <span className="text-xs text-gray-400">{mainArticle.date}</span>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0ea554] group-hover:gap-2 transition-all">
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </span>
            </div>
          </div>

          {/* Side Articles */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {sideArticles.map((article, i) => (
              <div
                key={i}
                className={cn(
                  "flex-1 bg-[#f7f9fb] rounded-xl border border-gray-200/80 p-6 md:p-8 flex flex-col justify-between transition-all duration-700 hover:shadow-lg hover:border-gray-300 group cursor-pointer",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                )}
                style={{ transitionDelay: isInView ? `${300 + i * 100}ms` : "0ms" }}
              >
                <div>
                  <span className="inline-block text-[10px] font-semibold tracking-[0.12em] uppercase text-[#0a3d62]/60 bg-white px-3 py-1 rounded-full border border-gray-200 mb-4">{article.tag}</span>
                  <h3 className="text-base md:text-lg font-bold text-[#0a1628] mb-2 leading-snug group-hover:text-[#0a3d62] transition-colors">{article.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{article.excerpt}</p>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{article.date}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0ea554] group-hover:gap-2 transition-all">
                    Read
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
