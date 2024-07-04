import React from 'react'
import { images } from "../assets/svgs";

const MainHeaderImage = () => {
  return (
    <>
      <div className="relative text-left text-white cursor-pointer transition-all hover:scale-95 w-[300px] lg:w-[500px]">
            <img
              src={images.image_1}
              alt="image_1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-[285px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-normal w-[450px] font-poppins">
              How to center a div using HTML, and Tailwind CSS{" "}
            </div>
          </div>
    </>
  )
}

export default MainHeaderImage
