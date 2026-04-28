import { useRef, useEffect, useState } from "react"

const cn = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(" ")

function useInView(ref: React.RefObject<Element | null>) {
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsInView(true); observer.disconnect() }
    }, { threshold: 0.2 })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return isInView
}

function useCountUp(target: number, duration: number, isActive: boolean, suffix = "") {
  const [value, setValue] = useState("0")
  useEffect(() => {
    if (!isActive) return
    const start = performance.now()
    const step = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * target)
      setValue(current.toLocaleString() + suffix)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isActive, target, duration, suffix])
  return value
}

const stats = [
  { value: 120, suffix: "+", label: "Global locations", icon: (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
    </svg>
  )},
  { value: 4000, suffix: "+", label: "Customers worldwide", icon: (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  )},
  { value: 24, suffix: "/7", label: "Shipment visibility", icon: (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )},
  { value: 99, suffix: "%", label: "On-time delivery", icon: (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )},
]

export function ProofStats() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  const v0 = useCountUp(stats[0].value, 1800, isInView, stats[0].suffix)
  const v1 = useCountUp(stats[1].value, 2000, isInView, stats[1].suffix)
  const v2 = useCountUp(stats[2].value, 1200, isInView, stats[2].suffix)
  const v3 = useCountUp(stats[3].value, 1600, isInView, stats[3].suffix)
  const values = [v0, v1, v2, v3]

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-primary">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "flex flex-col items-center text-center transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: isInView ? `${i * 120}ms` : "0ms" }}
            >
              <div className="text-secondary mb-3">
                {stat.icon}
              </div>
              <span className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-none">
                {values[i]}
              </span>
              <span className="mt-2 text-sm font-medium text-white/50 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
