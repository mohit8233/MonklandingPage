import { motion } from "framer-motion";
import { FaGoogle, FaAward, FaChartLine, FaUsers } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

function GooglePartner() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#2F855A] via-[#34765F] to-[#245843] p-8 md:p-14">

          {/* Background Blur */}

          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative grid items-center gap-12 lg:grid-cols-2">

            {/* Left */}

            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3">

                <FaGoogle className="text-2xl text-red-500" />

                <span className="font-semibold text-[#555555]">
                  Google Partner Agency
                </span>

              </div>

              <h2 className="mt-8 text-4xl font-bold leading-tight text-[#555555] md:text-5xl">

                Let's Grow Your
                <span className="block">
                  Business Together
                </span>

              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-green-100">

                We create high-converting websites,
                powerful SEO campaigns and AI-powered
                marketing strategies that generate real
                business growth.

              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <button className="flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#555555] transition hover:-translate-y-1 hover:shadow-xl">

                  Get Free Consultation

                  <FiArrowRight />

                </button>

                <button className="rounded-full border border-white px-8 py-4 font-semibold text-black transition hover:bg-white hover:text-[#555555]">

                  View Portfolio

                </button>

              </div>

            </motion.div>

            {/* Right */}

            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
              className="grid gap-6 sm:grid-cols-2"
            >

              <div className="rounded-3xl bg-white p-8 shadow-xl">

                <FaAward className="text-4xl text-[#555555]" />

                <h3 className="mt-5 text-3xl font-bold">
                  10+
                </h3>

                <p className="mt-2 text-gray-600">
                  Years Experience
                </p>

              </div>

              <div className="rounded-3xl bg-white p-8 shadow-xl">

                <FaUsers className="text-4xl text-[#555555]" />

                <h3 className="mt-5 text-3xl font-bold">
                  500+
                </h3>

                <p className="mt-2 text-gray-600">
                  Happy Clients
                </p>

              </div>

              <div className="rounded-3xl bg-white p-8 shadow-xl">

                <FaChartLine className="text-4xl text-[#555555]" />

                <h3 className="mt-5 text-3xl font-bold">
                  1200+
                </h3>

                <p className="mt-2 text-gray-600">
                  Projects Completed
                </p>

              </div>

              <div className="rounded-3xl bg-white p-8 shadow-xl">

                <FaGoogle className="text-4xl text-[#555555]" />

                <h3 className="mt-5 text-3xl font-bold">
                  Certified
                </h3>

                <p className="mt-2 text-gray-600">
                  Google Partner
                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default GooglePartner;