import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

function FeatureCard({ title, description }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{ duration: 0.3 }}
      className="group h-full rounded-2xl border border-[#E5EEE8] bg-[#F7FBF8] p-4 transition-all duration-300 hover:border-[#65C18C] hover:bg-white hover:shadow-xl"
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#BCD0C5] transition-all duration-300 group-hover:bg-[#65C18C]">
          <FaCheckCircle className="text-lg text-[#3D3B3B] transition-all duration-300 group-hover:text-white" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-base font-semibold text-[#3D3B3B] transition-colors duration-300 group-hover:text-[#65C18C] sm:text-lg">
            {title}
          </h3>

          <p className="mt-2 text-[13px] leading-6 text-gray-600 sm:text-sm">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-5 h-[2px] w-0 rounded-full bg-[#65C18C] transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}

export default FeatureCard;