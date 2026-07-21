
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
      className="bg-[#F8FBF9] py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-[#555555]">
            CONTACT US
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#555555] md:text-5xl">
            Let's Start Your
            <span className="block text-[#555555]">
              Next Project
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Ready to grow your business? Fill out the form and our experts
            will contact you shortly.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] bg-[#555555] p-10 text-gray-300"
          >
            <h3 className="text-3xl font-bold">
              Contact Information
            </h3>

            <p className="mt-5 leading-8 text-green-100">
              We'd love to hear about your project. Reach out through any
              of the methods below.
            </p>

            <div className="mt-10 space-y-8">

              <div className="flex items-center gap-5">
                <div className="rounded-xl bg-white/10 p-4">
                  <FaEnvelope size={22} />
                </div>

                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-green-100">
                    hello@searchenginemonks.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="rounded-xl bg-white/10 p-4">
                  <FaPhoneAlt size={22} />
                </div>

                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-green-100">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="rounded-xl bg-white/10 p-4">
                  <FaMapMarkerAlt size={22} />
                </div>

                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-green-100">
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
            className="rounded-[32px] bg-white p-10 shadow-xl"
          >

            <div className="grid gap-6 sm:grid-cols-2">

              <input
                type="text"
                placeholder="Your Name"
                className="rounded-xl border p-4 outline-none focus:border-[#2F855A]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-xl border p-4 outline-none focus:border-[#2F855A]"
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
              className="mt-6 w-full rounded-xl border p-4 outline-none focus:border-[#2F855A]"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="mt-6 w-full rounded-xl border p-4 outline-none focus:border-[#2F855A]"
            ></textarea>

            <button
              className="mt-8 w-full rounded-full bg-[#BCD0C5] py-4 text-lg font-semibold text-[#555555] transition hover:bg-[#5555]"
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