import { motion } from "framer-motion";

const filters = [
  "All",
  "Web Development",
  "SEO",
  "AI Solutions",
  "Branding",
  "Marketing",
  "E-Commerce",
];

export default function PortfolioFilter({
  activeCategory,
  setActiveCategory,
}) {
  return (
    <section className="sticky top-20 z-40 bg-white/90 backdrop-blur-xl border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-5 py-5">

        <div className="flex justify-center overflow-x-auto hide-scrollbar">

          <div className="flex gap-3">

            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setActiveCategory(item)}
                className="relative whitespace-nowrap"
              >
                {activeCategory === item && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 rounded-full bg-emerald-600"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 35,
                    }}
                  />
                )}

                <span
                  className={`relative z-10 block rounded-full px-6 py-3 text-sm font-semibold transition
                  ${
                    activeCategory === item
                      ? "text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {item}
                </span>
              </button>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}