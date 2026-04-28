const quickLinks = [
  {
    label: "Track Shipment",
    href: "https://webtracker.craneww.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35" />
        <circle cx="11" cy="11" r="3" />
      </svg>
    ),
  },
  {
    label: "Get a Quote",
    href: "#cta",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    label: "C-View Portal",
    href: "https://cview.craneww.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="4" width="20" height="14" rx="2" />
        <path d="M8 20h8M12 18v2" />
        <path d="M9 10l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Contact Us",
    href: "#cta",
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
]

export function QuickAccess() {
  return (
    <div className="w-full bg-[#f4f6f9]/70 border-b border-[#e2e6ed]">
      <div className="px-6 lg:px-12 flex items-center">
        <span className="hidden lg:block text-[10px] font-semibold tracking-[0.12em] uppercase text-muted-foreground/40 mr-6 flex-shrink-0">
          Quick actions
        </span>
        <div className="flex w-full lg:w-auto">
          {quickLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-2 py-3.5 px-4 lg:px-5 text-center transition-all duration-200 hover:bg-[#ebeef3]/80 group"
              style={{ borderRight: i < quickLinks.length - 1 ? "1px solid #e2e6ed" : "none" }}
            >
              <span className="text-muted-foreground/50 group-hover:text-secondary transition-colors">
                {link.icon}
              </span>
              <span className="text-[12px] font-medium text-muted-foreground/70 group-hover:text-foreground transition-colors">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
