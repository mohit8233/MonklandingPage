import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    Phone,
    Mail,
    Clock3,
} from "lucide-react";

export default function CTA() {
    const features = [
        "SEO",
        "Website Development",
        "AI Solutions",
        "Digital Marketing",
    ];

    return (
        <section className="relative overflow-hidden bg-[#F8FCFA] py-16 sm:py-20 lg:py-28">

            {/* Background Glow */}

            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#65C18C]/10 blur-[120px]" />

            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#BCD0C5]/20 blur-[150px]" />

            <div className="container relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                    className="overflow-hidden rounded-[28px] bg-gradient-to-br from-[#2F855A] via-[#4CAF72] to-[#65C18C] p-6 shadow-2xl sm:p-10 lg:rounded-[40px] lg:p-16"
                >

                    {/* Top */}

                    <div className="mx-auto max-w-4xl text-center">

                        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur-md">
                            🚀 Let's Build Something Amazing
                        </span>

                        <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                            Ready To Scale
                            <br />
                            Your Business?
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
                            We don't just build websites.
                            We create high-performing digital experiences,
                            SEO strategies, and AI-powered solutions that
                            generate real business growth.
                        </p>
                    </div>

                    {/* Features */}

                    <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((item, index) => (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.4,
                                }}
                                className="flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-5 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                            >

                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                                    <CheckCircle2
                                        size={20}
                                        className="text-white"
                                    />
                                </div>

                                <span className="text-sm font-semibold text-white sm:text-base">
                                    {item}
                                </span>

                            </motion.div>

                        ))}

                    </div>

                    {/* CTA Button */}

                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: .3 }}
                        className="mt-12 flex justify-center"
                    >
                        <button
                            className="group mx-auto flex w-full max-w-[320px] items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-base font-bold text-[#2F855A] shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#F7F7F7] sm:w-auto sm:min-w-[260px] sm:px-10 sm:py-5 sm:text-lg"
                        >
                            <span className="whitespace-nowrap">
                                Get Free Proposal
                            </span>

                            <ArrowRight
                                size={20}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </button>

                    </motion.div>

                    {/* Contact Info */}

                    <div className="mt-14 border-t border-white/15 pt-10">

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                            {/* Phone */}

                            <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur-md transition-all duration-300 hover:bg-white/15">

                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
                                    <Phone size={24} className="text-white" />
                                </div>

                                <h3 className="text-lg font-bold text-white">
                                    Call Us
                                </h3>

                                <p className="text-white/80">
                                    +91 XXXXX XXXXX
                                </p>

                            </div>

                            {/* Email */}

                            <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur-md transition-all duration-300 hover:bg-white/15">

                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
                                    <Mail size={24} className="text-white" />
                                </div>

                                <h3 className="text-lg font-bold text-white">
                                    Email Us
                                </h3>

                                <p className="break-all text-white/80">
                                    hello@searchenginemonks.com
                                </p>

                            </div>

                            {/* Working Hours */}

                            <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur-md transition-all duration-300 hover:bg-white/15">

                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
                                    <Clock3 size={24} className="text-white" />
                                </div>

                                <h3 className="text-lg font-bold text-white">
                                    Working Hours
                                </h3>

                                <p className="text-white/80">
                                    Mon – Sat <br />
                                    9:00 AM – 7:00 PM
                                </p>

                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}