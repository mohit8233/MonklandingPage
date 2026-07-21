import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl"
    >
      {/* Rating */}

      <div className="mb-5 flex gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400" />
        ))}
      </div>

      {/* Review */}

      <p className="leading-8 text-gray-600">
        "{testimonial.review}"
      </p>

      {/* User */}

      <div className="mt-8 flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-16 w-16 rounded-full object-cover"
        />

        <div>
          <h3 className="font-bold text-[#555555]">
            {testimonial.name}
          </h3>

          <p className="text-sm text-gray-500">
            {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;