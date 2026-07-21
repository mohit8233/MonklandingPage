import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

function ProjectCard({ project }) {
    return (
        <motion.div
            layout
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="group overflow-hidden rounded-[28px] border border-[#E7ECE9] bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
            {/* Image */}
            <div className="relative overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>

                {/* Category */}
                <span className="absolute left-5 top-5 rounded-full bg-[#BCD0C5] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#3D3B3B] shadow-lg">
                    {project.category}
                </span>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-2xl font-bold text-[#3D3B3B] transition-colors duration-300 group-hover:text-[#65C18C]">
                    {project.title}
                </h3>

                {/* Paragraph */}
                <p className="mt-4 text-[15px] leading-7 text-gray-600">
                    {project.description}
                </p>

                {/* Bottom */}
                <div className="mt-6 flex items-center gap-3">
                    {/* Small Tag */}
                    <span className="flex-1 rounded-full border border-[#BCD0C5] bg-[#EEF6F2] px-4 py-2 text-center text-xs font-medium text-[#3D3B3B] transition-all duration-300 hover:bg-[#65C18C] hover:text-white">
                        {project.category}
                    </span>

                    {/* Arrow */}
                    <button className="group/btn flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#3D3B3B] text-white transition-all duration-300 hover:scale-110 hover:bg-[#65C18C] hover:shadow-lg hover:shadow-[#65C18C]/40">
                        <FiArrowUpRight className="text-xl transition-transform duration-300 group-hover/btn:rotate-45" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectCard;