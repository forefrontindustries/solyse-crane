import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { QuickAccess } from "../components/QuickAccess"
import { IndustryEntryA } from "../components/IndustryEntry"
import { ProofStats } from "../components/ProofStats"
import { Services } from "../components/Services"
import { Technology } from "../components/Technology"
import { WhyCrane } from "../components/WhyCrane"
import { ProofInPractice } from "../components/ProofInPractice"
import { Insights } from "../components/Insights"
import { CTA } from "../components/CTA"
import { Footer } from "../components/Footer"

export function HomePage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <Hero />
      <QuickAccess />
      <IndustryEntryA />
      <ProofStats />
      <Services />
      <Technology />
      <WhyCrane />
      <ProofInPractice />
      <Insights />
      <CTA />
      <Footer />
    </div>
  )
}
