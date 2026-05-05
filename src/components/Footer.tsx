import { CTA } from "./CTA"

export function Footer() {
  return (
    <>
      <CTA />
      <footer className="bg-foreground pt-[76px] pb-[38px] px-6 lg:px-12">
      {/* Top grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2.2fr_1fr_1fr_1fr_1.3fr] gap-12 mb-12 pb-12">
        {/* Brand column */}
        <div>
          <a href="/" className="inline-block mb-4">
            <img
              src="/logo-crane.png"
              alt="Crane Worldwide Logistics"
              className="h-[34px] w-auto brightness-0 invert"
            />
          </a>
          <p className="text-[13px] text-white/40 leading-[1.8] font-light max-w-[290px] mt-4">
            Global logistics partner delivering customized supply chain solutions across air, ocean, ground, rail, and contract logistics services worldwide.
          </p>
          <div className="mt-5 flex flex-col gap-2.5">
            <a href="tel:+18888702726" className="text-[13px] text-white/40 flex items-center gap-2 hover:text-white transition-colors">
              <svg className="w-[13px] h-[13px] flex-shrink-0" viewBox="0 0 20 20" fill="none" stroke="#38a065" strokeWidth="2">
                <path d="M2 3a1 1 0 011-1h3.5l1.5 4-2 1.5a14 14 0 006.5 6.5L14 12l4 1.5v3.5a1 1 0 01-1 1A16 16 0 012 3z" />
              </svg>
              +1 888-870-2726
            </a>
            <a href="mailto:info@craneww.com" className="text-[13px] text-white/40 flex items-center gap-2 hover:text-white transition-colors">
              <svg className="w-[13px] h-[13px] flex-shrink-0" viewBox="0 0 20 20" fill="none" stroke="#38a065" strokeWidth="2">
                <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                <path d="M3 5l7 7 7-7" />
              </svg>
              info@craneww.com
            </a>
            <a href="#" className="text-[13px] text-white/40 flex items-center gap-2 hover:text-white transition-colors">
              <svg className="w-[13px] h-[13px] flex-shrink-0" viewBox="0 0 20 20" fill="none" stroke="#38a065" strokeWidth="2">
                <path d="M10 2C7 2 4 5 4 9c0 5 6 9 6 9s6-4 6-9c0-4-3-7-6-7z" />
                <circle cx="10" cy="9" r="2" />
              </svg>
              1500 Rankin Rd, Houston TX 77073
            </a>
          </div>
        </div>

        {/* Industries column */}
        <div>
          <h4 className="font-display font-bold text-[13px] tracking-[0.1em] uppercase text-white mb-[18px]">Industries</h4>
          <ul className="flex flex-col gap-2.5">
            {[
              { name: "Aerospace & Defense", slug: "aerospace-defense" },
              { name: "Automotive", slug: "automotive" },
              { name: "Consumer Goods", slug: "consumer-goods" },
              { name: "Cruise, Marine & Hospitality", slug: "cruise-marine" },
              { name: "Energy & Oil/Gas", slug: "energy" },
              { name: "Government", slug: "government" },
              { name: "Hi-Tech", slug: "high-tech" },
              { name: "Industrial", slug: "industrial" },
              { name: "Life Sciences", slug: "healthcare" },
              { name: "Mining", slug: "mining" },
            ].map((ind) => (
              <li key={ind.slug}>
                <a href={`/industries/${ind.slug}`} className="text-[13px] text-white/40 hover:text-white transition-all duration-200 flex items-center gap-0 hover:gap-1.5 group">
                  <span className="w-0 h-[1px] bg-secondary transition-all duration-200 group-hover:w-2.5" />
                  {ind.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services column */}
        <div>
          <h4 className="font-display font-bold text-[13px] tracking-[0.1em] uppercase text-white mb-[18px]">Services</h4>
          <ul className="flex flex-col gap-2.5">
            {[
              { name: "Air Freight", slug: "air-freight" },
              { name: "Ocean Freight", slug: "ocean-freight" },
              { name: "Ground", slug: "ground" },
              { name: "Contract Logistics", slug: "contract-logistics" },
              { name: "Customs Broker", slug: "customs-brokerage" },
              { name: "Project Logistics", slug: "project-logistics" },
              { name: "Rail Freight", slug: "rail-freight" },
              { name: "Cargo Insurance", slug: "cargo-insurance" },
              { name: "E-commerce Shipping", slug: "ecommerce-shipping" },
              { name: "Managed Transportation", slug: "managed-transportation" },
              { name: "Trade Advisory", slug: "trade-advisory" },
              { name: "Value Added Services", slug: "value-added-services" },
              { name: "Battery Logistics", slug: "battery-logistics" },
              { name: "NextGen Logistics", slug: "nextgen-logistics" },
              { name: "Time-Critical Logistics", slug: "time-critical" },
            ].map((svc) => (
              <li key={svc.slug}>
                <a href={`/solutions/${svc.slug}`} className="text-[13px] text-white/40 hover:text-white transition-all duration-200 flex items-center gap-0 hover:gap-1.5 group">
                  <span className="w-0 h-[1px] bg-secondary transition-all duration-200 group-hover:w-2.5" />
                  {svc.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company column */}
        <div>
          <h4 className="font-display font-bold text-[13px] tracking-[0.1em] uppercase text-white mb-[18px]">Company</h4>
          <ul className="flex flex-col gap-2.5">
            {["About Us", "Our Value", "Leadership", "Sustainability", "Crane Cares", "Compliance", "Careers", "QHSE"].map((link) => (
              <li key={link}>
                <a href="#" className="text-[13px] text-white/40 hover:text-white transition-all duration-200 flex items-center gap-0 hover:gap-1.5 group">
                  <span className="w-0 h-[1px] bg-secondary transition-all duration-200 group-hover:w-2.5" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter column */}
        <div>
          <h4 className="font-display font-bold text-[13px] tracking-[0.1em] uppercase text-white mb-[18px]">Stay Informed</h4>
          <p className="text-[13px] text-white/40 mb-3 leading-[1.6]">
            Get weekly market updates and logistics insights delivered to your inbox.
          </p>
          <form className="flex gap-[7px]" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-white/[0.07] border border-white/10 rounded-lg px-3 py-2 text-[13px] text-white placeholder:text-white/40 focus:border-secondary/60 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-secondary text-white border-none rounded-lg px-4 py-2 text-[13px] font-semibold hover:brightness-110 transition-all cursor-pointer"
            >
              Subscribe
            </button>
          </form>
          <ul className="flex flex-col gap-2.5 mt-5">
            {["Market Updates", "Industry Insights", "Case Studies", "Podcast", "Trade Advisories"].map((link) => (
              <li key={link}>
                <a href="#" className="text-[13px] text-white/40 hover:text-white transition-all duration-200 flex items-center gap-0 hover:gap-1.5 group">
                  <span className="w-0 h-[1px] bg-secondary transition-all duration-200 group-hover:w-2.5" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar — Vercel style */}
      <div className="border-t border-white/10 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} Crane Worldwide Logistics. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"].map((link) => (
              <a key={link} href="#" className="text-white/60 hover:text-secondary transition-colors">
                {link}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            {[
              { label: "Facebook", href: "https://www.facebook.com/CraneWorldwide/", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z", fill: false },
              { label: "LinkedIn", href: "https://www.linkedin.com/company/crane-worldwide-logistics_2/", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z", fill: false },
              { label: "X", href: "https://x.com/craneworldwide", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z", fill: true },
              { label: "YouTube", href: "https://www.youtube.com/channel/UCWmBEeR7nQr6vM07d32Ytxg", path: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z", fill: true },
              { label: "Instagram", href: "https://www.instagram.com/crane_worldwide_logistics/", path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z", fill: false },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-secondary hover:text-white transition-colors"
                aria-label={social.label}
              >
                <svg className="h-4 w-4" fill={social.fill ? "currentColor" : "none"} stroke={social.fill ? "none" : "currentColor"} strokeWidth={social.fill ? 0 : 2} viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
