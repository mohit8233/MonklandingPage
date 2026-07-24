import { motion } from "framer-motion";
import {
    ArrowRight,

    TrendingUp,
    Briefcase,
    Star,
    PlayIcon,
} from "lucide-react";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
const stats = [
    {
        number: "250+",
        label: "Projects Delivered",
    },
    {
        number: "98%",
        label: "Client Satisfaction",
    },
    {
        number: "18+",
        label: "Industries Served",
    },
];

const cards = [
    {
        title: "SEO Growth",
        value: "+312%",
        icon: TrendingUp,
        color: "bg-emerald-500",
    },
    {
        title: "Completed",
        value: "250+",
        icon: Briefcase,
        color: "bg-green-600",
    },
    {
        title: "Rating",
        value: "4.9",
        icon: Star,
        color: "bg-lime-500",
    },
];

export default function PortfolioHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FCF8] via-white to-[#F2FAF3] pt-32 pb-24">

            {/* Background Blur */}

            <div className="absolute inset-0 -z-10">

                <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-emerald-200/60 blur-[120px]" />

                <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-green-200/60 blur-[120px]" />

                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb25_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb25_1px,transparent_1px)] bg-[size:50px_50px]" />

            </div>

            <div className="mx-auto w-full max-w-7xl px-3 xs:px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 items-center gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-16">

                    {/* LEFT */}

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center text-center lg:items-start lg:text-left"
                    >

                        <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-700">
                            ✦ Our Portfolio
                        </span>

                       <h1 className="mt-6 max-w-2xl text-center text-[2.2rem] font-black leading-[1.1] text-slate-900 min-[360px]:text-[2.6rem] sm:text-5xl lg:text-left lg:text-6xl xl:text-7xl">

                            Crafting

                            <span className="block text-emerald-600">
                                Digital Success
                            </span>

                            Stories

                        </h1>

                        <p className="mt-5 max-w-xl text-[14px] leading-7 text-slate-600 min-[270px]:text-[14px] min-[320px]:text-[15px] sm:text-lg">

                            Discover how we've helped startups, brands,
                            and enterprises grow with cutting-edge web
                            development, SEO, branding, AI automation,
                            and digital marketing solutions.

                        </p>

                        {/* Buttons */}

                       <div className="mt-8 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row lg:justify-start">

                            <Button
                                as={Link}
                                to="/portfolio"
                            >
                                Explore Projects
                            </Button>

                            <Button
                                as={Link}
                                to=""
                                variant="outline"
                                showArrow={false}
                                leftIcon={<PlayIcon size={18} />}
                            >
                                Watch Reel
                            </Button>

                        </div>

                        {/* Stats */}

                        <div className="mt-10 grid grid-cols-1 gap-5 min-[430px]:grid-cols-2 sm:grid-cols-3">

                            {stats.map((item) => (

                                <div key={item.label}>

                                    <h2 className="text-3xl font-black text-emerald-600 lg:text-5xl">

                                        {item.number}

                                    </h2>

                                    <p className="mt-2 text-sm text-slate-500">

                                        {item.label}

                                    </p>

                                </div>

                            ))}

                        </div>

                    </motion.div>
                    {/* RIGHT SIDE */}

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative mx-auto w-full max-w-full sm:max-w-[640px]"
                    >
                        {/* Browser Mockup */}

                        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_35px_80px_rgba(0,0,0,.08)]">

                            {/* Browser Header */}

                            <div className="flex items-center justify-between border-b bg-slate-50 px-5 py-4">

                                <div className="flex items-center gap-2">
                                    <span className="h-3 w-3 rounded-full bg-red-400" />
                                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                                    <span className="h-3 w-3 rounded-full bg-green-400" />
                                </div>

                                <div className="rounded-full bg-white px-4 py-2 text-xs text-slate-500 shadow">
                                    searchenginemonks.com
                                </div>

                            </div>

                            {/* Browser Body */}

                            <div className="bg-gradient-to-br from-[#F5FFF6] to-white p-3 min-[320px]:p-4 sm:p-6">

                                {/* Hero Banner */}

                                <div className="rounded-2xl bg-gradient-to-r from-emerald-600 to-green-500 p-4 min-[320px]:p-5 sm:rounded-3xl sm:p-8 text-white">

                                    <p className="text-sm uppercase tracking-[3px] opacity-80">
                                        Featured Project
                                    </p>

                                    <h3 className="mt-3 text-3xl font-bold">
                                        AI Powered SEO Platform
                                    </h3>

                                    <p className="mt-4 max-w-md text-sm leading-7 text-white/80">
                                        Enterprise SEO dashboard built with React,
                                        Node.js & AI automation for global businesses.
                                    </p>

                                    <Button
                                        as={Link}
                                        to=""
                                        className="!bg-white !text-emerald-700 hover:!bg-emerald-50 mt-6"
                                    >
                                        View Case Study
                                    </Button>

                                </div>

                                {/* Cards */}

                                <div className="mt-5 grid grid-cols-1 gap-4 min-[380px]:grid-cols-2 sm:gap-5">

                                    <div className="rounded-2xl bg-emerald-50 p-5">

                                        <div className="mb-4 h-24 rounded-xl bg-emerald-100" />

                                        <h4 className="font-semibold text-slate-800">
                                            Organic Traffic
                                        </h4>

                                        <p className="mt-2 text-sm text-slate-500">
                                            +320% Growth
                                        </p>

                                    </div>

                                    <div className="rounded-2xl bg-green-50 p-5">

                                        <div className="mb-4 h-24 rounded-xl bg-green-100" />

                                        <h4 className="font-semibold text-slate-800">
                                            Lead Conversion
                                        </h4>

                                        <p className="mt-2 text-sm text-slate-500">
                                            +180% Increase
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Floating Card 1 */}

                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 4,
                            }}
                            className="absolute -left-5 top-12 hidden rounded-2xl bg-white p-5 shadow-2xl lg:block"
                        >
                            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-white">
                                <TrendingUp size={22} />
                            </div>

                            <h4 className="text-xl font-bold text-slate-900">
                                +312%
                            </h4>

                            <p className="text-sm text-slate-500">
                                SEO Growth
                            </p>
                        </motion.div>

                        {/* Floating Card 2 */}

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 5,
                            }}
                            className="absolute -right-5 top-48 hidden rounded-2xl bg-white p-5 shadow-2xl lg:block"
                        >
                            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 text-white">
                                <Briefcase size={22} />
                            </div>

                            <h4 className="text-xl font-bold text-slate-900">
                                250+
                            </h4>

                            <p className="text-sm text-slate-500">
                                Projects
                            </p>
                        </motion.div>

                        {/* Floating Card 3 */}

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 4.5,
                            }}
                            className="absolute left-10 -bottom-6 hidden rounded-2xl bg-white p-5 shadow-2xl lg:block"
                        >
                            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-lime-500 text-white">
                                <Star size={22} />
                            </div>

                            <h4 className="text-xl font-bold text-slate-900">
                                4.9★
                            </h4>

                            <p className="text-sm text-slate-500">
                                Client Rating
                            </p>
                        </motion.div>

                    </motion.div>
                </div>
            </div>

            {/* Bottom Gradient */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
}