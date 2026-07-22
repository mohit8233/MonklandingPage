import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function MouseRipple() {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    let id = 0;

    const createRipple = (e) => {
      id++;

      const ripple = {
        id,
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev, ripple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
      }, 700);
    };

    window.addEventListener("click", createRipple);

    return () => {
      window.removeEventListener("click", createRipple);
    };
  }, []);

  return (
    <AnimatePresence>
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          initial={{
            scale: 0,
            opacity: 0.6,
          }}
          animate={{
            scale: 6,
            opacity: 0,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="pointer-events-none fixed z-[9997] h-20 w-20 rounded-full border border-[#65C18C]/60"
          style={{
            left: ripple.x - 40,
            top: ripple.y - 40,
          }}
        />
      ))}
    </AnimatePresence>
  );
}