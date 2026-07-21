import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function Button({
  children,
  className = "",
  type = "button",
  onClick,
  disabled = false,
  showArrow = true,
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.04,
        y: -3,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        duration: 0.25,
      }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group relative overflow-hidden rounded-full bg-[#65C18C] px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-[0_15px_40px_rgba(101,193,140,0.45)] disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
    >
      {/* Animated Shine */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      {/* Ripple */}
      <span className="absolute left-1/2 top-1/2 h-0 w-0 rounded-full bg-white/20 transition-all duration-500 group-hover:h-[300px] group-hover:w-[300px] group-hover:-translate-x-1/2 group-hover:-translate-y-1/2" />

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-3">
        {children}

        {showArrow && (
          <FaArrowRight className="transition-all duration-300 group-hover:translate-x-2 group-hover:rotate-[-15deg]" />
        )}
      </span>
    </motion.button>
  );
}

export default Button;