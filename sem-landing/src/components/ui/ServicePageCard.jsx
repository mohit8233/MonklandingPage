import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { Check } from "lucide-react";

function ServicePageCard({ service, index }) {
  const Icon = service.icon;

  return (
    <Link
      to={`/services/${service.slug}`}
      className="block h-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[28px] border border-[#E5ECE8] bg-white p-6 shadow-md transition-all duration-500 hover:border-[#65C18C] hover:shadow-[0_20px_60px_rgba(101,193,140,0.18)] sm:p-7 lg:p-8"
      >
        {/* Glow */}
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#65C18C]/10 blur-3xl transition-all duration-500 group-hover:scale-150" />

        {/* Number */}
        <span className="text-xs font-bold tracking-[3px] text-[#65C18C] sm:text-sm">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Icon */}
        <div className="mt-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#BCD0C5] to-[#65C18C] text-3xl text-white shadow-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 sm:h-20 sm:w-20 sm:text-4xl">
          <Icon />
        </div>

        {/* Title */}
        <h3 className="mt-6 text-xl font-bold text-[#3D3B3B] transition-colors duration-300 group-hover:text-[#65C18C] sm:text-2xl">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-4 flex-1 text-sm leading-7 text-gray-600 sm:text-base">
          {service.description}
        </p>

        {/* Features */}
        <div className="mt-6 space-y-3">
          {[
            "Custom Strategy",
            "Expert Team",
            "Measurable Results",
          ].map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#65C18C]/10">
                <Check
                  size={14}
                  className="text-[#65C18C]"
                />
              </div>

              <span className="text-sm text-gray-700">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between gap-4 border-t border-[#EEF2EF] pt-6">
          <span className="rounded-full bg-[#EEF6F2] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#3D3B3B]">
            {service.tag || "Service"}
          </span>

          <motion.div
            whileHover={{ rotate: 45 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3D3B3B] text-white transition-all duration-300 group-hover:bg-[#65C18C] sm:h-12 sm:w-12"
          >
            <FiArrowUpRight className="text-lg sm:text-xl" />
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}

export default ServicePageCard;