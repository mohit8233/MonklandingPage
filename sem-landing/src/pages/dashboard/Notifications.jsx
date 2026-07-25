import {
  Bell,
  CheckCircle2,
  AlertCircle,
  Clock3,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "SEO Request Submitted",
    message:
      "Your SEO Audit request has been received successfully.",
    time: "10 mins ago",
    type: "success",
  },
  {
    id: 2,
    title: "Consultation Confirmed",
    message:
      "Your consultation has been scheduled for 28 July at 11:00 AM.",
    time: "2 hours ago",
    type: "success",
  },
  {
    id: 3,
    title: "Quote Ready",
    message:
      "Your Website Development quotation is now available.",
    time: "Yesterday",
    type: "info",
  },
  {
    id: 4,
    title: "Profile Updated",
    message:
      "Your account information has been updated successfully.",
    time: "2 days ago",
    type: "info",
  },
];

export default function Notifications() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Notifications
        </h1>

        <p className="mt-2 text-slate-500">
          Stay updated with your latest account activities.
        </p>
      </div>

      <div className="space-y-5">
        {notifications.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-lg"
          >
            <div className="flex gap-4">
              <div
                className={`rounded-xl p-3 ${
                  item.type === "success"
                    ? "bg-emerald-100"
                    : "bg-blue-100"
                }`}
              >
                {item.type === "success" ? (
                  <CheckCircle2 className="text-emerald-600" />
                ) : (
                  <Bell className="text-blue-600" />
                )}
              </div>

              <div className="flex-1">
                <h2 className="font-semibold text-slate-800">
                  {item.title}
                </h2>

                <p className="mt-2 text-slate-500">
                  {item.message}
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
                  <Clock3 size={16} />
                  {item.time}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {notifications.length === 0 && (
        <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
          <AlertCircle
            size={55}
            className="mx-auto text-slate-300"
          />

          <h2 className="mt-5 text-xl font-semibold">
            No Notifications
          </h2>

          <p className="mt-2 text-slate-500">
            You're all caught up.
          </p>
        </div>
      )}
    </div>
  );
}