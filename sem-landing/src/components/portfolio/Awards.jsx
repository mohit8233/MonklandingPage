import { motion } from "framer-motion";
import {
  Award,
  Star,
  ShieldCheck,
  Globe,
} from "lucide-react";

const awards = [
  {
    id: 1,
    icon: Award,
    title: "Google Partner",
    description:
      "Certified Google Partner delivering trusted marketing solutions.",
    color: "from-emerald-500 to-green-600",
  },

  {
    id: 2,
    icon: Star,
    title: "Top Rated Agency",
    description:
      "Recognized for delivering exceptional digital experiences.",
    color: "from-yellow-400 to-orange-500",
  },

  {
    id: 3,
    icon: ShieldCheck,
    title: "Trusted by Businesses",
    description:
      "Helping startups and enterprises grow with confidence.",
    color: "from-cyan-500 to-sky-600",
  },

  {
    id: 4,
    icon: Globe,
    title: "Global Clients",
    description:
      "Serving businesses across multiple countries worldwide.",
    color: "from-violet-500 to-fuchsia-600",
  },
];

export default function Awards() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FCF8] to-white py-20 lg:py-28">

      {/* Background */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-200/40 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-green-200/40 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >

          <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">

            Recognition & Achievements

          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">

            Trusted.
            <span className="block text-emerald-600">
              Certified.
            </span>

          </h2>

          <p className="mt-5 text-slate-600 sm:text-lg">

            Our commitment to innovation, quality and measurable
            business growth has earned us the trust of clients
            worldwide.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {awards.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-emerald-300 hover:shadow-[0_25px_80px_rgba(16,185,129,.15)]"
            >
              {/* Glow */}

              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-emerald-100 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

              {/* Icon */}

              <div
                className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
              >
                <Icon size={30} />
              </div>

              {/* Content */}

              <h3 className="mt-6 text-xl font-black text-slate-900 transition duration-300 group-hover:text-emerald-600">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.description}
              </p>

              {/* Bottom Border */}

              <div className="mt-8 h-1 w-0 rounded-full bg-gradient-to-r from-emerald-500 to-green-400 transition-all duration-500 group-hover:w-full" />
                            {/* Achievement */}

              <div className="mt-8 flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4">

                <div>

                  <h4 className="text-2xl font-black text-emerald-600">

                    {item.id === 1 && "Google"}
                    {item.id === 2 && "4.9★"}
                    {item.id === 3 && "250+"}
                    {item.id === 4 && "18+"}

                  </h4>

                  <p className="mt-1 text-xs text-slate-500">

                    {item.id === 1 && "Partner"}
                    {item.id === 2 && "Client Rating"}
                    {item.id === 3 && "Projects"}
                    {item.id === 4 && "Countries"}

                  </p>

                </div>

                <div className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold text-emerald-700">

                  Verified

                </div>

              </div>

              {/* CTA */}

              <div className="mt-7 flex items-center justify-between">

                <span className="text-sm font-semibold text-slate-500">

                  Learn More

                </span>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white transition-all duration-300 group-hover:border-emerald-300 group-hover:bg-emerald-600">

                  <Award
                    size={18}
                    className="text-slate-500 transition-all duration-300 group-hover:rotate-12 group-hover:text-white"
                  />

                </div>

              </div>

            </motion.div>

          );
        })}
                </div>

      </div>

      {/* Decorative Background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-200/20 blur-[120px]" />

        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-green-200/20 blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-100/20 blur-[120px]" />

      </div>

    </section>
  );
}