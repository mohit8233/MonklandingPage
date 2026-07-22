import { motion } from "framer-motion";
import {
  Search,
  ClipboardCheck,
  Rocket,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery",
    description:
      "We understand your business, competitors and goals before starting.",
    icon: Search,
  },
  {
    id: "02",
    title: "Strategy",
    description:
      "A complete roadmap is prepared for SEO, branding and marketing.",
    icon: ClipboardCheck,
  },
  {
    id: "03",
    title: "Execution",
    description:
      "Our experts build, optimize and launch high-performance solutions.",
    icon: Rocket,
  },
  {
    id: "04",
    title: "Growth",
    description:
      "Continuous improvements and optimization to maximize business growth.",
    icon: TrendingUp,
  },
];

export default function ServiceProcess() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">

      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#65C18C]/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#BCD0C5]/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity:0,y:30 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.6 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="rounded-full bg-[#65C18C]/10 px-5 py-2 text-sm font-semibold text-[#2F855A]">
            OUR PROCESS
          </span>

          <h2 className="mt-6 text-3xl font-bold text-[#222] sm:text-4xl lg:text-5xl">
            How We Deliver
            <span className="block text-[#65C18C]">
              Exceptional Results
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our streamlined workflow ensures every project is delivered
            with strategy, creativity and measurable business growth.
          </p>

        </motion.div>

        <div className="mt-20 space-y-12">
                      {steps.map((step, index) => {
            const Icon = step.icon;

            return (

              <motion.div
                key={step.id}
                initial={{ opacity:0, y:40 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay:index*.15 }}
                className={`flex flex-col items-center gap-8 lg:flex-row ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >

                <div className="flex-1">

                  <div className="rounded-3xl border border-[#E7EFE9] bg-[#F8FBF8] p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                    <div className="mb-6 flex items-center gap-5">

                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#65C18C]/10">
                        <Icon className="text-[#65C18C]" size={30}/>
                      </div>

                      <span className="text-5xl font-extrabold text-[#65C18C]/20">
                        {step.id}
                      </span>

                    </div>

                    <h3 className="text-2xl font-bold text-[#222]">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-8 text-gray-600">
                      {step.description}
                    </p>

                  </div>

                </div>

                <div className="hidden lg:flex items-center justify-center">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#65C18C] text-white shadow-lg">

                    ↓

                  </div>

                </div>

                <div className="flex-1" />

              </motion.div>

            );
          })}

        </div>

      </div>

    </section>
  );
}