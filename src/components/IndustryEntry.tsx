import { Link } from "react-router-dom"

const industries = [
  {
    slug: "aerospace-defense",
    name: "Aerospace & Defense",
    image: "https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2FJHzTiY2Fn5f0m32UzPGBf%2Fcrane-worldwide-logistics-aerospace-warehouse_5.jpg",
    signals: ["Time-critical AOG delivery", "Global compliance (ITAR/EAR)", "High-value cargo handling"],
  },
  {
    slug: "automotive",
    name: "Automotive",
    image: "https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2F3v2Zji06dR8hnep7Vp33Q%2Fautomotive-logistics-supply-chain-warehouse_5.jpg",
    signals: ["Just-in-time delivery", "Multi-modal supply chains", "Production line continuity"],
  },
  {
    slug: "energy",
    name: "Energy & Oil/Gas",
    image: "https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2F1cvDm9TzZCCXFgRPtoIOO%2Fenergy-oil-gas-logistics-heavy-cargo_3.jpg",
    signals: ["Heavy-lift project cargo", "Remote site delivery", "Oversized equipment transport"],
  },
  {
    slug: "healthcare",
    name: "Healthcare & Pharma",
    image: "https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2FVpjS1lLeGhTGHyE2eh2Ce%2Fhealthcare-pharma-cold-chain-logistics_4.jpg",
    signals: ["Cold chain logistics", "Regulatory compliance", "End-to-end visibility"],
  },
  {
    slug: "high-tech",
    name: "High-Tech",
    image: "https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2Fd7KuMC6ajRb411jtp0_Yb%2Fhigh-tech-electronics-logistics-warehouse_9.jpg",
    signals: ["Speed-to-market fulfillment", "Reverse logistics", "Secure high-value transport"],
  },
  {
    slug: "retail",
    name: "Retail & E-Commerce",
    image: "https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2FYKH905-VxOrzrdHw9PIeG%2Fretail-ecommerce-logistics-fulfillment_6.png",
    signals: ["Omnichannel fulfillment", "Peak-season scalability", "Last-mile distribution"],
  },
]

/* ─── OPTION A: Hover-Reveal Image Cards ─── */
export function IndustryEntryA() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Find your industry solution
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
            Solutions tailored to your business and supply chain challenges
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              to={`/industries/${ind.slug}`}
              className="group relative h-[280px] lg:h-[340px] rounded-xl overflow-hidden"
            >
              {/* Image */}
              <img
                src={ind.image}
                alt={ind.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Default state — dark gradient at bottom with name */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

              {/* Hover state — darker overlay with signals */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Name — visible by default, fades out on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 transition-opacity duration-400 group-hover:opacity-0">
                <h3 className="text-xl lg:text-2xl font-bold text-white">
                  {ind.name}
                </h3>
              </div>

              {/* Signals — appear on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                  {ind.name}
                </h3>
                <ul className="space-y-1.5 mb-4">
                  {ind.signals.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-white/85">
                      <span className="w-1 h-1 rounded-full bg-secondary flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
                  Explore solutions
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-8 flex justify-center">
          <Link to="/industries" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors group">
            View all industries
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── OPTION C: Horizontal Scroll Strip ─── */
export function IndustryEntryC() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-secondary mb-3">Option C — Horizontal Scroll</p>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              Find your industry solution
            </h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
              Solutions tailored to your business and supply chain challenges
            </p>
          </div>
          <Link to="/industries" className="hidden lg:inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors group flex-shrink-0">
            View all industries
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Scrollable strip */}
      <div className="relative">
        <div className="flex gap-5 overflow-x-auto pb-6 px-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+3rem))] lg:pr-12 scrollbar-hide snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              to={`/industries/${ind.slug}`}
              className="group relative flex-shrink-0 w-[280px] lg:w-[300px] h-[420px] rounded-2xl overflow-hidden snap-start"
            >
              <img
                src={ind.image}
                alt={ind.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Content pinned to bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-3">{ind.name}</h3>
                <ul className="space-y-1.5 mb-4">
                  {ind.signals.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-white/80">
                      <span className="w-1 h-1 rounded-full bg-secondary flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore solutions
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
        {/* Fade edge hint */}
        <div className="absolute right-0 top-0 bottom-6 w-24 bg-gradient-to-l from-[#f8f9fb] to-transparent pointer-events-none" />
      </div>

      {/* Mobile view all */}
      <div className="mt-4 flex justify-center lg:hidden">
        <Link to="/industries" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors group">
          View all industries
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

/* ─── OPTION B: Featured + Grid ─── */
export function IndustryEntryB() {
  const featured = industries[0]
  const rest = industries.slice(1)

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-secondary mb-3">Option B — Featured + Grid</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Find your industry solution
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
            Solutions tailored to your business and supply chain challenges
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Featured large card */}
          <Link
            to={`/industries/${featured.slug}`}
            className="lg:col-span-5 group relative h-[360px] lg:h-full lg:min-h-[520px] rounded-2xl overflow-hidden"
          >
            <img
              src={featured.image}
              alt={featured.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-secondary mb-2">Featured</span>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">{featured.name}</h3>
              <ul className="space-y-2 mb-5">
                {featured.signals.map((s) => (
                  <li key={s} className="flex items-center gap-2.5 text-[15px] text-white/85">
                    <svg className="w-4 h-4 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary group-hover:gap-2.5 transition-all">
                Explore solutions
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Right side — 5 smaller cards in a grid */}
          <div className="lg:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((ind) => (
              <Link
                key={ind.slug}
                to={`/industries/${ind.slug}`}
                className="group relative h-[240px] rounded-xl overflow-hidden"
              >
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent transition-all duration-500 group-hover:from-black/85 group-hover:via-black/50" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-base font-bold text-white mb-1.5">{ind.name}</h3>
                  {/* Show signals on hover */}
                  <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500">
                    <ul className="space-y-1 mb-2">
                      {ind.signals.map((s) => (
                        <li key={s} className="flex items-center gap-1.5 text-xs text-white/80">
                          <span className="w-1 h-1 rounded-full bg-secondary flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View all link */}
        <div className="mt-8 flex justify-center">
          <Link to="/industries" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors group">
            View all industries
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
