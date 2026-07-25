import { useMemo, useState } from "react";
import {
  Plus,
  Search,
  Calendar,
  FolderKanban,
} from "lucide-react";

const projectsData = [
  {
    id: 1,
    name: "Search Engine Monks Website",
    client: "SEM",
    status: "In Progress",
    deadline: "30 Jul 2026",
  },
  {
    id: 2,
    name: "SEO Dashboard",
    client: "Digital Agency",
    status: "Completed",
    deadline: "18 Jul 2026",
  },
  {
    id: 3,
    name: "AI Marketing Landing Page",
    client: "AI Studio",
    status: "Pending",
    deadline: "05 Aug 2026",
  },
  {
    id: 4,
    name: "Portfolio Website",
    client: "Mohit Singh",
    status: "In Progress",
    deadline: "12 Aug 2026",
  },
];

export default function Projects() {
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) =>
      project.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const badgeClasses = {
    Completed: "bg-green-100 text-green-700",
    "In Progress": "bg-blue-100 text-blue-700",
    Pending: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Projects
          </h1>

          <p className="mt-1 text-slate-500">
            Manage all your ongoing and completed projects.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700">
          <Plus size={18} />
          Add Project
        </button>
      </div>

      {/* Search */}

      <div className="relative max-w-md">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 outline-none focus:border-emerald-500"
        />
      </div>

      {/* Projects Grid */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="rounded-xl bg-emerald-100 p-3">
                <FolderKanban
                  size={24}
                  className="text-emerald-600"
                />
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  badgeClasses[project.status]
                }`}
              >
                {project.status}
              </span>
            </div>

            <h2 className="text-xl font-bold text-slate-800">
              {project.name}
            </h2>

            <p className="mt-2 text-slate-500">
              Client: {project.client}
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
              <Calendar size={16} />
              {project.deadline}
            </div>

            <button className="mt-6 w-full rounded-xl border border-emerald-600 py-3 font-semibold text-emerald-600 transition hover:bg-emerald-600 hover:text-white">
              View Details
            </button>
          </div>
        ))}

        {filteredProjects.length === 0 && (
          <div className="col-span-full rounded-2xl bg-white p-10 text-center shadow-sm">
            <h3 className="text-xl font-semibold text-slate-700">
              No projects found
            </h3>

            <p className="mt-2 text-slate-500">
              Try another search keyword.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}