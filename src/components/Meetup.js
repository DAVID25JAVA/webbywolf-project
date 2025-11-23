"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../public/assets";
import { MoveRight } from "lucide-react";

function Meetup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="md:mt-20 mt-10 lg:mr-16 2xl:mr-0"
    >
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="2xl:max-w-7xl xl:mx-auto bg-gray-100 relative"
      >
        {/* Animated Gradient Bar */}
        <motion.div
          className="absolute left-0 bottom-0 h-6 w-[95%] bg-linear-to-r from-blue-900 via-green-500 to-purple-900"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity }}
          style={{ backgroundSize: "200% 200%" }}
        />

        <div className="flex flex-col md:flex-row px-4 md:px-0">
          {/* Image with smooth animation */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <Image alt="img" src={assets?.meetup?.src} width={500} height={200} />
          </motion.div>

          {/* Content animation */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              show: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="md:p-14 px-5 mt-14"
          >
            <p className="text-blue-700 text-base font-semibold">Lorem Ipsum</p>
            <p className="text-black font-bold md:text-4xl uppercase text-2xl max-w-lg py-4">
              <span className="text-blue-700">Lorem</span> ipsum dolor sit amet consectetur. Enim donec.
            </p>
            <p className="text-gray-700 text-base max-w-lg">
              Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
            </p>

            <motion.div
              className="flex md:gap-36 gap-20 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-gray-700 font-semibold space-y-3">
                <p>Lorem Ipsum</p><p>Lorem Ipsum</p><p>Lorem Ipsum</p><p>Lorem Ipsum</p>
              </div>
              <div className="text-gray-700 font-semibold space-y-3">
                <p>Lorem Ipsum</p><p>Lorem Ipsum</p><p>Lorem Ipsum</p><p>Lorem Ipsum</p>
              </div>
            </motion.div>

            {/* Button animation */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex mb-12 sm:mb-10 md:mb-0 items-center gap-2 text-white bg-blue-700 hover:bg-blue-600 px-3 py-1 mt-8"
            >
              Lorem Ipsum <MoveRight />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Meetup;
