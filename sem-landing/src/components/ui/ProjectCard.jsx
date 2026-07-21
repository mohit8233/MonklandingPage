import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-[28px] bg-white shadow-lg"
    >
      {/* Image */}

      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      {/* Category */}

      <span className="absolute left-5 top-5 rounded-full bg-[#2F855A] px-4 py-2 text-xs font-semibold text-[#555555] shadow-lg">
        {project.category}
      </span>

      {/* Content */}

      <div className="space-y-4 p-6">

        <h3 className="text-2xl font-bold text-[#555555] transition group-hover:text-[#555555]">
          {project.title}
        </h3>

        <p className="text-gray-600 leading-7">
          Modern digital solution focused on performance,
          branding and business growth.
        </p>

        <div className="flex items-center justify-between">

          <button className="font-semibold text-[#555555] transition hover:translate-x-2">
            View Case Study
          </button>

          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2F855A] text-[#555555] transition duration-300 group-hover:rotate-45">
            <FiArrowUpRight size={20} />
          </button>

        </div>

      </div>

      {/* Hover Overlay */}

      <div className="absolute inset-0 rounded-[28px] border-2 border-transparent transition duration-500 group-hover:border-[#2F855A]/30"></div>
    </motion.div>
  );
}

export default ProjectCard;