import React from "react";
import { images } from "../assets/svgs";

const FourHeaderImages = () => {
  return (
    <>
      <div className="lg:flex lg:flex-col gap-3">
        <div className="flex lg:flex-row flex-col gap-3">
          <div className="relative text-left text-white cursor-pointer transition-all hover:scale-95 w-[250px]">
            <img
              src={images.image_2}
              alt="image_2"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-[125px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-md font-normal w-[225px] font-poppins">
              How to center a div using HTML, and Tailwind CSS{" "}
            </div>
          </div>
          <div className="relative text-left text-white cursor-pointer transition-all hover:scale-95 w-[250px]">
            <img src={images.image_3} alt="image_2" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-[125px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-md font-normal w-[225px] font-poppins">
              How to center a div using HTML, and Tailwind CSS{" "}
            </div>
          </div>
        </div>
        <div className="lg:flex lg:flex-row gap-3 hidden lg:static">
          <div className="relative text-left text-white cursor-pointer transition-all hover:scale-95 w-[250px]">
            <img src={images.image_4} alt="image_2" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-[125px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-md font-normal w-[225px] font-poppins">
              How to center a div using HTML, and Tailwind CSS{" "}
            </div>
          </div>
          <div className="relative text-left text-white cursor-pointer transition-all hover:scale-95 w-[250px]">
            <img src={images.image_5} alt="image_2" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-[125px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-md font-normal w-[225px] font-poppins">
              How to center a div using HTML, and Tailwind CSS{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourHeaderImages;
