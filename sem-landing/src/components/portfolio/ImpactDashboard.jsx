import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  BarChart3,
  Target,
} from "lucide-react";

const stats = [
  {
    id: 1,
    icon: TrendingUp,
    value: "+320%",
    label: "Organic Traffic",
    progress: 92,
    color: "from-emerald-500 to-green-600",
  },
  {
    id: 2,
    icon: Target,
    value: "4.8x",
    label: "Average ROAS",
    progress: 88,
    color: "from-cyan-500 to-sky-600",
  },
  {
    id: 3,
    icon: Users,
    value: "98%",
    label: "Client Satisfaction",
    progress: 98,
    color: "from-violet-500 to-fuchsia-600",
  },
  {
    id: 4,
    icon: BarChart3,
    value: "250+",
    label: "Projects Delivered",
    progress: 95,
    color: "from-orange-500 to-amber-500",
  },
];

export default function ImpactDashboard() {
  return (
    <section className="relative overflow-hidden bg-[#F8FCF8] py-20 lg:py-28">

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-200/30 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-lime-200/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Business Impact
          </span>

          <h2 className="mt-6 text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
            Results That
            <span className="block text-emerald-600">
              Speak for Themselves
            </span>
          </h2>

          <p className="mt-5 text-slate-600 sm:text-lg">
            Every strategy is focused on measurable growth, higher
            conversions and long-term business success.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
                      {/* Analytics Dashboard */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white p-6 shadow-[0_20px_80px_rgba(16,185,129,.08)]"
          >
            {/* Glow */}

            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-100 blur-[120px]" />

            <div className="relative">

              {/* Header */}

              <div className="mb-8 flex items-center justify-between">

                <div>

                  <p className="text-sm font-medium text-slate-500">
                    Growth Overview
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-slate-900">
                    Performance Dashboard
                  </h3>

                </div>

                <div className="rounded-2xl bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                  Live
                </div>

              </div>

              {/* Fake Chart */}

              <div className="flex h-56 items-end justify-between gap-3">

                {[35, 52, 45, 70, 58, 82, 100].map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    className="flex-1 rounded-t-2xl bg-gradient-to-t from-emerald-600 via-emerald-500 to-emerald-300"
                  />
                ))}

              </div>

              {/* Month Labels */}

              <div className="mt-4 grid grid-cols-7 text-center text-xs font-medium text-slate-400">

                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>

              </div>

              {/* Bottom Summary */}

              <div className="mt-8 rounded-2xl bg-slate-50 p-5">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-slate-500">
                      Overall Growth
                    </p>

                    <h4 className="mt-1 text-3xl font-black text-emerald-600">
                      +187%
                    </h4>

                  </div>

                  <div className="rounded-xl bg-emerald-100 px-4 py-3 text-sm font-semibold text-emerald-700">
                    ↑ 24% this month
                  </div>

                </div>

              </div>

            </div>

          </motion.div>
                    {/* Right Stats */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group rounded-[28px] border border-white/70 bg-white p-6 shadow-[0_15px_50px_rgba(16,185,129,.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(16,185,129,.15)]"
                >
                  {/* Icon */}

                  <div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
                  >
                    <Icon size={26} />
                  </div>

                  {/* Value */}

                  <h3 className="mt-6 text-4xl font-black text-slate-900">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-slate-500">
                    {item.label}
                  </p>

                  {/* Progress */}

                  <div className="mt-6">

                    <div className="mb-2 flex items-center justify-between text-xs font-medium">

                      <span className="text-slate-400">
                        Performance
                      </span>

                      <span className="text-emerald-600">
                        {item.progress}%
                      </span>

                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: index * 0.15,
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                      />

                    </div>

                  </div>

                  {/* Footer */}

                  <div className="mt-6 flex items-center justify-between">

                    <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                      Updated Live
                    </span>

                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white">
                      Excellent
                    </span>

                  </div>

                </motion.div>
              );
            })}
          </motion.div>
                  </div>

      </div>

      {/* Background Decorations */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/20 blur-[120px]" />

        <div className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-lime-200/20 blur-[140px]" />

        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-green-100/20 blur-[160px]" />

      </div>

    </section>
  );
}