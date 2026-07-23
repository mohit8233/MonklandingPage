import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

const timeline = [
  {
    year: "2018",
    title: "Company Founded",
    desc: "Started with a vision to help businesses grow through modern digital marketing and web solutions.",
  },
  {
    year: "2019",
    title: "100+ Happy Clients",
    desc: "Successfully delivered projects for startups and local businesses across multiple industries.",
  },
  {
    year: "2021",
    title: "Global Expansion",
    desc: "Expanded services internationally with clients from Canada, USA, UK and Australia.",
  },
  {
    year: "2023",
    title: "AI Solutions Launch",
    desc: "Introduced AI-powered automation, content generation and smart marketing services.",
  },
  {
    year: "2026",
    title: "1200+ Projects Delivered",
    desc: "Built a trusted digital agency with long-term partnerships and measurable business growth.",
  },
];

export default function CompanyTimeline() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-20"
        >
          <span className="text-[#2F855A] font-semibold uppercase tracking-[4px]">
            Our Journey
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900">
            Milestones That
            <span className="text-[#2F855A]"> Define Us</span>
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-8">
            Every milestone reflects our commitment to innovation,
            creativity and delivering measurable results for businesses.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#2F855A] via-[#8DC63F] to-[#2F855A]" />

          <div className="space-y-20">

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .6,
                  delay: index * .1,
                }}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                }`}
              >

                {/* Card */}
                <div className="lg:w-1/2 px-6">

                  <div className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:border-[#2F855A] transition duration-500">

                    <div className="flex items-center gap-4 mb-5">

                      <div className="h-14 w-14 rounded-full bg-[#EAF7F1] flex items-center justify-center group-hover:bg-[#2F855A] transition">

                        <CalendarDays
                          className="text-[#2F855A] group-hover:text-white"
                          size={26}
                        />

                      </div>

                      <div>

                        <p className="text-[#2F855A] font-bold text-xl">
                          {item.year}
                        </p>

                        <h3 className="font-bold text-2xl text-gray-900">
                          {item.title}
                        </h3>

                      </div>

                    </div>

                    <p className="text-gray-600 leading-8">
                      {item.desc}
                    </p>

                  </div>

                </div>

                {/* Center Circle */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-[#2F855A] border-[6px] border-white shadow-lg items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>

                {/* Empty Side */}
                <div className="lg:w-1/2"></div>

              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}