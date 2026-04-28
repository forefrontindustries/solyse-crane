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

export function IndustryEntry() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Find your industry solution
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
            Find solutions tailored to your business and supply chain challenges
          </p>
        </div>

        {/* Grid — 3 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              to={`/industries/${ind.slug}`}
              className="group relative bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-slate-300 hover:-translate-y-0.5"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-secondary transition-colors">
                  {ind.name}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {ind.signals.map((signal) => (
                    <li key={signal} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <svg className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {signal}
                    </li>
                  ))}
                </ul>

                {/* CTA hint */}
                <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore solutions
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
