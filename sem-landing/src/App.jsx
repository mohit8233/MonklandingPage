import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/AboutPage";
import ServicesPage from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";

import LoadingScreen from "./components/LoadingScreen";
import MouseTrail from "./components/ui/MouseTrail";
import MouseRipple from "./components/ui/MouseRipple";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/ScrollToTop";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  if (loading) {
    return (
      <AnimatePresence>
        <LoadingScreen />
      </AnimatePresence>
    );
  }

  return (
    <>
      <MouseTrail />
      <MouseRipple />
      <ScrollToTop/>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<PortfolioPage/>}/>

        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage/>}/>

        <Route
          path="/services/:slug"
          element={<ServiceDetail />}
        />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />
    </>
  );
}

export default App;