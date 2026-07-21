import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#F8FBF9] py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <span className="rounded-full bg-green-100 px-4 py-2 text-xs font-semibold tracking-wide text-[#555555] sm:text-sm">
            CONTACT US
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#555555] sm:text-4xl lg:text-5xl">
            Let's Start Your
            <span className="block">
              Next Project
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Ready to grow your business? Fill out the form and our experts
            will contact you shortly.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-[#555555] p-6 text-white sm:p-8 lg:p-10"
          >
            <h3 className="text-2xl font-bold sm:text-3xl">
              Contact Information
            </h3>

            <p className="mt-4 leading-7 text-gray-300">
              We'd love to hear about your project. Reach out through any
              of the methods below.
            </p>

            <div className="mt-8 space-y-6">

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <FaEnvelope size={20} />
                </div>

                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="break-all text-gray-300">
                    hello@searchenginemonks.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <FaPhoneAlt size={20} />
                </div>

                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-300">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <FaMapMarkerAlt size={20} />
                </div>

                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-300">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white p-6 shadow-xl sm:p-8 lg:p-10"
          >

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#65C18C]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#65C18C]"
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
              className="mt-5 w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#65C18C]"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="mt-5 w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-[#65C18C]"
            />

            <button
              className="mt-6 w-full rounded-full bg-[#BCD0C5] py-4 text-base font-semibold text-[#555555] transition hover:bg-[#a9c3b4] sm:text-lg"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;