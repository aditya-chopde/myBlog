import React from "react";
import { images } from "../assets/svgs";

const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center mb-10">About Us</h1>
        <div className="w-[1000px]">
          <div>
            <div className="flex flex-row justify-center items-center gap-10 text-md">
              <div className="w-[750px]">
                <p>
                  At myBlogs, we believe in the power of words and the beauty of
                  sharing stories. Our platform is dedicated to providing a
                  space where writers can express their thoughts, share their
                  experiences, and connect with a global audience.
                </p>
                <br />
                <p>
                  Whether you are a seasoned writer or just starting, myBlogs is
                  the perfect place to showcase your talent and reach out to
                  like-minded individuals. We offer a user-friendly interface,
                  customizable profiles, and a community that supports and
                  inspires.
                </p>
              </div>
              <div>
                <img
                  src={images.about}
                  alt="about_image"
                  className="w-[750px]"
                />
              </div>
            </div>
            <br />
            <p>
              {" "}
              Join us on this journey of exploration and creativity. Share your
              stories, read the works of others, and become part of a vibrant
              community of bloggers.
            </p>
            <br />
            <p className="font-bold">
              Thank you for being a part of myBlogs. We look forward to seeing
              the amazing content you'll create!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
