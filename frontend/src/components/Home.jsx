import React from "react";
import { images } from "../assets/svgs";
const Home = () => {
  return (
    <>
      <header className="my-10">
        <main className="flex lg:flex-row flex-col lg:gap-5 gap-3 justify-center items-center">
          <div className="relative text-left text-white cursor-pointer transition-all hover:scale-95">
            <img
              src={images.image_1}
              alt="image_1"
              className="lg:w-[600px] w-[300px]"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-[325px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold w-[550px] font-poppins">
              How to center a div using HTML, and Tailwind CSS{" "}
            </div>
          </div>
          <div className="lg:flex lg:flex-col gap-3">
            <div className="flex lg:flex-row flex-col gap-3">
              <div className="relative text-left text-white cursor-pointer transition-all hover:scale-95">
                <img src={images.image_2} alt="image_2" className="w-[300px]" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute top-[150px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-md font-bold w-[275px] font-poppins">
                  How to center a div using HTML, and Tailwind CSS{" "}
                </div>
              </div>
              <div className="relative text-left text-white cursor-pointer transition-all hover:scale-95">
                <img src={images.image_3} alt="image_2" className="w-[300px]" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute top-[150px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-md font-bold w-[275px] font-poppins">
                  How to center a div using HTML, and Tailwind CSS{" "}
                </div>
              </div>
            </div>
            <div className="lg:flex lg:flex-row gap-3 hidden lg:static">
              <div className="relative text-left text-white cursor-pointer transition-all hover:scale-95">
                <img src={images.image_4} alt="image_2" className="w-[300px]" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute top-[150px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-md font-bold w-[275px] font-poppins">
                  How to center a div using HTML, and Tailwind CSS{" "}
                </div>
              </div>
              <div className="relative text-left text-white cursor-pointer transition-all hover:scale-95">
                <img src={images.image_5} alt="image_2" className="w-[300px]" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute top-[150px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-md font-bold w-[275px] font-poppins">
                  How to center a div using HTML, and Tailwind CSS{" "}
                </div>
              </div>
            </div>
          </div>
        </main>
      </header>
    </>
  );
};

export default Home;
