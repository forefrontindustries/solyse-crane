import { useParams, Link } from "react-router-dom"
import { useRef, useState, useEffect } from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

const cn = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(" ")

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

const articles: Record<string, {
  title: string
  category: string
  categoryColor: string
  date: string
  readTime: string
  author: { name: string; role: string }
  heroImage: string
  keyTakeaways: string[]
  content: { type: "p" | "h2" | "h3" | "ul" | "callout" | "cta-box"; text: string; items?: string[]; ctaLabel?: string; ctaHref?: string }[]
  tags: string[]
  relatedArticles: { title: string; slug: string; category: string; date: string }[]
}> = {
  "iran-shipping-disruption": {
    title: "Iran Tensions & Global Supply Chain Disruption: What Shippers Need to Know",
    category: "Geopolitics",
    categoryColor: "bg-red-500",
    date: "February 8, 2026",
    readTime: "8 min read",
    author: { name: "Crane Worldwide Research Team", role: "Crane Worldwide Logistics" },
    heroImage: "https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2FaJ5SmmcttRQEitnRoi5SC%2Fshipping-strait-of-hormuz-container-ship-unsplash_1.jpg",
    keyTakeaways: [
      "+10–14 days on Asia-Europe lanes",
      "Spot rates up 40–80% on affected lanes",
      "War risk premiums surging",
      "Plan Q2 buffer of 2–3 weeks",
    ],
    content: [
      { type: "p", text: "Escalating tensions in the Middle East are reshaping global shipping routes and driving rate volatility. From Red Sea diversions to insurance surcharges, here's what supply chain leaders need to plan for — and how to protect your cargo flow." },
      { type: "h2", text: "Red Sea Route Diversions" },
      { type: "p", text: "Major carriers have rerouted vessels around the Cape of Good Hope, adding 10–14 days to Asia-Europe transit times. This is driving a significant spike in spot rates across most major trade lanes." },
      { type: "h2", text: "Insurance Surcharges" },
      { type: "p", text: "War risk premiums for vessels transiting the Red Sea have increased dramatically. Shippers should review their cargo insurance coverage and work with brokers to understand exposure." },
      { type: "h2", text: "What Shippers Should Do Now" },
      { type: "ul", text: "", items: [
        "Review all shipments routing through the Red Sea or Suez Canal corridor",
        "Evaluate alternative routings and modal options with your logistics partner",
        "Build contingency lead time buffer of at least 2–3 weeks into Q2 plans",
        "Contact your Crane account manager for a lane-specific impact assessment",
      ]},
      { type: "cta-box", text: "Our trade advisory team can review your specific lanes and recommend mitigation strategies.", ctaLabel: "Talk to a Trade Advisor", ctaHref: "#cta" },
    ],
    tags: ["Geopolitics", "Ocean Freight", "Risk Management", "Asia-Europe Trade"],
    relatedArticles: [
      { title: "Lunar New Year 2026: Supply Chain Impact", slug: "lunar-new-year-2027", category: "Seasonal Planning", date: "Apr 22, 2026" },
      { title: "CBAM Transition: Reporting Obligations", slug: "cbam-compliance-checklist", category: "Regulatory Update", date: "Apr 15, 2026" },
      { title: "2026 Ocean Freight Outlook", slug: "iran-shipping-disruption", category: "Market Update", date: "Jan 2026" },
    ],
  },
  "lunar-new-year-2027": {
    title: "Lunar New Year 2027: Early Planning Guide for Importers",
    category: "Seasonal Planning",
    categoryColor: "bg-amber-500",
    date: "April 22, 2026",
    readTime: "4 min read",
    author: { name: "Asia-Pacific Trade Team", role: "Crane Worldwide Logistics" },
    heroImage: "https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2FE6_oDpcHJl0AHpKnChRXT%2Flunar-new-year-cargo-port-logistics_9.jpg",
    keyTakeaways: [
      "LNY falls on February 6, 2027",
      "Factory shutdowns start Jan 20–24",
      "Book ocean freight by mid-December",
      "Rates spike 15–30% in lead-up weeks",
    ],
    content: [
      { type: "p", text: "Lunar New Year 2027 falls on February 6th, but the impact on global supply chains begins much earlier. Factory shutdowns across China, Vietnam, and other Asian manufacturing hubs typically start 2-3 weeks before the holiday and can extend 1-2 weeks after. Smart importers are already planning their Q1 2027 inventory strategy." },
      { type: "h2", text: "Key Dates to Plan Around" },
      { type: "ul", text: "", items: [
        "January 20-24: Pre-holiday production rush begins winding down",
        "January 27-31: Most factories enter shutdown mode",
        "February 6: Lunar New Year (Year of the Goat)",
        "February 7-20: Extended holiday period for most workers",
        "February 21-28: Gradual production restart (expect 50-70% capacity)",
        "March 1+: Full production typically resumes",
      ]},
      { type: "h2", text: "Capacity Planning Recommendations" },
      { type: "p", text: "Ocean freight capacity tightens significantly in December and January as importers rush to ship before the shutdown. Booking early is essential — space on major Asia-North America and Asia-Europe routes becomes scarce 4-6 weeks before the holiday." },
      { type: "h2", text: "Rate Impact" },
      { type: "p", text: "Historically, ocean freight rates on transpacific routes increase 15-30% in the 6 weeks leading up to Lunar New Year. Air freight rates can spike 40-60% for last-minute shipments. Planning ahead and securing capacity commitments early can save significant cost." },
      { type: "cta-box", text: "Our Asia-Pacific team can help you build a Lunar New Year logistics plan tailored to your specific supply chain.", ctaLabel: "Talk to an Expert", ctaHref: "#cta" },
    ],
    tags: ["Seasonal", "Asia Trade", "Capacity Planning", "Ocean Freight"],
    relatedArticles: [
      { title: "Iran Tensions Disrupt Shipping Corridors", slug: "iran-shipping-disruption", category: "Market Intelligence", date: "Apr 28, 2026" },
      { title: "CBAM Transition Period: Compliance Checklist", slug: "cbam-compliance-checklist", category: "Regulatory Update", date: "Apr 15, 2026" },
      { title: "2026 Ocean Freight Outlook", slug: "iran-shipping-disruption", category: "Market Update", date: "Jan 2026" },
    ],
  },
  "cbam-compliance-checklist": {
    title: "CBAM Transition Period: Compliance Checklist for Exporters to the EU",
    category: "Regulatory Update",
    categoryColor: "bg-blue-500",
    date: "April 15, 2026",
    readTime: "5 min read",
    author: { name: "Trade Compliance Team", role: "Crane Worldwide Logistics" },
    heroImage: "https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2FJGQJcXE9Z8agS3_N3RfFU%2Feu-carbon-border-adjustment-customs-compliance_3.jpg",
    keyTakeaways: [
      "CBAM covers cement, steel, aluminum, fertilizers",
      "Quarterly emissions reporting required",
      "Penalties of €10–50 per tonne for non-compliance",
      "Accredited verifier required for data validation",
    ],
    content: [
      { type: "p", text: "The EU Carbon Border Adjustment Mechanism (CBAM) is entering its next critical phase. For exporters shipping goods into the European Union, understanding and preparing for CBAM requirements is no longer optional — it's a compliance imperative that directly impacts your ability to trade." },
      { type: "h2", text: "What is CBAM?" },
      { type: "p", text: "CBAM is the EU's mechanism to put a fair price on carbon emissions embedded in imported goods. It requires importers to purchase certificates corresponding to the carbon price that would have been paid if the goods were produced under EU carbon pricing rules. Initially covering cement, iron/steel, aluminum, fertilizers, electricity, and hydrogen, the scope will expand over time." },
      { type: "h2", text: "Current Phase Requirements" },
      { type: "ul", text: "", items: [
        "Quarterly reporting of embedded emissions for all covered goods imported into the EU",
        "Calculation of direct and indirect emissions using approved methodologies",
        "Documentation of carbon price paid in country of origin (for offset credit)",
        "Registration as an authorized CBAM declarant",
        "Verification of emissions data by accredited verifiers",
      ]},
      { type: "h2", text: "Compliance Checklist" },
      { type: "ul", text: "", items: [
        "✓ Identify which of your products fall under CBAM coverage",
        "✓ Map your supply chain emissions (Scope 1 + Scope 2) for covered goods",
        "✓ Establish data collection processes with your manufacturing facilities",
        "✓ Register on the EU CBAM transitional registry",
        "✓ Engage an accredited verifier for emissions data validation",
        "✓ Set up quarterly reporting workflows and internal deadlines",
        "✓ Review contracts with EU importers regarding CBAM cost allocation",
        "✓ Document any carbon pricing already paid in country of origin",
      ]},
      { type: "cta-box", text: "Our Trade Advisory team provides end-to-end CBAM support including product classification, emissions calculation assistance, and ongoing compliance monitoring.", ctaLabel: "Talk to Trade Advisory", ctaHref: "#cta" },
    ],
    tags: ["EU Regulation", "Sustainability", "Trade Compliance", "CBAM"],
    relatedArticles: [
      { title: "Iran Tensions Disrupt Shipping Corridors", slug: "iran-shipping-disruption", category: "Market Intelligence", date: "Apr 28, 2026" },
      { title: "Lunar New Year 2027: Early Planning Guide", slug: "lunar-new-year-2027", category: "Seasonal Planning", date: "Apr 22, 2026" },
      { title: "2026 Ocean Freight Outlook", slug: "iran-shipping-disruption", category: "Market Update", date: "Jan 2026" },
    ],
  },
}

