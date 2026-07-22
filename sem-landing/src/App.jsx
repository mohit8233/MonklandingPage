import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import LoadingScreen from "./components/LoadingScreen";
import FloatingBlobs from "./components/ui/FloatingBlobs";
import MouseTrail from "./components/ui/MouseTrail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MouseRipple from "./components/ui/MouseRipple";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

return (
  <>
    <FloatingBlobs />
    <MouseTrail />
    <MouseRipple />

    {/* Home always mounted */}
    <div
      className={`transition-opacity duration-700 ${
        loading ? "opacity-0" : "opacity-100"
      }`}
    >
      <Home />

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

    {/* Loader Overlay */}
    <AnimatePresence>
      {loading && (
        <LoadingScreen
          onFinish={() => setLoading(false)}
        />
      )}
    </AnimatePresence>
  </>
);
}

export default App;