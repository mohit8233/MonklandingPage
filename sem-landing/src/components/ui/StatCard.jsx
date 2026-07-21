import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function StatCard({ number, title, description, icon: Icon }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const value = parseInt(number.replace(/\D/g, ""));
  const suffix = number.replace(/[0-9]/g, "");

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 2,
      onUpdate(latest) {
        setCount(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-[#E6EFEA] bg-white p-8 shadow-md transition-all duration-300 hover:border-[#65C18C] hover:shadow-2xl"
    >
      {/* Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#65C18C]/10 blur-3xl" />

      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#BCD0C5] text-[#3D3B3B] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#65C18C] group-hover:text-white">
        {Icon && <Icon size={30} />}
      </div>

      {/* Animated Number */}
      <h2 className="mt-7 text-5xl font-extrabold text-[#3D3B3B] group-hover:text-[#65C18C]">
        {count}
        {suffix}
      </h2>

      {/* Title */}
      <h3 className="mt-4 text-xl font-bold text-[#3D3B3B]">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 leading-7 text-gray-600">
        {description}
      </p>

      {/* Bottom Line */}
      <div className="mt-6 h-1 w-0 rounded-full bg-[#65C18C] transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}

export default StatCard;