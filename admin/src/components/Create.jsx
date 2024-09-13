import React, { useContext, useState } from "react";
import Editor from "./Editor";
import { BlogContext } from "../context/BlogContext";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate()
  const {url} = useContext(BlogContext)
  const [content, setContent] = useState("");
  const [title, setTitle] = useState(" ");

  const handleContentChange = (content) => {
    setContent(content);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(url+"/post/create", {title, content}).catch((error)=>{
      alert("An Error Occurrecd")
    })
    // Handle form submission logic (e.g., send `postContent` to the server)
    console.log("Post Title: ", title)
    console.log("Post Content:", content);
    navigate("/")

  };

  return (
    <form onSubmit={handleSubmit} className="my-8">
      <h2 className="text-3xl font-bold my-5">Create a New Post</h2>
      <div className="my-5 w-[750px]">
        <label htmlFor="title" className="pr-5 font-bold">
          Title:{" "}
        </label>
        <input type="text" onChange={handleTitleChange} className="border-b outline-none border-black w-full my-3"/>
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
