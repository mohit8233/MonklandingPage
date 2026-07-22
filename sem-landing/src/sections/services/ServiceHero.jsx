import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Button from "../../components/ui/Button";
import HeroDashboard from "../../assets/images/services-hero.png";

export default function ServicesHero() {
  const features = [
    "SEO Experts",
    "AI Powered",
    "Custom Websites",
    "Marketing Strategy",
  ];

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#F8FBF8] pt-24 lg:pt-32">
      {/* Background */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#65C18C]/10 blur-[120px]" />

      <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-[#BCD0C5]/20 blur-[150px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="order-2 text-center lg:order-1 lg:text-left"
          >
            <span className="inline-flex rounded-full bg-[#65C18C]/10 px-5 py-2 text-sm font-semibold text-[#2F855A]">
              Our Services
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-[#111] sm:text-5xl lg:text-6xl xl:text-7xl">

              Digital Solutions

              <br />

              <span className="text-[#65C18C]">

                That Drive Results

              </span>

            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#555] sm:text-lg lg:mx-0">

              We create modern digital experiences that help
              businesses grow faster through SEO, Website
              Development, Branding, AI Automation and
              Performance Marketing.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

              <Button className="w-full sm:w-auto">

                Explore Services

              </Button>

              <Button
                variant="outline"
                className="w-full sm:w-auto"
              >

                Schedule Call

              </Button>

            </div>

            {/* Features */}

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">

              {features.map((item) => (

                <motion.div
                  key={item}
                  whileHover={{ x: 6 }}
                  className="flex items-center justify-center gap-3 lg:justify-start"
                >

                  <CheckCircle2
                    size={20}
                    className="text-[#65C18C]"
                  />

                  <span className="font-medium text-[#333]">

                    {item}

                  </span>

                </motion.div>

              ))}

            </div>

          </motion.div>

          {/* RIGHT SIDE START */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="order-1 relative mx-auto flex w-full max-w-[650px] justify-center lg:order-2"
          >
                        {/* Dashboard Card */}

            <div className="relative w-full rounded-[32px] border border-[#E5EFE7] bg-white p-3 shadow-[0_25px_70px_rgba(0,0,0,.08)] sm:p-5 lg:p-6">

              {/* Replace this with your dashboard image */}

              <img
                src={HeroDashboard}
                alt="SEO Dashboard"
                className="h-auto w-full rounded-3xl object-cover"
              />

            </div>

            {/* Organic Growth Card */}

            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute left-2 top-4 rounded-3xl bg-white p-4 shadow-xl sm:left-6 sm:top-10 lg:-left-12 lg:top-14"
            >

              <h3 className="text-2xl font-bold text-[#65C18C] lg:text-3xl">
                +250%
              </h3>

              <p className="mt-2 text-sm text-[#666]">
                Organic Growth
              </p>

              <div className="mt-4 h-2 w-28 overflow-hidden rounded-full bg-gray-200">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  transition={{ duration: 1.5 }}
                  className="h-full rounded-full bg-[#65C18C]"
                />

              </div>

            </motion.div>

            {/* SEO Score */}

            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute bottom-28 left-3 hidden rounded-3xl bg-white p-5 shadow-xl sm:block lg:-left-10 lg:bottom-40"
            >

              <p className="text-sm uppercase tracking-wider text-gray-500">
                SEO SCORE
              </p>

              <div className="mt-3 flex items-end gap-2">

                <h3 className="text-4xl font-bold text-[#65C18C]">
                  98%
                </h3>

                <span className="pb-1 text-xl text-green-600">
                  ↑12%
                </span>

              </div>

            </motion.div>

            {/* Happy Clients */}

            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
              className="absolute bottom-8 right-2 hidden rounded-3xl bg-white p-5 shadow-xl sm:block lg:-right-10"
            >

              <h3 className="text-3xl font-bold text-[#65C18C]">
                500+
              </h3>

              <p className="mt-2 text-[#666]">
                Happy Clients
              </p>

              <div className="mt-5 flex -space-x-2">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#65C18C] font-bold text-white">
                  A
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C9D8CF] font-bold text-[#333]">
                  B
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3D3B3B] font-bold text-white">
                  C
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF6F2] text-xl font-bold text-[#65C18C]">
                  +
                </div>

              </div>

            </motion.div>

            {/* Background Glow */}

            <div className="absolute -bottom-12 -right-12 -z-10 h-72 w-72 rounded-full bg-[#65C18C]/20 blur-[120px]" />

          </motion.div>

        </div>

      </div>

    </section>

  );
}