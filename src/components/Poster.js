import Image from "next/image";
import React from "react";
import { assets } from "../../public/assets";
import { MoveRight } from "lucide-react";

function Poster() {
  return (
    <div className="max-w-7xl mx-auto md:px-8 px-4 md:my-20 my-14 relative">
      <p className="text-gray-900 font-extrabold md:text-3xl text-2xl text-center">
        Lorem ipsum dolor sit amet{" "}
      </p>
      <p className="text-gray-700 text-base text-center py-5">
        Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst.
        Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut
        aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget
        purus ornare. Risus elit et fringilla habitant ut facilisi.
      </p>

    <div className="max-w-5xl mx-auto mb-64 md:mb-0 sm:mb-0">
        
      <div className="md:mt-10 my-2 md:my-0">
        <Image alt="img" src={assets?.rider?.src} width={600} height={400} />
      </div>

      <div className="bg-white shadow-xl p-5   max-w-lg absolute md:top-60 md:right-36">
        <h3 className="text-gray-900 font-semibold text-lg pt-2">Artist & Investor</h3>
        <p className="text-base text-gray-700 pt-3 ">
          Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing
          auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac
          arcu amet nisl quis est ...
        </p>
        
        <button className="text-blue-700 text-sm font-semibold flex items-center gap-3 pt-5 hover:underline cursor-pointer">
            Read Full Story <MoveRight size={30} />
        </button>
      </div>
    </div>
       
    </div>
  );
}

export default Poster;
