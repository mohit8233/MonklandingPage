import Navbar from "../components/layout/Navbar";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import WhyChooseUs from "../sections/WhyChooseUs";
import Stats from "../sections/Stats";
import Portfolio from "../sections/Portfolio";
import Testimonials from "../sections/Testimonials";
import GooglePartner from "../sections/GooglePartner";
import Contact from "../sections/Contact";
import Footer from "../components/layout/Footer";

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
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default Home;