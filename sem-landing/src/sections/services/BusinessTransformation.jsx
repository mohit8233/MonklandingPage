import { motion } from "framer-motion";
import {
  ArrowRight,
  CircleX,
  CircleCheckBig,
} from "lucide-react";

const before = [
  "Low Google Rankings",
  "Outdated Website Design",
  "Low Quality Leads",
  "Poor User Experience",
  "Weak Brand Presence",
  "Slow Business Growth",
];

const after = [
  "Higher Search Rankings",
  "Modern High-Converting Website",
  "Qualified Leads",
  "Better User Engagement",
  "Strong Brand Authority",
  "Sustainable Business Growth",
];

export default function BusinessTransformation() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-white to-[#F8FAFC] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto mb-14 max-w-3xl text-center lg:mb-20"
        >

          <span className="inline-flex rounded-full bg-[#BCD0C5]/30 px-5 py-2 text-sm font-semibold text-[#2F855A]">
            Business Transformation
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-gray-900 sm:text-4xl lg:mt-6 lg:text-5xl">
            See The Difference
            <br className="hidden sm:block" />
            We Make
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            We don't just provide services—we transform businesses
            through strategy, technology, and measurable digital
            growth.
          </p>

        </motion.div>

        {/* Comparison */}

        <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-10">

          {/* BEFORE */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-red-200 bg-red-50 p-5 shadow-lg sm:p-7 lg:p-8"
          >

            <div className="mb-7 flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 sm:h-14 sm:w-14">

                <CircleX className="h-7 w-7 text-red-600 sm:h-8 sm:w-8" />

              </div>

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500 sm:text-sm">
                  Before
                </p>

                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  Common Challenges
                </h3>

              </div>

            </div>

            <div className="space-y-4">
                              {before.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * .08 }}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm sm:gap-4 sm:p-5"
                >
                  <CircleX className="h-5 w-5 shrink-0 text-red-500" />

                  <span className="text-sm font-medium leading-6 text-gray-700 sm:text-base">
                    {item}
                  </span>

                </motion.div>
              ))}

            </div>

          </motion.div>

          {/* CENTER */}

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: .5 }}
            className="flex justify-center"
          >

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2F855A] shadow-xl sm:h-20 sm:w-20 lg:h-24 lg:w-24">

              <ArrowRight className="hidden h-10 w-10 text-white lg:block" />

              <ArrowRight className="h-8 w-8 rotate-90 text-white lg:hidden" />

            </div>

          </motion.div>

          {/* AFTER */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-green-200 bg-green-50 p-5 shadow-lg sm:p-7 lg:p-8"
          >

            <div className="mb-7 flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 sm:h-14 sm:w-14">

                <CircleCheckBig className="h-7 w-7 text-[#2F855A] sm:h-8 sm:w-8" />

              </div>

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2F855A] sm:text-sm">
                  After
                </p>

                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  Business Growth
                </h3>

              </div>

            </div>

            <div className="space-y-4">

              {after.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * .08 }}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm sm:gap-4 sm:p-5"
                >

                  <CircleCheckBig className="h-5 w-5 shrink-0 text-[#2F855A]" />

                  <span className="text-sm font-medium leading-6 text-gray-700 sm:text-base">
                    {item}
                  </span>

                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}