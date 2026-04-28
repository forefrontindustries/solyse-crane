import { useRef, useState } from "react"
import { useInView } from "../hooks/useInView"
import { Link } from "react-router-dom"

const cn = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(" ")

export function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.2 })
  const [showForm, setShowForm] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="cta" ref={sectionRef} className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
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

      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main content — centered */}
          <div className="text-center">
            <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-500 text-balance font-display", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
              Ready to solve your logistics challenge?
            </h2>
            <p className={cn("text-lg text-primary-foreground/60 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-500 delay-100", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
              Whether you need a quote, a strategy, or just a conversation — we're here.
            </p>

            {/* Buttons */}
            <div className={cn("flex flex-col sm:flex-row gap-4 justify-center mb-8 transition-all duration-500 delay-200", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
              <Link
                to="/industries"
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 h-14 text-base rounded-lg transition-colors group"
              >
                Find Your Solution
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <button
                onClick={() => { setShowForm(true); setSubmitted(false) }}
                className="inline-flex items-center justify-center border-2 border-white bg-white text-primary hover:bg-white/90 font-semibold h-14 px-8 text-base rounded-lg transition-colors cursor-pointer"
              >
                Talk to an Expert
              </button>
            </div>

            {/* Phone */}
            <div className={cn("transition-all duration-500 delay-300", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
              <a href="tel:+1-888-870-2726" className="inline-flex items-center gap-2 text-primary-foreground/50 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span className="text-sm font-medium">+1 888-870-2726</span>
              </a>
            </div>
          </div>

          {/* Contact Form — slides open */}
          {showForm && (
            <div className="mt-12 pt-10 border-t border-white/10 animate-fade-in">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">We'll be in touch</h3>
                  <p className="text-primary-foreground/60">One of our logistics experts will reach out within 24 hours.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
                  className="max-w-xl mx-auto space-y-4"
                >
                  <h3 className="text-lg font-bold text-white text-center mb-6">Talk to an Expert</h3>

                  {/* Step 1: Required fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Name *"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email *"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
                    />
                  </div>
                  <textarea
                    required
                    rows={3}
                    placeholder="How can we help? *"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors resize-none"
                  />

                  {/* Step 2: Optional expand */}
                  {!showMore ? (
                    <button
                      type="button"
                      onClick={() => setShowMore(true)}
                      className="text-sm text-white/40 hover:text-white/70 transition-colors cursor-pointer"
                    >
                      + Add company & industry details (optional)
                    </button>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
                      <input
                        type="text"
                        placeholder="Company"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
                      />
                      <select
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white/60 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
                        defaultValue=""
                      >
                        <option value="" disabled>Industry</option>
                        <option value="aerospace">Aerospace & Defense</option>
                        <option value="automotive">Automotive</option>
                        <option value="energy">Energy & Oil/Gas</option>
                        <option value="healthcare">Healthcare & Pharma</option>
                        <option value="high-tech">High-Tech</option>
                        <option value="retail">Retail & E-Commerce</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-3.5 rounded-lg transition-colors cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
