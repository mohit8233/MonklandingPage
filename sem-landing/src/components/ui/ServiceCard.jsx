import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.35 }}
      className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#E5ECE8] bg-white p-5 shadow-md transition-all duration-300 hover:border-[#65C18C] hover:shadow-2xl sm:p-6 lg:p-8"
    >
      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#BCD0C5] to-[#DCEBE4] text-2xl text-[#3D3B3B] shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:from-[#65C18C] group-hover:to-[#4FAF74] group-hover:text-white sm:h-16 sm:w-16 sm:text-3xl">
        <Icon />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-xl font-bold text-[#3D3B3B] transition-colors duration-300 group-hover:text-[#65C18C] sm:mt-7 sm:text-2xl">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mt-4 flex-1 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
        {service.description}
      </p>

      {/* Bottom */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        {/* Tag */}
        <span className="max-w-full rounded-full border border-[#BCD0C5] bg-[#EEF6F2] px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-[#3D3B3B] transition-all duration-300 group-hover:border-[#65C18C] group-hover:bg-[#65C18C] group-hover:text-white sm:px-4 sm:text-xs">
          {service.tag || "Digital Solution"}
        </span>

        {/* Arrow */}
        <button
          className="group/btn flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3D3B3B] text-white transition-all duration-300 hover:scale-110 hover:bg-[#65C18C] hover:shadow-lg hover:shadow-[#65C18C]/40 sm:h-12 sm:w-12"
          aria-label="View Service"
        >
          <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover/btn:rotate-45 sm:text-xl" />
        </button>
      </div>
    </motion.div>
  );
}

export default ServiceCard;