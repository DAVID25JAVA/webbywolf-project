"use client";
import Image from "next/image";
import React, { useState } from "react";
import { assets } from "../../public/assets";

function Friend() {
  const [active, setActive] = useState("Research");

  return (
    <div className="max-w-7xl mx-auto md:px-8 px-4 md:mt-20 mt-14">
      <div className="flex   items-center justify-between flex-col md:flex-row sm:flex-row md:gap-8">
        <div>
          <h1 className="text-black md:text-3xl text-2xl font-semibold uppercase">
            Lorem ipsum dolor sit amet{" "}
          </h1>

          <div className="flex py-5">
            {["Research", "Plan", "Design"].map((step) => (
              <button
                key={step}
                onClick={() => setActive(step)}
                className={`md:w-32 w-full text-center border border-gray-300 py-2
            ${
              active === step
                ? "bg-gray-200 text-gray-700"
                : "  text-gray-700 hover:bg-gray-300"
            }`}
              >
                {step}
              </button>
            ))}
          </div>

          <p className="text-gray-700 text-base max-w-lg ">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
            Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla
            felis ac turpis at amet. Purus malesuada placerat arcu at enim elit
            in accumsan.
          </p>
        </div>

        <div className="mt-10">
          <Image alt="img" src={assets?.hands?.src} width={550} height={500} />
        </div>
      </div>
    </div>
  );
}

export default Friend;