export function InsightArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = articles[slug || ""]
  const contentReveal = useReveal()

  if (!article) {
    return (
      <div className="min-h-screen bg-white text-foreground">
        <Header />
        <div className="pt-32 pb-20 px-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/" className="text-secondary font-semibold hover:underline">← Back to Home</Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />

      {/* Breadcrumb */}
      <div className="pt-24 md:pt-28 bg-[#0a1628]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-3">
          <div className="flex items-center gap-2 text-sm text-white/40">
            <Link to="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <span className="hover:text-white/70 transition-colors cursor-pointer">Insights</span>
            <span>/</span>
            <span className="text-white/70 truncate max-w-[300px]">{article.title}</span>
          </div>
        </div>
      </div>

      {/* Hero header area */}
      <div className="bg-[#0a1628] pb-12 md:pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className={`${article.categoryColor} px-3 py-1 rounded-full text-white text-[11px] font-semibold tracking-wide inline-block mb-5`}>{article.category}</span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.12] mb-5">{article.title}</h1>
            <div className="flex items-center gap-4 text-sm text-white/50">
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime}</span>
              <span>·</span>
              <span>By {article.author.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content + Sidebar */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main Content */}
          <section ref={contentReveal.ref as React.RefObject<HTMLElement>} className={cn("lg:col-span-2 transition-all duration-700", contentReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
            <div className="space-y-6">
              {article.content.map((block, i) => {
                if (block.type === "p") {
                  return <p key={i} className="text-[15px] text-muted-foreground leading-[1.85]">{block.text}</p>
                }
                if (block.type === "h2") {
                  return <h2 key={i} className="font-display text-xl md:text-2xl font-bold text-foreground mt-10 mb-4">{block.text}</h2>
                }
                if (block.type === "h3") {
                  return <h3 key={i} className="font-display text-lg font-bold text-foreground mt-8 mb-3">{block.text}</h3>
                }
                if (block.type === "ul") {
                  return (
                    <ul key={i} className="space-y-3 pl-0">
                      {block.items?.map((item, j) => (
                        <li key={j} className="flex gap-3 text-[15px] text-muted-foreground leading-relaxed bg-[#f7f9fb] rounded-lg px-5 py-3.5 border border-gray-100">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-2.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )
                }
                if (block.type === "callout") {
                  return (
                    <div key={i} className="bg-secondary/5 border-l-4 border-secondary rounded-r-xl p-6 my-8">
                      <p className="text-[14px] text-foreground leading-[1.8] font-medium">{block.text}</p>
                    </div>
                  )
                }
                if (block.type === "cta-box") {
                  return (
                    <div key={i} className="bg-[#f7f9fb] border border-gray-200 rounded-xl p-6 my-10">
                      <h4 className="font-display font-bold text-base text-foreground mb-2">Need a lane-specific impact assessment?</h4>
                      <p className="text-sm text-muted-foreground mb-4">{block.text}</p>
                      <a href={block.ctaHref} className="inline-flex items-center gap-2 bg-[#0a1628] hover:bg-[#0a1628]/90 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all">
                        {block.ctaLabel}
                      </a>
                    </div>
                  )
                }
                return null
              })}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-medium text-[#0a3d62] bg-[#f7f9fb] px-3 py-1.5 rounded-full border border-gray-200">{tag}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Key Takeaways */}
            <div className="bg-[#f7f9fb] rounded-xl p-6 border border-gray-200/80">
              <h4 className="font-display font-bold text-sm text-foreground mb-4">Key Takeaways</h4>
              <ul className="space-y-3">
                {article.keyTakeaways.map((t, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-1.5" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Articles */}
            <div className="bg-secondary/5 rounded-xl p-6 border border-secondary/10">
              <h4 className="font-display font-bold text-sm text-foreground mb-4">Related Articles</h4>
              <div className="space-y-3">
                {article.relatedArticles.map((ra, i) => (
                  <Link
                    key={i}
                    to={`/insights/${ra.slug}`}
                    className="block text-sm text-muted-foreground hover:text-secondary transition-colors leading-snug"
                  >
                    {ra.title} →
                  </Link>
                ))}
              </div>
            </div>

            {/* Stay Updated */}
            <div className="bg-[#f7f9fb] rounded-xl p-6 border border-gray-200/80">
              <h4 className="font-display font-bold text-sm text-foreground mb-2">Stay Updated</h4>
              <p className="text-xs text-muted-foreground mb-4">Get weekly trade advisories in your inbox.</p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-secondary/50 transition-colors"
                />
                <button className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold text-sm py-2.5 rounded-lg transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  )
}
