import { motion } from "framer-motion";

function StatCard({ number, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-green-100 bg-white p-8 shadow-md hover:shadow-2xl"
    >
      <h2 className="text-4xl font-extrabold text-[#555555] lg:text-5xl">
        {number}
      </h2>

      <h3 className="mt-4 text-xl font-bold text-[#555555]">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-gray-600">
        {description}
      </p>
    </motion.div>
  );
}

export default StatCard;