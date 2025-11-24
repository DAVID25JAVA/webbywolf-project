"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../public/assets";

function SocialMedia() {
  return (
    <div className="bg-gray-100 md:py-4 py-2">
      <div className="px-8 max-w-7xl mx-auto md:mt-16 my-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 md:gap-0">
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-base text-primary font-semibold">Lorem Ipsum</p>
            <h1 className=" subheading-lg md:py-4">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="text-text-primary  text-base pt-2">
              Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet
              morbi suspendisse convallis. Urna a urna lectus donec felis risus
              duis pellentesque. Pellentesque ultricies ipsum.
            </p>
            <div className="flex mt-10 gap-5">
              <Image
                className="cursor-pointer"
                alt="social media image"
                src={assets?.appstore?.src}
                width={160}
                height={160}
              />
              <Image
                className="cursor-pointer"
                alt="social media image"
                src={assets?.playstore?.src}
                width={160}
                height={160}
              />
            </div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <Image
              alt="img"
              src={assets?.phone?.src}
              width={700}
              height={700}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
