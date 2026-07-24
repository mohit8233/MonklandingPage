import { motion } from "framer-motion";
import {
  Phone,
  Mail,
 Clock3,
  MessageCircle,
} from "lucide-react";
import Button from "../ui/Button";
const contactInfo = [
  {
    id: 1,
    icon: Phone,
    title: "Call Us",
    value: "+91 98765 43210",
    sub: "Speak directly with our experts",
    href: "tel:+919876543210",
    badge: "Available",
    color: "from-emerald-500 to-green-600",
  },
  {
    id: 2,
    icon: Mail,
    title: "Email Us",
    value: "hello@searchenginemonks.com",
    sub: "We'll respond within 24 hours",
    href: "mailto:hello@searchenginemonks.com",
    badge: "24/7",
    color: "from-violet-500 to-fuchsia-600",
  },
  {
    id: 3,
    icon: Clock3,
    title: "Working Hours",
    value: "Mon - Sat",
    sub: "10:00 AM - 7:00 PM",
    href: "#",
    badge: "Open",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: 4,
    icon: MessageCircle,
    title: "Quick Response",
    value: "< 30 Minutes",
    sub: "Average support response time",
    href: "#contact-form",
    badge: "Fast",
    color: "from-sky-500 to-cyan-500",
  },
];

export default function ContactInfoCards() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

      {/* Background Blur */}

      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-emerald-100/40 blur-[120px]" />

      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-green-100/40 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
                    <span className="inline-flex items-center rounded-full bg-emerald-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">

            Contact Information

          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">

            We're Always Ready

            <span className="block text-emerald-600">

              To Help Your Business

            </span>

          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">

            Whether you have a question, need a custom quote,
            or want to discuss your next digital project,
            our team is just one click away.

          </p>

        </motion.div>

        {/* Contact Cards */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {contactInfo.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.a
                key={item.id}
                href={item.href}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                }}
                className="group relative flex min-h-[340px] flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-emerald-300 hover:shadow-[0_25px_70px_rgba(16,185,129,0.12)]"
              >

                {/* Hover Glow */}

                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-100 blur-[90px]" />

                </div>

                {/* Badge */}

                <span className="absolute right-6 top-6 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">

                  {item.badge}

                </span>

                {/* Icon */}

                <div
                  className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-xl`}
                >

                  <Icon size={30} />

                </div>
                                {/* Content */}

                <div className="mt-7 flex flex-1 flex-col">

                  <h3 className="text-2xl font-black text-slate-900 transition-colors duration-300 group-hover:text-emerald-600">

                    {item.title}

                  </h3>

                  <p className="mt-5 break-words text-lg font-bold leading-8 text-slate-800">

                    {item.value}

                  </p>

                  <p className="mt-3 text-[15px] leading-7 text-slate-500">

                    {item.sub}

                  </p>

                  {/* Divider */}

                  <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                  {/* Bottom */}

                  <div className="mt-auto flex items-center justify-between">

                    <div>

                      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">

                        Contact Now

                      </p>

                      <p className="mt-1 text-xs text-slate-500">

                        We're happy to assist you

                      </p>

                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white transition-all duration-300 group-hover:scale-110 group-hover:border-emerald-600 group-hover:bg-emerald-600">

                      <svg
                        className="h-5 w-5 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 17L17 7M17 7H9M17 7V15"
                        />
                      </svg>

                    </div>

                  </div>

                </div>

              </motion.a>

            );

          })}
                  </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-[36px] border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-emerald-50 px-6 py-10 shadow-xl shadow-emerald-100/40 sm:px-10 lg:px-14">

            {/* Decorative Blur */}

            <div className="absolute -left-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-emerald-200/40 blur-3xl" />
            <div className="absolute -right-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-green-200/40 blur-3xl" />

            <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row">

              <div className="max-w-2xl text-center lg:text-left">

                <h3 className="text-3xl font-black text-slate-900">
                  Ready to Discuss Your Project?
                </h3>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  Whether you need SEO, Web Development, Branding,
                  Digital Marketing or AI Solutions, our experts are
                  ready to help your business grow.
                </p>

              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">

  <Button
    as="a"
    href="tel:+919876543210"
    className="rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white hover:bg-emerald-700"
  >
    Call Now
  </Button>

  <Button
    as="a"
    href="mailto:hello@searchenginemonks.com"
    variant="outline"
    className="rounded-full border-emerald-600 px-7 py-3.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-600 hover:text-white"
  >
    Send Email
  </Button>

</div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}