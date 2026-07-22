import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";


import LoadingScreen from "./components/LoadingScreen";
// import FloatingBlobs from "./components/ui/FloatingBlobs";
import MouseTrail from "./components/ui/MouseTrail";
import MouseRipple from "./components/ui/MouseRipple";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ServicesPage from "./pages/Services";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  return (
    <>
      {/* <FloatingBlobs /> */}
      <MouseTrail />
      <MouseRipple />

      <div
        className={`transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
      </div>

      <AnimatePresence>
        {loading && (
          <LoadingScreen onFinish={() => setLoading(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;