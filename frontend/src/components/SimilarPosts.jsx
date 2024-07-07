import React from "react";
import { images } from "../assets/svgs"

const SimilarPosts = () => {
  return (
    <>
      <div className="my-8">
        <div className="bg-purple-600 text-white py-2 text-xl px-5 w-56 text-left">
          Similar Posts
        </div>
        <div>
          <div className="my-8 w-[225px] flex flex-col h-fit gap-5">
            <div className="w-[225px]">
              <img
                src={images.image_1}
                alt="feature_image"
                className="object-cover w-full h-full transition-all cursor-pointer hover:scale-95"
              />
            </div>
            <div>
              <h1 className="font-bold text-md cursor-pointer transition-all hover:text-purple-600">
                How to center a Div using HTML and Tailwind CSS
              </h1>
            </div>
          </div>
          <div className="my-8 w-[225px] flex flex-col h-fit gap-5">
            <div className="w-[225px]">
              <img
                src={images.image_1}
                alt="feature_image"
                className="object-cover w-full h-full transition-all cursor-pointer hover:scale-95"
              />
            </div>
            <div>
              <h1 className="font-bold text-md cursor-pointer transition-all hover:text-purple-600">
                How to center a Div using HTML and Tailwind CSS
              </h1>
            </div>
          </div>
          <div className="my-8 w-[225px] flex flex-col h-fit gap-5">
            <div className="w-[225px]">
              <img
                src={images.image_1}
                alt="feature_image"
                className="object-cover w-full h-full transition-all cursor-pointer hover:scale-95"
              />
            </div>
            <div>
              <h1 className="font-bold text-md cursor-pointer transition-all hover:text-purple-600">
                How to center a Div using HTML and Tailwind CSS
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimilarPosts;
