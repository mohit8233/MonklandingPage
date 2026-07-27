import { motion, AnimatePresence } from "framer-motion";
import {
    Bell,
    CheckCheck,
    CheckCircle2,
    AlertCircle,
    Info,
    User,
    FileText,
    CalendarDays,
    Trash2,
    Eye,
    X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
    markAllRead,
    markNotificationRead,
    deleteNotification,
} from "../../firebase/notificationService";

const iconMap = {
    success: CheckCircle2,
    warning: AlertCircle,
    info: Info,
    profile: User,
    quote: FileText,
    consultation: CalendarDays,
};

export default function NotificationDropdown({
    open,
    notifications,
    onClose,
}) {
    if (!open) return null;

    const unreadCount = notifications.filter(
        (item) => !item.read
    ).length;

    const getTime = (timestamp) => {
        if (!timestamp?.seconds) return "Just now";

        const diff =
            Date.now() - timestamp.seconds * 1000;

        const min = Math.floor(diff / 60000);

        if (min < 1) return "Just now";
        if (min < 60) return `${min} min ago`;

        const hr = Math.floor(min / 60);

        if (hr < 24)
            return `${hr} hour${hr > 1 ? "s" : ""} ago`;

        const day = Math.floor(hr / 24);

        if (day < 30)
            return `${day} day${day > 1 ? "s" : ""} ago`;

        return new Date(
            timestamp.seconds * 1000
        ).toLocaleDateString();
    };  
    

 const navigate = useNavigate();

    return (
        <AnimatePresence>

            {/* Background */}

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] lg:hidden"
            />

            {/* Dropdown */}

            <motion.div
                initial={{
                    opacity: 0,
                    y: -15,
                    scale: .96,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}
                exit={{
                    opacity: 0,
                    y: -15,
                    scale: .96,
                }}
                transition={{
                    duration: .25,
                }}
                className="
        fixed
        bottom-0
        left-0
        right-0
        z-50

        h-[80vh]

        rounded-t-3xl

        bg-white

        shadow-2xl

        lg:absolute
        lg:bottom-auto
        lg:left-auto
        lg:right-0
        lg:top-14

        lg:h-auto
        lg:max-h-[650px]

        lg:w-[420px]

        lg:rounded-3xl
        lg:border
        lg:border-slate-200
        "
            >

                {/* Header */}

                <div className="sticky top-0 z-20 rounded-t-3xl bg-gradient-to-r from-emerald-600 to-emerald-500 p-5 text-white">

                    <div className="flex items-center justify-between">

                        <div>

                            <div className="flex items-center gap-2">

                                <Bell size={20} />

                                <h2 className="text-lg font-bold">

                                    Notifications

                                </h2>

                            </div>

                            <p className="mt-1 text-sm text-emerald-100">

                                {unreadCount} unread notification
                                {unreadCount !== 1 && "s"}

                            </p>

                        </div>

                        <div className="flex items-center gap-2">

                            <button
                                type="button"
                                onClick={async (e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    await markAllRead(notifications);
                                }}
                            >
                                <CheckCheck size={18} />
                            </button>

                            <button
                                onClick={onClose}
                                className="
                rounded-xl
                bg-white/20
                p-2
                transition
                hover:bg-white/30
                lg:hidden
                "
                            >
                                <X size={18} />
                            </button>

                        </div>

                    </div>

                </div>

                {/* Notification List Starts Here */}

                <div className="max-h-[calc(80vh-90px)] overflow-y-auto lg:max-h-[520px]">
                    {notifications.length > 0 ? (
                        <div className="divide-y divide-slate-100">

                            {notifications.map((notification) => {

                                const Icon =
                                    iconMap[notification.type] || Bell;

                                return (
                                    <motion.div
                                        key={notification.id}
                                        layout
                                        initial={{
                                            opacity: 0,
                                            x: 20,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            x: 20,
                                        }}
                                        whileHover={{
                                            backgroundColor: "#f8fafc",
                                        }}
                                        className={`
                      relative
                      flex
                      gap-4
                      p-4
                      transition-all
                      duration-300
                      cursor-pointer
                      ${!notification.read
                                                ? "bg-emerald-50/60"
                                                : "bg-white"
                                            }
                    `}
                                    >
                                        {/* Unread Dot */}

                                        {!notification.read && (
                                            <span
                                                className="
                        absolute
                        left-2
                        top-6
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-emerald-500
                      "
                                            />
                                        )}

                                        {/* Icon */}

                                        <div
                                            className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-emerald-100
                      text-emerald-600
                    "
                                        >
                                            <Icon size={20} />
                                        </div>

                                        {/* Content */}

                                        <div className="min-w-0 flex-1">

                                            <div className="flex items-start justify-between gap-3">

                                                <div className="min-w-0">

                                                    <h4
                                                        className={`
                              truncate
                              text-sm
                              ${notification.read
                                                                ? "font-medium text-slate-700"
                                                                : "font-bold text-slate-900"
                                                            }
                            `}
                                                    >
                                                        {notification.title}
                                                    </h4>

                                                    <p
                                                        className="
                              mt-1
                              line-clamp-2
                              text-sm
                              text-slate-500
                            "
                                                    >
                                                        {notification.message}
                                                    </p>

                                                </div>

                                                <span
                                                    className="
                            shrink-0
                            whitespace-nowrap
                            text-xs
                            text-slate-400
                          "
                                                >
                                                    {getTime(
                                                        notification.createdAt
                                                    )}
                                                </span>

                                            </div>

                                            {/* Badge */}

                                            <div className="mt-3 flex flex-wrap items-center gap-2">

                                                <span
                                                    className="
                          rounded-full
                          bg-slate-100
                          px-3
                          py-1
                          text-xs
                          font-medium
                          capitalize
                          text-slate-600
                        "
                                                >
                                                    {notification.type}
                                                </span>

                                                {!notification.read && (
                                                    <span
                                                        className="
                            rounded-full
                            bg-emerald-100
                            px-3
                            py-1
                            text-xs
                            font-semibold
                            text-emerald-700
                          "
                                                    >
                                                        New
                                                    </span>
                                                )}

                                            </div>

                                            {/* Action buttons start below */}
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {/* Mark as Read */}

                                                {!notification.read && (
                                                    <button
                                                        onClick={async (e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();

                                                            await markNotificationRead(notification.id);
                                                        }}
                                                        className="
                              inline-flex
                              items-center
                              gap-2
                              rounded-xl
                              border
                              border-emerald-200
                              bg-emerald-50
                              px-3
                              py-2
                              text-xs
                              font-semibold
                              text-emerald-700
                              transition-all
                              hover:bg-emerald-100
                            "
                                                    >
                                                        <Eye size={15} />
                                                        Mark as Read
                                                    </button>
                                                )}

                                                {/* Delete */}

                                                <button
                                                    onClick={async (e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();

                                                        if (window.confirm("Delete this notification?")) {
                                                            await deleteNotification(notification.id);
                                                        }
                                                    }}
                                                    className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-red-200
                            bg-red-50
                            px-3
                            py-2
                            text-xs
                            font-semibold
                            text-red-600
                            transition-all
                            hover:bg-red-100
                          "
                                                >
                                                    <Trash2 size={15} />
                                                    Delete
                                                </button>

                                            </div>

                                        </div>

                                    </motion.div>
                                );
                            })}

                        </div>

                    ) : (

                        <div className="flex h-[320px] flex-col items-center justify-center px-6 text-center">

                            <div
                                className="
                  mb-5
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  bg-slate-100
                "
                            >
                                <Bell size={34} className="text-slate-400" />
                            </div>

                            <h3 className="text-lg font-semibold text-slate-800">
                                No Notifications
                            </h3>

                            <p className="mt-2 max-w-xs text-sm text-slate-500">
                                You're all caught up! New notifications will appear here
                                automatically.
                            </p>

                        </div>

                    )}
                </div>

                {/* Footer */}

                <div className="sticky bottom-0 border-t border-slate-200 bg-white p-4">

                    <div className="flex flex-col gap-3 sm:flex-row">

                        <button
                            onClick={onClose}
                            className="
                w-full
                rounded-xl
                border
                border-slate-300
                px-4
                py-3
                text-sm
                font-semibold
                text-slate-700
                transition-all
                hover:bg-slate-100
              "
                        >
                            Close
                        </button>

                       <button
  type="button"
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();

    onClose();
    navigate("/dashboard/notifications");
  }}
  className="
    flex
    w-full
    items-center
    justify-center
    rounded-xl
    bg-emerald-600
    px-4
    py-3
    text-sm
    font-semibold
    text-white
    transition-all
    duration-300
    hover:bg-emerald-700
    hover:shadow-lg
    active:scale-95
  "
>
  View All Notifications
</button>

                    </div>

                </div>

            </motion.div>

        </AnimatePresence>

    );
}