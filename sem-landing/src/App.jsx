import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/AboutPage";
import ServicesPage from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/dashboard/Profile";
import MyRequests from "./pages/dashboard/MyRequests";
import Consultations from "./pages/dashboard/Consultations";
import Quotes from "./pages/dashboard/Quotes";
import Notifications from "./pages/dashboard/Notifications";
import Settings from "./pages/dashboard/Settings";

import DashboardLayout from "./components/layout/DashboardLayout";

import ProtectedRoute from "./routes/ProtectedRoutes";
import PublicRoute from "./routes/PublicRoutes";

import LoadingScreen from "./components/LoadingScreen";
import MouseTrail from "./components/ui/MouseTrail";
import MouseRipple from "./components/ui/MouseRipple";
import ScrollToTop from "./components/ScrollToTop";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(true);

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
          <MouseTrail />
          <MouseRipple />
          <ScrollToTop />

          <Routes>
            {/* Website Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Public Auth Routes */}
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />

            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />

            <Route
              path="/forgot-password"
              element={
                <PublicRoute>
                  <ForgotPassword />
                </PublicRoute>
              }
            />

            {/* Dashboard */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
              <Route path="requests" element={<MyRequests />} />
              <Route path="consultations" element={<Consultations />} />
              <Route path="quotes" element={<Quotes />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>

          <ToastContainer
            position="top-right"
            autoClose={3000}
            newestOnTop
            pauseOnHover
            theme="colored"
          />
        </>
      )}
    </>
  );
}

export default App;