import { motion } from "framer-motion";
import Button from "../components/ui/Button";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6 text-center lg:text-left"
    >
      {/* Badge */}
      <div className="flex justify-center lg:justify-start">
        <span className="inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#4A4A4A] shadow">
          Google Partner Agency
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-extrabold leading-tight text-[#555555] sm:text-5xl lg:text-6xl">
        Grow Your
        <br />
        Business
        <br />
        <span className="text-[#555555]">
          with Smart Digital Marketing & AI Solutions
        </span>
      </h1>

      {/* Description */}
      <p className="mx-auto max-w-xl text-base leading-7 text-gray-700 lg:mx-0 lg:text-lg">
        We help businesses increase leads, sales, and online visibility
        through websites, SEO, branding, and performance marketing.
      </p>

      {/* Buttons */}
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
        <Button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="w-full max-w-[340px] sm:w-auto"
        >
          Book Free Consultation
        </Button>

        <Button
          onClick={() =>
            document
              .getElementById("services")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="w-full max-w-[340px] border border-[#555555] bg-transparent text-[#555555] hover:bg-[#65C18C] hover:text-white sm:w-auto"
        >
          Our Services
        </Button>
      </div>

      {/* Happy Clients */}
      <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center lg:justify-start">
        <div className="flex -space-x-3">
          <img
            src="https://i.pravatar.cc/100?img=1"
            className="h-12 w-12 rounded-full border-2 border-white"
            alt=""
          />
          <img
            src="https://i.pravatar.cc/100?img=2"
            className="h-12 w-12 rounded-full border-2 border-white"
            alt=""
          />
          <img
            src="https://i.pravatar.cc/100?img=3"
            className="h-12 w-12 rounded-full border-2 border-white"
            alt=""
          />
        </div>

        <div className="text-center sm:text-left">
          <h4 className="text-xl font-bold text-[#17352A]">
            500+ Happy Clients
          </h4>
          <p className="text-gray-600">
            Growing their business
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default HeroContent;