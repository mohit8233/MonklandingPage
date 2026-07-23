import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaUsers,
  FaChartLine,
  FaRocket,
  FaShieldAlt,
  FaSyncAlt,
} from "react-icons/fa";

const methodology = [
  {
    icon: FaLightbulb,
    title: "Strategy First",
    description:
      "Every project starts with in-depth research, market analysis, and a clear growth roadmap.",
  },
  {
    icon: FaUsers,
    title: "Client Collaboration",
    description:
      "We work closely with you at every stage to ensure transparency and aligned goals.",
  },
  {
    icon: FaChartLine,
    title: "Data-Driven Decisions",
    description:
      "Every campaign and solution is backed by analytics, insights, and measurable performance.",
  },
  {
    icon: FaRocket,
    title: "Fast Execution",
    description:
      "Our agile workflow helps deliver high-quality solutions quickly without compromising quality.",
  },
  {
    icon: FaShieldAlt,
    title: "Quality Assurance",
    description:
      "Every website, campaign, and solution goes through thorough testing before delivery.",
  },
  {
    icon: FaSyncAlt,
    title: "Continuous Optimization",
    description:
      "We continuously monitor, improve, and optimize to maximize long-term business growth.",
  },
];

export default function WorkMethodology() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-[#BCD0C5]/30 text-[#2F855A] font-semibold">
            Our Work Methodology
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            How We Deliver Consistent Results
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            Our methodology combines strategy, collaboration, innovation, and
            continuous optimization to help businesses achieve sustainable
            digital growth.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {methodology.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group rounded-3xl bg-white border border-gray-200 p-8 shadow-sm hover:shadow-xl hover:border-[#2F855A]/30 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#BCD0C5]/30 flex items-center justify-center text-3xl text-[#2F855A] mb-6 group-hover:rotate-6 transition">
                  <Icon />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.description}
                </p>
              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}