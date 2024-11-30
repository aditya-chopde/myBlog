import { images } from "../assets/svgs";
import React from "react";

const PopularPosts = () => {
  const getData = JSON.parse(localStorage.getItem("data"));
  const data = getData.slice(0, 5);
  const maxLength = 120;
  return (
    <>
      <div>
        <div className="bg-purple-600 text-white text-left py-2 text-xl px-5 w-full">
          Popular
        </div>
        {data.map((item) => (
          <div key={item._id} className="my-10 w-[800px] flex flex-row h-fit gap-5">
            <div className="w-[250px]">
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
              <div
                className="text-sm"
                dangerouslySetInnerHTML={{
                  __html: `${item.content.substring(0, maxLength)}.....`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularPosts;
