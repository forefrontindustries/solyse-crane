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
      {/* Whitespace divider between About and Proof in Practice */}
      <div className="bg-white h-16 md:h-24" />
      <ProofInPractice />
      <KnowledgeInsights />
      <CTA />
      <Footer />
    </div>
  )
}
