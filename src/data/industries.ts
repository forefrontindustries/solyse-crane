export interface IndustryData {
  slug: string
  name: string
  tagline: string
  headline: string
  description: string
  heroImage: string
  challenges: {
    title: string
    description: string
    href: string
  }[]
  services: {
    name: string
    bullets: string[]
    href: string
  }[]
  cviewHeadline: string
  cviewDescription: string
  caseStudies: {
    image: string
    tag: string
    title: string
    metrics: { label: string; value: string }[]
  }[]
  ctaHeadline: string
  ctaDescription: string
}

export const industries: Record<string, IndustryData> = {
  "aerospace-defense": {
    slug: "aerospace-defense",
    name: "Aerospace & Defense",
    tagline: "Aerospace & Defense Logistics",
    headline: "Mission-Critical Logistics\nfor Aerospace",
    description: "From AOG response to MRO supply chains, we deliver precision logistics for the world's most demanding industry.",
    heroImage: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1200&q=80&auto=format",
    challenges: [
      {
        title: "AOG Downtime Costs",
        description: "Every hour grounded costs $150K+. Parts need to move in hours, not days. Our dedicated AOG desk operates 24/7 with pre-positioned inventory strategies to minimize aircraft-on-ground situations.",
        href: "#",
      },
      {
        title: "Regulatory Compliance",
        description: "ITAR, EAR, FAA create complex documentation and handling requirements. Our licensed brokers and compliance teams ensure every shipment meets stringent regulatory standards.",
        href: "#",
      },
      {
        title: "Global MRO Supply",
        description: "Parts sourced globally need coordinated multi-modal transport with chain of custody. We manage end-to-end visibility from warehouse to wing across 120+ locations.",
        href: "#",
      },
      {
        title: "Visibility Gaps",
        description: "Critical shipments require real-time tracking from warehouse to wing. C-View provides milestone alerts, document management, and predictive ETAs for complete supply chain transparency.",
        href: "#",
      },
    ],
    services: [
      {
        name: "Time Critical",
        bullets: ["NFO, OBC, charter for AOG situations", "24/7 AOG desk", "2-hour response SLA"],
        href: "#",
      },
      {
        name: "Air Freight",
        bullets: ["Priority routing, dangerous goods handling", "DG certified handling", "ITAR compliant"],
        href: "#",
      },
      {
        name: "Project Logistics",
        bullets: ["Engine stands, assemblies, heavy-lift", "Heavy-lift coordination", "Multi-modal planning"],
        href: "#",
      },
      {
        name: "Customs Brokerage",
        bullets: ["ITAR/EAR compliance, trade advisory", "Licensed brokers", "C-TPAT certified"],
        href: "#",
      },
    ],
    cviewHeadline: "C-View: Real-Time Aerospace Supply Chain Visibility",
    cviewDescription: "Track every AOG shipment from PO to delivery with milestone alerts, document management, and predictive ETAs.",
    caseStudies: [
      {
        image: "https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2F3SM8OEHD-B3MioM-b2hjX%2Faerospace-logistics-aog-aircraft-maintenance-cargo_5.jpg",
        tag: "AOG Response",
        title: "Major Airline: 4-Hour AOG Part Delivery Across 3 Continents",
        metrics: [{ label: "Response", value: "4hrs" }, { label: "Value", value: "$2.4M" }],
      },
      {
        image: "https://images.unsplash.com/photo-1559297434-fae8a1916a79?w=600&q=80&auto=format",
        tag: "MRO Supply Chain",
        title: "Defense Contractor: Global MRO Parts Distribution",
        metrics: [{ label: "On-time", value: "99.7%" }, { label: "Cost Reduction", value: "32%" }],
      },
      {
        image: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=600&q=80&auto=format",
        tag: "Project Cargo",
        title: "Engine Mfr: Heavy-Lift to Remote Facility",
        metrics: [{ label: "Weight", value: "47 tons" }, { label: "Incidents", value: "0" }],
      },
    ],
    ctaHeadline: "Ready to strengthen your aerospace supply chain?",
    ctaDescription: "Connect with our aerospace logistics specialists — they speak your language.",
  },
  "automotive": {
    slug: "automotive",
    name: "Automotive",
    tagline: "Automotive Logistics",
    headline: "Just-in-Time Precision\nfor Automotive",
    description: "Keeping production lines running with sequenced delivery, JIT logistics, and global parts distribution.",
    heroImage: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&q=80&auto=format",
    challenges: [
      {
        title: "Production Line Stoppages",
        description: "A single missing part can halt an entire assembly line at $50K+ per minute. Our sequenced delivery programs ensure components arrive exactly when needed.",
        href: "#",
      },
      {
        title: "Global Supplier Networks",
        description: "Managing thousands of tier-1 and tier-2 suppliers across continents requires sophisticated coordination and real-time visibility across every link in the chain.",
        href: "#",
      },
      {
        title: "Quality & Compliance",
        description: "Automotive components demand strict quality controls, temperature management, and compliance with ISO/TS 16949 standards throughout the supply chain.",
        href: "#",
      },
      {
        title: "EV Transition Complexity",
        description: "Battery logistics, new material flows, and evolving regulatory requirements create unprecedented supply chain challenges as the industry electrifies.",
        href: "#",
      },
    ],
    services: [
      {
        name: "Ground Services",
        bullets: ["JIT/JIS delivery", "Milk-run optimization", "Cross-dock operations"],
        href: "#",
      },
      {
        name: "Air Freight",
        bullets: ["Emergency parts expediting", "Charter services", "Premium express options"],
        href: "#",
      },
      {
        name: "Contract Logistics",
        bullets: ["Sequencing centers", "Sub-assembly operations", "Kitting & packaging"],
        href: "#",
      },
      {
        name: "Customs Brokerage",
        bullets: ["FTZ management", "Duty drawback programs", "Trade compliance advisory"],
        href: "#",
      },
    ],
    cviewHeadline: "C-View: Real-Time Automotive Supply Chain Visibility",
    cviewDescription: "Monitor every shipment across your supplier network with predictive ETAs, exception alerts, and production schedule integration.",
    caseStudies: [
      {
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80&auto=format",
        tag: "JIT Delivery",
        title: "Global OEM: Sequenced Parts Delivery Across 12 Plants",
        metrics: [{ label: "On-time", value: "99.8%" }, { label: "Plants Served", value: "12" }],
      },
      {
        image: "https://images.unsplash.com/photo-1504222490345-c075b6008014?w=600&q=80&auto=format",
        tag: "EV Supply Chain",
        title: "EV Startup: Battery Module Logistics Program",
        metrics: [{ label: "Lead Time", value: "-40%" }, { label: "Zero", value: "Incidents" }],
      },
      {
        image: "https://storage.googleapis.com/runable-templates/cli-uploads%2FiIIRybateRYgKiTOlAP7KnqoCc65vPfm%2FePEScadivXzzISDwm_PP7%2Fev-battery-logistics-electric-vehicle-supply-chain-warehouse_4.jpg",
        tag: "Emergency Response",
        title: "Tier-1 Supplier: Critical Part Recovery Program",
        metrics: [{ label: "Recovery", value: "6hrs" }, { label: "Saved", value: "$8M" }],
      },
    ],
    ctaHeadline: "Ready to optimize your automotive supply chain?",
    ctaDescription: "Connect with our automotive logistics specialists — they speak your language.",
  },
  "energy": {
    slug: "energy",
    name: "Energy & Oil/Gas",
    tagline: "Energy Logistics",
    headline: "Powering Global\nEnergy Supply Chains",
    description: "From offshore platforms to renewable installations, we move the critical equipment that keeps the world's energy flowing.",
    heroImage: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1200&q=80&auto=format",
    challenges: [
      {
        title: "Remote Locations",
        description: "Delivering heavy equipment to offshore rigs, remote pipelines, and extreme environments requires specialized logistics planning and execution capabilities.",
        href: "#",
      },
      {
        title: "Oversized Cargo",
        description: "Turbines, transformers, and drilling equipment demand specialized heavy-lift solutions, route surveys, and multi-modal coordination across continents.",
        href: "#",
      },
      {
        title: "Safety & Compliance",
        description: "Hazardous materials, dangerous goods regulations, and strict HSE requirements across jurisdictions require expert handling at every stage.",
        href: "#",
      },
      {
        title: "Project Timelines",
        description: "Billion-dollar energy projects can't afford delays. Every component must arrive on schedule to keep construction and commissioning on track.",
        href: "#",
      },
    ],
    services: [
      {
        name: "Project Logistics",
        bullets: ["Heavy-lift & oversized cargo", "Route surveys & engineering", "Turnkey project management"],
        href: "#",
      },
      {
        name: "Ocean Freight",
        bullets: ["Break-bulk & RoRo", "Charter vessels", "Port-to-site coordination"],
        href: "#",
      },
      {
        name: "Air Freight",
        bullets: ["Emergency spares delivery", "Charter for critical path items", "DG certified handling"],
        href: "#",
      },
      {
        name: "Customs Brokerage",
        bullets: ["Temporary import permits", "ATA carnets", "Multi-jurisdiction compliance"],
        href: "#",
      },
    ],
    cviewHeadline: "C-View: Real-Time Energy Project Visibility",
    cviewDescription: "Track every shipment across your energy project with milestone alerts, document management, and construction schedule integration.",
    caseStudies: [
      {
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80&auto=format",
        tag: "Renewable Energy",
        title: "Wind Farm: 180 Turbine Delivery Program",
        metrics: [{ label: "Turbines", value: "180" }, { label: "On-time", value: "98.9%" }],
      },
      {
        image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&q=80&auto=format",
        tag: "Offshore",
        title: "Deepwater Platform: Emergency Equipment Mobilization",
        metrics: [{ label: "Response", value: "18hrs" }, { label: "Weight", value: "220 tons" }],
      },
      {
        image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=600&q=80&auto=format",
        tag: "Pipeline",
        title: "Cross-Country Pipeline: Materials Logistics Program",
        metrics: [{ label: "Distance", value: "1,200mi" }, { label: "Cost Saving", value: "24%" }],
      },
    ],
    ctaHeadline: "Ready to power your energy supply chain?",
    ctaDescription: "Connect with our energy logistics specialists — they speak your language.",
  },
  "healthcare": {
    slug: "healthcare",
    name: "Healthcare & Pharma",
    tagline: "Healthcare & Life Sciences Logistics",
    headline: "Temperature-Controlled\nPharma Logistics",
    description: "GDP-compliant, cold chain logistics for pharmaceuticals, medical devices, and clinical trial materials worldwide.",
    heroImage: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80&auto=format",
    challenges: [
      {
        title: "Cold Chain Integrity",
        description: "Temperature excursions can destroy million-dollar shipments. Our validated cold chain solutions maintain 2-8°C, -20°C, and -80°C requirements from origin to destination.",
        href: "#",
      },
      {
        title: "Regulatory Complexity",
        description: "GDP, FDA, WHO, and country-specific regulations create a maze of compliance requirements for pharmaceutical and medical device logistics.",
        href: "#",
      },
      {
        title: "Clinical Trial Timelines",
        description: "Patient enrollment depends on timely IMP delivery. Delays can cost $600K–$8M per day in late-stage trials and compromise study integrity.",
        href: "#",
      },
      {
        title: "Serialization & Track/Trace",
        description: "Global serialization mandates require end-to-end product tracking and authentication across complex, multi-tier distribution networks.",
        href: "#",
      },
    ],
    services: [
      {
        name: "Air Freight",
        bullets: ["GDP-qualified lanes", "Active & passive containers", "24/7 monitoring"],
        href: "#",
      },
      {
        name: "Contract Logistics",
        bullets: ["GDP-certified warehousing", "Pick & pack for clinical trials", "Returns management"],
        href: "#",
      },
      {
        name: "Time Critical",
        bullets: ["Emergency drug delivery", "On-board courier", "Temperature-controlled charters"],
        href: "#",
      },
      {
        name: "Customs Brokerage",
        bullets: ["Import permits & licenses", "Controlled substance handling", "FDA liaison"],
        href: "#",
      },
    ],
    cviewHeadline: "C-View: Real-Time Pharma Supply Chain Visibility",
    cviewDescription: "Monitor temperature, location, and chain of custody for every pharmaceutical shipment with real-time alerts and compliance documentation.",
    caseStudies: [
      {
        image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=600&q=80&auto=format",
        tag: "Cold Chain",
        title: "Global Pharma: Temperature-Controlled Distribution Network",
        metrics: [{ label: "Compliance", value: "100%" }, { label: "Countries", value: "42" }],
      },
      {
        image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&q=80&auto=format",
        tag: "Clinical Trials",
        title: "Biotech: Phase III Trial Material Distribution",
        metrics: [{ label: "Sites", value: "180" }, { label: "On-time", value: "99.6%" }],
      },
      {
        image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80&auto=format",
        tag: "Medical Devices",
        title: "Med-Tech: Surgical Kit Logistics Program",
        metrics: [{ label: "Kits/month", value: "12K" }, { label: "Accuracy", value: "99.9%" }],
      },
    ],
    ctaHeadline: "Ready to optimize your healthcare supply chain?",
    ctaDescription: "Connect with our life sciences logistics specialists — they speak your language.",
  },
  "high-tech": {
    slug: "high-tech",
    name: "High-Tech",
    tagline: "High-Tech Logistics",
    headline: "Speed-to-Market\nfor High-Tech",
    description: "Protecting high-value electronics with secure, time-definite logistics from fab to fulfillment center.",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format",
    challenges: [
      {
        title: "Product Launch Windows",
        description: "Missing a launch date by even days costs millions in market share. Our speed-to-market programs compress timelines from factory to retail shelf.",
        href: "#",
      },
      {
        title: "High-Value Security",
        description: "Semiconductors, servers, and consumer electronics require rigorous chain-of-custody protocols, GPS tracking, and vetted carrier networks.",
        href: "#",
      },
      {
        title: "Demand Volatility",
        description: "Tech cycles create extreme peaks and troughs. Flexible capacity planning and multi-modal strategies keep costs optimized regardless of volume swings.",
        href: "#",
      },
      {
        title: "Reverse Logistics",
        description: "Returns, refurbishment, and e-waste compliance add complexity. Integrated reverse supply chains recover value and ensure regulatory compliance.",
        href: "#",
      },
    ],
    services: [
      {
        name: "Air Freight",
        bullets: ["Chartered capacity for launches", "White glove handling", "Secure transport protocols"],
        href: "#",
      },
      {
        name: "Contract Logistics",
        bullets: ["Merge-in-transit", "Postponement strategies", "Configuration centers"],
        href: "#",
      },
      {
        name: "Ground Services",
        bullets: ["Last-mile delivery", "Installation logistics", "Secure FTL/LTL"],
        href: "#",
      },
      {
        name: "Customs Brokerage",
        bullets: ["Export controls (EAR/ECCN)", "FTZ programs", "Duty optimization"],
        href: "#",
      },
    ],
    cviewHeadline: "C-View: Real-Time High-Tech Supply Chain Visibility",
    cviewDescription: "Track every high-value shipment with GPS precision, geofence alerts, and proof-of-delivery documentation.",
    caseStudies: [
      {
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80&auto=format",
        tag: "Product Launch",
        title: "Global Tech Co: Multi-Country Product Launch Logistics",
        metrics: [{ label: "Countries", value: "28" }, { label: "On-time", value: "100%" }],
      },
      {
        image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&q=80&auto=format",
        tag: "Data Center",
        title: "Cloud Provider: Data Center Equipment Rollout",
        metrics: [{ label: "Servers", value: "50K" }, { label: "Damage", value: "0.01%" }],
      },
      {
        image: "https://images.unsplash.com/photo-1601737487795-dab272f52420?w=600&q=80&auto=format",
        tag: "Semiconductor",
        title: "Chip Maker: Wafer Fab Equipment Relocation",
        metrics: [{ label: "Value", value: "$180M" }, { label: "Downtime", value: "0 days" }],
      },
    ],
    ctaHeadline: "Ready to accelerate your tech supply chain?",
    ctaDescription: "Connect with our high-tech logistics specialists — they speak your language.",
  },
  "retail": {
    slug: "retail",
    name: "Retail & E-Commerce",
    tagline: "Retail & E-Commerce Logistics",
    headline: "Omnichannel Fulfillment\nfor Retail",
    description: "From factory floor to customer door — integrated logistics for modern retail and direct-to-consumer brands.",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80&auto=format",
    challenges: [
      {
        title: "Peak Season Capacity",
        description: "Holiday surges can increase volumes 5-10x. Our scalable solutions flex with demand through pre-contracted capacity and overflow warehouse networks.",
        href: "#",
      },
      {
        title: "Speed of Delivery",
        description: "Consumer expectations for next-day and same-day delivery require optimized networks, strategic inventory positioning, and technology-driven routing.",
        href: "#",
      },
      {
        title: "Returns Management",
        description: "E-commerce return rates of 20-30% demand efficient reverse logistics to recover product value and maintain customer satisfaction.",
        href: "#",
      },
      {
        title: "Inventory Optimization",
        description: "Balancing stock across channels, DCs, and stores while minimizing carrying costs requires data-driven forecasting and agile replenishment strategies.",
        href: "#",
      },
    ],
    services: [
      {
        name: "Contract Logistics",
        bullets: ["Omnichannel fulfillment", "Pick, pack & ship", "Value-added services"],
        href: "#",
      },
      {
        name: "Ocean Freight",
        bullets: ["FCL/LCL from Asia", "Buyer's consolidation", "Port-to-DC programs"],
        href: "#",
      },
      {
        name: "Ground Services",
        bullets: ["Last-mile delivery", "Store replenishment", "Cross-dock operations"],
        href: "#",
      },
      {
        name: "Customs Brokerage",
        bullets: ["Section 301 advisory", "Duty mitigation", "ISF/entry management"],
        href: "#",
      },
    ],
    cviewHeadline: "C-View: Real-Time Retail Supply Chain Visibility",
    cviewDescription: "Monitor every PO from factory to shelf with vendor compliance scoring, milestone tracking, and exception management.",
    caseStudies: [
      {
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80&auto=format",
        tag: "E-Commerce",
        title: "DTC Brand: National Fulfillment Network Launch",
        metrics: [{ label: "Ship Time", value: "1.2 days" }, { label: "Accuracy", value: "99.8%" }],
      },
      {
        image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=600&q=80&auto=format",
        tag: "Peak Season",
        title: "Major Retailer: Holiday Surge Capacity Program",
        metrics: [{ label: "Volume", value: "+400%" }, { label: "SLA Met", value: "99.2%" }],
      },
      {
        image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80&auto=format",
        tag: "Omnichannel",
        title: "Fashion Brand: Ship-from-Store Logistics",
        metrics: [{ label: "Stores", value: "340" }, { label: "Cost", value: "-28%" }],
      },
    ],
    ctaHeadline: "Ready to transform your retail supply chain?",
    ctaDescription: "Connect with our retail logistics specialists — they speak your language.",
  },
}

export function getIndustry(slug: string): IndustryData | undefined {
  return industries[slug]
}

export function getAllIndustries() {
  return Object.values(industries)
}
