import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ({ service }) {
    const [active, setActive] = useState(0);

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
                        FAQ
                    </span>

                    <h2 className="mt-5 text-3xl font-black leading-tight text-[#2D2D2D] sm:text-4xl lg:mt-6 lg:text-5xl">
                        Frequently Asked Questions
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                        Find answers to the most common questions about our services,
                        process, pricing, and support.
                    </p>

                </motion.div>

                {/* FAQ List */}

                <div className="mx-auto max-w-4xl space-y-5">

                    {service.faq.map((item, index) => {

                        const isOpen = active === index;

                        return (

                            <motion.div
                                key={index}
                                layout
                                transition={{
                                    duration: .3,
                                }}
                                className={`overflow-hidden rounded-2xl border transition-all duration-300 sm:rounded-3xl ${isOpen
                                    ? "border-[#65C18C] shadow-xl"
                                    : "border-[#E7EFEA]"
                                    }`}
                            >
                                <button
                                    onClick={() => setActive(isOpen ? -1 : index)}
                                    className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-7"
                                >

                                    <h3 className="flex-1 text-lg font-bold leading-7 text-[#2D2D2D] sm:text-xl">
                                        {item.question}
                                    </h3>

                                    <div
                                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-12 sm:w-12 ${isOpen
                                            ? "bg-[#65C18C] text-white"
                                            : "bg-[#F3F6F4] text-[#2D2D2D]"
                                            }`}
                                    >
                                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                    </div>

                                </button>

                                <AnimatePresence>

                                    {isOpen && (

                                        <motion.div
                                            initial={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: .3,
                                            }}
                                        >

                                            <div className="border-t border-[#EEF2EF] px-5 pb-5 pt-5 sm:px-7 sm:pb-7 sm:pt-6">

                                                <p className="text-base leading-7 text-gray-600 sm:leading-8">
                                                    {item.answer}
                                                </p>

                                            </div>

                                        </motion.div>

                                    )}

                                </AnimatePresence>

                            </motion.div>

                        );

                    })}

                </div>
                {/* Bottom Card */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 overflow-hidden rounded-[28px] border border-[#E7EFEA] bg-gradient-to-r from-[#F8FCFA] to-[#F1FBF5] p-6 shadow-lg sm:mt-20 sm:p-8 lg:mt-24 lg:rounded-[36px] lg:p-12"
                >
                    <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">

                        {/* Left */}

                        <div className="max-w-2xl">

                            <span className="inline-flex rounded-full bg-[#65C18C]/10 px-4 py-2 text-sm font-semibold text-[#65C18C]">
                                Need More Help?
                            </span>

                            <h3 className="mt-5 text-3xl font-black leading-tight text-[#2D2D2D] sm:text-4xl lg:text-5xl">
                                Still Have Questions?
                            </h3>

                            <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                                Our experts are always available to guide you, answer your
                                questions, and recommend the perfect solution for your business.
                            </p>

                        </div>

                        {/* Right */}

                        <div className="flex flex-col items-center gap-4 sm:flex-row">

                            <button
                                className="min-w-[220px] rounded-full bg-[#65C18C] px-8 py-4 text-lg font-semibold whitespace-nowrap text-white transition-all duration-300 hover:scale-105 hover:bg-[#54AE78]"
                            >
                                Talk To An Expert
                            </button>

                            <button
                                className="min-w-[220px] rounded-full border border-[#65C18C] px-8 py-4 text-lg font-semibold whitespace-nowrap text-[#65C18C] transition-all duration-300 hover:bg-[#65C18C] hover:text-white"
                            >
                                Contact Us
                            </button>

                        </div>

                    </div>
                </motion.div>

            </div>

        </section>
    );
}
