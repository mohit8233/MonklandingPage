import { motion } from "framer-motion";
import ServiceCard from "../components/ui/ServiceCard";
import services from "../data/servicesData";

function Services() {
  return (
    <section
      id="services"
      className="bg-white py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#555555]">
            OUR SERVICES
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#555555] md:text-5xl">
            Digital Solutions That
            <span className="block text-[#555555]">
              Grow Your Business
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            We provide end-to-end digital solutions to help businesses
            increase visibility, generate leads and grow online.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}

        </div>

      </div>
    </section>
    
  );
}

export default Services;