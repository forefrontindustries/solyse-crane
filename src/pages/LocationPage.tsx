import { useParams, Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { getLocation, getLocationDetail, getLocationsByRegion, locations, type Location } from "../data/locations"

function useReveal(threshold = 0.08) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

export function LocationPage() {
  const { "*": slugPath } = useParams()
  const slug = slugPath || ""
  const location = getLocation(slug)
  const detail = getLocationDetail(slug)

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!location) {
    return (
      <div className="min-h-screen bg-white text-foreground">
        <Header />
        <div className="pt-40 px-6 text-center">
          <h1 className="font-display text-3xl font-bold">Location not found</h1>
          <Link to="/locations" className="text-secondary mt-4 inline-block">← Back to Locations</Link>
        </div>
        <Footer />
      </div>
    )
  }

  // Default services for locations without detail
  const defaultServices = [
    "Air Freight", "Ocean Freight", "Ground", "Contract Logistics",
    "Customs Broker", "Project Logistics",
  ]

  const services = detail?.services || defaultServices
  const nearbyLocations = locations
    .filter(l => l.region === location.region && l.slug !== location.slug)
    .sort((a, b) => {
      const distA = Math.hypot(a.lat - location.lat, a.lng - location.lng)
      const distB = Math.hypot(b.lat - location.lat, b.lng - location.lng)
      return distA - distB
    })
    .slice(0, 6)

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-[#f4f6f9] pt-[120px] lg:pt-[140px] pb-0">
        <div className="px-6 lg:px-12 pb-5">
          <nav className="flex items-center gap-2 text-[12px] text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span className="opacity-40">/</span>
            <Link to="/locations" className="hover:text-foreground transition-colors">Locations</Link>
            <span className="opacity-40">/</span>
            <span className="text-foreground font-medium">{location.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <LocationHero location={location} detail={detail} />

      {/* Contact + Map Card */}
      <ContactCard location={location} detail={detail} />

      {/* About Section */}
      <AboutSection location={location} detail={detail} />

      {/* Services */}
      <ServicesSection services={services} location={location} />

      {/* Key Features (if detail) */}
      {detail?.features && <FeaturesSection detail={detail} />}

      {/* Nearby Locations */}
      <NearbySection nearby={nearbyLocations} current={location} />

      {/* CTA */}
      <CTASection location={location} />

      <Footer />
    </div>
  )
}

/* ─── Hero ─── */
function LocationHero({ location, detail }: { location: Location; detail: ReturnType<typeof getLocationDetail> }) {
  const reveal = useReveal()

  // City image from Unsplash based on country/city
  const cityImages: Record<string, string> = {
    Houston: "https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?w=1200&q=80",
    Dallas: "https://images.unsplash.com/photo-1545194445-dddb8f4487c6?w=1200&q=80",
    Atlanta: "https://images.unsplash.com/photo-1575917649387-76277e7ed2c2?w=1200&q=80",
    Chicago: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80",
    "Los Angeles": "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=1200&q=80",
    "New York": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80",
    London: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80",
    Dubai: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
    Singapore: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80",
    Tokyo: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80",
    Shanghai: "https://images.unsplash.com/photo-1537519646099-5e591f5e5abb?w=1200&q=80",
    "Hong Kong": "https://images.unsplash.com/photo-1536599018102-9f803c979e13?w=1200&q=80",
    Mumbai: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80",
    Sydney: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&q=80",
    Amsterdam: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1200&q=80",
  }
  const cityKey = Object.keys(cityImages).find(k => location.name.includes(k))
  const bgImage = cityKey ? cityImages[cityKey] : "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=1200&q=80"

  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className="relative bg-foreground overflow-hidden">
      <div className="absolute inset-0">
        <img src={bgImage} alt={location.name} className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/60 to-[#0a1628]/30" />
      </div>
      <div className={`relative px-6 lg:px-12 py-16 lg:py-28 transition-all duration-1000 ${reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="max-w-5xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-secondary/20 border border-secondary/30 rounded-full px-3 py-1 text-[12px] font-medium text-secondary">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {location.country}
            </span>
          </div>
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-white leading-[1.1] mb-4">
            {location.name}
          </h1>
          {detail?.headline ? (
            <p className="text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed">{detail.headline}</p>
          ) : (
            <p className="text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed">
              Global freight forwarding, logistics, and supply chain solutions in {location.name}.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

/* ─── Contact Card ─── */
function ContactCard({ location, detail }: { location: Location; detail: ReturnType<typeof getLocationDetail> }) {
  const reveal = useReveal()
  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className={`relative -mt-12 z-10 px-6 lg:px-12 mb-12 transition-all duration-700 ${reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-border/50 overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Map Placeholder */}
            <div className="relative bg-[#0a1628] min-h-[280px] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 800 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#01803E" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#01803E" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  {/* Grid lines */}
                  {Array.from({ length: 20 }).map((_, i) => (
                    <line key={`h${i}`} x1="0" y1={i * 20} x2="800" y2={i * 20} stroke="#ffffff" strokeOpacity="0.05" strokeWidth="0.5" />
                  ))}
                  {Array.from({ length: 40 }).map((_, i) => (
                    <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="400" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="0.5" />
                  ))}
                </svg>
              </div>
              {/* Central pin */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center animate-pulse">
                  <div className="w-12 h-12 rounded-full bg-secondary/40 flex items-center justify-center">
                    <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-3 text-[13px] text-white/60 font-medium">
                  {location.lat.toFixed(4)}°, {location.lng.toFixed(4)}°
                </div>
                <div className="mt-1 text-[11px] text-white/40">Interactive map coming soon</div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="p-6 lg:p-8">
              <h2 className="font-display text-xl font-bold mb-6">Location & Contact Details</h2>
              <div className="space-y-5">
                {(detail?.address || location.name) && (
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[12px] text-muted-foreground font-medium uppercase tracking-wider mb-1">Address</div>
                      <div className="text-[14px] leading-relaxed whitespace-pre-line">
                        {detail?.address || `${location.name}\n${location.country}`}
                      </div>
                    </div>
                  </div>
                )}

                {location.phone && (
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-secondary/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[12px] text-muted-foreground font-medium uppercase tracking-wider mb-1">Phone</div>
                      <a href={`tel:${location.phone.replace(/\s/g, "")}`} className="text-[14px] font-medium hover:text-secondary transition-colors">
                        {location.phone}
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[12px] text-muted-foreground font-medium uppercase tracking-wider mb-1">Region</div>
                    <div className="text-[14px]">{location.country}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/50">
                <a
                  href={`tel:${location.phone ? location.phone.replace(/\s/g, "") : "+18888702726"}`}
                  className="inline-flex items-center gap-2 bg-secondary text-white font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition-all text-[14px] w-full justify-center"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  Contact This Office
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── About ─── */
function AboutSection({ location, detail }: { location: Location; detail: ReturnType<typeof getLocationDetail> }) {
  const reveal = useReveal()
  if (!detail?.intro && !detail?.keyFacts) return null
  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className={`py-16 px-6 lg:px-12 transition-all duration-700 ${reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h2 className="font-display text-2xl lg:text-3xl font-bold mb-6">
              Your 3PL Logistics Company in {location.name.replace(/\s*\([^)]*\)/, "")}
            </h2>
            {detail?.intro && (
              <p className="text-muted-foreground leading-relaxed text-[15px]">{detail.intro}</p>
            )}
          </div>
          {detail?.keyFacts && (
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-4">
                {detail.keyFacts.map((fact) => (
                  <div key={fact.label} className="bg-[#f4f6f9] rounded-xl p-5 text-center">
                    <div className="font-display text-2xl font-bold text-primary">{fact.value}</div>
                    <div className="text-[12px] text-muted-foreground mt-1">{fact.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/* ─── Services ─── */
function ServicesSection({ services, location }: { services: string[]; location: Location }) {
  const reveal = useReveal()
  const serviceIcons: Record<string, JSX.Element> = {
    "Air Freight": <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />,
    "Ocean Freight": <><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /><circle cx="12" cy="12" r="10" /></>,
    Ground: <><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></>,
    "Contract Logistics": <><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></>,
    "Customs Broker": <><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></>,
    "Project Logistics": <><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></>,
  }

  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className={`py-16 lg:py-20 bg-[#f4f6f9] px-6 lg:px-12 transition-all duration-700 ${reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-2xl lg:text-3xl font-bold mb-3">Services</h2>
        <p className="text-muted-foreground mb-10 text-[15px]">
          Logistics solutions available at our {location.name.replace(/\s*\([^)]*\)/, "")} office
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service}
              className="bg-white rounded-xl p-5 border border-border/30 hover:border-secondary/30 hover:shadow-md transition-all duration-300 group flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/10 transition-colors">
                <svg className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  {serviceIcons[service] || <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>}
                </svg>
              </div>
              <span className="text-[14px] font-medium">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Features ─── */
function FeaturesSection({ detail }: { detail: NonNullable<ReturnType<typeof getLocationDetail>> }) {
  const reveal = useReveal()
  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className={`py-16 lg:py-20 px-6 lg:px-12 transition-all duration-700 ${reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-2xl lg:text-3xl font-bold mb-3">Key Features</h2>
        <p className="text-muted-foreground mb-10 text-[15px]">Value-added capabilities at this facility</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {detail.features!.map((feature, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#f4f6f9] border border-border/30">
              <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span className="text-[14px]">{feature}</span>
            </div>
          ))}
        </div>
        {detail.warehouseSize && (
          <div className="mt-8 bg-primary rounded-2xl p-8 text-center">
            <div className="font-display text-4xl lg:text-5xl font-bold text-white">{detail.warehouseSize}</div>
            <div className="text-white/60 text-[14px] mt-2">of warehouse space</div>
          </div>
        )}
      </div>
    </section>
  )
}

/* ─── Nearby ─── */
function NearbySection({ nearby, current }: { nearby: Location[]; current: Location }) {
  const reveal = useReveal()
  if (nearby.length === 0) return null
  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className={`py-16 lg:py-20 bg-[#f4f6f9] px-6 lg:px-12 transition-all duration-700 ${reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-2xl lg:text-3xl font-bold mb-3">Nearby Locations</h2>
        <p className="text-muted-foreground mb-10 text-[15px]">Other offices in the {current.country} region</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {nearby.map((loc) => (
            <Link
              key={loc.slug}
              to={`/locations/${loc.slug}`}
              className="bg-white rounded-xl p-5 border border-border/30 hover:border-secondary/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display font-semibold text-[15px] group-hover:text-secondary transition-colors">{loc.name}</h3>
                  <p className="text-[12px] text-muted-foreground mt-1">{loc.country}</p>
                  {loc.phone && <p className="text-[12px] text-muted-foreground mt-2">{loc.phone}</p>}
                </div>
                <svg className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ─── */
function CTASection({ location }: { location: Location }) {
  const reveal = useReveal()
  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className={`py-16 lg:py-20 bg-primary transition-all duration-700 ${reveal.visible ? "opacity-100" : "opacity-0"}`}>
      <div className="px-6 lg:px-12 text-center max-w-4xl mx-auto">
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
          Request a Quote
        </h2>
        <p className="text-white/70 text-lg mb-8">
          Let one of our {location.name.replace(/\s*\([^)]*\)/, "")} client advocates build a solution that fits your logistics needs.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={`tel:${location.phone ? location.phone.replace(/\s/g, "") : "+18888702726"}`}
            className="inline-flex items-center gap-2 bg-secondary text-white font-semibold px-8 py-3.5 rounded-lg hover:brightness-110 transition-all"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Call {location.phone || "+1 888-870-2726"}
          </a>
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/20 transition-all"
          >
            View All Locations
          </Link>
        </div>
      </div>
    </section>
  )
}
