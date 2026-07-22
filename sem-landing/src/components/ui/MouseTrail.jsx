import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function MouseTrail() {
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 350,
    damping: 30,
    mass: 0.2,
  });

  const y = useSpring(mouseY, {
    stiffness: 350,
    damping: 30,
    mass: 0.2,
  });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
      setVisible(true);
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Main Cursor Glow */}
      <motion.div
        style={{ x, y }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-6 w-6 rounded-full bg-[#65C18C]/70 blur-[2px] md:block hidden"
      />

      {/* Outer Glow */}
      <motion.div
        style={{ x, y }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: visible ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-16 w-16 rounded-full bg-[#65C18C]/15 blur-xl md:block hidden"
      />
    </>
  );
}