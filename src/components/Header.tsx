import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

const cn = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(" ")

const serviceItems = [
  { title: "Air Freight", description: "Time-critical global air cargo solutions", href: "/solutions/air-freight", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg> },
  { title: "Ocean Freight", description: "FCL and LCL ocean shipping worldwide", href: "/solutions/ocean-freight", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><rect x="2" y="8" width="20" height="10" rx="2"/><path d="M6 8V6a4 4 0 018 0v2"/><circle cx="8" cy="18" r="2"/><circle cx="16" cy="18" r="2"/></svg> },
  { title: "Ground", description: "Domestic trucking and cross-border", href: "/solutions/ground", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> },
  { title: "Contract Logistics", description: "Integrated warehousing and fulfillment", href: "/solutions/contract-logistics", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></svg> },
  { title: "Customs Broker", description: "Expert import/export compliance", href: "/solutions/customs-brokerage", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M12 2H2v10l9.29 9.29a1 1 0 001.41 0l7.79-7.79a1 1 0 000-1.41L12 2z"/><circle cx="7" cy="7" r="1.5" fill="currentColor" opacity=".4"/></svg> },
  { title: "Project Logistics", description: "Complex and oversized cargo handling", href: "/solutions/project-logistics", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><polygon points="12 2 2 7 12 12 22 7"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg> },
  { title: "Rail Freight", description: "Cost-effective intermodal rail solutions", href: "/solutions/rail-freight", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><rect x="4" y="3" width="16" height="14" rx="2"/><path d="M4 11h16"/><circle cx="8" cy="20" r="1.5"/><circle cx="16" cy="20" r="1.5"/><path d="M8 17v1.5M16 17v1.5"/></svg> },
  { title: "Cargo Insurance", description: "Comprehensive shipment protection", href: "/solutions/cargo-insurance", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { title: "E-commerce Shipping", description: "Direct-to-consumer fulfillment", href: "/solutions/ecommerce-shipping", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg> },
  { title: "Managed Transportation", description: "End-to-end transport management", href: "/solutions/managed-transportation", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> },
  { title: "Trade Advisory", description: "Global trade compliance consulting", href: "/solutions/trade-advisory", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg> },
  { title: "Value Added Services", description: "Kitting, labeling, and packaging", href: "/solutions/value-added-services", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> },
  { title: "Battery Logistics", description: "Hazmat-certified battery transport", href: "/solutions/battery-logistics", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><rect x="6" y="4" width="12" height="18" rx="2"/><path d="M10 2h4"/><path d="M12 9v5M10 11.5h4"/></svg> },
  { title: "NextGen Logistics", description: "AI-powered supply chain innovation", href: "/solutions/nextgen-logistics", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> },
  { title: "Time-Critical Logistics", description: "Urgent same-day and next-day delivery", href: "/solutions/time-critical", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
]

const industryItems = [
  { title: "Aerospace & Defense", href: "/industries/aerospace-defense", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M12 2L2 7v10l10 5 10-5V7L12 2z"/></svg> },
  { title: "Automotive", href: "/industries/automotive", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 3v5h-7V8z"/></svg> },
  { title: "Consumer Goods", href: "/industries/consumer-goods", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg> },
  { title: "Cruise, Marine & Hospitality", href: "/industries/cruise-marine", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M2 20s3-1 5-1 4 2 7 2 5-2 8-2"/><path d="M4 17V7a2 2 0 012-2h12a2 2 0 012 2v10"/><path d="M9 5V3M15 5V3"/></svg> },
  { title: "Energy & Oil/Gas", href: "/industries/energy", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg> },
  { title: "Government", href: "/industries/government", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/></svg> },
  { title: "Hi-Tech", href: "/industries/high-tech", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><rect x="14" y="14" width="6" height="6"/></svg> },
  { title: "Industrial", href: "/industries/industrial", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M2 20h20M5 20V8l5 3V8l5 3V4h5v16"/></svg> },
  { title: "Life Sciences", href: "/industries/healthcare", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg> },
  { title: "Mining", href: "/industries/mining", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> },
]

const knowledgeCenterItems = [
  { title: "Market Update", href: "/knowledge-center/market-update/" },
  { title: "Industry Insight News", href: "/knowledge-center/latest-news-and-info/" },
  { title: "Trade Advisory Notices", href: "/knowledge-center/trade-advisory-notices/" },
  { title: "Case Studies", href: "/knowledge-center/case-studies/" },
  { title: "Podcast", href: "/knowledge-center/podcast/" },
  { title: "Incoterms\u00AE Guide", href: "/knowledge-center/incoterms/" },
  { title: "Press Center", href: "/knowledge-center/press-center/" },
]

export function Header() {
  const location = useLocation()
  const isHome = location.pathname === "/"
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileSection, setMobileSection] = useState<string | null>(null)

  // On interior pages, always show the solid nav
  const solid = !isHome || isScrolled

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        solid
          ? "bg-white backdrop-blur-md shadow-sm transition-all duration-300 ease-out"
          : "bg-transparent transition-all duration-700 ease-in-out"
      )}
    >
      <div className="w-full px-6 lg:px-12">
        {/* Top bar */}
        <div className={cn(
          "hidden lg:flex items-center justify-end gap-6 py-2 text-sm border-b transition-colors duration-300",
          solid ? "border-border" : "border-white/20"
        )}>
          <a href="tel:+1-888-870-2726" className={cn(
            "flex items-center gap-2 transition-colors duration-300",
            solid ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"
          )}>
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
            +1 888-870-2726
          </a>

          <a href="#" className={cn(
            "flex items-center gap-2 transition-colors duration-300",
            solid ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"
          )}>
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.919 17.919 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            Languages
          </a>
        </div>

        {/* Main navigation */}
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center">
            <img
              src={solid ? "/logo-crane.png" : "/logo-crane-white.png"}
              alt="Crane Worldwide Logistics"
              className="h-10 lg:h-12 w-auto transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Services dropdown */}
            <div className="relative" onMouseEnter={() => setOpenMenu("services")} onMouseLeave={() => setOpenMenu(null)}>
              <button className={cn(
                "flex items-center gap-1.5 h-10 px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-md cursor-pointer",
                solid ? "text-foreground hover:bg-muted" : "text-white hover:text-white/80"
              )}>
                Services
                <svg className={cn("h-3 w-3 transition-transform duration-200", openMenu === "services" && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {openMenu === "services" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                  <div className="bg-white rounded-lg shadow-[0_16px_48px_rgba(11,37,69,0.14)] border border-border/50 p-5 w-[720px] grid grid-cols-3 gap-1.5 max-h-[70vh] overflow-y-auto">
                    {serviceItems.map((s) => (
                      <Link key={s.title} to={s.href} onClick={() => setOpenMenu(null)} className="flex items-start gap-3.5 rounded-lg p-3.5 hover:bg-[#f4f6f9] transition-colors group">
                        <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                          {s.icon}
                        </div>
                        <div>
                          <div className="text-[13px] font-semibold text-foreground">{s.title}</div>
                          <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{s.description}</p>
                        </div>
                      </Link>
                    ))}
                    <Link to="/solutions" className="flex items-center justify-center gap-2 mt-2 pt-3 border-t border-border/50 text-[13px] font-semibold text-secondary hover:text-secondary/80 transition-colors col-span-3" onClick={() => setOpenMenu(null)}>
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Industries dropdown */}
            <div className="relative" onMouseEnter={() => setOpenMenu("industries")} onMouseLeave={() => setOpenMenu(null)}>
              <button className={cn(
                "flex items-center gap-1.5 h-10 px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-md cursor-pointer",
                solid ? "text-foreground hover:bg-muted" : "text-white hover:text-white/80"
              )}>
                Industries
                <svg className={cn("h-3 w-3 transition-transform duration-200", openMenu === "industries" && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {openMenu === "industries" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                  <div className="bg-white rounded-lg shadow-[0_16px_48px_rgba(11,37,69,0.14)] border border-border/50 p-4 w-[380px]">
                    {industryItems.map((ind) => (
                      <Link key={ind.title} to={ind.href} className="flex items-center gap-3.5 rounded-lg px-3.5 py-3 hover:bg-[#f4f6f9] transition-colors group" onClick={() => setOpenMenu(null)}>
                        <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                          {ind.icon}
                        </div>
                        <span className="text-[13px] font-medium text-foreground">{ind.title}</span>
                      </Link>
                    ))}
                    <Link to="/industries" className="flex items-center justify-center gap-2 mt-2 pt-3 border-t border-border/50 text-[13px] font-semibold text-secondary hover:text-secondary/80 transition-colors" onClick={() => setOpenMenu(null)}>
                      View All Industries →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <a href="#technology" className={cn(
              "h-10 px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-md inline-flex items-center",
              solid ? "text-foreground hover:bg-muted" : "text-white hover:text-white/80"
            )}>Technology</a>

            <Link to="/locations" className={cn(
              "h-10 px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-md inline-flex items-center",
              solid ? "text-foreground hover:bg-muted" : "text-white hover:text-white/80"
            )}>Locations</Link>

            <a href="#about" className={cn(
              "h-10 px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-md inline-flex items-center",
              solid ? "text-foreground hover:bg-muted" : "text-white hover:text-white/80"
            )}>About</a>

            {/* Knowledge Center dropdown */}
            <div className="relative" onMouseEnter={() => setOpenMenu("knowledge")} onMouseLeave={() => setOpenMenu(null)}>
              <button className={cn(
                "flex items-center gap-1.5 h-10 px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-md cursor-pointer",
                solid ? "text-foreground hover:bg-muted" : "text-white hover:text-white/80"
              )}>
                Insights
                <svg className={cn("h-3 w-3 transition-transform duration-200", openMenu === "knowledge" && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {openMenu === "knowledge" && (
                <div className="absolute top-full right-0 pt-3 z-50">
                  <div className="bg-white rounded-lg shadow-[0_16px_48px_rgba(11,37,69,0.14)] border border-border/50 p-3 w-[260px]">
                    {knowledgeCenterItems.map((item) => (
                      <a key={item.title} href={item.href} className="block rounded-lg px-4 py-2.5 text-[13px] font-medium text-foreground hover:bg-[#f4f6f9] transition-colors">
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3 ml-8 pl-8 border-l transition-colors duration-300" style={{ borderColor: solid ? "var(--color-border, #e5e7eb)" : "rgba(255,255,255,0.2)" }}>
              <a href="https://webtracker.craneww.com/" className={cn(
                "h-10 px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 inline-flex items-center border",
                solid
                  ? "border-border text-foreground bg-muted/50 hover:bg-muted"
                  : "border-white/30 text-white bg-white/15 hover:bg-white/25"
              )}>
                Track Shipment
              </a>
              <a href="#cta" className="h-10 px-6 py-2 text-sm font-semibold rounded-md bg-secondary text-white hover:brightness-110 transition-all inline-flex items-center">
                Get a Quote
              </a>
            </div>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className={cn("lg:hidden p-2 cursor-pointer transition-colors duration-300", solid ? "text-foreground" : "text-white")}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-xl">
          <nav className="flex flex-col gap-1 p-6 max-h-[80vh] overflow-y-auto">
            {/* Services accordion */}
            <button
              onClick={() => setMobileSection(mobileSection === "services" ? null : "services")}
              className="flex items-center justify-between w-full py-2.5 text-sm font-semibold text-foreground cursor-pointer"
            >
              Services
              <svg className={cn("h-4 w-4 text-muted-foreground transition-transform duration-200", mobileSection === "services" && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {mobileSection === "services" && (
              <div className="flex flex-col gap-0.5 pl-1 pb-2">
                {serviceItems.map((s) => (
                  <Link key={s.title} to={s.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 py-2.5 pl-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <span className="text-secondary">{s.icon}</span>
                    {s.title}
                  </Link>
                ))}
                <Link to="/solutions" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 py-2.5 pl-1 text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors">
                  View All Services →
                </Link>
              </div>
            )}

            {/* Industries accordion */}
            <button
              onClick={() => setMobileSection(mobileSection === "industries" ? null : "industries")}
              className="flex items-center justify-between w-full py-2.5 text-sm font-semibold text-foreground cursor-pointer"
            >
              Industries
              <svg className={cn("h-4 w-4 text-muted-foreground transition-transform duration-200", mobileSection === "industries" && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {mobileSection === "industries" && (
              <div className="flex flex-col gap-0.5 pl-1 pb-2">
                {industryItems.map((ind) => (
                  <Link key={ind.title} to={ind.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 py-2.5 pl-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <span className="text-secondary">{ind.icon}</span>
                    {ind.title}
                  </Link>
                ))}
              </div>
            )}

            {/* Knowledge Center accordion */}
            <button
              onClick={() => setMobileSection(mobileSection === "knowledge" ? null : "knowledge")}
              className="flex items-center justify-between w-full py-2.5 text-sm font-semibold text-foreground cursor-pointer"
            >
              Insights
              <svg className={cn("h-4 w-4 text-muted-foreground transition-transform duration-200", mobileSection === "knowledge" && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {mobileSection === "knowledge" && (
              <div className="flex flex-col gap-0.5 pl-1 pb-2">
                {knowledgeCenterItems.map((item) => (
                  <a key={item.title} href={item.href} onClick={() => setMobileOpen(false)} className="py-2.5 pl-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.title}
                  </a>
                ))}
              </div>
            )}

            <a href="#technology" onClick={() => setMobileOpen(false)} className="py-2.5 text-sm font-semibold">Technology</a>
            <Link to="/locations" onClick={() => setMobileOpen(false)} className="py-2.5 text-sm font-semibold">Locations</Link>
            <a href="#about" onClick={() => setMobileOpen(false)} className="py-2.5 text-sm font-semibold">About</a>
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
              <a href="https://webtracker.craneww.com/" className="w-full py-2.5 text-sm font-medium border border-border rounded-lg text-center">Track Shipment</a>
              <a href="#cta" className="w-full py-2.5 text-sm font-semibold text-center bg-secondary text-white rounded-lg">Get a Quote</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
