import React from "react";
import { images } from "../assets/svgs";

const Post = () => {
  return (
    <>
      <header>
        <h1 className="font-bold text-2xl font-poppins my-3">
          How to center a div using HTML and Tailwind CSS
        </h1>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[350px] my-3">
            <img
              src={images.image_1}
              alt="image_post"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>
      <main className="w-[750px]">
        <div className="my-10">
          <p className="text-justify">
            &nbsp; &nbsp; &nbsp; &nbsp;Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Ut fugit quisquam, earum harum quo a voluptatem
            tempora laboriosam dicta id labore debitis? Totam, ducimus
            consequatur? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nulla hic, doloremque nostrum corporis dolorem ea quis animi,
            consequuntur quasi necessitatibus, praesentium modi saepe quam
            temporibus! Itaque, consequatur, vero laborum, alias fugiat placeat
            consectetur vel nemo architecto accusamus incidunt accusantium
            excepturi ab aut fuga rem natus reiciendis recusandae minima
            inventore? Veniam?
          </p>{" "}
          <br />
          <p className="text-justify">
            &nbsp; &nbsp; &nbsp; &nbsp;Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nam qui a accusamus saepe quos obcaecati
            praesentium veniam, incidunt ullam repellendus sunt amet. Magni
            dicta incidunt reiciendis numquam, accusamus nobis minus. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            consectetur libero harum consequatur quo aliquid obcaecati quidem
            officia provident quas!
          </p>
          <br />
          <p className="text-justify">
            &nbsp; &nbsp; &nbsp; &nbsp;Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nam qui a accusamus saepe quos obcaecati
            praesentium veniam, incidunt ullam repellendus sunt amet. Magni
            dicta incidunt reiciendis numquam, accusamus nobis minus. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            consectetur libero harum consequatur quo aliquid obcaecati quidem
            officia provident quas!
          </p>
          <br />
          <p className="text-justify">
            &nbsp; &nbsp; &nbsp; &nbsp;Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nam qui a accusamus saepe quos obcaecati
            praesentium veniam, incidunt ullam repellendus sunt amet. Magni
            dicta incidunt reiciendis numquam, accusamus nobis minus. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            consectetur libero harum consequatur quo aliquid obcaecati quidem
            officia provident quas!
          </p>
          <br />
          <p className="text-justify">
            &nbsp; &nbsp; &nbsp; &nbsp;Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nam qui a accusamus saepe quos obcaecati
            praesentium veniam, incidunt ullam repellendus sunt amet. Magni
            dicta incidunt reiciendis numquam, accusamus nobis minus. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            consectetur libero harum consequatur quo aliquid obcaecati quidem
            officia provident quas!
          </p>
          <br />
          <p className="text-justify">
            &nbsp; &nbsp; &nbsp; &nbsp;Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nam qui a accusamus saepe quos obcaecati
            praesentium veniam, incidunt ullam repellendus sunt amet. Magni
            dicta incidunt reiciendis numquam, accusamus nobis minus. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            consectetur libero harum consequatur quo aliquid obcaecati quidem
            officia provident quas!
          </p>
        </div>
      </main>
    </>
  );
};

export default Post;
