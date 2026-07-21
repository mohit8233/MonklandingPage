import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
import Button from "../components/ui/Button";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <span className="inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-[ #4A4A4A] shadow">
        Google Partner Agency
      </span>

      <h1 className="text-4xl font-extrabold leading-tight text-[#555555] sm:text-5xl lg:text-6xl">
        Grow Your 
        <br />
        Business
        <br />
        <span className="text-[#555555]"> with Smart Digital Marketing & AI Solutions</span>
      </h1>

      <p className="max-w-xl text-base leading-7 text-gray-700 lg:text-lg">
        We help businesses increase leads, sales, and online visibility through websites, SEO, branding, and performance marketing.
      </p>


<div className="flex flex-wrap gap-4">
  <Button
    onClick={() =>
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" })
    }
  >
    Book Free Consultation
  </Button>

  <Button
    onClick={() =>
      document
        .getElementById("services")
        ?.scrollIntoView({ behavior: "smooth" })
    }
    className="border border-[#555555] bg-transparent text-[#555555] hover:bg-[#65C18C] hover:text-white"
  >
    <span className="flex items-center gap-2">
      Our Services
      
    </span>
  </Button>
</div>

      <div className="flex items-center gap-4 pt-4">
        <div className="flex -space-x-3">
          <img
            src="https://i.pravatar.cc/100?img=1"
            className="h-10 w-10 rounded-full border-2 border-white"
            alt=""
          />
          <img
            src="https://i.pravatar.cc/100?img=2"
            className="h-10 w-10 rounded-full border-2 border-white"
            alt=""
          />
          <img
            src="https://i.pravatar.cc/100?img=3"
            className="h-10 w-10 rounded-full border-2 border-white"
            alt=""
          />
        </div>

        <div>
          <h4 className="font-bold text-[#17352A]">500+ Happy Clients</h4>
          <p className="text-sm text-gray-600">
            Growing their business
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default HeroContent;