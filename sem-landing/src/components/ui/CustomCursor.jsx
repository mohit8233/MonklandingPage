import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 500,
    damping: 30,
  });

  const y = useSpring(mouseY, {
    stiffness: 500,
    damping: 30,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-5 w-5 rounded-full border-2 border-[#65C18C]"
      style={{
        x,
        y,
      }}
    />
  );
}