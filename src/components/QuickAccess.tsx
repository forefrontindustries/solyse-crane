const quickLinks = [
  {
    label: "Track a Shipment",
    sublabel: "Real-time visibility",
    href: "https://webtracker.craneww.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35" />
        <circle cx="11" cy="11" r="3" />
      </svg>
    ),
  },
  {
    label: "Find a Location",
    sublabel: "100+ offices worldwide",
    href: "#locations",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Market Updates",
    sublabel: "Rates & advisories",
    href: "#insights",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 6h16M4 12h10M4 18h13" />
        <circle cx="18" cy="18" r="3" />
        <path d="M18 16v2l1 1" />
      </svg>
    ),
  },
  {
    label: "C-View Portal",
    sublabel: "Client dashboard",
    href: "https://cview.craneww.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="4" width="20" height="14" rx="2" />
        <path d="M8 20h8M12 18v2" />
        <path d="M9 10l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Request a Quote",
    sublabel: "Free consultation",
    href: "#cta",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 12h6M12 9v6" />
        <rect x="3" y="3" width="18" height="18" rx="2" />
      </svg>
    ),
  },
]

export function QuickAccess() {
  return (
    <div className="w-full bg-[#f4f6f9] border-b border-[#dde3ec]">
      <div className="flex w-full">
        {quickLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            className="flex-1 flex flex-col items-center justify-center gap-2.5 py-6 px-5 text-center transition-all duration-200 hover:bg-[#ebeef3] group"
            style={{ borderRight: i < quickLinks.length - 1 ? "1px solid #dde3ec" : "none" }}
          >
            <span className="text-secondary transition-transform duration-300 group-hover:-translate-y-1">
              {link.icon}
            </span>
            <span className="text-[13px] font-semibold text-foreground tracking-[0.01em]">{link.label}</span>
            <span className="text-[11px] uppercase tracking-[0.06em] text-muted-foreground/60 font-medium">{link.sublabel}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
