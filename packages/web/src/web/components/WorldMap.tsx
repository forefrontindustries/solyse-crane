import { useState, useRef, useEffect } from "react";

/* ============================================================
   Interactive World Map – Real SVG map with office overlays
   Full-width, dark-themed. CMS-ready data structure.
   ============================================================ */

interface Location {
  id: string;
  country: string;
  city: string;
  offices: number;
  services: string[];
  /** Percentage position on the map (0-100) */
  px: number;
  py: number;
  region: "americas" | "europe" | "middle-east" | "asia-pacific" | "africa";
}

const LOCATIONS: Location[] = [
  // Americas
  { id: "us", country: "United States", city: "Houston (HQ)", offices: 30, services: ["Air", "Ocean", "Ground", "Warehousing", "Customs"], px: 24.55, py: 31.55, region: "americas" },
  { id: "ca", country: "Canada", city: "Toronto", offices: 2, services: ["Air", "Ocean", "Customs"], px: 30.09, py: 22.97, region: "americas" },
  { id: "mx", country: "Mexico", city: "Mexico City", offices: 3, services: ["Air", "Ocean", "Ground", "Customs"], px: 22.93, py: 37.95, region: "americas" },
  { id: "br", country: "Brazil", city: "São Paulo", offices: 2, services: ["Air", "Ocean", "Customs"], px: 37.36, py: 64.60, region: "americas" },
  { id: "co", country: "Colombia", city: "Bogotá", offices: 1, services: ["Air", "Ocean"], px: 29.45, py: 47.08, region: "americas" },
  { id: "cl", country: "Chile", city: "Santiago", offices: 1, services: ["Air", "Ocean"], px: 31.39, py: 70.74, region: "americas" },
  { id: "ar", country: "Argentina", city: "Buenos Aires", offices: 1, services: ["Air", "Ocean"], px: 34.69, py: 71.45, region: "americas" },
  { id: "gy", country: "Guyana", city: "Georgetown", offices: 1, services: ["Project Logistics"], px: 33.89, py: 45.78, region: "americas" },

  // Europe
  { id: "uk", country: "United Kingdom", city: "London", offices: 3, services: ["Air", "Ocean", "Customs"], px: 49.97, py: 18.22, region: "europe" },
  { id: "ie", country: "Ireland", city: "Dublin", offices: 1, services: ["Air", "Ocean"], px: 48.53, py: 17.13, region: "europe" },
  { id: "de", country: "Germany", city: "Frankfurt", offices: 3, services: ["Air", "Ocean", "Ground", "Customs"], px: 52.09, py: 19.05, region: "europe" },
  { id: "nl", country: "Netherlands", city: "Amsterdam", offices: 2, services: ["Air", "Ocean", "Warehousing"], px: 51.16, py: 17.71, region: "europe" },
  { id: "be", country: "Belgium", city: "Brussels", offices: 2, services: ["Air", "Ocean", "Customs"], px: 51.04, py: 18.62, region: "europe" },
  { id: "it", country: "Italy", city: "Milan", offices: 2, services: ["Air", "Ocean"], px: 52.28, py: 21.87, region: "europe" },
  { id: "pl", country: "Poland", city: "Warsaw", offices: 1, services: ["Air", "Ocean"], px: 54.98, py: 17.80, region: "europe" },

  // Middle East / Africa
  { id: "ae", country: "UAE", city: "Dubai", offices: 3, services: ["Air", "Ocean", "Warehousing", "Customs"], px: 64.93, py: 34.38, region: "middle-east" },
  { id: "sa", country: "Saudi Arabia", city: "Riyadh", offices: 2, services: ["Air", "Ocean", "Project"], px: 62.62, py: 34.68, region: "middle-east" },
  { id: "qa", country: "Qatar", city: "Doha", offices: 1, services: ["Air", "Ocean"], px: 63.92, py: 34.32, region: "middle-east" },
  { id: "za", country: "South Africa", city: "Johannesburg", offices: 2, services: ["Air", "Ocean", "Customs"], px: 57.56, py: 66.24, region: "africa" },
  { id: "na", country: "Namibia", city: "Windhoek", offices: 1, services: ["Project Logistics"], px: 54.64, py: 63.99, region: "africa" },

  // Asia Pacific
  { id: "in", country: "India", city: "Mumbai", offices: 4, services: ["Air", "Ocean", "Customs"], px: 69.91, py: 38.17, region: "asia-pacific" },
  { id: "sg", country: "Singapore", city: "Singapore", offices: 2, services: ["Air", "Ocean", "Warehousing", "Customs"], px: 78.83, py: 49.16, region: "asia-pacific" },
  { id: "cn", country: "China", city: "Shanghai", offices: 8, services: ["Air", "Ocean", "Ground", "Warehousing", "Customs"], px: 82.25, py: 30.64, region: "asia-pacific" },
  { id: "hk", country: "Hong Kong", city: "Hong Kong", offices: 2, services: ["Air", "Ocean", "Customs"], px: 81.01, py: 36.16, region: "asia-pacific" },
  { id: "tw", country: "Taiwan", city: "Taipei", offices: 2, services: ["Air", "Ocean"], px: 82.86, py: 34.48, region: "asia-pacific" },
  { id: "jp", country: "Japan", city: "Tokyo", offices: 3, services: ["Air", "Ocean", "Customs"], px: 86.47, py: 27.88, region: "asia-pacific" },
  { id: "kr", country: "South Korea", city: "Seoul", offices: 2, services: ["Air", "Ocean"], px: 82.87, py: 26.71, region: "asia-pacific" },
  { id: "th", country: "Thailand", city: "Bangkok", offices: 2, services: ["Air", "Ocean"], px: 77.67, py: 41.47, region: "asia-pacific" },
  { id: "my", country: "Malaysia", city: "Kuala Lumpur", offices: 2, services: ["Air", "Ocean"], px: 78.22, py: 48.05, region: "asia-pacific" },
  { id: "id", country: "Indonesia", city: "Jakarta", offices: 2, services: ["Air", "Ocean"], px: 79.62, py: 53.85, region: "asia-pacific" },
  { id: "vn", country: "Vietnam", city: "Ho Chi Minh", offices: 2, services: ["Air", "Ocean"], px: 79.46, py: 43.29, region: "asia-pacific" },
  { id: "au", country: "Australia", city: "Sydney", offices: 3, services: ["Air", "Ocean", "Customs"], px: 89.76, py: 71.00, region: "asia-pacific" },
  { id: "bn", country: "Brunei", city: "Bandar Seri Begawan", offices: 1, services: ["Air", "Ocean"], px: 81.89, py: 46.94, region: "asia-pacific" },
];

