import React from "react";
import { images } from "../assets/svgs";
import MainHeaderImage from "../components/MainHeaderImage";
import FourHeaderImages from "../components/FourHeaderImages";
import FeaturedPosts from "../components/FeaturedPosts";
const Home = () => {
  return (
    <>
      <header className="my-10">
        <main className="flex lg:flex-row flex-col lg:gap-5 gap-3 justify-center items-center">
          <MainHeaderImage />
          <FourHeaderImages />
        </main>
      </header>

      <article className="font-poppins">
        <FeaturedPosts/>
      </article>
    </>
  );
};

export default Home;
