import React from "react";

function SecondBanner() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-screen w-full relative"
      style={{ backgroundImage: `url('/Banner2.png')` }}
    >
      {/* Light black overlay */}
      {/* <div className="absolute inset-0 bg-black/25"></div> */}
      
      {/* Content */}
      <div className="relative z-10 py-8 px-8 max-w-7xl mx-auto">
        <button className="font-bold text-xl bg-gray-300 text-black px-6 uppercase py-2">
          Logo
        </button>
        <div className="flex items-center justify-center h-[calc(100vh-120px)]">
          <p className="text-white text-center max-w-4xl mx-auto font-bold md:text-4xl text-2xl uppercase  leading-10">
            dolor sit amet consectetur. Quis adipiscing purus egestas aliquam
            viverra mi. dolor sit amet consectetur. Quis adipiscing
          </p>
        </div>
      </div>
    </div>
  );
}

export default SecondBanner;