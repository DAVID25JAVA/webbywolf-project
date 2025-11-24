import React from "react";
import { assets, secondHeroSection } from "../../public/assets";
import Image from "next/image";
import { MoveRight, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

function SecondHeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto md:px-4"
    >
      <div className="relative mx-5 shadow-[0px_0px_10px_rgba(0,0,0,0.3)] md:p-5 px-3 py-5 md:py-14 mt-10 md:mt-14 bg-white rounded-xl">
        {/* Gradient Bottom Border */}
        <div className="absolute left-0 bottom-0 h-6 w-full bg-linear-to-r from-blue-900 via-green-500 to-purple-900"></div>

        <p className="text-lg text-blue-600 font-semibold">
          Lorem ipsum dolor sit
        </p>

        <div className="flex justify-between gap-5 items-center mt-1">
          {/* left side content */}
          <div className="md:w-[50%] w-full">
            <h1 className="heading  uppercase">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="text-[--color-text-primary] md:leading-7 pt-3">
              Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
              facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget
              integer in nam. Non nisl iaculis at felis aliquet. Hendrerit
              tellus at purus lectus.
            </p>

            {secondHeroSection?.map((item) => (
              <motion.div
                key={item?.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 pt-2 md:pt-3"
              >
                <Image
                  alt="img"
                  src={item?.img}
                  className="w-36 space-y-2 p-2 rounded"
                />
                <p className="  text-text-primary text-sm md:text-base max-w-xs">
                  {item?.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* right side Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block"
          >
            <Image
              alt="img"
              src={assets?.Section1Image?.src}
              width={500}
              height={300}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="pt-8 flex gap-3 pb-10 md:pb-0"
        >
          <button className=" btn-primary flex p-2 gap-2">
            Lorem Ipsum <MoveRight />
          </button>
          <p className="flex gap-2 items-center text-blue-800 font-semibold">
            <PhoneCall size={20} /> 123456789
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default SecondHeroSection;
