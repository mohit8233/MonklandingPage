import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

function Button({
  children,
  className = "",
  type = "button",
  onClick,
  disabled = false,
  showArrow = true,
  variant = "primary",
}) {
  const ref = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 180,
    damping: 18,
  });

  const y = useSpring(mouseY, {
    stiffness: 180,
    damping: 18,
  });
  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;

    const rect = ref.current.getBoundingClientRect();

    const xPos = e.clientX - rect.left - rect.width / 2;
    const yPos = e.clientY - rect.top - rect.height / 2;

    mouseX.set(xPos * 0.25);
    mouseY.set(yPos * 0.25);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  return (
    <motion.button
      ref={ref}
      style={{
        x,
        y,
      }}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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
        
        px-5
        py-3
        text-sm
        font-semibold
       ${variant === "primary"
          ? "bg-[#65C18C] text-white"
          : "border border-[#65C18C] bg-transparent text-[#65C18C] hover:bg-[#65C18C] hover:text-white"
        }
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