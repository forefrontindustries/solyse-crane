import { useParams, Link } from "react-router-dom"
import { useRef, useState, useEffect } from "react"
import { Header } from "../components/Header"
import { CTA } from "../components/CTA"
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
  content: { type: "p" | "h2" | "h3" | "ul" | "callout"; text: string; items?: string[] }[]
  tags: string[]
  relatedArticles: { title: string; slug: string; category: string; date: string }[]
}> = {
  "iran-shipping-disruption": {
    title: "Iran Tensions Disrupt Key Shipping Corridors — What Shippers Need to Know",
    category: "Market Intelligence",
    categoryColor: "bg-red-500",
    date: "April 28, 2026",
    readTime: "6 min read",
    author: { name: "Global Trade Intelligence Team", role: "Crane Worldwide Logistics" },
    heroImage: "https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2FaJ5SmmcttRQEitnRoi5SC%2Fshipping-strait-of-hormuz-container-ship-unsplash_1.jpg",
    content: [
      { type: "p", text: "Escalating geopolitical tensions in the Persian Gulf region are creating significant disruptions to maritime shipping through the Strait of Hormuz — one of the world's most critical chokepoints for global trade. Approximately 21 million barrels of oil and substantial container volumes transit this waterway daily." },
      { type: "h2", text: "Current Situation" },
      { type: "p", text: "As of late April 2026, increased military activity and elevated threat levels have prompted several major carriers to re-route vessels away from the Strait of Hormuz. This is affecting both tanker traffic and container shipping on Asia-Europe and Asia-Middle East lanes." },
      { type: "p", text: "War risk insurance premiums for vessels transiting the area have surged 300-400% in recent weeks, with some underwriters declining coverage entirely. This cost is being passed directly to shippers in the form of emergency surcharges." },
      { type: "h2", text: "Impact on Shippers" },
      { type: "ul", text: "", items: [
        "Transit time increases of 7-12 days for Asia-Europe routes via the Cape of Good Hope",
        "Rate increases of $800-$1,500 per TEU on affected lanes",
        "Equipment imbalances developing at origin ports due to vessel diversions",
        "Blank sailings increasing as carriers consolidate diverted capacity",
        "Port congestion building at alternative routing hubs (Singapore, Colombo)",
      ]},
      { type: "h2", text: "Alternative Routing Options" },
      { type: "p", text: "Carriers are deploying several alternative strategies. The primary diversion route via the Cape of Good Hope adds approximately 3,500 nautical miles and 7-10 days to Asia-Europe transits. Some carriers are offering Suez Canal routing with enhanced security escorts at premium rates." },
      { type: "callout", text: "Crane Worldwide recommendation: Shippers with time-sensitive cargo on affected lanes should consider air-sea multimodal options or direct airfreight for critical shipments. Contact your Crane representative for lane-specific routing alternatives." },
      { type: "h2", text: "What Shippers Should Do Now" },
      { type: "ul", text: "", items: [
        "Review your supply chain exposure to Strait of Hormuz-dependent routes",
        "Build additional buffer stock for critical components sourced from affected regions",
        "Engage with your logistics provider on contingency routing plans",
        "Review cargo insurance coverage for war risk and delay",
        "Consider diversifying supplier base to reduce geographic concentration risk",
      ]},
      { type: "h2", text: "Crane's Response" },
      { type: "p", text: "Our global control tower is actively monitoring the situation 24/7. We are proactively reaching out to affected customers with alternative routing options and updated ETAs. Our trade intelligence team will continue to provide weekly situation updates as conditions evolve." },
      { type: "p", text: "For immediate assistance or to discuss your specific supply chain exposure, contact your Crane Worldwide representative or reach out to our 24/7 operations center." },
    ],
    tags: ["Geopolitics", "Ocean Freight", "Risk Management", "Asia-Europe Trade"],
    relatedArticles: [
      { title: "Lunar New Year 2027: Early Planning Guide", slug: "lunar-new-year-2027", category: "Seasonal Planning", date: "Apr 22, 2026" },
      { title: "CBAM Transition Period: Compliance Checklist", slug: "cbam-compliance-checklist", category: "Regulatory Update", date: "Apr 15, 2026" },
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
      { type: "callout", text: "Action required by October 2026: Place production orders now to ensure goods are manufactured and ready for shipment by mid-January at the latest." },
      { type: "h2", text: "Rate Impact" },
      { type: "p", text: "Historically, ocean freight rates on transpacific routes increase 15-30% in the 6 weeks leading up to Lunar New Year. Air freight rates can spike 40-60% for last-minute shipments. Planning ahead and securing capacity commitments early can save significant cost." },
      { type: "h2", text: "How Crane Can Help" },
      { type: "p", text: "Our Asia-Pacific team can help you build a Lunar New Year logistics plan tailored to your specific supply chain. This includes optimized booking schedules, alternative routing during peak congestion, and warehouse staging strategies to maintain inventory levels through the shutdown period." },
    ],
    tags: ["Seasonal", "Asia Trade", "Capacity Planning", "Ocean Freight"],
    relatedArticles: [
      { title: "Iran Tensions Disrupt Shipping Corridors", slug: "iran-shipping-disruption", category: "Market Intelligence", date: "Apr 28, 2026" },
      { title: "CBAM Transition Period: Compliance Checklist", slug: "cbam-compliance-checklist", category: "Regulatory Update", date: "Apr 15, 2026" },
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
      { type: "callout", text: "Non-compliance risk: Failure to report or inaccurate reporting can result in penalties of €10-50 per tonne of unreported emissions. As the mechanism moves from transitional to definitive phase, financial penalties will increase substantially." },
      { type: "h2", text: "How Crane Supports CBAM Compliance" },
      { type: "p", text: "Our Trade Advisory team provides end-to-end CBAM support including product classification, emissions calculation assistance, regulatory filing, and ongoing compliance monitoring. We work with your supply chain to ensure all documentation is in order and reporting deadlines are met." },
    ],
    tags: ["EU Regulation", "Sustainability", "Trade Compliance", "CBAM"],
    relatedArticles: [
      { title: "Iran Tensions Disrupt Shipping Corridors", slug: "iran-shipping-disruption", category: "Market Intelligence", date: "Apr 28, 2026" },
      { title: "Lunar New Year 2027: Early Planning Guide", slug: "lunar-new-year-2027", category: "Seasonal Planning", date: "Apr 22, 2026" },
    ],
  },
}

