import React, { useContext, useEffect, useState } from "react";
import { images, svg } from "../assets/svgs";
import { BlogContext } from "../context/BlogContext";
import axios from "axios";

const Posts = () => {
  const [data, setData] = useState([]);
  const { url } = useContext(BlogContext);

  useEffect(() => {
    axios
      .get(`${url}/post/allposts`)
      .then((response) => {
        const res = response.data.posts;
        setData(res.reverse());
      })
      .catch((error) => {
        console.error("Error Occurred Fetcing the details");
      });
  }, []);

  return (
    <>
      <div className="my-8">
        <h1 className="text-3xl font-bold my-5">Posts</h1>
        <div>
          {/* Posts */}
          {data.length > 0 ? (
            data.map((item) => (
              <div className="w-[750px] border border-gray-600 p-5 rounded-lg my-3 relative">
              <div
                key={item._id}
                className="flex flex-row gap-5 my-3 cursor-pointer"
              >
                <div>
                  <img
                    src={images.image_1}
                    alt="image_1"
                    className="w-40 rounded-sm"
                  />
                  
                </div>
                <div className="w-[400px]">
                  <h1 className="font-bold text-xl hover:text-purple-500">
                    {item.title}
                  </h1>
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </div>
              </div>
                <div className="flex justify-end items-end gap-3 absolute top-[125px] right-5">
                    <img
                      src={svg.delete_svg}
                      alt="delete_post"
                      className="w-5 transition-all hover:scale-125"
                    />
                    <img
                      src={svg.edit}
                      alt="delete_post"
                      className="w-6 transition-all hover:scale-125"
                    />
                    <img
                      src={svg.view}
                      alt="delete_post"
                      className="w-6 transition-all hover:scale-125"
                    />
                  </div>
              </div>
            ))
          ) : (
            <p>No posts available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Posts;
