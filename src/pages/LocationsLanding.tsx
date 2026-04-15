import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { locations, regions, getLocationsByRegion, getCountriesInRegion, getLocationsByCountry } from "../data/locations"

function useReveal(threshold = 0.06) {
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

export function LocationsLanding() {
  const [activeRegion, setActiveRegion] = useState("north-america")
  const [search, setSearch] = useState("")
  const [expandedCountries, setExpandedCountries] = useState<Set<string>>(new Set())

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const filteredLocations = search.trim()
    ? locations.filter(l =>
        l.name.toLowerCase().includes(search.toLowerCase()) ||
        l.country.toLowerCase().includes(search.toLowerCase())
      )
    : []

  const regionLocations = getLocationsByRegion(activeRegion)
  const countriesInRegion = getCountriesInRegion(activeRegion)

  const toggleCountry = (c: string) => {
    setExpandedCountries(prev => {
      const next = new Set(prev)
      if (next.has(c)) next.delete(c); else next.add(c)
      return next
    })
  }

  const totalLocations = locations.length
  const totalCountries = new Set(locations.map(l => l.country)).size

  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-[#f4f6f9] pt-[120px] lg:pt-[140px] pb-0">
        <div className="px-6 lg:px-12 pb-5">
          <nav className="flex items-center gap-2 text-[12px] text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span className="opacity-40">/</span>
            <span className="text-foreground font-medium">Locations</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <HeroSection totalLocations={totalLocations} totalCountries={totalCountries} />

      {/* Search */}
      <SearchSection search={search} setSearch={setSearch} filteredLocations={filteredLocations} />

      {/* Combined Global Presence + Region Browser */}
      <GlobalPresenceBrowser
        activeRegion={activeRegion}
        setActiveRegion={setActiveRegion}
        countriesInRegion={countriesInRegion}
        expandedCountries={expandedCountries}
        toggleCountry={toggleCountry}
      />

      {/* CTA */}
      <CTASection />

      <Footer />
    </div>
  )
}

/* ─── Hero ─── */
function HeroSection({ totalLocations, totalCountries }: { totalLocations: number; totalCountries: number }) {
  const reveal = useReveal()
  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className="relative bg-foreground overflow-hidden">
      <div className="absolute inset-0">
        <img src="/locations-map-hero.png" alt="Global logistics network" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/70 to-transparent" />
      </div>
      <div className={`relative px-6 lg:px-12 py-20 lg:py-32 transition-all duration-1000 ${reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-[13px] text-white/80 font-medium">{totalLocations}+ Offices Worldwide</span>
          </div>
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">Global Locations</h1>
          <p className="text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed">
            With {totalLocations}+ locations across {totalCountries} countries, Crane Worldwide Logistics delivers
            seamless supply chain solutions wherever your business takes you.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-6 py-4 text-center min-w-[120px]">
              <div className="font-display text-3xl font-bold text-secondary">{totalLocations}+</div>
              <div className="text-[12px] text-white/60 mt-1">Offices</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-6 py-4 text-center min-w-[120px]">
              <div className="font-display text-3xl font-bold text-secondary">{totalCountries}</div>
              <div className="text-[12px] text-white/60 mt-1">Countries</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-6 py-4 text-center min-w-[120px]">
              <div className="font-display text-3xl font-bold text-secondary">5</div>
              <div className="text-[12px] text-white/60 mt-1">Continents</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Search ─── */
function SearchSection({
  search, setSearch, filteredLocations,
}: {
  search: string
  setSearch: (s: string) => void
  filteredLocations: ReturnType<typeof getLocationsByRegion>
}) {
  return (
    <section className="relative -mt-8 z-10 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-border/50 p-2 relative">
          <div className="flex items-center gap-3 px-4">
            <svg className="w-5 h-5 text-muted-foreground flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              placeholder="Search by city, country, or region..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-3 text-[15px] bg-transparent outline-none placeholder:text-muted-foreground/60"
            />
            {search && (
              <button onClick={() => setSearch("")} className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          {search.trim() && (
            <div className="border-t border-border/50 mt-2 pt-2 max-h-[320px] overflow-y-auto">
              {filteredLocations.length === 0 ? (
                <div className="px-4 py-6 text-center text-muted-foreground text-sm">No locations found</div>
              ) : (
                <div className="space-y-0.5">
                  {filteredLocations.map((loc) => (
                    <Link key={loc.slug} to={`/locations/${loc.slug}`} className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-muted/50 transition-colors group">
                      <div>
                        <div className="text-[14px] font-medium group-hover:text-secondary transition-colors">{loc.name}</div>
                        <div className="text-[12px] text-muted-foreground">{loc.country}</div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        {loc.phone && <span className="text-[11px] hidden sm:block">{loc.phone}</span>}
                        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/* ─── Combined Global Presence + Region Browser ─── */
function GlobalPresenceBrowser({
  activeRegion, setActiveRegion, countriesInRegion, expandedCountries, toggleCountry,
}: {
  activeRegion: string
  setActiveRegion: (r: string) => void
  countriesInRegion: string[]
  expandedCountries: Set<string>
  toggleCountry: (c: string) => void
}) {
  const reveal = useReveal()
  const regionCards = regions.map((r) => {
    const locs = getLocationsByRegion(r.id)
    const cities = [...new Set(locs.map((l) => l.city))].slice(0, 5)
    return { ...r, count: locs.length, cities }
  })

  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className={`py-16 lg:py-24 px-6 lg:px-12 transition-all duration-700 ${reveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[3px] bg-secondary rounded-full" />
            <span className="text-xs font-semibold tracking-widest uppercase text-secondary">Browse by Region</span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">Our Global Presence</h2>
        </div>

        {/* Region Cards as Nav */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4 mb-12">
          {regionCards.map((r) => {
            const isActive = activeRegion === r.id
            return (
              <button
                key={r.id}
                onClick={() => { setActiveRegion(r.id); setExpandedCountries(new Set()) }}
                className={`text-left rounded-xl p-5 lg:p-6 transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? "bg-[#0a1628] border-[#0a1628] shadow-lg shadow-[#0a1628]/15 scale-[1.02]"
                    : "bg-white border-border/40 hover:border-secondary/40 hover:shadow-md"
                }`}
              >
                <span className="text-2xl block mb-2">{r.emoji}</span>
                <h3 className={`font-display text-base lg:text-lg font-bold mb-0.5 transition-colors ${isActive ? "text-white" : "text-foreground"}`}>{r.name}</h3>
                <p className={`text-sm font-semibold mb-2 transition-colors ${isActive ? "text-secondary" : "text-secondary"}`}>{r.count}+ Offices</p>
                <p className={`text-[11px] leading-relaxed line-clamp-2 transition-colors ${isActive ? "text-white/50" : "text-muted-foreground"}`}>{r.cities.join(", ")}</p>
              </button>
            )
          })}
        </div>

        {/* Country Accordion for Active Region */}
        <div className={`grid gap-4 ${countriesInRegion.length <= 2 ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`} key={activeRegion}>
          {countriesInRegion.map((country) => {
            const countryLocs = getLocationsByCountry(country).filter(l => l.region === activeRegion)
            const isExpanded = expandedCountries.has(country) || countriesInRegion.length <= 3
            return (
              <div key={country} className="bg-white rounded-xl border border-border/50 overflow-hidden hover:border-secondary/30 transition-all duration-300 animate-fade-in">
                <button
                  onClick={() => toggleCountry(country)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-display font-semibold text-[15px]">{country}</span>
                      <span className="ml-2 text-[12px] text-muted-foreground">{countryLocs.length} {countryLocs.length === 1 ? "office" : "offices"}</span>
                    </div>
                  </div>
                  <svg className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isExpanded && (
                  <div className="px-5 pb-4 space-y-1 animate-fade-in">
                    {countryLocs.map((loc) => (
                      <Link
                        key={loc.slug}
                        to={`/locations/${loc.slug}`}
                        className="flex items-center justify-between py-2.5 px-3 -mx-1 rounded-lg hover:bg-muted/40 transition-colors group"
                      >
                        <span className="text-[13px] font-medium group-hover:text-secondary transition-colors">{loc.name}</span>
                        <div className="flex items-center gap-2">
                          {loc.phone && <span className="text-[11px] text-muted-foreground hidden sm:block">{loc.phone}</span>}
                          <svg className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ─── */
function CTASection() {
  const reveal = useReveal()
  return (
    <section ref={reveal.ref as React.RefObject<HTMLElement>} className={`py-16 lg:py-24 bg-primary transition-all duration-700 ${reveal.visible ? "opacity-100" : "opacity-0"}`}>
      <div className="px-6 lg:px-12 text-center max-w-3xl mx-auto">
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">Can't Find Your Location?</h2>
        <p className="text-white/70 text-lg mb-8">
          Our global network extends beyond our office locations. Reach out and we'll connect you with the nearest team.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+18888702726" className="inline-flex items-center gap-2 bg-secondary text-white font-semibold px-8 py-3.5 rounded-lg hover:brightness-110 transition-all">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            +1 888-870-2726
          </a>
          <Link to="/" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/20 transition-all">
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
