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

  // NEW
  as: Component = "button",
  to,
  href,
  target,
  rel,
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

    const xPos =
      e.clientX - rect.left - rect.width / 2;

    const yPos =
      e.clientY - rect.top - rect.height / 2;

    mouseX.set(xPos * 0.25);
    mouseY.set(yPos * 0.25);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        x,
        y,
      }}
      whileHover={{
        scale: 1.03,
        y: -2,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.25,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-flex w-full sm:w-fit"
    >
      <Component
        to={to}
        href={href}
        target={target}
        rel={rel}
        type={
          Component === "button"
            ? type
            : undefined
        }
        onClick={onClick}
        disabled={
          Component === "button"
            ? disabled
            : undefined
        }
        className={`
          group
          relative
         inline-flex
w-full
sm:w-fit
max-w-fullF
          items-center
          justify-center
          overflow-hidden
          rounded-full

          px-5
          py-3

          text-sm
          font-semibold

          ${
  variant === "primary"
    ? "bg-emerald-600 text-white hover:bg-emerald-700"
    : variant === "white"
    ? "bg-white text-emerald-700 hover:bg-slate-100"
    : "border border-emerald-600 bg-transparent text-emerald-600 hover:bg-emerald-600 hover:text-white"
}

          shadow-lg
          transition-all
          duration-300

          hover:shadow-[0_15px_40px_rgba(5,150,105,0.35)]

          sm:px-7
          sm:py-3.5
          sm:text-base

          disabled:cursor-not-allowed
          disabled:opacity-70

          ${className}
        `}
      >
        {/* Shine Effect */}
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

        {/* Ripple Effect */}
        <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 transition-all duration-500 group-hover:h-[320px] group-hover:w-[320px]" />

        {/* Button Content */}
        <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">

          <span className="whitespace-nowrap">
            {children}
          </span>

          {showArrow && (
            <FaArrowRight
              className="shrink-0 transition-all duration-300 group-hover:translate-x-1.5 group-hover:-rotate-12"
            />
          )}

        </span>

      </Component>

    </motion.div>
  );
}

export default Button;