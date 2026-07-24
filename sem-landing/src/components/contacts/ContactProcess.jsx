import { motion } from "framer-motion";
import {
  MessageSquare,
  Search,
  FileText,
  Rocket,
} from "lucide-react";
import Button from "../ui/Button";
const process = [
  {
    id: "01",
    icon: MessageSquare,
    title: "Share Your Requirements",
    description:
      "Tell us about your business, goals, challenges, and the services you're looking for.",
    color: "from-emerald-500 to-green-600",
  },
  {
    id: "02",
    icon: Search,
    title: "Free Consultation",
    description:
      "Our experts analyse your requirements and identify the best opportunities for growth.",
    color: "from-sky-500 to-cyan-500",
  },
  {
    id: "03",
    icon: FileText,
    title: "Strategy & Proposal",
    description:
      "We prepare a customised roadmap, timeline, and transparent pricing for your project.",
    color: "from-violet-500 to-fuchsia-600",
  },
  {
    id: "04",
    icon: Rocket,
    title: "Project Kickoff",
    description:
      "After approval, our team starts execution with regular updates and measurable results.",
    color: "from-orange-500 to-amber-500",
  },
];

export default function ContactProcess() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">

      {/* Background */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-emerald-100/40 blur-[140px]" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-100/40 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 min-[270px]:px-3 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
                      <span className="inline-flex items-center rounded-full bg-emerald-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">

            Our Process

          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 min-[270px]:text-3xl sm:text-4xl lg:text-5xl">

            From First Conversation

            <span className="block text-emerald-600">

              To Project Success

            </span>

          </h2>

          <p className="mt-6 text-sm leading-7 text-slate-600 min-[270px]:text-base sm:text-lg">

            We've designed a transparent and collaborative process
            that keeps you informed at every stage while delivering
            measurable business results.

          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Desktop Line */}

          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-emerald-200 via-emerald-500 to-emerald-200 lg:block" />

          <div className="space-y-10 lg:space-y-16">

            {process.map((item, index) => {

              const Icon = item.icon;

              const isEven = index % 2 === 0;

              return (

                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  className={`relative flex flex-col items-center gap-8 lg:flex-row ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >

                  {/* Content Card */}

                  <div className="w-full lg:w-[45%]">

                    <div className="group rounded-[32px] border border-slate-200 bg-white p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-[0_25px_80px_rgba(16,185,129,.15)] sm:p-8">
                                          {/* Header */}

                      <div className="flex items-start justify-between gap-4">

                        <div
                          className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-xl`}
                        >
                          <Icon size={30} />
                        </div>

                        <span className="text-5xl font-black leading-none text-slate-100 transition-all duration-300 group-hover:text-emerald-100">
                          {item.id}
                        </span>

                      </div>

                      {/* Content */}

                      <div className="mt-8">

                        <h3 className="text-2xl font-black text-slate-900 transition-colors duration-300 group-hover:text-emerald-600">

                          {item.title}

                        </h3>

                        <p className="mt-4 text-base leading-8 text-slate-600">

                          {item.description}

                        </p>

                      </div>

                    </div>

                  </div>

                  {/* Timeline Center */}

                  <div className="relative hidden lg:flex w-[10%] items-center justify-center">

                    <div className="absolute h-6 w-6 rounded-full bg-emerald-600 ring-8 ring-emerald-100 shadow-xl" />

                  </div>

                  {/* Empty Side */}

                  <div className="hidden lg:block lg:w-[45%]" />

                </motion.div>

              );

                     })}
          </div> {/* space-y-10 */}

        </div> {/* relative timeline */}

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-20 max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-[36px] border border-emerald-100 bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 px-6 py-10 shadow-[0_30px_80px_rgba(16,185,129,.22)] sm:px-10 lg:px-14">

            {/* Decorative Blur */}

            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -right-20 -bottom-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

            <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row">

              {/* Left */}

              <div className="max-w-2xl text-center lg:text-left">

                <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur">

                  Ready to Start?

                </span>

                <h3 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl">

                  Let's Turn Your Ideas Into Reality

                </h3>

                <p className="mt-5 text-base leading-8 text-emerald-50">

                  From strategy and branding to SEO, AI solutions and web
                  development, our team is ready to help your business grow
                  with measurable results.

                </p>

              </div>

              {/* Right */}

              <div className="flex flex-wrap items-center justify-center gap-4">

  <Button
  className="rounded-full !bg-white !text-emerald-700 border border-white px-8 py-6 hover:!bg-slate-100"
>
  Get Free Consultation
</Button>

  <Button
  variant="outline"
  className="rounded-full border-white !bg-transparent !text-white px-8 py-6 hover:!bg-white hover:!text-emerald-700"
>
  Call Our Experts
</Button>

</div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

