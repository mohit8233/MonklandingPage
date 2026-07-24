import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Button from "../ui/Button";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.96,
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};
const projects = [
    // ===========================
    // WEB DEVELOPMENT
    // ===========================

    {
        id: 1,
        category: "Web Development",
        title: "Corporate Business Website",
        description:
            "Modern responsive business website designed for maximum performance and lead generation.",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
        stats: [
            { value: "+120%", label: "Engagement" },
            { value: "-40%", label: "Bounce Rate" },
        ],
    },

    {
        id: 2,
        category: "Web Development",
        title: "Real Estate Platform",
        description:
            "High-performance real estate portal with property search and lead management.",
        image:
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200",
        stats: [
            { value: "+210%", label: "Leads" },
            { value: "+84%", label: "Visitors" },
        ],
    },

    // ===========================
    // SEO
    // ===========================

    {
        id: 3,
        category: "SEO",
        title: "Healthcare SEO",
        description:
            "Technical SEO campaign improving rankings, traffic and search visibility.",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
        stats: [
            { value: "+260%", label: "Traffic" },
            { value: "Top 3", label: "Ranking" },
        ],
    },

    {
        id: 4,
        category: "SEO",
        title: "Enterprise SEO",
        description:
            "Complete SEO strategy with content optimization and authority building.",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
        stats: [
            { value: "+340%", label: "Clicks" },
            { value: "+180%", label: "Leads" },
        ],
    },

    // ===========================
    // AI SOLUTIONS
    // ===========================

    {
        id: 5,
        category: "AI Solutions",
        title: "AI Chat Assistant",
        description:
            "AI chatbot automating customer support with intelligent conversations.",
        image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200",
        stats: [
            { value: "24/7", label: "Support" },
            { value: "-72%", label: "Response" },
        ],
    },

    {
        id: 6,
        category: "AI Solutions",
        title: "AI Content Generator",
        description:
            "AI platform creating SEO-ready blogs, product descriptions and marketing copy.",
        image:
            "https://images.unsplash.com/photo-1674027392844-8d2c4f8b72b4?w=1200",
        stats: [
            { value: "+420%", label: "Output" },
            { value: "-80%", label: "Time" },
        ],
    },

    // ===========================
    // BRANDING
    // ===========================

    {
        id: 7,
        category: "Branding",
        title: "Luxury Brand Identity",
        description:
            "Premium branding system including logo, colors and brand guidelines.",
        image:
            "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200",
        stats: [
            { value: "+96%", label: "Recognition" },
            { value: "+82%", label: "Trust" },
        ],
    },

    {
        id: 8,
        category: "Branding",
        title: "Restaurant Branding",
        description:
            "Complete restaurant identity with packaging and social media creatives.",
        image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
        stats: [
            { value: "+170%", label: "Reach" },
            { value: "+115%", label: "Followers" },
        ],
    },

    // ===========================
    // MARKETING
    // ===========================

    {
        id: 9,
        category: "Marketing",
        title: "Google Ads Campaign",
        description:
            "Performance marketing campaign focused on quality leads and ROAS.",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
        stats: [
            { value: "4.8x", label: "ROAS" },
            { value: "+210%", label: "Leads" },
        ],
    },

    {
        id: 10,
        category: "Marketing",
        title: "Meta Ads Campaign",
        description:
            "Facebook & Instagram ads generating scalable conversions.",
        image:
            "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200",
        stats: [
            { value: "+185%", label: "Sales" },
            { value: "+92%", label: "Reach" },
        ],
    },

    // ===========================
    // ECOMMERCE
    // ===========================

    {
        id: 11,
        category: "E-Commerce",
        title: "Fashion Store",
        description:
            "Premium ecommerce experience with secure checkout and fast performance.",
        image:
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200",
        stats: [
            { value: "+260%", label: "Orders" },
            { value: "+130%", label: "Revenue" },
        ],
    },

    {
        id: 12,
        category: "E-Commerce",
        title: "Electronics Marketplace",
        description:
            "Marketplace platform with vendors, analytics and inventory management.",
        image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200",
        stats: [
            { value: "+320%", label: "Sales" },
            { value: "+150%", label: "Customers" },
        ],
    },
];

