import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

function FeatureCard({ title, description }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl bg-white p-6 shadow-lg hover:shadow-2xl transition-all"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2F855A] text-[#555555]">
          <FaCheckCircle />
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#555555]">
            {title}
          </h3>

          <p className="mt-2 text-gray-600 leading-7">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default FeatureCard;