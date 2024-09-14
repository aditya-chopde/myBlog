import React, { useContext, useState } from "react";
import Editor from "./Editor";
import { BlogContext } from "../context/BlogContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  const { url } = useContext(BlogContext);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState(" ");
  const [file, setFile] = useState("");

  const handleContentChange = (content) => {
    setContent(content);
  };

  const handleFileChange = (e) => {
    const getFile = e.target.files[0];
    setFile(getFile);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", file);
    formData.append("content", content);

    axios.post(`${url}/post/create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res)=>{
      console.log(res)
    });

    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      enctype="multipart/form-data"
      method="post"
      className="my-8"
    >
      <h2 className="text-3xl font-bold my-5">Create a New Post</h2>
      <div className="my-5 w-[750px]">
        <div>
          <label htmlFor="title" className="pr-5 font-bold">
            Title:{" "}
          </label>
          <input
            type="text"
            onChange={handleTitleChange}
            className="border-b outline-none border-black w-full my-3"
          />
        </div>
        <div className="my-3">
          <label htmlFor="title" className="pr-5 font-bold my-3">
            Add Image:{" "}
          </label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
        <Editor onChange={handleContentChange} />
      </div>
      <button
        type="submit"
        className="bg-purple-600 rounded-md text-white px-3 py-2 cursor-pointer my-16"
      >
        Submit Post
      </button>
    </form>
  );
}

export default Create;
