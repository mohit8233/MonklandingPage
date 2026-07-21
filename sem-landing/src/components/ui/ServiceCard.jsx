import { motion } from "framer-motion";

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{ duration: 0.3 }}
      className="group rounded-3xl border border-green-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-2xl"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2F855A] text-2xl text-[#555555] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
        <Icon />
      </div>

      <h3 className="mb-4 text-2xl font-bold text-[#555555]">
        {service.title}
      </h3>

      <p className="leading-7 text-gray-600">
        {service.description}
      </p>

      <button className="mt-6 font-semibold text-[#555555] transition hover:translate-x-2">
        Learn More →
      </button>
    </motion.div>
  );
}

export default ServiceCard;