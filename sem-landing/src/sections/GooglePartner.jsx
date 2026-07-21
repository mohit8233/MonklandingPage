import { motion } from "framer-motion";
import {
    FaGoogle,
    FaAward,
    FaChartLine,
    FaUsers,
} from "react-icons/fa";
import Button from "../components/ui/Button";
import { FiArrowRight } from "react-icons/fi";

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
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-5">

                <div className="overflow-hidden rounded-[35px] bg-gradient-to-r from-[#BCD0C5] via-[#95B7A7] to-[#3D3B3B] p-8 md:p-14">

                    <div className="grid items-center gap-12 lg:grid-cols-2">

                        {/* LEFT */}

                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >

                            <div className="inline-flex items-center gap-3 rounded-full bg-white/20 px-5 py-3 backdrop-blur-md">
                                <FaGoogle className="text-white text-xl" />

                                <span className="font-semibold text-white">
                                    Google Partner Agency
                                </span>
                            </div>

                            <h2 className="mt-8 text-4xl font-bold leading-tight text-white md:text-5xl">
                                Let's Grow Your
                                <span className="block text-[#E8F5EE]">
                                    Business Together
                                </span>
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-white/80">
                                We build high-performing websites, SEO campaigns and AI
                                solutions that help businesses generate more leads,
                                traffic and revenue.
                            </p>

                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                <Button
                                    onClick={() =>
                                        document
                                            .getElementById("contact")
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }
                                >
                                    Get Free Audit
                                </Button>

                                <Button
                                    variant="outline"
                                    onClick={() =>
                                        document
                                            .getElementById("portfolio")
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }
                                >
                                    View Success Stories
                                </Button>
                            </div>

                        </motion.div>

                        {/* RIGHT */}

                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid gap-5 sm:grid-cols-2"
                        >

                            {stats.map((item, index) => (

                                <div
                                    key={index}
                                    className="group rounded-3xl border border-white/20 bg-white/15 p-7 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/25"
                                >

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl text-[#3D3B3B] transition group-hover:bg-[#65C18C] group-hover:text-white">
                                        {item.icon}
                                    </div>

                                    <h3 className="mt-5 text-3xl font-bold text-white">
                                        {item.value}
                                    </h3>

                                    <p className="mt-2 text-white/80">
                                        {item.label}
                                    </p>

                                </div>

                            ))}

                        </motion.div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default GooglePartner;