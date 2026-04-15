import { useRef, useState, useEffect } from "react"
import { useInView } from "../hooks/useInView"

const cn = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(" ")

const testimonials = [
  {
    quote: "Crane Worldwide has been instrumental in streamlining our global supply chain. Their technology platform gives us visibility we never had before, and their team is always responsive to our needs.",
    author: "Sarah Mitchell",
    title: "VP of Supply Chain",
    company: "Global Tech Industries",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
  },
  {
    quote: "When we needed to move critical aerospace components across three continents, Crane delivered flawlessly. Their expertise in handling sensitive cargo is unmatched in the industry.",
    author: "Michael Chen",
    title: "Director of Operations",
    company: "Aerospace Dynamics",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
  },
  {
    quote: "The level of service and attention to detail from Crane has transformed how we think about logistics. They are not just a vendor; they are a true strategic partner.",
    author: "Emily Rodriguez",
    title: "Chief Operating Officer",
    company: "MedTech Solutions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
  },
  {
    quote: "Our e-commerce business grew 300% last year, and Crane scaled with us seamlessly. Their warehousing and fulfillment solutions are world-class.",
    author: "David Park",
    title: "Founder & CEO",
    company: "NextGen Retail",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
  },
]

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => { setIsAutoPlaying(false); setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length) }
  const goToNext = () => { setIsAutoPlaying(false); setCurrentIndex((prev) => (prev + 1) % testimonials.length) }

  const t = testimonials[currentIndex]

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={cn("inline-block text-secondary font-semibold mb-4 transition-all duration-500 font-display", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>TESTIMONIALS</span>
          <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-500 delay-100 text-balance font-display", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>Trusted by industry leaders</h2>
        </div>

        {/* Card */}
        <div className={cn("relative w-full max-w-6xl mx-auto transition-all duration-500 delay-200", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
          <div className="border border-border shadow-xl bg-card rounded-2xl">
            <div className="p-8 md:p-12 lg:p-16">
              {/* Quote icon */}
              <svg className="h-12 w-12 md:h-16 md:w-16 text-secondary/30 mb-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>

              <div className="min-h-[200px] md:min-h-[180px]">
                <blockquote key={currentIndex} className="text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed mb-10 animate-fade-in">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div key={`a-${currentIndex}`} className="flex items-center gap-4 animate-fade-in">
                  <img src={t.image} alt={t.author} className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-secondary/20" />
                  <div>
                    <div className="font-semibold text-foreground text-lg font-display">{t.author}</div>
                    <div className="text-sm md:text-base text-muted-foreground">{t.title}, {t.company}</div>
                  </div>
                </div>
              </div>

              {/* Nav */}
              <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
                <div className="flex gap-3">
                  {testimonials.map((_, index) => (
                    <button key={index} onClick={() => { setIsAutoPlaying(false); setCurrentIndex(index) }}
                      className={cn("h-3 rounded-full transition-all duration-300 cursor-pointer", currentIndex === index ? "bg-secondary w-10" : "bg-muted w-3 hover:bg-muted-foreground/30")}
                      aria-label={`Go to testimonial ${index + 1}`} />
                  ))}
                </div>
                <div className="flex gap-3">
                  <button onClick={goToPrevious} className="rounded-full h-12 w-12 border-2 border-border flex items-center justify-center hover:bg-muted transition-colors cursor-pointer" aria-label="Previous">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button onClick={goToNext} className="rounded-full h-12 w-12 border-2 border-border flex items-center justify-center hover:bg-muted transition-colors cursor-pointer" aria-label="Next">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Company logos placeholder */}
          <div className={cn("mt-16 transition-all duration-500 delay-400", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
            <p className="text-center text-sm text-muted-foreground mb-8 font-display">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40">
              {["Fortune 500", "Global Tech", "Aerospace Inc", "MedTech", "AutoCorp", "Energy Plus"].map((c) => (
                <div key={c} className="text-lg md:text-xl font-bold text-muted-foreground tracking-wider font-display">{c}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
