import { useState } from "react";
import { motion } from "framer-motion";
import portfolio from "../data/portfolio";
import ProjectCard from "../components/ui/ProjectCard";

const categories = [
  "All",
  "SEO",
  "Web Development",
  "Branding",
  "Marketing",
  "AI",
];

function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? portfolio
      : portfolio.filter((item) => item.category === active);

  return (
    <section
      id="portfolio"
      className="bg-[#F7FBF8] py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#555555]">
            OUR PORTFOLIO
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Recent
            <span className="block text-[#555555]">
              Success Stories
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Explore some of our latest projects that helped businesses
            grow with modern digital solutions.
          </p>

        </motion.div>

        {/* Filter */}

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          {categories.map((item) => (

            <button
              key={item}
              onClick={() => setActive(item)}
              className={`rounded-full px-6 py-3 font-semibold transition ${
                active === item
                  ? "bg-[#2F855A] text-[#555555]"
                  : "bg-white shadow hover:bg-[#2F855A] hover:text-[#555555]"
              }`}
            >
              {item}
            </button>

          ))}

        </div>

        {/* Projects */}

        <motion.div
          layout
          className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3"
        >
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </motion.div>

        {/* Button */}

        <div className="mt-14 text-center">

          <button className="rounded-full bg-[#2F855A] px-8 py-4 font-semibold text-[#555555] transition hover:bg-[#276749]">
            View All Projects
          </button>

        </div>

      </div>
    </section>
  );
}

export default Portfolio;