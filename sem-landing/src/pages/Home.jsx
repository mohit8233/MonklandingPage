import Navbar from "../components/layout/Navbar";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import WhyChooseUs from "../sections/WhyChooseUs";
// import Stats from "../sections/home/Stats";
import Portfolio from "../sections/Portfolio";
import Testimonials from "../sections/Testimonials";
import GooglePartner from "../sections/GooglePartner";

import Footer from "../components/layout/Footer";
import FAQ from "../sections/FAQ";
import Stats from "../sections/Stats";

function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Stats />
        <Portfolio />
        <Testimonials />
        <GooglePartner />
        <FAQ/>
        
      </main>

      <Footer />
    </>
  );
}

export default Home;