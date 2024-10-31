import React, { useContext, useEffect, useState } from "react";
import { images, svg } from "../assets/svgs";
import { BlogContext } from "../context/BlogContext";
import axios from "axios";

const   Posts = () => {
  const [data, setData] = useState([]);
  const { url } = useContext(BlogContext);
  const maxLength = 120;

  function deletePost(id) {
    axios.post(`${url}/post/delete/${id}`).then((res) => {
      console.log(res);
    });
  }

  function getPosts() {
    axios
      .get(`${url}/post/allposts`)
      .then((response) => {
        const res = response.data.posts;
        setData(res.reverse());
      })
      .catch((error) => {
        console.error("Error Occurred Fetcing the details");
      });
  }

  useEffect(() => {
    getPosts();
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
                key={item._id}
                className="w-[750px] border border-gray-600 px-3 rounded-lg my-5 flex justify-around"
              >
                <div className="flex flex-row gap-5 my-3 cursor-pointer">
                  <div className="w-40 flex justify-center items-center">
                    <img
                      src={`${item.image_path}`}
                      alt="image_1"
                      className="w-full h-24 object-cover rounded-sm"
                    />
                  </div>
                  <div className="w-[450px]">
                    <h1 className="font-bold text-lg hover:text-purple-500">
                      {item.title}
                    </h1>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${item.content.substring(0, maxLength)}.....`,
                        }}
                      />
                  </div>
                </div>
                <div className="flex mb-2 gap-3">
                  <img
                    src={svg.delete_svg}
                    alt="delete_post"
                    className="w-5 transition-all hover:scale-125 cursor-pointer"
                    onClick={() => deletePost(item._id)}
                  />
                  <img
                    src={svg.edit}
                    alt="delete_post"
                    className="w-6 transition-all hover:scale-125 cursor-pointer"
                  />
                  <img
                    src={svg.view}
                    alt="delete_post"
                    className="w-6 transition-all hover:scale-125 cursor-pointer"
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
