import React from "react";
import Post from "../components/Post";
import SimilarPosts from "../components/SimilarPosts"
import { useParams } from "react-router-dom";

const BlogPage = () => {
  const { id } = useParams()
  return (
    <>
      <main className="flex flex-row justify-around my-16 mx-52">
        <div>
          <Post />
        </div>
        <div>
          <SimilarPosts/>
        </div>
      </main>
    </>
  );
};

export default BlogPage;
