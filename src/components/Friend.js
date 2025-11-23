"use client";
import Image from "next/image";
import React, { useState } from "react";
import { assets } from "../../public/assets";
import { motion, AnimatePresence } from "framer-motion";

function Friend() {
  const [active, setActive] = useState("Research");

  return (
    <div className="max-w-7xl mx-auto md:px-8 px-4 md:mt-20 mt-14">
      <div className="flex items-center justify-between flex-col md:flex-row sm:flex-row md:gap-8">
        <div>
          <h1 className="text-black md:text-3xl text-2xl font-semibold uppercase">
            Lorem ipsum dolor sit amet{" "}
          </h1>

          <div className="flex py-5 gap-2">
            {["Research", "Plan", "Design"].map((step) => (
              <button
                key={step}
                onClick={() => setActive(step)}
                className={`md:w-32 w-full text-center border border-gray-300 py-2 rounded-lg transition-all duration-200
              ${
                active === step
                  ? "bg-gray-200 text-gray-700 shadow-md"
                  : "text-gray-700 hover:bg-gray-300"
              }`}
              >
                {step}
              </button>
            ))}
          </div>

          {/* Animation for text change */}
          <AnimatePresence mode="wait">
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-gray-700 text-base max-w-lg"
            >
              {active === "Research" &&
                "Egestas fringilla aliquam leo, habitasse arcu varius lorem elit."}
              {active === "Plan" &&
                "Neque pellentesque donec et tellus ac varius tortor, bibendum."}
              {active === "Design" &&
                "Purus malesuada placerat arcu at enim elit in accumsan."}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="mt-10">
          <Image alt="img" src={assets?.hands?.src} width={550} height={500} />
        </div>
      </div>
    </div>
  );
}

export default Friend;
