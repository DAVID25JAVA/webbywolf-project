"use client";
import React from "react";
import { assets } from "../../public/assets";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const NoLimitsSectionAdjusted = () => {
  return (
    <div className="bg-gray-50 pt-20 md:pb-[150px] pb-10 px-4 md:px-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Left Content Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-6 flex flex-col justify-start pt-4 pb-8 relative"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-gray-700 uppercase mb-3"
          >
            NO LIMITS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="subheading-lg mb-3 leading-tight"
          >
            LOREM IPSUM DOLOR SIT AMET
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className=" text-text-primary mb-8 max-w-lg pr-12"
          >
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae
            porttitor pharetra tempor quis arcu. Ipsum nullam.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="  btn-primary w-fit shadow-lg hover:bg-blue-700 transition duration-300 flex items-center gap-2"
          >
            Lorem Ipsum <MoveRight />
          </motion.button>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute md:top-[200px] right-0 w-[140px] h-[250px] overflow-hidden hidden lg:block"
          >
            <img
              src={assets?.bike3?.src}
              alt="Bike Image"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            viewport={{ once: true }}
            className="absolute md:top-[80%] right-0 h-[250px] overflow-hidden hidden lg:block"
          >
            <img
              src={assets?.bike6?.src}
              alt="Bike Image"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Image Collage Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="lg:col-span-6 grid grid-cols-6 md:grid-rows-6 gap-3 sm:gap-4 md:h-[600px] w-full relative"
        >
          <div className="col-span-1 row-span-3 md:mt-4 overflow-hidden rounded-lg hidden md:block">
            <img
              src={assets?.bike1?.src}
              alt="Motorcycle night ride"
              className="absolute md:top-20"
            />
          </div>

          <div className="md:col-span-5 md:row-span-3 md:mt-4 overflow-hidden rounded-lg">
            <img
              src={assets?.bike2?.src}
              alt="Night motorcycle headlights"
              className="absolute right-0 md:top-12"
            />
          </div>

          <div className="col-span-6 row-span-2 mt-[200px] md:mt-2 md:h-80 h-48">
            <img
              src={assets?.bike4?.src}
              alt="Sunset ride"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="col-span-2 hidden md:block mt-32">
            <img
              src={assets?.bike7.src}
              alt="Bike parts close-up"
              className="w-full h-22   object-center"
            />
          </div>

          <div className="col-span-4 hidden md:block mt-32">
            <img
              src={assets.bike8.src}
              alt="Back view road ride"
              className="w-full h-22   object-center"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NoLimitsSectionAdjusted;
