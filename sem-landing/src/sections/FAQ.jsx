import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import faqs from '../data/faq'

function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="faq"
      className="bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">

        {/* Heading */}

        <div className="mb-12 text-center sm:mb-14">

          <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#555555]">
            FAQ
          </span>

          <h2 className="mt-5 text-3xl font-bold text-[#555555] sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Find answers to the most common questions about our
            services and process.
          </p>

        </div>

        {/* FAQ */}

        <div className="space-y-4 sm:space-y-5">

          {faqs.map((faq, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            >

              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
              >

                <h3 className="flex-1 text-lg font-semibold leading-9 text-[#555555]">
                  {faq.question}
                </h3>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#65C18C]/10">

                  <AnimatePresence mode="wait">

                    <motion.div
                      key={active === index ? "minus" : "plus"}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >

                      {active === index ? (
                        <FiMinus className="h-5 w-5 text-[#65C18C]" />
                      ) : (
                        <FiPlus className="h-5 w-5 text-[#65C18C]" />
                      )}

                    </motion.div>

                  </AnimatePresence>

                </div>

              </button>

              <AnimatePresence>

                {active === index && (

                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >

                    <p className="px-5 pb-5 leading-7 text-gray-600 sm:px-6 sm:pb-6">
                      {faq.answer}
                    </p>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;