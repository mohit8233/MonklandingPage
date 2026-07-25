import {
  CalendarDays,
  Clock3,
  Video,
  CircleCheck,
} from "lucide-react";

const consultations = [
  {
    id: "SEM-101",
    service: "SEO Strategy Call",
    date: "28 July 2026",
    time: "11:00 AM",
    mode: "Google Meet",
    status: "Confirmed",
  },
  {
    id: "SEM-102",
    service: "Website Planning",
    date: "30 July 2026",
    time: "3:00 PM",
    mode: "Zoom",
    status: "Upcoming",
  },
];

export default function Consultations() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          My Consultations
        </h1>
        <p className="mt-2 text-slate-500">
          View all your scheduled meetings.
        </p>
      </div>

      <div className="grid gap-6">
        {consultations.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">
                {item.service}
              </h2>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                {item.status}
              </span>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="flex items-center gap-2">
                <CalendarDays size={18} />
                {item.date}
              </div>

              <div className="flex items-center gap-2">
                <Clock3 size={18} />
                {item.time}
              </div>

              <div className="flex items-center gap-2">
                <Video size={18} />
                {item.mode}
              </div>
            </div>

            <button className="mt-6 flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-white">
              <CircleCheck size={18} />
              Join Meeting
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}