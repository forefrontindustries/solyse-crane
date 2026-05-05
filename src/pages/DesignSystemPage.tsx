import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <main className="pt-28 pb-20 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          {/* Title */}
          <div className="mb-16">
            <span className="text-xs font-semibold tracking-[0.15em] text-secondary uppercase">Brand Reference</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">Design System</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">The foundational elements that define the Crane Worldwide digital brand — colors, typography, spacing, and component patterns.</p>
          </div>

          {/* ─── COLORS ─── */}
          <Section title="Colors" desc="Primary navy and secondary green form the core palette. Supporting neutrals for text and surfaces.">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <ColorSwatch color="bg-primary" label="Primary (Navy)" hex="#273473" />
              <ColorSwatch color="bg-secondary" label="Secondary (Green)" hex="#01803E" />
              <ColorSwatch color="bg-foreground" label="Foreground" hex="#0a1628" />
              <ColorSwatch color="bg-muted-foreground" label="Muted Text" hex="#6b7280" />
              <ColorSwatch color="bg-muted" label="Muted Surface" hex="#f4f6f9" />
              <ColorSwatch color="bg-[#f7f9fb]" label="Light BG" hex="#f7f9fb" textDark />
              <ColorSwatch color="bg-[#0ea554]" label="CTA Green" hex="#0ea554" />
              <ColorSwatch color="bg-[#0a3d62]" label="Navy Deep" hex="#0a3d62" />
              <ColorSwatch color="bg-white border border-gray-200" label="White" hex="#ffffff" textDark />
              <ColorSwatch color="bg-border" label="Border" hex="#e2e6ed" textDark />
              <ColorSwatch color="bg-red-500" label="Alert / Urgent" hex="#ef4444" />
              <ColorSwatch color="bg-amber-500" label="Warning" hex="#f59e0b" />
            </div>
          </Section>

          {/* ─── TYPOGRAPHY ─── */}
          <Section title="Typography" desc="Plus Jakarta Sans for headings (font-display), DM Sans for body text. Weights range from light (300) to extrabold (800).">
            <div className="space-y-8">
              <div className="border-b border-border pb-6">
                <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Display / H1</span>
                <h1 className="font-display text-5xl md:text-6xl font-extrabold text-foreground leading-tight">The quick brown fox</h1>
                <code className="text-xs text-muted-foreground mt-2 block">font-display font-extrabold text-5xl md:text-6xl</code>
              </div>
              <div className="border-b border-border pb-6">
                <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">H2</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Section heading style</h2>
                <code className="text-xs text-muted-foreground mt-2 block">font-display font-bold text-3xl md:text-4xl</code>
              </div>
              <div className="border-b border-border pb-6">
                <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">H3</span>
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">Card or subsection heading</h3>
                <code className="text-xs text-muted-foreground mt-2 block">font-display font-bold text-xl md:text-2xl</code>
              </div>
              <div className="border-b border-border pb-6">
                <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Body</span>
                <p className="text-base text-foreground leading-relaxed max-w-2xl">Through hands-on expertise, real-time visibility, and proactive communication across every shipment. We deliver certainty in an uncertain world.</p>
                <code className="text-xs text-muted-foreground mt-2 block">text-base leading-relaxed</code>
              </div>
              <div className="border-b border-border pb-6">
                <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Small / Caption</span>
                <p className="text-sm text-muted-foreground leading-relaxed">Supporting text, descriptions, and metadata use smaller sizing with muted color.</p>
                <code className="text-xs text-muted-foreground mt-2 block">text-sm text-muted-foreground</code>
              </div>
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Eyebrow / Label</span>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[3px] bg-secondary rounded-full" />
                  <span className="text-xs font-semibold tracking-[0.15em] text-secondary uppercase">Section Label</span>
                </div>
                <code className="text-xs text-muted-foreground mt-2 block">text-xs font-semibold tracking-[0.15em] uppercase text-secondary + green bar</code>
              </div>
            </div>
          </Section>

          {/* ─── BUTTONS ─── */}
          <Section title="Buttons" desc="Primary CTA is always green. Secondary actions use navy or text links. Never use two solid buttons side-by-side.">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4 items-center">
                <button className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold px-7 py-3 text-[15px] rounded-lg transition-all shadow-lg shadow-secondary/25">
                  Primary CTA
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </button>
                <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-7 py-3 text-[15px] rounded-lg transition-all">
                  Secondary (Navy)
                </button>
                <button className="inline-flex items-center gap-2 border border-border hover:border-secondary/30 text-foreground font-semibold px-7 py-3 text-[15px] rounded-lg transition-all hover:shadow-md">
                  Outline
                </button>
              </div>
              <div className="flex flex-wrap gap-6 items-center">
                <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors group">
                  Text Link →
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2">
                  Underline link
                </a>
              </div>
              <div className="bg-muted rounded-lg p-4 text-sm text-muted-foreground">
                <strong className="text-foreground">Rule:</strong> CTA sections use green primary button + secondary as a text link below (never two solid buttons).
              </div>
            </div>
          </Section>

          {/* ─── SPACING ─── */}
          <Section title="Spacing & Layout" desc="Content max-width is 1600px. Sections use consistent vertical rhythm.">
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted rounded-xl p-6 border border-border/50">
                  <h4 className="font-display font-bold text-sm mb-3">Container</h4>
                  <code className="text-xs text-muted-foreground block mb-1">max-w-[1600px] mx-auto px-6 lg:px-12</code>
                  <p className="text-sm text-muted-foreground mt-2">All sections use this container. Content never exceeds 1600px.</p>
                </div>
                <div className="bg-muted rounded-xl p-6 border border-border/50">
                  <h4 className="font-display font-bold text-sm mb-3">Section Padding</h4>
                  <code className="text-xs text-muted-foreground block mb-1">py-20 md:py-28</code>
                  <p className="text-sm text-muted-foreground mt-2">Standard vertical padding for all major sections.</p>
                </div>
                <div className="bg-muted rounded-xl p-6 border border-border/50">
                  <h4 className="font-display font-bold text-sm mb-3">Card Border Radius</h4>
                  <code className="text-xs text-muted-foreground block mb-1">rounded-xl (12px) or rounded-2xl (16px)</code>
                  <p className="text-sm text-muted-foreground mt-2">Cards use xl, hero/feature areas use 2xl.</p>
                </div>
                <div className="bg-muted rounded-xl p-6 border border-border/50">
                  <h4 className="font-display font-bold text-sm mb-3">Grid Gaps</h4>
                  <code className="text-xs text-muted-foreground block mb-1">gap-5 to gap-7</code>
                  <p className="text-sm text-muted-foreground mt-2">Card grids use gap-5 to gap-7. Consistent across all sections.</p>
                </div>
              </div>
            </div>
          </Section>

          {/* ─── CARDS ─── */}
          <Section title="Card Patterns" desc="Cards use light gray bg or white with subtle border. Hover elevates with shadow and slight translate.">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Card Type 1 - Content Card */}
              <div className="bg-[#f7f9fb] rounded-xl border border-gray-200/80 p-6 hover:shadow-lg hover:border-gray-300 transition-all group cursor-pointer">
                <span className="inline-block text-[10px] font-semibold tracking-[0.12em] uppercase text-[#0a3d62]/60 bg-white px-3 py-1 rounded-full border border-gray-200 mb-4">Tag Label</span>
                <h3 className="text-base font-bold text-[#0a1628] mb-2 group-hover:text-secondary transition-colors">Content Card Title</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Description text that explains the card content briefly.</p>
              </div>
              {/* Card Type 2 - Image Card */}
              <div className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all hover:-translate-y-1 group cursor-pointer bg-white">
                <div className="h-36 bg-gradient-to-br from-primary/10 to-secondary/10" />
                <div className="p-5">
                  <span className="bg-secondary px-3 py-1 rounded-full text-white text-[11px] font-semibold">Category</span>
                  <h3 className="mt-3 text-base font-bold text-[#0a1628] group-hover:text-secondary transition-colors">Image Card Title</h3>
                  <p className="mt-2 text-sm text-gray-500">Short description text here.</p>
                </div>
              </div>
              {/* Card Type 3 - Stat Card */}
              <div className="bg-white rounded-xl border border-gray-200/80 p-6 hover:shadow-lg transition-all">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 flex flex-col items-center min-w-[70px]">
                    <span className="text-3xl font-bold text-[#0a3d62]">99%</span>
                    <span className="text-[10px] font-semibold tracking-[0.1em] text-secondary uppercase mt-1">Metric</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0a1628] mb-1">Stat Card Title</h3>
                    <p className="text-sm text-gray-500">Description with supporting context.</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* ─── SECTION PATTERN ─── */}
          <Section title="Section Pattern" desc="Every content section follows this structure: eyebrow label → heading → optional subtext → content.">
            <div className="bg-muted rounded-xl p-8 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[3px] bg-secondary rounded-full" />
                <span className="text-xs font-semibold tracking-[0.15em] text-secondary uppercase">Eyebrow Label</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-3">Section Heading</h2>
              <p className="text-muted-foreground max-w-lg mb-8">Optional supporting description that provides context for the section content below.</p>
              <div className="bg-white rounded-lg border border-border p-6 text-center text-sm text-muted-foreground">
                [ Section Content Goes Here ]
              </div>
            </div>
          </Section>

          {/* ─── ANIMATIONS ─── */}
          <Section title="Motion & Animation" desc="Scroll-triggered reveals with stagger. Subtle hover states. No jarring transitions.">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted rounded-xl p-6 border border-border/50">
                <h4 className="font-display font-bold text-sm mb-3">Scroll Reveal</h4>
                <code className="text-xs text-muted-foreground block mb-2">transition-all duration-700</code>
                <code className="text-xs text-muted-foreground block mb-2">opacity-0 translate-y-6 → opacity-100 translate-y-0</code>
                <p className="text-sm text-muted-foreground mt-2">IntersectionObserver triggers once (threshold 0.1–0.15). Never replays.</p>
              </div>
              <div className="bg-muted rounded-xl p-6 border border-border/50">
                <h4 className="font-display font-bold text-sm mb-3">Stagger Delay</h4>
                <code className="text-xs text-muted-foreground block mb-2">transitionDelay: 150 + i * 80–100ms</code>
                <p className="text-sm text-muted-foreground mt-2">Grid items animate in sequence. First item at ~150ms, each subsequent +80–100ms.</p>
              </div>
              <div className="bg-muted rounded-xl p-6 border border-border/50">
                <h4 className="font-display font-bold text-sm mb-3">Hover States</h4>
                <code className="text-xs text-muted-foreground block mb-2">hover:shadow-lg hover:-translate-y-1 duration-300</code>
                <p className="text-sm text-muted-foreground mt-2">Cards lift on hover. Text color shifts to secondary. Arrows translate-x.</p>
              </div>
              <div className="bg-muted rounded-xl p-6 border border-border/50">
                <h4 className="font-display font-bold text-sm mb-3">Background Transitions</h4>
                <code className="text-xs text-muted-foreground block mb-2">group-hover:bg-secondary group-hover:text-white</code>
                <p className="text-sm text-muted-foreground mt-2">Icon containers swap from secondary/10 to solid secondary on parent hover.</p>
              </div>
            </div>
          </Section>

        </div>
      </main>
      <Footer />
    </div>
  )
}

/* ─── Helper Components ─── */

function Section({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <div className="mb-20">
      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold text-foreground">{title}</h2>
        <p className="text-sm text-muted-foreground mt-1 max-w-2xl">{desc}</p>
      </div>
      {children}
    </div>
  )
}

function ColorSwatch({ color, label, hex, textDark }: { color: string; label: string; hex: string; textDark?: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      <div className={`${color} w-full h-20 rounded-xl flex items-end p-3 shadow-sm`}>
        <span className={`text-[11px] font-mono font-medium ${textDark ? "text-gray-600" : "text-white/80"}`}>{hex}</span>
      </div>
      <span className="text-xs font-medium text-foreground">{label}</span>
    </div>
  )
}