export default function ProjectGrid({ activeCategory }) {
    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter(
                (project) =>
                    project.category === activeCategory
            );

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fcf8] via-white to-[#f4fbf5] py-16 lg:py-24">

            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-200/40 blur-[120px]" />

            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-green-200/40 blur-[120px]" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >

                    <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
                        Featured Portfolio
                    </span>

                    <h2 className="mt-6 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        Explore Our
                        <span className="block text-emerald-600">
                            Latest Success Stories
                        </span>
                    </h2>

                    <p className="mt-5 text-slate-600 sm:text-lg">
                        Browse our latest work across web development,
                        SEO, AI solutions, branding, marketing and
                        ecommerce.
                    </p>

                </motion.div>

                {/* Grid Starts */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.article
                            variants={cardVariants}
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.08,
                            }}
                            className="group relative overflow-hidden rounded-[30px] border border-slate-200/70 bg-white shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-emerald-300 hover:shadow-[0_25px_80px_rgba(16,185,129,.18)]"
                        >
                            {/* Image */}

                            <div className="relative overflow-hidden">

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                {/* Dark Overlay */}

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                                {/* Glass Gradient */}

                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-transparent to-emerald-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

                                {/* Category */}

                                <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 backdrop-blur-xl">
                                    {project.category}
                                </span>

                                {/* Floating Button */}

                                <div className="absolute bottom-5 right-5 translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl">

                                        <ArrowUpRight
                                            size={22}
                                            className="text-emerald-600"
                                        />

                                    </div>

                                </div>

                            </div>

                            {/* Card Body */}

                            <div className="relative p-6 lg:p-7">

                                <h3 className="text-xl font-black leading-tight text-slate-900 transition duration-300 group-hover:text-emerald-600 lg:text-2xl">
                                    {project.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-slate-600 lg:text-base">
                                    {project.description}
                                </p>

                                {/* Divider */}

                                <div className="my-6 h-px w-full bg-slate-100" />

                                {/* Stats */}

                                <div className="mt-6 grid grid-cols-1 gap-3 min-[280px]:grid-cols-2 rounded-2xl bg-slate-50 p-4">

                                    {project.stats.map((stat) => (
                                        <div
                                            key={stat.label}
                                            className="rounded-xl bg-white p-3 text-center shadow-sm"
                                        >
                                            <h4 className="text-xl font-black text-emerald-600 min-[360px]:text-2xl">
                                                {stat.value}
                                            </h4>

                                            <p className="mt-1 text-[11px] leading-5 text-slate-500 min-[360px]:text-xs">
                                                {stat.label}
                                            </p>
                                        </div>
                                    ))}

                                </div>
                                {/* CTA */}

                                <div className="mt-8 flex items-center justify-between gap-4">

                                    <Button
                                        className="group"
                                        rightIcon={
                                            <ArrowUpRight
                                                size={18}
                                                className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                            />
                                        }
                                    >
                                        View Case Study
                                    </Button>

                                    <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-400 transition-all duration-300 group-hover:border-emerald-200 group-hover:bg-emerald-50 group-hover:text-emerald-600 sm:flex">

                                        <ArrowUpRight
                                            size={20}
                                            className="transition duration-300 group-hover:rotate-45"
                                        />

                                    </div>

                                </div>

                                {/* Bottom Accent */}

                                <div className="mt-6 h-1 w-0 rounded-full bg-gradient-to-r from-emerald-500 to-green-400 transition-all duration-500 group-hover:w-full" />

                            </div>

                        </motion.article>

                    ))}
                </motion.div>

                {/* Empty State */}

                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex min-h-[300px] flex-col items-center justify-center rounded-[32px] border border-dashed border-emerald-200 bg-emerald-50/50 p-10 text-center"
                    >
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
                            <ArrowUpRight
                                size={32}
                                className="rotate-45 text-emerald-600"
                            />
                        </div>

                        <h3 className="mt-6 text-2xl font-bold text-slate-900">
                            No Projects Found
                        </h3>

                        <p className="mt-3 max-w-md text-slate-600">
                            There are currently no projects available in this category.
                            Please choose another category to explore our work.
                        </p>

                        <Button className="mt-8">
                            Explore All Projects
                        </Button>
                    </motion.div>
                )}

            </div>

            {/* Background Decorations */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-emerald-200/20 blur-[120px]" />

                <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-green-200/20 blur-[140px]" />

                <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-100/20 blur-[120px]" />

            </div>
        </section>
    );
}