const requests = [
  {
    id: "SEM-001",
    service: "SEO Audit",
    status: "Pending",
    date: "25 Jul 2026",
  },
  {
    id: "SEM-002",
    service: "Website Design",
    status: "In Progress",
    date: "22 Jul 2026",
  },
  {
    id: "SEM-003",
    service: "Google Ads",
    status: "Completed",
    date: "18 Jul 2026",
  },
];

const statusColor = {
  Pending: "bg-yellow-100 text-yellow-700",
  "In Progress": "bg-blue-100 text-blue-700",
  Completed: "bg-emerald-100 text-emerald-700",
};

export default function MyRequests() {
  return (
    <div className="space-y-6">

      {/* Heading */}

      <div>
        <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">
          My Requests
        </h1>

        <p className="mt-2 text-sm text-slate-500 sm:text-base">
          Track all your submitted service requests.
        </p>
      </div>

      {/* Desktop Table */}

      <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:block">

        <table className="w-full">

          <thead className="bg-slate-50">

            <tr>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Request ID
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Service
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Status
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Date
              </th>

            </tr>

          </thead>

          <tbody>

            {requests.map((item) => (
              <tr
                key={item.id}
                className="border-t transition hover:bg-slate-50"
              >
                <td className="px-6 py-4 font-medium">
                  {item.id}
                </td>

                <td className="px-6 py-4">
                  {item.service}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColor[item.status]}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-slate-500">
                  {item.date}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* Mobile Cards */}

      <div className="space-y-4 md:hidden">

        {requests.map((item) => (

          <div
            key={item.id}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >

            <div className="flex items-center justify-between">

              <h3 className="font-semibold text-slate-800">
                {item.id}
              </h3>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColor[item.status]}`}
              >
                {item.status}
              </span>

            </div>

            <div className="mt-4 space-y-3 text-sm">

              <div className="flex justify-between gap-3">

                <span className="text-slate-500">
                  Service
                </span>

                <span className="text-right font-medium">
                  {item.service}
                </span>

              </div>

              <div className="flex justify-between gap-3">

                <span className="text-slate-500">
                  Date
                </span>

                <span className="font-medium">
                  {item.date}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}