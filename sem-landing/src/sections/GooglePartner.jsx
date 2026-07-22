import { motion } from "framer-motion";
import {
    FaGoogle,
    FaAward,
    FaChartLine,
    FaUsers,
} from "react-icons/fa";
import Button from "../components/ui/Button";

function GooglePartner() {
    const stats = [
        {
            icon: <FaAward />,
            value: "10+",
            label: "Years Experience",
        },
        {
            icon: <FaUsers />,
            value: "500+",
            label: "Happy Clients",
        },
        {
            icon: <FaChartLine />,
            value: "1200+",
            label: "Projects Completed",
        },
        {
            icon: <FaGoogle />,
            value: "Google",
            label: "Certified Partner",
        },
    ];

    return (
        <section className="bg-white py-14 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="overflow-hidden rounded-[24px] sm:rounded-[30px] lg:rounded-[35px]
          bg-gradient-to-r
          from-[#BCD0C5]
          via-[#95B7A7]
          to-[#3D3B3B]
          p-5
          sm:p-8
          lg:p-14">

                    <div className="grid items-center gap-10 lg:grid-cols-2">

                        {/* LEFT */}

                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="text-center lg:text-left"
                        >

                            {/* Badge */}

                            <div className="flex justify-center lg:justify-start">

                                <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-md">

                                    <FaGoogle className="shrink-0 text-lg text-white sm:text-xl" />

                                    <span className="whitespace-nowrap text-xs font-semibold text-white sm:text-sm lg:text-base">
                                        Google Partner Agency
                                    </span>

                                </div>

                            </div>

                            {/* Heading */}

                            <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">

                                Let's Grow Your

                                <span className="mt-2 block text-[#E8F5EE]">
                                    Business Together
                                </span>

                            </h2>

                            {/* Description */}

                            <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-white/85 lg:mx-0 lg:text-lg">

                                We build high-performing websites, SEO campaigns and AI
                                solutions that help businesses generate more leads,
                                traffic and revenue.

                            </p>

                            {/* Buttons */}

                            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">

                                <Button
                                    className="max-[320px]:w-full"
                                    onClick={() =>
                                        document
                                            .getElementById("contact")
                                            ?.scrollIntoView({
                                                behavior: "smooth",
                                            })
                                    }
                                >
                                    Free Audit
                                </Button>

                                <Button
                                    className="max-[320px]:w-full"
                                    showArrow={false}
                                    onClick={() =>
                                        document
                                            .getElementById("portfolio")
                                            ?.scrollIntoView({
                                                behavior: "smooth",
                                            })
                                    }
                                >
                                    Success Stories
                                </Button>

                            </div>

                        </motion.div>
                        {/* RIGHT */}

                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-0"
                        >
                            {stats.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.03,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                    }}
                                    className="group rounded-3xl border border-white/20 bg-white/15 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/25 sm:p-6"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl text-[#3D3B3B] transition-all duration-300 group-hover:bg-[#65C18C] group-hover:text-white sm:h-14 sm:w-14 sm:text-2xl">
                                        {item.icon}
                                    </div>

                                    <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                                        {item.value}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-white/80 sm:text-base">
                                        {item.label}
                                    </p>
                                </motion.div>
                            ))}

                            {/* CTA Card */}

                            
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default GooglePartner;