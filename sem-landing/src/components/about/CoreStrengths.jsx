import { motion } from "framer-motion";
import {
  Search,
  Bot,
  Palette,
  Globe,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const strengths = [
  {
    icon: Search,
    title: "SEO Excellence",
    description:
      "Data-driven SEO strategies that improve rankings, traffic, and long-term online visibility.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Leverage AI tools to automate workflows, optimize campaigns, and increase productivity.",
  },
  {
    icon: Palette,
    title: "Creative Branding",
    description:
      "Build memorable brand identities with modern design systems and compelling visuals.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Responsive, scalable, and high-performance websites tailored to your business goals.",
  },
  {
    icon: BarChart3,
    title: "Performance Marketing",
    description:
      "Run result-oriented Google & Meta ad campaigns that maximize ROI and conversions.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Partnership",
    description:
      "Transparent communication, measurable results, and long-term client relationships.",
  },
];

export default function CoreStrengths() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#F8FCFA] to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-[#EAF7F1] px-4 py-2 text-sm font-semibold text-[#2F855A]">
            WHY WE STAND OUT
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900">
            Our Core
            <span className="text-[#2F855A]"> Strengths</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 leading-8">
            We combine creativity, technology, and strategic thinking to
            deliver impactful digital experiences that help businesses grow.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:border-[#2F855A] hover:shadow-2xl"
              >
                {/* Background Circle */}
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#EAF7F1] transition-all duration-500 group-hover:scale-150" />

                {/* Icon */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2F855A] text-white shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#2F855A] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.4 }}
  className="mt-16 grid grid-cols-1 gap-5 rounded-3xl bg-[#2F855A] p-6 text-center text-white min-[380px]:grid-cols-2 sm:gap-6 sm:p-8 lg:mt-20 lg:grid-cols-4 lg:p-10"
>
  {[
    ["1200+", "Projects Delivered"],
    ["350+", "Happy Clients"],
    ["25+", "Experts"],
    ["10+", "Years Experience"],
  ].map(([value, label]) => (
    <div
      key={label}
      className="rounded-2xl bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
    >
      <h3 className="text-3xl font-bold sm:text-4xl">
        {value}
      </h3>

      <p className="mt-2 text-sm text-white/80 sm:text-base">
        {label}
      </p>
    </div>
  ))}
</motion.div>
      </div>
    </section>
  );
}