import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  User,
  ClipboardList,
  CalendarDays,
  FileText,
  Bell,
  Settings,
  Globe,
  LogOut,
  X,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/logo/logo.svg";

export default function Sidebar({ open, setOpen }) {
  const navigate = useNavigate();
  const { userData, logout } = useAuth();

  const menuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "My Profile",
      path: "/dashboard/profile",
      icon: User,
    },
    {
      title: "My Requests",
      path: "/dashboard/requests",
      icon: ClipboardList,
    },
    {
      title: "Consultations",
      path: "/dashboard/consultations",
      icon: CalendarDays,
    },
    {
      title: "My Quotes",
      path: "/dashboard/quotes",
      icon: FileText,
    },
    {
      title: "Notifications",
      path: "/dashboard/notifications",
      icon: Bell,
    },
    {
      title: "Settings",
      path: "/dashboard/settings",
      icon: Settings,
    },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* Overlay */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}

      <motion.aside
        initial={false}
        animate={{
          x:
            typeof window !== "undefined" && window.innerWidth >= 1024
              ? 0
              : open
              ? 0
              : -340,
        }}
        transition={{
          duration: 0.35,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        className="
          fixed
          left-0
          top-0
          z-50
          flex
          h-[100dvh]
          w-[88%]
          max-w-[320px]
          flex-col
          overflow-hidden
          border-r
          border-slate-200
          bg-white
          shadow-[0_30px_80px_rgba(0,0,0,.18)]
          lg:w-72
        "
      >
        {/* Logo */}

        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-5">

          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="Search Engine Monks"
              className="h-10 w-auto"
            />
          </NavLink>

          <button
            onClick={() => setOpen(false)}
            className="rounded-xl p-2 transition hover:bg-slate-100 lg:hidden"
          >
            <X size={22} />
          </button>

        </div>
                {/* User Profile */}

        <div className="border-b border-slate-200 bg-gradient-to-br from-emerald-50 via-white to-green-50 p-5">

          <div className="flex items-center gap-4">

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-xl font-bold text-white shadow-lg"
            >
              {userData?.name?.charAt(0)?.toUpperCase() || "U"}

              <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-green-500"></span>

            </motion.div>

            <div className="min-w-0 flex-1">

              <h3 className="truncate text-base font-bold text-slate-800">

                {userData?.name || "Guest User"}

              </h3>

              <p className="mt-1 truncate text-sm text-slate-500">

                {userData?.email || "user@email.com"}

              </p>

              <span className="mt-3 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-700">

                Registered User

              </span>

            </div>

          </div>

        </div>

        {/* Navigation */}

        <nav className="flex-1 overflow-y-auto px-4 py-5 scrollbar-thin scrollbar-thumb-emerald-400 scrollbar-track-transparent">

          <div className="space-y-2">

            <p className="px-3 pb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">

              Main Menu

            </p>

            {menuItems.map((item, index) => {
              const Icon = item.icon;

              return (

                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.06,
                  }}
                >

                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `group flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300 ${
                        isActive
                          ? "bg-emerald-600 text-white shadow-lg"
                          : "text-slate-600 hover:bg-slate-100 hover:text-emerald-600"
                      }`
                    }
                  >

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 transition-all duration-300 group-hover:bg-emerald-100">

                      <Icon
                        size={20}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />

                    </div>

                    <div className="min-w-0 flex-1">

                      <p className="truncate text-sm font-semibold">

                        {item.title}

                      </p>

                    </div>

                  </NavLink>

                </motion.div>

              );
            })}

          </div>

        </nav>
                {/* Footer */}

        <div className="border-t border-slate-200 bg-white p-4">

          <div className="space-y-3">

            {/* Back to Website */}

            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3 rounded-2xl border border-slate-200 p-3 transition-all duration-300 hover:border-emerald-200 hover:bg-emerald-50"
            >

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 transition-all duration-300 group-hover:bg-emerald-100">

                <Globe
                  size={20}
                  className="text-slate-600 group-hover:text-emerald-600"
                />

              </div>

              <div className="min-w-0 flex-1">

                <p className="truncate text-sm font-semibold text-slate-800">

                  Back to Website

                </p>

                <p className="truncate text-xs text-slate-500">

                  Visit Homepage

                </p>

              </div>

            </NavLink>

            {/* Logout */}

            <button
              onClick={handleLogout}
              className="group flex w-full items-center gap-3 rounded-2xl border border-red-100 bg-red-50 p-3 transition-all duration-300 hover:border-red-200 hover:bg-red-100"
            >

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-100 transition-all duration-300 group-hover:bg-red-200">

                <LogOut
                  size={20}
                  className="text-red-600"
                />

              </div>

              <div className="min-w-0 flex-1 text-left">

                <p className="truncate text-sm font-semibold text-red-600">

                  Logout

                </p>

                <p className="truncate text-xs text-red-400">

                  Sign out securely

                </p>

              </div>

            </button>

          </div>

          {/* Safe Area */}

          <div className="h-[env(safe-area-inset-bottom)]" />

        </div>
              </motion.aside>
    </>
  );
}