import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import faqs from "../data/faq";

function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-5">

        <div className="mb-14 text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#555555]">
            FAQ
          </span>

          <h2 className="mt-5 text-3xl font-bold text-[#555555] md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-600">
            Find answers to the most common questions about our services and process.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-[#555555]">
                  {faq.question}
                </h3>

                {active === index ? (
                  <FiMinus className="text-2xl text-[#65C18C]" />
                ) : (
                  <FiPlus className="text-2xl text-[#65C18C]" />
                )}
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-6 leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;