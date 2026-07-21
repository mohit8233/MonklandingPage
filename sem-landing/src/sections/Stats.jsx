import { motion } from "framer-motion";
import {
  Users,
  FolderKanban,
  Award,
  Star,
} from "lucide-react";

import StatCard from "../components/ui/StatCard";

const stats = [
  {
    number: "500+",
    title: "Happy Clients",
    description:
      "Businesses trust us for long-term digital growth.",
    icon: Users,
  },
  {
    number: "1200+",
    title: "Projects Completed",
    description:
      "Successfully delivered websites and marketing campaigns.",
    icon: FolderKanban,
  },
  {
    number: "10+",
    title: "Years Experience",
    description:
      "Professional expertise in SEO, branding and development.",
    icon: Award,
  },
  {
    number: "98%",
    title: "Client Satisfaction",
    description:
      "High-quality service with measurable business results.",
    icon: Star,
  },
];

function Stats() {
  return (
    <section
      id="stats"
      className="relative overflow-hidden bg-[#F7FBF8] py-20"
    >
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#BCD0C5]/30 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#65C18C]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#555555] shadow">
            OUR ACHIEVEMENTS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#555555] md:text-5xl">
            Numbers That
            <span className="block">Speak For Themselves</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            We focus on delivering measurable results that help businesses
            grow faster and stay ahead of the competition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              <StatCard
                number={item.number}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;