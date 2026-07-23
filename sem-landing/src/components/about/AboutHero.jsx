import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  "1200+ Successfully Delivered Projects",
  "350+ Happy Clients Worldwide",
  "8+ Years Of Digital Excellence",
  "AI Powered Growth Strategies",
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FCFA] via-white to-[#EEF8F2] pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-28">

      {/* Background */}
      <div className="absolute -top-40 -left-40 h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-[#BDE7CC]/40 blur-3xl"></div>

      <div className="absolute -bottom-40 -right-40 h-80 w-80 sm:h-[420px] sm:w-[420px] rounded-full bg-[#DDF7E7]/60 blur-3xl"></div>

      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-3 xs:px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="mb-8 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-500"
        >
        
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <span className="inline-flex rounded-full bg-[#EAF7F1] px-3 py-2 text-[10px] font-semibold tracking-[2px] text-[#2F855A] sm:px-5 sm:text-xs">
              ABOUT SEARCH ENGINE MONKS
            </span>

            <h1 className="mt-5 text-[30px] leading-[1.15] font-extrabold text-gray-900 min-[270px]:text-[32px] sm:text-4xl md:text-5xl lg:text-6xl">

              Building

              <span className="block text-[#2F855A]">
                Digital Success
              </span>

              Through Innovation,
              Strategy & AI

            </h1>

            <p className="mt-6 max-w-xl text-[14px] leading-7 text-gray-600 sm:text-base lg:text-lg">

              Search Engine Monks helps businesses grow with
              modern web development, SEO, branding,
              AI-powered marketing and performance-driven
              digital solutions.

              We combine creativity, technology and strategy
              to deliver measurable business growth for
              startups, enterprises and global brands.

            </p>

            {/* Features */}

            <div className="mt-8 space-y-4">

              {features.map((item, index) => (

                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * .1,
                    duration: .45,
                  }}
                  className="flex items-start gap-3"
                >

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EAF7F1]">

                    <CheckCircle2
                      size={18}
                      className="text-[#2F855A]"
                    />

                  </div>

                  <p className="text-sm leading-6 text-gray-700 sm:text-base">
                    {item}
                  </p>

                </motion.div>

              ))}

            </div>
                        {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                to="/services"
                className="group inline-flex w-full items-center justify-center rounded-2xl bg-[#2F855A] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#276E49] hover:shadow-xl sm:w-auto"
              >
                Explore Services

                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center rounded-2xl border-2 border-[#2F855A] bg-white px-7 py-4 text-sm font-semibold text-[#2F855A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2F855A] hover:text-white sm:w-auto"
              >
                Contact Us
              </Link>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full"
          >

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-[28px] shadow-[0_30px_70px_rgba(0,0,0,0.12)]">

              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
                alt="Digital Marketing Team"
                className="h-[280px] w-full object-cover transition duration-700 hover:scale-105 min-[270px]:h-[320px] sm:h-[420px] md:h-[520px] lg:h-[650px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"></div>

            </div>

            {/* Projects Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: .2 }}
              className="absolute left-5 top-5 hidden md:block"
            >
              <div className="rounded-3xl border border-white/70 bg-white/95 px-6 py-5 backdrop-blur-xl shadow-[0_20px_45px_rgba(0,0,0,.12)]">

                <h3 className="text-4xl font-extrabold text-[#2F855A]">
                  1200+
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Projects Delivered
                </p>

              </div>

            </motion.div>

            {/* Happy Clients */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: .4 }}
              className="absolute -right-5 top-1/2 hidden -translate-y-1/2 lg:block"
            >
              <div className="rounded-3xl border border-white/70 bg-white/95 px-6 py-5 backdrop-blur-xl shadow-[0_20px_45px_rgba(0,0,0,.12)]">

                <h3 className="text-4xl font-extrabold text-[#2F855A]">
                  350+
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Happy Clients
                </p>

              </div>

            </motion.div>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, scale: .8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: .6 }}
              className="absolute bottom-6 left-6 hidden md:block"
            >
              <div className="rounded-3xl bg-gradient-to-r from-[#2F855A] to-[#43B76C] px-7 py-6 text-white shadow-[0_20px_45px_rgba(47,133,90,.35)]">

                <h3 className="text-4xl font-extrabold">
                  8+
                </h3>

                <p className="mt-2 text-sm text-white/90">
                  Years Experience
                </p>

              </div>

            </motion.div>
                        {/* Mobile Stats */}
            <div className="mt-8 lg:hidden">

              <div className="grid grid-cols-1 min-[340px]:grid-cols-3 gap-4">

                {[
                  {
                    value: "1200+",
                    label: "Projects",
                  },
                  {
                    value: "350+",
                    label: "Clients",
                  },
                  {
                    value: "8+",
                    label: "Years",
                  },
                ].map((item, index) => (

                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.15,
                      duration: 0.5,
                    }}
                    whileHover={{
                      y: -4,
                    }}
                    className="rounded-3xl border border-white/70 bg-white/90 p-5 text-center shadow-[0_15px_35px_rgba(0,0,0,0.08)] backdrop-blur-xl"
                  >

                    <h3 className="whitespace-nowrap text-[28px] font-extrabold leading-none text-[#2F855A]">
                      {item.value}
                    </h3>

                    <p className="mt-3 text-sm font-medium text-gray-500">
                      {item.label}
                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

            {/* Trusted Badge */}
            <motion.div
              initial={{
                opacity: 0,
                rotate: -8,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.8,
                duration: 0.6,
              }}
              className="absolute -bottom-6 right-8 hidden rounded-full bg-white px-6 py-4 shadow-[0_20px_45px_rgba(0,0,0,0.12)] lg:block"
            >
              <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-500">
                Trusted By
              </p>

              <h4 className="mt-1 text-center text-xl font-bold text-[#2F855A]">
                Global Brands
              </h4>

            </motion.div>
                      </motion.div>

        </div>

      </div>

      {/* Bottom Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#2F855A]/10 blur-3xl"></div>

      {/* Left Blur */}
      <div className="pointer-events-none absolute top-1/3 -left-20 h-52 w-52 rounded-full bg-[#2F855A]/5 blur-[100px]"></div>

      {/* Right Blur */}
      <div className="pointer-events-none absolute bottom-1/4 -right-20 h-52 w-52 rounded-full bg-[#7ED6A7]/10 blur-[120px]"></div>

      {/* Decorative Ring */}
      <div className="pointer-events-none absolute right-10 top-24 hidden h-44 w-44 rounded-full border border-[#2F855A]/10 lg:block"></div>

      {/* Decorative Dot */}
      <div className="pointer-events-none absolute left-16 bottom-20 hidden h-3 w-3 rounded-full bg-[#2F855A]/30 lg:block"></div>

    </section>
  );
}