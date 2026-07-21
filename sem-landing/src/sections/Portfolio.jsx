import { useState } from "react";
import { motion } from "framer-motion";
import portfolio from "../data/portfolio";
import ProjectCard from "../components/ui/ProjectCard";
import Button from "../components/ui/Button";

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
      className="bg-[#F7FBF8] py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-white px-4 py-2 text-xs font-semibold tracking-wide text-[#555555] shadow sm:text-sm">
            OUR PORTFOLIO
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#555555] sm:text-4xl lg:text-5xl">
            Recent
            <span className="block">Success Stories</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Explore some of our latest projects that helped businesses grow
            with modern digital solutions.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-6 sm:py-3 ${
                active === item
                  ? "bg-[#3D3B3B] text-[#BCD0C5] shadow-lg"
                  : "bg-white text-[#555555] shadow hover:bg-[#3D3B3B] hover:text-[#BCD0C5]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Projects */}
        <motion.div
          layout
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Button
            className="bg-[#3D3B3B] px-8 py-4 text-[#BCD0C5] hover:bg-[#2B2B2B]"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;