import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ServicesHero from "../sections/services/ServiceHero";
import ServicesGrid from "../sections/services/ServiceGrid";
// import ServiceProcess from "../sections/services/ServiceProcess";
import IndustriesWeServe from "../sections/services/IndustriesWeServe";
import WorkMethodology from "../sections/services/WorkMethodology";
import BusinessTransformation from "../sections/services/BusinessTransformation";

// import ServicePackages from "../sections/services/ServicePackages";
// import FeaturedSolutions from "../sections/services/FeaturedSolutions";


function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden">
        <ServicesHero />
        <ServicesGrid />
        {/* <ServiceProcess/> */}
        <IndustriesWeServe/>
        <WorkMethodology/>
        <BusinessTransformation/>
       
        {/* <ServicePackages/> */}
        {/* <FeaturedSolutions/> */}
      </main>

      <Footer />
    </>
  );
}

export default ServicesPage;