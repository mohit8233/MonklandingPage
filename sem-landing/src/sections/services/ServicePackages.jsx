import { motion } from "framer-motion";
import {
  FaRocket,
  FaChartLine,
  FaCrown,
  FaCheck,
} from "react-icons/fa";

const packages = [
  {
    icon: FaRocket,
    title: "Starter",
    subtitle: "Perfect for Small Businesses",
    color: "from-[#BCD0C5] to-[#DCE8E1]",
    features: [
      "Business Website",
      "Basic SEO Setup",
      "Google Business Profile",
      "Monthly Performance Report",
      "Email Support",
    ],
    button: "Get Started",
  },
  {
    icon: FaChartLine,
    title: "Growth",
    subtitle: "Best for Growing Businesses",
    color: "from-[#2F855A] to-[#49A36D]",
    featured: true,
    features: [
      "Advanced SEO Strategy",
      "Google & Meta Ads",
      "Content Marketing",
      "Conversion Optimization",
      "Weekly Reports",
      "Priority Support",
    ],
    button: "Most Popular",
  },
  {
    icon: FaCrown,
    title: "Enterprise",
    subtitle: "Complete Digital Solution",
    color: "from-[#BCD0C5] to-[#E8F1EC]",
    features: [
      "Custom Website",
      "AI Automation",
      "Brand Strategy",
      "Dedicated Team",
      "Unlimited Consultation",
      "24/7 Premium Support",
    ],
    button: "Contact Us",
  },
];

export default function ServicePackages() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="inline-block px-5 py-2 rounded-full bg-[#BCD0C5]/30 text-[#2F855A] font-semibold">
            Service Packages
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Flexible Solutions For Every Business
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            Choose a package that matches your business goals. Whether you're
            starting your journey or scaling your brand, we have the right
            solution for you.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {packages.map((pkg, index) => {

            const Icon = pkg.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className={`relative rounded-3xl overflow-hidden border bg-white shadow-lg transition ${
                  pkg.featured
                    ? "border-[#2F855A] scale-[1.03]"
                    : "border-gray-200"
                }`}
              >

                {pkg.featured && (
                  <div className="absolute top-5 right-5 bg-[#2F855A] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}

                <div
                  className={`bg-gradient-to-r ${pkg.color} p-8 text-center`}
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center text-[#2F855A] text-4xl shadow-lg">
                    <Icon />
                  </div>

                  <h3 className="mt-6 text-3xl font-bold text-gray-900">
                    {pkg.title}
                  </h3>

                  <p className="mt-2 text-gray-700">
                    {pkg.subtitle}
                  </p>
                </div>

                <div className="p-8">

                  <div className="space-y-4 mb-8">

                    {pkg.features.map((item) => (

                      <div
                        key={item}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <FaCheck className="text-[#2F855A]" />
                        <span>{item}</span>
                      </div>

                    ))}

                  </div>

                  <button
                    className={`w-full py-3 rounded-xl font-semibold transition ${
                      pkg.featured
                        ? "bg-[#2F855A] text-white hover:bg-[#256d49]"
                        : "bg-[#EDF5F0] text-[#2F855A] hover:bg-[#BCD0C5]"
                    }`}
                  >
                    {pkg.button}
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