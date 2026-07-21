import { motion } from "framer-motion";
import monk from "../assets/images/Monk.svg";

function HeroImage() {
   return (
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="relative flex items-center justify-center pt-12 lg:pt-16"
  >
    {/* Left Card */}
    <motion.div
      animate={{ y: [-10, 10, -10] }}
      transition={{ repeat: Infinity, duration: 4 }}
      className="absolute left-0 top-12 z-20 hidden rounded-2xl bg-white p-5 shadow-xl lg:block"
    >
      <p className="text-sm text-gray-500">SEO Traffic</p>
      <h3 className="text-3xl font-bold text-[#555555]">+180%</h3>
    </motion.div>

    {/* Main Image */}
    <motion.img
      src={monk}
      alt="Monk Laptop"
      animate={{ y: [-10, 10, -10] }}
      transition={{
        repeat: Infinity,
        duration: 5,
        ease: "easeInOut",
      }}
      className="relative z-10 h-auto w-[75%] max-w-[420px] object-contain"
    />

    {/* Right Card */}
    <motion.div
      animate={{ y: [10, -10, 10] }}
      transition={{ repeat: Infinity, duration: 4 }}
      className="absolute bottom-8 right-0 z-20 hidden rounded-2xl bg-white p-5 shadow-xl lg:block"
    >
      <p className="text-sm text-gray-500">Keyword Rank</p>
      <h3 className="text-3xl font-bold text-[#555555]">#1</h3>
    </motion.div>
  </motion.div>
);
}

export default HeroImage;