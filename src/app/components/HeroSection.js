'use client'
import Image from "next/image";
import React from "react";
import { assets } from "../../../public/assets";

export default function Hero() {
    console.log(assets);
    
  return (
    <main className="flex flex-1 items-center justify-between px-12 py-20 space-x-12 max-w-6xl mx-auto">
      {/* Left Content */}
      <div className="max-w-lg">
        <h1 className="text-3xl font-extrabold mb-4">
          Lorem ipsum dolor sit amet
        </h1>
        <p className="mb-8 text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis
          elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea
          morbi libero imperdiet neque. Justo suspendisse tristique posuere quis
          eget viverra. Nunc euismod ultrices etiam nulla habitasse.
        </p>

        <form className="flex items-center space-x-4 mb-4">
          <input
            type="email"
            placeholder="example@mail.com"
            className="border border-gray-300 rounded px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-800 flex items-center"
          >
            Subscribe →
          </button>
        </form>

        <div className="flex items-center space-x-2 text-blue-700 font-semibold">
          <CheckMarkIcon />
          <span>No credit required!</span>
        </div>
      </div>

      {/* Right Image */}
      <div
        className="relative overflow-hidden"
        style={{ clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      >
        <Image
          src={assets?.HeroImage?.src}
          width={500}
          height={400}
          alt="Hero-image"
        />
      </div>
    </main>
  );
}

function CheckMarkIcon() {
  return (
    <svg
      className="w-5 h-5 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M7.629 13.314l-3.314-3.314-1.415 1.415 4.729 4.729 10-10-1.415-1.414z" />
    </svg>
  );
}
