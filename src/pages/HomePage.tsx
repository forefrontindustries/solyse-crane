import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { QuickAccess } from "../components/QuickAccess"
import { IndustryEntryA } from "../components/IndustryEntry"
import { Insights } from "../components/Insights"
import { Services } from "../components/Services"
import { Technology } from "../components/Technology"
import { About } from "../components/About"
import { ProofInPractice } from "../components/ProofInPractice"
import { CTA } from "../components/CTA"
import { Footer } from "../components/Footer"

export function HomePage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />
      <Hero />
      <QuickAccess />
      <IndustryEntryA />
      <Insights />
      <Services />
      <Technology />
      <About />
      <ProofInPractice />
      <CTA />
      <Footer />
    </div>
  )
}
