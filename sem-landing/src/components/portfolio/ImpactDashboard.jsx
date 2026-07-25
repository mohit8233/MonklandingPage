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
    <section className="relative overflow-hidden bg-[#F8FCF8] py-16 sm:py-20 lg:py-28">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-emerald-200/30 blur-[120px]" />

        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-lime-200/30 blur-[140px]" />

        <div className="absolute left-1/2 top-0 h-60 w-60 -translate-x-1/2 rounded-full bg-green-100/30 blur-[120px]" />

      </div>

      <div className="mx-auto w-full max-w-7xl px-3 min-[320px]:px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >

          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold tracking-wide text-emerald-700 sm:px-5 sm:text-sm">

            Business Impact

          </span>

          <h2 className="mt-5 text-[2rem] font-black leading-tight text-slate-900 min-[360px]:text-[2.4rem] sm:text-5xl lg:text-6xl">

            Results That

            <span className="mt-2 block text-emerald-600">

              Speak for Themselves

            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-lg">

            Every strategy is focused on measurable growth,
            stronger visibility, higher conversions and
            sustainable business success.

          </p>

        </motion.div>

        {/* Main Grid */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_.8fr] lg:gap-8">
                    {/* Dashboard Card */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[24px] border border-white/70 bg-white p-4 shadow-[0_20px_70px_rgba(16,185,129,.08)] min-[320px]:rounded-[28px] min-[320px]:p-5 sm:p-6 lg:rounded-[32px] lg:p-8"
          >

            {/* Glow */}

            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-100 blur-[120px]" />

            <div className="relative">

              {/* Header */}

              <div className="mb-6 flex flex-col gap-4 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between">

                <div>

                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 sm:text-sm">

                    Growth Overview

                  </p>

                  <h3 className="mt-2 text-[1.9rem] font-black leading-tight text-slate-900 min-[360px]:text-[2.2rem] sm:text-4xl">

                    Performance

                    <span className="block">

                      Dashboard

                    </span>

                  </h3>

                </div>

                <div className="inline-flex w-fit items-center rounded-2xl bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">

                  Live

                </div>

              </div>

              {/* Chart */}

              <div className="flex h-40 items-end gap-2 min-[320px]:h-48 sm:h-56 lg:h-64">

                {[35, 52, 45, 70, 58, 82, 100].map((height, index) => (

                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: .6,
                      delay: index * .08,
                    }}
                    className="flex-1 rounded-t-2xl bg-gradient-to-t from-emerald-600 via-emerald-500 to-emerald-300"
                  />

                ))}

              </div>

              {/* Month Labels */}

              <div className="mt-4 grid grid-cols-7 text-center text-[10px] font-semibold uppercase tracking-wide text-slate-400 min-[360px]:text-xs">

                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>

              </div>

              {/* Bottom Summary */}

              <div className="mt-6 rounded-2xl bg-slate-50 p-4 sm:mt-8 sm:p-5">

                <div className="flex flex-col gap-4 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between">

                  <div>

                    <p className="text-sm text-slate-500">

                      Overall Growth

                    </p>

                    <h4 className="mt-1 text-3xl font-black text-emerald-600 sm:text-4xl">

                      +187%

                    </h4>

                  </div>

                  <div className="inline-flex w-fit rounded-xl bg-emerald-100 px-4 py-3 text-xs font-bold text-emerald-700 sm:text-sm">

                    ↑ 24% this month

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Right Stats */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="grid grid-cols-1 gap-4 min-[520px]:grid-cols-2 sm:gap-6"
          >
                        {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group rounded-[24px] border border-white/70 bg-white p-4 shadow-[0_15px_45px_rgba(16,185,129,.08)] transition-all duration-500 hover:shadow-[0_25px_70px_rgba(16,185,129,.15)] min-[320px]:p-5 sm:rounded-[28px] sm:p-6"
                >
                  {/* Icon */}

                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg sm:h-14 sm:w-14`}
                  >
                    <Icon size={22} className="sm:h-6 sm:w-6" />
                  </div>

                  {/* Value */}

                  <h3 className="mt-5 text-3xl font-black leading-none text-slate-900 min-[360px]:text-4xl">

                    {item.value}

                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">

                    {item.label}

                  </p>

                  {/* Progress */}

                  <div className="mt-6">

                    <div className="mb-2 flex items-center justify-between text-xs font-semibold">

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
                        whileInView={{
                          width: `${item.progress}%`,
                        }}
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

                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-600 sm:text-xs">

                      Updated Live

                    </span>

                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold text-emerald-700 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white sm:text-xs">

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

        {/* Top Left Glow */}

        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-emerald-200/20 blur-[120px] sm:h-80 sm:w-80" />

        {/* Right Glow */}

        <div className="absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-lime-200/20 blur-[140px] sm:h-96 sm:w-96" />

        {/* Bottom Center Glow */}

        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-green-100/20 blur-[150px] sm:h-96 sm:w-96" />

        {/* Grid Overlay */}

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:48px_48px]" />

      </div>

    </section>
  );
}