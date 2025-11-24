"use client";
import React, { useState } from "react";
import { faqData } from "../../public/assets";
import { Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gray-100 py-5 md:mt-20 mt-14">
      <div className="max-w-7xl mx-auto md:px-8 px-4">
        {/* Heading animation */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="uppercase heading"
        >
          FREQUENTLY ASKED QUESTIONS (FAQs)
        </motion.h1>

        <div className="pt-14">
          {faqData?.map((data, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="py-6 px-6 border-t-2 border-gray-600 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <p className=" subheading-sm">
                  {data?.question}
                </p>
                {activeIndex === index ? (
                  <Minus size={26} className="text-gray-800" />
                ) : (
                  <Plus size={26} className="text-gray-800" />
                )}
              </div>

              {/* Smooth toggle answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600 text-base pt-2 max-w-xl"
                  >
                    {data?.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
