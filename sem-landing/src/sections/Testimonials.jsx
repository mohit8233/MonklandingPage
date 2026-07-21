import { motion } from "framer-motion";
import testimonials from "../data/testimonials";
import TestimonialCard from "../components/ui/TestimonialCard";

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#EAF5EF] py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#555555]">
            TESTIMONIALS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#555555] md:text-5xl">
            What Our
            <span className="block text-[#555555]">
              Clients Say
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            We’ve helped hundreds of businesses grow online through
            SEO, web development, branding and digital marketing.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              testimonial={item}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;