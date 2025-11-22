import Image from "next/image";
import React from "react";
import { assets } from "../../public/assets";

function SocialMedia() {
  return (
    <div className="bg-gray-100 md:py-4">
      <div className="px-8 max-w-7xl mx-auto md:mt-20 my-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center grid-flow-dense gap-8 md:gap-0 ">
          <div>
            <p className="text-base text-blue-600 font-semibold">Lorem Ipsum</p>
            <h1 className="md:text-4xl text-xl font-bold text-black md:py-4">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="text-gray-700 text-base">
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
          </div>

          {/* Right side image */}
          <div>
            <Image
              alt="img"
              src={assets?.phone?.src}
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
