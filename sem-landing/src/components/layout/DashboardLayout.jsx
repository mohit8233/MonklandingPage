import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../dashboard/Sidebar";
import Topbar from "../dashboard/Topbar";

export default function DashboardLayout() {
const [sidebarOpen, setSidebarOpen] = useState(
  window.innerWidth >= 1024
);

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Sidebar */}

      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      {/* Main */}

      <div className="lg:ml-72">

        <Topbar
          setOpen={setSidebarOpen}
        />

        <main className="min-h-[calc(100vh-80px)] p-4 md:p-6 lg:p-8">

          <Outlet />

        </main>

      </div>

    </div>
  );
}