export function InsightArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = articles[slug || ""]
  const heroReveal = useReveal()
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

      {/* Hero */}
      <section ref={heroReveal.ref as React.RefObject<HTMLElement>} className="pt-24 md:pt-28">
        <div className="relative h-[300px] md:h-[380px] overflow-hidden">
          <img src={article.heroImage} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/40 to-transparent" />
        </div>
      </section>

      {/* Article Content */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-12 -mt-20 relative z-10">
        {/* Title Card */}
        <div className={cn("bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 mb-12 transition-all duration-700", heroReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          <div className="flex items-center gap-3 mb-5">
            <span className={`${article.categoryColor} px-3 py-1 rounded-full text-white text-[11px] font-semibold tracking-wide`}>{article.category}</span>
            <span className="text-xs text-muted-foreground">{article.readTime}</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-5">{article.title}</h1>
          <div className="flex items-center justify-between pt-5 border-t border-border">
            <div>
              <div className="font-semibold text-sm text-foreground">{article.author.name}</div>
              <div className="text-xs text-muted-foreground">{article.author.role}</div>
            </div>
            <time className="text-sm text-muted-foreground">{article.date}</time>
          </div>
        </div>

        {/* Body */}
        <section ref={contentReveal.ref as React.RefObject<HTMLElement>} className={cn("transition-all duration-700", contentReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
          <div className="prose-crane space-y-6">
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
                  <ul key={i} className="space-y-2.5 pl-1">
                    {block.items?.map((item, j) => (
                      <li key={j} className="flex gap-3 text-[15px] text-muted-foreground leading-relaxed">
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

          {/* Related Articles */}
          <div className="mt-14">
            <h3 className="font-display font-bold text-lg text-foreground mb-5">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {article.relatedArticles.map((ra) => (
                <Link
                  key={ra.slug}
                  to={`/insights/${ra.slug}`}
                  className="p-5 rounded-xl border border-gray-200/80 hover:border-secondary/30 hover:shadow-md transition-all group"
                >
                  <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-secondary">{ra.category}</span>
                  <h4 className="text-sm font-semibold text-foreground mt-2 group-hover:text-secondary transition-colors leading-snug">{ra.title}</h4>
                  <span className="text-xs text-muted-foreground mt-2 block">{ra.date}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="mt-16">
        <CTA />
      </div>
      <Footer />
    </div>
  )
}
