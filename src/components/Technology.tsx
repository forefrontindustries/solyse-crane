import { useRef, useState } from "react"
import { useInView } from "../hooks/useInView"

const cn = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(" ")

const features = [
  {
    id: "visibility",
    title: "Real-Time Visibility",
    shortLabel: "Visibility",
    description: "Track every shipment in real-time with granular milestone updates. Know exactly where your cargo is at any moment.",
    benefits: ["Live GPS tracking for all shipments", "Automated milestone notifications", "Exception alerts and proactive communication", "Historical data and analytics"],
  },
  {
    id: "analytics",
    title: "Advanced Analytics",
    shortLabel: "Analytics",
    description: "Transform your supply chain data into actionable insights. Make better decisions with comprehensive reporting.",
    benefits: ["Custom dashboard creation", "Carrier performance metrics", "Cost analysis and optimization", "Predictive analytics"],
  },
  {
    id: "automation",
    title: "Process Automation",
    shortLabel: "Automation",
    description: "Streamline your logistics operations with intelligent automation. Reduce manual tasks and increase efficiency.",
    benefits: ["Automated booking workflows", "Document generation and management", "API integrations with your systems", "Rule-based exception handling"],
  },
  {
    id: "compliance",
    title: "Compliance Management",
    shortLabel: "Compliance",
    description: "Stay ahead of regulatory requirements with built-in compliance tools and expert guidance.",
    benefits: ["Automated trade compliance checks", "Denied party screening", "Classification assistance", "Audit trail documentation"],
  },
]

const tabIcons: Record<string, JSX.Element> = {
  visibility: <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
  analytics: <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  automation: <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  compliance: <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
}

export function Technology() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })
  const [activeTab, setActiveTab] = useState("visibility")

  const activeFeature = features.find((f) => f.id === activeTab)!

  return (
    <section id="technology" ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Content */}
          <div>
            <span className={cn("inline-block text-secondary font-semibold mb-4 transition-all duration-500 font-display", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>TECHNOLOGY PLATFORM</span>
            <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-500 delay-100 text-balance font-display", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
              Visibility and control at your fingertips
            </h2>
            <p className={cn("text-lg text-muted-foreground mb-10 leading-relaxed transition-all duration-500 delay-200", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
              CraneTMS powers your supply chain with real-time visibility, advanced analytics, and seamless integration with your existing systems.
            </p>

            {/* Tab Buttons */}
            <div className={cn("transition-all duration-500 delay-300", isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
                {features.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setActiveTab(f.id)}
                    className={cn(
                      "flex flex-col items-center gap-2 p-4 rounded-xl border transition-all cursor-pointer",
                      activeTab === f.id
                        ? "border-secondary bg-secondary/10 text-secondary"
                        : "border-border text-muted-foreground hover:border-secondary/40"
                    )}
                  >
                    <span className={cn("transition-colors", activeTab === f.id ? "text-secondary" : "text-muted-foreground")}>{tabIcons[f.id]}</span>
                    <span className="text-xs font-medium text-center">{f.shortLabel}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div key={activeTab} className="space-y-6 animate-fade-in">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 font-display">{activeFeature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{activeFeature.description}</p>
                </div>
                <ul className="space-y-3">
                  {activeFeature.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-secondary" />
                      </span>
                      <span className="text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg transition-colors mt-4">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right – Dashboard mockup */}
          <div className={cn("relative transition-all duration-700 delay-400", isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8")}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-3xl blur-2xl opacity-50" />
              <div className="relative bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1 rounded-md bg-background text-xs text-muted-foreground">app.craneww.com/dashboard</div>
                  </div>
                </div>

                {/* Dashboard body */}
                <div className="p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">Shipment Dashboard</h4>
                      <p className="text-sm text-muted-foreground">Real-time overview</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "In Transit", value: "247", color: "bg-secondary" },
                      { label: "Delivered", value: "1,892", color: "bg-primary" },
                      { label: "Pending", value: "56", color: "bg-muted" },
                    ].map((s) => (
                      <div key={s.label} className="p-4 rounded-xl bg-muted/30">
                        <div className={cn("w-2 h-2 rounded-full mb-2", s.color)} />
                        <div className="text-2xl font-bold text-foreground">{s.value}</div>
                        <div className="text-xs text-muted-foreground">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Mini map */}
                  <div className="relative h-40 rounded-xl bg-primary/10 overflow-hidden">
                    <svg viewBox="0 0 400 160" className="absolute inset-0 w-full h-full">
                      {/* Route line */}
                      <path
                        d="M40,80 Q100,30 160,80 T280,70 T380,50"
                        fill="none"
                        stroke="rgba(46,125,79,0.25)"
                        strokeWidth="2"
                      />
                      {/* Animated dashed overlay */}
                      <path
                        d="M40,80 Q100,30 160,80 T280,70 T380,50"
                        fill="none"
                        stroke="rgba(46,125,79,0.6)"
                        strokeWidth="2"
                        strokeDasharray="8,6"
                      >
                        <animate attributeName="stroke-dashoffset" from="0" to="-28" dur="1.5s" repeatCount="indefinite" />
                      </path>
                      {/* Dot 1 — at start of curve (40,80) */}
                      <circle cx="40" cy="80" r="5" fill="#2e7d4f">
                        <animate attributeName="r" values="5;8;5" dur="2s" begin="0s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0.4;1" dur="2s" begin="0s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="40" cy="80" r="3" fill="#2e7d4f" />
                      {/* Dot 2 — mid curve (160,80) */}
                      <circle cx="160" cy="80" r="5" fill="#2e7d4f">
                        <animate attributeName="r" values="5;8;5" dur="2s" begin="0.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0.4;1" dur="2s" begin="0.5s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="160" cy="80" r="3" fill="#2e7d4f" />
                      {/* Dot 3 — near end (280,70) */}
                      <circle cx="280" cy="70" r="5" fill="#2e7d4f">
                        <animate attributeName="r" values="5;8;5" dur="2s" begin="1s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0.4;1" dur="2s" begin="1s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="280" cy="70" r="3" fill="#2e7d4f" />
                    </svg>
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-card/90 backdrop-blur-sm">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Live shipments</span>
                        <span className="font-semibold text-secondary">247 active</span>
                      </div>
                    </div>
                  </div>

                  {/* Activity */}
                  <div className="space-y-3">
                    <h5 className="text-sm font-medium text-foreground">Recent Activity</h5>
                    {[
                      { event: "Shipment AWB-892341 departed LAX", time: "2 min ago", color: "bg-secondary" },
                      { event: "Customs cleared for BOL-7823", time: "15 min ago", color: "bg-primary" },
                      { event: "Pickup scheduled: PO-92341", time: "1 hour ago", color: "bg-muted-foreground" },
                    ].map((a, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <span className={cn("w-2 h-2 rounded-full flex-shrink-0", a.color)} />
                        <span className="flex-1 text-foreground truncate">{a.event}</span>
                        <span className="text-muted-foreground text-xs">{a.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute -right-4 top-1/4 p-4 rounded-xl bg-card shadow-lg border border-border animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <svg className="h-5 w-5 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Shipment Update</div>
                    <div className="text-xs text-muted-foreground">AWB-892341 arrived</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
