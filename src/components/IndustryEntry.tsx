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

export function IndustryEntryA() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
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

              {/* Hover state — darker overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Name — visible by default, fades out on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 transition-opacity duration-400 group-hover:opacity-0">
                <h3 className="text-xl lg:text-2xl font-bold text-white">
                  {ind.name}
                </h3>
              </div>

              {/* Signals — appear on hover */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="p-5 lg:p-6 pb-0">
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
                </div>
                {/* Green bar CTA */}
                <div className="bg-secondary px-5 lg:px-6 py-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">Explore solutions</span>
                  <svg className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
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
