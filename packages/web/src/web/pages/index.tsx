import { useState, useEffect, useRef } from "react";
import WorldMap from "@/components/WorldMap";

/* ============================================================
   CRANE WORLDWIDE – World-Class Homepage
   Brand-compliant colors · Vercel hero · Base44 industries
   Mega menu · Premium hover states · Unified design
   ============================================================ */

// ─── Icons ───────────────────────────────────────────────────

const ArrowRight = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const ChevronDown = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

const Phone = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const Globe = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);

const Play = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

// ─── Mega Menu Data ──────────────────────────────────────────

const SERVICES = [
  { title: "Air Freight", desc: "Time-critical global air cargo solutions", icon: "✈" },
  { title: "Ocean Freight", desc: "FCL and LCL ocean shipping worldwide", icon: "🚢" },
  { title: "Ground Transportation", desc: "Domestic trucking and cross-border", icon: "🚛" },
  { title: "Customs Brokerage", desc: "Expert import/export compliance", icon: "📋" },
  { title: "Warehousing & Distribution", desc: "Strategic distribution centers globally", icon: "🏭" },
  { title: "Project Logistics", desc: "Complex and oversized cargo handling", icon: "⚙" },
];

const INDUSTRIES = [
  "Aerospace & Defense", "Automotive", "Energy & Resources",
  "Government", "Hi-Tech & Electronics", "Life Sciences",
  "Consumer Goods", "Industrial", "Mining", "Cruise & Marine",
];

const TECHNOLOGY = [
  { title: "C-View Portal", desc: "Unified customer dashboard for shipment status and KPIs" },
  { title: "Crane TMS", desc: "Transportation management with carrier optimization" },
  { title: "Shipment Tracking", desc: "Real-time multimodal visibility with milestone alerts" },
  { title: "Integration Portal", desc: "Connect your ERP via developer-first APIs" },
];

// ─── useInView Hook ──────────────────────────────────────────

function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.1) {
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsInView(true); }, { threshold });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return isInView;
}

