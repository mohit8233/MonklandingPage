import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

const timeline = [
  {
    year: "2018",
    title: "Company Founded",
    desc:
      "Started with a vision to help businesses grow through modern digital marketing and web solutions.",
  },
  {
    year: "2019",
    title: "100+ Happy Clients",
    desc:
      "Successfully delivered projects for startups and local businesses across multiple industries.",
  },
  {
    year: "2021",
    title: "Global Expansion",
    desc:
      "Expanded services internationally with clients from Canada, USA, UK and Australia.",
  },
  {
    year: "2023",
    title: "AI Solutions Launch",
    desc:
      "Introduced AI-powered automation, content generation and smart marketing services.",
  },
  {
    year: "2026",
    title: "1200+ Projects Delivered",
    desc:
      "Built a trusted digital agency with long-term partnerships and measurable business growth.",
  },
];

export default function CompanyTimeline() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">

      {/* Background */}

      <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-[#2F855A]/10 blur-[120px]" />

      <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#65C18C]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto mb-14 max-w-3xl text-center lg:mb-20"
        >

          <span className="inline-flex rounded-full bg-[#2F855A]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-[#2F855A]">

            Our Journey

          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">

            Milestones That

            <span className="text-[#2F855A]">

              {" "}Define Us

            </span>

          </h2>

          <p className="mt-6 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">

            Every milestone reflects our commitment to innovation,
            creativity and measurable business growth.

          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Desktop Center Line */}

          <div className="absolute left-1/2 hidden h-full w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#2F855A] via-[#65C18C] to-[#2F855A] lg:block" />

          <div className="space-y-10 lg:space-y-16">
            {timeline.map((item, index) => (
  <motion.div
    key={item.year}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.6,
      delay: index * 0.12,
    }}
    className={`relative flex items-center ${
      index % 2 === 0
        ? "lg:flex-row"
        : "lg:flex-row-reverse"
    }`}
  >

    {/* Desktop Timeline Dot */}

    <div className="absolute left-1/2 top-1/2 z-20 hidden h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[5px] border-white bg-[#2F855A] shadow-xl lg:flex">

      <div className="h-2.5 w-2.5 rounded-full bg-white"></div>

    </div>

    {/* Card */}

    <div className="w-full lg:w-1/2 lg:px-10">

      <motion.div
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        transition={{ duration: .3 }}
        className="group mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-500 hover:border-[#2F855A] hover:shadow-2xl sm:p-6 lg:max-w-none lg:p-8"
      >

        {/* Hover Glow */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#65C18C]/0 via-[#65C18C]/5 to-[#2F855A]/0 opacity-0 transition duration-500 group-hover:opacity-100"></div>

        {/* Header */}

        <div className="relative flex items-center gap-4">

          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#EAF7F1] transition duration-500 group-hover:bg-[#2F855A] sm:h-14 sm:w-14">

            <CalendarDays
              size={24}
              className="text-[#2F855A] transition duration-500 group-hover:text-white"
            />

          </div>

          <div>

            <p className="text-lg font-bold text-[#2F855A]">

              {item.year}

            </p>

            <h3 className="text-xl font-bold text-gray-900 lg:text-2xl">

              {item.title}

            </h3>

          </div>

        </div>

        <p className="relative mt-5 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">

          {item.desc}

        </p>

      </motion.div>

    </div>
        {/* Empty Side (Desktop Only) */}

    <div className="hidden lg:block lg:w-1/2"></div>

  </motion.div>
))}

          </div>

          {/* Top Decorative Dot */}

          <div className="absolute left-1/2 top-0 hidden h-5 w-5 -translate-x-1/2 rounded-full bg-[#2F855A] shadow-[0_0_20px_rgba(47,133,90,0.45)] lg:block"></div>

          {/* Bottom Decorative Dot */}

          <div className="absolute bottom-0 left-1/2 hidden h-5 w-5 -translate-x-1/2 rounded-full bg-[#65C18C] shadow-[0_0_20px_rgba(101,193,140,0.45)] lg:block"></div>

        </div>

        {/* Floating Decorations */}

        <div className="pointer-events-none absolute left-0 top-40 hidden h-40 w-40 rounded-full bg-[#65C18C]/10 blur-[90px] lg:block"></div>

        <div className="pointer-events-none absolute right-0 bottom-40 hidden h-48 w-48 rounded-full bg-[#2F855A]/10 blur-[100px] lg:block"></div>
              </div>

      {/* Bottom Background Glow */}

      <div className="pointer-events-none absolute -bottom-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#2F855A]/10 blur-[140px]" />

      {/* Top Right Glow */}

      <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-[#65C18C]/10 blur-[130px]" />

      {/* Bottom Left Glow */}

      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#8DC63F]/10 blur-[130px]" />

    </section>
  );
}