import React, { useContext, useEffect, useState } from "react";
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
  const [label, setLabel] = useState("");
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newLabel, setNewLabel] = useState("");

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

  const handleLabelChange = (e) => {
    setLabel(e.target.value);
  };

  const handleAddLabel = (e) => {
    axios
      .post(`${url}/post/create-label`, {
        labelname: newLabel,
      })
      .then((res) => {
        alert(res.data.message)
      });
    
    setIsModalOpen(false)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", file);
    formData.append("labelName", label);
    formData.append("content", content);

    axios
      .post(`${url}/post/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert(res.data.message)
      });

    navigate("/");
  };

  const getLabels = () => {
    axios.get(`${url}/post/labels`).then((res) => {
      const labelData = res.data.Labels;
      const reverseData = labelData.reverse();
      setData(reverseData);
    });
  };

  useEffect(() => {
    getLabels();
  }, []);

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
        <div className="my-3">
          <label htmlFor="title" className="pr-5 font-bold my-3 py-2">
            Add Label:
          </label>
          <select
            name="label"
            id="label"
            className="border border-black rounded-sm px-1"
            value={label}
            onChange={handleLabelChange}
          >
            <option value="">Choose an Label</option>
            {data.map((item) => (
              <option key={item._id} value={`${item._id}`}>
                {item.labelName}
              </option>
            ))}
          </select>
          <button
          type="button"
            className="mx-5 bg-purple-600 text-white px-5 py-2 rounded-lg hover:rounded-none transition-all"
            onClick={() => setIsModalOpen(true)}
          >
            Add Label
          </button>
        </div>
        <Editor onChange={handleContentChange} />
      </div>
      <button
        type="submit"
        className="bg-purple-600 rounded-md text-white px-3 py-2 cursor-pointer my-16"
      >
        Submit Post
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h3 className="text-xl font-bold mb-4">Add New Label</h3>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full rounded mb-4"
              placeholder="Enter new label"
              value={newLabel}
              onChange={(e) => setNewLabel(e.target.value)}
            />
            <button
              type="button"
              className="bg-green-500 text-white px-4 py-2 rounded mr-2"
              onClick={handleAddLabel}
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

export default Create;
