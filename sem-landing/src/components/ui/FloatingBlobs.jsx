import { motion } from "framer-motion";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 35 + 18,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  duration: Math.random() * 8 + 10,
  delay: Math.random() * 5,
}));

export default function FloatingBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), rgba(188,208,197,0.7) 45%, rgba(101,193,140,0.45) 75%, transparent 100%)",
            border: "1px solid rgba(255,255,255,0.35)",
            boxShadow:
              "0 0 20px rgba(101,193,140,0.25), inset 0 0 10px rgba(255,255,255,0.4)",
            backdropFilter: "blur(3px)",
          }}
          animate={{
            y: [0, -35, 0],
            x: [0, 15, -10, 0],
            scale: [1, 1.08, 0.95, 1],
            opacity: [0.55, 0.95, 0.7, 0.55],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}