import React, { useContext, useEffect, useState } from "react";
import { images } from "../assets/svgs";
import { BlogContext } from "../context/BlogContext";
import axios from "axios";

const Posts = () => {
  const [data, setData] = useState([]);
  const { url } = useContext(BlogContext);

  useEffect(() => {
    axios.get(`${url}/post/allposts`).then((response) => {
      const res = response.data.posts;
      setData(res);
    }).catch((error)=>{
      console.error("Error Occurred Fetcing the details")
  })
  }, []);

  return (
    <>
      <div className="my-8">
        <h1 className="text-3xl font-bold my-5">Posts</h1>
        <div>
          {/* Posts */}
          {data.length > 0 ? (
            data.map((item) => (
              <div
                key={item.id} // Ensure you have a unique key for each item
                className="w-[750px] border border-gray-600 p-5 rounded-lg flex flex-row gap-5 my-3 cursor-pointer"
              >
                <div>
                  <img
                    src={images.image_1}
                    alt="image_1"
                    className="w-40 rounded-sm"
                  />
                </div>
                <div>
                  <h2 className="font-bold hover:text-purple-500">
                    {item.title}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.content }}
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
