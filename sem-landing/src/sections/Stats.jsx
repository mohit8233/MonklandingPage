import { motion } from "framer-motion";
import StatCard from "../components/ui/StatCard";

const stats = [
  {
    number: "500+",
    title: "Happy Clients",
    description: "Businesses trust us for long-term digital growth.",
  },
  {
    number: "1200+",
    title: "Projects Completed",
    description: "Successfully delivered websites and marketing campaigns.",
  },
  {
    number: "10+",
    title: "Years Experience",
    description: "Professional expertise in SEO, branding and development.",
  },
  {
    number: "98%",
    title: "Client Satisfaction",
    description: "High-quality service with measurable business results.",
  },
];

function Stats() {
  return (
    <section className="bg-white py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#555555]">
            OUR ACHIEVEMENTS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#555555] md:text-5xl">
            Numbers That
            <span className="block text-[#555555]">
              Speak For Themselves
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            We focus on delivering measurable results that help businesses
            grow faster and stay ahead of the competition.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <StatCard
              key={index}
              number={item.number}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stats;