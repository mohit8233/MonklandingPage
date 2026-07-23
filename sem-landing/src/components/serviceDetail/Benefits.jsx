import { motion } from "framer-motion";
import {
    TrendingUp,
    BadgeCheck,
    Users,
    Target,
    ArrowUpRight,
} from "lucide-react";
import Button from "../ui/Button";
const icons = [
    TrendingUp,
    BadgeCheck,
    Users,
    Target,
    TrendingUp,
    BadgeCheck,
];

export default function Benefits({ service }) {
    return (
        <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24">
            {/* Background */}

            <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#65C18C]/10 blur-[120px]" />

            <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#BCD0C5]/20 blur-[140px]" />

            <div className="container mx-auto px-5 lg:px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto mb-14 max-w-3xl text-center lg:mb-20"
                >

                    <span className="inline-flex rounded-full bg-[#65C18C]/10 px-5 py-2 text-sm font-semibold text-[#65C18C]">
                        Benefits
                    </span>

                    <h2 className="mt-5 text-3xl font-black leading-tight text-[#2D2D2D] sm:text-4xl lg:mt-6 lg:text-5xl">
                        Why Your Business Needs This
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                        Our solutions are designed to help businesses grow faster,
                        improve customer experience and maximize return on investment.
                    </p>

                </motion.div>

                {/* Cards */}

                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

                    {service.benefits.map((benefit, index) => {

                        const Icon = icons[index % icons.length];

                        return (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * .1,
                                }}
                                whileHover={{
                                    y: -10,
                                }}
                                className="group flex min-h-[340px] flex-col items-center rounded-[28px] border border-[#E7EFEA] bg-[#FCFDFC] p-6 text-center transition-all duration-500 hover:border-[#65C18C] hover:shadow-[0_20px_60px_rgba(101,193,140,.15)] sm:p-8"
                            >

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#65C18C]/10 transition-all duration-500 group-hover:bg-[#65C18C]">

                                    <Icon
                                        size={30}
                                        className="text-[#65C18C] transition-all group-hover:text-white"
                                    />

                                </div>

                                <h3 className="mt-8 text-xl font-bold text-[#2D2D2D] sm:text-2xl">
                                    {benefit}
                                </h3>

                                <p className="mt-4 flex-1 text-base leading-7 text-gray-600">
                                    We help businesses achieve this through proven
                                    strategies, expert execution, and continuous
                                    optimization.
                                </p>

                                <div className="mt-8 flex items-center gap-3 text-[#65C18C]">

                                    <span className="font-semibold">
                                        Learn More
                                    </span>

                                    <ArrowUpRight
                                        size={18}
                                        className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />

                                </div>

                            </motion.div>

                        );

                    })}

                </div>
                {/* Bottom Results Banner */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 overflow-hidden rounded-[28px] bg-gradient-to-r from-[#65C18C] to-[#2F855A] p-6 text-white shadow-2xl sm:mt-20 sm:p-8 lg:mt-24 lg:rounded-[36px] lg:p-10"
                >

                    <div className="grid items-center gap-10 lg:grid-cols-2">

                        {/* Left */}

                        <div className="text-center lg:text-left">

                            <h3 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                                Real Business Results,
                                <br className="hidden sm:block" />
                                Not Just Promises.
                            </h3>

                            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8 lg:mx-0">
                                Every project is focused on measurable growth,
                                better customer experience, stronger online visibility,
                                and long-term success.
                            </p>

                        </div>

                        {/* Right Stats */}

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-8">

                            <div className="flex h-[180px] flex-col justify-center rounded-[30px] bg-white/10 p-8 backdrop-blur-md transition-all duration-300 hover:bg-white/15">
                                <h4 className="text-5xl font-black leading-none text-white lg:text-6xl">
                                    250+
                                </h4>

                                <p className="mt-5 text-xl font-medium text-white/90">
                                    Successful Projects
                                </p>
                            </div>

                            <div className="flex h-[180px] flex-col justify-center rounded-[30px] bg-white/10 p-8 backdrop-blur-md transition-all duration-300 hover:bg-white/15">
                                <h4 className="text-5xl font-black leading-none text-white lg:text-6xl">
                                    98%
                                </h4>

                                <p className="mt-5 text-xl font-medium text-white/90">
                                    Client Satisfaction
                                </p>
                            </div>

                            <div className="flex h-[180px] flex-col justify-center rounded-[30px] bg-white/10 p-8 backdrop-blur-md transition-all duration-300 hover:bg-white/15">
                                <h4 className="text-5xl font-black leading-none text-white lg:text-6xl">
                                    24/7
                                </h4>

                                <p className="mt-5 text-xl font-medium text-white/90">
                                    Dedicated Support
                                </p>
                            </div>

                            <div className="flex h-[180px] flex-col justify-center rounded-[30px] bg-white/10 p-8 backdrop-blur-md transition-all duration-300 hover:bg-white/15">
                                <h4 className="text-5xl font-black leading-none text-white lg:text-6xl">
                                    10+
                                </h4>

                                <p className="mt-5 text-xl font-medium text-white/90">
                                    Years Experience
                                </p>
                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}