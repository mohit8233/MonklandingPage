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
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        group
        relative
        inline-flex
        w-fit
        max-w-full
        items-center
        justify-center
        overflow-hidden
        rounded-full
        bg-[#65C18C]
        px-5
        py-3
        text-sm
        font-semibold
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:shadow-[0_15px_40px_rgba(101,193,140,0.45)]
        sm:px-7
        sm:py-3.5
        sm:text-base
        disabled:cursor-not-allowed
        disabled:opacity-70
        ${className}
      `}
    >
      {/* Shine */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      {/* Ripple */}
      <span className="absolute left-1/2 top-1/2 h-0 w-0 rounded-full bg-white/20 transition-all duration-500 group-hover:h-[320px] group-hover:w-[320px] group-hover:-translate-x-1/2 group-hover:-translate-y-1/2" />

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
        <span className="whitespace-nowrap">
          {children}
        </span>

        {showArrow && (
          <FaArrowRight className="shrink-0 transition-all duration-300 group-hover:translate-x-1.5 group-hover:-rotate-12" />
        )}
      </span>
    </motion.button>
  );
}

export default Button;