import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import LoadingScreen from "./components/LoadingScreen";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen
            onFinish={() => setLoading(false)}
          />
        )}
      </AnimatePresence>

      {!loading && (
        <>
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
        </>
      )}
    </>
  );
}

export default App;