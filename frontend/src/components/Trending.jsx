import React from "react";
import { images } from "../assets/svgs";
import { useNavigate } from "react-router-dom";

const Trending = () => {
  const getData = JSON.parse(localStorage.getItem("data"));
  const navigate = useNavigate()
  const data = getData.slice(0, 5);
  const maxLength = 120;
  return (
    <>
      <div className="my-8">
        <div className="bg-purple-600 text-white py-2 text-xl px-5 w-56 text-left">
          Trending
        </div>
        <div>
          {data.map((item) => (
            <div key={item._id} className="my-8 w-[225px] flex flex-col h-fit gap-5"
            onClick={() => {
              navigate(`/post/${item._id}`);
            }}>
              <div className="w-[225px]">
                <img
                  src={item.image_path}
                  alt="feature_image"
                  className="object-cover w-full h-full transition-all cursor-pointer hover:scale-95"
                />
              </div>
              <div>
                <h1 className="font-bold text-md cursor-pointer transition-all hover:text-purple-600">
                  {item.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Trending;
