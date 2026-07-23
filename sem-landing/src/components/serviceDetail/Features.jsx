import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Features({ service }) {
  return (
    <section className="relative overflow-hidden bg-[#F8FCFA] py-16 md:py-20 lg:py-24">
      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#65C18C]/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#BCD0C5]/20 blur-[150px]" />

      <div className="container mx-auto px-5 lg:px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center lg:mb-20"
        >

          <span className="inline-flex rounded-full bg-[#65C18C]/10 px-5 py-2 text-sm font-semibold text-[#65C18C]">
            Key Features
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-[#2D2D2D] sm:text-4xl lg:mt-6 lg:text-5xl">
            What's Included In This Service
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Every service is built with a complete strategy to deliver measurable
            results for your business.
          </p>

        </motion.div>

        {/* Feature Cards */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

          {service.features.map((feature, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative flex min-h-[360px] flex-col items-center justify-center overflow-hidden rounded-[28px] border border-[#E6EFE9] bg-white p-6 text-center shadow-sm transition-all duration-500 hover:border-[#65C18C] hover:shadow-[0_25px_60px_rgba(101,193,140,.15)] sm:p-8"
            >

              {/* Number */}

              <span className="absolute left-8 top-8 hidden text-sm font-bold tracking-[3px] text-[#65C18C] md:block">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#65C18C]/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#65C18C]">

                <ArrowUpRight className="text-[#65C18C] transition group-hover:text-white" />

              </div>

              {/* Title */}

              <h3 className="mt-8 text-xl font-bold text-[#2D2D2D] lg:text-2xl">
                {feature.title}
              </h3>

              {/* Description */}

              <p className="mt-5 max-w-[300px] text-base leading-7 text-gray-600">
                {feature.description}
              </p>

              {/* Bottom Line */}

              <div className="mt-8 h-1 w-12 rounded-full bg-[#65C18C] transition-all duration-500 group-hover:w-32" />

              {/* Hover Glow */}

              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#65C18C]/10 blur-3xl transition-all duration-500 group-hover:scale-150" />

            </motion.div>

          ))}

        </div>
                {/* Bottom Banner */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 rounded-[28px] bg-[#2F855A] p-8 text-white shadow-xl sm:mt-20 sm:p-10 lg:mt-24 lg:rounded-[32px]"
        >

          <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">

            <div className="max-w-2xl">

              <h3 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                Tailored Solutions for Every Business
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                Every business is different. We customize our strategies,
                execution, and reporting to match your goals, audience, and
                industry so you get measurable long-term growth.
              </p>

            </div>

            <button className="rounded-full bg-white px-8 py-4 font-semibold text-[#2F855A] transition-all duration-300 hover:scale-105 hover:bg-[#F5F5F5]">
              Get Started
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}