import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const features = [
  "Innovation-Driven Digital Solutions",
  "Result-Focused Marketing Strategies",
  "Dedicated Team Of Experts",
];

export default function OurStory() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

      {/* Background Blur */}
      <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-[#EAF7F1] blur-3xl opacity-60"></div>
      <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#DDF7E7] blur-3xl opacity-50"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[28px] shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80&auto=format&fit=crop"
                alt="Our Story"
                className="h-[320px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[420px] md:h-[500px] lg:h-[600px]"
              />

            </div>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, scale: .8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: .3 }}
              viewport={{ once: true }}
              className="absolute bottom-4 right-4 rounded-2xl bg-[#2F855A] px-5 py-4 text-white shadow-xl sm:-bottom-6 sm:-right-6 sm:px-8 sm:py-6"
            >
              <h3 className="text-3xl font-bold sm:text-4xl">
                10+
              </h3>

              <p className="mt-1 text-sm text-white/80">
                Years Experience
              </p>
            </motion.div>

          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span className="inline-block rounded-full bg-[#EAF7F1] px-4 py-2 text-xs font-semibold tracking-wide text-[#2F855A] sm:px-5 sm:text-sm">
              OUR STORY
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:mt-6 lg:text-5xl">

              From Passion To

              <span className="block text-[#2F855A]">
                Digital Excellence
              </span>

            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base lg:mt-6 lg:text-lg lg:leading-8">

              Search Engine Monks was founded with one simple goal —
              helping businesses build a stronger digital presence
              through innovative technology, creativity and
              performance-driven marketing strategies.

              Over the years, we've partnered with startups,
              enterprises and global brands to create impactful
              digital experiences that deliver measurable growth.

            </p>
            {/* Features */}
            <div className="mt-8 space-y-4 sm:space-y-5">
              {features.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + index * 0.15,
                    duration: 0.5,
                  }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF7F1]">
                    <CheckCircle2
                      size={18}
                      className="text-[#2F855A]"
                    />
                  </div>

                  <p className="text-sm font-medium leading-7 text-gray-700 sm:text-base">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Small Description */}
            <p className="mt-8 text-sm leading-7 text-gray-600 sm:text-base lg:text-lg">
              We believe that every business deserves a strong digital
              identity. Our team combines creativity, strategy and
              technology to build experiences that inspire trust,
              increase visibility and drive measurable business growth.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Button
                as={Link}
                to="/services"
                className="w-full sm:w-auto"
              >
                Learn More
              </Button>

              <Button
                as={Link}
                to="/contact"
                variant="outline"
                className="w-full sm:w-auto"
              >
                Contact Us
              </Button>

            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3">

              <div className="rounded-2xl bg-[#F8FCFA] p-5 text-center">
                <h3 className="text-3xl font-bold text-[#2F855A] sm:text-4xl">
                  1200+
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Projects
                </p>
              </div>

              <div className="rounded-2xl bg-[#F8FCFA] p-5 text-center">
                <h3 className="text-3xl font-bold text-[#2F855A] sm:text-4xl">
                  350+
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Happy Clients
                </p>
              </div>
              <div className="rounded-2xl bg-[#F8FCFA] p-5 text-center col-span-2 sm:col-span-1">
                <h3 className="text-3xl font-bold text-[#2F855A] sm:text-4xl">
                  15+
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Countries Served
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}