"use client";
import React from "react";
import { assets } from "../../public/assets";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <main className="relative  flex flex-col md:flex-row flex-1 items-center justify-between px-4 md:px-9 py-10 md:py-20 md:space-x-12 gap-8 max-w-7xl mx-auto z-10">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full md:max-w-lg mt-20 md:pb-56"
      >
        <h1 className="text-4xl font-bold text-black mb-4">
          Lorem ipsum dolor sit amet
        </h1>
        <p className="mb-8 text-gray-700 leading-7">
          Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis
          elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea
          morbi libero imperdiet neque. Justo suspendisse tristique posuere quis
          eget viverra. Nunc euismod ultrices etiam nulla habitasse.
        </p>

        <form className="flex flex-col sm:flex-row items-center sm:space-x-4 gap-4 mb-4">
          <input
            type="email"
            placeholder="example@mail.com"
            className="border text-black placeholder:text-gray-500 border-gray-300 rounded px-4 py-2 w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="bg-blue-700 text-white px-5 py-2 w-full sm:w-auto rounded hover:bg-blue-800 flex items-center justify-center"
          >
            Subscribe →
          </button>
        </form>

        <div className="flex items-center gap-2 text-blue-700 font-semibold">
          <Image
            alt="icon"
            src={assets?.circleCheck?.src}
            width={20}
            height={20}
          />
          <span>No credit required!</span>
        </div>
      </motion.div>
    </main>
  );
}
