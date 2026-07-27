import { useEffect, useState } from "react";
import {
  Bell,
  Trash2,
  CheckCheck,
  CheckCircle2,
  AlertCircle,
  Info,
  FileText,
  CalendarDays,
  User,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";

import {
  listenNotifications,
  markNotificationRead,
  markAllRead,
  deleteNotification,
} from "../../firebase/notificationService";

const iconMap = {
  success: CheckCircle2,
  warning: AlertCircle,
  info: Info,
  quote: FileText,
  consultation: CalendarDays,
  profile: User,
};

export default function Notifications() {
  const { currentUser } = useAuth();

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (!currentUser) return;

    const unsubscribe = listenNotifications(
      currentUser.uid,
      (data) => {
        setNotifications(data);
      }
    );

    return unsubscribe;
  }, [currentUser]);

  const getTime = (timestamp) => {
    if (!timestamp?.seconds) return "Just now";

    const diff = Date.now() - timestamp.seconds * 1000;

    const minutes = Math.floor(diff / 60000);

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes} min ago`;

    const hours = Math.floor(minutes / 60);

    if (hours < 24) return `${hours} hour ago`;

    const days = Math.floor(hours / 24);

    return `${days} day ago`;
  };

  const unread = notifications.filter((n) => !n.read).length;

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-emerald-500 p-6 text-white shadow-lg">

  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

    <div>

      <h1 className="text-3xl font-bold">
        Notifications
      </h1>

      <p className="mt-2 text-emerald-100">
        Stay updated with all account activities.
      </p>

    </div>

    <div className="flex gap-3">

      <div className="rounded-2xl bg-white/20 px-5 py-3 backdrop-blur">

        <p className="text-xs uppercase">
          Total
        </p>

        <h3 className="text-2xl font-bold">
          {notifications.length}
        </h3>

      </div>

      <div className="rounded-2xl bg-white/20 px-5 py-3 backdrop-blur">

        <p className="text-xs uppercase">
          Unread
        </p>

        <h3 className="text-2xl font-bold">
          {unread}
        </h3>

      </div>

    </div>

  </div>

</div>

      {/* List */}

      <div className="rounded-2xl bg-white shadow-sm">

        {notifications.length === 0 ? (

          <div className="flex flex-col items-center justify-center px-6 py-20">

            <Bell
              size={60}
              className="text-slate-300"
            />

            <h2 className="mt-5 text-xl font-bold">

              No Notifications

            </h2>

            <p className="mt-2 text-slate-500">

              You're all caught up 🎉

            </p>

          </div>

        ) : (

          notifications.map((item) => {
            const Icon =
              iconMap[item.type] || Info;

            return (

              <div
                key={item.id}
                className={`flex flex-col gap-4 border-b p-5 transition hover:bg-slate-50 md:flex-row md:items-center ${
                  !item.read
                    ? "bg-emerald-50/40"
                    : ""
                }`}
              >

                <div className="rounded-xl bg-emerald-100 p-3">

                  <Icon
                    size={22}
                    className="text-emerald-600"
                  />

                </div>

                <div className="flex-1">

                  <div className="flex items-center gap-2">

                    <h3 className="font-bold text-slate-800">

                      {item.title}

                    </h3>

                    {!item.read && (
                      <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    )}

                  </div>

                  <p className="mt-1 text-slate-600">

                    {item.message}

                  </p>

                  <p className="mt-2 text-sm text-slate-400">

                    {getTime(item.createdAt)}

                  </p>

                </div>

                <div className="flex gap-2">

                  {!item.read && (

                    <button
                      onClick={() =>
                        markNotificationRead(item.id)
                      }
                      className="rounded-xl border p-3 hover:bg-slate-100"
                    >

                      <CheckCheck size={18} />

                    </button>

                  )}

                  <button
                    onClick={() =>
                      deleteNotification(item.id)
                    }
                    className="rounded-xl border border-red-200 p-3 text-red-500 hover:bg-red-50"
                  >

                    <Trash2 size={18} />

                  </button>

                </div>

              </div>

            );
          })

        )}

      </div>

    </div>
  );
}