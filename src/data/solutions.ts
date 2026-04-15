export interface Solution {
  slug: string
  name: string
  tagline: string
  description: string
  image: string
  icon: string // emoji or keyword for icon mapping
  features?: { title: string; description: string }[]
  whyChoose?: { title: string; description: string }[]
  industries?: string[]
  ctaText?: string
}

export const solutions: Solution[] = [
  {
    slug: "air-freight",
    name: "Air Freight",
    tagline: "Fast, Reliable, Global",
    description: "Crane Worldwide Logistics delivers comprehensive Air Freight solutions designed to move your cargo efficiently and reliably across the globe. As a leader in freight forwarding, we provide tailored solutions for businesses of all sizes, ensuring your shipments arrive on time, intact, and compliant with all regulations.",
    image: "https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2FoNBwwNxrtMK4vw--ofriF%2Funsplash-air-freight-cargo-plane-logistics_1.jpg",
    icon: "plane",
    features: [
      { title: "Charter Flights", description: "We handle each stage of the process from your location to your customer's door. This includes pickup, consolidation, and delivery, providing seamless and stress-free transport." },
      { title: "Consolidated Air Freight", description: "Optimize cost and efficiency with consolidated shipments designed to streamline transit and reduce expenses." },
      { title: "Time Critical Air Freight", description: "From urgent express moves to reliable standard service, Crane provides flexible, schedule-driven air solutions tailored to your deadline and budget." },
      { title: "Air Cargo Customs Clearance & Documentation", description: "International shipping can be complex, but our experts simplify it with accurate paperwork and compliance support, helping your cargo clear customs quickly." },
      { title: "Oversized Cargo", description: "Skilled in managing complex oversized shipments using specialized equipment and global partners for safe, efficient, and compliant transport." },
    ],
    whyChoose: [
      { title: "Global Network", description: "Extensive air connections to key markets worldwide enable us to deliver cargo quickly and efficiently." },
      { title: "Real-Time Tracking", description: "Our state-of-the-art tracking tools allow you to monitor shipments in real time, keeping you informed at every stage." },
      { title: "Expert Support", description: "Our logistics specialists guide you through every step of air shipping, helping you avoid delays and navigate international regulations." },
      { title: "Customized Solutions", description: "Every business is unique. We design tailored Air Freight Services that fit your specific shipping requirements, volume, and timelines." },
      { title: "Reliability & Speed", description: "We understand the importance of on-time delivery. With Crane Worldwide, your shipments are handled with the utmost care and efficiency." },
    ],
    industries: ["Energy", "Automotive & Industrial", "Hi-Tech", "Consumer Goods"],
  },
  {
    slug: "ocean-freight",
    name: "Ocean Freight",
    tagline: "Global Coverage, Every Trade Lane",
    description: "Global ocean freight coverage allows us to cover all major freight trade lanes for both FCL and LCL ocean shipping. Our experienced team manages the complexities of international ocean logistics to deliver reliable, cost-effective solutions.",
    image: "https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2FgDOpCEQ5_YHXt0QXrsSsJ%2Funsplash-ocean-freight-container-ship-port_1.jpg",
    icon: "ship",
  },
  {
    slug: "ground",
    name: "Ground",
    tagline: "National & International Trucking",
    description: "National and international trucking capabilities built to provide road transportation services to serve your ground freight needs. From FTL to LTL, our ground solutions keep your supply chain moving.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    icon: "truck",
  },
  {
    slug: "contract-logistics",
    name: "Contract Logistics",
    tagline: "Integrated Warehousing & Fulfillment",
    description: "Our global footprint, advanced technology, and experienced teams allow us to support complex order fulfillment, precise inventory management, regional and interstate warehousing, and fully integrated supply chain operations.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80",
    icon: "warehouse",
  },
  {
    slug: "customs-brokerage",
    name: "Customs Broker",
    tagline: "Expert Import/Export Compliance",
    description: "Providing full-service customs brokerage in the United States and Canada, for all ports of entry. Our licensed customs brokers ensure your goods clear customs efficiently and in full compliance.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    icon: "customs",
  },
  {
    slug: "project-logistics",
    name: "Project Logistics",
    tagline: "Complex & Oversized Cargo Solutions",
    description: "Skills and solutions for solving your global, oversized cargo challenges. Our project logistics team provides engineering studies, route surveys, and specialized handling for heavy-lift and out-of-gauge cargo.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    icon: "project",
  },
  {
    slug: "rail-freight",
    name: "Rail Freight",
    tagline: "China to Europe & Beyond",
    description: "Secure, reliable railway freight transportation from China to Europe has provided our clients with a unique opportunity to save time and money. Rail freight offers a cost-effective middle ground between air and ocean.",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1200&q=80",
    icon: "rail",
  },
  {
    slug: "cargo-insurance",
    name: "Cargo Insurance",
    tagline: "Protect Your Shipments",
    description: "Protect your shipments with cargo insurance coverage for all your transportation needs. We offer comprehensive policies tailored to your risk profile and cargo value.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    icon: "shield",
  },
  {
    slug: "ecommerce-shipping",
    name: "E-commerce Shipping",
    tagline: "Built for Your Business Model",
    description: "Our e-commerce logistics solutions are designed exclusively to fit your business model. From first mile to last mile, we handle fulfillment, returns, and cross-border e-commerce with speed and precision.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    icon: "ecommerce",
  },
  {
    slug: "managed-transportation",
    name: "Managed Transportation",
    tagline: "Best-in-Class TMS Solutions",
    description: "Our transportation management offers the best in class, high touch solution with excellent service, execution, and technology. Gain visibility and control over your entire transportation spend.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80",
    icon: "management",
  },
  {
    slug: "trade-advisory",
    name: "Trade Advisory",
    tagline: "International Trade Expertise",
    description: "Our international trade advisory program is designed to deliver expert international trade and compliance information when you need it the most. Stay ahead of regulatory changes and tariff impacts.",
    image: "https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2FYAjhRzwRGyGX1-eLm8g46%2Funsplash-trade-advisory-compliance-documents_0.jpg",
    icon: "advisory",
  },
  {
    slug: "value-added-services",
    name: "Value Added Services",
    tagline: "Enhance Your Operations",
    description: "Effective and efficient solutions that will add value to your global or local operations. From kitting and assembly to quality inspection and packaging, we extend your capabilities.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    icon: "value",
  },
  {
    slug: "battery-logistics",
    name: "Battery Logistics",
    tagline: "Safe & Compliant Battery Transport",
    description: "Shipping Lithium-ion batteries needs safe and secure handling and transportation. Our team is trained in all DG classifications and packaging requirements for battery shipments globally.",
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=1200&q=80",
    icon: "battery",
  },
  {
    slug: "nextgen-logistics",
    name: "NextGen Logistics",
    tagline: "Cloud Infrastructure & High-Tech",
    description: "NextGen Logistics provides end-to-end supply chain solutions tailored for cloud infrastructure and high-tech industries. Purpose-built for the data center economy.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    icon: "nextgen",
  },
  {
    slug: "time-critical",
    name: "Time-Critical Logistics",
    tagline: "When Every Minute Counts",
    description: "Whether you're facing a line-down emergency, an aircraft-on-ground event, a medical life-saving shipment, or a critical production disruption, our expedited shipping solutions move at the speed your operation demands.",
    image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=1200&q=80",
    icon: "clock",
  },
]

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug)
}

export function getAllSolutions(): Solution[] {
  return solutions
}
