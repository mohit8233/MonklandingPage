import { motion } from "framer-motion";
import testimonials from "../data/testimonials";
import TestimonialCard from "../components/ui/TestimonialCard";

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#F7FBF8] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-[#BCD0C5] px-5 py-2 text-sm font-semibold text-[#3D3B3B]">
            TESTIMONIALS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#3D3B3B] md:text-5xl">
            What Our
            <span className="text-[#65C18C]">
              {" "}Clients Say
            </span>
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Businesses trust Search Engine Monks to deliver measurable
            results through SEO, Web Development and AI Solutions.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
              }}
            >
              <TestimonialCard testimonial={item} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;