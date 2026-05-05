import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { IndustryPage } from "./pages/IndustryPage"
import { IndustriesLanding } from "./pages/IndustriesLanding"
import { LocationsLanding } from "./pages/LocationsLanding"
import { LocationPage } from "./pages/LocationPage"
import { SolutionsLanding } from "./pages/SolutionsLanding"
import { SolutionPage } from "./pages/SolutionPage"
import { HomePageV2 } from "./pages/HomePageV2"
import { AerospacePageV2 } from "./pages/AerospacePageV2"
import { AerospacePageV3 } from "./pages/AerospacePageV3"
import { CViewPage } from "./pages/CViewPage"
import { DesignSystemPage } from "./pages/DesignSystemPage"
import { CaseStudyPage } from "./pages/CaseStudyPage"
import { InsightArticlePage } from "./pages/InsightArticlePage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/industries" element={<IndustriesLanding />} />
        <Route path="/industries/:slug" element={<IndustryPage />} />
        <Route path="/locations" element={<LocationsLanding />} />
        <Route path="/locations/*" element={<LocationPage />} />
        <Route path="/solutions" element={<SolutionsLanding />} />
        <Route path="/solutions/:slug" element={<SolutionPage />} />
        <Route path="/v2" element={<HomePageV2 />} />
        <Route path="/v2/aerospace" element={<AerospacePageV2 />} />
        <Route path="/aerospace" element={<AerospacePageV3 />} />
        <Route path="/v3/aerospace" element={<AerospacePageV3 />} />
        <Route path="/technology/shipment-tracking" element={<CViewPage />} />
        <Route path="/c-view" element={<CViewPage />} />
        <Route path="/design-system" element={<DesignSystemPage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
        <Route path="/insights/:slug" element={<InsightArticlePage />} />
      </Routes>
    </BrowserRouter>
  )
}
