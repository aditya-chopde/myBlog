import React from "react";

const MainHeaderImage = () => {
  const getData = JSON.parse(localStorage.getItem("data"))
  return (
    <>
      <div
        className="relative text-left text-white cursor-pointer transition-all hover:scale-95 w-[300px] lg:w-[515px] lg:h-[325px]"
        onClick={() => {
          setCurrent("")
          navigate("/blog/:id");
        }}
      >
        <img
          src={`${getData[0].image_path}`}
          alt="image_1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-[285px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-normal w-[450px] font-poppins">
          {getData[0].title}
        </div> 
      </div>
    </>
  );
};

export default MainHeaderImage;
