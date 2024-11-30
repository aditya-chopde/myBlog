import React, { useContext, useEffect, useState } from "react";
import Post from "../components/Post";
import { useParams } from "react-router-dom";
import Labels from "../components/Labels";
import Trending from "../components/Trending";
import axios from "axios";
import { StoreContext } from "../context/StoreContext";

const BlogPage = () => {
  const { id } = useParams();
  const { url } = useContext(StoreContext)
  const [data, setData] = useState("")

  function getPost(){
    axios.get(`${url}/post/${id}`).then((res)=>{
      setData(res.data.post)
    })
  }

  useEffect(() => {
    getPost()
  }, [])
  

  return (
    <>
      <main className="flex flex-row justify-around my-16 mx-52">
        <div>
          <Post data={data}/>
        </div>
        <div>
          <Labels/>
          <Trending/>
        </div>
      </main>
    </>
  );
};

export default BlogPage;
