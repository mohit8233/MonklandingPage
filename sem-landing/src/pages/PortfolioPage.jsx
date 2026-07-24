import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import PortfolioHero from "../components/portfolio/PortfolioHero";
import PortfolioFilter from "../components/portfolio/PortfolioFilter";
import ProjectGrid from "../components/portfolio/ProjectGrid";
import FeaturedProjects from "../components/portfolio/FeaturedProjects";
import SuccessMetrics from "../components/portfolio/SuccessMetrics";
import Awards from "../components/portfolio/Awards";
import ImpactDashboard from "../components/portfolio/ImpactDashboard";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <>
      <Navbar />

      <main>
        <PortfolioHero />

        <PortfolioFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <ProjectGrid activeCategory={activeCategory} />
        <FeaturedProjects/>
        <SuccessMetrics/>
        <Awards/>
        <ImpactDashboard/>
      </main>

      <Footer />
    </>
  );
}