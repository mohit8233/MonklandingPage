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
            <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#65C18C]/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                    className="mx-auto max-w-3xl text-center"
                >

                    <span className="inline-flex rounded-full bg-[#EAF5EF] px-5 py-2 text-sm font-semibold text-[#3D3B3B]">
                        ⭐ WHY CHOOSE US
                    </span>

                    <h2 className="mt-6 text-3xl font-bold text-[#3D3B3B] sm:text-4xl lg:text-5xl">
                        Grow Faster With
                        <span className="text-[#65C18C]"> Search Engine Monks</span>
                    </h2>

                    <p className="mt-6 text-gray-600 leading-8">
                        We combine SEO, Branding, Web Development, Performance Marketing
                        and AI Solutions to help businesses generate more traffic,
                        conversions and revenue.
                    </p>

                </motion.div>

                {/* Content */}

                <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">

                    {/* Image */}

                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Yellow Outer Circle */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute z-0 h-[470px] w-[470px] rounded-full border-[5px] border-[#D4A017] border-r-transparent"
                        />

                        {/* Green Inner Circle */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{
                                duration: 18,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute z-0 h-[410px] w-[410px] rounded-full border-[12px] border-[#2F855A]"
                        />

                        {/* Glow */}
                        <div className="absolute z-0 h-[320px] w-[320px] rounded-full bg-[#BCD0C5]/30 blur-[90px]" />

                        {/* Monk Image */}
                        <motion.img
                            src={Monk}
                            alt="Search Engine Monks"
                            animate={{
                                y: [0, -12, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 4,
                                ease: "easeInOut",
                            }}
                            className="relative z-10 w-full max-w-[500px] object-contain"
                        />
                    </motion.div>

                    {/* Cards */}

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