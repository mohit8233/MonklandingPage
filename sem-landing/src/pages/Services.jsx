import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ServicesHero from "../sections/services/ServiceHero";
import ServicesGrid from "../sections/services/ServiceGrid";
import ServiceProcess from "../sections/services/ServiceProcess";


function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden">
        <ServicesHero />
        <ServicesGrid />
        <ServiceProcess/>
      </main>

      <Footer />
    </>
  );
}

export default ServicesPage;