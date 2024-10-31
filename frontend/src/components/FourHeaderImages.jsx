import React from "react";

const FourHeaderImages = () => {
  const getData = JSON.parse(localStorage.getItem("data"));
  return (
    <>
      <div className="lg:flex lg:flex-col gap-3">
        <div className="flex lg:flex-row flex-col gap-3">
          <div className="relative text-left text-white cursor-pointer transition-all hover:scale-95 w-[250px]">
            <img
              src={`${getData[1].image_path}`}
              alt="image_2"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-[125px] left-1/2 transform -translate-x-1/2 -translate-y-full text-md font-normal w-[225px] font-poppins">
              {getData[1].title}
            </div>
          </div>
          <div className="relative text-left text-white cursor-pointer transition-all hover:scale-95 w-[250px]">
            <img
              src={`${getData[2].image_path}`}
              alt="image_2"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-[125px] left-1/2 transform -translate-x-1/2 -translate-y-full text-md font-normal w-[225px] font-poppins">
              {getData[2].title}
            </div>
          </div>
        </div>
        <div className="lg:flex lg:flex-row gap-3 hidden lg:static">
          <div className="relative text-left text-white cursor-pointer transition-all hover:scale-95 w-[250px]">
            <img
              src={`${getData[3].image_path}`}
              alt="image_2"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-[125px] left-1/2 transform -translate-x-1/2 -translate-y-full text-md font-normal w-[225px] font-poppins">
              {getData[3].title}
            </div>
          </div>
          <div className="relative text-left text-white cursor-pointer transition-all hover:scale-95 w-[250px]">
            <img
              src={`${getData[4].image_path}`}
              alt="image_2"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-[125px] left-1/2 transform -translate-x-1/2 -translate-y-full text-md font-normal w-[225px] font-poppins">
              {getData[4].title}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourHeaderImages;
