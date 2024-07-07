import React from "react";
import { Link } from "react-router-dom";
import { svg } from "../assets/svgs";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row mx-52 justify-between py-5 px-10 items-center border-t-2 my-5">
        <Link to="/">
          <h1 className="font-bold text-[55px] text-purple-600">myBlogs</h1>
        </Link>
        <div>
          <div className="my-3 flex flex-row gap-3 items-center justify-end">
            <a href="https://github.com/aditya-chopde" target="_blank">
              <img src={svg.github} alt="github" className="w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-chopde-486a102a2/"
              target="_blank"
            >
              <img src={svg.linkedin} alt="github" className="w-6" />
            </a>
            <a href="https://x.com/dev_aditya_ch" target="_blank">
              <img src={svg.twitter} alt="github" className="w-6" />
            </a>
            <a
              href="https://www.instagram.com/adityachopde_here/"
              target="_blank"
            >
              <img src={svg.instagram} alt="github" className="w-6" />
            </a>
          </div>
          <p className="text-sm">
            &copy; Created and Developed by{" "}
            <a
              href="https://www.linkedin.com/in/aditya-chopde-486a102a2/"
              className="font-bold hover:text-purple-600"
            >
              Aditya Chopde
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