// ═══════════════════════════════════════════════════════════════
// HEADER / NAV (Mega Menus)
// ═══════════════════════════════════════════════════════════════

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const navTextClass = scrolled ? "text-crane-blue" : "text-white/90 hover:text-white";
  const topBarClass = scrolled ? "text-scorpion" : "text-white/60";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-lg shadow-[0_1px_0_rgba(0,0,0,0.06)]" 
        : "bg-transparent"
    }`}>
      {/* Top utility bar */}
      <div className={`hidden lg:flex items-center justify-end gap-6 max-w-[1400px] mx-auto px-8 py-2 text-xs font-medium ${topBarClass} transition-colors`}>
        <a href="tel:+18888702726" className="flex items-center gap-1.5 hover:opacity-100 transition-opacity">
          <Phone /> +1 888-870-2726
        </a>
        <a href="#map" className="flex items-center gap-1.5 hover:opacity-100 transition-opacity">
          <Globe /> 120+ Locations Worldwide
        </a>
      </div>

      {/* Main nav */}
      <nav className="max-w-[1400px] mx-auto px-4 sm:px-8 flex items-center justify-between h-16 lg:h-[72px]">
        {/* Logo */}
        <a href="#" className="shrink-0">
          <img
            src={scrolled ? "/images/crane-logo-full.png" : "/images/crane-logo-white.png"}
            alt="Crane Worldwide Logistics"
            className="h-10 lg:h-11 w-auto transition-all duration-300"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Services Mega */}
          <div className="nav-item relative">
            <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${navTextClass}`}>
              Services <ChevronDown />
            </button>
            <div className="mega-menu w-[560px] -left-20" style={{ transform: "translateY(8px)", left: "0" }}>
              <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 p-6">
                <div className="grid grid-cols-2 gap-2">
                  {SERVICES.map(s => (
                    <a key={s.title} href="#services" className="flex items-start gap-3 p-3 rounded-xl hover:bg-porcelain transition-colors group">
                      <span className="text-lg mt-0.5">{s.icon}</span>
                      <div>
                        <div className="text-sm font-semibold text-crane-blue group-hover:text-crane-green transition-colors">{s.title}</div>
                        <div className="text-xs text-scorpion mt-0.5">{s.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a href="#services" className="text-sm font-semibold text-crane-green hover:text-green-light transition-colors flex items-center gap-1">
                    View All Services <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Industries Mega */}
          <div className="nav-item relative">
            <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${navTextClass}`}>
              Industries <ChevronDown />
            </button>
            <div className="mega-menu w-[400px]" style={{ left: "50%", transform: "translateX(-50%) translateY(8px)" }}>
              <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 p-4">
                <div className="grid grid-cols-2 gap-1">
                  {INDUSTRIES.map(ind => (
                    <a key={ind} href="#industries" className="px-3 py-2.5 rounded-lg text-sm font-medium text-crane-blue hover:bg-porcelain hover:text-crane-green transition-colors">
                      {ind}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technology Mega */}
          <div className="nav-item relative">
            <button className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${navTextClass}`}>
              Technology <ChevronDown />
            </button>
            <div className="mega-menu w-[480px]" style={{ left: "50%", transform: "translateX(-50%) translateY(8px)" }}>
              <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 p-5">
                <div className="space-y-1">
                  {TECHNOLOGY.map(t => (
                    <a key={t.title} href="#technology" className="flex items-center justify-between p-3 rounded-xl hover:bg-porcelain transition-colors group">
                      <div>
                        <div className="text-sm font-semibold text-crane-blue group-hover:text-crane-green transition-colors">{t.title}</div>
                        <div className="text-xs text-scorpion mt-0.5">{t.desc}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-crane-green transition-all group-hover:translate-x-1" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Simple links */}
          <a href="#map" className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${navTextClass}`}>Locations</a>
          <a href="#about" className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${navTextClass}`}>About</a>

          {/* CTA buttons */}
          <div className="flex items-center gap-3 ml-4">
            <a href="#" className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${scrolled ? "text-crane-blue hover:bg-porcelain" : "text-white/80 hover:text-white"}`}>
              Track Shipment
            </a>
            <a href="#cta" className="px-5 py-2.5 text-sm font-semibold text-white bg-crane-green hover:bg-green-light rounded-lg transition-all hover:shadow-lg hover:shadow-crane-green/20">
              Get a Quote
            </a>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 cursor-pointer">
          <svg className={`w-6 h-6 ${scrolled ? "text-crane-blue" : "text-white"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen 
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            }
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-6 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="space-y-1">
              <div className="text-xs font-bold text-crane-green uppercase tracking-wider mb-2">Services</div>
              {SERVICES.map(s => (
                <a key={s.title} href="#services" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-crane-blue hover:bg-porcelain rounded-lg">{s.title}</a>
              ))}
            </div>
            <div className="space-y-1">
              <div className="text-xs font-bold text-crane-green uppercase tracking-wider mb-2">Industries</div>
              {INDUSTRIES.slice(0, 6).map(ind => (
                <a key={ind} href="#industries" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-crane-blue hover:bg-porcelain rounded-lg">{ind}</a>
              ))}
            </div>
            <a href="#technology" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-semibold text-crane-blue">Technology</a>
            <a href="#map" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-semibold text-crane-blue">Locations</a>
            <a href="#about" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-semibold text-crane-blue">About</a>
            <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
              <a href="#" className="px-4 py-2.5 text-sm font-medium text-center text-crane-blue border border-gray-200 rounded-lg">Track Shipment</a>
              <a href="#cta" className="px-4 py-2.5 text-sm font-semibold text-center text-white bg-crane-green rounded-lg">Get a Quote</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// ═══════════════════════════════════════════════════════════════
// HERO (Vercel-inspired)
// ═══════════════════════════════════════════════════════════════

function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  const scrollToNext = () => {
    document.getElementById("industries")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/images/hero-port.jpg" alt="" className="w-full h-full object-cover" />
        {/* Gradient overlay using brand blue */}
        <div className="absolute inset-0 bg-gradient-to-r from-crane-blue/95 via-crane-blue/80 to-crane-blue/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-crane-blue/60 via-transparent to-transparent" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 hero-grid opacity-100" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 pt-28 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Animated badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crane-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-crane-green" />
            </span>
            <span className="text-white/90 text-sm font-medium">Now operating in 120+ countries worldwide</span>
          </div>

          {/* Headline */}
          <h1 className={`text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.08] mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "150ms" }}>
            Global Logistics.{" "}
            <span className="text-crane-green">Local Expertise.</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-lg md:text-xl text-white/75 max-w-2xl mb-10 leading-relaxed transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "300ms" }}>
            Crane Worldwide Logistics delivers innovative supply chain solutions 
            that move your business forward. From air and ocean freight to customs 
            brokerage and warehousing, we connect your cargo to the world.
          </p>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "450ms" }}>
            <a href="#cta" className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl group">
              Get a Quote
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#about" className="btn-outline-white inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl">
              <Play /> Watch Our Story
            </a>
          </div>

          {/* Stats row — NO years of experience */}
          <div className={`grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "600ms" }}>
            {[
              { value: "120+", label: "Countries" },
              { value: "4,000+", label: "Team Members" },
              { value: "250+", label: "Global Offices" },
            ].map(s => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold text-white">{s.value}</div>
                <div className="text-white/50 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button onClick={scrollToNext} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer">
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// INDUSTRY GRID (Base44-inspired)
// ═══════════════════════════════════════════════════════════════

const INDUSTRY_GRID = [
  { num: "01", name: "Aerospace & Defense", icon: "M12 2L2 7v10l10 5 10-5V7L12 2z" },
  { num: "02", name: "Automotive", icon: "M1 12h2l3-9h12l3 9h2v4h-2v1a2 2 0 01-4 0v-1H7v1a2 2 0 01-4 0v-1H1v-4z" },
  { num: "03", name: "Energy & Resources", icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" },
  { num: "04", name: "Government", icon: "M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" },
  { num: "05", name: "Hi-Tech & Electronics", icon: "M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m14 0h2M3 15h2m14 0h2M7 7h10v10H7z" },
  { num: "06", name: "Life Sciences", icon: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" },
  { num: "07", name: "Consumer Goods", icon: "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" },
  { num: "08", name: "Industrial", icon: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6" },
  { num: "09", name: "Mining", icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01z" },
  { num: "10", name: "Cruise & Marine", icon: "M3 18v-6a9 9 0 0118 0v6M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" },
];

function IndustrySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section id="industries" ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(#273473 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
      }} />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div>
            <span className="text-crane-green text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Sector Expertise</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-crane-blue leading-tight">
              Built for<br />Your Industry
            </h2>
            <p className="mt-4 text-scorpion max-w-lg leading-relaxed">
              Deep vertical expertise means logistics solutions built around your compliance requirements, operational reality, and strategic goals.
            </p>
          </div>
          <a href="#" className="text-sm font-semibold text-crane-green hover:text-green-light transition-colors flex items-center gap-1 shrink-0">
            View All Industries <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {INDUSTRY_GRID.map((ind, i) => (
            <a
              key={ind.num}
              href="#"
              className={`industry-card block p-5 rounded-2xl border border-gray-100 bg-white hover:border-crane-green/20 group transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="ic-num text-xs font-mono font-bold text-gray-300 transition-colors">{ind.num}</span>
                <div className="ic-icon w-9 h-9 rounded-lg bg-porcelain flex items-center justify-center transition-all">
                  <svg className="w-4.5 h-4.5 text-crane-blue transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d={ind.icon} />
                  </svg>
                </div>
              </div>
              <div className="text-sm font-semibold text-crane-blue leading-snug mb-3">{ind.name}</div>
              <div className="ic-arrow flex items-center gap-1 text-xs font-semibold text-crane-green opacity-0 group-hover:opacity-100 transition-all">
                Explore <ArrowRight className="w-3 h-3" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// PARALLAX IMAGE BREAK
// ═══════════════════════════════════════════════════════════════

function ImageBreak() {
  return (
    <div className="relative h-[50vh] min-h-[360px] overflow-hidden">
      <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1800&q=80&auto=format')`,
        backgroundAttachment: "fixed",
      }} />
      <div className="absolute inset-0 bg-gradient-to-r from-crane-blue/85 via-crane-blue/60 to-transparent" />
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 w-full">
          <span className="text-crane-green text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Our Network</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            One partner for<br /><span className="text-crane-green">every lane</span> worldwide.
          </h2>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// WHY CRANE / ABOUT (replaces blue bar)
// ═══════════════════════════════════════════════════════════════

function WhyCrane() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  const pillars = [
    {
      icon: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z M12 9a3 3 0 100 6 3 3 0 000-6z",
      title: "Real-Time Visibility",
      desc: "C-View delivers live shipment intelligence across every mode, lane, and milestone — so you're never left guessing.",
    },
    {
      icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 3a4 4 0 100 8 4 4 0 000-8z M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75",
      title: "Industry Specialists",
      desc: "Dedicated vertical teams for aerospace, life sciences, energy, and hi-tech with deep compliance expertise.",
    },
    {
      icon: "M22 12h-4l-3 9L9 3l-3 9H2",
      title: "Agile at Any Scale",
      desc: "From a single urgent shipment to a full outsourced logistics program — we scale rapidly with no bureaucratic drag.",
    },
  ];

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 bg-porcelain relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Images */}
          <div className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&auto=format" 
                alt="Crane operations" 
                className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-48 rounded-xl overflow-hidden shadow-xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400&q=80&auto=format" 
                  alt="Global shipping" 
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`} style={{ transitionDelay: "200ms" }}>
            <span className="text-crane-green text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Why Crane Worldwide</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-crane-blue leading-tight mb-6">
              The Logistics<br />Partner You Deserve
            </h2>
            <p className="text-scorpion leading-relaxed mb-10 max-w-lg">
              As one of the fastest-growing 3PL providers in the world, we deliver the personal service of a boutique with the infrastructure of a global operator.
            </p>

            <div className="space-y-6">
              {pillars.map((p, i) => (
                <div key={i} className="pillar-card flex gap-4 p-5 rounded-2xl border border-gray-200/80 bg-white">
                  <div className="w-12 h-12 rounded-xl bg-green-subtle flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-crane-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                      {p.icon.split(" M").map((seg, j) => (
                        <path key={j} d={j === 0 ? seg : `M${seg}`} />
                      ))}
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-crane-blue mb-1">{p.title}</div>
                    <p className="text-sm text-scorpion leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#" className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-crane-green hover:text-green-light transition-colors group">
              Discover Our Value <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// TECHNOLOGY PLATFORM (Vercel-inspired)
// ═══════════════════════════════════════════════════════════════

const TECH_FEATURES = [
  {
    id: "visibility",
    title: "Real-Time Visibility",
    desc: "Track every shipment in real-time with granular milestone updates. Know exactly where your cargo is at any moment.",
    benefits: ["Live GPS tracking for all shipments", "Automated milestone notifications", "Exception alerts and proactive communication", "Historical data and analytics"],
  },
  {
    id: "analytics",
    title: "Advanced Analytics",
    desc: "Transform your supply chain data into actionable insights. Make better decisions with comprehensive reporting.",
    benefits: ["Custom dashboard creation", "Carrier performance metrics", "Cost analysis and optimization", "Predictive analytics"],
  },
  {
    id: "automation",
    title: "Process Automation",
    desc: "Streamline your logistics operations with intelligent automation. Reduce manual tasks and increase efficiency.",
    benefits: ["Automated booking workflows", "Document generation and management", "API integrations with your systems", "Rule-based exception handling"],
  },
  {
    id: "compliance",
    title: "Compliance Management",
    desc: "Stay ahead of regulatory requirements with built-in compliance tools and expert guidance.",
    benefits: ["Automated trade compliance checks", "Denied party screening", "Classification assistance", "Audit trail documentation"],
  },
];

function TechPlatform() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);
  const [activeTab, setActiveTab] = useState("visibility");
  const active = TECH_FEATURES.find(f => f.id === activeTab)!;

  return (
    <section id="technology" ref={ref} className="py-24 lg:py-32 bg-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(1,128,62,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(1,128,62,0.5) 1px, transparent 1px)`,
        backgroundSize: "50px 50px",
      }} />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-crane-green/5 blur-[200px] -translate-y-1/2" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-crane-green text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Technology Platform</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Visibility and control at your fingertips
            </h2>
            <p className="text-white/50 leading-relaxed mb-10 max-w-lg">
              CraneTMS powers your supply chain with real-time visibility, advanced analytics, and seamless integration with your existing systems.
            </p>

            {/* Tab buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              {TECH_FEATURES.map(f => (
                <button
                  key={f.id}
                  onClick={() => setActiveTab(f.id)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                    activeTab === f.id
                      ? "bg-crane-green/15 text-crane-green border border-crane-green/25"
                      : "bg-white/5 text-white/50 border border-white/8 hover:text-white/80 hover:border-white/15"
                  }`}
                >
                  {f.title.split(" ")[0]}
                </button>
              ))}
            </div>

            {/* Active feature content */}
            <div className="animate-fade-in" key={activeTab}>
              <h3 className="text-xl font-bold text-white mb-2">{active.title}</h3>
              <p className="text-white/50 leading-relaxed mb-6">{active.desc}</p>
              <ul className="space-y-3 mb-8">
                {active.benefits.map(b => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-crane-green/20 flex items-center justify-center mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-crane-green" />
                    </span>
                    <span className="text-white/80 text-sm">{b}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-crane-green hover:bg-green-light rounded-xl transition-all group">
                Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right: Dashboard mockup */}
          <div className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`} style={{ transitionDelay: "300ms" }}>
            <div className="absolute -inset-4 bg-gradient-to-r from-crane-green/10 to-crane-blue/10 rounded-3xl blur-2xl" />
            
            <div className="relative bg-dark-card rounded-2xl shadow-2xl border border-dark-border overflow-hidden">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-dark-border">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-white/5 text-[11px] text-white/30 font-mono">app.craneww.com/dashboard</div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white text-sm">Shipment Dashboard</h4>
                    <p className="text-xs text-white/30">Real-time overview</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "In Transit", value: "247", color: "bg-crane-green" },
                    { label: "Delivered", value: "1,892", color: "bg-crane-blue" },
                    { label: "Pending", value: "56", color: "bg-scorpion" },
                  ].map(s => (
                    <div key={s.label} className="p-3.5 rounded-xl bg-white/[0.03] border border-dark-border">
                      <div className={`w-2 h-2 rounded-full ${s.color} mb-2`} />
                      <div className="text-xl font-bold text-white">{s.value}</div>
                      <div className="text-[10px] text-white/30 mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Mini map */}
                <div className="relative h-32 rounded-xl bg-crane-blue/20 overflow-hidden border border-dark-border">
                  <div className="absolute inset-0 opacity-30">
                    <svg viewBox="0 0 100 40" className="w-full h-full">
                      <path d="M10,20 Q25,10 40,20 T70,20 T100,15" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-crane-green" strokeDasharray="2,2">
                        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2s" repeatCount="indefinite" />
                      </path>
                    </svg>
                  </div>
                  {[
                    { x: "20%", y: "40%" },
                    { x: "50%", y: "50%" },
                    { x: "75%", y: "35%" },
                  ].map((d, i) => (
                    <div key={i} className="absolute w-2.5 h-2.5" style={{ left: d.x, top: d.y }}>
                      <span className="absolute inset-0 rounded-full bg-crane-green animate-ping" style={{ animationDelay: `${i * 0.5}s` }} />
                      <span className="absolute inset-0 rounded-full bg-crane-green" />
                    </div>
                  ))}
                  <div className="absolute bottom-2 left-2 right-2 p-2.5 rounded-lg bg-dark-card/90 backdrop-blur-sm border border-dark-border">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-white/40">Live shipments</span>
                      <span className="font-semibold text-crane-green">247 active</span>
                    </div>
                  </div>
                </div>

                {/* Activity feed */}
                <div className="space-y-2">
                  <div className="text-xs font-medium text-white/40">Recent Activity</div>
                  {[
                    { ev: "AWB-892341 departed LAX", time: "2 min ago", color: "bg-crane-green" },
                    { ev: "Customs cleared BOL-7823", time: "15 min ago", color: "bg-crane-blue" },
                    { ev: "Pickup scheduled PO-92341", time: "1 hour ago", color: "bg-scorpion" },
                  ].map((a, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${a.color}`} />
                      <span className="flex-1 text-white/60 truncate">{a.ev}</span>
                      <span className="text-white/25 shrink-0">{a.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating notification */}
            <div className="absolute -right-4 top-1/4 p-3.5 rounded-xl bg-dark-card shadow-xl border border-dark-border animate-float hidden lg:flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-crane-green/15 flex items-center justify-center">
                <svg className="w-4.5 h-4.5 text-crane-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /></svg>
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Shipment Update</div>
                <div className="text-[10px] text-white/40">AWB-892341 arrived</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// INSIGHTS (Base44-inspired)
// ═══════════════════════════════════════════════════════════════

function Insights() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div>
            <span className="text-crane-green text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Knowledge Center</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-crane-blue">Industry Insights</h2>
          </div>
          <a href="#" className="text-sm font-semibold text-crane-green hover:text-green-light transition-colors flex items-center gap-1 shrink-0">
            View All Articles <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured */}
          <a href="#" className={`insight-card lg:col-span-2 group rounded-2xl overflow-hidden border border-gray-100 bg-white transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="ins-img overflow-hidden aspect-[16/9]">
              <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=80&auto=format" alt="" className="w-full h-full object-cover transition-transform duration-500" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2.5 py-1 rounded-full bg-crane-green/10 text-crane-green text-[11px] font-bold">Supply Chain Alert</span>
                <span className="text-xs text-scorpion">January 26, 2026</span>
              </div>
              <h3 className="font-bold text-crane-blue text-lg leading-snug mb-2 group-hover:text-crane-green transition-colors">
                Lunar New Year 2026: Supply Chain Impact & Strategy Guide
              </h3>
              <p className="text-sm text-scorpion leading-relaxed line-clamp-2">
                Lunar New Year 2026 will create major strain on global supply chains as factories close, staffing decreases, and capacity tightens across Asia.
              </p>
              <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-crane-green">
                Read Article <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </a>

          {/* Side articles */}
          <div className="flex flex-col gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format", tag: "Trade Policy", date: "Dec 17, 2025", title: "CBAM Transition: Reporting & Financial Obligations" },
              { img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80&auto=format", tag: "Warehousing", date: "Dec 4, 2025", title: "Rising U.S. Warehouse Demand & Mexico's Growing Role" },
            ].map((article, i) => (
              <a
                key={i}
                href="#"
                className={`insight-card group rounded-2xl overflow-hidden border border-gray-100 bg-white flex-1 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${(i + 1) * 150}ms` }}
              >
                <div className="ins-img overflow-hidden aspect-[16/9]">
                  <img src={article.img} alt="" className="w-full h-full object-cover transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2.5 py-1 rounded-full bg-crane-green/10 text-crane-green text-[10px] font-bold">{article.tag}</span>
                    <span className="text-[10px] text-scorpion">{article.date}</span>
                  </div>
                  <h3 className="font-bold text-crane-blue text-sm leading-snug group-hover:text-crane-green transition-colors">
                    {article.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-crane-green">
                    Read <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// TESTIMONIAL
// ═══════════════════════════════════════════════════════════════

function Testimonial() {
  return (
    <section className="py-20 bg-porcelain">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
        <svg className="w-12 h-12 text-crane-green/20 mx-auto mb-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-crane-blue leading-relaxed mb-8">
          "Crane's platform gave us real-time visibility and cost intelligence we didn't know was possible. They transformed our supply chain from reactive to proactive."
        </blockquote>
        <div>
          <div className="font-bold text-crane-blue">Sarah Mitchell</div>
          <div className="text-sm text-scorpion">VP Supply Chain, Fortune 500 Manufacturer</div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// CTA
// ═══════════════════════════════════════════════════════════════

function CTA() {
  return (
    <section id="cta" className="py-24 lg:py-32 bg-crane-blue relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 hero-grid" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-crane-green/8 blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-[150px]" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Ready to move<br />smarter?
        </h2>
        <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
          Talk to a logistics specialist and get a customized quote within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl group">
            Request a Quote <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#" className="btn-outline-white inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl">
            Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// FOOTER
// ═══════════════════════════════════════════════════════════════

function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 mb-4 lg:mb-0">
            <img src="/images/crane-logo-white.png" alt="Crane Worldwide Logistics" className="h-10 w-auto mb-5" />
            <p className="text-sm text-white/40 leading-relaxed max-w-sm mb-6">
              Global logistics partner delivering customized supply chain solutions across air, ocean, ground, and contract logistics services worldwide.
            </p>
            <div className="space-y-2 text-sm text-white/50">
              <a href="tel:+18888702726" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone /> +1 888-870-2726
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                <Globe /> 1500 Rankin Rd, Houston TX 77073
              </a>
            </div>
          </div>

          {/* Links */}
          {[
            { title: "Services", links: ["Air Freight", "Ocean Freight", "Ground Transport", "Customs Brokerage", "Warehousing", "Project Logistics"] },
            { title: "Company", links: ["About Us", "Leadership", "Sustainability", "Careers", "News & Insights", "Contact"] },
            { title: "Resources", links: ["Track Shipment", "C-View Portal", "Tariff Response", "API Documentation", "Locations", "Get a Quote"] },
          ].map(col => (
            <div key={col.title}>
              <div className="text-xs font-bold uppercase tracking-wider text-white/30 mb-4">{col.title}</div>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/30">© 2026 Crane Worldwide Logistics. All rights reserved.</div>
          <div className="flex items-center gap-6 text-xs text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/60 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <IndustrySection />
      <ImageBreak />
      <WhyCrane />
      <TechPlatform />
      <div id="map">
        <WorldMap />
      </div>
      <Insights />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
}
