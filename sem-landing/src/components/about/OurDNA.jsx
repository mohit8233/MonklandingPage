import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Target,
  Award,
} from "lucide-react";

const dnaData = [
  {
    icon: Sparkles,
    title: "Innovation",
    description:
      "We embrace modern technology, AI, and creative thinking to build smarter digital experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Transparency",
    description:
      "Open communication and honest collaboration guide every project we deliver.",
  },
  {
    icon: Target,
    title: "Ownership",
    description:
      "Every project is treated like our own with complete accountability and commitment.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "From design to development, we focus on quality, precision, and measurable results.",
  },
];

export default function OurDNA() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">

      {/* Background Glow */}
      <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-[#65C18C]/10 blur-[120px]" />

      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#2F855A]/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 min-[270px]:px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex rounded-full bg-[#65C18C]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#2F855A]">

            Our DNA

          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-[#1F2937] min-[270px]:text-[30px] sm:text-4xl lg:text-5xl">

            The Values That
            <span className="text-[#2F855A]">
              {" "}Shape Everything We Build
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-600 min-[270px]:text-[15px] sm:text-base">

            Every campaign, every website, and every strategy begins with
            a strong foundation of innovation, trust, ownership, and
            excellence.

          </p>

        </motion.div>

        {/* Cards + DNA */}
        <div className="mt-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
                  {/* Left Side Cards */}
          <div className="flex flex-col gap-6">

            {dnaData.slice(0, 2).map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-[#65C18C]/20 bg-white/80 p-6 shadow-lg backdrop-blur-xl transition-all duration-500 hover:border-[#65C18C] hover:shadow-2xl"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#65C18C]/0 via-[#65C18C]/0 to-[#65C18C]/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Icon */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#65C18C]/10 transition duration-300 group-hover:bg-[#2F855A]">

                    <Icon
                      size={28}
                      className="text-[#2F855A] transition duration-300 group-hover:text-white"
                    />

                  </div>

                  {/* Content */}

                  <h3 className="relative z-10 mt-6 text-xl font-bold text-[#1F2937]">

                    {item.title}

                  </h3>

                  <p className="relative z-10 mt-3 text-sm leading-7 text-gray-600">

                    {item.description}

                  </p>

                  {/* Bottom Line */}

                  <div className="relative z-10 mt-6 h-1 w-16 rounded-full bg-[#65C18C] transition-all duration-500 group-hover:w-28" />

                  {/* Background Shape */}

                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#65C18C]/10 blur-3xl transition-all duration-500 group-hover:scale-125" />

                </motion.div>
              );
            })}

          </div>
                    {/* Center DNA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center py-10"
          >
            {/* Outer Glow */}
            <div className="absolute h-64 w-64 rounded-full bg-[#65C18C]/10 blur-3xl"></div>

            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
              className="absolute h-60 w-60 rounded-full border border-dashed border-[#65C18C]/40"
            />

            {/* Second Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 18,
                ease: "linear",
              }}
              className="absolute h-44 w-44 rounded-full border border-[#2F855A]/20"
            />

            {/* DNA Circle */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="relative z-20 flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-[#65C18C] to-[#2F855A] shadow-[0_20px_60px_rgba(47,133,90,.35)]"
            >
              <Sparkles
                size={54}
                className="text-white"
              />
            </motion.div>

            {/* Floating Dots */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute left-6 top-10 h-3 w-3 rounded-full bg-[#65C18C]"
            />

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.8,
              }}
              className="absolute right-6 bottom-12 h-4 w-4 rounded-full bg-[#2F855A]"
            />
          </motion.div>

          {/* Right Side Cards */}
          <div className="flex flex-col gap-6">

            {dnaData.slice(2, 4).map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-[#65C18C]/20 bg-white/80 p-6 shadow-lg backdrop-blur-xl transition-all duration-500 hover:border-[#65C18C] hover:shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#65C18C]/0 via-[#65C18C]/0 to-[#65C18C]/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#65C18C]/10 transition duration-300 group-hover:bg-[#2F855A]">

                    <Icon
                      size={28}
                      className="text-[#2F855A] transition duration-300 group-hover:text-white"
                    />

                  </div>

                  <h3 className="relative z-10 mt-6 text-xl font-bold text-[#1F2937]">

                    {item.title}

                  </h3>

                  <p className="relative z-10 mt-3 text-sm leading-7 text-gray-600">

                    {item.description}

                  </p>

                  <div className="relative z-10 mt-6 h-1 w-16 rounded-full bg-[#65C18C] transition-all duration-500 group-hover:w-28" />

                  <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-[#65C18C]/10 blur-3xl transition-all duration-500 group-hover:scale-125" />

                </motion.div>
              );
            })}

          </div>
                  </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-20 max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-[32px] border border-[#65C18C]/20 bg-gradient-to-r from-[#F8FCFA] via-white to-[#F8FCFA] p-8 text-center shadow-xl">

            <div className="absolute -left-12 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#65C18C]/10 blur-3xl"></div>

            <div className="absolute -right-12 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#2F855A]/10 blur-3xl"></div>

            <p className="relative text-base font-medium leading-8 text-gray-700 sm:text-lg lg:text-xl">

              "Behind every successful project is a passionate team driven by
              innovation, transparency, ownership, and excellence."

            </p>

          </div>
        </motion.div>

      </div>

      {/* Decorative Elements */}

      <div className="pointer-events-none absolute left-10 top-40 hidden h-3 w-3 rounded-full bg-[#65C18C]/30 lg:block"></div>

      <div className="pointer-events-none absolute right-12 bottom-28 hidden h-4 w-4 rounded-full bg-[#2F855A]/20 lg:block"></div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#65C18C]/10 blur-[100px]"></div>

      <div className="pointer-events-none absolute top-0 right-0 h-56 w-56 rounded-full bg-[#2F855A]/5 blur-[120px]"></div>

    </section>
  );
}