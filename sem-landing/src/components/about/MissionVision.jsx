import { motion } from "framer-motion";
import { Target, Eye, Gem } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower businesses with innovative digital marketing, web development, and AI-driven solutions that create measurable growth and long-term success.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become a globally trusted digital partner, helping brands transform their online presence through creativity, technology, and strategy.",
  },
  {
    icon: Gem,
    title: "Our Core Values",
    description:
      "Innovation, transparency, collaboration, and excellence are at the heart of everything we do. Every project is built with quality and trust.",
  },
];

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-[#F8FCFA] py-16 sm:py-20 lg:py-24">
      {/* Background */}
      <div className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-[#DDF7E7] opacity-60 blur-3xl sm:h-80 sm:w-80" />
      <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#BDE7CC] opacity-40 blur-3xl sm:h-80 sm:w-80" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <span className="inline-block rounded-full bg-[#E7F7ED] px-4 py-2 text-xs font-semibold tracking-wide text-[#2F855A] sm:px-5 sm:text-sm">
            OUR PURPOSE
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:mt-6 lg:text-5xl">
            Driven By{" "}
            <span className="text-[#2F855A]">
              Purpose & Innovation
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base lg:text-lg lg:leading-8">
            Everything we do is guided by our mission to create meaningful
            digital experiences and our vision to help businesses grow with
            confidence.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:border-[#2F855A] hover:shadow-xl sm:p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E7F7ED] transition-all duration-300 group-hover:bg-[#2F855A] sm:h-16 sm:w-16">
                  <Icon
                    size={26}
                    className="text-[#2F855A] transition-colors group-hover:text-white sm:h-8 sm:w-8"
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900 sm:mt-8 sm:text-2xl">
                  {card.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base sm:leading-8">
                  {card.description}
                </p>

                <div className="mt-6 h-1 w-14 rounded-full bg-[#2F855A] transition-all duration-500 group-hover:w-full sm:mt-8" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}