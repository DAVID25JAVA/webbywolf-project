"use client";
import React from "react";
import { assets, thirdSection } from "../../public/assets";
import Image from "next/image";
import { motion } from "framer-motion";

function ThirdSection() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="md:my-28 my-14 px-8 mx-auto max-w-7xl">
      <div className="flex md:py-14 py-8 relative justify-between items-center gap-10">
        <div className="absolute left-0 bottom-0 h-6 w-full bg-linear-to-r from-blue-900 via-green-500 to-purple-900"></div>

        {/* LEFT CONTENT */}
        <motion.div
          className="max-w-2xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-primary font-bold text-base">
            Lorem ipsum dolor sit amet{" "}
          </p>

          <motion.h1
            className=" heading py-4 uppercase"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Lorem ipsum dolor sit amet consectetur.
          </motion.h1>

          <motion.p
            className="text-base text-text-primary leading-6"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo
            eleifend condimentum in vitae faucibus...
          </motion.p>

          <motion.div
            className="mt-8"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {thirdSection?.map((item) => (
              <div key={item?.id} className="flex gap-3 py-4">
                <div className="w-36 md:w-20">
                  <Image alt="img" src={item?.img} width={70} height={60} />
                </div>
                <div>
                  <p className=" subheading-sm">{item?.tittle}</p>
                  <p className=" text-text-primary pt-1">
                    {item?.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Image
            alt="img"
            src={assets?.Section2Image?.src}
            width={500}
            height={500}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default ThirdSection;
