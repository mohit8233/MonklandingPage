import { motion } from "framer-motion";
import { ShieldCheck, Rocket, BarChart3 } from "lucide-react";

export default function AuthLayout({
  title,
  subtitle,
  children,
}) {
  return (
    <div className="min-h-screen bg-[#F6FAF7]">

      <div className="grid min-h-screen lg:grid-cols-2">

        {/* ================= LEFT ================= */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="relative hidden overflow-hidden lg:flex"
        >

          {/* Background Image */}

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1800&auto=format&fit=crop"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-br from-[#14532D]/95 via-[#166534]/90 to-[#22C55E]/80" />

          {/* Blur */}

          <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />

          <div className="relative z-10 flex flex-col justify-between p-14 text-white">

            {/* Logo */}

            <div>

              <h2 className="text-3xl font-black tracking-wide">
                Search Engine Monks
              </h2>

              <p className="mt-4 max-w-lg text-lg leading-8 text-white/90">

                Helping businesses grow with
                SEO, AI, Branding, Web Development
                and Digital Marketing solutions.

              </p>

            </div>

            {/* Features */}

            <div className="space-y-6">

              <Feature
                icon={<Rocket size={26} />}
                title="High Performance"
                desc="Fast websites built for conversions."
              />

              <Feature
                icon={<BarChart3 size={26} />}
                title="SEO Optimized"
                desc="Rank better with proven SEO strategies."
              />

              <Feature
                icon={<ShieldCheck size={26} />}
                title="Trusted Agency"
                desc="Secure client portal and project management."
              />

            </div>

            {/* Bottom */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .7 }}
              className="grid grid-cols-3 gap-5"
            >

              <Stat
                number="250+"
                label="Projects"
              />

              <Stat
                number="98%"
                label="Success"
              />

              <Stat
                number="24/7"
                label="Support"
              />

            </motion.div>

          </div>

        </motion.div>

        {/* ================= RIGHT ================= */}

        <div className="flex items-center justify-center px-5 py-10 sm:px-8">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            className="w-full max-w-xl rounded-[34px] border border-white/40 bg-white/90 p-8 shadow-2xl backdrop-blur-xl sm:p-10"
          >

            {/* Mobile Hero */}

            <div className="mb-8 rounded-3xl bg-gradient-to-r from-[#166534] to-[#22C55E] p-7 text-white lg:hidden">

              <h2 className="text-2xl font-bold">
                Search Engine Monks
              </h2>

              <p className="mt-3 text-white/90">

                Smart SEO • AI • Marketing •
                Web Development

              </p>

            </div>

            <div className="mb-10">

              <h1 className="text-4xl font-black text-slate-900">

                {title}

              </h1>

              <p className="mt-3 leading-7 text-slate-500">

                {subtitle}

              </p>

            </div>

            {children}

          </motion.div>

        </div>

      </div>

    </div>
  );
}

function Feature({
  icon,
  title,
  desc,
}) {
  return (
    <div className="flex gap-5">

      <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md">

        {icon}

      </div>

      <div>

        <h3 className="text-xl font-bold">

          {title}

        </h3>

        <p className="mt-2 text-white/80">

          {desc}

        </p>

      </div>

    </div>
  );
}

function Stat({
  number,
  label,
}) {
  return (
    <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-md">

      <h3 className="text-3xl font-black">

        {number}

      </h3>

      <p className="mt-2 text-white/80">

        {label}

      </p>

    </div>
  );
}