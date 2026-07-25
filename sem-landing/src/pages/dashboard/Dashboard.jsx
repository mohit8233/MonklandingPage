import {
  FolderKanban,
  Users,
  TrendingUp,
  DollarSign,
  ArrowUpRight,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const stats = [
  {
    title: "Total Projects",
    value: "24",
    icon: FolderKanban,
    color: "bg-emerald-500",
  },
  {
    title: "Active Clients",
    value: "18",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "Growth",
    value: "+32%",
    icon: TrendingUp,
    color: "bg-orange-500",
  },
  {
    title: "Revenue",
    value: "$18.5K",
    icon: DollarSign,
    color: "bg-violet-500",
  },
];

const recentProjects = [
  {
    name: "Search Engine Monks Website",
    status: "In Progress",
  },
  {
    name: "SEO Dashboard",
    status: "Completed",
  },
  {
    name: "AI Marketing Landing Page",
    status: "Pending",
  },
];

const activities = [
  "New client registered.",
  "Portfolio updated.",
  "Project completed.",
  "SEO report generated.",
];

export default function Dashboard() {
  return (
    <div className="space-y-8">

      {/* Hero */}

      <section className="rounded-3xl bg-gradient-to-r from-emerald-600 to-emerald-500 p-8 text-white shadow-xl">

        <h1 className="text-3xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="mt-3 max-w-2xl text-emerald-100">
          Manage your projects, monitor client progress,
          and track business performance from one place.
        </p>

        <button className="mt-6 flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-emerald-600 transition hover:scale-105">
          View Reports
          <ArrowUpRight size={18} />
        </button>

      </section>

      {/* Stats */}

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-slate-800">
                    {item.value}
                  </h2>

                </div>

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white ${item.color}`}
                >
                  <Icon size={26} />
                </div>

              </div>
            </div>
          );
        })}

      </section>

      {/* Grid */}

      <section className="grid gap-6 lg:grid-cols-3">

        {/* Recent Projects */}

        <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">

          <h2 className="mb-5 text-xl font-bold text-slate-800">
            Recent Projects
          </h2>

          <div className="space-y-4">

            {recentProjects.map((project) => (
              <div
                key={project.name}
                className="flex items-center justify-between rounded-xl border border-slate-100 p-4 transition hover:bg-slate-50"
              >
                <div>

                  <h3 className="font-semibold text-slate-800">
                    {project.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {project.status}
                  </p>

                </div>

                <FolderKanban className="text-emerald-600" />
              </div>
            ))}

          </div>

        </div>

        {/* Activity */}

        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <h2 className="mb-5 text-xl font-bold text-slate-800">
            Recent Activity
          </h2>

          <div className="space-y-5">

            {activities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >
                <div className="mt-1 rounded-full bg-emerald-100 p-2">
                  <CheckCircle2
                    size={16}
                    className="text-emerald-600"
                  />
                </div>

                <div>

                  <p className="font-medium text-slate-700">
                    {item}
                  </p>

                  <div className="mt-1 flex items-center gap-1 text-sm text-slate-400">
                    <Clock3 size={14} />
                    Just now
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

    </div>
  );
}