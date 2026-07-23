import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    CheckCircle2,
    Sparkles,
} from "lucide-react";
import Button from "../ui/Button";
export default function DetailHero({ service }) {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FCFA] via-white to-[#EDF7F2] pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24">

            {/* Background Blur */}
            <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#65C18C]/20 blur-[120px]" />

            <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[#BCD0C5]/40 blur-[150px]" />

            <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#65C18C]/10 blur-[120px]" />

            <div className="relative z-20 container mx-auto px-5 lg:px-6">

                {/* Breadcrumb */}

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5 }}
                    className="relative z-30 mb-8 flex flex-wrap items-center gap-2 text-sm"
                >

                    <Link
                        to="/"
                        className="text-gray-500 transition hover:text-[#65C18C]"
                    >
                        Home
                    </Link>

                    <span>/</span>

                    <Link
                        to="/services"
                        className="text-gray-500 transition hover:text-[#65C18C]"
                    >
                        Services
                    </Link>

                    <span>/</span>

                    <span className="font-semibold text-[#65C18C]">
                        {service.title}
                    </span>

                </motion.div>

                <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-2">

                    {/* LEFT */}

                    <div>

                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: .2 }}
                            className="inline-flex items-center gap-2 rounded-full border border-[#65C18C]/20 bg-[#65C18C]/10 px-5 py-2 text-sm font-semibold text-[#2F855A]"
                        >
                            <Sparkles size={16} />
                            Premium Digital Service
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: .3 }}
                            className="mt-6 text-3xl font-black leading-tight text-[#2D2D2D] sm:text-4xl lg:mt-8 lg:text-6xl"
                        >
                            {service.title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: .4 }}
                            className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8"
                        >
                            {service.subtitle}
                        </motion.p>
                        {/* Feature List */}

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: .5 }}
                            className="mt-8 grid gap-4 sm:grid-cols-2"
                        >

                            <div className="flex items-center gap-3 rounded-xl bg-white/70 p-3 shadow-sm backdrop-blur">

                                <CheckCircle2 className="h-5 w-5 text-[#65C18C]" />

                                <span className="font-medium text-gray-700">
                                    Experienced Team
                                </span>

                            </div>

                            <div className="flex items-center gap-3 rounded-xl bg-white/70 p-3 shadow-sm backdrop-blur">

                                <CheckCircle2 className="h-5 w-5 text-[#65C18C]" />

                                <span className="font-medium text-gray-700">
                                    Result Driven Strategy
                                </span>

                            </div>

                            <div className="flex items-center gap-3 rounded-xl bg-white/70 p-3 shadow-sm backdrop-blur">

                                <CheckCircle2 className="h-5 w-5 text-[#65C18C]" />

                                <span className="font-medium text-gray-700">
                                    Transparent Reporting
                                </span>

                            </div>

                            <div className="flex items-center gap-3 rounded-xl bg-white/70 p-3 shadow-sm backdrop-blur">

                                <CheckCircle2 className="h-5 w-5 text-[#65C18C]" />

                                <span className="font-medium text-gray-700">
                                    Dedicated Support
                                </span>

                            </div>

                        </motion.div>

                        {/* Buttons */}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: .6 }}
                            className="mt-10 flex flex-col gap-4 sm:flex-row"
                        >

                            <Button className="w-full justify-center sm:w-auto">
                                Get Free Consultation
                            </Button>

                            <Button
                                showArrow={true}
                                className="w-full justify-center border border-[#65C18C] bg-transparent text-[#27ba64] hover:bg-[#65C18C] hover:text-white sm:w-auto"
                            >
                                View Portfolio
                            </Button>

                        </motion.div>

                    </div>

                    {/* RIGHT SIDE */}

                    <div>

                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative flex items-center justify-center"
                        >

                            <div className="relative mx-auto w-full max-w-md lg:max-w-[560px]">
                                {/* Background Glow */}

                                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#65C18C]/20 to-[#BCD0C5]/20 blur-3xl" />

                                {/* Main Card */}

                                <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] border border-white/60 bg-white shadow-[0_30px_80px_rgba(0,0,0,.08)]">

                                    <img
                                        src={service.heroImage}
                                        alt={service.title}
                                        className="h-[260px] w-full object-cover sm:h-[360px] md:h-[450px] lg:h-[520px]"
                                    />

                                    {/* Bottom Overlay */}

                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1D1D1D]/90 via-[#1D1D1D]/40 to-transparent p-5 sm:p-8">

                                        <span className="rounded-full bg-white/20 px-4 py-2 text-xs font-medium text-white backdrop-blur sm:text-sm">
                                            {service.tag}
                                        </span>

                                        <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                                            {service.shortTitle}
                                        </h3>

                                    </div>

                                </div>

                                {/* Floating Card 1 */}

                                <motion.div
                                    animate={{
                                        y: [-8, 8, -8],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                    }}
                                    className="absolute -left-10 top-10 hidden rounded-3xl bg-white p-5 shadow-2xl md:block"
                                >

                                    <p className="text-4xl font-black text-[#65C18C]">
                                        98%
                                    </p>

                                    <p className="mt-2 text-sm text-gray-600">
                                        Client Satisfaction
                                    </p>

                                </motion.div>

                                {/* Floating Card 2 */}

                                <motion.div
                                    animate={{
                                        y: [10, -10, 10],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                    }}
                                    className="absolute -right-8 bottom-20 hidden rounded-3xl bg-[#65C18C] p-6 text-white shadow-2xl md:block"
                                >

                                    <p className="text-3xl font-black">
                                        250+
                                    </p>

                                    <p className="text-sm">
                                        Successful Projects
                                    </p>

                                </motion.div>
                                {/* Floating Card 3 */}

                                <motion.div
                                    animate={{
                                        y: [-6, 6, -6],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                    }}
                                    className="absolute left-6 -bottom-6 hidden items-center rounded-2xl bg-white px-5 py-4 shadow-xl md:flex lg:left-12 lg:-bottom-8 lg:px-6"
                                >

                                    <div className="flex items-center gap-3">

                                        <div className="h-3 w-3 rounded-full bg-green-500" />

                                        <span className="font-semibold text-gray-700">
                                            AI Powered Strategy
                                        </span>

                                    </div>

                                </motion.div>

                            </div>

                        </motion.div>

                    </div>

                </div>

            </div>

        </section>
    );
}