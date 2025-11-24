"use client";
import React from "react";
import { bikeBrand } from "../../public/assets";
import Image from "next/image";
import { motion } from "framer-motion";

function Brand() {
  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-inner {
          animation: marqueeScroll 25s linear infinite;
        }
        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      <div className="my-20 max-w-7xl px-8 mx-auto">
        <h1 className="uppercase heading text-center">
          LOREM IPSUM DOLOR SIT AMET <br /> CONSECTETUR. COMMODO LEO AMET.
        </h1>

        {/* 🔁 Row 1 */}
        <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative pt-10">
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-white to-transparent"></div>

          <div className="marquee-inner flex transform-gpu min-w-[200%]">
            {[...bikeBrand, ...bikeBrand].map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-40 shrink-0 flex items-center justify-center"
              >
                <Image alt={brand.name || "Brand"} src={brand.img} className="md:w-32 md:h-32 w-24 h-24 object-contain" />
              </motion.div>
            ))}
          </div>

          <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-l from-white to-transparent"></div>
        </div>

        {/* 🔁 Row 2 (reverse direction) */}
        <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative pt-10">
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-white to-transparent"></div>

          <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%]">
            {[...bikeBrand, ...bikeBrand].map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-40 shrink-0 flex items-center justify-center"
              >
                <Image alt={brand.name || "Brand"} src={brand.img} className="w-16 h-16 object-contain" />
              </motion.div>
            ))}
          </div>

          <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-l from-white to-transparent"></div>
        </div>
      </div>
    </>
  );
}

export default Brand;
