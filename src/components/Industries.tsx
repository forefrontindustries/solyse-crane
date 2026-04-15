import { useRef, useState } from "react"
import { useInView } from "../hooks/useInView"

const cn = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(" ")

const industries = [
  {
    title: "Aerospace & Defense",
    description: "Specialized logistics for critical defense and aerospace operations with highest security standards.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Automotive",
    description: "Just-in-time delivery solutions keeping production lines running efficiently worldwide.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Energy & Oil/Gas",
    description: "Project logistics expertise for complex energy infrastructure and equipment moves.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Healthcare & Pharma",
    description: "Temperature-controlled solutions ensuring product integrity throughout the cold chain.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "High-Tech",
    description: "Secure handling of sensitive electronics with white-glove service and real-time monitoring.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Retail & E-Commerce",
    description: "Omnichannel fulfillment solutions scaling with your business demands.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
  },
]

export function Industries() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="industries" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={cn("inline-block text-secondary font-semibold mb-4 transition-all duration-500 font-display", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>INDUSTRY EXPERTISE</span>
          <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-500 delay-100 text-balance font-display", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>Tailored solutions for your industry</h2>
          <p className={cn("text-lg text-muted-foreground leading-relaxed transition-all duration-500 delay-200", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>We understand that every industry has unique challenges. Our specialized teams bring deep expertise to deliver solutions that work for you.</p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className={cn(
                "group relative overflow-hidden rounded-xl h-80 cursor-pointer transition-all duration-500",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${150 + index * 75}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* BG Image */}
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${industry.image})` }} />
              {/* Overlay */}
              <div className={cn(
                "absolute inset-0 transition-all duration-500",
                hoveredIndex === index ? "bg-primary/80" : "bg-gradient-to-t from-primary/90 via-primary/50 to-transparent"
              )} />

              <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                <div className={cn("w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 transition-all duration-300", hoveredIndex === index && "scale-110")}>
                  <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2 font-display">{industry.title}</h3>
                <p className={cn(
                  "text-white/80 text-sm leading-relaxed transition-all duration-300",
                  hoveredIndex === index ? "opacity-100 translate-y-0 max-h-20" : "opacity-0 translate-y-4 max-h-0 overflow-hidden"
                )}>{industry.description}</p>
                <span className={cn(
                  "inline-flex items-center gap-2 text-secondary font-medium text-sm mt-4 transition-all duration-300",
                  hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}>
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={cn("text-center mt-16 transition-all duration-500 delay-700", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
          <a href="#" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-colors">
            Explore All Industries
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
