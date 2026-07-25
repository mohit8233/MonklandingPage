import { Menu, Bell, Search } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function Topbar({ setOpen }) {
  const { userData } = useAuth();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-md">

      <div className="mx-auto flex min-h-[72px] items-center justify-between gap-3 px-3 py-3 min-[360px]:px-4 sm:px-6 lg:px-8">

        {/* Left */}

        <div className="flex min-w-0 flex-1 items-center gap-3">

          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 transition hover:bg-slate-100 lg:hidden"
          >
            <Menu size={20} />
          </button>

          <div className="min-w-0">

            <h1 className="truncate text-lg font-bold text-slate-800 min-[360px]:text-xl sm:text-2xl">

              Dashboard

            </h1>

            <p className="truncate text-[11px] text-slate-500 min-[360px]:text-xs sm:text-sm">

              Welcome back,

              <span className="ml-1 font-semibold text-emerald-600">

                {userData?.name || "User"}

              </span>

            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">

          {/* Search */}

          <div className="relative hidden xl:block">

            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search..."
              className="w-64 rounded-xl border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 outline-none transition focus:border-emerald-500 focus:bg-white"
            />

          </div>

          {/* Notification */}

          <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 transition hover:bg-slate-100 sm:h-11 sm:w-11">

            <Bell size={20} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>

          </button>

          {/* Avatar */}

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white shadow-md sm:h-11 sm:w-11 sm:text-base">

            {userData?.name?.charAt(0)?.toUpperCase() || "U"}

          </div>

        </div>

      </div>

    </header>
  );
}