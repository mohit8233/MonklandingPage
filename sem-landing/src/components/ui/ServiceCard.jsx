import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <Link
      to={`/services/${service.slug}`}
      className="block h-full"
    >
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
          <Icon size={32} />
        </div>

        {/* Title */}
        <h3 className="mt-6 text-xl font-bold text-[#3D3B3B] transition-colors duration-300 group-hover:text-[#65C18C] sm:text-2xl">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-4 flex-1 text-sm leading-7 text-gray-600 sm:text-base">
          {service.description}
        </p>

        {/* Bottom */}
        <div className="mt-8 flex items-center justify-between border-t border-[#EEF2EF] pt-6">
          <span className="rounded-full border border-[#BCD0C5] bg-[#EEF6F2] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#3D3B3B] transition-all duration-300 group-hover:border-[#65C18C] group-hover:bg-[#65C18C] group-hover:text-white">
            {service.tag || "Digital Solution"}
          </span>

          {/* Arrow */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3D3B3B] text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45 group-hover:bg-[#65C18C] group-hover:shadow-lg group-hover:shadow-[#65C18C]/30">
            <FiArrowUpRight className="text-xl" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default ServiceCard;