"use client";
import Image from "next/image";
import React from "react";
import { assets } from "../../public/assets";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

function Poster() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-7xl mx-auto md:px-8 px-4 md:my-20 my-14 relative"
    >
      {/* Heading Animation */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-900 font-extrabold md:text-3xl text-2xl text-center"
      >
        Lorem ipsum dolor sit amet
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-700 text-base text-center py-5"
      >
        Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus
        quis velit fringilla aliquam ultricies. Malesuada ut aliquam at ac est nisi, interdum
        etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit et fringilla habitant
        ut facilisi.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-5xl mx-auto mb-64 md:mb-0 sm:mb-0"
      >
        {/* Image with animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="md:mt-10 my-2 md:my-0"
        >
          <Image alt="img" src={assets?.rider?.src} width={600} height={400} />
        </motion.div>

        {/* Card Animation */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="bg-white shadow-xl p-5 max-w-lg absolute md:top-60 md:right-36"
        >
          <h3 className="text-gray-900 font-semibold text-lg pt-2">Artist & Investor</h3>
          <p className="text-base text-gray-700 pt-3">
            Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada
            tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...
          </p>

          {/* Button Hover Animation */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-blue-700 text-sm font-semibold flex items-center gap-3 pt-5 hover:underline cursor-pointer"
          >
            Read Full Story <MoveRight size={30} />
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Poster;
