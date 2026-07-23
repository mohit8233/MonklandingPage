import { motion } from "framer-motion";
import services from "../../data/servicesData";
import ServicePageCard from "../../components/ui/ServicePageCard";
// import ServicePageCard from "../components/ui/ServicePageCard";

function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
  {/* Background Blur */}
  <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#65C18C]/10 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#BCD0C5]/30 blur-3xl" />

  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* Heading */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
      className="mx-auto mb-14 max-w-3xl text-center lg:mb-20"
    >

      <span className="inline-flex rounded-full bg-[#65C18C]/10 px-4 py-2 text-xs font-semibold text-[#2F855A] sm:text-sm">
        Our Services
      </span>

      <h2 className="mt-5 text-3xl font-bold text-[#3D3B3B] sm:text-4xl lg:text-5xl">
        Everything Your Business Needs To Grow
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
        From SEO and Web Development to AI Automation and Digital
        Marketing, we provide complete solutions under one roof.
      </p>

    </motion.div>

    {/* Cards */}

    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

      {services.map((service,index)=>(

        <ServicePageCard
          key={service.id}
          service={service}
          index={index}
        />

      ))}

    </div>

  </div>

</section>
  );
}

export default ServicesGrid;