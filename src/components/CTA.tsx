import { useRef } from "react"
import { useInView } from "../hooks/useInView"

const cn = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(" ")

export function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.2 })

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ctaGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctaGrid)" />
        </svg>
      </div>

      {/* Blurs */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-secondary/20 blur-2xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-secondary/10 blur-3xl" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className={cn("inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 transition-all duration-500", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
            </span>
            <span className="text-white/90 text-sm font-medium">Get started in minutes</span>
          </div>

          <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-500 delay-100 text-balance font-display", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
            Ready to transform your supply chain?
          </h2>
          <p className={cn("text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-500 delay-200", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
            Connect with our logistics experts today and discover how Crane Worldwide can optimize your global supply chain operations.
          </p>

          {/* Buttons */}
          <div className={cn("flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-500 delay-300", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
            <a href="#" className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 h-14 text-base rounded-lg transition-colors group">
              Get a Free Quote
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center border-2 border-white bg-white text-primary hover:bg-white/90 font-semibold h-14 px-8 text-base rounded-lg transition-colors">
              Schedule a Consultation
            </a>
          </div>

          {/* Contact options */}
          <div className={cn("grid sm:grid-cols-2 gap-6 pt-12 border-t border-white/10 max-w-lg mx-auto transition-all duration-500 delay-400", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div className="text-center">
                <div className="text-sm text-primary-foreground/60 mb-1">Call Us</div>
                <a href="tel:+1-888-870-2726" className="font-semibold hover:text-secondary transition-colors">+1 888-870-2726</a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div className="text-center">
                <div className="text-sm text-primary-foreground/60 mb-1">Email Us</div>
                <a href="mailto:sales@craneww.com" className="font-semibold hover:text-secondary transition-colors">sales@craneww.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
