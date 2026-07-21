import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-3xl border border-[#DCEBE4] bg-white p-7 shadow-lg transition-all duration-300 hover:border-[#65C18C] hover:shadow-2xl"
    >
      {/* Glow */}
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#BCD0C5]/30 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100"></div>

      {/* Stars */}
      <div className="mb-5 flex gap-1 text-[#F4B400]">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      {/* Review */}
      <p className="text-gray-600 leading-7 italic">
        "{testimonial.review}"
      </p>

      {/* User */}
      <div className="mt-8 flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-16 w-16 rounded-full border-4 border-[#BCD0C5] object-cover"
        />

        <div>
          <h4 className="font-bold text-[#3D3B3B]">
            {testimonial.name}
          </h4>

          <p className="text-sm text-[#65C18C]">
            {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;