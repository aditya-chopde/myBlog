import React, { useContext, useEffect, useState } from "react";
import { images } from "../assets/svgs";

const FeaturedPosts = () => {
  const getData = JSON.parse(localStorage.getItem("data"));
  const data = getData.slice(0, 5);
  const data2 = data.slice(0, 4);
  const maxLength = 120;
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
                src={data[4].image_path}
                alt="feature_image"
                className="object-cover w-full h-full transition-all cursor-pointer hover:scale-95 mb-3"
              />
            </div>
            <div>
              <h1 className="font-bold text-lg cursor-pointer transition-all hover:text-purple-600 my-2">
                {data[4].title}
              </h1>
              <div
                className="text-sm"
                dangerouslySetInnerHTML={{
                  __html: `${data[4].content.substring(0, maxLength)}.....`,
                }}
              ></div>
            </div>
          </div>
          <div>
            {data2.map((item) => (
              <div key={item._id} className="my-10 w-[500px] flex flex-row h-fit gap-5">
                <div className="w-[150px]">
                  <img
                    src={item.image_path}
                    alt="feature_image"
                    className="object-cover w-full h-full transition-all cursor-pointer hover:scale-95 mb-3"
                  />
                </div>
                <div>
                  <h1 className="font-bold text-lg cursor-pointer transition-all hover:text-purple-600">
                    {item.title}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedPosts;
