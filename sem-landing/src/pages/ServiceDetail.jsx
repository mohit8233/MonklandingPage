import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

import services from "../data/servicesData";

import DetailHero from "../components/serviceDetail/DetailHero";
import Overview from "../components/serviceDetail/Overview";
import Features from "../components/serviceDetail/Features";
import Benefits from "../components/serviceDetail/Benefits";
import Process from "../components/serviceDetail/Process";
import FAQ from "../components/serviceDetail/FAQ";
import CTA from "../components/serviceDetail/CTA";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";


export default function ServiceDetail() {
  const { slug } = useParams();

  const service = services.find((item) => item.slug === slug);

  // Scroll to top whenever service changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Agar smooth chahiye to "smooth" kar do
    });
  }, [slug]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <Navbar />

    <main className="relative overflow-hidden bg-white">



  {/* Hero */}
  <DetailHero service={service} />

  {/* Overview */}
  <Overview service={service} />

  {/* Features */}
  <Features service={service} />

  {/* Benefits */}
  <Benefits service={service} />

  {/* Process */}
  <Process service={service} />

  {/* FAQ */}
  <FAQ service={service} />

  {/* CTA */}
  <CTA service={service} />
</main>

      <Footer />
    </>
  );
}