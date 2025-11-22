import React from "react";
import { assets } from "../../public/assets";
import { MoveRight } from "lucide-react";
// import Image from 'next/image'; // Use this for production Next.js

const NoLimitsSectionAdjusted = () => {
  return (
    // Outer container with light background and padding
    <div className="bg-gray-50 pt-20 pb-56 px-4 sm:px-6 lg:px-8">
      {/* Grid container for the main layout (text + image collage) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* --- 1. Left Content Area (Text + Small Vertical Image) --- */}
        <div className="lg:col-span-6 flex flex-col justify-start pt-4 pb-8 relative">
          <p className="text-sm font-bold tracking-widest text-gray-700 uppercase mb-3">
            NO LIMITS
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            LOREM IPSUM DOLOR SIT AMET
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg pr-12">
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae
            porttitor pharetra tempor quis arcu. Ipsum nullam.
          </p>
          <button className="w-fit px-8 py-3 bg-blue-600 text-white font-medium rounded-md shadow-lg hover:bg-blue-700 transition duration-300 flex items-center">
            Lorem Ipsum
            <MoveRight />
          </button>

          {/* Vertical Image (Absolutely positioned next to the text block) */}
          {/* Note: top-[100px] positions the image vertically */}
          <div className="absolute md:top-[200px] right-0 w-[140px] h-[250px] overflow-hidden hidden lg:block">
            <img
              src={assets?.bike3?.src}
              alt="Bikers riding in a dark setting"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute md:top-[80%] right-0 w- h-[250px] overflow-hidden hidden lg:block">
            <img
              src={assets?.bike6?.src}
              alt="Bikers riding in a dark setting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* --- 2. Right Image Collage Area (Spans 6 columns on large screens) --- */}
        {/* Adjusted to 6 columns for better spacing control based on your grid */}
        <div className="lg:col-span-6 grid grid-cols-6 grid-rows-6 gap-3 sm:gap-4 md:h-[600px] w-full relative">
          {/* Top-most Left Image (bike1) - MODIFIED: Taller and Narrower */}
          <div className="col-span-1 row-span-3 md:mt-4 overflow-hidden rounded-lg hidden md:block  ">
            <img
              src={assets?.bike1?.src}
              alt="Motorcycle group riding at night"
              className="absolute md:top-20"
            />
          </div>

          {/* Top-most Right Image (bike2) - MODIFIED: Taller and Wider */}
          <div className="md:col-span-5 md:row-span-3 mt-4 overflow-hidden rounded-lg  ">
            <img
              src={assets?.bike2?.src}
              alt="Night motorcycle headlights"
              className="absolute right-0 md:top-12 "
            />
          </div>

          {/* Middle/Bottom Large Image (Sunset Cliff View) */}
          <div className="col-span-6 row-span-2 mt-22 md:mt-2 md:h-80 h-full  pb-5  ">
            <img
              src={assets?.bike4?.src}
              alt="Bikers watching a sunset over a cliff"
              className=" h-full w-full object-cover"
            />
          </div>

          {/* Bottom right smaller image (bike 7) */}
          {/* <div className='mt-22 '> */}

          <div className="col-span-2">
            <img
              src={assets?.bike7?.src}
              alt="Close-up of bike parts"
              className=" w-full h-full object-center mt-32 hidden md:block "
            />
          </div>

          {/* Bottom Large Image (Back View on Road - bike 8) */}

          <div className="col-span-4   ">
            <img
              src={assets?.bike8?.src}
              alt="Bikers from the back view on a road"
              className="w-full h-full object-center md:mt-32 hidden md:block"
            />
          </div>

          {/* </div> */}
        </div>
      </div>

      {/* --- Footer element visible in the screenshot, positioned below the main grid --- */}
      <div className="max-w-7xl mx-auto h- 16 bg-white border-t border-gray-100 -mt-2.5">
        {/* Placeholder for the thin white bar at the bottom */}
      </div>
    </div>
  );
};

export default NoLimitsSectionAdjusted;
