import React from "react";
import { images } from "../assets/svgs";

const FeaturedPosts = () => {
  return (
    <>
      <div>
        <div className="bg-purple-600 text-white text-left py-2 text-xl px-5 w-full">
          Featured
        </div>
        <div className="flex flex-row gap-8">
          <div className="my-10 w-[250px]">
            <div className="w-[250px]">
              <img
                src={images.image_1}
                alt="feature_image"
                className="object-cover w-full h-full transition-all cursor-pointer hover:scale-95 mb-3"
              />
            </div>
            <div>
              <h1 className="font-bold text-lg cursor-pointer transition-all hover:text-purple-600 my-2">
                How to center a Div using HTML and Tailwind CSS
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                excepturi nisi asperiores illo voluptas quasi facilis dolores!
                Eum, ipsa corporis..
              </p>
            </div>
          </div>
          <div>
            <div className="my-10 w-[500px] flex flex-row h-fit gap-5">
              <div className="w-[150px]">
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
              </div>
            </div>
            <div className="my-10 w-[500px] flex flex-row h-fit gap-5">
              <div className="w-[150px]">
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
              </div>
            </div>
            <div className="my-10 w-[500px] flex flex-row h-fit gap-5">
              <div className="w-[150px]">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedPosts;
