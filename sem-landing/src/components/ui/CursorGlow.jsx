import { motion, useMotionValue, useSpring } from "framer-motion";

function CursorGlow({ children }) {
  const mouseX = useMotionValue(-250);
  const mouseY = useMotionValue(-250);

  const x = useSpring(mouseX, {
    stiffness: 180,
    damping: 22,
    mass: 0.4,
  });

  const y = useSpring(mouseY, {
    stiffness: 180,
    damping: 22,
    mass: 0.4,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - 225);
    mouseY.set(e.clientY - rect.top - 225);
  };

  const handleMouseLeave = () => {
    mouseX.set(-250);
    mouseY.set(-250);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden"
    >
      {/* Main Spotlight */}
      <motion.div
        style={{ x, y }}
        className="pointer-events-none absolute z-0 h-[450px] w-[450px] rounded-full"
      >
        <div
          className="h-full w-full rounded-full blur-[90px]"
          style={{
            background: `
              radial-gradient(circle,
                rgba(255,255,255,0.45) 0%,
                rgba(170,220,255,0.25) 30%,
                rgba(120,180,255,0.12) 55%,
                transparent 100%)
            `,
          }}
        />
      </motion.div>

      {/* Small Glow */}
      <motion.div
        style={{
          x,
          y,
          scale: 0.35,
        }}
        className="pointer-events-none absolute z-0 h-[450px] w-[450px] rounded-full bg-white/40 blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default CursorGlow;