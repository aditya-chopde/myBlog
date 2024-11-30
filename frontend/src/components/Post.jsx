import React from "react";

const Post = ({ data }) => {
  return (
    <>
      <header>
        <h1 className="font-bold text-2xl font-poppins m-3">{data.title}</h1>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[350px] my-3">
            <img
              src={data.image_path}
              alt="image_post"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>
      <main className="w-[750px]">
        <div className="my-10">
          <div
            className="text-sm text-justify"
            dangerouslySetInnerHTML={{
              __html: `${data.content}`,
            }}
          ></div>{" "}
          <br />
        </div>
      </main>
    </>
  );
};

export default Post;
