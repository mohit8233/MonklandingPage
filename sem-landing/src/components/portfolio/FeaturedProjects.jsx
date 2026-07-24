import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Button from "../ui/Button";

const projects = [
    {
        id: 1,
        category: "Web Development",
        title: "Luxury E-Commerce Platform",
        description:
            "Designed and developed a premium online shopping experience with blazing-fast performance, AI-powered recommendations, and seamless checkout.",
        challenge:
            "The client had an outdated website with poor conversions and slow loading speed.",
        solution:
            "We redesigned the UI, optimized performance, improved SEO, and implemented a scalable React architecture.",
        result: "+320% Revenue Growth",
        tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600",
    },
    {
        id: 2,
        category: "SEO",
        title: "Enterprise SEO Campaign",
        description:
            "A complete SEO transformation that dramatically increased visibility, rankings, and qualified organic traffic.",
        challenge:
            "The website wasn't ranking for important business keywords.",
        solution:
            "Performed technical SEO, Core Web Vitals optimization, content strategy, and authority link building.",
        result: "+450% Organic Traffic",
        tech: ["SEO", "GA4", "Ahrefs", "Search Console"],
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600",
    },
];

export default function FeaturedProjects() {
    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto mb-14 max-w-3xl text-center lg:mb-20"
                >
                    <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
                        Featured Projects
                    </span>

                    <h2 className="mt-6 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        Real Projects.
                        <span className="block text-emerald-600">
                            Real Results.
                        </span>
                    </h2>

                    <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                        Explore some of our most successful digital experiences
                        crafted for ambitious businesses around the globe.
                    </p>
                </motion.div>

                {/* Projects */}

                <div className="space-y-16 lg:space-y-24">

                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 70 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="grid items-center gap-10 overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-5 shadow-sm md:p-8 lg:grid-cols-2 lg:gap-16 lg:p-10"
                        >
                            {/* Image */}

                            <div
                                className={`overflow-hidden rounded-3xl ${index % 2 !== 0 ? "lg:order-2" : ""
                                    }`}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-64 w-full object-cover transition duration-700 hover:scale-105 sm:h-80 lg:h-[460px]"
                                />
                            </div>

                            {/* Content */}

                            <div
                                className={`${index % 2 !== 0 ? "lg:order-1" : ""
                                    }`}
                            >
                                <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                                    {project.category}
                                </span>

                                <h3 className="mt-5 text-2xl font-black leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
                                    {project.title}
                                </h3>

                                <p className="mt-5 text-base leading-8 text-slate-600">
                                    {project.description}
                                </p>
                                <div className="mt-8 space-y-6">

                                    <div>
                                        <h4 className="font-bold text-slate-900">
                                            Challenge
                                        </h4>

                                        <p className="mt-2 leading-7 text-slate-600">
                                            {project.challenge}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-slate-900">
                                            Solution
                                        </h4>

                                        <p className="mt-2 leading-7 text-slate-600">
                                            {project.solution}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-slate-900">
                                            Result
                                        </h4>

                                        <p className="mt-2 text-lg font-bold text-emerald-600">
                                            {project.result}
                                        </p>
                                    </div>

                                </div>

                                <div className="mt-8 flex flex-wrap gap-3">

                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}

                                </div>

                                <Button
                                    className="mt-10"
                                    rightIcon={
                                        <ArrowUpRight
                                            size={18}
                                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                        />
                                    }
                                >
                                    View Case Study
                                </Button>
                            </div>

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}