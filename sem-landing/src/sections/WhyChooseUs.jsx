import { motion } from "framer-motion";
import Monk from "../assets/images/Monk-Laptop.png";
import FeatureCard from "../components/ui/FeatureCard";

const features = [
    {
        title: "Experienced Team",
        description:
            "Certified experts delivering measurable growth with modern digital strategies.",
    },
    {
        title: "Result Driven",
        description:
            "Every campaign is optimized to maximize ROI and generate quality leads.",
    },
    {
        title: "AI Solutions",
        description:
            "AI automation that saves time and improves productivity.",
    },
    {
        title: "24/7 Support",
        description:
            "Friendly support team available whenever you need us.",
    },
];

function WhyChooseUs() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#F7FBF8] py-20"
        >
            {/* Background */}
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#BCD0C5]/30 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#65C18C]/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="inline-flex rounded-full bg-[#EAF5EF] px-5 py-2 text-sm font-semibold text-[#3D3B3B]">
                        ⭐ WHY CHOOSE US
                    </span>

                    <h2 className="mt-6 text-3xl font-bold text-[#3D3B3B] sm:text-4xl lg:text-5xl">
                        Grow Faster With
                        <span className="text-[#65C18C]">
                            {" "}
                            Search Engine Monks
                        </span>
                    </h2>

                    <p className="mt-6 leading-8 text-gray-600">
                        We combine SEO, Branding, Web Development, Performance Marketing
                        and AI Solutions to help businesses generate more traffic,
                        conversions and revenue.
                    </p>
                </motion.div>

                {/* Content */}
                <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">

                    {/* Left Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative mx-auto flex items-center justify-center
            h-[260px] w-[260px]
            sm:h-[340px] sm:w-[340px]
            md:h-[420px] md:w-[420px]
            lg:h-[440px] lg:w-[440px]"
                    >
                        {/* Yellow Outer Ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute
  h-[215px] w-[215px]
  sm:h-[285px] sm:w-[285px]
  md:h-[335px] md:w-[335px]
  lg:h-[375px] lg:w-[375px]
  rounded-full
  border-[3px]
  sm:border-[4px]
  lg:border-[5px]
  border-[#D4A017]
  border-r-transparent"
                        />

                        {/* Green Circle */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{
                                duration: 18,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute
              h-[200px] w-[200px]
              sm:h-[270px] sm:w-[270px]
              md:h-[320px] md:w-[320px]
              lg:h-[350px] lg:w-[350px]
              rounded-full
              border-[5px]
              sm:border-[8px]
              lg:border-[10px]
              border-[#2F855A]"
                        />

                        {/* Glow */}
                        <div
                            className="absolute
              h-[160px] w-[160px]
              sm:h-[220px] sm:w-[220px]
              md:h-[260px] md:w-[260px]
              lg:h-[300px] lg:w-[300px]
              rounded-full
              bg-[#BCD0C5]/30
              blur-[70px]"
                        />

                        {/* Monk Image */}
                        <motion.img
                            src={Monk}
                            alt="Search Engine Monks"
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative z-10
              w-[180px]
              sm:w-[250px]
              md:w-[320px]
              lg:w-[390px]
              object-contain"
                        />
                    </motion.div>

                    {/* Right Cards */}
                    <div className="grid gap-5 sm:grid-cols-2">
                        {features.map((item, index) => (
                            <FeatureCard
                                key={index}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;