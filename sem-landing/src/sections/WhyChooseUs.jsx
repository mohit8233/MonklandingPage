import { motion } from "framer-motion";
import FeatureCard from "../components/ui/FeatureCard";
import Monk from "../assets/images/Monk-Laptop.png";

const features = [
  {
    title: "Experienced Team",
    description:
      "Our certified experts deliver measurable business growth using proven digital strategies.",
  },
  {
    title: "Result Driven",
    description:
      "Everything we build is focused on increasing traffic, leads and revenue.",
  },
  {
    title: "AI Powered",
    description:
      "We automate business processes using AI tools and smart workflows.",
  },
  {
    title: "24/7 Support",
    description:
      "Dedicated support team always available whenever you need assistance.",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="about"
      className="bg-[#E6F3EA] py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="relative flex justify-center"
          >
            <div className="absolute h-[420px] w-[420px] rounded-full bg-white/50 blur-3xl"></div>

            <img
              src={Monk}
              alt=""
              className="relative z-10 w-full max-w-md lg:max-w-lg"
            />
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >
            <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#555555]">
              WHY CHOOSE US
            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#555555] md:text-5xl">
              We Build Digital
              <span className="block text-[#555555]">
                Success Stories
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Search Engine Monks helps businesses grow with
              SEO, Web Development, Branding, AI Automation
              and Digital Marketing solutions tailored to your goals.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {features.map((item, index) => (
                <FeatureCard
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;