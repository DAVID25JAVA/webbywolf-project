"use client";
import React from "react";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

function Testimonial() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-7xl mx-auto md:px-8 px-4 md:mt-20 mt-14">
      <motion.div
        className="flex flex-col justify-center gap-5 items-center"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="font-bold text-xl bg-gray-300 text-black px-4 w-28 text-center py-2">
          LOGO
        </div>

        <h1 className="md:text-3xl text-xl text-black uppercase font-bold text-center">
          Lorem ipsum dolor sit amet consectetur. Dui.
        </h1>

        <p className="text-base text-gray-700 max-w-md text-center">
          Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor
          pharetra tempor quis arcu. Ipsum nullam.
        </p>

        <motion.button
          className="flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-600 px-3 py-2 rounded-lg"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Lorem Ipsum <MoveRight />
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Testimonial;
