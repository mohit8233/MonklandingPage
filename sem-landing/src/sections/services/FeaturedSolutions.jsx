import { motion } from "framer-motion";
import {
  FaSearch,
  FaLaptopCode,
  FaRobot,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    icon: FaSearch,
    title: "SEO & Digital Marketing",
    description:
      "Boost your online visibility with result-driven SEO strategies, content marketing, and paid advertising campaigns.",
    features: [
      "Keyword Research",
      "Technical SEO",
      "Google Ads",
      "Content Strategy",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
  },
  {
    icon: FaLaptopCode,
    title: "Web Design & Development",
    description:
      "Modern, responsive websites designed to improve user experience and generate more leads.",
    features: [
      "React Development",
      "WordPress",
      "Shopify",
      "Landing Pages",
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900",
  },
  {
    icon: FaRobot,
    title: "AI Automation Solutions",
    description:
      "Automate repetitive tasks and streamline your business using powerful AI tools and workflows.",
    features: [
      "AI Chatbots",
      "Workflow Automation",
      "CRM Integration",
      "Lead Generation",
    ],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900",
  },
];

export default function FeaturedSolutions() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="bg-[#BCD0C5] text-[#2F855A] px-5 py-2 rounded-full font-semibold">
            Featured Solutions
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Solutions Designed For Business Growth
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            From SEO and web development to AI automation, we provide
            complete digital solutions that help businesses scale faster.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-14 items-center ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="overflow-hidden rounded-3xl shadow-xl"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[420px] object-cover duration-500 hover:scale-110"
                  />
                </motion.div>

                {/* Content */}

                <div>

                  <div className="w-16 h-16 rounded-2xl bg-[#BCD0C5] text-[#2F855A] flex items-center justify-center text-3xl mb-6">
                    <Icon />
                  </div>

                  <h3 className="text-4xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-8 mb-8">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {service.features.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <FaCheckCircle className="text-[#2F855A]" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <button className="bg-[#2F855A] hover:bg-[#256b46] text-white px-7 py-3 rounded-full font-semibold transition">
                    Learn More
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}