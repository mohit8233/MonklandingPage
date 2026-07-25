import { motion } from "framer-motion";
import { ShieldCheck, Rocket, BarChart3 } from "lucide-react";

export default function AuthLayout({
  title,
  subtitle,
  children,
}) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F6FAF7]">

      <div className="grid min-h-screen lg:grid-cols-2">

        {/* ================= LEFT ================= */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative hidden overflow-hidden lg:flex"
        >
          {/* Background */}

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1800&auto=format&fit=crop"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-br from-[#14532D]/95 via-[#166534]/90 to-[#22C55E]/80" />

          {/* Decorative Blur */}

          <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />

          <div className="relative z-10 flex h-full flex-col justify-between p-12 xl:p-16 text-white">

            {/* Logo */}

            <div>

              <h2 className="text-3xl font-black tracking-wide xl:text-4xl">
                Search Engine Monks
              </h2>

              <p className="mt-5 max-w-lg text-lg leading-8 text-white/90">
                Helping businesses grow with SEO, AI,
                Branding, Web Development and Digital
                Marketing solutions.
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

            {/* Bottom Stats */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .7 }}
              className="grid grid-cols-3 gap-5"
            >
              <Stat number="250+" label="Projects" />
              <Stat number="98%" label="Success" />
              <Stat number="24/7" label="Support" />
            </motion.div>

          </div>

        </motion.div>
                {/* ================= RIGHT ================= */}

        <div className="flex min-h-screen items-center justify-center px-2 py-4 min-[280px]:px-3 min-[320px]:px-4 min-[360px]:px-5 sm:px-8 sm:py-8">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              w-full
              max-w-md
              rounded-2xl
              border
              border-white/50
              bg-white/95
              p-3
              shadow-2xl
              backdrop-blur-xl

              min-[280px]:p-4
              min-[320px]:rounded-3xl
              min-[320px]:p-5
              min-[360px]:p-6
              sm:max-w-lg
              sm:p-8
              lg:max-w-xl
              lg:rounded-[34px]
              lg:p-10
            "
          >

            {/* Mobile Hero */}

            <div className="mb-5 rounded-2xl bg-gradient-to-r from-[#166534] to-[#22C55E] p-4 text-white min-[320px]:mb-6 min-[320px]:rounded-3xl min-[320px]:p-5 min-[360px]:p-6 lg:hidden">

              <h2 className="break-words text-lg font-bold min-[320px]:text-xl min-[360px]:text-2xl">
                Search Engine Monks
              </h2>

              <p className="mt-2 text-xs leading-6 text-white/90 min-[320px]:text-sm">
                Smart SEO • AI • Marketing • Web Development
              </p>

            </div>

            {/* Heading */}

            <div className="mb-6 min-[320px]:mb-8">

              <h1 className="break-words text-2xl font-black leading-tight text-slate-900 min-[320px]:text-3xl min-[360px]:text-[34px] sm:text-4xl">

                {title}

              </h1>

              <p className="mt-3 break-words text-sm leading-6 text-slate-500 min-[320px]:text-[15px] min-[320px]:leading-7">

                {subtitle}

              </p>

            </div>

            {/* Form */}

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
    <motion.div
      whileHover={{
        x: 6,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        flex
        items-start
        gap-3
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-3
        backdrop-blur-md

        xl:p-4
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-2xl
          bg-white/10

          xl:h-14
          xl:w-14
        "
      >
        {icon}
      </div>

      {/* Content */}

      <div className="min-w-0 flex-1">

        <h3
          className="
            break-words
            text-base
            font-bold

            xl:text-xl
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-1
            break-words
            text-sm
            leading-6
            text-white/80

            xl:mt-2
            xl:text-base
          "
        >
          {desc}
        </p>

      </div>

    </motion.div>
  );
}
function Stat({
  number,
  label,
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        rounded-2xl
        border
        border-white/20
        bg-white/10
        p-3
        text-center
        backdrop-blur-md

        xl:rounded-3xl
        xl:p-6
      "
    >
      <h3
        className="
          text-xl
          font-black
          leading-none

          xl:text-3xl
        "
      >
        {number}
      </h3>

      <p
        className="
          mt-2
          break-words
          text-xs
          text-white/80

          xl:text-base
        "
      >
        {label}
      </p>
    </motion.div>
  );
}