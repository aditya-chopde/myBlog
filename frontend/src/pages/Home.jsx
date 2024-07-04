import React from "react";
import MainHeaderImage from "../components/MainHeaderImage";
import FourHeaderImages from "../components/FourHeaderImages";
import FeaturedPosts from "../components/FeaturedPosts";
import Labels from "../components/Labels";
import PopularPosts from "../components/PopularPosts";
import RecentPosts from "../components/RecentPosts"
import Trending from "../components/Trending";

const Home = () => {
  return (
    <>
      <header className="mb-5 mt-8">
        <main className="flex lg:flex-row flex-col lg:gap-5 gap-3 justify-center items-center">
          <MainHeaderImage />
          <FourHeaderImages />
        </main>
      </header>

      <main className="font-poppins flex flex-row justify-center gap-10 mx-28">
        <div className="my-10">
          <FeaturedPosts />
          <PopularPosts/>
          <RecentPosts/>
        </div>

        <div className="my-10">
          <Labels/>
          <Trending/>
        </div>
      </main>

      <footer>

      </footer>
    </>
  );
};

export default Home;
