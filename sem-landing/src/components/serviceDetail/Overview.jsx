import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

export default function Overview({ service }) {
    return (
        <section className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24">
            {/* Background Blur */}

            <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-[#65C18C]/10 blur-[120px]" />

            <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#BCD0C5]/20 blur-[150px]" />

            <div className="relative container mx-auto px-5 lg:px-6">

                <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">

                    {/* LEFT */}

                    <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .7 }}
                    >

                        <span className="inline-flex rounded-full bg-[#65C18C]/10 px-5 py-2 text-sm font-semibold text-[#65C18C]">
                            About This Service
                        </span>

                        <h2 className="mt-5 text-3xl font-black leading-tight text-[#2D2D2D] sm:text-4xl lg:mt-6 lg:text-5xl">
                            Everything You Need To Grow Your Business
                        </h2>

                        <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                            {service.description}
                        </p>
                        <div className="mt-8 grid gap-4 sm:grid-cols-2">

                            {service.overview.map((item, index) => (

                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.08,
                                    }}
                                    className="flex items-center gap-3 rounded-xl border border-[#EEF2EF] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#65C18C] hover:shadow-lg"
                                >

                                    <CheckCircle2
                                        className="shrink-0 text-[#65C18C]"
                                        size={20}
                                    />

                                    <span className="text-sm font-medium text-gray-700 sm:text-base">
                                        {item}
                                    </span>

                                </motion.div>

                            ))}

                        </div>

                    </motion.div>

                    {/* RIGHT */}

                    <motion.div
                        initial={{ opacity: 0, x: 70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .8 }}
                        className="relative"
                    >

                        <div className="rounded-3xl border border-[#EEF2EF] bg-gradient-to-br from-white to-[#F6FBF8] p-6 shadow-xl sm:p-8 lg:p-10">

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">

                                <div className="flex min-h-[170px] flex-col justify-center rounded-2xl bg-[#65C18C] p-6 text-white">
                                    <h3 className="text-4xl font-black lg:text-5xl">
                                        10+
                                    </h3>

                                    <p className="mt-3 text-base leading-6 opacity-90">
                                        Years Experience
                                    </p>
                                </div>

                                <div className="flex min-h-[170px] flex-col justify-center rounded-2xl bg-[#F4F8F6] p-6">
                                    <h3 className="text-4xl font-black text-[#65C18C] lg:text-5xl">
                                        500+
                                    </h3>

                                    <p className="mt-3 text-base leading-6 text-gray-600">
                                        Projects Delivered
                                    </p>
                                </div>

                                <div className="flex min-h-[170px] flex-col justify-center rounded-2xl bg-[#F4F8F6] p-6">
                                    <h3 className="text-4xl font-black text-[#65C18C] lg:text-5xl">
                                        98%
                                    </h3>

                                    <p className="mt-3 text-base leading-6 text-gray-600">
                                        Client Satisfaction
                                    </p>
                                </div>

                                <div className="flex min-h-[170px] flex-col justify-center rounded-2xl bg-[#3D3B3B] p-6 text-white">
                                    <h3 className="text-4xl font-black lg:text-5xl">
                                        24/7
                                    </h3>

                                    <p className="mt-3 text-base leading-6 opacity-90">
                                        Expert Support
                                    </p>
                                </div>

                            </div>
                            <div className="mt-8 rounded-2xl bg-[#65C18C]/10 p-5 sm:mt-10 sm:p-6">

                                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                                    <div>

                                        <p className="text-sm text-gray-500">
                                            Ready to start?
                                        </p>

                                        <h4 className="mt-2 text-xl font-bold text-[#2D2D2D] sm:text-2xl">
                                            Let's Build Something Amazing
                                        </h4>

                                    </div>

                                    <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#65C18C] text-white transition-all duration-300 hover:rotate-45 hover:scale-110 sm:h-14 sm:w-14">

                                        <ArrowUpRight />

                                    </button>

                                </div>

                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}