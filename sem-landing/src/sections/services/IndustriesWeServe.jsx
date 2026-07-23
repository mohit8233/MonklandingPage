import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaHospital,
  FaHome,
  FaGraduationCap,
  FaUniversity,
  FaUtensils,
  FaRocket,
  FaIndustry,
} from "react-icons/fa";

const industries = [
  {
    icon: FaShoppingCart,
    title: "E-commerce",
    desc: "Boost online sales with SEO, paid advertising, and high-converting websites.",
  },
  {
    icon: FaHospital,
    title: "Healthcare",
    desc: "Reach more patients through digital marketing and professional web solutions.",
  },
  {
    icon: FaHome,
    title: "Real Estate",
    desc: "Generate quality property leads with targeted campaigns and SEO.",
  },
  {
    icon: FaGraduationCap,
    title: "Education",
    desc: "Help institutions attract students with engaging online experiences.",
  },
  {
    icon: FaUniversity,
    title: "Finance",
    desc: "Build trust and grow your financial brand with secure digital strategies.",
  },
  {
    icon: FaUtensils,
    title: "Restaurants",
    desc: "Increase bookings and local visibility with smart marketing solutions.",
  },
  {
    icon: FaRocket,
    title: "Startups",
    desc: "Launch and scale your startup with branding, development, and AI.",
  },
  {
    icon: FaIndustry,
    title: "Manufacturing",
    desc: "Strengthen your B2B presence with modern websites and SEO.",
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-[#BCD0C5]/30 text-[#2F855A] font-semibold text-sm">
            Industries We Serve
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-[#1F2937]">
            Helping Businesses Across Every Industry
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            Every industry has unique challenges. Our tailored digital
            strategies help businesses grow, attract customers, and achieve
            measurable success.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {industries.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative rounded-3xl border border-gray-200 bg-white p-7 overflow-hidden transition-all duration-300 hover:border-[#2F855A]/40 hover:shadow-xl"
              >

                {/* Top Border */}

                <div className="absolute left-0 top-0 h-1 w-0 bg-[#2F855A] transition-all duration-500 group-hover:w-full"></div>

                {/* Icon */}

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#BCD0C5]/30 text-[#2F855A] text-3xl transition group-hover:rotate-6 group-hover:scale-110">

                  <Icon />

                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.desc}
                </p>

              </motion.div>

            );
          })}
        </div>
      </div>
    </section>
  );
}