/* Inline SVG world map component — renders real country outlines */
function MapSVG({ className }: { className?: string }) {
  return (
    <img
      src="/images/world-map-dark.svg"
      alt=""
      className={className}
      draggable={false}
      style={{ pointerEvents: "none", userSelect: "none" }}
    />
  );
}

export default function WorldMap() {
  const [selected, setSelected] = useState<Location | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  // Close panel when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (selected && mapRef.current && !mapRef.current.contains(e.target as Node)) {
        setSelected(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [selected]);

  return (
    <section className="bg-dark relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-crane-green/3 blur-[250px] pointer-events-none" />

      {/* Header */}
      <div className="text-center pt-24 lg:pt-32 pb-10 px-4 relative z-10">
        <span className="text-crane-green text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block">
          GLOBAL NETWORK
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          130+ offices. 30 countries.{" "}
          <span className="gradient-text-green">One network.</span>
        </h2>
        <p className="mt-5 text-lg text-white/35 max-w-2xl mx-auto">
          Click any location to explore our capabilities in that region.
        </p>
      </div>

      {/* Full-width map container */}
      <div ref={mapRef} className="relative w-full px-0">
        {/* Map wrapper — maintains aspect ratio */}
        <div className="relative w-full" style={{ aspectRatio: "784 / 459" }}>
          {/* SVG Map background */}
          <MapSVG className="absolute inset-0 w-full h-full object-contain" />

          {/* Grid overlay for depth */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,140,69,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,140,69,0.3) 1px, transparent 1px)
              `,
              backgroundSize: "8% 10%",
            }}
          />

          {/* Connection lines (subtle) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
            {/* A few key route lines */}
            {[
              [24.55, 31.55, 49.97, 18.22],  // Houston → London
              [49.97, 18.22, 82.25, 30.64],   // London → Shanghai
              [82.25, 30.64, 78.83, 49.16],   // Shanghai → Singapore
              [24.55, 31.55, 86.47, 27.88],   // Houston → Tokyo (Pacific)
              [64.93, 34.38, 69.91, 38.17],   // Dubai → Mumbai
              [49.97, 18.22, 64.93, 34.38],   // London → Dubai
            ].map(([x1, y1, x2, y2], i) => (
              <line
                key={i}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="rgba(0,140,69,0.06)"
                strokeWidth="0.15"
                strokeDasharray="0.5 1"
              />
            ))}
          </svg>

          {/* Location dots */}
          {LOCATIONS.map((loc) => {
            const isSelected = selected?.id === loc.id;
            const isHovered = hoveredId === loc.id;
            const isActive = isSelected || isHovered;
            const dotSize = loc.offices >= 5 ? 10 : loc.offices >= 3 ? 8 : 6;

            return (
              <div
                key={loc.id}
                className="absolute group"
                style={{
                  left: `${loc.px}%`,
                  top: `${loc.py}%`,
                  transform: "translate(-50%, -50%)",
                  zIndex: isActive ? 30 : 10,
                }}
              >
                {/* Clickable area (larger than dot for mobile) */}
                <button
                  onClick={() => setSelected(isSelected ? null : loc)}
                  onMouseEnter={() => setHoveredId(loc.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="relative flex items-center justify-center cursor-pointer"
                  style={{ width: `${dotSize * 4}px`, height: `${dotSize * 4}px` }}
                  aria-label={`${loc.country} - ${loc.city}`}
                >
                  {/* Pulse ring animation */}
                  {isActive && (
                    <span
                      className="absolute rounded-full bg-crane-green/20 animate-ping"
                      style={{ width: `${dotSize * 3}px`, height: `${dotSize * 3}px` }}
                    />
                  )}

                  {/* Outer glow */}
                  <span
                    className="absolute rounded-full transition-all duration-300"
                    style={{
                      width: `${isActive ? dotSize * 2.5 : dotSize * 1.8}px`,
                      height: `${isActive ? dotSize * 2.5 : dotSize * 1.8}px`,
                      background: isActive
                        ? "radial-gradient(circle, rgba(0,140,69,0.3), transparent 70%)"
                        : "radial-gradient(circle, rgba(0,140,69,0.12), transparent 70%)",
                    }}
                  />

                  {/* Main dot */}
                  <span
                    className="absolute rounded-full transition-all duration-300 shadow-lg"
                    style={{
                      width: `${isActive ? dotSize + 2 : dotSize}px`,
                      height: `${isActive ? dotSize + 2 : dotSize}px`,
                      background: isActive
                        ? "radial-gradient(circle at 35% 35%, #00A34E, #01803E)"
                        : "radial-gradient(circle at 35% 35%, #01803E, #015F2E)",
                      boxShadow: isActive
                        ? "0 0 12px rgba(0,140,69,0.6), 0 0 4px rgba(0,140,69,0.4)"
                        : "0 0 6px rgba(0,140,69,0.3)",
                    }}
                  />

                  {/* Inner highlight */}
                  <span
                    className="absolute rounded-full bg-white transition-all duration-300"
                    style={{
                      width: `${isActive ? 4 : 2.5}px`,
                      height: `${isActive ? 4 : 2.5}px`,
                      opacity: isActive ? 1 : 0.7,
                    }}
                  />
                </button>

                {/* Hover tooltip */}
                {isHovered && !isSelected && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 whitespace-nowrap z-50 pointer-events-none"
                  >
                    <div className="bg-[#0C1425]/95 backdrop-blur-sm border border-dark-border rounded-lg px-3 py-1.5 shadow-xl">
                      <div className="text-[11px] font-semibold text-white">{loc.country}</div>
                      <div className="text-[10px] text-white/40">{loc.city} · {loc.offices} {loc.offices === 1 ? "office" : "offices"}</div>
                    </div>
                    {/* Arrow */}
                    <div className="w-2 h-2 bg-[#0C1425]/95 border-r border-b border-dark-border rotate-45 mx-auto -mt-1" />
                  </div>
                )}
              </div>
            );
          })}

          {/* Selected location detail panel */}
          {selected && (
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:w-[340px] z-40">
              <div className="bg-[#0C1425]/95 backdrop-blur-xl border border-dark-border rounded-2xl p-6 shadow-2xl">
                {/* Close button */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 text-white/30 hover:text-white transition-colors cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Country + City */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-crane-green/15 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-crane-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg leading-tight">{selected.country}</h3>
                    <p className="text-[13px] text-white/40">{selected.city}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-white font-mono">{selected.offices}</div>
                    <div className="text-[10px] text-white/30 mt-0.5">{selected.offices === 1 ? "Office" : "Offices"}</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-crane-green font-mono">{selected.services.length}</div>
                    <div className="text-[10px] text-white/30 mt-0.5">Services</div>
                  </div>
                </div>

                {/* Services */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {selected.services.map((svc) => (
                    <span
                      key={svc}
                      className="px-2.5 py-1 rounded-full text-[11px] font-semibold"
                      style={{
                        background: "rgba(0,140,69,0.08)",
                        border: "1px solid rgba(0,140,69,0.15)",
                        color: "#01803E",
                      }}
                    >
                      {svc}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-[13px] font-semibold text-white bg-crane-green hover:bg-crane-green-light rounded-lg transition-all group"
                >
                  View {selected.country} Details
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom stats */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: "32", label: "Countries" },
            { value: "130+", label: "Offices" },
            { value: "6", label: "Continents" },
            { value: "24/7", label: "Operations" },
          ].map((s) => (
            <div key={s.label} className="text-center p-4 rounded-xl border border-dark-border bg-dark-card/30">
              <div className="text-2xl font-extrabold text-white font-mono">{s.value}</div>
              <div className="text-[11px] text-white/30 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
