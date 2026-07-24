import { motion } from "framer-motion";

const metrics = [
  {
    value: "250+",
    label: "Projects Delivered",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "180%",
    label: "Average Growth",
  },
  {
    value: "40+",
    label: "Industries Served",
  },
];

export default function SuccessMetrics() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >

          <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
            Our Achievements
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Measurable Results
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Every campaign is driven by data, innovation and measurable
            business growth.
          </p>

        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                      {metrics.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: .6,
              }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center transition hover:-translate-y-2 hover:border-emerald-500 hover:shadow-xl"
            >
              <h3 className="text-5xl font-black text-emerald-600">
                {item.value}
              </h3>

              <p className="mt-4 text-slate-600">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}