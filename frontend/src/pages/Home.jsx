import React, { useContext, useEffect, useState } from "react";
import MainHeaderImage from "../components/MainHeaderImage";
import FourHeaderImages from "../components/FourHeaderImages";
import FeaturedPosts from "../components/FeaturedPosts";
import Labels from "../components/Labels";
import PopularPosts from "../components/PopularPosts";
import RecentPosts from "../components/RecentPosts";
import Trending from "../components/Trending";
import GoToTopButton from "../components/GoToTopButton";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [labelData, setLabelData] = useState([]);
  const { url } = useContext(StoreContext)
  
  async function getPosts(){
    axios.get(`${url}/post/allposts`).then((res)=>{
      const allPosts = res.data.posts;
      const reverseData = allPosts.reverse();
      setData(reverseData)
      localStorage.setItem("data", JSON.stringify(reverseData));
    })
  }

  async function getPostLabels(){
    axios.get(`${url}/post/labels`).then((res)=>{
      const allLabels = res.data.Labels;
      const reverseLabels = allLabels.reverse();
      setLabelData(reverseLabels)
      localStorage.setItem("labels", JSON.stringify(reverseLabels));
    })
  }

  useEffect(() => {
    getPosts()
    getPostLabels()
  }, [])
  
  return (
    <>
      <header className="mb-5 mt-8">
        <div className="flex lg:flex-row flex-col lg:gap-5 gap-3 justify-center items-center">
          <MainHeaderImage/>
          <FourHeaderImages />
        </div>
      </header>

      <main className="font-poppins flex flex-row justify-center gap-10 mx-28">
        <div className="my-10">
          <FeaturedPosts />
          <PopularPosts />
          <RecentPosts />
        </div>

        <div className="my-10">
          <Labels />
          <Trending />
        </div>
      </main>

      <div className="font-poppins">
        <GoToTopButton/>
      </div>
    </>
  );
};

export default Home;
