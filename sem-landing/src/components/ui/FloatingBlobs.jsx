import { motion } from "framer-motion";

const blobs = [
  {
    size: 300,
    color: "#65C18C",
    top: "5%",
    left: "-5%",
    duration: 20,
  },
  {
    size: 240,
    color: "#9FD7B7",
    top: "60%",
    right: "-5%",
    duration: 24,
  },
  {
    size: 220,
    color: "#7ED4A4",
    bottom: "8%",
    left: "25%",
    duration: 18,
  },
  {
    size: 260,
    color: "#A9E4C5",
    top: "20%",
    right: "25%",
    duration: 22,
  },
];

export default function FloatingBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: blob.size,
            height: blob.size,
            background: blob.color,
            opacity: 0.25,
            filter: "blur(100px)",
            top: blob.top,
            bottom: blob.bottom,
            left: blob.left,
            right: blob.right,
          }}
          animate={{
            x: [0, 50, -40, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.08, 0.94, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}