import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { QuickAccess } from "../components/QuickAccess"
import { Insights } from "../components/Insights"
import { Services } from "../components/Services"
import { Technology } from "../components/Technology"
import { About } from "../components/About"
import { ProofInPractice } from "../components/ProofInPractice"
import { KnowledgeInsights } from "../components/KnowledgeInsights"
import { CTA } from "../components/CTA"
import { Footer } from "../components/Footer"

export function HomePage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <Hero />
      <QuickAccess />
      <Insights />
      <Services />
      <Technology />
      <About />
      {/* Divider between About and Proof in Practice */}
      <div className="relative bg-white py-10 md:py-14 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-secondary/30" />
            <span className="w-2 h-2 rounded-full bg-secondary/60" />
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="w-2 h-2 rounded-full bg-secondary/60" />
            <span className="w-2 h-2 rounded-full bg-secondary/30" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>
      </div>
      <ProofInPractice />
      <KnowledgeInsights />
      <CTA />
      <Footer />
    </div>
  )
}
