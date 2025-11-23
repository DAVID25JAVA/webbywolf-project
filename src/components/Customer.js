"use client";
import React from "react";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { assets } from "../../public/assets";
import { motion } from "framer-motion";

function Customer() {
  // Fade + Slide Up Animation
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gray-100 py-10 md:my-36 my-10 mt-14 relative">
      {/* Bottom Gradient Line */}
      <div className="absolute left-0 bottom-0 h-6 w-[95%] bg-linear-to-r from-blue-900 via-green-500 to-purple-900"></div>

      <div className="max-w-7xl mx-auto md:px-8 px-4">
        <div>
          {/* Heading */}
          <motion.h1
            className="font-extrabold md:text-3xl text-2xl text-blue-700"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Lorem ipsum dolor sit <br /> amet consectetur. <br /> Dignissim tellus.
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="text-base text-gray-700 py-5 max-w-xl"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit
            laoreet urna sapien quam pulvinar...
          </motion.p>

          {/* Button */}
          <motion.button
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex mb-12 sm:mb-10 md:mb-0 items-center gap-2 text-white bg-blue-700 hover:bg-blue-600 px-3 py-1 mt-3"
          >
            Lorem Ipsum <MoveRight />
          </motion.button>

          {/* Card */}
          <motion.div
            className="bg-white max-w-lg p-5 shadow-lg mt-5 relative md:top-28"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <p className="text-gray-700 font-semibold text-lg">Lorem ipsum dolor sit</p>
            <p className="text-gray-700 text-base pt-5">Lorem ipsum dolor sit amet...</p>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut...
            </p>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae...
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="absolute -top-14 right-0 hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <Image alt="img" src={assets?.frined?.src} width={500} height={400} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
