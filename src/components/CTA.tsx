import { useRef } from "react"
import { useInView } from "../hooks/useInView"

const cn = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(" ")

export function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.2 })

  return (
    <section id="cta" ref={sectionRef} className="py-14 md:py-16 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        <div className={cn("flex flex-col md:flex-row md:items-center md:justify-between gap-6 transition-all duration-500", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">Ready to solve your logistics challenge?</h2>
            <p className="text-white/50 text-[15px] mt-1.5">Whether you need a quote, a strategy, or just a conversation. Let's talk.</p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3 flex-shrink-0">
            <a href="#" className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold px-7 py-3 text-[15px] rounded-lg transition-all group shadow-lg shadow-secondary/25">
              Get a Free Quote
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
            <a href="tel:+1-888-870-2726" className="text-sm text-white/40 hover:text-white/70 transition-colors">
              or call +1 888-870-2726
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
