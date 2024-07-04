import { images } from "../assets/svgs";
import React from "react";

const PopularPosts = () => {
  return (
    <>
      <div>
        <div className="bg-purple-600 text-white text-left py-2 text-xl px-5 w-full">
          Popular
        </div>
        <div className="my-10 w-[800px] flex flex-row h-fit gap-5">
          <div className="w-[250px]">
            <img
              src={images.image_1}
              alt="feature_image"
              className="object-cover w-full h-full transition-all cursor-pointer hover:scale-95 mb-3"
            />
          </div>
          <div>
            <h1 className="font-bold text-lg cursor-pointer transition-all hover:text-purple-600">
              How to center a Div using HTML and Tailwind CSS
            </h1>
            <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                excepturi nisi asperiores illo voluptas quasi facilis dolores!
                Eum, ipsa corporis..
              </p>
          </div>
        </div>
        <div className="my-10 w-[800px] flex flex-row h-fit gap-5">
          <div className="w-[250px]">
            <img
              src={images.image_1}
              alt="feature_image"
              className="object-cover w-full h-full transition-all cursor-pointer hover:scale-95 mb-3"
            />
          </div>
          <div>
            <h1 className="font-bold text-lg cursor-pointer transition-all hover:text-purple-600">
              How to center a Div using HTML and Tailwind CSS
            </h1>
            <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                excepturi nisi asperiores illo voluptas quasi facilis dolores!
                Eum, ipsa corporis..
              </p>
          </div>
        </div>
        <div className="my-10 w-[800px] flex flex-row h-fit gap-5">
          <div className="w-[250px]">
            <img
              src={images.image_1}
              alt="feature_image"
              className="object-cover w-full h-full transition-all cursor-pointer hover:scale-95 mb-3"
            />
          </div>
          <div>
            <h1 className="font-bold text-lg cursor-pointer transition-all hover:text-purple-600">
              How to center a Div using HTML and Tailwind CSS
            </h1>
            <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                excepturi nisi asperiores illo voluptas quasi facilis dolores!
                Eum, ipsa corporis..
              </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularPosts;
