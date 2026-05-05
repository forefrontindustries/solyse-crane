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
  { title: "Aerospace & Defense", href: "/v3/aerospace", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M12 2L2 7v10l10 5 10-5V7L12 2z"/></svg> },
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

const technologyItems = [
  { title: "C-View Platform", description: "End-to-end supply chain visibility portal", href: "/c-view", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg> },
  { title: "Supply Chain Visibility", description: "Real-time tracking, alerts, and predictive ETAs", href: "#", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> },
  { title: "Business Intelligence", description: "Custom reporting and analytics dashboards", href: "#", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M18 20V10M12 20V4M6 20v-6"/></svg> },
  { title: "EDI & API Integrations", description: "Seamless system-to-system connectivity", href: "#", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
  { title: "Transportation Management", description: "Optimize routing, carriers, and cost", href: "#", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" opacity=".3"/></svg> },
  { title: "Warehouse Management", description: "Inventory control and order fulfillment", href: "#", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg> },
]

const aboutItems = [
  { title: "Our Story", description: "How Crane Worldwide was built", href: "#", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg> },
  { title: "Leadership", description: "Meet our executive team", href: "#", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg> },
  { title: "Sustainability", description: "Our commitment to responsible logistics", href: "#", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg> },
  { title: "Careers", description: "Join our global team", href: "#", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="12.01"/></svg> },
  { title: "Partners & Agents", description: "Our global network of trusted partners", href: "#", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg> },
  { title: "Compliance & Certifications", description: "ITAR, C-TPAT, AEO and more", href: "#", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
]

const insightsItems = [
  { title: "Market Update", href: "#", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
  { title: "Industry Insight News", href: "#", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg> },
  { title: "Trade Advisory Notices", href: "#", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> },
  { title: "Case Studies", href: "/case-studies/aerospace-aog-response", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
  { title: "Podcast", href: "#", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg> },
  { title: "Incoterms\u00AE Guide", href: "#", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> },
  { title: "Press Center", href: "#", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5"><path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2"/></svg> },
]

/* ─── Reusable mega‑menu panel ─── */
function MegaPanel({ items, columns, wide, showViewAll, viewAllHref, viewAllLabel, onClose }: {
  items: { title: string; description?: string; href: string; icon: JSX.Element }[]
  columns: 2 | 3
  wide?: boolean
  showViewAll?: boolean
  viewAllHref?: string
  viewAllLabel?: string
  onClose: () => void
}) {
  const w = wide ? "w-[780px]" : columns === 3 ? "w-[720px]" : "w-[500px]"
  const cols = columns === 3 ? "grid-cols-3" : "grid-cols-2"
  const hasDesc = items.some((i) => i.description)

  return (
    <div className={`bg-white rounded-xl shadow-[0_20px_60px_rgba(11,37,69,0.16)] border border-border/50 p-6 ${w} max-h-[72vh] overflow-y-auto`}>
      <div className={`grid ${cols} gap-1.5`}>
        {items.map((item) => (
          <Link
            key={item.title}
            to={item.href}
            onClick={onClose}
            className="flex items-start gap-3.5 rounded-lg p-3.5 hover:bg-[#f4f6f9] transition-colors group"
          >
            <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
              {item.icon}
            </div>
            <div className="min-w-0">
              <div className="text-[13px] font-semibold text-foreground leading-tight">{item.title}</div>
              {hasDesc && item.description && (
                <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">{item.description}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
      {showViewAll && viewAllHref && (
        <Link
          to={viewAllHref}
          onClick={onClose}
          className={`flex items-center justify-center gap-2 mt-3 pt-4 border-t border-border/50 text-[13px] font-semibold text-secondary hover:text-secondary/80 transition-colors ${columns === 3 ? "col-span-3" : ""}`}
        >
          {viewAllLabel || "View All"} →
        </Link>
      )}
    </div>
  )
}

export function Header() {
  const location = useLocation()
  const isHome = location.pathname === "/" || location.pathname === "/v2"
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileSection, setMobileSection] = useState<string | null>(null)

  const solid = !isHome || isScrolled

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMenu = () => setOpenMenu(null)

  const navBtn = (label: string, key: string) => (
    <button className={cn(
      "flex items-center gap-1.5 h-10 px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-md cursor-pointer",
      solid ? "text-foreground hover:bg-muted" : "text-white hover:text-white/80"
    )}>
      {label}
      <svg className={cn("h-3 w-3 transition-transform duration-200", openMenu === key && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
    </button>
  )

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

          {/* ─── Desktop Navigation ─── */}
          <div className="hidden lg:flex items-center gap-1">

            {/* Industries */}
            <div className="relative" onMouseEnter={() => setOpenMenu("industries")} onMouseLeave={() => setOpenMenu(null)}>
              {navBtn("Industries", "industries")}
              {openMenu === "industries" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                  <MegaPanel
                    items={industryItems}
                    columns={2}
                    showViewAll
                    viewAllHref="/industries"
                    viewAllLabel="View All Industries"
                    onClose={closeMenu}
                  />
                </div>
              )}
            </div>

            {/* Services */}
            <div className="relative" onMouseEnter={() => setOpenMenu("services")} onMouseLeave={() => setOpenMenu(null)}>
              {navBtn("Services", "services")}
              {openMenu === "services" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                  <MegaPanel
                    items={serviceItems}
                    columns={3}
                    wide
                    showViewAll
                    viewAllHref="/solutions"
                    viewAllLabel="View All Services"
                    onClose={closeMenu}
                  />
                </div>
              )}
            </div>

            {/* Technology */}
            <div className="relative" onMouseEnter={() => setOpenMenu("technology")} onMouseLeave={() => setOpenMenu(null)}>
              {navBtn("Technology", "technology")}
              {openMenu === "technology" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                  <MegaPanel
                    items={technologyItems}
                    columns={2}
                    onClose={closeMenu}
                  />
                </div>
              )}
            </div>

            {/* About */}
            <div className="relative" onMouseEnter={() => setOpenMenu("about")} onMouseLeave={() => setOpenMenu(null)}>
              {navBtn("About", "about")}
              {openMenu === "about" && (
                <div className="absolute top-full right-0 pt-3 z-50">
                  <MegaPanel
                    items={aboutItems}
                    columns={2}
                    onClose={closeMenu}
                  />
                </div>
              )}
            </div>

            {/* Insights */}
            <div className="relative" onMouseEnter={() => setOpenMenu("insights")} onMouseLeave={() => setOpenMenu(null)}>
              {navBtn("Insights", "insights")}
              {openMenu === "insights" && (
                <div className="absolute top-full right-0 pt-3 z-50">
                  <MegaPanel
                    items={insightsItems}
                    columns={2}
                    onClose={closeMenu}
                  />
                </div>
              )}
            </div>

            {/* Locations — plain link */}
            <Link to="/locations" className={cn(
              "h-10 px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-md inline-flex items-center",
              solid ? "text-foreground hover:bg-muted" : "text-white hover:text-white/80"
            )}>Locations</Link>

            {/* CTAs */}
            <div className="flex items-center gap-3 ml-6 pl-6 border-l transition-colors duration-300" style={{ borderColor: solid ? "var(--color-border, #e5e7eb)" : "rgba(255,255,255,0.2)" }}>
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

      {/* ─── Mobile menu ─── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-xl">
          <nav className="flex flex-col gap-1 p-6 max-h-[80vh] overflow-y-auto">
            {/* Mobile accordion helper */}
            {([
              { key: "services", label: "Services", items: serviceItems, hasDesc: true },
              { key: "industries", label: "Industries", items: industryItems, hasDesc: false },
              { key: "technology", label: "Technology", items: technologyItems, hasDesc: true },
              { key: "about", label: "About", items: aboutItems, hasDesc: true },
              { key: "insights", label: "Insights", items: insightsItems, hasDesc: false },
            ] as const).map(({ key, label, items, hasDesc }) => (
              <div key={key}>
                <button
                  onClick={() => setMobileSection(mobileSection === key ? null : key)}
                  className="flex items-center justify-between w-full py-2.5 text-sm font-semibold text-foreground cursor-pointer"
                >
                  {label}
                  <svg className={cn("h-4 w-4 text-muted-foreground transition-transform duration-200", mobileSection === key && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {mobileSection === key && (
                  <div className="flex flex-col gap-0.5 pl-1 pb-2">
                    {items.map((item) => (
                      <Link key={item.title} to={item.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 py-2.5 pl-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <span className="text-secondary">{item.icon}</span>
                        <div>
                          <span>{item.title}</span>
                          {hasDesc && 'description' in item && (item as any).description && (
                            <p className="text-[11px] text-muted-foreground/70 leading-tight">{(item as any).description}</p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link to="/locations" onClick={() => setMobileOpen(false)} className="py-2.5 text-sm font-semibold">Locations</Link>

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
