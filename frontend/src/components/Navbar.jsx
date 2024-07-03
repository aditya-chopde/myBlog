import React, { useState } from "react";
import { Link } from "react-router-dom";
import { svg } from "../assets/svgs";
const Header = () => {
  const [current, setCurrent] = useState("home");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="font-poppins my-8">
        <div className="flex flex-row justify-around items-center relative">
          {/* Logo  */}
          <div className="cursor-pointer" onClick={() => setCurrent("home")}>
            <Link to="/">
              <h1 className="font-bold text-4xl text-purple-600">myBlogs</h1>
            </Link>
          </div>

          <div onClick={() => setToggle(!toggle)} className="lg:hidden">
            <img
              src={toggle ? svg.cross : svg.hamburger}
              alt="toogle_navbar"
              width={30}
              className="transition-all"
            />
          </div>

          {/* Links  */}
          <div
            className={`items-center absolute lg:static w-full h-screen lg:h-fit lg:w-fit top-[50px] bg-white ${
              toggle ? "" : "hidden"
            } lg:block`}
          >
            <div className="mt-20 lg:mt-0 flex lg:flex-row flex-col gap-8 items-center">
              <ul className="flex lg:flex-row flex-col lg:gap-5 gap-10 lg:text-md text-center">
                <Link to="/">
                  <li
                    className={`${
                      current == "home"
                        ? "lg:border-b-[3px] lg:border-purple-600"
                        : ""
                    } cursor-pointer transition-all`}
                    onClick={() => {
                      setCurrent("home");
                      setToggle(false);
                    }}
                  >
                    Home
                  </li>
                </Link>
                <Link to="about">
                  <li
                    className={`${
                      current == "about"
                        ? "lg:border-b-[3px] lg:border-purple-600"
                        : ""
                    } cursor-pointer transition-all`}
                    onClick={() => {
                      setCurrent("about");
                      setToggle(false);
                    }}
                  >
                    About
                  </li>
                </Link>
                <Link to="policy">
                  <li
                    className={`${
                      current == "policy"
                        ? "lg:border-b-[3px] lg:border-purple-600"
                        : ""
                    } cursor-pointer transition-all`}
                    onClick={() => {
                      setCurrent("policy");
                      setToggle(false);
                    }}
                  >
                    Privacy Policy
                  </li>
                </Link>
                <Link to="contact">
                  <li
                    className={`${
                      current == "contact"
                        ? "lg:border-b-[3px] lg:border-purple-600"
                        : ""
                    } cursor-pointer transition-all`}
                    onClick={() => {
                      setCurrent("contact")
                      setToggle(false)
                    }}
                  >
                    Contact Us
                  </li>
                </Link>
              </ul>
              <button
                className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:rounded cursor-pointer"
                onClick={() => {
                  setCurrent("")
                  setToggle(false)
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
