import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Process({ service }) {
  return (
    <section className="relative overflow-hidden bg-[#F8FCFA] py-16 md:py-20 lg:py-24">
      {/* Background Blur */}

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#65C18C]/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#BCD0C5]/20 blur-[140px]" />

      <div className="container mx-auto px-5 lg:px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center lg:mb-20"
        >

          <span className="inline-flex rounded-full bg-[#65C18C]/10 px-5 py-2 text-sm font-semibold text-[#65C18C]">
            Our Process
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-[#2D2D2D] sm:text-4xl lg:mt-6 lg:text-5xl">
            Simple Process, Powerful Results
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            We follow a proven workflow that keeps every project organized,
            transparent, and focused on delivering measurable business growth.
          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative mx-auto max-w-5xl">

          {/* Center Line */}

          <div className="absolute left-8 top-0 hidden h-full w-1 rounded-full bg-[#65C18C]/20 lg:block" />

          <div className="space-y-8 lg:space-y-12">

            {service.process.map((step, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                className="relative flex flex-col gap-5 lg:flex-row lg:items-start"
              >

                {/* Number */}

                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center self-center rounded-full bg-[#65C18C] text-lg font-bold text-white shadow-xl sm:h-16 sm:w-16 sm:text-xl lg:self-start">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Card */}

                <div className="group flex-1 rounded-[24px] border border-[#E7EFEA] bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#65C18C] hover:shadow-[0_20px_60px_rgba(101,193,140,.15)] sm:rounded-[30px] sm:p-8">

                  <div className="flex flex-col gap-6 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">

                    <div className="flex-1">

                      <h3 className="text-xl font-bold text-[#2D2D2D] sm:text-2xl">
                        {step.title}
                      </h3>

                      <p className="mt-4 text-base leading-7 text-gray-600 sm:leading-8">
                        {step.description}
                      </p>

                    </div>

                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#65C18C]/10 transition-all duration-300 group-hover:bg-[#65C18C] lg:mx-0">

                      <ArrowRight className="text-[#65C18C] transition group-hover:translate-x-1 group-hover:text-white" />

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>
                {/* Bottom CTA Box */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[28px] bg-white p-6 shadow-xl sm:mt-20 sm:p-8 lg:mt-24 lg:rounded-[36px] lg:p-10"
        >

          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* Left */}

            <div className="text-center lg:text-left">

              <span className="inline-flex rounded-full bg-[#65C18C]/10 px-4 py-2 text-sm font-semibold text-[#65C18C]">
                Why Our Process Works
              </span>

              <h3 className="mt-5 text-3xl font-black leading-tight text-[#2D2D2D] sm:text-4xl">
                Every Step Is Built Around Your Success
              </h3>

              <p className="mt-5 text-base leading-7 text-gray-600 sm:leading-8">
                From research and planning to execution and optimization,
                we ensure every stage delivers maximum value and measurable
                results for your business.
              </p>

            </div>

            {/* Right */}

           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">

              <div className="rounded-3xl bg-[#F8FCFA] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6">

                <h4 className="text-3xl font-black text-[#65C18C] sm:text-4xl">
                  100%
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                  Transparent Workflow
                </p>

              </div>

              <div className="rounded-3xl bg-[#F8FCFA] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6">

                <h4 className="text-3xl font-black text-[#65C18C] sm:text-4xl">
                  24/7
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                  Communication
                </p>

              </div>

              <div className="rounded-3xl bg-[#F8FCFA] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6">

                <h4 className="text-3xl font-black text-[#65C18C] sm:text-4xl">
                  Fast
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                  Delivery
                </p>

              </div>

              <div className="rounded-3xl bg-[#F8FCFA] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6">

                <h4 className="text-3xl font-black text-[#65C18C] sm:text-4xl">
                  ROI
                </h4>

                <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                  Focused Strategy
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}